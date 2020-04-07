/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from '../../utils';

const Footer = () => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <p
      sx={{
        maxWidth: '1100px',
        textAlign: 'center',
      }}
    >
      {t('copyright-notice', { lng })}
    </p>
  );
};

export default Footer;
