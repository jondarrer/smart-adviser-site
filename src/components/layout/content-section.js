/** @jsx jsx */
import React from 'react';
import { Container, Box, jsx } from 'theme-ui';

const ContentSection = ({ children }) => (
  <Box as="main" bg="muted" pt={['44px', '44px', 0]}>
    <Container bg="background">{children}</Container>
  </Box>
);

export default ContentSection;
