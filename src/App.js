import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';
import DateTime from './components/DateTime';
import FormattedNumbers from './components/FormattedNumbers';
import UnitsOfMeasurement from './components/UnitsOfMeasurement';


function App() {
  const { t } = useTranslation();

  return (
    <div className='app-container'>
      <LanguageSelector />
      <h1>{t('welcome')}</h1>
      <p>{t('message')}</p>
      <DateTime />
      <FormattedNumbers />
      <UnitsOfMeasurement />
    </div>
  );
}

export default App;
