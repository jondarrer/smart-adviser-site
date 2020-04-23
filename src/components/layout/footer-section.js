/** @jsx jsx */
import React from 'react';
import { Container, Flex, jsx } from 'theme-ui';

const FooterSection = ({ children }) => (
  <Flex
    as="footer"
    sx={{
      justifyContent: 'center',
    }}
    bg="muted"
  >
    <Container sx={{ display: 'flex' }} p={['3', '3', '4']}>
      {children}
    </Container>
  </Flex>
);

export default FooterSection;
