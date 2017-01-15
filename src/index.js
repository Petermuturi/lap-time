import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './App';
import Main from './main/Main';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
    </Route>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('watch')
);
