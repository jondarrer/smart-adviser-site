/** @jsx jsx */
import React from 'react';
import { Flex, jsx } from 'theme-ui';

const FooterSection = ({ children }) => (
  <Flex
    as="footer"
    sx={{
      justifyContent: 'center',
    }}
    bg="muted"
    px={['2', '4']}
  >
    {children}
  </Flex>
);

export default FooterSection;
