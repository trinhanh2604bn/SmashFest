import * as T from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Body, Box, Plane, Sphere, Vec3, World } from 'cannon-es';
import {
  configureImpactWorld, floorGroup, gravity, groundFragments, landingFade, landingHold,
  makeTargetShape, measureContact, shotFractureEnergy, shotMass,
} from './target-impact.js';
import { TargetVisual } from './target-visual.js';
import { createImpactReplay } from './impact-replay.js';
import { createImpactFeedback } from './impact-feedback.js';
import './style.css';

const catalog = [
  ['Hũ cam', 'JamJar_Orange', 'JamJar_Apricot_3DParticle_1x1'],
  ['Hũ xanh', 'JamJar_Blue', 'JamJar_Blueberry_3DParticle_1x1'],
  ['Hũ vàng', 'JamJar_Yellow', 'JamJar_Honey_3DParticle_1x1'],
  ['Hũ hồng', 'JamJar_Pink', 'JamJar_Grapes_3DParticle_1x1'],
  ['Hũ đỏ', 'JamJar_Red', 'JamJar_Strawberry_3DParticle_1x1'],
  ['Hũ đỏ cao', 'JamJar_Red_2y', 'JamJar_Strawberry_3DParticle_1x2'],
  ['Thùng vuông', 'Box_Square', 'Box_3DParticle_1x1'],
];
const get = id => document.getElementById(id);
const picker = get('target');
const layoutPicker = get('layout');
const buttons = ['reference-shot', 'shoot', 'reset', 'intact', 'damaged'].map(get);
catalog.forEach(([name], index) => picker.add(new Option(name, index)));

const step = 1 / 60;
const maxFrameTime = 4 * step;
const shotSpeed = 23;
const deckTop = 1.19;
const width = .7;
const gap = .706;
const layouts = {
  single: [[0, 0, 0]],
  row: [[0, 0, 1.5], [0, 0, .5], [0, 0, -.5], [0, 0, -1.5]],
  tower: [[-1.5, 0, 0], [-.5, 0, 0], [.5, 0, 0], [1.5, 0, 0],
    [-1, 1, -.27], [0, 1, -.27], [1, 1, -.27], [-.5, 2, -.54], [.5, 2, -.54]],
  steps: [[-1, 0, 0], [0, 0, 0], [1, 0, 0], [.2, 1, -.17], [1.24, 1, -.24], [1.66, 2, -.64]],
};
const loader = new GLTFLoader();
const models = new Map();
async function loadModel(name) {
  if (!models.has(name)) {
    models.set(name, loader.loadAsync(`./targets/${name}.glb`).then(({ scene }) =>
      ({ scene, bounds: new T.Box3().setFromObject(scene) })).catch(error => {
      models.delete(name);
      throw error;
    }));
  }
  return models.get(name);
}

