import { Box, ContactMaterial, Cylinder, Material, Vec3 } from 'cannon-es';

export const damageSwapSpeed = 18;
export const gravity = 9.81;
export const shotMass = .24;
export const landingHold = .16;
export const landingFade = .32;

export function configureImpactWorld(world) {
  world.solver.iterations = 24;
  world.defaultContactMaterial.friction = .43;
  world.defaultContactMaterial.restitution = .025;
  const target = new Material('target');
  const floor = new Material('ground');
  world.addContactMaterial(new ContactMaterial(floor, target, {
    friction: .72,
    restitution: 0,
    contactEquationStiffness: 8e5,
    contactEquationRelaxation: 7,
  }));
  return { target, floor };
}

export function makeTargetShape(kind, width, height) {
  const radius = width / 2;
  return kind === 'crate'
    ? new Box(new Vec3(radius, height / 2, radius))
    : new Cylinder(radius, radius, height, 16);
}
