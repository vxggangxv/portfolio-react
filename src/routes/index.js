import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
// import MainPage from './pages/MainPage';
// import AboutPage from './pages/AboutPage';

const ProjectPage = loadable(() => import('../pages/ProjectPage'));
const AboutPage = loadable(() => import('../pages/AboutPage'));
const ActivityPage = loadable(() => import('../pages/ActivityPage'));

export default () => (
  <>
    <Switch>
      <Route path="/" exact component={ProjectPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/activity" component={ActivityPage} />
      <Redirect from="*" to="/" />
    </Switch>
  </>
);
