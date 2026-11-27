import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { cloneArenaModel, makeFittedModel, sharedModelGeometry } from './models.js';
import { createCannonFlash } from '../../shared/impact/cannon-flash.js';

export const targetWidth = .7;
export const targetHeight = .8;
export const ballRadius = .17;

const dark = new THREE.MeshStandardMaterial({ color: '#203541', roughness: .42 });

function mesh(geometry, surface) {
  const object = new THREE.Mesh(geometry, surface);
  object.castShadow = true;
  object.receiveShadow = true;
  return object;
}

export function makeBall() {
  const diameter = 2 * ballRadius;
  return makeFittedModel('ball', diameter, diameter, diameter)
    ?? mesh(new THREE.SphereGeometry(ballRadius, 20, 16), dark);
}

export function makeTable(width, depth, surfaceY) {
  const { model } = cloneArenaModel('table');
  const deck = model.getObjectByName('TableDeck');
  const surface = model.getObjectByName('TableSurface');
  const details = model.getObjectByName('TableDetails');
  const top = model.getObjectByName('TableTop');
  const collar = model.getObjectByName(THREE.PropertyBinding.sanitizeNodeName('Vành đỡ mặt bàn'));
  const column = model.getObjectByName(THREE.PropertyBinding.sanitizeNodeName('Cổ trụ'));
  if (!deck || !surface || !details || !top || !collar || !column) throw new Error('Incomplete Bàn Lam Kim rig');

  const surfaceBounds = new THREE.Box3().setFromObject(surface);
  const deckBounds = new THREE.Box3().setFromObject(deck);
  const size = surfaceBounds.getSize(new THREE.Vector3());
  const scale = surfaceY / surfaceBounds.max.y;
  const thickness = scale * (surfaceBounds.max.y - deckBounds.min.y);
  const scaleX = width / (size.x * scale);
  const scaleZ = depth / (size.z * scale);
  deck.scale.set(scaleX, 1, scaleZ);
  for (const detail of details.children) {
    detail.position.x *= scaleX;
    detail.position.z *= scaleZ;
  }
  model.scale.multiplyScalar(scale);
  const restY = thickness / 2 - surfaceY;
  model.position.y = restY;
  const topY = top.position.y;
  const collarY = collar.position.y;
  const columnY = column.position.y;
  const columnScale = column.scale.y;
  column.geometry.computeBoundingBox();
  const { min, max } = column.geometry.boundingBox;
  const view = new THREE.Group();
  view.add(model);
  return {
    view, thickness,
    setLift(rise) {
      const extension = rise / scale;
      const stretch = extension / (max.y - min.y);
      model.position.y = restY - rise;
      top.position.y = topY + extension;
      collar.position.y = collarY + extension;
      column.scale.y = columnScale + stretch;
      column.position.y = columnY - stretch * min.y;
    },
  };
}

export function makeCannon() {
  const { model, animations } = cloneArenaModel('cannon');
  const turret = model.getObjectByName('TurretYaw');
  const pitch = model.getObjectByName('BarrelPitch');
  const slide = model.getObjectByName('BarrelRecoil');
  const fireClip = animations.find(clip => clip.name === 'Khai hỏa');
  if (!turret || !pitch || !slide || !fireClip) throw new Error('Incomplete Lam Kim rig');
  const restPivot = pitch.getWorldPosition(new THREE.Vector3());
  const rim = new THREE.Box3().setFromObject(slide).max.z - restPivot.z;
  const muzzle = createCannonFlash();
  slide.add(muzzle.flash);
  const scale = .83 / restPivot.y;
  model.scale.multiplyScalar(scale);

  // This pivot aims the barrel while the authored pitch track supplies recoil.
  const pivot = new THREE.Group();
  pivot.position.copy(pitch.position);
  turret.add(pivot);
  pivot.add(pitch);
  pitch.position.set(0, 0, 0);

  const mixer = new THREE.AnimationMixer(model);
  const fire = mixer.clipAction(fireClip).setLoop(THREE.LoopOnce, 1);
  return {
    group: model,
    pivot,
    muzzleDistance: rim * scale + ballRadius + .03,
    aim(direction) {
      turret.rotation.y = Math.atan2(direction.x, direction.z);
      pivot.rotation.x = -Math.atan2(direction.y, Math.hypot(direction.x, direction.z));
    },
    fire() {
      fire.stop().reset().play();
      mixer.update(0);
    },
    reset() { fire.stop(); muzzle.draw(0); },
    update(delta) {
      mixer.update(delta);
      muzzle.draw(fire.isRunning() ? fire.time : 0);
    },
  };
}

