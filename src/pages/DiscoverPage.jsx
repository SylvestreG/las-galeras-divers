import React from 'react'
import discoverImages from 'virtual:discover-images'
import { useLanguage } from '../contexts/LanguageContext'
import { getAssetPath } from '../utils/assets'
import { usePageMeta } from '../hooks/usePageMeta'
import { useScrollToHash } from '../hooks/useScrollToHash'
import { pathFor, useRouter } from '../router'
import { canonicalUrl, DISCOVER_SLUG, HOME_SLUG } from '../routes'
import { ACTIVITIES, BEACHES, DISCOVER_HERO } from '../data/discoverSections'
import './DiscoverPage.css'

// Photo dropped in public/assets/discover-<slug>.webp wins, then the fallback, else nothing.
const resolveImage = (slug, fallbackImage) => {
  const src = discoverImages[slug] || fallbackImage
  return src ? getAssetPath(src) : null
}

const toParagraphs = (value) => (Array.isArray(value) ? value : [value])

const DiscoverPage = () => {
  const { t } = useLanguage()
  const { goToSection } = useRouter()

  usePageMeta({
    title: t('seo.discover.title'),
    description: t('seo.discover.description'),
    canonical: canonicalUrl(DISCOVER_SLUG),
  })

  useScrollToHash()

  const heroImage = resolveImage(DISCOVER_HERO.slug, DISCOVER_HERO.fallbackImage)
  const heroStyle = heroImage
    ? {
        backgroundImage: `linear-gradient(135deg, rgba(78, 205, 196, 0.35) 0%, rgba(58, 159, 199, 0.45) 100%), url(${heroImage})`,
      }
    : undefined

  const handleServicesClick = (event) => {
    event.preventDefault()
    goToSection('services')
  }

  return (
    <article className="discover">
      <section className="discover-hero" style={heroStyle}>
        <div className="container discover-hero-content fade-in">
          <span className="discover-eyebrow">{t('discover.eyebrow')}</span>
          <h1>{t('discover.title')}</h1>
          <p className="discover-tagline">
            <span className="section-emoji" aria-hidden="true">🌴</span>
            {t('discover.tagline')}
          </p>
        </div>
      </section>

      <section className="discover-intro">
        <div className="container">
          {toParagraphs(t('discover.intro')).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section id="beaches" className="discover-beaches bg-light">
        <div className="container">
          <div className="section-title">
            <span className="discover-label">{t('discover.beaches.label')}</span>
            <h2>
              <span className="section-emoji" aria-hidden="true">🏝️</span>
              {t('discover.beaches.title')}
            </h2>
            <p className="section-subtitle">{t('discover.beaches.intro')}</p>
          </div>

          <div className="beaches-grid">
            {BEACHES.map((beach, index) => {
              const name = t(`discover.beaches.items.${beach.slug}.name`)
              const image = resolveImage(beach.slug, beach.fallbackImage)
              return (
                <div key={beach.slug} className="beach-card" style={{ animationDelay: `${index * 0.08}s` }}>
                  {image && (
                    <div className="beach-image">
                      <img src={image} alt={name} loading="lazy" />
                    </div>
                  )}
                  <div className="beach-content">
                    <span className="beach-icon" aria-hidden="true">{beach.icon}</span>
                    <h3>{name}</h3>
                    <p>{t(`discover.beaches.items.${beach.slug}.description`)}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="beaches-outro">
            {toParagraphs(t('discover.beaches.outro')).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="activities" className="discover-activities">
        <div className="container">
          <div className="section-title">
            <span className="discover-label">{t('discover.activities.label')}</span>
            <h2>{t('discover.activities.title')}</h2>
            <p className="section-subtitle">{t('discover.activities.subtitle')}</p>
          </div>

          <div className="activities-grid">
            {ACTIVITIES.map((activity, index) => {
              const title = t(`discover.activities.items.${activity.slug}.title`)
              const image = resolveImage(activity.slug, activity.fallbackImage)
              const placeholderClass = index % 2 === 0 ? 'activity-media-ocean' : 'activity-media-sunset'
              return (
                <article
                  key={activity.slug}
                  className="activity-card"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className={`activity-media ${image ? '' : placeholderClass}`}>
                    {image ? (
                      <>
                        <img src={image} alt={title} loading="lazy" />
                        <span className="activity-icon" aria-hidden="true">{activity.icon}</span>
                      </>
                    ) : (
                      <span className="activity-placeholder-icon" aria-hidden="true">{activity.icon}</span>
                    )}
                  </div>
                  <div className="activity-content">
                    <h3>{title}</h3>
                    {toParagraphs(t(`discover.activities.items.${activity.slug}.text`)).map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="discover-closing">
        <div className="container">
          <div className="closing-box">
            <h2>
              <span className="section-emoji" aria-hidden="true">🌞</span>
              {t('discover.closing.title')}
            </h2>
            {toParagraphs(t('discover.closing.text')).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p className="closing-welcome">{t('discover.closing.welcome')}</p>
            <a href={pathFor(HOME_SLUG, 'services')} className="btn btn-large" onClick={handleServicesClick}>
              {t('discover.closing.button')}
            </a>
          </div>
        </div>
      </section>
    </article>
  )
}

export default DiscoverPage
