/** @jsx jsx */
import React from 'react';
import { Flex, jsx } from 'theme-ui';

const ContentSection = ({ children }) => (
  <Flex
    as="main"
    sx={{
      justifyContent: 'center',
    }}
    bg="background"
    px={['2', '4']}
  >
    {children}
  </Flex>
);

export default ContentSection;
