/** @jsx jsx */
import React from 'react';
import { Flex, jsx } from 'theme-ui';

const HeaderSection = ({ children }) => (
  <Flex
    as="header"
    sx={{
      justifyContent: 'center',
    }}
    bg="primary"
    px={['2', '4']}
  >
    {children}
  </Flex>
);

export default HeaderSection;
