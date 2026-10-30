import React, { useCallback, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { getAssetPath } from '../utils/assets'
import { usePageMeta } from '../hooks/usePageMeta'
import { useScrollToHash } from '../hooks/useScrollToHash'
import { pathFor, useRouter } from '../router'
import { canonicalUrl, FAQ_SLUG, HOME_SLUG } from '../routes'
import { FAQ_HERO_IMAGE, FAQ_SECTIONS } from '../data/faqSections'
import './FaqPage.css'

const TOPICS_ID = 'faq-topics'

/** Anchor of a question: <section slug>-q<1-based index>, e.g. #safety-q9. */
const questionId = (sectionSlug, index) => `${sectionSlug}-q${index + 1}`

const toParagraphs = (value) => (Array.isArray(value) ? value : [value])

const AnswerBlock = ({ block }) => {
  if (typeof block === 'string') {
    return <p>{block}</p>
  }

  if (Array.isArray(block.list)) {
    return (
      <ul>
        {block.list.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    )
  }

  if (block.table) {
    const { headers, rows } = block.table
    return (
      <div className="faq-table-wrap">
        <table className="faq-table">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) =>
                  cellIndex === 0 ? (
                    <th key={cellIndex} scope="row">{cell}</th>
                  ) : (
                    <td key={cellIndex}>{cell}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return null
}

const FaqItem = ({ id, question, answer, isOpen, onToggle }) => (
  <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`} id={id}>
    <h3 className="faq-question">
      <button
        type="button"
        className="faq-question-button"
        aria-expanded={isOpen}
        aria-controls={`${id}-answer`}
        onClick={() => onToggle(id)}
      >
        <span className="faq-question-text">{question}</span>
        <span className="faq-chevron" aria-hidden="true" />
      </button>
    </h3>
    <div id={`${id}-answer`} className="faq-answer" aria-hidden={!isOpen}>
      <div className="faq-answer-inner">
        <div className="faq-answer-body">
          {toParagraphs(answer).map((block, index) => (
            <AnswerBlock key={index} block={block} />
          ))}
        </div>
      </div>
    </div>
  </div>
)

const FaqPage = () => {
  const { t } = useLanguage()
  const { goToSection } = useRouter()

  usePageMeta({
    title: t('seo.faq.title'),
    description: t('seo.faq.description'),
    canonical: canonicalUrl(FAQ_SLUG),
  })

  useScrollToHash()

  // A direct link to a question (/faq-plongee-las-galeras/#safety-q9) opens it.
  const [openItems, setOpenItems] = useState(() => {
    const hash = window.location.hash.slice(1)
    return /-q\d+$/.test(hash) ? new Set([hash]) : new Set()
  })

  const toggleItem = useCallback((id) => {
    setOpenItems((previous) => {
      const next = new Set(previous)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }, [])

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault()
    goToSection(sectionId)
  }

  const heroStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(78, 205, 196, 0.35) 0%, rgba(58, 159, 199, 0.45) 100%), url(${getAssetPath(FAQ_HERO_IMAGE)})`,
  }

  const sections = FAQ_SECTIONS.map((section) => {
    const items = t(`faq.sections.${section.slug}.items`)
    return {
      ...section,
      title: t(`faq.sections.${section.slug}.title`),
      items: Array.isArray(items) ? items : [],
    }
  })

  return (
    <article className="faq">
      <section className="faq-hero" style={heroStyle}>
        <div className="container faq-hero-content fade-in">
          <span className="faq-eyebrow">{t('faq.eyebrow')}</span>
          <h1>{t('faq.title')}</h1>
          <p className="faq-subtitle">{t('faq.subtitle')}</p>
        </div>
      </section>

      <section className="faq-intro">
        <div className="container">
          {toParagraphs(t('faq.intro')).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="faq-topics-section" id={TOPICS_ID}>
        <div className="container">
          <h2 className="faq-topics-title">{t('faq.topicsTitle')}</h2>
          <nav className="faq-topics" aria-label={t('faq.topicsTitle')}>
            {sections.map((section) => (
              <a key={section.slug} href={`#${section.slug}`} className="faq-topic">
                <span className="faq-topic-icon" aria-hidden="true">{section.icon}</span>
                <span className="faq-topic-title">{section.title}</span>
                <span className="faq-topic-count">
                  {section.items.length} {t('faq.questionsLabel')}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="faq-sections">
        {sections.map((section, sectionIndex) => (
          <section key={section.slug} id={section.slug} className="faq-section">
            <div className="container">
              <div className="faq-section-header">
                <span className="faq-section-icon" aria-hidden="true">{section.icon}</span>
                <div>
                  <span className="faq-section-number">{String(sectionIndex + 1).padStart(2, '0')}</span>
                  <h2>{section.title}</h2>
                </div>
              </div>

              <div className="faq-list">
                {section.items.map((item, index) => {
                  const id = questionId(section.slug, index)
                  return (
                    <FaqItem
                      key={id}
                      id={id}
                      question={item.q}
                      answer={item.a}
                      isOpen={openItems.has(id)}
                      onToggle={toggleItem}
                    />
                  )
                })}
              </div>

              <a href={`#${TOPICS_ID}`} className="faq-back-link">
                <span aria-hidden="true">↑ </span>
                {t('faq.backToTopics')}
              </a>
            </div>
          </section>
        ))}
      </div>

      <section className="faq-closing">
        <div className="container">
          <div className="faq-closing-box">
            <h2>{t('faq.closing.title')}</h2>
            <p>{t('faq.closing.text')}</p>
            <p className="faq-closing-welcome">{t('faq.closing.welcome')}</p>
            <div className="faq-closing-actions">
              <a
                href={pathFor(HOME_SLUG, 'contact')}
                className="btn btn-large"
                onClick={(event) => handleSectionClick(event, 'contact')}
              >
                {t('faq.closing.contact')}
              </a>
              <a
                href={pathFor(HOME_SLUG, 'pricing')}
                className="btn btn-large faq-closing-secondary"
                onClick={(event) => handleSectionClick(event, 'pricing')}
              >
                {t('faq.closing.pricing')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

export default FaqPage
