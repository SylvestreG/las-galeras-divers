/**
 * Structure of the "Découvrir Las Galeras" page (src/pages/DiscoverPage.jsx).
 *
 * - Texts live in src/locales/<lang>.json under the `discover` key, using the
 *   slugs below (discover.beaches.items.<slug>, discover.activities.items.<slug>).
 * - Photos are optional: drop a `discover-<slug>.webp` file in public/assets/
 *   (e.g. discover-playa-rincon.webp, discover-whales.webp, discover-hero.webp)
 *   and it is picked up automatically at the next build / dev reload
 *   (see vite-plugins/discover-images.js). Until then, `fallbackImage` (if any)
 *   or a coloured placeholder with the icon is displayed.
 */
export const DISCOVER_HERO = { slug: 'hero', fallbackImage: '/assets/gallery-5.webp' }

export const BEACHES = [
  { slug: 'playa-rincon', icon: '🏖️' },
  { slug: 'playa-fronton', icon: '⛰️' },
  { slug: 'playa-madama', icon: '🌿' },
  { slug: 'playa-colorada', icon: '🌅' },
  { slug: 'la-playita', icon: '🐚' },
]

export const ACTIVITIES = [
  { slug: 'hiking', icon: '🥾' },
  { slug: 'climbing', icon: '🧗' },
  { slug: 'el-limon', icon: '💦', fallbackImage: '/assets/gallery-8.webp' },
  { slug: 'horse-riding', icon: '🐎' },
  { slug: 'quad-buggy', icon: '🛞' },
  { slug: 'whales', icon: '🐋' },
  { slug: 'boat-trips', icon: '🚤' },
  { slug: 'fishing', icon: '🎣' },
  { slug: 'ziplines', icon: '🌳' },
  { slug: 'samana-cayo-levantado', icon: '🌴' },
  { slug: 'santo-domingo', icon: '🏛️' },
  { slug: 'gastronomy', icon: '🍍' },
]
