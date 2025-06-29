import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Skip certain warnings
        if (warning.code === "UNUSED_EXTERNAL_IMPORT") return;
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
        if (warning.message.includes("Use of eval")) return;

        // Use default warning behavior for other warnings
        warn(warning);
      },
    },
    // Continue building even if there are warnings
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true,
      },
    },
  },
  esbuild: {
    logOverride: {
      "this-is-undefined-in-esm": "silent",
      "commonjs-variable-in-esm": "silent",
    },
  },
});
