import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app';

hydrate(
  document.getElementById('root'),
  <Router>
    <App />
  </Router>
);
