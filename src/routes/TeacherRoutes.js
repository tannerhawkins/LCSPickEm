import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const ModulesHomepage = lazy(() => import("../pages/Teacher/ModulesHomepage"));

const TeacherRoutes = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/home`} component={ModulesHomepage} />
    <Redirect to={`${match.path}/home`} />
  </Switch>
);

export default TeacherRoutes;
