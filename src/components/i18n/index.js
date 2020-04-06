import i18n from 'i18next/dist/cjs/i18next';
import { initReactI18next } from 'react-i18next';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          Home: 'Home',
          About: 'About',
          '/': '/',
          '/about': '/about',
          '/ro': '/',
          '/ro/despre': '/about',
          'meta-description-home':
            'Smart Adviser is an Accountancy firm in Milton Keynes working with businesses of all sizes. With many years experience in finance you can rely on us to help your business thrive.',
          'meta-description-about':
            'Smart Adviser is an Accountancy firm in Milton Keynes working with businesses of all sizes. We offer a variety of cost effective services to self-employed, limited companies and others.',
        },
      },
      ro: {
        translation: {
          Home: 'Casa',
          About: 'Despre',
          '/': '/ro',
          '/about': '/ro/despre',
          '/ro': '/ro',
          '/ro/despre': '/ro/despre',
          'meta-description-home':
            'Smart Adviser este o firmă de contabilitate din Milton Keynes, Marea Britanie care lucrează cu companii de toate dimensiunile. Cu mulți ani de experiență în finanțe, vă puteți baza pe noi pentru a vă ajuta afacerea să prospere.',
          'meta-description-about':
            'Smart Adviser este o firmă de contabilitate din Milton Keynes, Marea Britanie care lucrează cu companii de toate dimensiunile. Oferim o varietate de servicii eficiente din punct de vedere al costurilor pentru angajați independenți, companii cu capital limitat și altele.',
        },
      },
    },
  });

export default i18n;
