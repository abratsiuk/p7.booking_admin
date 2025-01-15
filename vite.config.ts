import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/p7.booking_admin/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        $base-path: '/p7.booking_admin/';
        @use '/src/styles/variables.scss' as *;`,
      },
    },
  },
});
