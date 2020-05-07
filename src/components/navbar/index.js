/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, IconButton, MenuButton, NavLink, jsx } from 'theme-ui';

import { LanguageContext, useSmoothScroll } from '../../utils';

import { LanguageSwitcher } from '../';
import PhoneCallIcon from '../../icons/142095/phone-call.svg';
import SpeechBubbleIcon from '../../icons/142095/speech-bubble.svg';

import SlideOutMenu from './slide-out-menu';
import MenuLink from './menu-link';

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
          transitionDuration: '0.2s',
          transitionProperty: 'color',
          fontSize: ['15px', 2],
          lineHeight: '28px',
        }}
        onClick={() => setOpen(false)}
      >
        {t('business-name', { lng })}
      </NavLink>
      <Box sx={{ mx: 'auto' }} />
      <MenuLink
        to={t('nav:/', { lng })}
        p={2}
        sxp={{ display: ['none', 'none', 'inline-block'] }}
      >
        {t('Home', { lng })}
      </MenuLink>
      <MenuLink
        to={t('nav:/despre', { lng })}
        p={2}
        sxp={{ display: ['none', 'none', 'inline-block'] }}
      >
        {t('About', { lng })}
      </MenuLink>
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
        <SpeechBubbleIcon
          width="24px"
          height="24px"
          fill="currentcolor"
          sx={{
            display: ['none', 'block', 'none'],
          }}
        />
        <Box
          as="span"
          sx={{
            display: ['none', 'none', 'block'],
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
          borderLeftWidth: [0, '1px'],
          borderLeftStyle: 'solid',
          borderLeftColor: [open ? 'transparent' : 'primary'],
        }}
      >
        <PhoneCallIcon
          width="24px"
          height="24px"
          fill="currentcolor"
          sx={{
            display: ['block', 'block', 'none'],
          }}
        />
        <Box
          as="span"
          sx={{
            display: ['none', 'none', 'block'],
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
