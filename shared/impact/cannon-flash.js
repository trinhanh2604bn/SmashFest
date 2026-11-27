import * as T from 'three';

// The front rim is at z=1.295 in the animated BarrelRecoil node of Lam Kim.
export function createCannonFlash() {
  const flash = new T.Group();
  flash.position.z = 1.32;
  flash.visible = false;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const glow = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  glow.addColorStop(0, '#ffffed');
  glow.addColorStop(.24, '#ffffae');
  glow.addColorStop(.48, '#fff332ef');
  glow.addColorStop(.69, '#ffac1d92');
  glow.addColorStop(1, '#ff951000');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 128, 128);
  const texture = new T.CanvasTexture(canvas);
  texture.colorSpace = T.SRGBColorSpace;
  const material = new T.SpriteMaterial({ map: texture, blending: T.AdditiveBlending,
    transparent: true, depthWrite: false, toneMapped: false });
  // A forward plume and two shorter side jets make the burst readable from behind the barrel.
  const lobes = [[0, .04, .44, 1.12], [-.31, .08, .19, .71], [.32, .05, .21, .76], [.04, .22, .72, .76]];
  const sprites = lobes.map(() => new T.Sprite(material));
  flash.add(...sprites);
  const light = new T.PointLight(0xffc243, 0, 3);
  flash.add(light);
  return { flash, draw(time) {
    flash.visible = time > 0 && time < .19;
    if (!flash.visible) return;
    const t = time / .19;
    const spread = .42 + .92 * Math.sqrt(t);
    material.opacity = Math.min(1, t * 22) * (1 - t * t);
    light.intensity = 9 * material.opacity;
    sprites.forEach((sprite, i) => {
      const [x, y, z, size] = lobes[i];
      sprite.position.set(x * spread, y * spread, z * spread);
      sprite.scale.setScalar(size * spread);
    });
  } };
}
