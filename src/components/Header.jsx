import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { getAssetPath } from '../utils/assets'
import { pathFor, useRouter } from '../router'
import { DISCOVER_SLUG, FAQ_SLUG, HOME_SLUG } from '../routes'
import LanguageSwitcher from './LanguageSwitcher'
import './Header.css'

const SECTION_LINKS = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'services', labelKey: 'nav.services' },
  { id: 'pricing', labelKey: 'nav.pricing' },
  { id: 'gallery', labelKey: 'nav.gallery' },
]

// Dedicated pages, shown after the home sections.
const PAGE_LINKS = [
  { slug: DISCOVER_SLUG, labelKey: 'nav.discover' },
  { slug: FAQ_SLUG, labelKey: 'nav.faq' },
]

const Header = () => {
  const { t } = useLanguage()
  const { slug, isHome, navigate, goToSection } = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault()
    goToSection(sectionId)
    closeMobileMenu()
  }

  const handleLogoClick = (event) => {
    event.preventDefault()
    if (isHome) {
      goToSection('hero')
    } else {
      navigate(HOME_SLUG)
    }
    closeMobileMenu()
  }

  const handlePageClick = (event, pageSlug) => {
    event.preventDefault()
    navigate(pageSlug)
    closeMobileMenu()
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <a href={pathFor(HOME_SLUG)} className="header-logo" onClick={handleLogoClick}>
          <img src={getAssetPath('/assets/logo.png')} alt={t('common.logoAlt')} className="logo-img" />
          <div className="logo-text">
            <span className="logo-name">Las Galeras Divers</span>
            <span className="logo-subtitle">Scuba School & Diving Center</span>
          </div>
        </a>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={t('accessibility.toggleMenu')}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {SECTION_LINKS.map(({ id, labelKey }) => (
            <a
              key={id}
              href={pathFor(HOME_SLUG, id)}
              className="nav-link"
              onClick={(event) => handleSectionClick(event, id)}
            >
              {t(labelKey)}
            </a>
          ))}
          {PAGE_LINKS.map(({ slug: pageSlug, labelKey }) => {
            const isActive = slug === pageSlug
            return (
              <a
                key={pageSlug}
                href={pathFor(pageSlug)}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(event) => handlePageClick(event, pageSlug)}
              >
                {t(labelKey)}
              </a>
            )
          })}
          <a
            href={pathFor(HOME_SLUG, 'contact')}
            className="nav-link nav-link-cta"
            onClick={(event) => handleSectionClick(event, 'contact')}
          >
            {t('nav.contact')}
          </a>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}

export default Header
