import fs from 'fs'
import path from 'path'

/**
 * After the build, writes a copy of dist/index.html for each extra page
 * (dist/<slug>/index.html) with its own <title>, description, Open Graph /
 * Twitter tags and canonical URL, so that crawlers and link previews get the
 * right metadata without executing JavaScript. The React app then takes over
 * in the browser as usual.
 */
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

function replaceTag(html, pattern, value, label) {
  if (!pattern.test(html)) {
    console.warn(`[prerender-routes] ${label} not found in index.html, skipped`)
    return html
  }
  return html.replace(pattern, (match, before, after) => `${before}${value}${after}`)
}

export function applyRouteMeta(html, route) {
  const title = escapeHtml(route.title)
  const description = escapeHtml(route.description)
  const url = escapeHtml(route.url)

  let output = html
  output = replaceTag(output, /(<title>)[\s\S]*?(<\/title>)/, title, '<title>')
  output = replaceTag(output, /(<meta name="description" content=")[^"]*(")/, description, 'meta description')
  output = replaceTag(output, /(<meta property="og:title" content=")[^"]*(")/, title, 'og:title')
  output = replaceTag(output, /(<meta property="og:description" content=")[^"]*(")/, description, 'og:description')
  output = replaceTag(output, /(<meta property="og:url" content=")[^"]*(")/, url, 'og:url')
  output = replaceTag(output, /(<meta property="twitter:title" content=")[^"]*(")/, title, 'twitter:title')
  output = replaceTag(output, /(<meta property="twitter:description" content=")[^"]*(")/, description, 'twitter:description')
  output = replaceTag(output, /(<meta property="twitter:url" content=")[^"]*(")/, url, 'twitter:url')
  output = replaceTag(output, /(<link rel="canonical" href=")[^"]*(")/, url, 'canonical')
  output = output.replace(/(<link rel="alternate" hreflang="[^"]+" href=")[^"]*(")/g, (match, before, after) => `${before}${url}${after}`)

  if (route.image) {
    const image = escapeHtml(route.image)
    output = replaceTag(output, /(<meta property="og:image" content=")[^"]*(")/, image, 'og:image')
    output = replaceTag(output, /(<meta property="twitter:image" content=")[^"]*(")/, image, 'twitter:image')
  }

  return output
}

/**
 * @param {Array<{slug: string, url: string, title: string, description: string, image?: string}>} routes
 */
export function prerenderRoutesPlugin(routes) {
  let outDir

  return {
    name: 'prerender-routes',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const indexPath = path.join(outDir, 'index.html')
      if (!fs.existsSync(indexPath)) {
        return
      }

      const html = fs.readFileSync(indexPath, 'utf8')

      for (const route of routes) {
        const routeDir = path.join(outDir, route.slug)
        fs.mkdirSync(routeDir, { recursive: true })
        const target = path.join(routeDir, 'index.html')
        fs.writeFileSync(target, applyRouteMeta(html, route))
        console.log(`[prerender-routes] ${path.relative(outDir, target)} written`)
      }
    },
  }
}
