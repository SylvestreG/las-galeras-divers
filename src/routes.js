/**
 * Route definitions shared between the app (src/router.jsx) and the Vite
 * build config (vite-plugins/prerender-routes.js).
 *
 * Keep this file free of browser-only or Vite-only APIs so that Node can
 * import it at build time.
 */
export const SITE_URL = 'https://www.las-galeras-divers.com'

export const HOME_SLUG = ''
export const DISCOVER_SLUG = 'que-faire-a-las-galeras'
export const FAQ_SLUG = 'faq-plongee-las-galeras'

/** Pages other than the home page (each one has a dedicated component). */
export const SUBPAGE_SLUGS = [DISCOVER_SLUG, FAQ_SLUG]

/** Absolute canonical URL of a page (always with a trailing slash). */
export const canonicalUrl = (slug = HOME_SLUG) => `${SITE_URL}/${slug ? `${slug}/` : ''}`
