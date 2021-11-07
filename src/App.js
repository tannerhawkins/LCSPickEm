import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "./layouts/Main"; // fallback for lazy pages
import {
  selectIsSignedIn,
  selectIsTeacher,
  selectIsStudent,
} from "./app/account/selectors";
import { useSelector } from "react-redux";

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const SignIn = lazy(() => import("./pages/LogIn/SignIn"));
const SignUp = lazy(() => import("./pages/LogIn/SignUp"));
const Index = lazy(() => import("./pages/Index"));
const TeacherRoutes = lazy(() => import("./routes/TeacherRoutes"));
const StudentRoutes = lazy(() => import("./routes/StudentRoutes"));

const App = () => {
  const loginState = useSelector(selectIsSignedIn);
  const isTeacher = useSelector(selectIsTeacher);
  const isStudent = useSelector(selectIsStudent);

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Main />}>
        <Switch>
          <Route exact path="/home" component={Index} />
          {!loginState && <Route path="/signin" component={SignIn} />}
          {!loginState && <Route path="/signup" component={SignUp} />}
          {isTeacher && <Route path="/teacher" component={TeacherRoutes} />}
          {isStudent && <Route path="/student" component={StudentRoutes} />}
          {isTeacher && <Redirect to="/teacher" />}
          {isTeacher && <Redirect to="/student" />}
          <Redirect to="/home" />
        </Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
