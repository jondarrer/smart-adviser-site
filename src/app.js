const React = require('react');
const { Link, Route, Switch } = require('react-router-dom');

const { Home, About } = require('./routes');

const { LanguageContext, i18n, Navbar } = require('./components');

const App = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">EN</Link>
        </li>
        <li>
          <Link to="/ro">RO</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" exact>
        <LanguageContext.Provider value="en">
          <Navbar />
          <Home />
        </LanguageContext.Provider>
      </Route>
      <Route path="/about">
        <LanguageContext.Provider value="en">
          <Navbar />
          <About />
        </LanguageContext.Provider>
      </Route>
      <Route path="/ro" exact>
        <LanguageContext.Provider value="ro">
          <Navbar />
          <Home />
        </LanguageContext.Provider>
      </Route>
      <Route path="/ro/despre">
        <LanguageContext.Provider value="ro">
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
