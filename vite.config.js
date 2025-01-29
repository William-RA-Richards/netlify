import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", //* Sets the environment to jsdom for testing React components
    setupFiles: "./setupTests.js", //* Optional setup file for global test setup
  },
});
