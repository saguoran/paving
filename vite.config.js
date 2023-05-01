import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

import solid from "solid-start/vite";
import staticAdapter from "solid-start-static";

export default defineConfig({
  base: '/paving/',
  plugins: [solid({ adapter: staticAdapter() }), solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
