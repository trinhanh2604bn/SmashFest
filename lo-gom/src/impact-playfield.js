import { Box3, Group, Vector3 } from 'three';
import { Body, Box, Vec3 } from 'cannon-es';
import { disposeGroup, targetHeight, targetWidth } from './arena.js';
import { makeFittedModel } from './models.js';
import { addImpactChip } from '../../shared/impact/impact-chip.js';
import { TargetVisual } from '../../shared/impact/target-visual.js';
import {
  applyJarInertia, floorGroup, gravity, groundFragments, landingFade, landingHold,
  makeTargetShape, measureContact, shotFractureEnergy,
} from '../../shared/impact/target-impact.js';

const catalog = [
  ['jar0', 0xf78a32], ['jar1', 0x63b7ff], ['jar2', 0xffd64e], ['jar3', 0xfe82b4],
  ['jar4', 0xf7464a], ['jar4-tall', 0xf7464a], ['crate', 0xd99450],
];
const chipEnergy = 16;
const directFractureEnergy = 64;
const groundFractureSpeed = 2.2;
const tableDebris = { settle: .25, coast: .9, maxAge: 3.2, hold: .26, fade: .36 };

function contactCue(body, { bi, ri, rj, ni }) {
  const first = bi === body;
  return {
    point: body.position.vadd(first ? ri : rj),
    normal: first ? ni.clone() : ni.negate(),
  };
}

function fit(asset, broken = false) {
  const { modelKey, height } = asset;
  const key = broken ? `${modelKey}-damaged` : modelKey;
  const model = makeFittedModel(key, targetWidth, height, targetWidth, modelKey);
  if (!model) throw new Error(`Missing target GLB: ${key}`);
  return model;
}

function measureJarProfile(model, height) {
  const halfHeight = height / 2;
  const base = { y: -halfHeight, radius: 0 };
  const lid = { y: halfHeight, radius: 0 };
  const shoulder = { y: 0, radius: 0 };
  const endBand = height * .035;
  const point = new Vector3();
  model.updateMatrixWorld(true);
  model.traverse(mesh => {
    if (!mesh.isMesh) return;
    const vertices = mesh.geometry.attributes.position;
    for (let index = 0; index < vertices.count; index++) {
      point.fromBufferAttribute(vertices, index).applyMatrix4(mesh.matrixWorld);
      const radius = Math.hypot(point.x, point.z);
      if (point.y <= base.y + endBand) base.radius = Math.max(base.radius, radius);
      else if (point.y >= lid.y - endBand) lid.radius = Math.max(lid.radius, radius);
      else if (radius > shoulder.radius) Object.assign(shoulder, { y: point.y, radius });
    }
  });
  return [base, shoulder, lid];
}

function fittedFragments(model) {
  const parts = [];
  model.updateMatrixWorld(true);
  model.traverse(mesh => {
    if (!mesh.isMesh) return;
    const view = mesh.clone(false);
    mesh.matrixWorld.decompose(view.position, view.quaternion, view.scale);
    const bounds = new Box3().setFromObject(view);
    const offset = bounds.getCenter(new Vector3());
    view.position.sub(offset);
    const root = new Group();
    root.add(view);
    parts.push({ view: root, offset, size: bounds.getSize(new Vector3()) });
  });
  return parts;
}

