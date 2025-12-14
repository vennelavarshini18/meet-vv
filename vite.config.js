import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    server: {
      // Only use port for dev server locally
      ...(command === "serve" && {
        port: 5173,
        open: false,
      }),
    },
    build: {
      outDir: "dist", // Vercel needs this
    },
  };
});
