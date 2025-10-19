import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { getAssetPath } from '../utils/assets'
import './Services.css'

const Services = () => {
  const { t } = useLanguage()

  const services = [
    {
      id: 1,
      titleKey: 'services.baptism.title',
      subtitleKey: 'services.baptism.subtitle',
      descriptionKey: 'services.baptism.description',
      icon: "🤿",
      image: getAssetPath("/assets/bapteme.jpg"),
      teamNames: "Cédric & Cathy",
      featuresKeys: [
        'services.baptism.feature1',
        'services.baptism.feature2',
        'services.baptism.feature3'
      ]
    },
    {
      id: 2,
      titleKey: 'services.training.title',
      subtitleKey: 'services.training.subtitle',
      descriptionKey: 'services.training.description',
      icon: "📚",
      image: getAssetPath("/assets/formation.jpg"),
      featuresKeys: [
        'services.training.feature1',
        'services.training.feature2',
        'services.training.feature3'
      ]
    },
    {
      id: 3,
      titleKey: 'services.funDive.title',
      subtitleKey: 'services.funDive.subtitle',
      descriptionKey: 'services.funDive.description',
      icon: "🌊",
      image: getAssetPath("/assets/fundive.jpg"),
      featuresKeys: [
        'services.funDive.feature1',
        'services.funDive.feature2',
        'services.funDive.feature3'
      ]
    },
    {
      id: 4,
      titleKey: 'services.nightDive.title',
      subtitleKey: 'services.nightDive.subtitle',
      descriptionKey: 'services.nightDive.description',
      icon: "🌙",
      image: getAssetPath("/assets/night-dive.jpg"),
      featuresKeys: [
        'services.nightDive.feature1',
        'services.nightDive.feature2',
        'services.nightDive.feature3'
      ]
    }
  ]

  return (
    <section id="services" className="services bg-light">
      <div className="container">
        <div className="section-title">
          <h2>{t('services.title')}</h2>
          <p className="section-subtitle">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-image">
                <img src={service.image} alt={t(service.titleKey)} className="img-cover" />
                <div className="service-icon">{service.icon}</div>
                {service.teamNames && (
                  <div className="service-team-names">
                    <p>{service.teamNames}</p>
                  </div>
                )}
              </div>
              <div className="service-content">
                <div className="service-header">
                  <h3>{t(service.titleKey)}</h3>
                  <span className="service-subtitle">{t(service.subtitleKey)}</span>
                </div>
                <p className="service-description">{t(service.descriptionKey)}</p>
                <ul className="service-features">
                  {service.featuresKeys.map((featureKey, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {t(featureKey)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-box">
            <h3>{t('services.ctaTitle')}</h3>
            <p>{t('services.ctaText')}</p>
            <button 
              className="btn btn-primary btn-large"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              {t('services.ctaButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
