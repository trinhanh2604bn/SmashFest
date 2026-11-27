import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import {
  ballRadius, disposeGroup, frameCamera, makeArena, makeBall, makeCannon, makeTable,
  targetWidth,
} from './arena.js';
import { loadArenaModels } from './models.js';
import { levels } from './levels.js';
import { createEditor } from './editor.js';
import { createRoundScore, earnedStars, formatPoints } from './round-score.js';
import { enableWorkspaceSizing } from './workspace-size.js';
import '@fontsource-variable/nunito/wght.css';
import { createImpactPlayfield } from './impact-playfield.js';
import { configureImpactWorld, floorGroup, gravity, shotMass } from '../../shared/impact/target-impact.js';
import { createImpactFeedback } from '../../shared/impact/impact-feedback.js';
import shotUrl from '../../shared/impact/sfx/cannon.ogg?url';
import './style.css';

const get = id => document.getElementById(id);
const ui = Object.fromEntries([
  'arena', 'sound', 'reset', 'view-mode', 'level-number', 'level-name', 'shots', 'targets', 'stage',
  'start', 'advance', 'result-kicker', 'last-shot', 'score', 'round-points', 'combo', 'stars',
  'hint', 'levels', 'shot-speed', 'result', 'result-title', 'result-detail', 'retry', 'next', 'error',
].map(id => [id, get(id)]));

