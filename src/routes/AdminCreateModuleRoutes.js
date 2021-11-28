import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const CreateModule = lazy(() => import("../pages/Admin/Module/CreateModule"));
const EditTextStep = lazy(() => import("../pages/Admin/Module/Steps/EditText"));
const EditVideoStep = lazy(() =>
  import("../pages/Admin/Module/Steps/EditVideo")
);
const EditQuizStep = lazy(() => import("../pages/Admin/Module/Steps/EditQuiz"));
const EditEbookStep = lazy(() =>
  import("../pages/Admin/Module/Steps/EditEbook")
);

const AdminCreateModuleRoutes = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/edit-text`} component={EditTextStep} />
    <Route path={`${match.path}/edit-video`} component={EditVideoStep} />
    <Route path={`${match.path}/edit-quiz`} component={EditQuizStep} />
    <Route path={`${match.path}/edit-ebook`} component={EditEbookStep} />
    <Route path={`${match.path}`} component={CreateModule} />
    <Redirect to={`${match.path}`} />
  </Switch>
);

export default AdminCreateModuleRoutes;
