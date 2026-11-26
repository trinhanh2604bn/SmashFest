import * as T from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Body, Box, Plane, Sphere, Vec3, World } from 'cannon-es';
import {
  applyJarInertia, configureImpactWorld, floorGroup, gravity, groundFragments, landingFade, landingHold,
  makeTargetShape, measureContact, shotFractureEnergy, shotMass,
} from '../../shared/impact/target-impact.js';
import { TargetVisual } from '../../shared/impact/target-visual.js';
import { createImpactReplay } from './impact-replay.js';
import { createImpactFeedback } from '../../shared/impact/impact-feedback.js';
import { addImpactChip, disposeImpactChip } from '../../shared/impact/impact-chip.js';
import { impactLayouts } from '../../shared/impact/impact-layouts.js';
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
const targetColors = [0xf78a32, 0x63b7ff, 0xffd64e, 0xfe82b4, 0xf7464a, 0xf7464a, 0xd99450];
const get = id => document.getElementById(id);
const picker = get('target');
const layoutPicker = get('layout');
const buttons = ['reference-shot', 'shoot', 'reset', 'intact', 'chipped', 'damaged'].map(get);
catalog.forEach(([name], index) => picker.add(new Option(name, index)));
const layoutGroups = ['Một loại vật', 'Cụm hỗn hợp'].map(label =>
  Object.assign(document.createElement('optgroup'), { label }));
for (const [id, layout] of Object.entries(impactLayouts)) {
  const group = layout.pieces.some(piece => piece[3] !== undefined) ? layoutGroups[1] : layoutGroups[0];
  group.append(new Option(layout.label, id));
}
layoutPicker.append(...layoutGroups);

const step = 1 / 120;
const maxFrameTime = 8 * step;
const maxSettleSteps = 3 / step;
const speedPicker = get('shot-speed');
const deckTop = 1.19;
const standardHeight = .8;
const width = .7;
const gap = .706;
// Leave glancing floor contacts intact and break objects that fall off the deck.
const groundFractureSpeed = 2.2;
const chipEnergy = 16;
const directFractureEnergy = 64;
const tableDebris = { settle: .25, coast: .9, maxAge: 3.2, hold: .26, fade: .36 };
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