function fitStage(camera, aspect, halfFov, { width, depth, top, x, z, travelX = 0 }) {
  const halfWidth = width / 2 + travelX + .08;
  const halfDepth = depth / 2 + .08;
  const point = new THREE.Vector3();
  let tangent = Math.tan(halfFov);
  for (const worldX of [x - halfWidth, x + halfWidth]) {
    for (const worldY of [.12, top + .08]) {
      for (const worldZ of [z - halfDepth, z + halfDepth]) {
        point.set(worldX, worldY, worldZ).applyMatrix4(camera.matrixWorldInverse);
        const distance = -point.z;
        tangent = Math.max(tangent, Math.abs(point.x) / (distance * aspect * .85), Math.abs(point.y) / (distance * .67));
      }
    }
  }
  return Math.atan(tangent);
}

function firstPersonStageTangent(camera, aspect, { framingPoints, topLimit }) {
  const point = new THREE.Vector3();
  let tangent = 0;
  for (const corner of framingPoints) {
    point.copy(corner).applyMatrix4(camera.matrixWorldInverse);
    const distance = -point.z;
    tangent = Math.max(tangent, Math.abs(point.x) / (distance * aspect * .96), point.y / (distance * topLimit));
  }
  return tangent;
}

function frameFirstPersonStage(camera, aspect, halfFov, stage) {
  const { anchor } = stage;
  const eye = camera.position.clone();
  const rotation = camera.quaternion.clone();
  const localAnchor = anchor.clone().applyMatrix4(camera.matrixWorldInverse);
  halfFov = Math.max(halfFov, Math.atan(firstPersonStageTangent(camera, aspect, stage)));
  const scale = -localAnchor.z * Math.tan(halfFov);
  // Back away and narrow the lens together to preserve the foreground cannon's framing.
  for (let distance = 4.9; distance > 0; distance -= .25) {
    camera.position.set(eye.x, eye.y + .17 * distance, eye.z + distance);
    const run = camera.position.z - anchor.z;
    const rise = anchor.y - camera.position.y;
    const length = Math.hypot(run, rise);
    const offset = Math.asin(localAnchor.y / length);
    const pitch = Math.atan2(rise, run) - offset;
    camera.lookAt(anchor.x, camera.position.y + Math.tan(pitch), camera.position.z - 1);
    camera.updateMatrixWorld();
    const tangent = scale / (length * Math.cos(offset));
    if (firstPersonStageTangent(camera, aspect, stage) <= tangent) return Math.atan(tangent);
  }
  camera.position.copy(eye);
  camera.quaternion.copy(rotation);
  camera.updateMatrixWorld();
  return halfFov;
}

export function frameCamera(camera, aspect, firstPerson, stage) {
  camera.aspect = aspect;
  const extraHeight = Math.max(0, (stage?.top ?? 0) - 3.2);
  const centerX = stage?.x ?? 0;
  const centerZ = stage?.z ?? 0;
  let halfFov;
  if (firstPerson) {
    const portrait = aspect < .9;
    const nearViewZ = (portrait ? 6.12 : 6.8) + extraHeight * .38;
    const frontZ = centerZ + (stage?.depth ?? 0) / 2;
    camera.position.set(0, portrait ? 2.27 : 2.22, Math.max(nearViewZ, frontZ + 4.4));
    camera.lookAt(centerX * .45, 1.58 + extraHeight * .32, centerZ);
    halfFov = Math.max(THREE.MathUtils.degToRad(portrait ? 22 : 29), Math.atan(.48 / aspect));
  } else {
    const narrow = aspect < .95;
    camera.position.set(narrow ? 4.4 : 5.65, 5.9, 12);
    camera.lookAt(centerX + (narrow ? 0 : -.37), 1.5 + extraHeight * .42, centerZ + 1.18);
    halfFov = THREE.MathUtils.degToRad(aspect < .62 ? 27.5 : 20);
  }
  camera.updateMatrixWorld();
  if (stage) halfFov = fitStage(camera, aspect, halfFov, stage);
  if (firstPerson && stage) halfFov = frameFirstPersonStage(camera, aspect, halfFov, stage);
  camera.fov = THREE.MathUtils.radToDeg(halfFov * 2);
  camera.updateProjectionMatrix();
}

