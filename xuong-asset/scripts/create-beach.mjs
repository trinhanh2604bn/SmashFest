import * as T from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { writeModel } from './write-model.mjs';

const beach = new T.Group();
beach.name = 'VinhNang';
const matte = (color, options = {}) => new T.MeshStandardMaterial({ color, roughness: .9, ...options });
const unlit = (color, options = {}) => new T.MeshBasicMaterial({ color, ...options });
const sand = matte('#ffffff', {vertexColors: true});
const sea = unlit('#ffffff', {vertexColors: true, side: T.DoubleSide, transparent: true, depthWrite: false});
const foam = unlit('#c9f9e6', {side: T.DoubleSide});
const bark = matte('#8c7054');
const barkLight = matte('#ad9070');
const leaves = ['#4d9d2e', '#72b530', '#9cce43', '#368f4f'].map(color => matte(color, {side: T.DoubleSide}));
const shell = matte('#fff1c9');
const coral = matte('#fa9b5b');
const rock = matte('#b9a889');
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
  const uv = geometry.getAttribute('uv');
  const colors = [];
  const color = new T.Color();
  const stops = palette.map(value => new T.Color(value));
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i);
    const distance = positions.getY(i) + depth / 2;
    const water = name === 'Sea';
    const z = shoreline(x) + zOffset + (water ? -distance : distance);
    const relief = water ? .017 * Math.sin(x * .83 + distance * 2.3)
      : .09 * Math.sin(x * .85 + z * .60) * T.MathUtils.smoothstep(Math.abs(x), 2, 6);
    positions.setXYZ(i, x, y + relief, z);
    const tileSize = water ? 5.6 : 2.8;
    uv.setXY(i, (x + .19 * z) / tileSize, (z - .19 * x) / tileSize);
    const t = T.MathUtils.clamp(distance / (name === 'Sea' ? 24 : 4), 0, 1) * 2;
    const index = Math.min(1, Math.floor(t));
    color.copy(stops[index]).lerp(stops[index + 1], t - index);
    if (name === 'Sand') color.multiplyScalar(1 + .045 * Math.sin(x * 1.7 + distance * 1.3) * Math.cos(distance * 2.3));
    colors.push(color.r, color.g, color.b);
    if (water) colors.push(1 - T.MathUtils.smoothstep(distance, 16, 49));
  }
  geometry.setAttribute('color', new T.Float32BufferAttribute(colors, name === 'Sea' ? 4 : 3));
  if (name === 'Sand') {
    const index = geometry.index.array;
    for (let i = 0; i < index.length; i += 3) [index[i + 1], index[i + 2]] = [index[i + 2], index[i + 1]];
  }
  geometry.computeVertexNormals();
  return mesh(beach, name, geometry, material);
}
patch('Sand', 42, 0, 0, ['#baaaa0', '#fff4df', '#fff4dc'], sand);
patch('Sea', 75, .15, -.025, ['#e0f9e8', '#a9dfed', '#69a8c4'], sea);

