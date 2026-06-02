import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { galleryImagesPlugin } from './vite-plugins/gallery-images.js'

export default defineConfig({
  plugins: [react(), galleryImagesPlugin()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
})

