import * as T from 'three';
import { writeModel } from './write-model.mjs';

const material = (name, color, metalness, roughness) =>
  new T.MeshStandardMaterial({ name, color, metalness, roughness });
const enamel = material('Men lam cobalt', '#234fde', .38, .27);
const navy = material('Lam đậm', '#17265d', .42, .34);
const sky = material('Men lam sáng', '#568ef3', .3, .3);
const brass = material('Đồng vàng', '#e4a84f', .72, .27);
const gold = material('Viền champagne', '#f4cb85', .62, .30);
const surface = material('Mặt men mật ong', '#e4a455', .12, .58);

function add(parent, name, geometry, finish, x = 0, y = 0, z = 0) {
  const mesh = new T.Mesh(geometry, finish);
  mesh.name = name;
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

function cylinder(parent, name, top, bottom, height, finish, y, sides = 10) {
  return add(parent, name, new T.CylinderGeometry(top, bottom, height, sides), finish, 0, y, 0);
}

function slab(parent, name, width, depth, thickness, y, finish) {
  const w = width / 2, d = depth / 2, cut = .125;
  const points = [[-w + cut,-d],[w - cut,-d],[w,-d + cut],[w,d - cut],
    [w - cut,d],[-w + cut,d],[-w,d - cut],[-w,-d + cut]];
  const outline = new T.Shape(points.map(([x, z]) => new T.Vector2(x, z)));
  const geometry = new T.ExtrudeGeometry(outline, {
    depth: thickness, bevelEnabled: true, bevelThickness: .015, bevelSize: .018, bevelSegments: 2, steps: 1,
  });
  geometry.rotateX(-Math.PI / 2);
  return add(parent, name, geometry, finish, 0, y);
}

const root = new T.Group();
root.name = 'BanLamKim';
const base = new T.Group();
base.name = 'TableSlide';
root.add(base);
cylinder(base, 'Đế đa giác', .54, .64, .12, navy, .06);
cylinder(base, 'Vành chân', .55, .55, .045, gold, .14);
cylinder(base, 'Gót men lam', .33, .51, .23, enamel, .275);
cylinder(base, 'Cổ trụ', .26, .34, .59, navy, .665);
cylinder(base, 'Viền gót', .344, .344, .037, brass, .392);
cylinder(base, 'Vành đỡ mặt bàn', .43, .26, .125, brass, .99);

for (let i = 0; i < 10; i++) {
  const angle = (i + .5) * 2 * Math.PI / 10;
  const detail = add(base, 'Họa tiết gót bàn', new T.OctahedronGeometry(.081), sky,
    .418 * Math.cos(angle), .275, .418 * Math.sin(angle));
  detail.scale.set(.82, 1.23, .82);
}

const top = new T.Group();
top.name = 'TableTop';
top.position.y = 1.055;
base.add(top);
const deck = new T.Group();
deck.name = 'TableDeck';
top.add(deck);
slab(deck, 'Khung mặt bàn', 3.62, 1.94, .14, 0, enamel);
slab(deck, 'Viền đồng', 3.68, 2, .045, .133, brass);
slab(deck, 'TableSurface', 3.51, 1.83, .045, .174, surface);
const details = new T.Group();
details.name = 'TableDetails';
top.add(details);

for (const x of [-1.54, 1.54]) {
  for (const z of [-.73, .73]) {
    const inset = add(details, 'Nạm góc', new T.BoxGeometry(.11, .008, .11), gold, x, .234, z);
    inset.rotation.y = Math.PI / 4;
  }
}
for (const z of [-.988, .988]) {
  for (const x of [-.32, 0, .32]) {
    const stud = add(details, 'Nạm cạnh', new T.OctahedronGeometry(.052), sky, x, .086, z);
    stud.scale.set(1, .72, .45);
  }
}

const slide = new T.AnimationClip('Trượt ngang', 3.2, [
  new T.VectorKeyframeTrack('TableSlide.position', [0, .8, 1.6, 2.4, 3.2],
    [0,0,0, -.72,0,0, 0,0,0, .72,0,0, 0,0,0]),
]);
const yAxis = new T.Vector3(0, 1, 0);
const rotate = new T.AnimationClip('Xoay mặt bàn', 3.2, [
  new T.QuaternionKeyframeTrack('TableTop.quaternion', [0, .8, 1.6, 2.4, 3.2],
    [0, 90, 180, 270, 360].flatMap(angle => new T.Quaternion()
      .setFromAxisAngle(yAxis, T.MathUtils.degToRad(angle)).toArray())),
]);

await writeModel('ban-lam-kim.glb', root, [slide, rotate]);
