import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import solid from "solid-start/vite";
// import staticAdapter from "solid-start-static";

export default defineConfig({
  plugins: [solidPlugin()],  
  // plugins: [solid({ adapter: staticAdapter() }),],
  server: {
    port: 3000,
  },
  base: '/',
  build: {    
    target: 'esnext',
  },
});
