import fs from 'fs'
import path from 'path'

const VIRTUAL_MODULE_ID = 'virtual:gallery-images'
const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`
const GALLERY_FILE_PATTERN = /^gallery-(\d+)\.webp$/i

function scanGalleryImages(publicDir) {
  const assetsDir = path.join(publicDir, 'assets')

  if (!fs.existsSync(assetsDir)) {
    return []
  }

  return fs
    .readdirSync(assetsDir)
    .reduce((images, filename) => {
      const match = filename.match(GALLERY_FILE_PATTERN)
      if (!match) {
        return images
      }

      const id = Number(match[1])
      images.push({
        id,
        src: `/assets/${filename}`,
        altKey: `gallery.image${id}`,
      })
      return images
    }, [])
    .sort((a, b) => a.id - b.id)
}

export function galleryImagesPlugin() {
  let publicDir

  return {
    name: 'gallery-images',
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
        const images = scanGalleryImages(publicDir)
        return `export default ${JSON.stringify(images)}`
      }
    },
    configureServer(server) {
      const assetsDir = path.join(publicDir, 'assets')
      if (!fs.existsSync(assetsDir)) {
        return
      }

      server.watcher.add(path.join(assetsDir, 'gallery-*.webp'))
      server.watcher.on('add', reloadGallery)
      server.watcher.on('unlink', reloadGallery)

      function reloadGallery(file) {
        if (!GALLERY_FILE_PATTERN.test(path.basename(file))) {
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
