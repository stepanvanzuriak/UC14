import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select className='language-selector' onChange={changeLanguage} defaultValue={i18n.language}>
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="ua">Українська</option>
    </select>
  );
};

export default LanguageSelector;
