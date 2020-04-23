/** @jsx jsx */
import React from 'react';
import { Container, Flex, jsx } from 'theme-ui';

const HeaderSection = ({ children }) => (
  <Flex
    as="header"
    sx={{
      position: ['fixed', null, 'relative'],
      alignItems: 'center',
      variant: 'styles.header',
      width: '100%',
    }}
    bg="gray"
  >
    <Container sx={{ display: 'flex' }} px={['3', '3', '4']}>
      {children}
    </Container>
  </Flex>
);

export default HeaderSection;
