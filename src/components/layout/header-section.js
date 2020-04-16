/** @jsx jsx */
import React from 'react';
import { Flex, jsx } from 'theme-ui';

const HeaderSection = ({ children }) => (
  <Flex
    as="header"
    sx={{
      alignItems: 'center',
      variant: 'styles.header',
    }}
    bg="gray"
    px={['3', '4']}
  >
    {children}
  </Flex>
);

export default HeaderSection;
