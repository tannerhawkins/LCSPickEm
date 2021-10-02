import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const ModulesHomepage = lazy(() => import("../pages/Teacher/ModulesHomepage"));
const CreateAClass = lazy(() => import("../pages/Teacher/CreateClass"));

const TeacherRoutes = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/home`} component={ModulesHomepage} />
    <Route path={`${match.path}/create-class`} component={CreateAClass} />
    <Redirect to={`${match.path}/home`} />
  </Switch>
);

export default TeacherRoutes;
