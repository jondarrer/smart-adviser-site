import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Image } from 'theme-ui';

import { LanguageContext } from '../../utils';

// import enFlag from '../../images/en.png';
// import roFlag from '../../images/ro.png';

// const flags = { enFlag, roFlag };

const LanguageSwitcher = ({ languages }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  return (
    <ul>
      {languages.map((language, index) => {
        const comp =
          language === lng ? (
            <span>
              {language.toUpperCase()}
              <Image src={`/images/${language}.png`} width="24px" />
            </span>
          ) : (
            <Link to={t(location.pathname, { lng: language })}>
              {language.toUpperCase()}
              <Image src={`/images/${language}.png`} width="24px" />
            </Link>
          );
        return <li key={index}>{comp}</li>;
      })}
    </ul>
  );
};

export default LanguageSwitcher;
