import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const ModulesHomepage = lazy(() => import('../pages/Teacher/ModulesHomepage'));

const TeacherRoutes = ({ match }) => (
    <Switch>
        <Route path={`${match.path}/home`} component={ModulesHomepage}/>
    </Switch>
)

export default TeacherRoutes;