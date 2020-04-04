import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, About } from './routes';

import { LanguageContext, i18n, Navbar, LanguageSwitcher } from './components';

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact>
        <LanguageContext.Provider value="en">
          <LanguageSwitcher languages={['en', 'ro']} />
          <Navbar />
          <Home />
        </LanguageContext.Provider>
      </Route>
      <Route path="/about">
        <LanguageContext.Provider value="en">
          <LanguageSwitcher languages={['en', 'ro']} />
          <Navbar />
          <About />
        </LanguageContext.Provider>
      </Route>
      <Route path="/ro" exact>
        <LanguageContext.Provider value="ro">
          <LanguageSwitcher languages={['en', 'ro']} />
          <Navbar />
          <Home />
        </LanguageContext.Provider>
      </Route>
      <Route path="/ro/despre">
        <LanguageContext.Provider value="ro">
          <LanguageSwitcher languages={['en', 'ro']} />
          <Navbar />
          <About />
        </LanguageContext.Provider>
      </Route>
      <Route>
        <h1>not-found</h1>
      </Route>
    </Switch>
  </div>
);

export default App;
