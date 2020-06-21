import * as React from "react";

import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

// pages
import Dashboard from "./pages/Dashboard";

import Home from "./pages/Home";
import Panel from "./pages/Panel";

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
        <DashboardLayout exact path="/" component={Home} />
        <DashboardLayout path="/Panel" component={Panel} />
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </Router>
  );
}
