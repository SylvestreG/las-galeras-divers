import fs from 'fs'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { galleryImagesPlugin } from './vite-plugins/gallery-images.js'
import { discoverImagesPlugin } from './vite-plugins/discover-images.js'
import { prerenderRoutesPlugin } from './vite-plugins/prerender-routes.js'
import { buildFaqJsonLd } from './vite-plugins/faq-json-ld.js'
import { canonicalUrl, DISCOVER_SLUG, FAQ_SLUG, SITE_URL } from './src/routes.js'

// French is the site's default language: it provides the static metadata of
// the pre-rendered pages (the app switches language in the browser).
const fr = JSON.parse(fs.readFileSync(fileURLToPath(new URL('./src/locales/fr.json', import.meta.url)), 'utf8'))

export default defineConfig({
  plugins: [
    react(),
    galleryImagesPlugin(),
    discoverImagesPlugin(),
    prerenderRoutesPlugin([
      {
        slug: DISCOVER_SLUG,
        url: canonicalUrl(DISCOVER_SLUG),
        title: fr.seo.discover.title,
        description: fr.seo.discover.description,
        image: `${SITE_URL}/assets/gallery-5.jpg`,
      },
      {
        slug: FAQ_SLUG,
        url: canonicalUrl(FAQ_SLUG),
        title: fr.seo.faq.title,
        description: fr.seo.faq.description,
        image: `${SITE_URL}/assets/gallery-4.jpg`,
        jsonLd: buildFaqJsonLd(fr.faq),
      },
    ]),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
})
