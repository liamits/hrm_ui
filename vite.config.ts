import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/hrm_ui/',
  plugins: [
    react(),
  ],
  server: {
    port: 5555,
    strictPort: true,
  }
});
