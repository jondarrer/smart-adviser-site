const React = require('react');
const { Link } = require('react-router-dom');
const { useTranslation } = require('react-i18next');

const LanguageContext = require('../../components/language-context');

const Navbar = () => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <nav>
      <ul>
        <li>
          <Link to={t('/', { lng })}>{t('Home', { lng })}</Link>
        </li>
        <li>
          <Link to={t('/about', { lng })}>{t('About', { lng })}</Link>
        </li>
      </ul>
    </nav>
  );
};

module.exports = Navbar;
