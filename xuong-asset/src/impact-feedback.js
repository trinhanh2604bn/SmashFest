import { CanvasTexture, Sprite, SpriteMaterial } from 'three';

const cues = {
  muzzle: { duration: .09, color: 0xffdb75, size: .55 },
  hit: { duration: .12, color: 0xffffbf, size: .42 },
  ground: { duration: .24, color: 0xcfa97e, size: .52 },
};

export function createImpactFeedback(scene) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 32;
  const ctx = canvas.getContext('2d');
  const edge = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  edge.addColorStop(0, '#fff');
  edge.addColorStop(.35, '#ffffffb0');
  edge.addColorStop(1, '#ffffff00');
  ctx.fillStyle = edge;
  ctx.fillRect(0, 0, 32, 32);
  const map = new CanvasTexture(canvas);
  const sprites = Array.from({ length: 5 }, () => {
    const sprite = new Sprite(new SpriteMaterial({ map, depthWrite: false, toneMapped: false }));
    sprite.visible = false;
    scene.add(sprite);
    return sprite;
  });
  let active = [];
  let audio;
  let muted = false;
  let lastContact = -Infinity;

  function unlock() {
    if (muted || !window.AudioContext) return;
    audio ??= new AudioContext();
    if (audio.state === 'suspended') audio.resume().catch(() => {});
  }

  function sound(kind, strength = 1, wood = false) {
    if (muted || audio?.state !== 'running') return;
    const base = kind === 'muzzle' ? 155 : kind === 'ground' ? 104 : wood ? 260 : 610;
    const duration = kind === 'muzzle' ? .10 : .075;
    const now = audio.currentTime;
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = kind === 'hit' && !wood ? 'sine' : 'triangle';
    oscillator.frequency.setValueAtTime(base, now);
    oscillator.frequency.exponentialRampToValueAtTime(base * .46, now + duration);
    gain.gain.setValueAtTime(.0001, now);
    gain.gain.exponentialRampToValueAtTime(Math.max(.0002, .07 * strength), now + .006);
    gain.gain.exponentialRampToValueAtTime(.0001, now + duration);
    oscillator.connect(gain).connect(audio.destination);
    oscillator.start(now);
    oscillator.stop(now + duration);
  }

  function sample(time) {
    active = active.filter(cue => time - cue.time < cues[cue.kind].duration);
    return active;
  }

  function draw(entries, time) {
    for (let i = 0; i < sprites.length; i++) {
      const sprite = sprites[i];
      const entry = entries[i];
      const cue = entry && cues[entry.kind];
      const age = cue ? (time - entry.time) / cue.duration : 1;
      sprite.visible = age >= 0 && age < 1;
      if (!sprite.visible) continue;
      sprite.material.color.setHex(cue.color);
      sprite.material.opacity = (entry.kind === 'ground' ? .56 : .94) * (1 - age) ** 2;
      const size = cue.size * (.65 + age * .9);
      const dust = entry.kind === 'ground';
      sprite.position.set(entry.x, entry.y + (dust ? .09 + age * .12 : 0), entry.z);
      sprite.scale.set(size, size * (dust ? .40 : 1), 1);
    }
  }

  return {
    unlock,
    get muted() { return muted; },
    toggle() { muted = !muted; if (!muted) unlock(); },
    emit(kind, { x, y, z }, time, strength = 1, wood = false) {
      active = [...active.slice(1 - sprites.length), { kind, x, y, z, time }];
      sound(kind, strength, wood);
    },
    contact(time, strength, wood) {
      if (time - lastContact < .075) return;
      lastContact = time;
      sound('hit', strength, wood);
    },
    sample,
    draw,
    clear() { active = []; draw(active, 0); },
  };
}
