import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    postcss: null,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "${path.resolve(__dirname, './src/assets/variables')}";
        `,
      },
    },
  },
});
