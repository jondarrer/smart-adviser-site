/** @jsx jsx */
import React from 'react';
import { Box, jsx } from 'theme-ui';

const ContentSection = ({ children }) => (
  <Box as="main" bg="background" px={['3', '3', '4']} pt={['44px', '44px', 0]}>
    {children}
  </Box>
);

export default ContentSection;
