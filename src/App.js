import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "./layouts/Main"; // fallback for lazy pages
import {
  selectIsSignedIn,
  selectIsTeacher,
  selectIsStudent,
  selectUID,
  selectClassList,
} from "./app/account/selectors";
import { useDispatch, useSelector } from "react-redux";
import { auth, userDataDb } from "./data/firebase";
import { signIn } from "./app/account/actions";
import { selectCurrentClass } from "./app/class/selectors";
import { setCurrentClass } from "./app/class/actions";

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const SignIn = lazy(() => import("./pages/LogIn/SignIn"));
const SignUp = lazy(() => import("./pages/LogIn/SignUp"));
const Index = lazy(() => import("./pages/Index"));
const Profile = lazy(() => import("./pages/Profile"));
const TeacherRoutes = lazy(() => import("./routes/TeacherRoutes"));
const StudentRoutes = lazy(() => import("./routes/StudentRoutes"));

const App = () => {
  const dispatch = useDispatch();
  const loginState = useSelector(selectIsSignedIn);
  const uid = useSelector(selectUID);
  const isTeacher = useSelector(selectIsTeacher);
  const isStudent = useSelector(selectIsStudent);
  const currentClass = useSelector(selectCurrentClass);
  const classList = useSelector(selectClassList);

  useEffect(() => {
    if (loginState) {
      userDataDb
        .doc(uid)
        .get()
        .then((data) => dispatch(signIn(data.data())));
    }
    if (loginState && !currentClass) {
      if (classList[0]) {
        dispatch(setCurrentClass(classList[0]))
      }
    }
  });

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Main />}>
        <Switch>
          <Route exact path="/home" component={Index} />
          {!loginState && <Route path="/signin" component={SignIn} />}
          {!loginState && <Route path="/signup" component={SignUp} />}
          {loginState && <Route path="/profile" component={Profile} />}
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
