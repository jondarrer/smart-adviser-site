import React, { useState } from 'react';

import { Navbar, Footer } from '../';
import HeaderSection from './header-section';
import ContentSection from './content-section';
import FooterSection from './footer-section';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderSection>
        <Navbar open={open} setOpen={setOpen} />
      </HeaderSection>
      <ContentSection>{children}</ContentSection>
      <FooterSection>
        <Footer />
      </FooterSection>
    </>
  );
};

export default Layout;
export { Layout, HeaderSection, ContentSection, FooterSection };
