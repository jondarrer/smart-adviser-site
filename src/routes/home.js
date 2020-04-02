const React = require('react');
const { useTranslation } = require('react-i18next');

const { LanguageContext } = require('../components');

const Home = () => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <h1>
      {t('Home', { lng })} ({lng})
    </h1>
  );
};

module.exports = Home;
