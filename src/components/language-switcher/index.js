import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Flex, IconButton, Image } from 'theme-ui';

import { LanguageContext } from '../../utils';

const LanguageSwitcher = ({ languages }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  return (
    <Flex>
      {languages.map((language, index) => {
        return language === lng ? (
          <Box as="span" key={index} />
        ) : (
          <IconButton key={index} m={1}>
            <Link to={t(`nav:${location.pathname}`, { lng: language })}>
              <Image src={`/images/${language}.png`} width="24px" />
            </Link>
          </IconButton>
        );
      })}
    </Flex>
  );
};

export default LanguageSwitcher;
