import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
// import MainPage from './pages/MainPage';
// import AboutPage from './pages/AboutPage';

const MainPage = loadable(() => import('./pages/MainPage'));
const AboutPage = loadable(() => import('./pages/AboutPage'));

export default () => (
  <>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/about" component={AboutPage} />
      <Redirect from="*" to="/" />
      {/* <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} /> */}
    </Switch>
  </>
);
