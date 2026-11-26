import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        workshop: fileURLToPath(new URL('./index.html', import.meta.url)),
        impact: fileURLToPath(new URL('./impact.html', import.meta.url)),
      },
    },
  },
});
