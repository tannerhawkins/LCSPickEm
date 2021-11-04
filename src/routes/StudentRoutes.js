import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { selectIsInModule } from "../app/module/selectors";

const ModulesHomepage = lazy(() => import("../pages/Student/ModulesHomepage"));
const Module = lazy(() => import("../pages/Student/Module/Module"));
const AddClass = lazy(() => import("../pages/Student/AddClass"));

const StudentRoutes = ({ match }) => {
  const inModule = useSelector(selectIsInModule);

  return (
    <Switch>
      <Route path={`${match.path}/module`} component={Module} />
      {inModule && <Redirect to={`${match.path}/module`} />}
      <Route path={`${match.path}/add-class`} component={AddClass} />
      <Route path={`${match.path}/home`} component={ModulesHomepage} />
      <Redirect to={`${match.path}/home`} />
    </Switch>
  );
};

export default StudentRoutes;