function shorelineRibbon(width, offset) {
  const positions = [];
  const indices = [];
  for (let i = 0; i <= 104; i++) {
    const x = -44 + 88 * i / 104;
    const z = shoreline(x) + offset + Math.sin(x * .6) * .1;
    const lace = Math.max(.05, .65 + .32 * Math.cos(x * 1.8) + .28 * Math.sin(x * 4.3));
    positions.push(x, .018, z, x, .018, z - width * lace);
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
mesh(wave, 'FoamLine', shorelineRibbon(.16, .13), foam);
mesh(wave, 'FoamTrace', shorelineRibbon(.105, -.62), unlit('#a9f1ed', {side: T.DoubleSide}));

const skyGeometry = new T.SphereGeometry(84, 32, 24).scale(-1, 1, 1);
const skyUV = skyGeometry.attributes.uv;
for (let i = 0; i < skyUV.count; i++) skyUV.setY(i, 1 - skyUV.getY(i));
const sky = unlit('#ffffff');
mesh(beach, 'SkyDome', skyGeometry, sky).rotation.y = -.56;

// A low limestone cape gives the bay parallax between the shore and the far islands.
const cape = new T.PlaneGeometry(13, 5.6, 48, 18);
cape.rotateX(-Math.PI / 2);
const coastVertices = cape.attributes.position;
const coastColors = [];
const limestone = new T.Color('#899a98');
const canopy = new T.Color('#567d67');
for (let i = 0; i < coastVertices.count; i++) {
  const x = coastVertices.getX(i), z = coastVertices.getZ(i);
  const edge = Math.max(0, 1 - (x / 6.5) ** 2 - (z / 2.8) ** 2);
  const ridge = 1.14 + .48 * Math.sin(x * 1.38) + .30 * Math.cos(x * 2.3 + z * .5);
  const crag = .17 * Math.cos(x * 5.8 + z * 3.2);
  const y = edge ** .6 * (ridge + crag) - .24;
  coastVertices.setY(i, y);
  const tone = limestone.clone().lerp(canopy, T.MathUtils.smoothstep(y + crag, .35, .95));
  tone.multiplyScalar(.94 + crag * .30);
  coastColors.push(tone.r, tone.g, tone.b);
}
cape.setAttribute('color', new T.Float32BufferAttribute(coastColors,3));
cape.computeVertexNormals();
mesh(beach, 'LimestoneCape', cape, matte('#b6c7c8',{vertexColors:true}), -13, 0, -27);

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

const foliage = matte('#ffffff', { vertexColors: true, side: T.DoubleSide });
function coconutFrond(length, fall, tint) {
  const positions = [], colors = [], indices = [];
  const arch = t => length * .29 * Math.sin(Math.PI * t) - fall * t * t;
  function vertex(x, y, z, shade) {
    positions.push(x, y, z);
    colors.push(tint.r * shade, tint.g * shade, tint.b * shade);
    return positions.length / 3 - 1;
  }
  for (let i = 0; i <= 23; i++) {
    const t = i / 23;
    const stem = .022 * (1 - .9 * t);
    const j = vertex(t * length, arch(t), -stem, 1.2);
    vertex(t * length, arch(t), stem, 1.3);
    if (i) indices.push(j-2,j-1,j, j,j-1,j+1);
  }
  for (let i = 1; i <= 22; i++) for (const side of [-1, 1]) {
    const t = (i + side * .16) / 24;
    const span = length * .23 * (.12 + Math.sin(Math.PI * t) ** .7);
    const shade = .84 + .15 * Math.sin(i * 4.3 + side);
    const x = length * t, y = arch(t);
    const j = vertex(x, y, 0, shade);
    vertex(x + .04, y - .02, span * side * .40, shade * .74);
    vertex(x + .09, y + .022, span * side * .40, shade * 1.18);
    vertex(x + .13, y - .014, span * side * .42, shade);
    vertex(x + span * .65, y - span * (.43 + .13 * Math.sin(i)), span * side, shade * 1.12);
    indices.push(j,j+1,j+2, j,j+2,j+3, j+1,j+4,j+2, j+2,j+4,j+3);
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new T.Float32BufferAttribute(colors, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function palm(x, z, height, lean, turn) {
  const trunk = new T.Group();
  trunk.position.set(x, 0, z);
  beach.add(trunk);
  const UP = new T.Vector3(0, 1, 0);
  const steps = 19;
  const point = t => new T.Vector3(lean * t * t, height * t, .16 * t * t);
  const trunkSections = [];
  for (let i = 0; i < steps; i++) {
    const from = point(i / steps);
    const to = point((i + 1) / steps);
    const segment = to.clone().sub(from);
    const radius = (.19 - .095 * i / steps) * (1 + .3 * Math.exp(-i));
    const section = new T.CylinderGeometry(radius * .91, radius, segment.length() + .016, 12);
    section.applyQuaternion(new T.Quaternion().setFromUnitVectors(UP, segment.normalize()));
    const middle = from.lerp(to,.5);
    section.translate(middle.x,middle.y,middle.z);
    const colors = [];
    for (let j = 0; j < section.attributes.position.count; j++) {
      const shade = bark.color.clone().lerp(barkLight.color, .26 + .16*Math.cos(i*2.1+j*.8));
      colors.push(shade.r,shade.g,shade.b);
    }
    section.setAttribute('color',new T.Float32BufferAttribute(colors,3));
    trunkSections.push(section);
  }
  mesh(trunk,'PalmTrunk',mergeGeometries(trunkSections),foliage);
  const blades = Array.from({ length: 14 }, (_, i) => {
    const upper = i >= 9;
    const length = height * (upper ? .34 : .47) * (1 + .13 * Math.sin(i * 5.2));
    const tint = new T.Color(['#45804c','#689c42','#84aa48','#376f42'][i % 4]);
    return coconutFrond(length, upper ? .16 : .48, tint)
      .rotateZ(upper ? .38 : .09 * Math.sin(i)).rotateY(turn + i * 2.40);
  });
  const crown = mesh(trunk, 'PalmCrown', mergeGeometries(blades), foliage);
  crown.position.copy(point(1));
  return crown;
}

const crowns = [[-3.7,-5.8,4.55,.50,.15],[4.05,-6.35,4.95,-.70,1.2],
  [-5.1,-7.95,3.35,.29,2.1],[5.45,-8.1,3.60,-.39,.65]].map((args,i) => {
  const crown = palm(...args);
  crown.name = 'PalmCrown' + i;
  return crown;
});

const granite = matte('#ffffff', {vertexColors: true});
for (const [x,z,s] of [[-3.6,-5.7,.65],[-4.3,-6.1,.88],[-2.9,-6.2,.33],
  [3.25,-6.6,.56],[4,-6.5,.78],[3.82,-5.9,.38],[4.4,-7,.96]]) {
  const stone = new T.IcosahedronGeometry(1, 2);
  const p = stone.attributes.position, colors = [];
  for (let i = 0; i < p.count; i++) {
    const a=p.getX(i), b=p.getY(i), c=p.getZ(i);
    const grain = .5 + .5 * Math.sin(a*17+c*12+Math.sin(b*7));
    const r = .96 + .07*Math.sin(c*4+a*3) + .04*grain;
    p.setXYZ(i,r*a,r*b,r*c);
    const color = new T.Color('#a89379').lerp(new T.Color('#d5c9ac'),grain*.65+.2);
    colors.push(color.r,color.g,color.b);
  }
  stone.setAttribute('color',new T.Float32BufferAttribute(colors,3));
  stone.computeVertexNormals();
  const boulder = mesh(beach,'ShoreStoneGranite',stone,granite,x,.16*s,z);
  boulder.scale.set(s,s*.73,s*.78);
  boulder.rotation.y=x;
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
const breeze = new T.AnimationClip('Gió qua tán dừa', 5, crowns.map((crown,i) =>
  new T.QuaternionKeyframeTrack(crown.name + '.quaternion', [0,1.25,2.5,3.75,5],
    [0,.028,-.012,-.023,0].flatMap(angle => new T.Quaternion()
      .setFromEuler(new T.Euler(angle*.4,0,angle*(i%2 ? .8 : 1))).toArray()))));
const maps = new Map([[sky,'island-sky'],[sand,'sand'],[sea,'sea']].map(([material, name]) =>
  [material, new URL('./textures/' + name + '.jpg', import.meta.url)]));
await writeModel('vinh-nang.glb', beach, [surf, breeze], maps);
