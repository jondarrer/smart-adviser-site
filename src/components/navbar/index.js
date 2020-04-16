import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Flex, NavLink } from 'theme-ui';

import { LanguageContext } from '../../utils';

const Navbar = () => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <Flex as="nav">
      <NavLink as={Link} to={t('nav:/', { lng })} p={2}>
        {t('Home', { lng })}
      </NavLink>
      <NavLink as={Link} to={t('nav:/about', { lng })} p={2}>
        {t('About', { lng })}
      </NavLink>
    </Flex>
  );
};

export default Navbar;
