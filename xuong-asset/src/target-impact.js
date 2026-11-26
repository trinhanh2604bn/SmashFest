import { Box, ContactMaterial, ConvexPolyhedron, Material, Vec3 } from 'cannon-es';

export const shotFractureEnergy = 26;
export const gravity = 9.81;
export const shotMass = .26;
export const landingHold = .20;
export const landingFade = .24;
export const floorGroup = 2;
export const groundFragments = {
  // ParticleObject and PhysicsMat values from Ingredients/physics.json.
  mass: .05, bounce: .02, damping: .3, gravityScale: 1.5, inheritance: .5, friction: .6,
  hold: .40, fade: .40, scatterFraction: .008,
};

const torque = new Vec3();
const angularResponse = new Vec3();

function rotationalInverseMass(body, offset, normal) {
  if (!body.invMass) return 0;
  offset.cross(normal, torque);
  body.invInertiaWorld.vmult(torque, angularResponse);
  return torque.dot(angularResponse);
}

export function measureContact(contact, minimumSpeed) {
  const speed = contact.getImpactVelocityAlongNormal();
  if (speed < minimumSpeed) return null;
  const { bi, bj, ri, rj, ni } = contact;
  const inverseMass = bi.invMass + bj.invMass
    + rotationalInverseMass(bi, ri, ni) + rotationalInverseMass(bj, rj, ni);
  // Contact energy at an edge includes the energy that goes into rotation.
  return inverseMass > 0 ? { speed, energy: .5 * speed * speed / inverseMass } : null;
}

export function configureImpactWorld(world) {
  world.broadphase.useBoundingBoxes = true;
  world.narrowphase.enableFrictionReduction = true;
  world.solver.iterations = 12;
  const target = new Material('target');
  const floor = new Material('ground');
  const deck = new Material('deck');
  const ball = new Material('ball');
  const airborne = new Material('airborne-fragment');
  const fragment = new Material('ground-fragment');
  for (const [other, friction, restitution] of [[target, .50, .01], [deck, .48, 0], [ball, .20, .02]]) {
    world.addContactMaterial(new ContactMaterial(other, target, { friction, restitution }));
  }
  world.addContactMaterial(new ContactMaterial(floor, target, {
    friction: .72,
    restitution: 0,
    contactEquationStiffness: 8e5,
    contactEquationRelaxation: 7,
  }));
  world.addContactMaterial(new ContactMaterial(floor, fragment, {
    friction: groundFragments.friction,
    restitution: groundFragments.bounce,
  }));
  world.addContactMaterial(new ContactMaterial(target, airborne, { friction: .22, restitution: .02 }));
  world.addContactMaterial(new ContactMaterial(deck, airborne, { friction: .43, restitution: .02 }));
  return { target, floor, deck, ball, airborne, fragment };
}

export function makeTargetShape(width, height, jarProfile) {
  if (!jarProfile) return new Box(new Vec3(width / 2, height / 2, width / 2));

  const sides = 8;
  const vertices = jarProfile.flatMap(({ y, radius }) => Array.from({ length: sides }, (_, i) => {
    const angle = i * 2 * Math.PI / sides;
    return new Vec3(radius * Math.cos(angle), y, radius * Math.sin(angle));
  }));
  const bottom = Array.from({ length: sides }, (_, i) => i);
  const faces = [bottom, bottom.map(i => 3 * sides - 1 - i)];
  for (let ring = 0; ring < 2; ring++) {
    const start = ring * sides;
    for (let i = 0; i < sides; i++) {
      const current = start + i;
      const next = start + (i + 1) % sides;
      faces.push([current, current + sides, next + sides, next]);
    }
  }
  const hull = new ConvexPolyhedron({ vertices, faces });
  // Opposite directions test the same separating axis.
  const distinctAxes = axes => axes.filter((axis, index) =>
    !axes.slice(0, index).some(previous => Math.abs(axis.dot(previous)) > 1 - 1e-8));
  hull.uniqueEdges = distinctAxes(hull.uniqueEdges);
  hull.uniqueAxes = distinctAxes(hull.faceNormals);
  return hull;
}
