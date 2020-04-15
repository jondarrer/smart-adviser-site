/** @jsx jsx */
import React from 'react';
import { Box, jsx } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from '../../utils';

const ServiceDescription = ({ title, subServices }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        maxWidth: '1100px',
      }}
    >
      <h2>{t(title, { lng })}</h2>
      <ul>
        {subServices.map((subService) => (
          <li>{t(subService, { lng })}</li>
        ))}
      </ul>
    </Box>
  );
};

export default ServiceDescription;
