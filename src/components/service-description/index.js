/** @jsx jsx */
import React from 'react';
import { Box, Heading, jsx } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from '../../utils';

const ServiceDescription = ({ title, Icon, subServices, sx, ...rest }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <Box sx={{ ...sx }} {...rest}>
      <Heading as="h2" px={2} py={1} bg="accent" color="background">
        <Icon
          width="24px"
          height="24px"
          fill="currentcolor"
          sx={{ marginRight: 2 }}
        />
        {t(title, { lng })}
      </Heading>
      <Box as="ul" variant="styles.ul" px={2} py={1} bg="muted">
        {subServices.map(({ text, Icon }, index) => (
          <Box as="li" key={index} variant="styles.li">
            <Icon
              width="16px"
              height="16px"
              fill="currentcolor"
              sx={{ marginRight: 2 }}
            />
            {t(text, { lng })}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServiceDescription;
