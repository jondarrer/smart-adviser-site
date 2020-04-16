import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, NavLink } from 'theme-ui';

import { LanguageContext } from '../../utils';

const Navbar = () => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <>
      <NavLink
        as={Link}
        to={t('nav:/', { lng })}
        variant="styles.navlink"
        p={2}
      >
        {t('Smart Adviser', { lng })}
      </NavLink>
      <Box sx={{ mx: 'auto' }} />
      <NavLink
        as={Link}
        to={t('nav:/', { lng })}
        variant="styles.navlink"
        p={2}
      >
        {t('Home', { lng })}
      </NavLink>
      <NavLink
        as={Link}
        to={t('nav:/about', { lng })}
        variant="styles.navlink"
        p={2}
      >
        {t('About', { lng })}
      </NavLink>
    </>
  );
};

export default Navbar;
