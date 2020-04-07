import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';

import { Home, About } from './routes';
import { Navbar, LanguageSwitcher } from './components';
import { LanguageContext, i18n } from './utils';
import theme from './theme';

const locales = ['ro', 'en-gb'];

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route path="/" exact>
        <LanguageContext.Provider value="en">
          <LanguageSwitcher languages={['en', 'ro']} />
          <Navbar />
          <Home locales={locales} />
        </LanguageContext.Provider>
      </Route>
      <Route path="/about">
        <LanguageContext.Provider value="en">
          <LanguageSwitcher languages={['en', 'ro']} />
          <Navbar />
          <About locales={locales} />
        </LanguageContext.Provider>
      </Route>
      <Route path="/ro" exact>
        <LanguageContext.Provider value="ro">
          <LanguageSwitcher languages={['en', 'ro']} />
          <Navbar />
          <Home locales={locales} />
        </LanguageContext.Provider>
      </Route>
      <Route path="/ro/despre">
        <LanguageContext.Provider value="ro">
          <LanguageSwitcher languages={['en', 'ro']} />
          <Navbar />
          <About locales={locales} />
        </LanguageContext.Provider>
      </Route>
      <Route>
        <h1>not-found</h1>
      </Route>
    </Switch>
  </ThemeProvider>
);

export default App;
