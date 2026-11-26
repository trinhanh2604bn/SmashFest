import * as T from 'three';
import { writeModel } from './write-model.mjs';

const material = (name, color, metalness, roughness) =>
  new T.MeshStandardMaterial({ name, color, metalness, roughness });
const enamel = material('Lam cobalt', '#234fde', .38, .27);
const navy = material('Lam đậm', '#17265d', .42, .34);
const sky = material('Lam sáng', '#568ef3', .3, .3);
const brass = material('Đồng vàng', '#e4a84f', .72, .27);
const gold = material('Viền champagne', '#f4cb85', .62, .3);
const inner = material('Lòng nòng', '#111827', .12, .55);

function add(parent, name, geometry, surface, x, y, z) {
  const mesh = new T.Mesh(geometry, surface);
  mesh.name = name;
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

function cylinder(parent, name, top, bottom, height, surface, x, y, z, sides = 48) {
  return add(parent, name, new T.CylinderGeometry(top, bottom, height, sides), surface, x, y, z);
}

function alongBarrel(parent, name, front, back, length, surface, z, sides = 48) {
  const part = cylinder(parent, name, front, back, length, surface, 0, 0, z, sides);
  part.rotation.x = Math.PI / 2;
  return part;
}

function ring(parent, name, radius, thickness, surface, z) {
  return add(parent, name, new T.TorusGeometry(radius, thickness, 12, 56), surface, 0, 0, z);
}

const model = new T.Group();
model.name = 'LamKim';
cylinder(model, 'Đế đa giác', .94, 1.08, .19, navy, 0, .095, 0, 10);
cylinder(model, 'Vành đế', .95, .95, .055, brass, 0, .21, 0, 10);
cylinder(model, 'Chân men lam', .54, .79, .44, enamel, 0, .44, 0, 10);
cylinder(model, 'Đĩa xoay', .59, .51, .15, brass, 0, .72, 0, 12);
for (let i = 0; i < 10; i++) {
  const angle = i * 2 * Math.PI / 10;
  cylinder(model, 'Đinh tán đế', .048, .06, .05, gold, .82 * Math.cos(angle), .233, .82 * Math.sin(angle), 8);
}

const turret = new T.Group();
turret.name = 'TurretYaw';
turret.position.y = .79;
model.add(turret);
for (const side of [-1, 1]) {
  const cheek = add(turret, 'Gối đỡ', new T.BoxGeometry(.25, .56, .76), navy, side * .57, .27, 0);
  cheek.rotation.z = side * -.13;
  const cap = cylinder(turret, 'Trục đồng', .21, .21, .14, brass, side * .72, .55, 0, 12);
  cap.rotation.z = Math.PI / 2;
  const button = cylinder(turret, 'Nút trục', .095, .095, .04, sky, side * .81, .55, 0, 12);
  button.rotation.z = Math.PI / 2;
}

const pitch = new T.Group();
pitch.name = 'BarrelPitch';
pitch.position.y = .55;
turret.add(pitch);
const slide = new T.Group();
slide.name = 'BarrelRecoil';
pitch.add(slide);
alongBarrel(slide, 'Đuôi bát giác', .495, .35, .37, navy, -.78, 8);
alongBarrel(slide, 'Buồng men vát cạnh', .46, .51, .79, enamel, -.23, 12);
alongBarrel(slide, 'Nòng loe men lam', .46, .34, 1.01, enamel, .64, 12);
alongBarrel(slide, 'Khớp kim loại', .465, .505, .15, brass, .09, 12);
ring(slide, 'Viền khớp', .469, .029, gold, .18);
alongBarrel(slide, 'Miệng nòng đa giác', .515, .46, .17, brass, 1.19, 12);
ring(slide, 'Vành miệng', .444, .055, gold, 1.295);
alongBarrel(slide, 'Lòng men tối', .414, .414, .025, inner, 1.297);
ring(slide, 'Vòng đuôi', .367, .037, brass, -.96);
for (let i = 0; i < 8; i++) {
  const angle = (i + .5) * 2 * Math.PI / 8;
  const inlay = add(slide, 'Họa tiết men', new T.OctahedronGeometry(.105), sky, .454 * Math.cos(angle), .454 * Math.sin(angle), -.29);
  inlay.scale.set(.66, .66, 1.6);
}

const quaternions = (axis, angles) => angles.flatMap(angle =>
  new T.Quaternion().setFromAxisAngle(axis, T.MathUtils.degToRad(angle)).toArray());
const yaw = new T.Vector3(0, 1, 0);
const pitchAxis = new T.Vector3(1, 0, 0);
const fire = new T.AnimationClip('Khai hỏa', 1.1, [
  new T.VectorKeyframeTrack('BarrelRecoil.position', [0, .075, .18, .36, .65, 1.1],
    [0,0,0, 0,0,-.34, 0,0,-.24, 0,0,.035, 0,0,-.008, 0,0,0]),
  new T.QuaternionKeyframeTrack('BarrelPitch.quaternion', [0, .075, .18, .4, .72, 1.1],
    quaternions(pitchAxis, [0,-9,-6,1,0,0])),
]);
const scan = new T.AnimationClip('Đảo nòng', 2.4, [
  new T.QuaternionKeyframeTrack('TurretYaw.quaternion', [0, .55, .82, 1.5, 1.76, 2.4],
    quaternions(yaw, [0,-25,-25,25,25,0])),
  new T.QuaternionKeyframeTrack('BarrelPitch.quaternion', [0, .55, 1.25, 1.8, 2.4],
    quaternions(pitchAxis, [0,-7,-12,-5,0])),
]);

await writeModel('lam-kim.glb', model, [fire, scan]);
