import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        races: 'Races',
        information: 'Information',
        media: 'Media',
        about: 'About',
        results: 'Results',
        login: 'Login',
        register: 'Register',
      },
      home: {
        slogan: 'Challenge Your Limits, Conquer the Course',
        registerNow: 'Register Now',
        tracks: {
          long: 'Long Track',
          short: 'Short Track',
          obstacle: 'Obstacle Course',
          kids: 'Kids\' Track',
        },
      },
    },
  },
  tr: {
    translation: {
      nav: {
        home: 'Ana Sayfa',
        races: 'Yarışlar',
        information: 'Bilgi',
        media: 'Medya',
        about: 'Hakkında',
        results: 'Sonuçlar',
        login: 'Giriş',
        register: 'Kayıt',
      },
      home: {
        slogan: 'Limitlerini Zorla, Parkuru Fethet',
        registerNow: 'Hemen Kayıt Ol',
        tracks: {
          long: 'Uzun Parkur',
          short: 'Kısa Parkur',
          obstacle: 'Engelli Parkur',
          kids: 'Çocuk Parkuru',
        },
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 