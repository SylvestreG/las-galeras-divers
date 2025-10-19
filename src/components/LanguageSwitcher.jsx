import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { language, changeLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' }
  ]

  const currentLang = languages.find(lang => lang.code === language)

  const handleLanguageChange = (code) => {
    changeLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className="language-switcher">
      <button 
        className="lang-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('accessibility.changeLanguage')}
      >
        <span className="lang-flag">{currentLang.flag}</span>
        <span className="lang-code">{currentLang.code.toUpperCase()}</span>
        <span className={`lang-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="lang-dropdown">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`lang-option ${language === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="lang-flag">{lang.flag}</span>
              <span className="lang-name">{lang.name}</span>
              {language === lang.code && <span className="check-mark">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher

