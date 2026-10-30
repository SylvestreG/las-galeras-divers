import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { HOME_SLUG, SUBPAGE_SLUGS } from './routes'

/**
 * Minimal path-based router (no dependency).
 *
 * Pages are identified by a "slug": '' for the home page, or one of
 * SUBPAGE_SLUGS ("Découvrir Las Galeras", FAQ). Section anchors of the
 * home page (#about, #services, ...) keep working from any page.
 */

const BASE = import.meta.env.BASE_URL // '/' in production, may be '/sub/' elsewhere

const RouterContext = createContext(null)

/** Build an href for a page slug, optionally with a section hash. */
export const pathFor = (slug = HOME_SLUG, hash = '') =>
  `${BASE}${slug ? `${slug}/` : ''}${hash ? `#${hash}` : ''}`

/** Extract the page slug from a pathname (base and trailing slashes removed). */
export const slugFromPathname = (pathname) => {
  let path = pathname
  if (path.startsWith(BASE)) {
    path = path.slice(BASE.length)
  } else if (path.startsWith(BASE.replace(/\/$/, ''))) {
    path = path.slice(BASE.length - 1)
  }
  return path.replace(/^\/+|\/+$/g, '').toLowerCase()
}

export const scrollToElement = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const RouterProvider = ({ children }) => {
  const [slug, setSlug] = useState(() => slugFromPathname(window.location.pathname))

  useEffect(() => {
    const handlePopState = () => setSlug(slugFromPathname(window.location.pathname))
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((targetSlug, hash = '') => {
    const href = pathFor(targetSlug, hash)
    if (`${window.location.pathname}${window.location.hash}` !== href) {
      window.history.pushState(null, '', href)
    }
    setSlug(targetSlug)
    if (!hash) {
      // 'instant' bypasses the global `scroll-behavior: smooth`, which would
      // otherwise animate across the page swap and stop part-way down.
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [])

  const isHome = !SUBPAGE_SLUGS.includes(slug)

  // Scroll to a home page section, navigating back home first if needed.
  const goToSection = useCallback(
    (sectionId) => {
      if (isHome) {
        scrollToElement(sectionId)
      } else {
        navigate(HOME_SLUG, sectionId)
      }
    },
    [isHome, navigate]
  )

  const value = useMemo(
    () => ({ slug, isHome, navigate, goToSection }),
    [slug, isHome, navigate, goToSection]
  )

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export const useRouter = () => {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider')
  }
  return context
}
