import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Testimonials.css'

const Testimonials = () => {
  const { t } = useLanguage()
  const testimonials = [
    {
      id: 1,
      name: "Marie & Thomas",
      location: "France",
      rating: 5,
      text: "Une expérience inoubliable ! L'équipe de Las Galeras Divers est incroyablement professionnelle et chaleureuse. Nous avons pu observer des tortues, des raies et une multitude de poissons colorés. Les sites de plongée sont magnifiques et bien préservés.",
      avatar: "👫"
    },
    {
      id: 2,
      name: "Sophie Laurent",
      location: "Belgique",
      rating: 5,
      text: "J'ai fait mon baptême de plongée avec eux et c'était parfait ! Les instructeurs sont très pédagogues et rassurants. Je me suis sentie en sécurité du début à la fin. Je recommande vivement pour une première expérience sous-marine !",
      avatar: "👩"
    },
    {
      id: 3,
      name: "Jean-Pierre Dubois",
      location: "Canada",
      rating: 5,
      text: "En tant que plongeur expérimenté, j'ai été impressionné par la qualité des sites et le professionnalisme de l'équipe. Le spot de Piedra Bonita est tout simplement extraordinaire ! Des groupes de petite taille qui permettent une vraie exploration.",
      avatar: "👨"
    },
    {
      id: 4,
      name: "Famille Moreau",
      location: "Suisse",
      rating: 5,
      text: "Nos enfants de 10 et 12 ans ont adoré leur baptême de plongée ! L'équipe a été très attentive et patient avec eux. C'est devenu le moment fort de nos vacances à Las Galeras. Merci pour ces souvenirs mémorables !",
      avatar: "👨‍👩‍👧‍👦"
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
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-location">{testimonial.location}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
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

