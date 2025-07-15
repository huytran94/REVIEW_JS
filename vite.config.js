import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

// Setup __dirname for ES Module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");

// Auto-discover lessons in `lesson-*` folders
function discoverLessonPages() {
  const pages = {};
  const baseDir = path.resolve(__dirname, "lessons");

  if (fs.existsSync(baseDir)) {
    fs.readdirSync(baseDir).forEach((dir) => {
      const fullPath = path.resolve(baseDir, dir);
      if (fs.statSync(fullPath).isDirectory() && /^lesson-\d+$/.test(dir)) {
        pages[dir] = path.resolve(fullPath, "index.html");
      }
    });
  }

  return pages;
}

// Vite config with multiple pages
export default defineConfig({
  root: ".",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ...discoverLessonPages(),
      },
    },
  },
});
