import i18n from './i18n';

test('i18n should initialize with default language', () => {
  expect(i18n.language).toBe('en');
});

test('i18n should change language', () => {
  i18n.changeLanguage('fr');
  expect(i18n.language).toBe('fr');
  
  i18n.changeLanguage('ua');
  expect(i18n.language).toBe('ua');
});
