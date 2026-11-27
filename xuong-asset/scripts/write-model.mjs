import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

// GLTFExporter uses FileReader for the binary output.
globalThis.FileReader ??= class {
  async readAsArrayBuffer(blob) {
    this.result = await blob.arrayBuffer();
    this.onloadend?.();
  }
};

export async function writeModel(file, scene, animations, colorMaps) {
  const directory = new URL('../public/models/', import.meta.url);
  const exporter = new GLTFExporter();
  if (colorMaps) exporter.register(writer => ({
    async writeMaterialAsync(material, definition) {
      const file = colorMaps.get(material);
      if (!file) return;
      const jpeg = await readFile(file);
      const bufferView = await writer.processBufferViewImage(new Blob([jpeg]));
      const json = writer.json;
      json.images ??= [];
      json.textures ??= [];
      const source = json.images.push({ mimeType: 'image/jpeg', bufferView }) - 1;
      const index = json.textures.push({ source }) - 1;
      definition.pbrMetallicRoughness.baseColorTexture = { index };
    },
  }));
  const data = await exporter.parseAsync(scene, { binary: true, animations });
  await mkdir(directory, { recursive: true });
  await writeFile(new URL(file, directory), Buffer.from(data));
}
