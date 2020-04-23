/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, IconButton, MenuButton, NavLink, jsx } from 'theme-ui';

import { LanguageContext, useSmoothScroll } from '../../utils';

import { LanguageSwitcher } from '../';

import SlideOutMenu from './slide-out-menu';

const Navbar = ({ open, setOpen }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();
  const smoothScroll = useSmoothScroll({ '0': 44, '640': 0 });

  return (
    <>
      <MenuButton
        aria-label="Toggle Menu"
        sx={{
          color: open ? 'primary' : 'background',
          display: ['inline-flex', 'inline-flex', 'none'],
          marginTop: '6px',
          zIndex: 2,
        }}
        onClick={() => setOpen(!open)}
      />
      <SlideOutMenu
        open={open}
        setOpen={setOpen}
        sxp={{ color: open ? 'primary' : 'background' }}
      />
      <NavLink
        as={Link}
        to={t('nav:/', { lng })}
        p={2}
        variant={open ? 'navmenuopen' : 'nav'}
        sx={{
          zIndex: 2,
        }}
        onClick={() => setOpen(false)}
      >
        {t('business-name', { lng })}
      </NavLink>
      <Box sx={{ mx: 'auto' }} />
      <NavLink
        as={Link}
        to={t('nav:/', { lng })}
        p={2}
        sx={{ display: ['none', 'none', 'inline-block'] }}
      >
        {t('Home', { lng })}
      </NavLink>
      <NavLink
        as={Link}
        to={t('nav:/about', { lng })}
        p={2}
        sx={{ display: ['none', 'none', 'inline-block'] }}
      >
        {t('About', { lng })}
      </NavLink>
      <NavLink
        as="a"
        href="#contact-form"
        variant="navatc"
        p={2}
        sx={{
          display: ['none', 'inline-block'],
          zIndex: 2,
        }}
        onClick={(e) => smoothScroll(e)}
      >
        <Box
          as="span"
          sx={{
            display: ['none', 'inline-block', 'none'],
          }}
        >
          {t('Msg', { lng })}
        </Box>
        <Box
          as="span"
          sx={{
            display: ['none', 'none', 'inline-block'],
          }}
        >
          {t('Contact', { lng })}
        </Box>
      </NavLink>
      <NavLink
        as="a"
        href={`tel:${t('phone-number-to-call', { lng })}`}
        variant="navcta"
        p={2}
        sx={{
          zIndex: 2,
        }}
      >
        <Box
          as="span"
          sx={{
            display: ['inline-block', 'inline-block', 'none'],
          }}
        >
          {t('tel', { lng })}
        </Box>
        <Box
          as="span"
          sx={{
            display: ['none', 'none', 'inline-block'],
          }}
        >
          {t('phone-number', { lng })}
        </Box>
      </NavLink>
      <LanguageSwitcher languages={['en', 'ro']} sxp={{ zIndex: 2 }} />
    </>
  );
};

export default Navbar;
