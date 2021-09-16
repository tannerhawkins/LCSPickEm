import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect, matchPath } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth}  from './data/firebase';

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const SignIn = lazy(() => import('./pages/LogIn/SignIn'));
const SignUp = lazy(() => import('./pages/LogIn/SignUp'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Journal = lazy(() => import('./pages/Journal'));
const Deliverables = lazy(() => import('./pages/Deliverables'));

const App = () => {
  const loginState = useAuthState(auth)[0];
  return (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/home" component={Index} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        {loginState && <Route path="/journal" component={Journal} />}
        {loginState && <Route path="/deliverables" component={Deliverables} />}
        <Redirect to="/home" />
      </Switch>
      <Route exact path="/">
          <Redirect to="/home" />
      </Route>
    </Suspense>
  </BrowserRouter>
  )
};

export default App;
