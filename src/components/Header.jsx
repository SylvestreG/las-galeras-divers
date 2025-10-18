import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { getAssetPath } from '../utils/assets'
import LanguageSwitcher from './LanguageSwitcher'
import config from '../config.json'
import './Header.css'

const Header = () => {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        <div className="header-logo" onClick={() => scrollToSection('hero')}>
          <img src={getAssetPath('/assets/logo.png')} alt="Las Galeras Divers Logo" className="logo-img" />
          <div className="logo-text">
            <span className="logo-name">Las Galeras Divers</span>
            <span className="logo-subtitle">Scuba School & Diving Center</span>
          </div>
        </div>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <button onClick={() => scrollToSection('about')} className="nav-link">{t('nav.about')}</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">{t('nav.services')}</button>
          <button onClick={() => scrollToSection('pricing')} className="nav-link">{t('nav.pricing')}</button>
          <button onClick={() => scrollToSection('gallery')} className="nav-link">{t('nav.gallery')}</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link nav-link-cta">{t('nav.contact')}</button>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}

export default Header

