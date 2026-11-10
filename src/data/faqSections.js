/**
 * Structure of the FAQ page (src/pages/FaqPage.jsx).
 *
 * - Texts live in src/locales/<lang>.json under the `faq` key:
 *   faq.sections.<slug>.title and faq.sections.<slug>.items[] ({ q, a }).
 *   Each answer `a` is a list of blocks: a string (paragraph),
 *   { "list": [...] } (bullet list) or { "table": { "headers": [...], "rows": [[...]] } }.
 * - The section slugs below are also the anchors of the page
 *   (/faq-plongee-las-galeras/#safety) and the prefix of each question anchor
 *   (#safety-q9 = 9th question of the "safety" section).
 */
export const FAQ_HERO_IMAGE = '/assets/faq-hero.webp'

export const FAQ_SECTIONS = [
  { slug: 'discover', icon: '🤿' },
  { slug: 'courses', icon: '🎓' },
  { slug: 'certified', icon: '🐠' },
  { slug: 'sites', icon: '🗺️' },
  { slug: 'marine-life', icon: '🐢' },
  { slug: 'weather', icon: '🌤️' },
  { slug: 'safety', icon: '🛟' },
  { slug: 'trips', icon: '🚤' },
  { slug: 'booking', icon: '📅' },
  { slug: 'why-us', icon: '💙' },
]
