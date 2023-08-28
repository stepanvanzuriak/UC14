import React from 'react';
import { useTranslation } from 'react-i18next';

const UnitsOfMeasurement = () => {
  const { t } = useTranslation();

  const inches = 10;
  const pounds = 20;
  const liters = 30;

  const centimeters = inches * 2.54;
  const kilograms = pounds * 0.453592;
  const ounces = liters * 33.814;

  return (
    <div>
      <p>{t('inches')}: {inches} {t('inches_symbol')} = {centimeters.toFixed(2)} {t('centimeters_symbol')}</p>
      <p>{t('pounds')}: {pounds} {t('pounds_symbol')} = {kilograms.toFixed(2)} {t('kilograms_symbol')}</p>
      <p>{t('liters')}: {liters} {t('liters_symbol')} = {ounces.toFixed(2)} {t('ounces_symbol')}</p>
    </div>
  );
};

export default UnitsOfMeasurement;
