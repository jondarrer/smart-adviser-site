const React = require('react');
const { Link, useLocation } = require('react-router-dom');
const { useTranslation } = require('react-i18next');

const LanguageContext = require('../../components/language-context');

const LanguageSwitcher = ({ languages }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  return (
    <ul>
      {languages.map((language, index) => {
        const comp =
          language === lng ? (
            <span>{language.toUpperCase()}</span>
          ) : (
            <Link to={t(location.pathname, { lng: language })}>
              {language.toUpperCase()}
            </Link>
          );
        return <li key={index}>{comp}</li>;
      })}
    </ul>
  );
};

module.exports = LanguageSwitcher;
