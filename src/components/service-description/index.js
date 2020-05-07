/** @jsx jsx */
import React from 'react';
import { Box, Heading, jsx } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from '../../utils';

const ServiceDescription = ({ title, Icon, subServices, sxp, ...rest }) => {
  const lng = React.useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
        borderRadius: 'service',
        ...sxp,
      }}
      {...rest}
    >
      <Heading
        as="h2"
        px={2}
        py={2}
        bg="primary"
        color="background"
        sx={{ borderTopLeftRadius: 'service', borderTopRightRadius: 'service' }}
      >
        <Icon
          width="24px"
          height="24px"
          fill="currentcolor"
          sx={{ ml: 1, mr: 2 }}
        />
        {t(title, { lng })}
      </Heading>
      <Box
        as="ul"
        variant="styles.ul"
        px={2}
        py={1}
        bg="muted"
        sx={{
          borderBottomLeftRadius: 'service',
          borderBottomRightRadius: 'service',
        }}
      >
        {subServices.map(({ text, Icon }, index) => (
          <Box as="li" key={index} variant="styles.li">
            <Icon
              width="16px"
              height="16px"
              fill="currentcolor"
              sx={{ marginRight: 2 }}
            />
            {t(text, { lng }).replace(/ -( de la)? £\d+/gi, '')}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServiceDescription;
