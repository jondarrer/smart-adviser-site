/** @jsx jsx */
import React from 'react';
import { Box, jsx } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from '../../utils';

const ServiceDescription = ({ title, subServices, ...rest }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        maxWidth: '1100px',
      }}
      {...rest}
    >
      <h2>{t(title, { lng })}</h2>
      <ul>
        {subServices.map((subService, index) => (
          <li key={index}>{t(subService, { lng })}</li>
        ))}
      </ul>
    </Box>
  );
};

export default ServiceDescription;
