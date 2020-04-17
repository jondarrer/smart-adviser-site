/** @jsx jsx */
import React from 'react';
import { Flex, jsx } from 'theme-ui';

const HeaderSection = ({ children }) => (
  <Flex
    as="header"
    sx={{
      position: ['fixed', 'relative'],
      alignItems: 'center',
      variant: 'styles.header',
      width: '100%',
    }}
    bg="gray"
    px={['3', '4']}
  >
    {children}
  </Flex>
);

export default HeaderSection;
