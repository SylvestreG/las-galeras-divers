import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { getAssetPath } from '../utils/assets'
import './About.css'

const About = () => {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>{t('about.title')}</h2>
          <p className="section-subtitle">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={getAssetPath('/assets/about-main.jpg')} alt={t('about.imageAlt')} className="img-cover" />
            <div className="about-badge">
              <img src={getAssetPath('/assets/padi-logo.png')} alt={t('about.padiLogoAlt')} className="padi-logo" />
            </div>
          </div>

          <div className="about-text">
            <div className="about-feature">
              <div className="feature-icon-box">
                <span className="feature-emoji">🏊‍♂️</span>
              </div>
              <div className="feature-content">
                <h3>{t('about.feature1Title')}</h3>
                <p>{t('about.feature1Text')}</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon-box">
                <span className="feature-emoji">🌊</span>
              </div>
              <div className="feature-content">
                <h3>{t('about.feature2Title')}</h3>
                <p>{t('about.feature2Text')}</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon-box">
                <span className="feature-emoji">🐠</span>
              </div>
              <div className="feature-content">
                <h3>{t('about.feature3Title')}</h3>
                <p>{t('about.feature3Text')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">{t('about.stat1')}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">20+</div>
            <div className="stat-label">{t('about.stat2')}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">6</div>
            <div className="stat-label">{t('about.stat3')}</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">{t('about.stat4')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
