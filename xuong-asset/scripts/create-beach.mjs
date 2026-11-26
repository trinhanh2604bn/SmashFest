import * as T from 'three';
import { writeModel } from './write-model.mjs';

const beach = new T.Group();
beach.name = 'VinhNang';
const matte = (color, options = {}) => new T.MeshStandardMaterial({ color, roughness: .9, ...options });
const unlit = (color, options = {}) => new T.MeshBasicMaterial({ color, ...options });
const sand = matte('#ffffff', {vertexColors: true});
const sea = unlit('#ffffff', {vertexColors: true, side: T.DoubleSide});
const foam = unlit('#c9f9e6', {side: T.DoubleSide});
const bark = matte('#bf8147');
const barkLight = matte('#e1a261');
const leaves = ['#4d9d2e', '#72b530', '#9cce43', '#368f4f'].map(color => matte(color, {side: T.DoubleSide}));
const shell = matte('#fff1c9');
const coral = matte('#fa9b5b');
const rock = matte('#b9a889');
const whiteCloud = unlit('#ffffff');
const cloudShade = unlit('#d5edff');
const sphere = new T.IcosahedronGeometry(1, 2);
const pebble = new T.IcosahedronGeometry(1, 0);

function mesh(parent, name, geometry, material, x = 0, y = 0, z = 0) {
  const item = new T.Mesh(geometry, material);
  item.name = name;
  item.position.set(x, y, z);
  parent.add(item);
  return item;
}

const shoreline = x => -8.6 + Math.sin(x * .18) * .7 + Math.cos(x * .37) * .28;

// Patch coordinates follow the shoreline so the dry sand and the sea share an edge.
function patch(name, depth, zOffset, y, palette, material) {
  const geometry = new T.PlaneGeometry(110, depth, 72, 38);
  const positions = geometry.getAttribute('position');
  const colors = [];
  const color = new T.Color();
  const stops = palette.map(value => new T.Color(value));
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i);
    const distance = positions.getY(i) + depth / 2;
    positions.setXYZ(i, x, y, shoreline(x) + zOffset + (name === 'Sea' ? -distance : distance));
    const t = T.MathUtils.clamp(distance / (name === 'Sea' ? 24 : 4), 0, 1) * 2;
    const index = Math.min(1, Math.floor(t));
    color.copy(stops[index]).lerp(stops[index + 1], t - index);
    if (name === 'Sand') color.multiplyScalar(1 + .045 * Math.sin(x * 1.7 + distance * 1.3) * Math.cos(distance * 2.3));
    colors.push(color.r, color.g, color.b);
  }
  geometry.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
  if (name === 'Sand') {
    const index = geometry.index.array;
    for (let i = 0; i < index.length; i += 3) [index[i + 1], index[i + 2]] = [index[i + 2], index[i + 1]];
  }
  geometry.computeVertexNormals();
  return mesh(beach, name, geometry, material);
}
patch('Sand', 42, 0, 0, ['#e1b475', '#f2c98b', '#f5cf8b'], sand);
patch('Sea', 75, .15, -.025, ['#83eed9', '#21badb', '#2689cf'], sea);

