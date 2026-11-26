import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import orangeJarUrl from './models/JamJar_Orange.glb?url';
import blueJarUrl from './models/JamJar_Blue.glb?url';
import yellowJarUrl from './models/JamJar_Yellow.glb?url';
import pinkJarUrl from './models/JamJar_Pink.glb?url';
import redJarUrl from './models/JamJar_Red.glb?url';
import tallRedJarUrl from './models/JamJar_Red_2y.glb?url';
import crateUrl from './models/Box_Square.glb?url';
import ballUrl from './models/CannonBall.glb?url';
import tableUrl from './models/ban-lam-kim.glb?url';
import cannonUrl from './models/lam-kim.glb?url';
import beachUrl from './models/vinh-nang.glb?url';
import damagedOrangeJarUrl from './models/JamJar_Apricot_3DParticle_1x1.glb?url';
import damagedBlueJarUrl from './models/JamJar_Blueberry_3DParticle_1x1.glb?url';
import damagedYellowJarUrl from './models/JamJar_Honey_3DParticle_1x1.glb?url';
import damagedPinkJarUrl from './models/JamJar_Grapes_3DParticle_1x1.glb?url';
import damagedRedJarUrl from './models/JamJar_Strawberry_3DParticle_1x1.glb?url';
import damagedTallRedJarUrl from './models/JamJar_Strawberry_3DParticle_1x2.glb?url';
import damagedCrateUrl from './models/Box_3DParticle_1x1.glb?url';

const sources = [
  ['jar0', orangeJarUrl], ['jar1', blueJarUrl], ['jar2', yellowJarUrl], ['jar3', pinkJarUrl],
  ['jar4', redJarUrl], ['jar4-tall', tallRedJarUrl],
  ['crate', crateUrl], ['ball', ballUrl], ['table', tableUrl], ['cannon', cannonUrl],
  ['beach', beachUrl],
  ['jar0-damaged', damagedOrangeJarUrl], ['jar1-damaged', damagedBlueJarUrl],
  ['jar2-damaged', damagedYellowJarUrl], ['jar3-damaged', damagedPinkJarUrl],
  ['jar4-damaged', damagedRedJarUrl], ['jar4-tall-damaged', damagedTallRedJarUrl],
  ['crate-damaged', damagedCrateUrl],
];
const templates = new Map();
export const sharedModelGeometry = new WeakSet();

export async function loadArenaModels() {
  const loader = new GLTFLoader();
  const results = await Promise.allSettled(sources.map(async ([key, url]) => {
    const { scene, animations } = await loader.loadAsync(url);
    const bounds = new THREE.Box3().setFromObject(scene);
    if (bounds.isEmpty()) throw new Error('Model has no rendered bounds');
    scene.traverse(object => {
      if (!object.isMesh) return;
      object.castShadow = true;
      object.receiveShadow = true;
      sharedModelGeometry.add(object.geometry);
    });
    templates.set(key, { scene, bounds, animations });
  }));
  results.forEach((result, index) => {
    if (result.status === 'rejected') console.warn(`Unable to load model ${sources[index][0]}`, result.reason);
  });
}

export function cloneArenaModel(key) {
  const template = templates.get(key);
  if (!template) throw new Error(`Missing arena GLB: ${key}`);
  return { model: template.scene.clone(true), animations: template.animations };
}

export function makeFittedModel(key, width, height, depth, referenceKey = key) {
  const template = templates.get(key);
  const reference = templates.get(referenceKey);
  if (!template || !reference) return null;
  const size = reference.bounds.getSize(new THREE.Vector3());
  const center = reference.bounds.getCenter(new THREE.Vector3());
  const group = new THREE.Group();
  group.scale.set(width / size.x, height / size.y, depth / size.z);
  const model = template.scene.clone(true);
  model.position.sub(center);
  group.add(model);
  return group;
}
