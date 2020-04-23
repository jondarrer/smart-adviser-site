/** @jsx jsx */
import React from 'react';
import { Box, Text, jsx } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from '../../utils';

const Footer = () => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Box sx={{ display: ['block', null, 'inline-block'] }}>
        {t('company-no', { lng })}
      </Box>
      <Text sx={{ display: ['none', null, 'inline-block'] }} mx={2}>
        |
      </Text>
      <Box sx={{ display: ['block', null, 'inline-block'] }}>
        {t('company-registration', { lng })}
      </Box>
      <Text sx={{ display: ['none', null, null, 'inline-block'] }} mx={2}>
        |
      </Text>
      <Box sx={{ display: ['block', null, 'inline-block'] }}>
        {t('copyright-notice', { lng })}
      </Box>
    </Box>
  );
};

export default Footer;
