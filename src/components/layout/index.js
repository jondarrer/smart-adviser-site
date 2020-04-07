import React from 'react';

import { Navbar, LanguageSwitcher } from '../';
import HeaderSection from './header-section';
import ContentSection from './content-section';
import FooterSection from './footer-section';

const Layout = ({ children }) => (
  <>
    <HeaderSection>
      <LanguageSwitcher languages={['en', 'ro']} />
      <Navbar />
    </HeaderSection>
    <ContentSection>{children}</ContentSection>
    <FooterSection></FooterSection>
  </>
);

export default Layout;
export { Layout, HeaderSection, ContentSection, FooterSection };
