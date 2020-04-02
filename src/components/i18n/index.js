const i18n = require('i18next/dist/cjs/i18next');
const { initReactI18next } = require('react-i18next');

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          Home: 'Home',
          About: 'About',
        },
      },
      ro: {
        translation: {
          Home: 'Casa',
          About: 'Despre',
        },
      },
    },
  });

module.exports = i18n;
