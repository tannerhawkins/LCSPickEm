import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "./layouts/Main"; // fallback for lazy pages
import {
  selectIsSignedIn,
  selectUID,
} from "./app/account/selectors";
import { useDispatch, useSelector } from "react-redux";
import { auth, userDataDb } from "./data/firebase";
import { signIn } from "./app/account/actions";

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const SignIn = lazy(() => import("./pages/LogIn/SignIn"));
const SignUp = lazy(() => import("./pages/LogIn/SignUp"));
const Index = lazy(() => import("./pages/Index"));
const Standings = lazy(() => import("./pages/Standings"));
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  const dispatch = useDispatch();
  const loginState = useSelector(selectIsSignedIn);
  const uid = useSelector(selectUID);

  useEffect(() => {
    if (loginState) {
      userDataDb
        .doc(uid)
        .get()
        .then((data) => dispatch(signIn(data.data())));
    }
  }, []);

  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Main />}>
        <Switch>
          <Route exact path="/index" component={Index} />
          {!loginState && <Route path="/signin" component={SignIn} />}
          {!loginState && <Route path="/signup" component={SignUp} />}
          {loginState && <Route path="/home" component={Home} />}
          {loginState && <Route path="/standings" component={Standings} />}
          {loginState && <Redirect to="/home" />}
          <Redirect to="/index" />
        </Switch>
        <Route exact path="/">
          <Redirect to="/index" />
        </Route>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
