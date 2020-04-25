/** @jsx jsx */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Flex, NavLink, jsx } from 'theme-ui';

import { LanguageContext } from '../../utils';

import MenuLink from './menu-link';

const SlideOutMenu = ({ open, setOpen, sxp }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <Flex
      sx={{
        display: ['flex', 'flex', 'none'],
        flexDirection: 'column',
        bg: 'background',
        height: '100vh',
        px: 3,
        pt: 5,
        pb: 3,
        position: 'absolute',
        top: 0,
        left: 0,
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
        width: ['100%', '100%', 0],
        ...sxp,
      }}
    >
      <MenuLink
        to={t('nav:/', { lng })}
        variant="styles.navlink"
        p={2}
        onClick={() => setOpen(!open)}
      >
        {t('Home', { lng })}
      </MenuLink>
      <MenuLink
        to={t('nav:/about', { lng })}
        variant="styles.navlink"
        p={2}
        onClick={() => setOpen(!open)}
      >
        {t('About', { lng })}
      </MenuLink>
    </Flex>
  );
};

export default SlideOutMenu;
