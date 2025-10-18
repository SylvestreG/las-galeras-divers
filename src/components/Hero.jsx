import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import config from '../config.json'
import './Hero.css'

const Hero = () => {
  const { t } = useLanguage()
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToPricing = () => {
    const element = document.getElementById('pricing')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-text fade-in">
            <h1 className="hero-title">
              {t('hero.title')} <span className="text-gradient">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="hero-subtitle">
              {t('hero.subtitle')}
            </p>
            <div className="hero-buttons">
              <button onClick={scrollToContact} className="btn btn-primary btn-large">
                {t('hero.cta1')}
              </button>
              <button onClick={scrollToPricing} className="btn btn-outline btn-large">
                {t('hero.cta2')}
              </button>
            </div>
            <div className="hero-features">
              <div className="hero-feature">
                <span className="feature-icon">✓</span>
                <span>{t('hero.feature1')}</span>
              </div>
              <div className="hero-feature">
                <span className="feature-icon">✓</span>
                <span>{t('hero.feature2')}</span>
              </div>
              <div className="hero-feature">
                <span className="feature-icon">✓</span>
                <span>{t('hero.feature3')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero

