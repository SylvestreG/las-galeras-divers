import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import config from '../config.json'
import './Pricing.css'

const Pricing = () => {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const categories = [
    { id: 'all', labelKey: 'pricing.all' },
    { id: 'bapteme', labelKey: 'pricing.baptism' },
    { id: 'certification', labelKey: 'pricing.certifications' },
    { id: 'fun-dive', labelKey: 'pricing.funDives' },
    { id: 'specialty', labelKey: 'pricing.specialties' }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? config.pricing.services 
    : config.pricing.services.filter(s => s.category === selectedCategory)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(price)
  }

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-title">
          <h2>{t('pricing.title')}</h2>
          <p className="section-subtitle">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="pricing-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>

        <div className="pricing-grid">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id} 
              className={`pricing-card ${service.category === 'certification' ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.category === 'certification' && (
                <div className="pricing-badge">{t('pricing.popular')}</div>
              )}
              <div className="pricing-header">
                <h3 className="pricing-title">{service.name}</h3>
                <div className="pricing-price">
                  <span className="price-amount">{formatPrice(service.price)}</span>
                  <span className="price-currency">{config.pricing.currency}</span>
                </div>
              </div>
              <p className="pricing-description">{service.description}</p>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                {t('pricing.reserve')}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-info">
          <div className="info-card">
            <span className="info-icon">💳</span>
            <h4>{t('pricing.info1Title')}</h4>
            <p>{t('pricing.info1Text')}</p>
          </div>
          <div className="info-card">
            <span className="info-icon">👥</span>
            <h4>{t('pricing.info2Title')}</h4>
            <p>{t('pricing.info2Text')}</p>
          </div>
          <div className="info-card">
            <span className="info-icon">📋</span>
            <h4>{t('pricing.info3Title')}</h4>
            <p>{t('pricing.info3Text')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