function contactCue(body, { bi, ri, rj, ni }) {
  const first = bi === body;
  return {
    point: body.position.vadd(first ? ri : rj),
    normal: first ? ni.clone() : ni.negate(),
  };
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
  controls.maxDistance = 14;
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
  const ground = place(new T.PlaneGeometry(80, 80), '#a88c67', 0);
  ground.rotation.x = -Math.PI / 2;
  ground.castShadow = false;
  const tabletop = place(new T.BoxGeometry(1, .15, 1), '#d79e56', deckTop - .075);
  const pedestal = [
    place(new T.CylinderGeometry(.17, .32, 1.04, 10), '#2746a5', .52),
    place(new T.CylinderGeometry(.32, .35, .10, 10), '#d19b51', .05),
  ];
  const ballRadius = .17;
  const ballView = place(new T.SphereGeometry(ballRadius, 20, 16), '#cf8329', 0);
  const seam = new T.Mesh(new T.TorusGeometry(ballRadius * .98, .012, 8, 28), new T.MeshStandardMaterial({ color: '#173e78' }));
  ballView.add(seam);
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
  const aimPlane = new T.Plane();
  const viewDirection = new T.Vector3();
  const emptyPoint = new T.Vector3();
  let pointerStart;

  let frameTop = deckTop;
  const assets = new Map();
  let targets = [];
  const targetsByBody = new Map();
  const floorDebris = new Set();
  const landingCues = new Set();
  const skitterCues = new Set();
  const neighborCueTimes = new Map();
  let aimed;
  let inspection;
  let aimOffset = null;
  let freeAim = null;
  let shot;
  let clock = 0;
  let selection = 0;
  let slow = false;
  let referenceSteps = 0;
  let remainder = 0;
  let settling = false;
  let ready = false;
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
  let supportByBody = new Map();
  const replay = createImpactReplay({ showFrame, returnToLive });

  function snapshot() {
    return {
      clock,
      cues: feedback.sample(clock),
      projectile: shot?.position.toArray() ?? null,
      projectileRotation: shot?.quaternion.toArray(),
      inspected: inspection?.asset.index,
      damage: inspection?.damage,
      targets: targets.map(target => ({
        id: target.body.id,
        position: target.body.position.toArray(),
        quaternion: target.body.quaternion.toArray(),
        damage: target.damage,
        chip: target.chip,
        asset: target.asset.index,
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
    if (frame.inspected !== undefined) showFile(assets.get(frame.inspected), frame.damage);
    targets.forEach(target => { target.view.visible = false; });
    marker.visible = false;
    for (const ghost of replayViews.values()) ghost.view.visible = false;
    for (const state of frame.targets) {
      let ghost = replayViews.get(state.id);
      if (!ghost || ghost.damage !== state.damage || ghost.chip !== state.chip) {
        if (ghost) {
          scene.remove(ghost.view);
          ghost.visual.dispose();
          disposeImpactChip(ghost.view);
        }
        const view = state.part === undefined
          ? makeModelView(assets.get(state.asset), state.damage, state.chip)
          : assets.get(state.asset).parts[state.part].view.clone(true);
        ghost = { view, visual: new TargetVisual(view), damage: state.damage, chip: state.chip };
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
      ballView.quaternion.fromArray(frame.projectileRotation);
      if (next.projectile) ballView.position.lerp(replayPosition.fromArray(next.projectile), mix);
      if (next.projectileRotation) ballView.quaternion.slerp(replayRotation.fromArray(next.projectileRotation), mix);
    }
  }

  function returnToLive() {
    renderDirty = true;
    for (const ghost of replayViews.values()) {
      scene.remove(ghost.view);
      ghost.visual.dispose();
      disposeImpactChip(ghost.view);
    }
    replayViews.clear();
    targets.forEach(target => { target.view.visible = true; });
    ballView.visible = !!shot;
    get('state').textContent = liveStatus;
    if (inspection) showFile(inspection.asset, inspection.damage);
  }

  function removeShot() {
    if (!shot) return;
    world.removeBody(shot);
    shot = null;
    ballView.visible = false;
  }

  function discard() {
    renderDirty = true;
    ready = false;
    referenceSteps = 0;
    remainder = 0;
    feedback.clear();
    landingCues.clear();
    skitterCues.clear();
    neighborCueTimes.clear();
    removeShot();
    supportByBody.clear();
    targets.forEach(removeTarget);
    targets = [];
    aimed = null;
    inspection = null;
    aimOffset = null;
    freeAim = null;
  }

  function removeTarget(target) {
    supportByBody.delete(target.body);
    for (const [upper, supports] of supportByBody) {
      if (!supports.delete(target.body)) continue;
      // Removing a support causes no collision, so the solver cannot wake the load above it.
      if (upper.sleepState === Body.SLEEPING) upper.wakeUp();
      if (supports.size) continue;
      supportByBody.delete(upper);
      const dependent = targetsByBody.get(upper);
      replay.mark('support', clock, `${targetLabel(dependent)} mất điểm tựa khi ${targetLabel(target)} rời vị trí.`, dependent.number);
    }
    targetsByBody.delete(target.body);
    floorDebris.delete(target.body);
    world.removeBody(target.body);
    target.visual.dispose();
    disposeImpactChip(target.view);
    scene.remove(target.view);
  }

  function makeModelView(asset, damage = 'intact', chip) {
    const source = damage === 'broken' ? asset.damaged : asset.intact;
    const size = asset.intact.bounds.getSize(new T.Vector3());
    const center = asset.intact.bounds.getCenter(new T.Vector3());
    const fitted = new T.Group();
    fitted.scale.set(width / size.x, asset.height / size.y, width / size.z);
    const model = source.scene.clone(true);
    model.position.sub(center);
    model.traverse(mesh => { if (mesh.isMesh) mesh.castShadow = mesh.receiveShadow = true; });
    fitted.add(model);
    if (damage === 'chipped') {
      addImpactChip(fitted, chip ?? { point: [0, asset.height * .13, width / 2], normal: [0, 0, 1] }, !asset.jarProfile);
    }
    return fitted;
  }

  function showModel(target, damage, chip) {
    disposeImpactChip(target.view);
    target.view.clear();
    target.view.add(makeModelView(target.asset, damage, chip));
    target.damage = damage;
    target.chip = chip;
    if (target === aimed) inspect(target.asset, damage);
  }

  function chipTarget(target, point, normal) {
    showModel(target, 'chipped', {
      point: target.body.pointToLocalFrame(point).toArray(),
      normal: target.body.vectorToLocalFrame(normal).toArray(),
    });
  }

  function measureJarProfile(asset) {
    const model = makeModelView(asset);
    model.updateMatrixWorld(true);
    const halfHeight = asset.height / 2;
    // Measure the ends separately so the wide shoulder cannot hold a jar up in midair.
    const base = { y: -halfHeight, radius: 0 };
    const lid = { y: halfHeight, radius: 0 };
    const shoulder = { y: 0, radius: 0 };
    const endBand = asset.height * .035;
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

  function damageParts(asset) {
    const fitted = makeModelView(asset, 'broken');
    fitted.updateMatrixWorld(true);
    const parts = [];
    // GLTFLoader exposes each primitive of the damaged GLB as a separate mesh.
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
    return [...supportByBody.values()].some(supports => supports.has(target.body));
  }

  function splitTarget(target, groundHit = null) {
    const original = target.body;
    const { asset } = target;
    const scatter = groundHit ? Math.min(.90, Math.sqrt(
      2 * groundHit.energy * groundFragments.scatterFraction / (asset.parts.length * groundFragments.mass),
    )) : .24;
    return asset.parts.map(({ view: template, offset, size }, part) => {
      const local = new Vec3(offset.x, offset.y, offset.z);
      const position = original.pointToWorldFrame(local);
      const view = template.clone(true);
      const velocity = original.getVelocityAtWorldPoint(position, new Vec3());
      const angularVelocity = original.angularVelocity.clone();
      const radial = position.vsub(original.position);
      radial.y = 0;
      if (radial.lengthSquared() < .001) radial.set(Math.cos(part * 2.4), 0, Math.sin(part * 2.4));
      radial.normalize();
      if (groundHit) {
        velocity.set(
          groundHit.x * groundFragments.inheritance + radial.x * scatter,
          Math.max(0, groundHit.speed - 2) * groundFragments.bounce,
          groundHit.z * groundFragments.inheritance + radial.z * scatter,
        );
        angularVelocity.scale(groundFragments.inheritance, angularVelocity);
        angularVelocity.x += radial.z * scatter * 4;
        angularVelocity.z -= radial.x * scatter * 4;
      } else {
        // A fracture dissipates energy; the pieces still inherit the impact at their own positions.
        velocity.scale(.72, velocity);
        angularVelocity.scale(.72, angularVelocity);
        velocity.addScaledVector(scatter, radial, velocity);
      }
      const body = new Body({
        mass: groundFragments.mass,
        position,
        quaternion: original.quaternion.clone(),
        velocity,
        angularVelocity,
        shape: new Box(new Vec3(
          Math.max(.025, size.x * (groundHit ? .46 : .27)),
          Math.max(.025, size.y * (groundHit ? .46 : .29)),
          Math.max(.025, size.z * (groundHit ? .46 : .27)),
        )),
        material: groundHit ? surfaces.fragment : surfaces.airborne,
        collisionFilterGroup: 4,
        collisionFilterMask: groundHit ? floorGroup : 1 | floorGroup,
        linearDamping: groundHit ? groundFragments.damping : .1,
        angularDamping: groundHit ? groundFragments.damping : .15,
      });
      body.previousPosition.copy(body.position);
      body.previousQuaternion.copy(body.quaternion);
      view.position.copy(body.position);
      view.quaternion.copy(body.quaternion);
      if (groundHit) {
        body.updateAABB();
        body.position.y += Math.max(0, .008 - body.aabb.lowerBound.y);
        body.previousPosition.copy(body.position);
        body.aabbNeedsUpdate = true;
        floorDebris.add(body);
      }
      const fragment = {
        body, view, visual: new TargetVisual(view), landedAt: groundHit ? clock : null,
        asset, groundShard: Boolean(groundHit), number: target.number, damage: 'broken', part,
        bornAt: clock, restSince: null, coastSince: null, tableContactAt: -Infinity,
      };
      if (!groundHit) body.addEventListener('collide', ({ body: other, contact }) => {
        if (other === floor && fragment.landedAt === null) {
          fragment.groundShard = true;
          body.material = surfaces.fragment;
          body.collisionFilterMask = floorGroup;
          floorDebris.add(body);
          const { point } = contactCue(body, contact);
          markLanding(fragment, point, Math.max(0, -body.velocity.y));
        }
      });
      world.addBody(body);
      targetsByBody.set(body, fragment);
      scene.add(view);
      return fragment;
    });
  }

  function fadeProgress(target) {
    const timing = target.groundShard ? groundFragments
      : target.part === undefined ? { hold: landingHold, fade: landingFade } : tableDebris;
    const { hold, fade } = timing;
    return (clock - target.landedAt - hold) / fade;
  }

  function trackTableDebris(target) {
    if (target.part === undefined || target.landedAt !== null) return;
    const { body } = target;
    const aboveDeck = body.position.y >= deckTop - .06;
    const restingAboveDeck = aboveDeck && body.velocity.lengthSquared() <= .16 ** 2
      && body.angularVelocity.lengthSquared() <= .55 ** 2;
    const coastingOnDeck = clock - target.tableContactAt <= .08 && body.velocity.lengthSquared() <= .65 ** 2;
    target.restSince = restingAboveDeck ? target.restSince ?? clock : null;
    target.coastSince = coastingOnDeck ? target.coastSince ?? clock : null;
    const rested = target.restSince !== null && clock - target.restSince >= tableDebris.settle;
    const coasted = target.coastSince !== null && clock - target.coastSince >= tableDebris.coast;
    // A fragment can keep spinning on a corner without ever entering the solver's sleep state.
    if (!rested && !coasted && !(aboveDeck && clock - target.bornAt >= tableDebris.maxAge)) return;
    target.landedAt = clock;
    replay.mark('tabletop', clock, `Mảnh của ${targetLabel(target)} còn trên bàn và sắp mờ dần.`, target.number);
  }

  function targetCue(kind, target, point, strength, options = {}) {
    feedback.emit(kind, point, clock, {
      strength,
      color: targetColors[target.asset.index],
      wood: !target.asset.jarProfile,
      ...options,
    });
  }

  function markLanding(target, point, speed) {
    if (target.landedAt !== null) return;
    target.landedAt = clock;
    if (landingCues.has(target.number)) return;
    landingCues.add(target.number);
    const strength = Math.min(1, .32 + speed * .12);
    targetCue('ground', target, { x: point.x, y: .025, z: point.z }, strength);
    const note = target.part === undefined
      ? `${targetLabel(target)} chạm sàn ở ${speed.toFixed(1)} m/s.`
      : `Mảnh của ${targetLabel(target)} chạm sàn sau khi tách trên bàn.`;
    replay.mark('ground', clock, note, target.number);
  }

  function targetLabel(target) {
    return `${target.asset.names[0]} #${target.number}`;
  }

  function showFile(asset, damage) {
    const file = get('filename');
    const name = `${asset.names[damage === 'broken' ? 2 : 1]}.glb`;
    get('intact').setAttribute('aria-pressed', String(damage === 'intact'));
    get('chipped').setAttribute('aria-pressed', String(damage === 'chipped'));
    get('damaged').setAttribute('aria-pressed', String(damage === 'broken'));
    get('model-note').hidden = damage !== 'chipped';
    file.textContent = name;
  }

  function inspect(asset, damage) {
    inspection = { asset, damage };
    showFile(asset, damage);
  }

  function reset(damage = 'intact') {
    replay.clear();
    discard();
    const layout = impactLayouts[layoutPicker.value];
    const footprint = layout.pieces.filter(([, row]) => row === 0);
    const spreadX = footprint.map(([x]) => x * gap);
    const spreadZ = footprint.map(([, , z]) => z * gap);
    const margin = layout.margin ?? .22;
    const w = Math.max(.96, Math.max(...spreadX) - Math.min(...spreadX) + width + margin);
    const d = layout.depth ?? Math.max(.96, Math.max(...spreadZ) - Math.min(...spreadZ) + width + margin);
    const x = (Math.max(...spreadX) + Math.min(...spreadX)) / 2;
    const z = (Math.max(...spreadZ) + Math.min(...spreadZ)) / 2;
    tabletop.scale.set(w, 1, d);
    tabletop.position.set(x, deckTop - .075, z);
    for (const part of pedestal) {
      part.position.x = x;
      part.position.z = z;
    }
    if (deck) world.removeBody(deck);
    deck = new Body({ mass: 0, material: surfaces.deck, position: new Vec3(x, deckTop - .075, z), shape: new Box(new Vec3(w / 2, .075, d / 2)) });
    world.addBody(deck);
    for (const [x, row, z, index] of layout.pieces) {
      const asset = assets.get(index ?? Number(picker.value));
      const rowHeight = index === undefined ? asset.height : standardHeight;
      targets.push(makeTarget(asset, x * gap, row * (rowHeight + .003), z * gap, damage));
    }
    frameTop = Math.max(...targets.map(({ body, asset }) => body.position.y + asset.height / 2));
    aimed = targets[layout.aim ?? 0];
    inspect(aimed.asset, damage);
    ready = settleLayout();
    get('shoot').disabled = !ready || !get('loader').hidden;
    const previewLabel = { chipped: 'Sứt nhẹ · Mô phỏng trên mẫu nguyên', broken: 'Mẫu vỡ GLB' };
    status(ready
      ? previewLabel[damage] ?? `${targets.length} vật · Sẵn sàng thử bắn`
      : 'Cụm chưa ổn định · Chọn bố cục khác hoặc đặt lại');
  }

  function settleLayout() {
    settling = true;
    let still = false;
    for (let i = 0; i < maxSettleSteps; i++) {
      advancePhysics();
      if (targets.some(({ body }) => body.position.y < deckTop)) break;
      if (targets.every(({ body }) => body.sleepState === Body.SLEEPING)) {
        still = true;
        break;
      }
    }
    settling = false;
    for (const { body, view } of targets) {
      body.previousPosition.copy(body.position);
      body.previousQuaternion.copy(body.quaternion);
      view.position.copy(body.position);
      view.quaternion.copy(body.quaternion);
    }
    return still;
  }

  function frameLayout() {
    const { x: width, z: depth } = tabletop.scale;
    const halfHeight = frameTop / 2;
    const front = new T.Vector3(depth > 1.4 ? .7 : .36, depth > 1.4 ? .34 : .15, 1).normalize();
    const right = new T.Vector3(0, 1, 0).cross(front).normalize();
    const up = front.clone().cross(right);
    const halfFov = Math.tan(T.MathUtils.degToRad(camera.fov / 2));
    const screenWidth = halfFov * camera.aspect * .86;
    const screenHeight = halfFov * .76;
    const corner = new T.Vector3();
    let distance = 3.75;
    for (const x of [-width / 2, width / 2]) {
      for (const y of [-halfHeight, halfHeight]) {
        for (const z of [-depth / 2, depth / 2]) {
          corner.set(x, y, z);
          distance = Math.max(distance, corner.dot(front) + Math.max(
            Math.abs(corner.dot(right)) / screenWidth,
            Math.abs(corner.dot(up)) / screenHeight,
          ));
        }
      }
    }
    controls.target.set(deck.position.x, halfHeight, deck.position.z);
    camera.position.copy(controls.target).addScaledVector(front, distance);
    scene.fog.near = Math.max(6.5, distance + 1);
    scene.fog.far = Math.max(16, distance + 9);
    controls.update();
  }

  function makeTarget(asset, x, elevation, z, damage) {
    const { height, mass, jarProfile } = asset;
    const view = new T.Group();
    const body = new Body({
      mass, shape: makeTargetShape(width, height, jarProfile), material: surfaces.target,
      position: new Vec3(x, deckTop + height / 2 + elevation + .005, z),
      linearDamping: .08, angularDamping: .12, sleepSpeedLimit: .12, sleepTimeLimit: .65,
    });
    if (jarProfile) applyJarInertia(body, jarProfile);
    const target = {
      asset, body, view, visual: new TargetVisual(view), landedAt: null, hit: null,
      groundImpact: null, neighbor: null, airTime: 0, unsupportedSince: null, number: targets.length + 1,
    };
    body.addEventListener('collide', ({ body: other, contact }) => {
      if (settling) return;
      if (other === floor) {
        if (target.landedAt !== null) return;
        const measured = measureContact(contact, .01);
        const speed = Math.max(0, measured?.speed ?? 0, -body.velocity.y);
        target.groundImpact = {
          speed, energy: measured?.energy ?? .5 * body.mass * speed * speed,
          x: body.velocity.x, z: body.velocity.z, point: contactCue(body, contact).point,
        };
      } else if (other === shot && (!shot.hitBody || shot.hitBody === body) && target.landedAt === null) {
        const impact = measureContact(contact, .25);
        if (impact && impact.energy > (target.hit?.energy ?? 0)) {
          shot.hitBody = body;
          shot.contactAt ??= clock;
          target.hit = { ...impact, ...contactCue(body, contact) };
        }
      } else if (replay.recording && (shot?.hitBody || replay.has('hit')) && targetsByBody.has(other)) {
        const impact = measureContact(contact, .65);
        if (!impact) return;
        const { speed, energy } = impact;
        const neighbor = targetsByBody.get(other);
        if (energy > (target.neighbor?.energy ?? 0)) {
          target.neighbor = { other: neighbor, speed, energy, ...contactCue(body, contact) };
        }
      }
    });
    world.addBody(body);
    targetsByBody.set(body, target);
    scene.add(view);
    view.position.copy(body.position);
    showModel(target, damage);
    return target;
  }

  async function prepareAsset(index) {
    if (!assets.has(index)) {
      const names = catalog[index];
      const [intact, damaged] = await Promise.all(names.slice(1).map(loadModel));
      if (assets.has(index)) return assets.get(index);
      const asset = { index, names, intact, damaged, height: index === 5 ? 1.18 : standardHeight, mass: index === 6 ? 1.65 : .85 };
      if (index !== 6) asset.jarProfile = measureJarProfile(asset);
      asset.parts = damageParts(asset);
      assets.set(index, asset);
    }
    return assets.get(index);
  }

  async function select() {
    const ticket = ++selection;
    const index = Number(picker.value);
    const layout = impactLayouts[layoutPicker.value];
    const mixed = layout.pieces.some(piece => piece[3] !== undefined);
    picker.disabled = mixed;
    get('layout-note').textContent = layout.description ?? '';
    get('layout-note').hidden = !layout.description;
    get('aim-note').textContent = mixed
      ? 'Chạm vào một vật để ngắm và xem mẫu GLB. Chạm vùng trống để thử bắn trượt.'
      : 'Chạm vào thân hoặc mép vật để ngắm. Chạm vùng trống để thử bắn trượt.';
    replay.clear();
    discard();
    buttons.forEach(button => { button.disabled = true; });
    get('loader').hidden = false;
    get('loader').textContent = 'Đang tải mô hình…';
    try {
      const indices = [...new Set(layout.pieces.map(piece => piece[3] ?? index))];
      const prepared = await Promise.all(indices.map(prepareAsset));
      if (ticket !== selection) return;
      reset();
      frameLayout();
      const damageView = new T.Group();
      damageView.add(...prepared.map(asset => makeModelView(asset, 'broken')));
      const textures = new Set();
      for (const root of [scene, damageView]) root.traverse(({ material }) => {
        for (const item of Array.isArray(material) ? material : [material]) {
          if (item) for (const value of Object.values(item)) if (value?.isTexture) textures.add(value);
        }
      });
      for (const texture of textures) renderer.initTexture(texture);
      await Promise.all([renderer.compileAsync(scene, camera), renderer.compileAsync(damageView, camera, scene)]);
      if (ticket !== selection) return;
      get('loader').hidden = true;
      buttons.forEach(button => { button.disabled = button.id === 'shoot' && !ready; });
      return ready;
    } catch (error) {
      if (ticket !== selection) return;
      get('loader').textContent = 'Không mở được mẫu GLB. Hãy chọn lại vật thể.';
      console.error(error);
    }
  }

  function shoot() {
    if (!ready) return;
    feedback.unlock();
    referenceSteps = 0;
    replay.leave();
    const available = targets.filter(target => target.part === undefined && target.landedAt === null);
    if (available.length === 0 && !freeAim) reset();
    if (!ready) return;
    if (!freeAim) {
      if (!aimed || aimed.landedAt !== null) {
        aimed = available[0];
        aimOffset = null;
      }
      if (!aimed) return;
      inspect(aimed.asset, aimed.damage);
    }
    removeShot();
    const speed = Number(speedPicker.value);
    const target = aimPoint();
    const direction = aimOffset || freeAim
      ? new Vec3(target.x - camera.position.x, 0, target.z - camera.position.z) : new Vec3(0, 0, -1);
    direction.normalize();
    const travel = 1.9;
    const muzzle = target.vsub(direction.scale(travel));
    const flight = travel / speed;
    const velocity = direction.scale(speed);
    velocity.y = gravity * flight / 2;
    shot = new Body({
      mass: shotMass, material: surfaces.ball, shape: new Sphere(ballRadius), linearDamping: .12, angularDamping: .22,
      position: muzzle,
      velocity,
    });
    shot.firedAt = clock;
    shot.addEventListener('collide', ({ body, contact }) => {
      if (body !== deck && body !== floor) return;
      const firstContact = shot.contactAt === undefined;
      shot.contactAt ??= clock;
      if (firstContact) {
        const { point, normal } = contactCue(body, contact);
        if (body === floor) point.y = .025;
        feedback.emit(body === floor ? 'ground' : 'neighbor', point, clock, { strength: .45, normal, wood: true });
        replay.mark('miss', clock, body === floor ? 'Đạn chạm sàn.' : 'Đạn chạm bàn.');
      }
    });
    world.addBody(shot);
    ballView.position.copy(shot.position);
    ballView.visible = true;
    feedback.emit('muzzle', muzzle, clock, { normal: direction, strength: .58 + speed / 68 });
    status('Đạn đang bay');
    replay.begin(clock, `Đạn rời vị trí bắn ở ${speed} m/s.`);
    replay.sample(clock, snapshot);
  }

  function aimPoint() {
    if (freeAim) return freeAim;
    return aimOffset ? aimed.body.pointToWorldFrame(aimOffset)
      : aimed.body.position.vadd(new Vec3(0, aimed.asset.height * .17, 0));
  }
  picker.addEventListener('change', select);
  layoutPicker.addEventListener('change', select);
  get('shoot').addEventListener('click', shoot);
  get('reference-shot').addEventListener('click', async () => {
    feedback.unlock();
    layoutPicker.value = 'cascade';
    speedPicker.value = speedPicker.querySelector('option[selected]').value;
    if (await select()) {
      referenceSteps = Math.round(.4 / step);
    }
  });
  get('reset').addEventListener('click', () => reset());
  get('intact').addEventListener('click', () => reset());
  get('chipped').addEventListener('click', () => reset('chipped'));
  get('damaged').addEventListener('click', () => reset('broken'));
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
    if (!ready || referenceSteps > 0 || replay.reviewing || !pointerStart
      || Math.hypot(event.clientX - pointerStart[0], event.clientY - pointerStart[1]) > 6) return;
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set(2 * (event.clientX - rect.left) / rect.width - 1, 1 - 2 * (event.clientY - rect.top) / rect.height);
    ray.setFromCamera(pointer, camera);
    const available = targets.filter(target => target.part === undefined && target.landedAt === null);
    const hit = ray.intersectObjects(available.map(target => target.view), true)[0];
    renderDirty = true;
    if (!hit) {
      aimPlane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(viewDirection), controls.target);
      if (ray.ray.intersectPlane(aimPlane, emptyPoint)) {
        freeAim = new Vec3(emptyPoint.x, Math.max(ballRadius + .06, emptyPoint.y), emptyPoint.z);
        status('Đang ngắm vùng trống');
      }
      return;
    }
    freeAim = null;
    let root = hit.object;
    while (root.parent !== scene) root = root.parent;
    aimed = available.find(target => target.view === root);
    aimOffset = aimed.body.pointToLocalFrame(new Vec3(hit.point.x, hit.point.y, hit.point.z));
    inspect(aimed.asset, aimed.damage);
    status(`Đang ngắm ${targetLabel(aimed)}`);
  });
  select();

  const resize = () => {
    const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight);
    if (camera.aspect !== w / h) {
      camera.aspect = w / h;
      camera.fov = camera.aspect < .8 ? 48 : 40;
      camera.updateProjectionMatrix();
      if (deck && ready) frameLayout();
    }
    renderer.setPixelRatio(renderScale * Math.min(devicePixelRatio, 1.25, Math.sqrt(320000 / (w * h))));
    renderer.setSize(w, h, false);
    renderDirty = true;
  };
  let renderScale = 1;
  let slowFrames = 0;
  new ResizeObserver(resize).observe(host);
  resize();

  function advancePhysics() {
    // Cannon omits contacts between sleeping bodies, or between a sleeper and the static deck.
    const asleep = new Set(world.bodies.filter(body => body.sleepState === Body.SLEEPING));
    world.step(step);
    const previous = supportByBody;
    supportByBody = new Map();
    for (const { enabled, bi, bj, ni } of world.contacts) {
      if (!enabled || Math.abs(ni.y) < .45) continue;
      const [lower, upper] = ni.y > 0 ? [bi, bj] : [bj, bi];
      const target = targetsByBody.get(upper);
      if (!target || target.landedAt !== null) continue;
      const support = targetsByBody.get(lower);
      if (lower !== deck && (!support || support.part !== undefined || support.landedAt !== null)) continue;
      if (target.part !== undefined) {
        target.tableContactAt = clock;
        continue;
      }
      if (!supportByBody.has(upper)) supportByBody.set(upper, new Set());
      supportByBody.get(upper).add(lower);
    }
    for (const [body, supports] of previous) {
      const target = targetsByBody.get(body);
      if (!target) continue;
      const current = supportByBody.get(body) ?? new Set();
      for (const lower of supports) {
        // Use the state before stepping: a ball may have woken either participant during this step.
        if (asleep.has(body) && (lower === deck || asleep.has(lower))) current.add(lower);
      }
      if (current.size) supportByBody.set(body, current);
      const lostSupport = [...supports].some(lower => !current.has(lower));
      if (lostSupport && body.sleepState === Body.SLEEPING) body.wakeUp();
      if (!current.size && [...supports].some(lower => lower !== deck) && replay.recording && replay.has('hit')) {
        target.unsupportedSince = clock;
      }
    }
  }

  let previous = performance.now();
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
      || (ready && targets.some(({ body, landedAt, part }) =>
        part !== undefined || body.sleepState !== Body.SLEEPING || landedAt !== null));
    slowFrames = running && frameTime > .034 && frameTime < .25 ? slowFrames + 1 : 0;
    if (slowFrames >= 9 && renderScale > .75) {
      renderScale = Math.max(.75, renderScale * .86);
      slowFrames = 0;
      resize();
    }
    remainder = running ? remainder + delta : 0;
    while (remainder >= step) {
      remainder -= step;
      clock += step;
      for (const body of floorDebris) body.force.y -= body.mass * gravity * (groundFragments.gravityScale - 1);
      advancePhysics();
      if (referenceSteps > 0 && --referenceSteps === 0) shoot();
      if (shot && (clock - shot.firedAt > 1.15 || shot.position.lengthSquared() > 64
        || clock - (shot.contactAt ?? clock) > .72)) {
        if (!shot.hitBody) status('Đạn không trúng mục tiêu');
        removeShot();
      }
      const fragments = [];
      targets = targets.filter(target => {
        if (target.groundImpact) {
          const groundHit = target.groundImpact;
          markLanding(target, groundHit.point, groundHit.speed);
          target.groundImpact = null;
          const floorThreshold = target.damage === 'chipped' ? groundFractureSpeed * .75 : groundFractureSpeed;
          if (target.damage === 'broken' || groundHit.speed >= floorThreshold) {
            targetCue('fracture', target, { x: groundHit.point.x, y: .065, z: groundHit.point.z },
              Math.min(.72, .32 + groundHit.speed * .075), { grounded: true });
            fragments.push(...splitTarget(target, groundHit));
            removeTarget(target);
            if (target === aimed) {
              aimed = null;
              aimOffset = null;
              inspect(target.asset, 'broken');
            }
            status('Vỡ khi chạm sàn · Mảnh đang lăn và trượt');
            replay.mark('shatter', clock, `${targetLabel(target)} tách thành ${target.asset.parts.length} mảnh GLB khi chạm sàn.`, target.number);
            return false;
          }
          status('Chạm sàn nhẹ · Giữ mẫu nguyên');
        }
        if (target.hit) {
          const { speed, energy, point, normal } = target.hit;
          target.hit = null;
          const breaksApart = target.asset.parts.length > 1 && energy >= shotFractureEnergy
            && (carriesLoad(target) || target.damage !== 'intact' || energy >= directFractureEnergy);
          targetCue(breaksApart ? 'fracture' : 'hit', target, point,
            Math.min(1, .28 + .66 * Math.sqrt(energy / shotFractureEnergy)), { normal });
          replay.mark('hit', clock, `${targetLabel(target)} nhận cú chạm ${speed.toFixed(1)} m/s và ${energy.toFixed(1)} J theo pháp tuyến.`, target.number);
          if (breaksApart) {
            fragments.push(...splitTarget(target));
            replay.mark('damage', clock, `${targetLabel(target)} tách thành ${target.asset.parts.length} mảnh GLB tại điểm trúng.`, target.number);
            removeTarget(target);
            if (target === aimed) {
              aimed = null;
              aimOffset = null;
              inspect(target.asset, 'broken');
            }
            status('Trúng đạn · Vật đã vỡ');
            return false;
          }
          if (energy >= chipEnergy && target.damage === 'intact') {
            chipTarget(target, point, normal);
            replay.mark('damage', clock, `${targetLabel(target)} sứt nhẹ tại điểm trúng, thân vật vẫn nguyên khối.`, target.number);
          }
          status(target.damage === 'chipped' ? 'Trúng đạn · Sứt nhẹ' : 'Trúng đạn · Giữ nguyên trạng thái');
        }
        if (target.neighbor) {
          const { other, speed, energy, point, normal } = target.neighbor;
          target.neighbor = null;
          const pair = target.number < other.number ? `${target.number}:${other.number}` : `${other.number}:${target.number}`;
          if (energy >= .28 && clock - (neighborCueTimes.get(pair) ?? -Infinity) >= .12) {
            neighborCueTimes.set(pair, clock);
            targetCue('neighbor', target, point, Math.min(.62, .22 + Math.sqrt(energy) * .23), { normal });
          }
          if (other.part !== undefined || target.number < other.number) {
            replay.mark('neighbor', clock, `${targetLabel(target)} va với ${targetLabel(other)} ở ${speed.toFixed(1)} m/s.`, target.number);
          }
          if (target.damage === 'intact' && target.landedAt === null
            && energy >= (target.asset.jarProfile ? 5 : 9) && !carriesLoad(target)) {
            chipTarget(target, point, normal);
            replay.mark('transfer', clock, `${targetLabel(target)} sứt nhẹ sau khi va với vật khác (${energy.toFixed(1)} J).`, target.number);
          }
        }
        trackTableDebris(target);
        if (target.landedAt === null) {
          if (target.part === undefined && replay.recording && replay.has('hit')) {
            const { quaternion, velocity } = target.body;
            if (supportByBody.has(target.body)) target.unsupportedSince = null;
            if (target.unsupportedSince !== null && clock - target.unsupportedSince >= .04 && velocity.y < -.15) {
              replay.mark('support', clock, `${targetLabel(target)} mất điểm tựa bên dưới.`, target.number);
              target.unsupportedSince = null;
            }
            if (Math.hypot(quaternion.x, quaternion.z) > .11) {
              replay.mark('tip', clock, `${targetLabel(target)} bắt đầu nghiêng và xoay.`, target.number);
            }
            if (!replay.has('fall', target.number)) {
              target.airTime = velocity.y < -.55 && !supportByBody.has(target.body) ? target.airTime + step : 0;
              if (target.airTime >= .055) replay.mark('fall', clock, `${targetLabel(target)} đã rời điểm tựa và đang rơi theo trọng lực.`, target.number);
            }
          }
          return true;
        }
        const { velocity, angularVelocity } = target.body;
        if (target.groundShard && clock - target.landedAt > .025 && (Math.hypot(velocity.x, velocity.z) > .12
          || Math.hypot(angularVelocity.x, angularVelocity.z) > .48)) {
          replay.mark('roll', clock, `Mảnh của ${targetLabel(target)} tiếp tục lăn hoặc trượt trên sàn.`, target.number);
          const horizontalSpeed = Math.hypot(velocity.x, velocity.z);
          if (horizontalSpeed > .27 && !skitterCues.has(target.number)) {
            skitterCues.add(target.number);
            const { x, z } = target.body.position;
            targetCue('skitter', target, { x, y: .03, z }, Math.min(.53, horizontalSpeed * .55),
              { normal: { x: velocity.x / horizontalSpeed, y: 0, z: velocity.z / horizontalSpeed } });
          }
        }
        const fade = fadeProgress(target);
        if (fade >= 1) {
          removeTarget(target);
          if (target === aimed) {
            aimed = null;
            aimOffset = null;
          }
          if (target.groundShard && replay.has('fade', target.number)) replay.mark('clear', clock, `Một mảnh của ${targetLabel(target)} đã biến mất khỏi sàn.`, target.number);
          if (target.part !== undefined && !target.groundShard) {
            replay.mark('table-clear', clock, `Một mảnh của ${targetLabel(target)} đã biến mất khỏi bàn.`, target.number);
          }
          return false;
        }
        if (fade > 0) {
          if (target.groundShard) replay.mark('fade', clock, `Mảnh của ${targetLabel(target)} bắt đầu mờ dần.`, target.number);
          else if (target.part !== undefined) {
            replay.mark('table-fade', clock, `Mảnh nằm lại trên bàn của ${targetLabel(target)} bắt đầu mờ dần.`, target.number);
          }
          target.visual.fade(1 - fade);
        }
        return true;
      });
      targets.push(...fragments);
      if (replay.recording) {
        const moving = !!shot || targets.some(({ body, landedAt, part }) => landedAt !== null || part !== undefined
          || body.velocity.lengthSquared() > .018 || body.angularVelocity.lengthSquared() > .04);
        const remaining = targets.filter(target => target.part === undefined && target.landedAt === null).length;
        const note = remaining ? `Còn ${remaining} vật trên bàn sau khi chuyển động lắng xuống.` : 'Mặt bàn đã trống.';
        replay.sample(clock, snapshot, moving, note);
        if (replay.has('settled')) status(note);
      }
    }
    const fraction = running ? Math.min(1, remainder / step) : 1;
    feedback.draw(feedback.sample(clock), clock);
    if (shot) {
      shot.previousPosition.lerp(shot.position, fraction, ballView.position);
      shot.previousQuaternion.slerp(shot.quaternion, fraction, ballView.quaternion);
    }
    for (const target of targets) {
      const { body, view } = target;
      body.previousPosition.lerp(body.position, fraction, view.position);
      body.previousQuaternion.slerp(body.quaternion, fraction, view.quaternion);
    }
    const cameraMoved = controls.update();
    marker.visible = !shot && (freeAim !== null || (!!aimed && aimed.landedAt === null));
    if (marker.visible) {
      marker.position.copy(aimPoint());
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
