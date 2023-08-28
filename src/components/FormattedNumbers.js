import React from 'react';
import { useTranslation } from 'react-i18next';

const FormattedNumbers = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const number = 1000000000;

  const formattedNumber1 = new Intl.NumberFormat(currentLanguage).format(number);
  const formattedNumber2 = new Intl.NumberFormat(currentLanguage, { style: 'currency', currency: 'USD' }).format(number);
  const formattedNumber3 = new Intl.NumberFormat(currentLanguage, { minimumFractionDigits: 2 }).format(number);
  const formattedNumber4 = new Intl.NumberFormat(currentLanguage, { maximumFractionDigits: 0 }).format(number);

  return (
    <div>
      <p>{t('formatted_number_1')}: {formattedNumber1}</p>
      <p>{t('formatted_number_2')}: {formattedNumber2}</p>
      <p>{t('formatted_number_3')}: {formattedNumber3}</p>
      <p>{t('formatted_number_4')}: {formattedNumber4}</p>
    </div>
  );
};

export default FormattedNumbers;
