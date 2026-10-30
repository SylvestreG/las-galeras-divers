import { useEffect } from 'react'
import { scrollToElement } from '../router'

/**
 * Scroll to the section named in the URL hash once the page has rendered
 * (direct link such as /#contact, or /que-faire-a-las-galeras/#activities,
 * and navigation back to a home section from another page).
 */
export const useScrollToHash = () => {
  useEffect(() => {
    const sectionId = window.location.hash.slice(1)
    if (!sectionId) return undefined
    const frame = requestAnimationFrame(() => scrollToElement(sectionId))
    return () => cancelAnimationFrame(frame)
  }, [])
}
