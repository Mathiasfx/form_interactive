import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "utils"),
    },
  },
  build: {
    sourcemap: true, // Habilita los sourcemaps en el build de producción
  },
});