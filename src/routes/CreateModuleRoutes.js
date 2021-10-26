import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const CreateModule = lazy(() => import("../pages/Teacher/Module/CreateModule"));
const EditTextStep = lazy(() =>
  import("../pages/Teacher/Module/Steps/EditText")
);
const EditVideoStep = lazy(() =>
  import("../pages/Teacher/Module/Steps/EditVideo")
);
const EditQuizStep = lazy(() =>
  import("../pages/Teacher/Module/Steps/EditQuiz")
);

const CreateModuleRoutes = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/edit-text`} component={EditTextStep} />
    <Route path={`${match.path}/edit-video`} component={EditVideoStep} />
    <Route path={`${match.path}/edit-quiz`} component={EditQuizStep} />
    <Route path={`${match.path}`} component={CreateModule} />
    <Redirect to={`${match.path}`} />
  </Switch>
);

export default CreateModuleRoutes;