function start() {
  const host = get('viewport');
  const renderer = new T.WebGLRenderer({ antialias: devicePixelRatio < 1.5 });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.BasicShadowMap;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  host.append(renderer.domElement);
  const scene = new T.Scene();
  const feedback = createImpactFeedback(scene);
  scene.background = new T.Color('#273541');
  scene.fog = new T.Fog('#273541', 6.5, 16);
  const camera = new T.PerspectiveCamera(40, 1, .1, 30);
  camera.position.set(3.4, 2.8, 4);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, .98, 0);
  controls.enableDamping = true;
  controls.minDistance = 2;
  controls.maxDistance = 9;
  controls.enablePan = false;
  controls.update();
  scene.add(new T.HemisphereLight('#e8edff', '#455b73', 2.1));
  const sun = new T.DirectionalLight('#ffe1bf', 3);
  sun.position.set(-3, 5.2, 3.8);
  sun.castShadow = true;
  sun.shadow.mapSize.set(512, 512);
  sun.shadow.camera.far = 18;
  sun.shadow.camera.updateProjectionMatrix();
  // Move the shadow lookup off the curved GLB surface to avoid self-shadow stripes.
  sun.shadow.normalBias = .025;
  sun.shadow.bias = -.00025;
  scene.add(sun);
  function place(geometry, color, y) {
    const mesh = new T.Mesh(geometry, new T.MeshStandardMaterial({ color, roughness: .57 }));
    mesh.position.y = y;
    mesh.castShadow = mesh.receiveShadow = true;
    scene.add(mesh);
    return mesh;
  }
  const ground = place(new T.PlaneGeometry(80, 80), '#3f5361', 0);
  ground.rotation.x = -Math.PI / 2;
  ground.castShadow = false;
  const tabletop = place(new T.BoxGeometry(1, .15, 1), '#d79e56', deckTop - .075);
  const pedestal = [
    place(new T.CylinderGeometry(.17, .32, 1.04, 10), '#2746a5', .52),
    place(new T.CylinderGeometry(.32, .35, .10, 10), '#d19b51', .05),
  ];
  const ballView = place(new T.SphereGeometry(.22, 20, 16), '#617caa', 0);
  ballView.visible = false;

  const world = new World({ gravity: new Vec3(0, -gravity, 0), allowSleep: true });
  const surfaces = configureImpactWorld(world);
  const floor = new Body({ mass: 0, shape: new Plane(), material: surfaces.floor, collisionFilterGroup: floorGroup });
  floor.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
  world.addBody(floor);
  let deck;
  const marker = new T.Mesh(new T.RingGeometry(.09, .12, 32), new T.MeshBasicMaterial({
    color: '#ffe59a', depthTest: false,
  }));
  marker.renderOrder = 5;
  marker.visible = false;
  scene.add(marker);
  const ray = new T.Raycaster();
  const pointer = new T.Vector2();
  let pointerStart;

  let selected;
  let targets = [];
  const targetsByBody = new Map();
  const floorDebris = new Set();
  let aimed;
  let aimOffset = null;
  let shot;
  let clock = 0;
  let selection = 0;
  let slow = false;
  let referenceSteps = 0;
  let renderDirty = true;
  let liveStatus = '';
  const status = text => {
    if (liveStatus === text) return;
    liveStatus = text;
    get('state').textContent = text;
  };
  const replayViews = new Map();
  const replayPosition = new T.Vector3();
  const replayRotation = new T.Quaternion();
  const supportedBodies = new Set();
  const replay = createImpactReplay({ showFrame, returnToLive });

  function snapshot() {
    return {
      clock,
      cues: feedback.sample(clock),
      projectile: shot?.position.toArray() ?? null,
      targets: targets.map(target => ({
        id: target.body.id,
        position: target.body.position.toArray(),
        quaternion: target.body.quaternion.toArray(),
        damaged: target.damaged,
        part: target.part,
        opacity: target.landedAt === null ? 1 : T.MathUtils.clamp(1 - fadeProgress(target), 0, 1),
      })),
    };
  }

  function showFrame(frame, next, mix) {
    renderDirty = true;
    feedback.draw(frame.cues, T.MathUtils.lerp(frame.clock, next.clock, mix));
    const label = get('state');
    if (label.textContent !== 'Đang xem lại lượt bắn') label.textContent = 'Đang xem lại lượt bắn';
    showFile(frame.targets.some(target => target.damaged));
    targets.forEach(target => { target.view.visible = false; });
    marker.visible = false;
    for (const ghost of replayViews.values()) ghost.view.visible = false;
    for (const state of frame.targets) {
      let ghost = replayViews.get(state.id);
      if (!ghost || ghost.damaged !== state.damaged) {
        if (ghost) {
          scene.remove(ghost.view);
          ghost.visual.dispose();
        }
        const view = state.part === undefined
          ? makeModelView(state.damaged)
          : selected.parts[state.part].view.clone(true);
        ghost = { view, visual: new TargetVisual(view), damaged: state.damaged };
        replayViews.set(state.id, ghost);
        scene.add(view);
      }
      ghost.view.visible = true;
      ghost.view.position.fromArray(state.position);
      ghost.view.quaternion.fromArray(state.quaternion);
      const upcoming = mix > 0 && next.targets.find(target => target.id === state.id);
      let opacity = state.opacity;
      if (upcoming) {
        ghost.view.position.lerp(replayPosition.fromArray(upcoming.position), mix);
        ghost.view.quaternion.slerp(replayRotation.fromArray(upcoming.quaternion), mix);
        opacity = T.MathUtils.lerp(opacity, upcoming.opacity, mix);
      }
      if (opacity < 1 || ghost.visual.fadeMaterials) {
        ghost.visual.fade(opacity);
        ghost.view.traverse(mesh => { if (mesh.isMesh) mesh.castShadow = opacity >= 1; });
      }
    }
    ballView.visible = !!frame.projectile;
    if (frame.projectile) {
      ballView.position.fromArray(frame.projectile);
      if (next.projectile) ballView.position.lerp(replayPosition.fromArray(next.projectile), mix);
    }
  }

  function returnToLive() {
    renderDirty = true;
    for (const ghost of replayViews.values()) {
      scene.remove(ghost.view);
      ghost.visual.dispose();
    }
    replayViews.clear();
    targets.forEach(target => { target.view.visible = true; });
    ballView.visible = !!shot;
    get('state').textContent = liveStatus;
    if (selected) showFile();
  }

  function removeShot() {
    if (!shot) return;
    world.removeBody(shot);
    shot = null;
    ballView.visible = false;
  }

  function discard() {
    renderDirty = true;
    referenceSteps = 0;
    feedback.clear();
    removeShot();
    targets.forEach(removeTarget);
    targets = [];
    aimed = null;
    aimOffset = null;
  }

  function removeTarget(target) {
    targetsByBody.delete(target.body);
    floorDebris.delete(target.body);
    world.removeBody(target.body);
    target.visual.dispose();
    scene.remove(target.view);
  }

  function makeModelView(damaged) {
    const source = damaged ? selected.damaged : selected.intact;
    const size = selected.intact.bounds.getSize(new T.Vector3());
    const center = selected.intact.bounds.getCenter(new T.Vector3());
    const fitted = new T.Group();
    fitted.scale.set(width / size.x, selected.height / size.y, width / size.z);
    const model = source.scene.clone(true);
    model.position.sub(center);
    model.traverse(mesh => { if (mesh.isMesh) mesh.castShadow = mesh.receiveShadow = true; });
    fitted.add(model);
    return fitted;
  }

  function showModel(target, damaged) {
    target.view.clear();
    target.view.add(makeModelView(damaged));
    target.damaged = damaged;
    if (target === aimed) showFile();
  }

  function measureJarProfile() {
    const model = makeModelView(false);
    model.updateMatrixWorld(true);
    const halfHeight = selected.height / 2;
    // Measure the ends separately so the wide shoulder cannot hold a jar up in midair.
    const base = { y: -halfHeight, radius: 0 };
    const lid = { y: halfHeight, radius: 0 };
    const shoulder = { y: 0, radius: 0 };
    const endBand = selected.height * .035;
    const point = new T.Vector3();
    model.traverse(mesh => {
      if (!mesh.isMesh) return;
      const vertices = mesh.geometry.attributes.position;
      for (let i = 0; i < vertices.count; i++) {
        point.fromBufferAttribute(vertices, i).applyMatrix4(mesh.matrixWorld);
        const radius = Math.hypot(point.x, point.z);
        if (point.y <= base.y + endBand) base.radius = Math.max(base.radius, radius);
        else if (point.y >= lid.y - endBand) lid.radius = Math.max(lid.radius, radius);
        else if (radius > shoulder.radius) {
          shoulder.y = point.y;
          shoulder.radius = radius;
        }
      }
    });
    return [base, shoulder, lid];
  }

  function damageParts() {
    const fitted = makeModelView(true);
    fitted.updateMatrixWorld(true);
    const parts = [];
    fitted.traverse(mesh => {
      if (!mesh.isMesh) return;
      const view = mesh.clone(false);
      mesh.matrixWorld.decompose(view.position, view.quaternion, view.scale);
      const bounds = new T.Box3().setFromObject(view);
      const offset = bounds.getCenter(new T.Vector3());
      const size = bounds.getSize(new T.Vector3());
      view.position.sub(offset);
      const root = new T.Group();
      root.add(view);
      parts.push({ view: root, offset, size });
    });
    return parts;
  }

  function carriesLoad(target) {
    const { body } = target;
    return world.contacts.some(({ enabled, bi, bj, ni }) => {
      if (!enabled) return false;
      const supported = bi === body && ni.y > .5 ? bj : bj === body && ni.y < -.5 ? bi : null;
      const upper = targetsByBody.get(supported);
      return upper && upper.part === undefined && upper.landedAt === null;
    });
  }

  function splitTarget(target, groundHit) {
    const original = target.body;
    const scatter = groundHit ? Math.min(.90, Math.sqrt(
      2 * groundHit.energy * groundFragments.scatterFraction / (selected.parts.length * groundFragments.mass),
    )) : 0;
    return selected.parts.map(({ view: template, offset, size }, part) => {
      const local = new Vec3(offset.x, offset.y, offset.z);
      const position = original.pointToWorldFrame(local);
      const view = template.clone(true);
      const velocity = original.getVelocityAtWorldPoint(position, new Vec3());
      const angularVelocity = original.angularVelocity.clone();
      if (groundHit) {
        const radial = position.vsub(original.position);
        radial.y = 0;
        if (radial.lengthSquared() < .001) radial.set(Math.cos(part * 2.4), 0, Math.sin(part * 2.4));
        radial.normalize();
        velocity.set(
          groundHit.x * groundFragments.inheritance + radial.x * scatter,
          Math.max(0, groundHit.speed - 2) * groundFragments.bounce,
          groundHit.z * groundFragments.inheritance + radial.z * scatter,
        );
        angularVelocity.scale(groundFragments.inheritance, angularVelocity);
        angularVelocity.x += radial.z * scatter * 4;
        angularVelocity.z -= radial.x * scatter * 4;
      }
      const body = new Body({
        mass: groundFragments.mass,
        position,
        quaternion: original.quaternion.clone(),
        velocity,
        angularVelocity,
        shape: new Box(new Vec3(
          Math.max(.025, size.x * (groundHit ? .5 : .29)),
          Math.max(.025, size.y * (groundHit ? .5 : .34)),
          Math.max(.025, size.z * (groundHit ? .5 : .29)),
        )),
        material: groundHit ? surfaces.fragment : surfaces.airborne,
        collisionFilterGroup: 4,
        collisionFilterMask: groundHit ? floorGroup : 1 | floorGroup,
        linearDamping: groundHit ? groundFragments.damping : .1,
        angularDamping: groundHit ? groundFragments.damping : .15,
      });
      if (groundHit) {
        body.updateAABB();
        body.position.y += Math.max(0, .008 - body.aabb.lowerBound.y);
        body.previousPosition.copy(body.position);
        body.aabbNeedsUpdate = true;
        floorDebris.add(body);
      }
      const fragment = {
        body, view, visual: new TargetVisual(view), landedAt: groundHit ? clock : null, hit: null,
        groundShard: Boolean(groundHit),
        airSteps: 0, number: target.number, damaged: true, part,
      };
      if (!groundHit) body.addEventListener('collide', ({ body: other }) => {
        if (other === floor) markLanding(fragment);
      });
      world.addBody(body);
      targetsByBody.set(body, fragment);
      scene.add(view);
      return fragment;
    });
  }

  function fadeProgress(target) {
    const hold = target.groundShard ? groundFragments.hold : landingHold;
    const fade = target.groundShard ? groundFragments.fade : landingFade;
    return (clock - target.landedAt - hold) / fade;
  }

  function markLanding(target) {
    if (target.landedAt !== null) return;
    target.landedAt = clock;
    feedback.emit('ground', { x: target.body.position.x, y: .03, z: target.body.position.z }, clock, .48);
    status('Chạm sàn · Đang giảm chuyển động');
    if (target.part === undefined && replay.has('hit')) {
      replay.mark('ground', clock, `Vật ${target.number} chạm sàn ở tốc độ ${target.groundImpact.speed.toFixed(1)} m/s.`);
    }
  }

  function showFile(damaged = !!aimed?.damaged) {
    const file = get('filename');
    const name = `${selected.names[damaged ? 2 : 1]}.glb`;
    if (file.textContent === name) return;
    get('intact').setAttribute('aria-pressed', String(!damaged));
    get('damaged').setAttribute('aria-pressed', String(damaged));
    file.textContent = name;
  }

  function reset(damaged = false) {
    replay.clear();
    discard();
    const layout = layouts[layoutPicker.value];
    const footprint = layout.filter(([, row]) => row === 0);
    const spreadX = footprint.map(([x]) => x * gap);
    const spreadZ = footprint.map(([, , z]) => z * gap);
    const stepped = layoutPicker.value === 'steps';
    const margin = stepped ? .14 : .22;
    const w = Math.max(.96, Math.max(...spreadX) - Math.min(...spreadX) + width + margin);
    const towerLayout = layoutPicker.value === 'tower';
    const d = towerLayout || stepped ? width + (towerLayout ? .10 : margin)
      : Math.max(.96, Math.max(...spreadZ) - Math.min(...spreadZ) + width + margin);
    const x = (Math.max(...spreadX) + Math.min(...spreadX)) / 2;
    const z = towerLayout ? 0 : (Math.max(...spreadZ) + Math.min(...spreadZ)) / 2;
    tabletop.scale.set(w, 1, d);
    tabletop.position.set(x, deckTop - .075, z);
    for (const part of pedestal) {
      part.position.x = x;
      part.position.z = z;
    }
    if (deck) world.removeBody(deck);
    deck = new Body({ mass: 0, material: surfaces.deck, position: new Vec3(x, deckTop - .075, z), shape: new Box(new Vec3(w / 2, .075, d / 2)) });
    world.addBody(deck);
    for (const [x, row, z] of layout) targets.push(makeTarget(x * gap, row, z * gap, damaged));
    aimed = targets[layoutPicker.value === 'steps' ? 4 : 0];
    showFile();
    status(damaged ? 'Mẫu hư hại GLB' : `${targets.length} vật · Sẵn sàng thử bắn`);
  }

  function frameLayout() {
    const layout = layoutPicker.value;
    const stacked = layout === 'tower' || layout === 'steps';
    const tower = layout === 'tower';
    const distance = tower ? 6.6 : layout === 'single' ? 4 : 5.1;
    camera.position.set(tower ? 1.35 : 3.4, stacked ? 3.6 : 2.8, distance);
    controls.target.set(0, stacked ? 1.95 : .98, 0);
    controls.update();
    updateCameraProjection();
  }

  function makeTarget(x, row, z, damaged) {
    const { height, mass, jarProfile } = selected;
    const view = new T.Group();
    const body = new Body({
      mass, shape: makeTargetShape(width, height, jarProfile), material: surfaces.target,
      position: new Vec3(x, deckTop + height / 2 + row * (height + .003) + .005, z),
      linearDamping: .08, angularDamping: .12, sleepSpeedLimit: .12, sleepTimeLimit: .65,
    });
    const target = {
      body, view, visual: new TargetVisual(view), landedAt: null, hit: null,
      groundImpact: null, transfer: 0, airSteps: 0, number: targets.length + 1,
    };
    body.addEventListener('collide', ({ body: other, contact }) => {
      if (other === floor) {
        if (target.landedAt !== null) return;
        const measured = measureContact(contact, .01);
        const speed = Math.max(0, measured?.speed ?? 0, -body.velocity.y);
        target.groundImpact = { speed, energy: measured?.energy ?? .5 * body.mass * speed * speed, x: body.velocity.x, z: body.velocity.z };
        markLanding(target);
      } else if (other === shot && (!shot.spent || shot.hitBody === body) && target.landedAt === null) {
        const impact = measureContact(contact, 1.8);
        if (impact && impact.energy > (target.hit?.energy ?? 0)) {
          shot.spent = true;
          shot.hitBody = body;
          const offset = contact.bi === body ? contact.ri : contact.rj;
          target.hit = { ...impact, point: body.position.vadd(offset) };
        }
      } else if (replay.has('hit') && targetsByBody.has(other)) {
        const impact = measureContact(contact, .65);
        if (!impact) return;
        const { speed, energy } = impact;
        const neighbor = targetsByBody.get(other);
        feedback.contact(clock, Math.min(.65, Math.sqrt(energy) * .46), !jarProfile);
        replay.mark('neighbor', clock, `Vật ${target.number} va với vật ${neighbor.number} ở tốc độ chạm ${speed.toFixed(1)} m/s.`);
        if (!target.damaged && energy >= (jarProfile ? .95 : 1.8)) target.transfer = Math.max(energy, target.transfer);
      }
    });
    world.addBody(body);
    targetsByBody.set(body, target);
    scene.add(view);
    view.position.copy(body.position);
    showModel(target, damaged);
    return target;
  }

  async function select() {
    const ticket = ++selection;
    const index = Number(picker.value);
    const names = catalog[index];
    replay.clear();
    discard();
    buttons.forEach(button => { button.disabled = true; });
    get('loader').hidden = false;
    get('loader').textContent = 'Đang tải mô hình…';
    try {
      const [intact, damaged] = await Promise.all(names.slice(1).map(loadModel));
      if (ticket !== selection) return;
      selected = { names, intact, damaged, height: index === 5 ? 1.18 : .8, mass: index === 6 ? 1.65 : .85 };
      if (index !== 6) selected.jarProfile = measureJarProfile();
      selected.parts = damageParts();
      const layout = layoutPicker.value;
      reset();
      const damageView = makeModelView(true);
      const textures = new Set();
      for (const root of [scene, damageView]) root.traverse(({ material }) => {
        for (const item of Array.isArray(material) ? material : [material]) {
          if (item) for (const value of Object.values(item)) if (value?.isTexture) textures.add(value);
        }
      });
      for (const texture of textures) renderer.initTexture(texture);
      await Promise.all([renderer.compileAsync(scene, camera), renderer.compileAsync(damageView, camera, scene)]);
      if (ticket !== selection) return;
      if (layout !== layoutPicker.value) reset();
      get('loader').hidden = true;
      buttons.forEach(button => { button.disabled = false; });
      return true;
    } catch (error) {
      if (ticket !== selection) return;
      get('loader').textContent = 'Không mở được mẫu GLB. Hãy chọn lại vật thể.';
      console.error(error);
    }
  }

  function shoot() {
    feedback.unlock();
    referenceSteps = 0;
    replay.leave();
    if (!targets.some(target => target.landedAt === null)) reset();
    if (!aimed || aimed.landedAt !== null) {
      aimed = targets.find(target => target.landedAt === null);
      aimOffset = null;
    }
    if (!aimed) return;
    removeShot();
    const target = aimOffset
      ? aimed.body.pointToWorldFrame(aimOffset)
      : aimed.body.position.vadd(new Vec3(0, layoutPicker.value === 'steps' ? selected.height * .325 : .14, 0));
    const direction = aimOffset ? new Vec3(target.x - camera.position.x, 0, target.z - camera.position.z) : new Vec3(0, 0, -1);
    direction.normalize();
    const travel = 1.48;
    const muzzle = target.vsub(direction.scale(travel));
    const flight = travel / shotSpeed;
    const velocity = direction.scale(shotSpeed);
    if (aimOffset) velocity.y = gravity * flight / 2;
    shot = new Body({
      mass: shotMass, material: surfaces.ball, shape: new Sphere(.22), linearDamping: .04,
      position: muzzle,
      velocity,
    });
    shot.addEventListener('collide', ({ body }) => {
      if (body === deck || body === floor) shot.spent = true;
    });
    world.addBody(shot);
    for (const target of targets) target.body.wakeUp();
    ballView.position.copy(shot.position);
    ballView.visible = true;
    feedback.emit('muzzle', muzzle, clock);
    status('Đạn đang bay');
    replay.begin(clock);
    replay.sample(clock, snapshot);
  }
  picker.addEventListener('change', select);
  layoutPicker.addEventListener('change', () => {
    frameLayout();
    if (!get('reset').disabled) reset();
  });
  get('shoot').addEventListener('click', shoot);
  get('reference-shot').addEventListener('click', async () => {
    feedback.unlock();
    picker.value = '6';
    layoutPicker.value = 'steps';
    frameLayout();
    if (await select()) {
      reset();
      referenceSteps = 24;
    }
  });
  get('reset').addEventListener('click', () => reset());
  get('intact').addEventListener('click', () => reset());
  get('damaged').addEventListener('click', () => reset(true));
  get('slow').addEventListener('click', event => {
    slow = !slow;
    event.currentTarget.setAttribute('aria-pressed', String(slow));
  });
  get('sound').addEventListener('click', event => {
    feedback.toggle();
    event.currentTarget.setAttribute('aria-pressed', String(!feedback.muted));
  });
  renderer.domElement.addEventListener('pointerdown', event => {
    pointerStart = [event.clientX, event.clientY];
  });
  renderer.domElement.addEventListener('pointerup', event => {
    if (replay.reviewing || !pointerStart || Math.hypot(event.clientX - pointerStart[0], event.clientY - pointerStart[1]) > 6) return;
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set(2 * (event.clientX - rect.left) / rect.width - 1, 1 - 2 * (event.clientY - rect.top) / rect.height);
    ray.setFromCamera(pointer, camera);
    const available = targets.filter(target => target.landedAt === null);
    const hit = ray.intersectObjects(available.map(target => target.view), true)[0];
    if (!hit) return;
    let root = hit.object;
    while (root.parent !== scene) root = root.parent;
    aimed = available.find(target => target.view === root);
    aimOffset = aimed.body.pointToLocalFrame(new Vec3(hit.point.x, hit.point.y, hit.point.z));
    renderDirty = true;
    showFile();
    status('Đã chọn điểm ngắm');
  });
  select();

  function updateCameraProjection() {
    const baseFov = camera.aspect < .8 ? 48 : 40;
    const towerFov = layoutPicker.value === 'tower'
      ? T.MathUtils.radToDeg(2 * Math.atan(.31 / camera.aspect))
      : 0;
    camera.fov = Math.max(baseFov, towerFov);
    camera.updateProjectionMatrix();
  }

  const resize = () => {
    const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight);
    camera.aspect = w / h;
    updateCameraProjection();
    renderer.setPixelRatio(renderScale * Math.min(devicePixelRatio, 1.25, Math.sqrt(320000 / (w * h))));
    renderer.setSize(w, h, false);
    renderDirty = true;
  };
  let renderScale = 1;
  let slowFrames = 0;
  new ResizeObserver(resize).observe(host);
  resize();

  function trackSupport() {
    supportedBodies.clear();
    if (!replay.recording || !replay.has('hit') || replay.has('fall')) return;
    for (const contact of world.contacts) {
      if (!contact.enabled || contact.bi === shot || contact.bj === shot) continue;
      if (contact.ni.y > .35) supportedBodies.add(contact.bj);
      if (contact.ni.y < -.35) supportedBodies.add(contact.bi);
    }
  }

  let previous = performance.now();
  let remainder = 0;
  let lastStep = step;
  renderer.setAnimationLoop(now => {
    const frameTime = (now - previous) / 1000;
    const delta = Math.min(maxFrameTime, Math.max(0, frameTime)) * (slow ? .38 : 1);
    previous = now;
    if (replay.reviewing) {
      replay.update(delta);
      if (controls.update() || renderDirty) renderer.render(scene, camera);
      renderDirty = false;
      return;
    }
    const running = shot || referenceSteps > 0 || replay.recording
      || targets.some(({ body, landedAt }) => body.sleepState !== Body.SLEEPING || landedAt !== null);
    slowFrames = running && frameTime > .034 && frameTime < .25 ? slowFrames + 1 : 0;
    if (slowFrames >= 9 && renderScale > .75) {
      renderScale = Math.max(.75, renderScale * .86);
      slowFrames = 0;
      resize();
    }
    remainder = running ? remainder + delta : 0;
    while (remainder >= (shot ? step / 2 : step)) {
      // A fast projectile needs finer contacts. Falling props can use the normal rate.
      lastStep = shot ? step / 2 : step;
      remainder -= lastStep;
      clock += lastStep;
      for (const body of floorDebris) body.force.y -= body.mass * gravity * (groundFragments.gravityScale - 1);
      world.step(lastStep);
      if (referenceSteps > 0 && --referenceSteps === 0) shoot();
      trackSupport();
      if (shot && (shot.spent || shot.position.z < -4)) {
        if (!shot.hitBody) status('Đạn không trúng vật đang xếp');
        removeShot();
      }
      const fragments = [];
      targets = targets.filter(target => {
        if (target.groundImpact) {
          fragments.push(...splitTarget(target, target.groundImpact));
          removeTarget(target);
          if (target === aimed) {
            aimed = null;
            aimOffset = null;
            showFile(true);
          }
          status('Vỡ khi chạm sàn · Mảnh đang lăn và trượt');
          replay.mark('shatter', clock, `Vật ${target.number} vỡ thành ${selected.parts.length} mảnh từ GLB. Các mảnh giữ một phần quán tính trước khi dừng.`);
          return false;
        }
        if (target.hit) {
          const { speed, energy, point } = target.hit;
          target.hit = null;
          feedback.emit('hit', point, clock, .82, !selected.jarProfile);
          replay.mark('hit', clock, `Vật ${target.number} bị chạm ở ${speed.toFixed(1)} m/s, với ${energy.toFixed(1)} J theo phương va chạm.`);
          if (energy >= shotFractureEnergy) {
            if (!target.damaged && selected.parts.length > 1 && carriesLoad(target)) {
              fragments.push(...splitTarget(target));
              removeTarget(target);
              if (target === aimed) {
                aimed = null;
                aimOffset = null;
                showFile(true);
              }
              replay.mark('damage', clock, `Vật ${target.number} đổi sang ${selected.names[2]}.glb và mất khả năng đỡ khối bên trên.`);
              status('Trúng đạn · Điểm tựa bị phá');
              return false;
            }
            if (target.part === undefined) showModel(target, true);
            replay.mark('damage', clock, `Vật ${target.number} đổi sang ${selected.names[2]}.glb và giữ quán tính.`);
          }
          status(`Trúng đạn · ${target.damaged ? 'Mẫu hư hại' : 'Giữ mẫu nguyên'}`);
        }
        if (target.transfer) {
          const energy = target.transfer;
          target.transfer = 0;
          if (!target.damaged && target.landedAt === null && !carriesLoad(target)) {
            showModel(target, true);
            replay.mark('transfer', clock, `Vật ${target.number} hư hại sau cú va chạm gián tiếp (${energy.toFixed(1)} J trong mô phỏng).`);
          }
        }
        if (target.landedAt === null) {
          if (replay.recording && replay.has('hit')) {
            const { quaternion, velocity } = target.body;
            if (Math.hypot(quaternion.x, quaternion.z) > .11) {
              replay.mark('tip', clock, `Vật ${target.number} nghiêng khi lực va chạm hoặc mất điểm tựa tạo mô-men xoay.`);
            }
            if (!replay.has('fall')) {
              target.airSteps = velocity.y < -.55 && !supportedBodies.has(target.body) ? target.airSteps + 1 : 0;
              if (target.airSteps >= 5) replay.mark('fall', clock, `Vật ${target.number} đã rời điểm tựa và đang rơi theo trọng lực.`);
            }
          }
          return true;
        }
        const { velocity, angularVelocity } = target.body;
        if (target.groundShard && clock - target.landedAt > .025 && (Math.hypot(velocity.x, velocity.z) > .12
          || Math.hypot(angularVelocity.x, angularVelocity.z) > .48)) {
          replay.mark('roll', clock, `Vật ${target.number} trượt hoặc lăn một đoạn ngắn sau khi chạm sàn.`);
        }
        const fade = fadeProgress(target);
        if (fade >= 1) {
          removeTarget(target);
          if (target === aimed) {
            aimed = null;
            aimOffset = null;
          }
          status('Đã biến mất sau khi chạm sàn');
          if (target.groundShard && replay.has('fade')) replay.mark('clear', clock, `Mảnh của vật ${target.number} đã biến mất.`);
          return false;
        }
        if (fade > 0) {
          if (target.groundShard) replay.mark('fade', clock, `Các mảnh của vật ${target.number} bắt đầu mờ dần.`);
          target.visual.fade(1 - fade);
        }
        return true;
      });
      targets.push(...fragments);
      if (replay.recording) {
        const moving = !!shot || targets.some(({ body, landedAt }) => landedAt !== null
          || body.velocity.lengthSquared() > .018 || body.angularVelocity.lengthSquared() > .04);
        replay.sample(clock, snapshot, moving);
      }
    }
    const fraction = running ? Math.min(1, remainder / lastStep) : 1;
    feedback.draw(feedback.sample(clock), clock);
    if (shot) shot.previousPosition.lerp(shot.position, fraction, ballView.position);
    for (const target of targets) {
      const { body, view } = target;
      body.previousPosition.lerp(body.position, fraction, view.position);
      body.previousQuaternion.slerp(body.quaternion, fraction, view.quaternion);
    }
    const cameraMoved = controls.update();
    marker.visible = !!aimed && aimed.landedAt === null && layoutPicker.value !== 'single';
    if (marker.visible) {
      if (aimOffset) marker.position.copy(aimed.body.pointToWorldFrame(aimOffset));
      else marker.position.copy(aimed.view.position);
      marker.quaternion.copy(camera.quaternion);
    }
    if (running || renderDirty || cameraMoved) renderer.render(scene, camera);
    renderDirty = false;
  });
}

try {
  start();
} catch (error) {
  get('loader').textContent = 'Trình duyệt chưa khởi tạo được WebGL.';
  console.error(error);
}
