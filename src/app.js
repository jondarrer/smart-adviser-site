import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';

import { Home, About, Attributions } from './routes';
import { Layout } from './components';
import { LanguageContext, i18n } from './utils';
import theme from './theme';

const locales = ['ro', 'en-gb'];

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route path="/" exact>
        <LanguageContext.Provider value="ro">
          <Layout>
            <Home locales={locales} formEndpoint={FORM_ENDPOINT} />
          </Layout>
        </LanguageContext.Provider>
      </Route>
      <Route path="/despre">
        <LanguageContext.Provider value="ro">
          <Layout>
            <About locales={locales} />
          </Layout>
        </LanguageContext.Provider>
      </Route>
      <Route path="/en" exact>
        <LanguageContext.Provider value="en">
          <Layout>
            <Home locales={locales} formEndpoint={FORM_ENDPOINT} />
          </Layout>
        </LanguageContext.Provider>
      </Route>
      <Route path="/en/about">
        <LanguageContext.Provider value="en">
          <Layout>
            <About locales={locales} />
          </Layout>
        </LanguageContext.Provider>
      </Route>
      <Route path="/en/attributions">
        <LanguageContext.Provider value="en">
          <Layout>
            <Attributions locales={locales} />
          </Layout>
        </LanguageContext.Provider>
      </Route>
      <Route path="/ro" exact>
        <Redirect to="/" />
      </Route>
      <Route path="/ro/despre">
        <Redirect to="/despre" />
      </Route>
      <Route>
        <Layout>
          <h1>not-found :(</h1>
        </Layout>
      </Route>
    </Switch>
  </ThemeProvider>
);

export default App;
