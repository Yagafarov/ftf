import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Tarjima fayllarini import qilish
import enTranslations from './locales/en/translation.json';
import ruTranslations from './locales/ru/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ru: { translation: ruTranslations }
    },
    lng: localStorage.getItem('language') || 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
