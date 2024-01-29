import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: ["src/local-time-element.ts", "src/LocalTimeElement.ts"],
      formats: ["es"],
    },
    rollupOptions: {
      external: ["lit/decorators.js", "@lit/reactive-element"],
    },
  },
  plugins: [dts()],
});
