const React = require('react');
const { Link, Route, Switch } = require('react-router-dom');

const App = (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" exact>
        <h1>index-content</h1>
      </Route>
      <Route path="/about">
        <h1>about-content</h1>
      </Route>
      <Route>
        <h1>not-found</h1>
      </Route>
    </Switch>
  </div>
);

module.exports = App;
