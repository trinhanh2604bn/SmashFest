import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import {
  ballRadius, disposeGroup, frameCamera, makeArena, makeBall, makeCannon, makeTable,
  targetHeight, targetWidth,
} from './arena.js';
import { loadArenaModels, makeFittedModel } from './models.js';
import { TargetVisual } from './target-visual.js';
import { configureImpactWorld, damageSwapSpeed, gravity, landingFade, landingHold, makeTargetShape, shotMass } from './target-impact.js';
import './style.css';

const levels = [
  { name: 'Sân phơi gốm', shots: 4, stages: [
    { rows: [[[-1.2, 0, 0], [0, 0, 1], [1.2, 0, 2], [0, -.84, 3]], [[0, 0, 0]]] },
  ] },
  { name: 'Bàn đưa ngang', shots: 5, stages: [
    { motion: 'slide', rows: [[[-1.25, 0, 2], [-.42, 0, 0], [.42, 0, 3], [1.25, 0, 1], [-.42, -.87, 1], [.42, -.87, 0]], [[-.42, 0, 1], [.42, 0, 2]]] },
  ] },
  { name: 'Phiên chợ đêm', shots: 8, stages: [
    { motion: 'turn', rows: [[[-1.13, .05, 4, 'jar', 'tall'], [0, 0, 1, 'crate'], [1.13, .05, 2], [-.62, -.83, 2], [.62, -.83, 3]], [[0, 0, 0]]] },
    { motion: 'slide', rows: [[[-1.18, .15, 1, 'crate'], [0, .15, 4], [1.18, .15, 2, 'crate'], [-.45, -.84, 3], [.45, -.84, 0]], [[-1.18, .15, 0], [0, .15, 2], [1.18, .15, 1]]] },
  ] },
];

const get = id => document.getElementById(id);
const ui = Object.fromEntries([
  'arena', 'sound', 'reset', 'view-mode', 'level-number', 'level-name', 'shots', 'ammo', 'targets', 'stage',
  'hint', 'levels', 'result', 'result-title', 'result-detail', 'retry', 'next', 'error',
].map(id => [id, get(id)]));

const fixedStep = 1 / 120;
const deckTop = 1.19;
const tableEdgeMargin = .11;
const minimumTableSize = .9;
const shotCooldown = .34;
const readyHint = 'Chạm hoặc nhấp vào mục tiêu để bắn';
const settlingHint = 'Hết đạn · Đang chờ vật thể dừng lại';

