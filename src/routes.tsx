import * as React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// pages
import Dashboard from "./pages/Dashboard";

import Home from "./pages/Home";
import Users from "./pages/Users";

interface PropsLayout {
  component: any;
  path: string;
  exact?: boolean;
}

const DashboardLayout: React.FC<PropsLayout> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Dashboard>
          <Component {...matchProps} />
        </Dashboard>
      )}
    />
  );
};

export default function Routes() {
  return (
    <Router>
      <Switch>
        <DashboardLayout path="/users" component={Users} />
        <DashboardLayout exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
