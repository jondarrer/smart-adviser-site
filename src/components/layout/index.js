import React from 'react';

import { Navbar, LanguageSwitcher, Footer } from '../';
import HeaderSection from './header-section';
import ContentSection from './content-section';
import FooterSection from './footer-section';

const Layout = ({ children }) => (
  <>
    <HeaderSection>
      <Navbar />
      <LanguageSwitcher languages={['en', 'ro']} />
    </HeaderSection>
    <ContentSection>{children}</ContentSection>
    <FooterSection>
      <Footer />
    </FooterSection>
  </>
);

export default Layout;
export { Layout, HeaderSection, ContentSection, FooterSection };
