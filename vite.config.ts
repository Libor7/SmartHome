import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  build: {
    sourcemap: process.env.NODE_ENV === "production",
    target: "es2020",
    // sourcemap: true,
    minify: "esbuild",
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes("node_modules")) {
    //         if (id.includes("react")) return "react";
    //         if (
    //           id.includes("@mui/material") ||
    //           id.includes("@mui/icons-material")
    //         ) {
    //           return "mui";
    //         }
    //         return "vendor";
    //       }
    //     },
    //   },
    // },
  },
  esbuild: {
    legalComments: "none",
  },
});
