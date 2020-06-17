import * as React from 'react';

import { Router } from 'react-router'
import { Switch, Route } from 'react-router-dom'

// utils
import history from './utils/history'

// pages
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';

export default function Routes () {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
  );
}