const fixedStep = 1 / 120;
const deckTop = 1.34;
const pieceGap = .706;
const tierHeight = .803;
const slideSpeed = .88;
const slideFrequency = 1.5;
const liftHeight = .75;
const liftFrequency = 1.55;
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
  const floor = new CANNON.Body({
    shape: new CANNON.Plane(), mass: 0, material: surfaces.floor, collisionFilterGroup: floorGroup,
  });
  floor.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
  world.addBody(floor);
  const feedback = createImpactFeedback(scene);
  let score = createRoundScore();
  let pendingCombo;
  let comboAt = -Infinity;
  const playfield = createImpactPlayfield({ scene, world, floor, surfaces, feedback, deckTop, step: fixedStep,
    onScored(shotId) {
      const hit = score.hitTarget(shotId);
      if (!hit) return;
      ui.score.textContent = formatPoints(score.points);
      if (hit.title && (!pendingCombo || hit.count >= pendingCombo.count)) pendingCombo = hit;
    },
  });

  const cannon = makeCannon();
  cannon.group.position.set(0, 0, 4.4);
  scene.add(cannon.group);
  const pivotPosition = cannon.pivot.getWorldPosition(new THREE.Vector3());
  const cameraAnchor = pivotPosition.clone();
  const shotSound = new Audio(shotUrl);
  shotSound.preload = 'auto';
  shotSound.volume = .55;
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

  let levelIndex = 0;
  let stageIndex = 0;
  let shots = 0;
  let time = 0;
  let stageTime = 0;
  let lastShot = -Infinity;
  let movingSince = 0;
  let state = 'playing';
  let table;
  let stageFrame;
  let balls = [];
  const editor = createEditor(loadLevel);

  function setHint(value) {
    if (ui.hint.textContent !== value) ui.hint.textContent = value;
  }

  function updateHud() {
    const level = levels[levelIndex];
    ui['level-number'].textContent = String(levelIndex + 1).padStart(2, '0');
    ui['level-name'].textContent = level.name;
    ui.shots.textContent = shots;
    ui.score.textContent = formatPoints(score.points);
    ui.targets.textContent = playfield.targets.length;
    ui.stage.textContent = `${stageIndex + 1}/${level.stages.length}`;
    ui.levels.value = String(levelIndex);
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

  function loadStage() {
    ui.result.hidden = true;
    ui.combo.hidden = true;
    pendingCombo = null;
    comboAt = -Infinity;
    if (table) remove(table);
    balls.forEach(remove);
    balls = [];
    const stage = levels[levelIndex].stages[stageIndex];
    const { layout } = stage;
    const footprint = layout.pieces.filter(([, tier]) => tier === 0);
    const xs = footprint.map(([x]) => x * pieceGap);
    const zs = footprint.map(([, , z]) => z * pieceGap);
    const [minX, maxX] = [Math.min(...xs), Math.max(...xs)];
    const [minZ, maxZ] = [Math.min(...zs), Math.max(...zs)];
    const padding = targetWidth + (layout.margin ?? .22);
    const width = Math.max(2.35, maxX - minX + padding);
    const depth = layout.depth ?? Math.max(.96, maxZ - minZ + padding);
    const x = (minX + maxX) / 2;
    const z = (minZ + maxZ) / 2;
    const { view, thickness, setLift } = makeTable(width, depth, deckTop);
    const body = new CANNON.Body({
      type: stage.motion ? CANNON.Body.KINEMATIC : CANNON.Body.STATIC,
      allowSleep: false,
      sleepSpeedLimit: .02,
      position: new CANNON.Vec3(x, deckTop - thickness / 2, z),
      shape: new CANNON.Box(new CANNON.Vec3(width / 2, thickness / 2, depth / 2)),
      material: surfaces.deck,
    });
    table = { ...attach(view, body), baseX: x, baseY: body.position.y, thickness, setLift, motion: stage.motion };
    playfield.reset(body);
    for (const [column, tier, row, assetIndex] of layout.pieces) {
      const index = assetIndex ?? stage.assetIndex ?? 0;
      const height = index === 5 ? 1.18 : .8;
      playfield.add({
        assetIndex: index,
        position: new CANNON.Vec3(column * pieceGap, deckTop + tier * tierHeight + height / 2 + .005, row * pieceGap),
      });
    }

    // Let the actual deck and hulls settle before motion or shooting starts.
    for (let step = 0; step < 3 / fixedStep; step++) {
      if (playfield.targets.every(target => target.body.sleepState === CANNON.Body.SLEEPING)) break;
      playfield.step(time, true);
    }
    const initialTarget = playfield.targets[layout.aim ?? 0];
    neutralAim.copy(initialTarget.body.position);
    neutralAim.y += .14;
    const travelX = stage.motion === 'slide' ? slideSpeed / slideFrequency * 2 : 0;
    const travelY = stage.motion === 'lift' ? liftHeight : 0;
    const framingPoints = [];
    function addFrameBounds(centerX, y, centerZ, halfWidth, halfDepth) {
      for (const signX of [-1, 1]) {
        for (const signZ of [-1, 1]) {
          const px = centerX + signX * halfWidth;
          const pz = centerZ + signZ * halfDepth;
          framingPoints.push(new THREE.Vector3(px, y, pz));
          if (travelX || travelY) framingPoints.push(new THREE.Vector3(px + travelX, y + travelY, pz));
        }
      }
    }
    addFrameBounds(x, deckTop, z, width / 2 + .035, depth / 2 + .035);
    for (const target of playfield.targets) {
      const { position } = target.body;
      addFrameBounds(position.x, position.y + target.asset.height / 2 + .06, position.z, targetWidth / 2, targetWidth / 2);
    }
    stageFrame = {
      width,
      depth,
      top: Math.max(...framingPoints.map(point => point.y)),
      x,
      z,
      travelX,
      anchor: cameraAnchor,
      framingPoints,
    };
    updateHud();
    editor.showStage(levelIndex, stageIndex);
    ui['last-shot'].hidden = shots > 0;
    frameStage(camera.aspect);
    resetAim();
    cannon.reset();
    shotSound.pause();
    cannon.aim(aimDirection.subVectors(neutralAim, pivotPosition));
    scene.updateMatrixWorld();
    stageTime = time;
    movingSince = time;
    state = 'playing';
    setHint(shots ? readyHint : settlingHint);
  }

  function loadLevel(index) {
    levelIndex = index;
    stageIndex = 0;
    shots = levels[index].shots;
    score = createRoundScore();
    lastShot = -Infinity;
    loadStage();
    state = 'intro';
    setHint('Nhấn Bắt đầu chơi để vào màn.');
    showScreen('intro');
  }

  function aim() {
    if (!showingAim) updateDefaultPointer();
    aimRay.setFromCamera(pointer, camera);
    const aimable = playfield.targets.filter(target => target.landedAt === null).map(target => target.view);
    const hit = aimRay.intersectObjects(aimable, true)[0];
    aimPlane.constant = -table.body.position.z;
    if (hit) {
      targetPoint.copy(hit.point);
    } else if (!aimRay.ray.intersectPlane(aimPlane, targetPoint)) {
      targetPoint.copy(neutralAim);
    }
    targetPoint.x = THREE.MathUtils.clamp(targetPoint.x, -4.4, 4.4);
    targetPoint.y = THREE.MathUtils.clamp(targetPoint.y, .12, stageFrame.top + .3);
    targetPoint.z = Math.min(targetPoint.z, stageFrame.z + stageFrame.depth / 2);
    cannon.aim(aimDirection.subVectors(targetPoint, pivotPosition));
    reticle.position.copy(targetPoint);
    reticle.quaternion.copy(camera.quaternion);
  }

  function shoot() {
    if (state !== 'playing' || shots <= 0 || time - lastShot < shotCooldown) return;
    if (!playfield.targets.some(target => target.landedAt === null)) return;
    feedback.unlock();
    aim();
    const speed = Number(ui['shot-speed'].value);
    const displacement = targetPoint.clone().sub(pivotPosition);
    const flight = Math.max(.08, (displacement.length() - cannon.muzzleDistance) / speed);
    displacement.y += gravity * flight ** 2 / 2;
    const direction = displacement.clone().normalize();
    const muzzle = pivotPosition.clone().addScaledVector(direction, cannon.muzzleDistance);
    const velocity = displacement.addScaledVector(direction, -cannon.muzzleDistance).multiplyScalar(1 / flight);
    cannon.aim(direction);
    cannon.fire();
    if (!feedback.muted) {
      shotSound.currentTime = 0;
      shotSound.play().catch(() => {});
    }
    const body = new CANNON.Body({
      mass: shotMass, material: surfaces.ball,
      position: new CANNON.Vec3(muzzle.x, muzzle.y, muzzle.z),
      velocity: new CANNON.Vec3(velocity.x, velocity.y, velocity.z),
      shape: new CANNON.Sphere(ballRadius),
      linearDamping: .12, angularDamping: .22,
    });
    body.isShot = true;
    body.shotId = levels[levelIndex].shots - shots + 1;
    body.addEventListener('collide', ({ body: other, contact }) => {
      if ((other !== floor && other !== table.body) || body.contactAt !== undefined) return;
      body.contactAt = time;
      const point = body.position.vadd(contact.bi === body ? contact.ri : contact.rj);
      if (other === floor) point.y = .025;
      feedback.emit(other === floor ? 'ground' : 'neighbor', point, time, { strength: .42, wood: true });
    });
    balls.push({ ...attach(makeBall(), body), start: time });
    shots--;
    lastShot = time;
    updateHud();
    if (shots === 0) {
      ui['last-shot'].hidden = false;
      setHint(settlingHint);
    }
  }

  function showScreen(mode) {
    const level = levels[levelIndex];
    const intro = mode === 'intro';
    const won = mode === 'won';
    const cleared = mode === 'cleared';
    const finalLevel = levelIndex === levels.length - 1;
    ui.result.dataset.mode = mode;
    ui['last-shot'].hidden = true;
    ui.combo.hidden = true;
    const used = level.shots - shots;
    const stars = earnedStars(won, used, level.shots);
    ui.stars.hidden = intro || cleared;
    ui.stars.setAttribute('aria-label', `${stars} trên 3 sao`);
    [...ui.stars.children].forEach((star, i) => star.classList.toggle('earned', i < stars));
    ui['result-kicker'].textContent = `VỊNH NẮNG  ·  MÀN ${String(levelIndex + 1).padStart(2, '0')}`;
    ui['result-title'].textContent = intro ? level.name : cleared ? 'Sạch bàn rồi!' : won ? (finalLevel ? 'Chinh phục Vịnh Nắng!' : 'Thắng màn!') : 'Hết đạn rồi!';
    ui['round-points'].hidden = intro;
    ui['round-points'].textContent = formatPoints(score.points) + ' điểm';
    ui['result-detail'].textContent = intro
      ? `Bạn có ${level.shots} viên đạn. Chạm vào mục tiêu để bắn đổ tất cả${level.stages.length > 1 ? ' qua ' + level.stages.length + ' chặng' : ''}.`
      : cleared ? `Đã dọn chặng ${stageIndex + 1}. Còn ${shots} viên cho chặng tiếp theo.`
      : won ? `${used} phát bắn · Chuỗi tốt nhất: ${score.best} vật`
        : `Còn ${playfield.targets.length} mục tiêu trên bàn. ${playfield.targets.length === 1 ? 'Lượt tới, thử ngắm vào thân vật nhé.' : 'Thử nhắm vào điểm tựa ở hàng dưới nhé.'}`;
    ui.start.hidden = !intro;
    ui.retry.hidden = intro || cleared;
    ui.next.hidden = !cleared && (!won || finalLevel);
    ui.next.textContent = cleared ? 'Chặng tiếp theo →' : 'Màn tiếp theo →';
    ui.retry.classList.toggle('primary', won && finalLevel);
    ui.result.hidden = false;
    canvas.tabIndex = -1;
    if (!intro) ui['result-title'].focus({ preventScroll: true });
  }

  function beginRound() {
    state = 'playing';
    ui.result.hidden = true;
    canvas.tabIndex = 0;
    canvas.focus({ preventScroll: true });
    setHint(readyHint);
  }

  function finish(won) {
    state = won ? 'won' : 'lost';
    editor.record(levelIndex, won, levels[levelIndex].shots - shots, playfield.targets.length, formatPoints(score.points));
    setHint(won ? 'Đã hoàn thành màn' : 'Chơi lại để thử cách ngắm khác');
    feedback.playResult(won);
    showScreen(state);
  }

  function updateTable() {
    const seconds = time - stageTime;
    if (table.motion === 'slide') table.body.velocity.x = slideSpeed * Math.sin(seconds * slideFrequency);
    if (table.motion === 'lift') {
      const height = table.baseY + liftHeight * .5 * (1 - Math.cos(seconds * liftFrequency));
      table.body.velocity.y = (height - table.body.position.y) / fixedStep;
    }
  }

  function updateGame() {
    if (state !== 'playing') return;

    const { items, targets, lastImpact } = playfield;
    if (targets.length === 0) {
      if (items.length) {
        setHint('Đang dọn mảnh vỡ…');
        return;
      }
      if (stageIndex + 1 === levels[levelIndex].stages.length) {
        finish(true);
      } else if (shots === 0) {
        stageIndex++;
        loadStage();
        finish(false);
      } else {
        state = 'cleared';
        showScreen(state);
        setHint('Đã dọn sạch bàn · Sang chặng tiếp theo');
      }
      return;
    }

    const surfaceY = table.body.position.y + table.thickness / 2;
    if (shots > 0 || targets.some(target => target.landedAt !== null || target.body.position.y < surfaceY - .1)) return;
    const deckVelocity = table.body.velocity;
    if (targets.some(({ body }) =>
      Math.abs(body.velocity.y - deckVelocity.y) > .38 || Math.abs(body.velocity.x - deckVelocity.x) > .75
      || body.angularVelocity.lengthSquared() > .8)) {
      movingSince = time;
    }
    const quietFor = time - Math.max(lastImpact, movingSince);
    const sinceLastShot = time - lastShot;
    if ((sinceLastShot >= 1.3 && quietFor >= .48 && items.length === targets.length) || sinceLastShot >= 6) finish(false);
  }

  function updatePhysics() {
    scenery.update(fixedStep);
    if (state !== 'playing') return;
    time += fixedStep;
    cannon.update(fixedStep);
    updateTable();
    const previousCount = playfield.targets.length;
    playfield.step(time);
    if (pendingCombo && time - comboAt >= .18) {
      ui.combo.firstElementChild.textContent = pendingCombo.title;
      ui.combo.lastElementChild.textContent = `${pendingCombo.count} vật · ${formatPoints(pendingCombo.chainPoints)} điểm`;
      ui.combo.hidden = false;
      feedback.playCombo(pendingCombo.count);
      ui.combo.animate([{ transform: 'scale(.82)' }, { transform: 'scale(1.06)' }, { transform: 'scale(1)' }], { duration: matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 220 });
      comboAt = time;
      pendingCombo = null;
    } else if (!ui.combo.hidden && time - comboAt > 1.15) ui.combo.hidden = true;
    if (playfield.targets.length !== previousCount) updateHud();
    balls = balls.filter(ball => {
      const { body } = ball;
      if (time - ball.start < 1.75 && body.position.lengthSquared() < 100
        && time - (body.contactAt ?? time) < .72) return true;
      remove(ball);
      return false;
    });
    updateGame();
  }

  function resetAim() {
    showingAim = false;
    updateDefaultPointer();
  }

  function updateDefaultPointer() {
    const projectedAim = neutralAim.clone();
    projectedAim.x += table.body.position.x - table.baseX;
    projectedAim.y += table.body.position.y - table.baseY;
    projectedAim.project(camera);
    pointer.set(projectedAim.x, projectedAim.y);
  }

  function frameStage(aspect) {
    cannon.group.position.z = firstPerson ? 4.56 : 4.4;
    cannon.pivot.getWorldPosition(pivotPosition);
    if (stageFrame) stageFrame.topLimit = .71;
    frameCamera(camera, aspect, firstPerson, stageFrame);
  }

  function toggleView() {
    firstPerson = !firstPerson;
    frameStage(camera.aspect);
    resetAim();
    ui['view-mode'].setAttribute('aria-pressed', String(firstPerson));
    ui['view-mode'].textContent = firstPerson ? 'Góc thứ nhất' : 'Góc toàn cảnh';
  }

  function resize() {
    const width = Math.max(1, ui.arena.clientWidth);
    const height = Math.max(1, ui.arena.clientHeight);
    frameStage(width / height);
    renderer.setSize(width, height, false);
    if (stageFrame) resetAim();
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
      if (!showingAim) updateDefaultPointer();
      const [x, y] = arrows[event.key];
      pointer.x = THREE.MathUtils.clamp(pointer.x + x * .04, -.9, .9);
      pointer.y = THREE.MathUtils.clamp(pointer.y + y * .04, -.8, .8);
      showingAim = true;
    }
  });
  window.addEventListener('keydown', event => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const key = event.key.toLowerCase();
    if (event.target.closest('select,input,textarea')) return;
    if (key === 'r' && !event.repeat) loadLevel(levelIndex);
    if (key === 'v' && !event.repeat) toggleView();
  });
  ui['view-mode'].addEventListener('click', toggleView);
  ui['view-mode'].disabled = false;
  ui.reset.addEventListener('click', () => loadLevel(levelIndex));
  ui.start.addEventListener('click', beginRound);
  ui.retry.addEventListener('click', () => { loadLevel(levelIndex); beginRound(); });
  ui.advance.addEventListener('click', () => loadLevel(levelIndex + 1));
  ui.next.addEventListener('click', () => {
    if (state === 'cleared') {
      stageIndex++;
      loadStage();
      canvas.tabIndex = 0;
      canvas.focus({preventScroll:true});
    } else if (levelIndex + 1 < levels.length) loadLevel(levelIndex + 1);
  });
  ui.sound.addEventListener('click', () => {
    feedback.toggle();
    shotSound.muted = feedback.muted;
    ui.sound.setAttribute('aria-pressed', String(!feedback.muted));
    ui.sound.textContent = feedback.muted ? 'Đang tắt' : 'Đang bật';
  });
  ui.levels.append(...levels.map((level, index) => new Option(`${index + 1}. ${level.name}`, index)));
  ui.levels.addEventListener('change', () => loadLevel(Number(ui.levels.value)));

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
    for (const { view, body } of [table, ...playfield.items, ...balls]) {
      view.position.copy(body.position);
      view.quaternion.copy(body.quaternion);
    }
    if (table.motion === 'lift') table.setLift(table.body.position.y - table.baseY);
    scene.updateMatrixWorld();
    reticle.visible = showingAim && state === 'playing' && shots > 0;
    if (reticle.visible && time - lastShot > .16) aim();
    feedback.draw(feedback.sample(time), time);
    renderer.render(scene, camera);
  });
}

enableWorkspaceSizing();
start().catch(error => {
  ui.error.hidden = false;
  console.error(error);
});