export function createImpactPlayfield({ scene, world, floor, surfaces, feedback, deckTop, step }) {
  const assets = new Map();
  const byBody = new Map();
  const floorDebris = new Set();
  const landingCues = new Set();
  const skitterCues = new Set();
  const neighborCueTimes = new Map();
  let supportByBody = new Map();
  let items = [];
  let targets = [];
  let deck;
  let deckStartY;
  let time = 0;
  let lastImpact = -Infinity;
  let settling = false;
  let nextId = 0;

  function prepareAsset(assetIndex) {
    if (!assets.has(assetIndex)) {
      const [modelKey, color] = catalog[assetIndex];
      const asset = { modelKey, color, height: assetIndex === 5 ? 1.18 : targetHeight, wood: assetIndex === 6 };
      if (!asset.wood) asset.jarProfile = measureJarProfile(fit(asset), asset.height);
      asset.parts = fittedFragments(fit(asset, true));
      assets.set(assetIndex, asset);
    }
    return assets.get(assetIndex);
  }

  function targetCue(kind, target, point, strength, options = {}) {
    feedback.emit(kind, point, time, { strength, color: target.asset.color, wood: target.asset.wood, ...options });
  }

  function attach(item) {
    world.addBody(item.body);
    byBody.set(item.body, item);
    item.view.position.copy(item.body.position);
    item.view.quaternion.copy(item.body.quaternion);
    scene.add(item.view);
  }

  function remove(item, wake = true) {
    supportByBody.delete(item.body);
    for (const [upper, supports] of supportByBody) {
      if (!supports.delete(item.body)) continue;
      if (wake && upper.sleepState === Body.SLEEPING) upper.wakeUp();
      if (!supports.size) supportByBody.delete(upper);
    }
    byBody.delete(item.body);
    floorDebris.delete(item.body);
    world.removeBody(item.body);
    item.visual.dispose();
    disposeGroup(item.view);
  }

  function markLanding(item, point, speed) {
    item.landedAt = time;
    if (landingCues.has(item.id)) return;
    landingCues.add(item.id);
    lastImpact = time;
    targetCue('ground', item, { x: point.x, y: .025, z: point.z }, Math.min(1, .32 + speed * .12));
  }

  function liftToFloor(body) {
    body.updateAABB();
    body.position.y += Math.max(0, .008 - body.aabb.lowerBound.y);
    body.aabbNeedsUpdate = true;
  }

  function landFragment(item, point) {
    const { body } = item;
    item.groundShard = true;
    body.material = surfaces.fragment;
    body.collisionFilterMask = floorGroup;
    floorDebris.add(body);
    markLanding(item, point, Math.max(0, -body.velocity.y));
  }

  function groundImpact(item, point, measured) {
    const { body } = item;
    const speed = Math.max(0, measured?.speed ?? 0, -body.velocity.y);
    item.ground = {
      speed, energy: measured?.energy ?? .5 * body.mass * speed * speed,
      x: body.velocity.x, z: body.velocity.z, point,
    };
  }

  function split(target, ground = null) {
    const original = target.body;
    const { asset } = target;
    const scatter = ground ? Math.min(.9, Math.sqrt(
      2 * ground.energy * groundFragments.scatterFraction / (asset.parts.length * groundFragments.mass),
    )) : .24;

    return asset.parts.map(({ view: template, offset, size }, part) => {
      const position = original.pointToWorldFrame(new Vec3(offset.x, offset.y, offset.z));
      const velocity = original.getVelocityAtWorldPoint(position, new Vec3());
      const angularVelocity = original.angularVelocity.clone();
      const radial = position.vsub(original.position);
      radial.y = 0;
      if (radial.lengthSquared() < .001) radial.set(Math.cos(part * 2.4), 0, Math.sin(part * 2.4));
      radial.normalize();
      if (ground) {
        velocity.set(
          ground.x * groundFragments.inheritance + radial.x * scatter,
          Math.max(0, ground.speed - 2) * groundFragments.bounce,
          ground.z * groundFragments.inheritance + radial.z * scatter,
        );
        angularVelocity.scale(groundFragments.inheritance, angularVelocity);
        angularVelocity.x += radial.z * scatter * 4;
        angularVelocity.z -= radial.x * scatter * 4;
      } else {
        velocity.scale(.72, velocity);
        angularVelocity.scale(.72, angularVelocity);
        velocity.addScaledVector(scatter, radial, velocity);
      }
      const body = new Body({
        mass: groundFragments.mass,
        position,
        quaternion: original.quaternion.clone(),
        velocity,
        angularVelocity,
        shape: new Box(new Vec3(
          Math.max(.025, size.x * (ground ? .46 : .27)),
          Math.max(.025, size.y * (ground ? .46 : .29)),
          Math.max(.025, size.z * (ground ? .46 : .27)),
        )),
        material: ground ? surfaces.fragment : surfaces.airborne,
        collisionFilterGroup: 4,
        collisionFilterMask: ground ? floorGroup : 1 | floorGroup,
        linearDamping: ground ? groundFragments.damping : .1,
        angularDamping: ground ? groundFragments.damping : .15,
      });
      const view = template.clone(true);
      const item = {
        id: target.id, asset, body, view, visual: new TargetVisual(view), part,
        landedAt: ground ? time : null, groundShard: Boolean(ground),
        bornAt: time, restSince: null, coastSince: null, tableContactAt: -Infinity,
      };
      if (ground) {
        liftToFloor(body);
        floorDebris.add(body);
      } else {
        body.addEventListener('collide', ({ body: other, contact }) => {
          if (other !== floor || item.landedAt !== null) return;
          landFragment(item, contactCue(body, contact).point);
        });
      }
      body.previousPosition.copy(body.position);
      body.previousQuaternion.copy(body.quaternion);
      attach(item);
      return item;
    });
  }

  function add({ assetIndex, position }) {
    const asset = prepareAsset(assetIndex);
    const { height, jarProfile } = asset;
    const body = new Body({
      mass: asset.wood ? 1.65 : .85,
      shape: makeTargetShape(targetWidth, height, jarProfile),
      material: surfaces.target,
      position,
      linearDamping: .08, angularDamping: .12, sleepSpeedLimit: .12, sleepTimeLimit: .65,
    });
    if (jarProfile) applyJarInertia(body, jarProfile);
    const view = new Group();
    view.add(fit(asset));
    const item = {
      id: nextId++, asset, body, view, visual: new TargetVisual(view),
      landedAt: null, chipped: false, ground: null, hit: null, neighbor: null,
    };
    body.addEventListener('collide', ({ body: other, contact }) => {
      if (settling || item.landedAt !== null) return;
      if (other === floor) {
        groundImpact(item, contactCue(body, contact).point, measureContact(contact, .01));
      } else if (other.isShot && (!other.hitBody || other.hitBody === body)) {
        const impact = measureContact(contact, .25);
        if (impact && impact.energy > (item.hit?.energy ?? 0)) {
          other.hitBody = body;
          other.contactAt ??= time;
          item.hit = { ...impact, ...contactCue(body, contact) };
        }
      } else {
        const neighbor = byBody.get(other);
        if (!neighbor) return;
        const impact = measureContact(contact, .65);
        if (impact && impact.energy > (item.neighbor?.energy ?? 0)) {
          item.neighbor = { neighbor, ...impact, ...contactCue(body, contact) };
        }
      }
    });
    attach(item);
    items.push(item);
    targets.push(item);
    return item;
  }

  function trackSupports(asleep) {
    const previous = supportByBody;
    supportByBody = new Map();
    for (const { enabled, bi, bj, ni } of world.contacts) {
      if (!enabled || Math.abs(ni.y) < .45) continue;
      const [lower, upper] = ni.y > 0 ? [bi, bj] : [bj, bi];
      const item = byBody.get(upper);
      const support = byBody.get(lower);
      if (!item || item.landedAt !== null) continue;
      if (lower !== deck && (!support || support.part !== undefined || support.landedAt !== null)) continue;
      if (item.part !== undefined) {
        item.tableContactAt = time;
        continue;
      }
      if (!supportByBody.has(upper)) supportByBody.set(upper, new Set());
      supportByBody.get(upper).add(lower);
    }
    for (const [upper, oldSupports] of previous) {
      const current = supportByBody.get(upper) ?? new Set();
      for (const lower of oldSupports) {
        // Cannon skips sleeping pairs in the broad phase. Preserve the last confirmed support.
        if (asleep.has(upper) && (lower === deck || asleep.has(lower))) current.add(lower);
      }
      if (current.size) supportByBody.set(upper, current);
      if (upper.sleepState === Body.SLEEPING && [...oldSupports].some(lower => !current.has(lower))) {
        upper.wakeUp();
      }
    }
  }

  function chip(item, { point, normal }) {
    const model = fit(item.asset);
    addImpactChip(model, {
      point: item.body.pointToLocalFrame(point).toArray(),
      normal: item.body.vectorToLocalFrame(normal).toArray(),
    }, item.asset.wood);
    disposeGroup(item.view.children[0]);
    item.view.add(model);
    item.chipped = true;
  }

  function updateTarget(item) {
    if (item.ground) {
      const ground = item.ground;
      item.ground = null;
      markLanding(item, ground.point, ground.speed);
      const threshold = groundFractureSpeed * (item.chipped ? .75 : 1);
      if (ground.speed < threshold) return null;
      targetCue('fracture', item, { x: ground.point.x, y: .065, z: ground.point.z },
        Math.min(.72, .32 + ground.speed * .075), { grounded: true });
      return split(item, ground);
    }
    const carriesLoad = [...supportByBody.values()].some(supports => supports.has(item.body));
    if (item.hit) {
      const hit = item.hit;
      item.hit = null;
      lastImpact = time;
      const breaks = item.asset.parts.length > 1 && hit.energy >= shotFractureEnergy
        && (carriesLoad || item.chipped || hit.energy >= directFractureEnergy);
      targetCue(breaks ? 'fracture' : 'hit', item, hit.point,
        Math.min(1, .28 + .66 * Math.sqrt(hit.energy / shotFractureEnergy)), { normal: hit.normal });
      if (breaks) return split(item);
      if (!item.chipped && hit.energy >= chipEnergy) chip(item, hit);
    }
    if (item.neighbor) {
      const contact = item.neighbor;
      const { neighbor, energy, point, normal } = contact;
      item.neighbor = null;
      const pair = item.id < neighbor.id ? `${item.id}:${neighbor.id}` : `${neighbor.id}:${item.id}`;
      if (energy >= .28 && time - (neighborCueTimes.get(pair) ?? -Infinity) >= .12) {
        neighborCueTimes.set(pair, time);
        lastImpact = time;
        targetCue('neighbor', item, point, Math.min(.62, .22 + Math.sqrt(energy) * .23), { normal });
      }
      if (!item.chipped && !carriesLoad && energy >= (item.asset.wood ? 9 : 5)) chip(item, contact);
    }
    return null;
  }

  function updateDebris(item) {
    const { body } = item;
    if (item.landedAt === null) {
      const aboveDeck = body.position.y >= deckTop + deck.position.y - deckStartY - .06;
      const onDeck = time - item.tableContactAt <= .08;
      const speedSquared = (onDeck ? body.velocity.vsub(deck.velocity) : body.velocity).lengthSquared();
      const resting = aboveDeck && speedSquared <= .16 ** 2
        && body.angularVelocity.lengthSquared() <= .55 ** 2;
      const coasting = onDeck && speedSquared <= .65 ** 2;
      item.restSince = resting ? item.restSince ?? time : null;
      item.coastSince = coasting ? item.coastSince ?? time : null;
      if ((item.restSince !== null && time - item.restSince >= tableDebris.settle)
        || (item.coastSince !== null && time - item.coastSince >= tableDebris.coast)
        || time - item.bornAt >= tableDebris.maxAge) {
        item.landedAt = time;
      }
      return;
    }
    if (!item.groundShard || time - item.landedAt <= .025 || skitterCues.has(item.id)) return;
    const { velocity, position } = body;
    const horizontalSpeed = Math.hypot(velocity.x, velocity.z);
    if (horizontalSpeed > .27) {
      skitterCues.add(item.id);
      targetCue('skitter', item, { x: position.x, y: .03, z: position.z },
        Math.min(.53, horizontalSpeed * .55),
        { normal: { x: velocity.x / horizontalSpeed, y: 0, z: velocity.z / horizontalSpeed } });
    }
  }

  function tick(now, settlingStage = false) {
    time = now;
    settling = settlingStage;
    const asleep = new Set(world.bodies.filter(body => body.sleepState === Body.SLEEPING));
    for (const body of floorDebris) body.force.y -= body.mass * gravity * (groundFragments.gravityScale - 1);
    world.step(step);
    trackSupports(asleep);
    if (settling) return;
    const fragments = [];
    items = items.filter(item => {
      const { body } = item;
      // Fast, spinning bodies can cross the plane between contact checks.
      if (item.landedAt === null && body.position.y < 0) {
        const point = { x: body.position.x, y: 0, z: body.position.z };
        if (item.part !== undefined) landFragment(item, point);
        else if (!item.ground) groundImpact(item, point);
        liftToFloor(body);
        body.velocity.y = Math.max(0, body.velocity.y);
      }
      if (item.part !== undefined) updateDebris(item);
      else if (item.landedAt === null && (item.hit || item.ground || item.neighbor)) {
        const pieces = updateTarget(item);
        if (pieces) {
          fragments.push(...pieces);
          remove(item);
          return false;
        }
      }
      if (item.landedAt === null) return true;
      const timing = item.groundShard ? groundFragments
        : item.part === undefined ? { hold: landingHold, fade: landingFade } : tableDebris;
      const progress = (time - item.landedAt - timing.hold) / timing.fade;
      if (progress >= 1) {
        remove(item);
        return false;
      }
      if (progress > 0) item.visual.fade(1 - progress);
      return true;
    });
    items.push(...fragments);
    targets = items.filter(item => item.part === undefined);
  }

  return {
    get items() { return items; },
    get targets() { return targets; },
    get lastImpact() { return lastImpact; },
    reset(deckBody) {
      supportByBody.clear();
      items.forEach(item => remove(item, false));
      items = [];
      targets = [];
      deck = deckBody;
      deckStartY = deck.position.y;
      nextId = 0;
      lastImpact = -Infinity;
      landingCues.clear();
      skitterCues.clear();
      neighborCueTimes.clear();
      feedback.clear();
    },
    add,
    step: tick,
  };
}