function animateSkyClouds(model) {
  const dome = model.getObjectByName('SkyDome');
  if (!dome?.material?.map) return () => {};
  const cloudOffset = { value: 0 };
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  dome.material = dome.material.clone();
  dome.material.onBeforeCompile = shader => {
    shader.uniforms.cloudOffset = cloudOffset;
    // The approved panorama includes the sea, islands and sun. Drift the cloud band between them.
    shader.fragmentShader = `uniform float cloudOffset;\n${shader.fragmentShader}`.replace('#include <map_fragment>', `
      vec2 cloudUv = vMapUv;
      float aboveHorizon = 1.0 - smoothstep(0.47, 0.494, cloudUv.y);
      float awayFromSun = smoothstep(0.055, 0.135, abs(cloudUv.x - 0.091));
      float islandBand = 1.0 - smoothstep(0.07, 0.11, min(abs(cloudUv.x - 0.15), abs(cloudUv.x - 0.80)));
      float awayFromIslands = 1.0 - islandBand * smoothstep(0.445, 0.462, cloudUv.y);
      float awayFromSeam = smoothstep(0.0, 0.055, min(cloudUv.x, 1.0 - cloudUv.x));
      cloudUv.x += cloudOffset * aboveHorizon * awayFromSun * awayFromIslands * awayFromSeam;
      ${THREE.ShaderChunk.map_fragment.replace('vMapUv', 'cloudUv')}
    `);
  };
  return seconds => {
    cloudOffset.value = reducedMotion.matches ? 0 : .022 * Math.sin(seconds * Math.PI / 12);
  };
}

export function makeArena(host) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#78c8f9');
  const camera = new THREE.PerspectiveCamera(39, 1, .1, 125);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = .97;
  host.append(renderer.domElement);

  const environment = new RoomEnvironment();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(environment, .04).texture;
  scene.environmentIntensity = .75;
  environment.dispose();
  pmrem.dispose();
  const light = new THREE.DirectionalLight('#ffddb0', 2.55);
  light.position.set(-3, 9, 3.2);
  light.castShadow = true;
  light.shadow.mapSize.set(1024, 1024);
  Object.assign(light.shadow.camera, { left: -8.5, right: 8.5, top: 8.5, bottom: -8.5, far: 32 });
  light.shadow.camera.updateProjectionMatrix();
  light.shadow.normalBias = .017;
  scene.add(light);
  const rim = new THREE.DirectionalLight('#8dc5ff', 2.15);
  rim.position.set(4, 2.3, -4);
  scene.add(rim);

  const { model, animations } = cloneArenaModel('beach');
  model.traverse(object => {
    if (!object.isMesh) return;
    object.castShadow = /Palm|Coastal|Stone|Shell|SeaStar/.test(object.name);
    object.receiveShadow = !object.material.isMeshBasicMaterial;
    if (object.material.isMeshBasicMaterial) object.material.toneMapped = false;
  });
  scene.add(model);
  const scenery = new THREE.AnimationMixer(model);
  for (const clip of animations) {
    scenery.clipAction(clip).play();
  }
  const updateClouds = animateSkyClouds(model);
  return { scene, camera, renderer, scenery, updateClouds };
}

export function disposeGroup(group) {
  group.removeFromParent();
  group.traverse(object => {
    const { geometry } = object;
    if (geometry && !sharedModelGeometry.has(geometry)) {
      geometry.dispose();
    }
  });
}
