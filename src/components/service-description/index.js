/** @jsx jsx */
import React from 'react';
import { Box, Heading, jsx } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from '../../utils';

const ServiceDescription = ({ title, subServices, sx, ...rest }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        maxWidth: '1100px',
        ...sx,
      }}
      {...rest}
    >
      <Heading as="h2">{t(title, { lng })}</Heading>
      <Box as="ul">
        {subServices.map((subService, index) => (
          <Box as="li" key={index}>
            {t(subService, { lng })}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServiceDescription;
