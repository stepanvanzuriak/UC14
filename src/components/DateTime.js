import React from 'react';
import { useTranslation } from 'react-i18next';

const DateTime = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const date = new Date();

  const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString(currentLanguage, optionsDate);

  const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const formattedTime = date.toLocaleTimeString(currentLanguage, optionsTime);

  const optionsDateShort = { year: '2-digit', month: '2-digit', day: '2-digit' };
  const formattedDateShort = date.toLocaleDateString(currentLanguage, optionsDateShort);

  const optionsTimeShort = { hour: '2-digit', minute: '2-digit' };
  const formattedTimeShort = date.toLocaleTimeString(currentLanguage, optionsTimeShort);

  return (
    <div>
      <p>{t('current_date')}: {formattedDate}</p>
      <p>{t('current_time')}: {formattedTime}</p>
      <p>{t('current_date_short')}: {formattedDateShort}</p>
      <p>{t('current_time_short')}: {formattedTimeShort}</p>
    </div>
  );
};

export default DateTime;
