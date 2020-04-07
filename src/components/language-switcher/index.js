import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from '../../utils';

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

export default LanguageSwitcher;
