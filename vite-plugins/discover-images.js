import fs from 'fs'
import path from 'path'

/**
 * Exposes `virtual:discover-images`: a map { slug: '/assets/discover-<slug>.webp' }
 * of the photos found in public/assets/ for the "Découvrir Las Galeras" page.
 * Dropping a new `discover-<slug>.webp` file is enough to display it.
 */
const VIRTUAL_MODULE_ID = 'virtual:discover-images'
const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`
const DISCOVER_FILE_PATTERN = /^discover-([a-z0-9-]+)\.webp$/i

function scanDiscoverImages(publicDir) {
  const assetsDir = path.join(publicDir, 'assets')

  if (!fs.existsSync(assetsDir)) {
    return {}
  }

  return fs.readdirSync(assetsDir).reduce((images, filename) => {
    const match = filename.match(DISCOVER_FILE_PATTERN)
    if (match) {
      images[match[1].toLowerCase()] = `/assets/${filename}`
    }
    return images
  }, {})
}

export function discoverImagesPlugin() {
  let publicDir

  return {
    name: 'discover-images',
    configResolved(config) {
      publicDir = config.publicDir
    },
    resolveId(id) {
      if (id === VIRTUAL_MODULE_ID) {
        return RESOLVED_VIRTUAL_MODULE_ID
      }
    },
    load(id) {
      if (id === RESOLVED_VIRTUAL_MODULE_ID) {
        return `export default ${JSON.stringify(scanDiscoverImages(publicDir))}`
      }
    },
    configureServer(server) {
      const assetsDir = path.join(publicDir, 'assets')
      if (!fs.existsSync(assetsDir)) {
        return
      }

      server.watcher.add(path.join(assetsDir, 'discover-*.webp'))
      server.watcher.on('add', reloadDiscoverImages)
      server.watcher.on('unlink', reloadDiscoverImages)

      function reloadDiscoverImages(file) {
        if (!DISCOVER_FILE_PATTERN.test(path.basename(file))) {
          return
        }

        const mod = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_MODULE_ID)
        if (mod) {
          server.moduleGraph.invalidateModule(mod)
          server.ws.send({ type: 'full-reload' })
        }
      }
    },
  }
}
