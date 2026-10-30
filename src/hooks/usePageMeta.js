import { useEffect } from 'react'

/**
 * Keep <title>, the meta description and the canonical link in sync with the
 * current page and language. Each page declares its own meta, so nothing has
 * to be restored when a page unmounts.
 */
export const usePageMeta = ({ title, description, canonical }) => {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag && description) {
      descriptionTag.setAttribute('content', description)
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]')
    if (canonicalTag && canonical) {
      canonicalTag.setAttribute('href', canonical)
    }
  }, [title, description, canonical])
}
