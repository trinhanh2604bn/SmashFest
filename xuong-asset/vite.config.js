import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  base: './',
  resolve: { dedupe: ['three', 'cannon-es'] },
  server: {
    fs: {
      allow: [
        fileURLToPath(new URL('./', import.meta.url)),
        fileURLToPath(new URL('../shared/impact/', import.meta.url)),
      ],
    },
  },
  build: {
    rollupOptions: {
      input: {
        workshop: fileURLToPath(new URL('./index.html', import.meta.url)),
        impact: fileURLToPath(new URL('./impact.html', import.meta.url)),
      },
    },
  },
});
