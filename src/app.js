const React = require('react');
const { Link, Route, Switch } = require('react-router-dom');

const { Home, About } = require('./routes');

const {
  LanguageContext,
  i18n,
  Navbar,
  LanguageSwitcher,
} = require('./components');

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

module.exports = App;
