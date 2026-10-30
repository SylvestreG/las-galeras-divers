/**
 * schema.org "FAQPage" structured data for the FAQ page, built from the
 * French locale (src/locales/fr.json → `faq`) and injected into the
 * pre-rendered dist/<faq slug>/index.html by vite-plugins/prerender-routes.js.
 *
 * Answers are flattened to plain text: paragraphs are joined, list items are
 * joined, and each table row becomes "<header>: <cell>, ...".
 */
const blockToText = (block) => {
  if (typeof block === 'string') {
    return block
  }
  if (Array.isArray(block.list)) {
    return block.list.join(' ')
  }
  if (block.table) {
    const { headers, rows } = block.table
    return rows
      .map((row) => `${row.map((cell, index) => `${headers[index]} : ${cell}`).join(', ')}.`)
      .join(' ')
  }
  return ''
}

export const answerToText = (answer) =>
  (Array.isArray(answer) ? answer : [answer]).map(blockToText).filter(Boolean).join(' ')

export function buildFaqJsonLd(faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Object.values(faq.sections).flatMap((section) =>
      section.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answerToText(item.a),
        },
      }))
    ),
  }
}
