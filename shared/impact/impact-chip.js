import { CanvasTexture, Euler, Matrix3, Mesh, MeshStandardMaterial, Quaternion, Raycaster, SRGBColorSpace, Vector3 } from 'three';
import { DecalGeometry } from 'three/addons/geometries/DecalGeometry.js';

const decalName = 'impact-chip';
const projectorAxis = new Vector3(0, 0, 1);
const materials = new Map();

function chipMaterial(wood) {
  if (materials.has(wood)) return materials.get(wood);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const outline = new Path2D('M 47 47 L 61 38 L 69 46 L 85 42 L 88 56 L 80 63 L 74 77 L 59 74 L 47 82 L 41 67 L 49 60 Z');
  const cracks = new Path2D('M 52 54 L 36 38 L 29 30 L 22 31 M 73 50 L 89 35 L 95 25 M 65 67 L 67 86 L 77 96 L 76 106 M 51 69 L 31 75 L 23 90');
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.strokeStyle = wood ? '#61321e' : '#453239';
  ctx.lineWidth = 4;
  ctx.stroke(cracks);
  const cut = ctx.createLinearGradient(0, 36, 0, 86);
  cut.addColorStop(0, wood ? '#a05d35' : '#a6958e');
  cut.addColorStop(.42, wood ? '#e9ae66' : '#f9e6d4');
  cut.addColorStop(1, wood ? '#cb8a47' : '#d3b8a9');
  ctx.fillStyle = cut;
  ctx.stroke(outline);
  ctx.fill(outline);
  ctx.strokeStyle = wood ? '#f8ce93' : '#fff7e8';
  ctx.lineWidth = 3;
  ctx.stroke(new Path2D('M 44 68 L 49 77 L 59 71 L 73 74 L 79 63'));
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  const material = new MeshStandardMaterial({
    map: texture, transparent: true, depthWrite: false,
    polygonOffset: true, polygonOffsetFactor: -4, roughness: .88,
  });
  materials.set(wood, material);
  return material;
}

export function addImpactChip(model, { point, normal }, wood) {
  const direction = new Vector3().fromArray(normal).normalize();
  const origin = new Vector3().fromArray(point).addScaledVector(direction, .32);
  model.updateMatrixWorld(true);
  const ray = new Raycaster(origin, direction.clone().negate(), 0, .7);
  const surface = ray.intersectObject(model, true)[0];
  if (!surface?.face) return;
  const outward = surface.face.normal.clone()
    .applyNormalMatrix(new Matrix3().getNormalMatrix(surface.object.matrixWorld));
  const rotation = new Quaternion().setFromUnitVectors(projectorAxis, outward);
  const geometry = new DecalGeometry(surface.object, surface.point,
    new Euler().setFromQuaternion(rotation), new Vector3(.34, .33, .11));
  const decal = new Mesh(geometry, chipMaterial(wood));
  decal.name = decalName;
  decal.renderOrder = 1;
  model.add(decal);
}

export function disposeImpactChip(view) {
  view.getObjectByName(decalName)?.geometry.dispose();
}
