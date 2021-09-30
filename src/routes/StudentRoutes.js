import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const ModulesHomepage = lazy(() => import('../pages/Student/ModulesHomepage'));

const StudentRoutes = ({ match }) => (
    <Switch>
        <Route path={`${match.path}/home`} component={ModulesHomepage}/>
        <Redirect to={`${match.path}/home`} />
    </Switch>
)

export default StudentRoutes;