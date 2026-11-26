import { AdditiveBlending, CanvasTexture, Color, NormalBlending, Sprite, SpriteMaterial, Vector3 } from 'three';
import { createImpactAudio } from './impact-audio.js';

const cues = {
  muzzle: { duration: .17, color: 0xffbe58, size: .72, count: 6, spread: .46 },
  hit: { duration: .24, color: 0xffdb83, size: .66, count: 8, spread: .60 },
  fracture: { duration: .42, color: 0xffb95f, size: .82, count: 10, spread: 1.16 },
  neighbor: { duration: .19, color: 0xffdaa0, size: .44, count: 5, spread: .40 },
  ground: { duration: .50, color: 0xe6c19a, size: .84, count: 8, spread: 1.22 },
  skitter: { duration: .24, color: 0xe0c5a4, size: .32, count: 4, spread: .37 },
};

const cueLimit = 10;
const spritesPerCue = 18;
const cannonMuzzleSprites = 10;
const smokeCount = 3;
const smokeDelay = .016;
const smokeStagger = .019;
const smokeDuration = .29;
const impactSmokeEnd = smokeDelay + (smokeCount - 1) * smokeStagger + smokeDuration;
const size = 64;

function makeTexture(paint) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.translate(size / 2, size / 2);
  paint(ctx);
  return new CanvasTexture(canvas);
}

function isDirectImpact(entry) {
  return !entry.grounded && (entry.kind === 'hit' || entry.kind === 'fracture');
}

function createTextures() {
  return {
    flash: makeTexture(ctx => {
      const glow = ctx.createRadialGradient(0, 0, 1, 0, 0, 31);
      glow.addColorStop(0, '#fff');
      glow.addColorStop(.23, '#ffffffe3');
      glow.addColorStop(.52, '#ffffff65');
      glow.addColorStop(1, '#ffffff00');
      ctx.fillStyle = glow;
      ctx.fillRect(-32, -32, 64, 64);
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const angle = i * Math.PI / 4;
        const radius = i % 2 ? 5 : 26;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
    }),
    ring: makeTexture(ctx => {
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#ffffffe0';
      for (let i = 0; i < 3; i++) {
        const start = i * Math.PI * 2 / 3;
        ctx.beginPath();
        ctx.arc(0, 0, 25, start, start + 1.55);
        ctx.stroke();
      }
    }),
    chip: makeTexture(ctx => {
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.moveTo(-23, 13);
      ctx.lineTo(4, -21);
      ctx.lineTo(22, -5);
      ctx.lineTo(14, 21);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#ffffff73';
      ctx.fillRect(-27, -4, 49, 8);
    }),
    dust: makeTexture(ctx => {
      const cloud = ctx.createRadialGradient(-3, -4, 3, 0, 0, 31);
      cloud.addColorStop(0, '#fffffff2');
      cloud.addColorStop(.55, '#ffffffbf');
      cloud.addColorStop(1, '#ffffff00');
      ctx.fillStyle = cloud;
      ctx.fillRect(-32, -32, 64, 64);
    }),
    smoke: makeTexture(ctx => {
      for (const [x, y, radius] of [[-9, 4, 19], [7, -9, 18], [11, 8, 16], [0, 1, 24]]) {
        const puff = ctx.createRadialGradient(x, y, 0, x, y, radius);
        puff.addColorStop(0, '#ffffffe8');
        puff.addColorStop(.36, '#ffffffc2');
        puff.addColorStop(.72, '#ffffff37');
        puff.addColorStop(1, '#ffffff00');
        ctx.fillStyle = puff;
        ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
      }
    }),
    flame: makeTexture(ctx => {
      for (const [x, y, radius] of [[0, 0, 30], [-14, 6, 15], [12, 10, 17], [3, -13, 16]]) {
        const flare = ctx.createRadialGradient(x, y, 0, x, y, radius);
        flare.addColorStop(0, '#fff5b9');
        flare.addColorStop(.27, '#ffbc42d9');
        flare.addColorStop(.62, '#fa5d1974');
        flare.addColorStop(1, '#f7350b00');
        ctx.fillStyle = flare;
        ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
      }
    }),
    ember: makeTexture(ctx => {
      const streak = ctx.createLinearGradient(0, 30, 0, -20);
      streak.addColorStop(0, '#f9370d00');
      streak.addColorStop(.55, '#ff790b99');
      streak.addColorStop(.86, '#ffd258');
      streak.addColorStop(1, '#fff7c3');
      ctx.fillStyle = streak;
      ctx.beginPath();
      ctx.moveTo(0, 31);
      ctx.lineTo(-13, -15);
      ctx.lineTo(-6, -29);
      ctx.lineTo(7, -29);
      ctx.lineTo(13, -15);
      ctx.closePath();
      ctx.fill();
    }),
  };
}

