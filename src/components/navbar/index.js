/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, MenuButton, NavLink, jsx } from 'theme-ui';

import { LanguageContext } from '../../utils';

import SlideOutMenu from './slide-out-menu';

const Navbar = ({ open, setOpen }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <>
      <MenuButton
        aria-label="Toggle Menu"
        sx={{
          display: ['inline-flex', 'none'],
          zIndex: 2,
        }}
        onClick={() => setOpen(!open)}
      />
      <SlideOutMenu open={open} setOpen={setOpen} />
      <NavLink
        as={Link}
        to={t('nav:/', { lng })}
        variant="styles.navlink"
        p={2}
        sx={{
          zIndex: 2,
        }}
        onClick={() => setOpen(false)}
      >
        {t('Smart Adviser', { lng })}
      </NavLink>
      <Box sx={{ mx: 'auto' }} />
      <NavLink
        as={Link}
        to={t('nav:/', { lng })}
        variant="styles.navlink"
        p={2}
        sx={{ display: ['none', 'inline-block'] }}
      >
        {t('Home', { lng })}
      </NavLink>
      <NavLink
        as={Link}
        to={t('nav:/about', { lng })}
        variant="styles.navlink"
        p={2}
        sx={{ display: ['none', 'inline-block'] }}
      >
        {t('About', { lng })}
      </NavLink>
      <NavLink
        as="a"
        href={`tel:${t('phone-number-to-call', { lng })}`}
        variant="styles.navlink"
        p={2}
        sx={{
          zIndex: 2,
        }}
      >
        <Box as="span" sx={{ display: ['inline-block', 'none'] }}>
          Tel
        </Box>
        <Box as="span" sx={{ display: ['none', 'inline-block'] }}>
          {t('phone-number', { lng })}
        </Box>
      </NavLink>
    </>
  );
};

export default Navbar;
