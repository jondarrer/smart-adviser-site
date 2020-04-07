import React from 'react';

import { Navbar, LanguageSwitcher } from '../';

const Layout = ({ children }) => (
  <>
    <LanguageSwitcher languages={['en', 'ro']} />
    <Navbar />
    {children}
  </>
);

export default Layout;