function shorelineRibbon(width, offset) {
  const positions = [];
  const indices = [];
  for (let i = 0; i <= 104; i++) {
    const x = -44 + 88 * i / 104;
    const z = shoreline(x) + offset + Math.sin(x * .6) * .1;
    positions.push(x, .01, z, x, .01, z - width * (.7 + .3 * Math.cos(x * .85)));
    if (i > 0) {
      const j = i * 2;
      indices.push(j - 2, j, j - 1, j - 1, j, j + 1);
    }
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}
const wave = new T.Group();
wave.name = 'Surf';
beach.add(wave);
mesh(wave, 'FoamLine', shorelineRibbon(.26, .13), foam);
mesh(wave, 'FoamTrace', shorelineRibbon(.105, -.62), unlit('#a9f1ed', {side: T.DoubleSide}));

const skyGeometry = new T.SphereGeometry(84, 32, 24).scale(-1, 1, 1);
const skyPositions = skyGeometry.getAttribute('position');
const skyColors = [];
const haze = new T.Color('#b8ecff');
const azure = new T.Color('#4499ef');
for (let i = 0; i < skyPositions.count; i++) {
  const gradient = T.MathUtils.smoothstep(skyPositions.getY(i), 0, 39);
  const color = haze.clone().lerp(azure, gradient);
  skyColors.push(color.r, color.g, color.b);
}
skyGeometry.setAttribute('color', new T.Float32BufferAttribute(skyColors, 3));
mesh(beach, 'SkyDome', skyGeometry, unlit('#ffffff', {vertexColors: true}));

const clouds = new T.Group();
clouds.name = 'CloudBank';
beach.add(clouds);
for (const [x, y, z, scale] of [[-18,8,-28,1.28],[-6,8,-32,1.15],[7,9.1,-33,1.5],[21,7,-31,1]]) {
  for (const [dx,dy,dz,sx,sy,sz] of [[-2.3,0,0,1.65,.55,.72],[-.8,.35,0,1.4,.8,.87],
    [.35,.75,0,1.25,1.2,.98],[1.8,.24,0,1.4,.75,.88],[.2,-.25,.32,2.05,.47,1]]) {
    const puff = mesh(clouds, 'CloudPuff', sphere, dy < 0 ? cloudShade : whiteCloud,
      x + dx * scale, y + dy * scale, z + dz);
    puff.scale.set(sx * scale, sy * scale, sz * scale);
  }
}

function makeLeaf(length, width, fall) {
  const positions = [];
  const indices = [];
  for (let i = 0; i <= 10; i++) {
    const t = i / 10;
    const span = width * Math.sin(Math.PI * t) ** .74 * (i % 2 ? 1 : .78);
    const arch = Math.sin(Math.PI * t) * length * .28 - fall * t ** 2;
    positions.push(t * length, arch - span * .26, -span, t * length, arch, 0, t * length, arch - span * .26, span);
    if (i > 0) {
      const j = i * 3;
      indices.push(j - 3, j - 2, j, j - 2, j + 1, j, j - 2, j - 1, j + 1, j - 1, j + 2, j + 1);
    }
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const normals = geometry.getAttribute('normal');
  for (let i = 0; i < normals.count; i++) {
    if (normals.getX(i) === 0 && normals.getY(i) === 0 && normals.getZ(i) === 0) normals.setXYZ(i, 0, 1, 0);
  }
  return geometry;
}

function palm(x, z, height, lean, turn) {
  const trunk = new T.Group();
  trunk.position.set(x, 0, z);
  beach.add(trunk);
  const UP = new T.Vector3(0, 1, 0);
  const steps = 9;
  const point = t => new T.Vector3(lean * t * t, height * t, .16 * t * t);
  for (let i = 0; i < steps; i++) {
    const from = point(i / steps);
    const to = point((i + 1) / steps);
    const segment = to.clone().sub(from);
    const radius = .19 - .095 * i / steps;
    const piece = mesh(trunk, 'PalmTrunk', new T.CylinderGeometry(radius * .88, radius, segment.length() + .032, 8),
      i % 3 === 1 ? barkLight : bark);
    piece.position.copy(from).lerp(to, .5);
    piece.quaternion.setFromUnitVectors(UP, segment.normalize());
  }
  const crown = new T.Group();
  crown.position.copy(point(1));
  trunk.add(crown);
  for (let i = 0; i < 9; i++) {
    const leaf = mesh(crown, 'PalmLeaf', makeLeaf(1.7 + (i % 3) * .23, .31 + .05 * (i % 3), .58), leaves[i % leaves.length]);
    leaf.rotation.y = turn + i * Math.PI * 2 / 9;
    leaf.rotation.z = (i % 3 - 1) * .1;
  }
}

for (const args of [[-4.25,-5.8,3.95,.63,.15],[4.55,-6.35,4.45,-.72,1.2],[-7.4,-8.55,3.3,.43,2.1],[8.2,-8.4,3.55,-.48,.65]]) {
  palm(...args);
}

for (const [x,z,s] of [[-4.3,-5.9,.63],[4.2,-5.85,.52],[-5.2,-6.3,.48],[5.35,-6.95,.45],[-7.4,-8.1,.37],[7.6,-7.8,.43]]) {
  for (let i = 0; i < 7; i++) {
    const sprig = mesh(beach, 'CoastalAgave', makeLeaf(s * (1.2 + .11 * i), s * .29, .08), leaves[(i + 1) % leaves.length], x, .04, z);
    sprig.rotation.y = i * .9;
    sprig.rotation.z = .45 + (i % 3) * .24;
  }
  const stone = mesh(beach, 'ShoreStone', pebble, rock, x + .42, .17, z + .32);
  stone.scale.set(.36, .26, .26);
}

for (const [x,z,s] of [[-2.6,3,.15],[2.35,2.7,.14],[-2.8,.9,.10],[2.65,-1.8,.14],[3.75,-4.4,.16],[-3.33,-4.7,.16]]) {
  const item = mesh(beach, 'SmallShell', pebble, shell, x, s * .25, z);
  item.rotation.y = x * 2;
  item.scale.set(s, s * .44, s * .83);
}
const starShape = new T.Shape();
for (let i = 0; i < 10; i++) {
  const a = i * Math.PI / 5;
  const r = i % 2 ? .085 : .22;
  if (i === 0) starShape.moveTo(r, 0);
  else starShape.lineTo(Math.cos(a) * r, Math.sin(a) * r);
}
starShape.closePath();
const star = new T.ExtrudeGeometry(starShape, {depth:.023, bevelThickness:.008, bevelSize:.012, bevelSegments:1});
star.rotateX(-Math.PI / 2);
mesh(beach, 'SeaStar', star, coral, 2.24, .02, 1.1);
mesh(beach, 'SeaStar', star, coral, -2.78, .02, -1.7).rotation.y = .65;

const surf = new T.AnimationClip('Sóng ven bờ', 4, [
  new T.VectorKeyframeTrack('Surf.position', [0, 1, 2, 3, 4],
    [0,0,0, 0,0,.12, 0,0,.24, 0,0,.12, 0,0,0]),
]);
const drift = new T.AnimationClip('Mây trôi', 6, [
  new T.VectorKeyframeTrack('CloudBank.position', [0, 3, 6], [0,0,0, 1.35,0,0, 2.7,0,0]),
]);
await writeModel('vinh-nang.glb', beach, [surf, drift]);
