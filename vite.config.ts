import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

const root = resolve(__dirname, "src");
const outdir = resolve(__dirname, "dist");

// https://vite.dev/config/
export default defineConfig({
  root,
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    outDir: outdir,
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        main: resolve(root, "index.html"),
        nested: resolve(root, "nested", "index.html")
      },
    },
  },
})
