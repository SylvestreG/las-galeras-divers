import React, { createContext, useContext, useState, useEffect } from 'react'
import fr from '../locales/fr.json'
import en from '../locales/en.json'
import es from '../locales/es.json'
import de from '../locales/de.json'
import it from '../locales/it.json'

const translations = { fr, en, es, de, it }
const FALLBACK_LANGUAGE = 'fr'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const lookup = (lang, keys) => keys.reduce((value, key) => value?.[key], translations[lang])

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to 'fr'
    const savedLang = localStorage.getItem('language')
    return savedLang || 'fr'
  })

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language)
    // Update HTML lang attribute for SEO
    document.documentElement.lang = language
  }, [language])

  // Returns the translation (string or array) for a dotted key.
  // Falls back to French when a key is missing in the current language,
  // then to the key itself.
  const t = (key) => {
    const keys = key.split('.')
    const value = lookup(language, keys)
    if (value !== undefined && value !== '') {
      return value
    }
    const fallback = lookup(FALLBACK_LANGUAGE, keys)
    return fallback !== undefined && fallback !== '' ? fallback : key
  }

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
