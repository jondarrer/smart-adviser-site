/** @jsx jsx */
import React from 'react';
import { Box, jsx } from 'theme-ui';

const ContentSection = ({ children }) => (
  <Box as="main" bg="background" px={['3', '4']}>
    {children}
  </Box>
);

export default ContentSection;
