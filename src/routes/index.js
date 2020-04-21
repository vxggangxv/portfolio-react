import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { lazy } from '@loadable/component';
import Spinner from '../components/common/Spinner';
// import loadable, { lazy } from '@loadable/component';
// import MainPage from './pages/MainPage';
// import AboutPage from './pages/AboutPage';

// const ProjectPage = loadable(() => import('../pages/ProjectPage'));
// const AboutPage = loadable(() => import('../pages/AboutPage'));
// const ActivityPage = loadable(() => import('../pages/ActivityPage'));
// const PlanPage = loadable(() => import('../pages/PlanPage'));
const ProjectPage = lazy(() => import('../pages/ProjectPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ActivityPage = lazy(() => import('../pages/ActivityPage'));
const PlanPage = lazy(() => import('../pages/PlanPage'));

export default () => (
  <>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Redirect path="/" exact to="/project" />
        <Route path="/project" exact component={ProjectPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/activity" component={ActivityPage} />
        <Route path="/plan" component={PlanPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Suspense>
  </>
);
