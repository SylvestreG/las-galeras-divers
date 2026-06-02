import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import config from '../config.json'
import './Testimonials.css'

const Testimonials = () => {
  const { t } = useLanguage()
  const { googleReviews } = config.socialMedia
  const testimonials = [
    {
      id: 1,
      rating: 5,
      avatar: "👫"
    },
    {
      id: 2,
      rating: 5,
      avatar: "👩"
    },
    {
      id: 3,
      rating: 5,
      avatar: "👨"
    },
    {
      id: 4,
      rating: 5,
      avatar: "👨‍👩‍👧‍👦"
    },
    {
      id: 5,
      rating: 5,
      avatar: "💑"
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>{t('testimonials.title')}</h2>
          <p className="section-subtitle">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{t(`testimonials.items.${testimonial.id}.name`)}</h4>
                  <p className="testimonial-location">{t(`testimonials.items.${testimonial.id}.location`)}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{t(`testimonials.items.${testimonial.id}.text`)}"</p>
            </div>
          ))}
        </div>

        <div className="testimonials-google">
          <a
            href={googleReviews}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('accessibility.googleReviews')}
          >
            ⭐ {t('testimonials.googleReviews')}
          </a>
        </div>

        <div className="testimonials-cta">
          <h3>{t('testimonials.ctaTitle')}</h3>
          <p>{t('testimonials.ctaText')}</p>
          <button 
            className="btn btn-primary btn-large"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            {t('testimonials.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

