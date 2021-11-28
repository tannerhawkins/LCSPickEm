import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const ModulesHomepage = lazy(() => import("../pages/Admin/ModulesHomepage"));
const CreateModuleRoutes = lazy(() => import("./AdminCreateModuleRoutes"));

const AdminRoutes = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/home`} component={ModulesHomepage} />
    <Route
      path={`${match.path}/create-module`}
      component={CreateModuleRoutes}
    />
    <Redirect to={`${match.path}/home`} />
  </Switch>
);

export default AdminRoutes;
