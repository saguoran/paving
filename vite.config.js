import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  base: '/paving/',
  plugins: [solid({ adapter: staticAdapter() })],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
