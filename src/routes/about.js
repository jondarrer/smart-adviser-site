const React = require('react');
const { useTranslation } = require('react-i18next');

const { LanguageContext } = require('../components');

const About = () => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <h1>
      {t('About', { lng })} ({lng})
    </h1>
  );
};

module.exports = About;
