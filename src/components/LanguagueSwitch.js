import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitch.css';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="language-switch">
      <button 
        onClick={toggleLanguage}
        className="language-button"
        aria-label="Change language"
      >
        <span className="flag-icon">
          {i18n.language === 'pt' ? '🇺🇸' : '🇧🇷'}
        </span>
        <span className="language-text">
          {i18n.language === 'pt' ? 'EN' : 'PT'}
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitch;

// https://react.i18next.com/
// Ela permite que você crie uma aplicação em vários idiomas, sem precisar duplicar componentes.
// npm install i18next react-i18next