import React, { lazy } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { Theme } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@mui/material";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";

// const Resume = lazy(() => import("../pages/Resume"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {
    logCredits();

    return (
      <Theme>
        <CssBaseline />
        <Router>
          <HelmetMeta />
          <Switch>
              <Route path="/" exact component={Home} />
              {/* <Route path="/resume" component={Resume} /> */}
              <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </Theme>
    );
};
