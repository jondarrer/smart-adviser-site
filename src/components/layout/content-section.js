/** @jsx jsx */
import React from 'react';
import { Box, jsx } from 'theme-ui';

const ContentSection = ({ children }) => (
  <Box as="main" bg="muted" pt={['44px', '44px', 0]}>
    <Box bg="background">{children}</Box>
  </Box>
);

export default ContentSection;
