import React, { createContext, useContext, useState, useEffect } from 'react'
import fr from '../locales/fr.json'
import en from '../locales/en.json'
import es from '../locales/es.json'

const translations = { fr, en, es }

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

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

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
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

