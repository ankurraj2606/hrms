import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardLayout from "./components/dashboardLayout/DashboardLayout.js";

const Controller = () => {
  return (
    <Router>
      <DashboardLayout>
        this is dashboard layout
        <Switch>
          <Route />
        </Switch>
      </DashboardLayout>
    </Router>
  );
};

export default Controller;
