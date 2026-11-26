import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { cloneArenaModel, makeFittedModel, sharedModelGeometry } from './models.js';

export const targetWidth = .7;
export const targetHeight = .8;
export const ballRadius = .22;

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
  if (!deck || !surface || !details) throw new Error('Incomplete Bàn Lam Kim rig');

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
  model.position.y = thickness / 2 - surfaceY;
  const view = new THREE.Group();
  view.add(model);
  return { view, thickness };
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
    reset() { fire.stop(); },
    update(delta) { mixer.update(delta); },
  };
}

export function frameCamera(camera, aspect, firstPerson) {
  camera.aspect = aspect;
  if (firstPerson) {
    const portrait = aspect < .9;
    camera.position.set(0, portrait ? 2.27 : 2.22, portrait ? 6.12 : 6.8);
    camera.lookAt(0, 1.58, 0);
    // Keep the table and moving targets within the playable width on phones.
    const halfFov = Math.max(THREE.MathUtils.degToRad(22), Math.atan(.48 / aspect));
    camera.fov = THREE.MathUtils.radToDeg(2 * halfFov);
  } else {
    const narrow = aspect < .95;
    camera.position.set(narrow ? 4.4 : 5.65, 5.9, 12);
    camera.lookAt(narrow ? 0 : -.37, 1.5, 1.18);
    camera.fov = aspect < .62 ? 55 : 40;
  }
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
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
    const action = scenery.clipAction(clip);
    if (clip.name === 'Mây trôi') action.setLoop(THREE.LoopPingPong, Infinity).setEffectiveTimeScale(.5);
    else action.setEffectiveTimeScale(.8);
    action.play();
  }
  return { scene, camera, renderer, scenery };
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
