import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Team = lazy(() => import('./pages/Team'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Journal = lazy(() => import('./pages/Journal'));
const Deliverables = lazy(() => import('./pages/Deliverables'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/home" component={Index} />
        <Route path="/team" component={Team} />
        <Route path="/journal" component={Journal} />
        <Route path="/deliverables" component={Deliverables} />
        <Route component={NotFound} status={404} />
      </Switch>
      <Route exact path="/">
          <Redirect to="/home" />
      </Route>
    </Suspense>
  </BrowserRouter>
);

export default App;
