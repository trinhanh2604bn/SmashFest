import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { mkdir, writeFile } from 'node:fs/promises';

// GLTFExporter uses FileReader for the binary output.
globalThis.FileReader ??= class {
  async readAsArrayBuffer(blob) {
    this.result = await blob.arrayBuffer();
    this.onloadend?.();
  }
};

export async function writeModel(file, scene, animations) {
  const directory = new URL('../public/models/', import.meta.url);
  const data = await new GLTFExporter().parseAsync(scene, { binary: true, animations });
  await mkdir(directory, { recursive: true });
  await writeFile(new URL(file, directory), Buffer.from(data));
}
