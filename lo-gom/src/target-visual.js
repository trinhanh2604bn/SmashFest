export class TargetVisual {
  constructor(view) {
    this.view = view;
    this.fadeMaterials = null;
  }

  fade(opacity) {
    if (!this.fadeMaterials) {
      this.fadeMaterials = new Map();
      const clone = original => {
        let material = this.fadeMaterials.get(original);
        if (!material) {
          material = original.clone();
          material.transparent = true;
          material.depthWrite = false;
          this.fadeMaterials.set(original, material);
        }
        return material;
      };
      this.view.traverse(mesh => {
        if (!mesh.isMesh) return;
        mesh.material = Array.isArray(mesh.material) ? mesh.material.map(clone) : clone(mesh.material);
        mesh.castShadow = false;
      });
    }
    for (const [original, material] of this.fadeMaterials) material.opacity = original.opacity * opacity;
  }

  dispose() {
    if (this.fadeMaterials) for (const material of this.fadeMaterials.values()) material.dispose();
  }
}
