import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    // outDir: "../../dist/html",
  },
  server: {
    host: "0.0.0.0",
    https: true,
    open: true,
  },
});