export function createImpactFeedback(scene) {
  const textures = createTextures();
  const tint = new Color();
  const viewVelocity = new Vector3();
  const sprites = Array.from({ length: cueLimit * spritesPerCue }, () => {
    const material = new SpriteMaterial({
      map: textures.flash, transparent: true, depthWrite: false, toneMapped: false,
    });
    const sprite = new Sprite(material);
    sprite.visible = false;
    const velocity = new Vector3();
    sprite.userData.velocity = velocity;
    sprite.onBeforeRender = (_renderer, _scene, camera) => {
      if (!sprite.userData.isEmber) return;
      viewVelocity.copy(velocity).transformDirection(camera.matrixWorldInverse);
      material.rotation = Math.atan2(-viewVelocity.x, viewVelocity.y);
    };
    scene.add(sprite);
    return sprite;
  });
  let active = [];
  let serial = 0;
  const sound = createImpactAudio();

  function sample(time) {
    active = active.filter(entry => {
      const duration = cues[entry.kind].duration;
      return time - entry.time < (isDirectImpact(entry) ? Math.max(duration, impactSmokeEnd) : duration);
    });
    return active;
  }

  function drawImpactSmoke(sprite, entry, particle, seconds) {
    const age = (seconds - smokeDelay - particle * smokeStagger) / smokeDuration;
    sprite.visible = age >= 0 && age < 1;
    if (!sprite.visible) return;

    const material = sprite.material;
    material.map = textures.smoke;
    material.color.setHex(0xf2f0ed);
    material.depthTest = true;
    material.opacity = (.16 + .26 * entry.strength) * Math.min(1, .26 + age * 8) * (1 - age) ** 1.35;
    const angle = particle * 2.39996 + entry.seed * .81;
    material.rotation = angle + age * .28;
    const [nx, ny, nz] = entry.normal;
    const reach = .15 + age * .30;
    const spread = .065 + age * .18;
    sprite.position.set(
      entry.x + nx * reach + Math.cos(angle) * spread,
      entry.y + ny * reach + .04 + age * .24,
      entry.z + nz * reach + Math.sin(angle) * spread,
    );
    const scale = (.19 + age * .35) * (.83 + entry.strength * .17);
    sprite.scale.set(scale, scale * .85, 1);
  }

  function drawCannonMuzzle(sprite, entry, particle, seconds) {
    const material = sprite.material;
    const power = .72 + entry.strength * .28;
    const [nx, ny, nz] = entry.normal;
    const angle = entry.seed * 1.39 + particle * 2.39996;
    material.blending = AdditiveBlending;
    if (particle < 3) {
      const core = particle === 0;
      const flare = particle === 2;
      const lifetime = core ? .074 : .105;
      const age = seconds / lifetime;
      sprite.visible = age < 1;
      if (!sprite.visible) return;
      const reach = core ? .025 : flare ? .20 + seconds * 2.7 : .075 + seconds * .8;
      const scale = (core ? .56 : flare ? .34 : .68) * power * (1 + age * .32);
      material.map = core ? textures.flash : textures.flame;
      material.color.setHex(core ? 0xfff5cd : flare ? 0xffca70 : 0xffb653);
      material.depthTest = false;
      material.rotation = angle;
      material.opacity = (core ? 1 : flare ? .78 : .83) * power * (1 - age) ** 1.18;
      sprite.position.set(entry.x + nx * reach, entry.y + ny * reach, entry.z + nz * reach);
      sprite.scale.setScalar(scale);
      return;
    }

    const age = seconds / .155;
    sprite.visible = age < 1;
    if (!sprite.visible) return;
    const tangentLength = Math.hypot(nx, nz);
    const tx = tangentLength > .001 ? nz / tangentLength : 1;
    const tz = tangentLength > .001 ? -nx / tangentLength : 0;
    const forward = power * (3.2 + .95 * Math.cos(angle * 1.67));
    const sideways = 1.62 * Math.cos(angle);
    const vertical = 1.62 * Math.sin(angle);
    const vx = nx * forward + tx * sideways + ny * tz * vertical;
    const vy = ny * forward + (nz * tx - nx * tz) * vertical;
    const vz = nz * forward + tz * sideways - ny * tx * vertical;
    sprite.position.set(
      entry.x + nx * .07 + vx * seconds,
      entry.y + ny * .07 + vy * seconds - .9 * seconds ** 2,
      entry.z + nz * .07 + vz * seconds,
    );
    material.map = textures.ember;
    material.color.setHex(0xffe092);
    material.opacity = power * .94 * (1 - age) ** 1.28;
    material.depthTest = true;
    sprite.userData.isEmber = true;
    sprite.userData.velocity.set(vx, vy - 1.8 * seconds, vz);
    sprite.scale.set(.047 * power, .17 * power * (1 - age * .56), 1);
  }

  function drawFire(sprite, entry, cue, particle, age, emberCount) {
    const material = sprite.material;
    const [nx, ny, nz] = entry.normal;
    const seconds = age * cue.duration;
    const power = .54 + .46 * entry.strength;
    const angle = particle * 2.39996 + entry.seed * 1.13;
    material.color.setHex(0xffffff);
    if (particle < 2) {
      const core = particle === 0;
      const fade = 1 - seconds / (core ? .085 : .18);
      sprite.visible = fade > 0;
      if (!sprite.visible) return;
      material.map = core ? textures.flash : textures.flame;
      material.blending = AdditiveBlending;
      material.depthTest = false;
      material.color.setHex(core ? 0xffebaf : 0xffffff);
      material.rotation = angle;
      material.opacity = power * (core ? fade ** 1.75 : .8 * fade ** 1.25);
      const reach = core ? .12 : .16 + seconds * .44;
      sprite.position.set(entry.x + nx * reach, entry.y + ny * reach + seconds * .31, entry.z + nz * reach);
      sprite.scale.setScalar(cue.size * power * (core ? .93 + seconds * 1.5 : .52 + seconds * 5.8));
      return;
    }

    const ember = particle < emberCount + 2;
    const speed = power * (1.58 + .95 * Math.sin(angle * 1.61) ** 2);
    const tangentLength = Math.hypot(nx, nz);
    const tx = tangentLength > .001 ? nz / tangentLength : 1;
    const tz = tangentLength > .001 ? -nx / tangentLength : 0;
    const sideways = Math.cos(angle) * speed;
    const vertical = Math.sin(angle) * speed;
    const forward = speed * (ember ? .94 : .45);
    const vx = nx * forward + tx * sideways + ny * tz * vertical;
    const vy = ny * forward + (nz * tx - nx * tz) * vertical + .47;
    const vz = nz * forward + tz * sideways - ny * tx * vertical;
    const travel = seconds * (1 - age * .25);
    sprite.position.set(
      entry.x + nx * .13 + vx * travel,
      entry.y + ny * .13 + vy * travel - 1.9 * seconds ** 2,
      entry.z + nz * .13 + vz * travel,
    );
    const fade = (1 - age) ** (ember ? 1.25 : 1.7);
    material.map = ember ? textures.ember : textures.chip;
    material.blending = ember ? AdditiveBlending : NormalBlending;
    material.depthTest = true;
    material.opacity = power * fade;
    if (ember) {
      sprite.userData.isEmber = true;
      sprite.userData.velocity.set(vx, vy - 3.8 * seconds, vz);
      sprite.scale.set(.054 * power, (.14 + speed * .048) * power * (1 - age * .65), 1);
    } else {
      material.color.setHex(entry.color ?? cue.color).lerp(tint.setHex(0xffd999), .32);
      material.rotation = angle + age * 5.2;
      sprite.scale.set(.11 * power, .14 * power, 1);
    }
  }

  function drawBurst(sprite, entry, cue, particle, age) {
    const material = sprite.material;
    const flash = particle === 0;
    const ring = particle === 1 && entry.kind !== 'muzzle';
    const shape = flash ? 'flash' : ring ? 'ring' : 'chip';
    const [nx, ny, nz] = entry.normal;
    const angle = particle * 2.4 + entry.seed * .97;
    const spread = cue.spread * age * (.76 + .24 * Math.cos(angle * 2.12));
    const reach = flash || ring ? .10 : .08 + spread * .47;
    const accent = flash || ring || entry.kind === 'muzzle'
      ? cue.color : entry.color ?? cue.color;
    material.map = textures[shape];
    material.color.setHex(accent);
    if (!flash && !ring) material.color.lerp(tint.setHex(0xffffff), .28);
    material.depthTest = !flash && !ring;
    material.opacity = entry.strength * (1 - age) ** (flash ? 1.4 : 1.7);
    material.rotation = angle + (flash || ring ? age * .4 : age * 4.5);
    sprite.position.set(
      entry.x + nx * reach + (flash || ring ? 0 : Math.cos(angle) * spread * .62),
      entry.y + ny * reach + (flash || ring ? 0 : Math.sin(angle) * spread * .56 + age * (.48 - age * .70)),
      entry.z + nz * reach + (flash || ring ? 0 : Math.sin(angle * 1.61) * spread * .57),
    );
    const scale = cue.size * (.7 + entry.strength * .3);
    if (flash) sprite.scale.setScalar(scale * (.66 + age * .64));
    else if (ring) sprite.scale.setScalar(scale * (.65 + age * 1.48));
    else {
      const width = (.105 + .066 * Math.cos(angle * 1.5)) * (1 + entry.strength * .45);
      sprite.scale.set(width, width * 1.66, 1);
    }
  }

  function drawGround(sprite, entry, cue, particle, age) {
    const material = sprite.material;
    const fracture = entry.kind === 'fracture';
    const chip = fracture && particle >= 4;
    const angle = particle * 2.4 + entry.seed * 1.23;
    const spread = cue.spread * (.06 + age * (particle === 0 ? .48 : .90));
    const height = chip ? Math.max(.023, age * (.74 - age * .90)) : .035 + age * .12;
    const [nx, , nz] = entry.normal;
    material.map = chip ? textures.chip : textures.dust;
    material.color.setHex(chip ? entry.color ?? cue.color : cues.ground.color);
    if (chip) material.color.lerp(tint.setHex(0xffffff), .22);
    material.opacity = (chip ? .92 : .67) * entry.strength * (1 - age) ** 1.55;
    material.depthTest = true;
    material.rotation = chip ? angle + age * 5 : 0;
    sprite.position.set(
      entry.x + Math.cos(angle) * spread * (particle === 0 ? .25 : 1) + nx * age * .33,
      entry.y + height,
      entry.z + Math.sin(angle) * spread * (particle === 0 ? .25 : 1) + nz * age * .33,
    );
    const scale = chip ? .12 + .04 * Math.cos(angle * 2) : cue.size * (particle === 0 ? .70 + age * .87 : .40 + age * .66);
    sprite.scale.set(scale, scale * (chip ? 1.45 : .57), 1);
  }

  function draw(entries, time) {
    for (let i = 0; i < sprites.length; i++) {
      const sprite = sprites[i];
      const particle = i % spritesPerCue;
      const entry = entries[Math.floor(i / spritesPerCue)];
      const cue = entry && cues[entry.kind];
      const seconds = cue ? time - entry.time : Infinity;
      const age = seconds / (cue?.duration ?? 1);
      const cannonMuzzle = !!entry?.cannon && entry.kind === 'muzzle';
      const fire = !!entry && isDirectImpact(entry);
      const emberCount = fire ? Math.round(4 + (entry.kind === 'fracture' ? 5 : 3) * entry.strength) : 0;
      const fireCount = 2 + emberCount + (entry?.kind === 'fracture' ? 4 : 2);
      const smoke = fire && particle >= fireCount && particle < fireCount + smokeCount;
      const count = cannonMuzzle ? cannonMuzzleSprites : fire ? fireCount : cue?.count;
      sprite.visible = smoke || (age >= 0 && age < 1 && particle < count);
      if (!sprite.visible) continue;
      sprite.userData.isEmber = false;
      sprite.material.blending = NormalBlending;
      if (cannonMuzzle) {
        drawCannonMuzzle(sprite, entry, particle, seconds);
      } else if (smoke) {
        drawImpactSmoke(sprite, entry, particle - fireCount, seconds);
      } else if (fire) {
        drawFire(sprite, entry, cue, particle, age, emberCount);
      } else if (entry.grounded || entry.kind === 'ground' || entry.kind === 'skitter') {
        drawGround(sprite, entry, cue, particle, age);
      } else {
        drawBurst(sprite, entry, cue, particle, age);
      }
    }
  }

  return {
    unlock: sound.unlock,
    get muted() { return sound.muted; },
    toggle: sound.toggle,
    playResult(won) { sound.play(won ? 'win' : 'lose', { x: 0, strength: 1 }); },
    emit(kind, { x, y, z }, time, { strength = 1, normal, color, wood = false, grounded = false, cannon = false } = {}) {
      if (!cues[kind]) return;
      const length = normal ? Math.hypot(normal.x, normal.y, normal.z) : 0;
      const entry = {
        kind, x, y, z, time, wood, grounded, cannon, seed: serial++,
        strength: Math.max(.12, Math.min(1, strength)),
        normal: length ? [normal.x / length, normal.y / length, normal.z / length] : [0, 0, 0],
        color: color == null ? null : tint.set(color).getHex(),
      };
      active = [...sample(time).slice(1 - cueLimit), entry];
      sound.play(kind, entry);
    },
    sample,
    draw,
    clear() {
      active = [];
      serial = 0;
      sound.clear();
      draw(active, 0);
    },
  };
}
