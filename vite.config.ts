import * as path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
