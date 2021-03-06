/** @jsx jsx */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Flex, IconButton, Image, jsx } from 'theme-ui';

import { LanguageContext } from '../../utils';

const LanguageSwitcher = ({ languages, sxp }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  return (
    <Flex sx={{ ...sxp }}>
      {languages.map((language, index) => {
        return language === lng ? (
          <Box as="span" key={index} />
        ) : (
          <IconButton
            as={Link}
            key={index}
            to={t(`nav:${location.pathname}`, { lng: language })}
            mx={1}
            my="6px"
          >
            <Image
              src={`/images/${language}.png`}
              alt={`${language.toUpperCase()} flag`}
            />
          </IconButton>
        );
      })}
    </Flex>
  );
};

export default LanguageSwitcher;
