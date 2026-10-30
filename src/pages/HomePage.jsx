import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import { useLanguage } from '../contexts/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { useScrollToHash } from '../hooks/useScrollToHash'
import { canonicalUrl, HOME_SLUG } from '../routes'

const HomePage = () => {
  const { t } = useLanguage()

  usePageMeta({
    title: t('seo.home.title'),
    description: t('seo.home.description'),
    canonical: canonicalUrl(HOME_SLUG),
  })

  useScrollToHash()

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  )
}

export default HomePage
