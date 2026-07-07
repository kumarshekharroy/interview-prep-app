import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

import process from 'node:process' 

const pagesBase =
  process.env.GITHUB_PAGES === 'true' ? '/interview-prep-app/' : '/';

export default defineConfig({
  base: pagesBase,
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 12000
  },
  test: {
    environment: "jsdom",
    globals: true
  }
});
