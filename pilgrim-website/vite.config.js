import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Base path for the project
  plugins: [react()],
  build: {
    outDir: "dist", // Output directory for the build files
    rollupOptions: {
      input: "./index.html", // Update this to the path where your index.html is located
    },
  },
});
