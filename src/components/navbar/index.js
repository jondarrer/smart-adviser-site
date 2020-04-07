import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from '../../utils';

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

export default Navbar;