async function start() {
  ui.hint.textContent = 'Đang tải mô hình 3D…';
  await loadArenaModels();
  const { scene, camera, renderer, scenery } = makeArena(ui.arena);
  const canvas = renderer.domElement;
  canvas.tabIndex = 0;
  canvas.setAttribute('aria-label', 'Dùng phím mũi tên để ngắm và phím cách để bắn');

  const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -gravity, 0), allowSleep: true });
  const surfaces = configureImpactWorld(world);
  const floor = new CANNON.Body({ shape: new CANNON.Plane(), mass: 0, material: surfaces.floor });
  floor.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
  world.addBody(floor);

  const cannon = makeCannon();
  cannon.group.position.set(0, 0, 4.4);
  scene.add(cannon.group);
  const pivotPosition = cannon.pivot.getWorldPosition(new THREE.Vector3());
  const reticle = new THREE.Mesh(
    new THREE.RingGeometry(.15, .182, 36),
    new THREE.MeshBasicMaterial({ color: '#ffe49e', depthTest: false, transparent: true, opacity: .93 }),
  );
  reticle.renderOrder = 10;
  reticle.visible = false;
  scene.add(reticle);

  const pointer = new THREE.Vector2();
  const neutralAim = new THREE.Vector3(0, 1.65, 0);
  const targetPoint = new THREE.Vector3();
  const aimDirection = new THREE.Vector3();
  const aimRay = new THREE.Raycaster();
  const aimPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  let showingAim = false;
  let firstPerson = true;
  let soundEnabled = false;
  let audio;

  let levelIndex = 0;
  let stageIndex = 0;
  let shots = 0;
  let time = 0;
  let stageTime = 0;
  let lastShot = -Infinity;
  let lastImpact = -Infinity;
  let lastHitSound = -Infinity;
  let movingSince = 0;
  let transitionAt = 0;
  let state = 'playing';
  let table;
  let targets = [];
  let balls = [];

  function playTone(event, strength = 1) {
    if (!soundEnabled || !audio || audio.state !== 'running') return;
    const settings = {
      shot: [135, 43, .19, .26, 'triangle'],
      jar: [420, 120, .13, .16, 'triangle'],
      crate: [185, 63, .18, .18, 'triangle'],
      win: [520, 850, .31, .16, 'sine'],
      lose: [270, 112, .27, .15, 'sine'],
    };
    const [from, to, duration, volume, wave] = settings[event];
    const now = audio.currentTime;
    const tone = audio.createOscillator();
    const gain = audio.createGain();
    tone.type = wave;
    tone.frequency.setValueAtTime(from, now);
    tone.frequency.exponentialRampToValueAtTime(to, now + duration);
    gain.gain.setValueAtTime(volume * (.45 + .55 * strength), now);
    gain.gain.exponentialRampToValueAtTime(.001, now + duration);
    tone.connect(gain).connect(audio.destination);
    tone.start();
    tone.stop(now + duration);
  }

  function setHint(value) {
    if (ui.hint.textContent !== value) ui.hint.textContent = value;
  }

  function updateHud() {
    const level = levels[levelIndex];
    ui['level-number'].textContent = String(levelIndex + 1).padStart(2, '0');
    ui['level-name'].textContent = level.name;
    ui.shots.textContent = shots;
    ui.targets.textContent = targets.length;
    ui.stage.textContent = level.stages.length > 1 ? `Chặng ${stageIndex + 1}/${level.stages.length}` : '';
    const dots = Array.from({ length: level.shots }, (_, index) => {
      const dot = document.createElement('i');
      dot.classList.toggle('filled', index < shots);
      return dot;
    });
    ui.ammo.replaceChildren(...dots);
    [...ui.levels.children].forEach((button, index) => button.setAttribute('aria-current', String(index === levelIndex)));
  }

  function attach(view, body) {
    world.addBody(body);
    scene.add(view);
    view.position.copy(body.position);
    view.quaternion.copy(body.quaternion);
    return { view, body };
  }

  function remove({ view, body, visual }) {
    world.removeBody(body);
    visual?.dispose();
    disposeGroup(view);
  }

  function trackTargetCollision(target, { body: other, contact }) {
    if (target.landedAt !== null) return;
    if (other === floor) {
      target.landedAt = time;
    } else if (!other.isShot && !(other.isTarget && lastShot >= stageTime)) {
      return;
    }
    const speed = contact.getImpactVelocityAlongNormal();
    if (other.isShot) {
      if (speed < 1.8 || (other.spent && other.hitBody !== target.body)) return;
      other.hitBody = target.body;
      other.spent = true;
    }
    target.impactSpeed = Math.max(target.impactSpeed, speed);
  }

  function applyTargetImpact(target) {
    const speed = target.impactSpeed;
    if (speed < 1.8) {
      target.impactSpeed = 0;
      return;
    }
    target.impactSpeed = 0;
    lastImpact = time;
    if (time - lastHitSound >= .07) {
      playTone(target.kind, Math.min(1, speed / damageSwapSpeed));
      lastHitSound = time;
    }
    if (target.damaged || speed < damageSwapSpeed) return;
    target.damaged = true;
    // Use the intact model's transform so the authored parts retain their relative placement.
    const damaged = makeFittedModel(
      `${target.modelKey}-damaged`, targetWidth, target.height, targetWidth, target.modelKey,
    );
    if (!damaged) return;
    disposeGroup(target.view.children[0]);
    target.view.add(damaged);
  }

  function loadStage() {
    if (table) remove(table);
    for (const item of [...targets, ...balls]) remove(item);
    targets = [];
    balls = [];
    const stage = levels[levelIndex].stages[stageIndex];
    const positions = stage.rows.flat();
    const xs = positions.map(([x]) => x);
    const zs = positions.map(([, z]) => z);
    const [minX, maxX] = [Math.min(...xs), Math.max(...xs)];
    const [minZ, maxZ] = [Math.min(...zs), Math.max(...zs)];
    const padding = targetWidth + 2 * tableEdgeMargin;
    const width = Math.max(minimumTableSize, maxX - minX + padding);
    const depth = Math.max(minimumTableSize, maxZ - minZ + padding);
    const { view, thickness } = makeTable(width, depth, deckTop);
    const body = new CANNON.Body({
      type: stage.motion ? CANNON.Body.KINEMATIC : CANNON.Body.STATIC,
      position: new CANNON.Vec3((minX + maxX) / 2, deckTop - thickness / 2, (minZ + maxZ) / 2),
      shape: new CANNON.Box(new CANNON.Vec3(width / 2, thickness / 2, depth / 2)),
    });
    table = attach(view, body);
    for (const [row, items] of stage.rows.entries()) {
      for (const [x, z, color, kind = 'jar', variant] of items) {
        const height = variant === 'tall' ? 1.18 : targetHeight;
        const targetBody = new CANNON.Body({
          mass: kind === 'crate' ? 1.65 : .85,
          position: new CANNON.Vec3(x, deckTop + targetHeight * row + height / 2 + .005, z),
          shape: makeTargetShape(kind, targetWidth, height),
          material: surfaces.target,
          sleepSpeedLimit: .12,
          sleepTimeLimit: .65,
          linearDamping: .08,
          angularDamping: .12,
        });
        const modelKey = kind === 'crate' ? 'crate' : `jar${color}${variant ? `-${variant}` : ''}`;
        const intact = makeFittedModel(modelKey, targetWidth, height, targetWidth);
        if (!intact) throw new Error(`Missing target GLB: ${modelKey}`);
        const view = new THREE.Group();
        view.add(intact);
        const target = {
          ...attach(view, targetBody),
          visual: new TargetVisual(view),
          kind,
          modelKey,
          height,
          impactSpeed: 0,
          damaged: false,
          landedAt: null,
        };
        targetBody.isTarget = true;
        targetBody.addEventListener('collide', event => trackTargetCollision(target, event));
        targets.push(target);
      }
    }
    stageTime = time;
    lastImpact = time;
    lastHitSound = -Infinity;
    movingSince = time;
    state = 'playing';
    updateHud();
    setHint(shots ? readyHint : settlingHint);
  }

  function loadLevel(index) {
    if (ui.result.open) ui.result.close();
    levelIndex = index;
    stageIndex = 0;
    shots = levels[index].shots;
    lastShot = -Infinity;
    resetAim();
    loadStage();
    cannon.reset();
    cannon.aim(aimDirection.subVectors(neutralAim, pivotPosition));
  }

  function aim() {
    aimRay.setFromCamera(pointer, camera);
    const aimable = targets.filter(target => target.landedAt === null).map(target => target.view);
    const hit = aimRay.intersectObjects(aimable, true)[0];
    aimPlane.constant = -table.body.position.z;
    if (hit) {
      targetPoint.copy(hit.point);
    } else if (!aimRay.ray.intersectPlane(aimPlane, targetPoint)) {
      targetPoint.copy(neutralAim);
    }
    targetPoint.x = THREE.MathUtils.clamp(targetPoint.x, -4.4, 4.4);
    targetPoint.y = THREE.MathUtils.clamp(targetPoint.y, .12, 4.4);
    targetPoint.z = Math.min(targetPoint.z, 1.45);
    cannon.aim(aimDirection.subVectors(targetPoint, pivotPosition));
    reticle.position.copy(targetPoint);
    reticle.quaternion.copy(camera.quaternion);
  }

  function shoot() {
    if (state !== 'playing' || shots <= 0 || time - lastShot < shotCooldown) return;
    aim();
    const displacement = targetPoint.clone().sub(pivotPosition);
    const flight = Math.max(.08, (displacement.length() - cannon.muzzleDistance) / 23);
    displacement.y += gravity * flight ** 2 / 2;
    const direction = displacement.clone().normalize();
    const muzzle = pivotPosition.clone().addScaledVector(direction, cannon.muzzleDistance);
    const velocity = displacement.addScaledVector(direction, -cannon.muzzleDistance).multiplyScalar(1 / flight);
    cannon.aim(direction);
    cannon.fire();
    const body = new CANNON.Body({
      mass: shotMass,
      position: new CANNON.Vec3(muzzle.x, muzzle.y, muzzle.z),
      velocity: new CANNON.Vec3(velocity.x, velocity.y, velocity.z),
      shape: new CANNON.Sphere(ballRadius),
      linearDamping: .04,
    });
    body.isShot = true;
    body.addEventListener('collide', event => {
      if (event.body === floor || event.body === table.body) body.spent = true;
    });
    balls.push({ ...attach(makeBall(), body), start: time });
    shots--;
    lastShot = time;
    playTone('shot');
    updateHud();
    if (shots === 0) setHint(settlingHint);
  }

  function finish(won) {
    state = won ? 'won' : 'lost';
    const finalLevel = levelIndex === levels.length - 1;
    ui['result-title'].textContent = won ? (finalLevel ? 'Hoàn thành phiên chợ!' : 'Dọn sạch bàn!') : 'Hết đạn rồi!';
    ui['result-detail'].textContent = won
      ? `Bạn hoàn thành màn với ${shots} viên đạn còn lại.`
      : `Còn ${targets.length} mục tiêu trên sân.`;
    ui.next.hidden = !won || finalLevel;
    setHint(won ? 'Đã hoàn thành màn' : 'Chơi lại để thử cách ngắm khác');
    playTone(won ? 'win' : 'lose');
    ui.result.showModal();
  }

  function updateTable() {
    const seconds = time - stageTime;
    const motion = levels[levelIndex].stages[stageIndex].motion;
    if (motion === 'slide') table.body.velocity.x = .88 * Math.sin(seconds * 1.5);
    if (motion === 'turn') table.body.angularVelocity.y = .37;
  }

  function updateGame() {
    if (state === 'transition') {
      if (time >= transitionAt) {
        stageIndex++;
        loadStage();
      }
      return;
    }
    if (state !== 'playing') return;

    const previousCount = targets.length;
    targets = targets.filter(target => {
      applyTargetImpact(target);
      if (target.landedAt === null) return true;
      const fadeTime = time - target.landedAt - landingHold;
      if (fadeTime <= 0) return true;
      if (fadeTime < landingFade) {
        target.visual.fade(1 - fadeTime / landingFade);
        return true;
      }
      remove(target);
      return false;
    });
    if (targets.length !== previousCount) updateHud();
    if (targets.length === 0) {
      if (stageIndex + 1 === levels[levelIndex].stages.length) {
        finish(true);
      } else {
        state = 'transition';
        transitionAt = time + .85;
        setHint('Đã dọn sạch bàn · Sang chặng tiếp theo');
      }
      return;
    }

    if (shots > 0 || targets.some(target => target.landedAt !== null || target.body.position.y < deckTop - .1)) return;
    const relativeTableSpeed = table.body.velocity.x;
    if (targets.some(({ body }) =>
      Math.abs(body.velocity.y) > .38 || Math.abs(body.velocity.x - relativeTableSpeed) > .75 || body.angularVelocity.lengthSquared() > .8)) {
      movingSince = time;
    }
    const quietFor = time - Math.max(lastImpact, movingSince);
    const sinceLastShot = time - lastShot;
    if ((sinceLastShot >= 1.3 && quietFor >= .48) || sinceLastShot >= 6) finish(false);
  }

  function updatePhysics() {
    time += fixedStep;
    cannon.update(fixedStep);
    scenery.update(fixedStep);
    updateTable();
    world.step(fixedStep);
    updateGame();
    balls = balls.filter(ball => {
      if (!ball.body.spent && time - ball.start < 3.8 && ball.body.position.lengthSquared() < 280) return true;
      remove(ball);
      return false;
    });
  }

  function resetAim() {
    showingAim = false;
    if (firstPerson) {
      const projectedAim = neutralAim.clone().project(camera);
      pointer.set(projectedAim.x, projectedAim.y);
    } else {
      pointer.set(0, .14);
    }
  }

  function toggleView() {
    firstPerson = !firstPerson;
    frameCamera(camera, camera.aspect, firstPerson);
    resetAim();
    ui['view-mode'].setAttribute('aria-pressed', String(firstPerson));
  }

  function resize() {
    const width = Math.max(1, ui.arena.clientWidth);
    const height = Math.max(1, ui.arena.clientHeight);
    frameCamera(camera, width / height, firstPerson);
    renderer.setSize(width, height, false);
  }

  function movePointer(event) {
    const rect = canvas.getBoundingClientRect();
    pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, 1 - (event.clientY - rect.top) / rect.height * 2);
    showingAim = true;
  }

  canvas.addEventListener('pointermove', movePointer);
  canvas.addEventListener('pointerleave', () => { showingAim = false; });
  canvas.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0) return;
    event.preventDefault();
    canvas.focus({ preventScroll: true });
    movePointer(event);
    shoot();
    if (event.pointerType !== 'mouse') showingAim = false;
  });
  canvas.addEventListener('keydown', event => {
    const arrows = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] };
    if (event.key === ' ') {
      event.preventDefault();
      shoot();
    } else if (arrows[event.key]) {
      event.preventDefault();
      const [x, y] = arrows[event.key];
      pointer.x = THREE.MathUtils.clamp(pointer.x + x * .04, -.9, .9);
      pointer.y = THREE.MathUtils.clamp(pointer.y + y * .04, -.8, .8);
      showingAim = true;
    }
  });
  window.addEventListener('keydown', event => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const key = event.key.toLowerCase();
    if (key === 'r') loadLevel(levelIndex);
    if (key === 'v' && !event.repeat && !ui.result.open) toggleView();
  });
  ui['view-mode'].addEventListener('click', toggleView);
  ui['view-mode'].disabled = false;
  ui.reset.addEventListener('click', () => loadLevel(levelIndex));
  ui.retry.addEventListener('click', () => loadLevel(levelIndex));
  ui.next.addEventListener('click', () => {
    if (levelIndex + 1 < levels.length) loadLevel(levelIndex + 1);
  });
  ui.sound.addEventListener('click', async () => {
    try {
      audio ??= new AudioContext();
      if (audio.state !== 'running') await audio.resume();
      soundEnabled = !soundEnabled;
      ui.sound.setAttribute('aria-pressed', String(soundEnabled));
      ui.sound.textContent = soundEnabled ? 'Tắt tiếng' : 'Bật tiếng';
    } catch {
      ui.sound.textContent = 'Âm thanh không khả dụng';
      ui.sound.disabled = true;
    }
  });
  levels.forEach((level, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = `Màn ${index + 1}`;
    button.title = level.name;
    button.addEventListener('click', () => loadLevel(index));
    ui.levels.append(button);
  });

  resize();
  new ResizeObserver(resize).observe(ui.arena);
  loadLevel(0);
  let previous = performance.now();
  let remainder = 0;
  renderer.setAnimationLoop(now => {
    remainder += Math.min(.075, Math.max(0, (now - previous) / 1000));
    previous = now;
    while (remainder >= fixedStep) {
      updatePhysics();
      remainder -= fixedStep;
    }
    for (const { view, body } of [table, ...targets, ...balls]) {
      view.position.copy(body.position);
      view.quaternion.copy(body.quaternion);
    }
    scene.updateMatrixWorld();
    reticle.visible = showingAim && state === 'playing' && shots > 0;
    if (reticle.visible && time - lastShot > .16) aim();
    renderer.render(scene, camera);
  });
}

start().catch(error => {
  ui.error.hidden = false;
  console.error(error);
});
