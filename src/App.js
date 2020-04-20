import React from 'react';
import Router from 'routes';
import AppHeader from 'components/common/AppHeader';
import AppSidebar from 'components/common/AppSidebar';
// import AppFooter from 'components/common/AppFooter';
import './App.scss';
// import { Counter } from './store/counter/Counter';

function App() {
  return (
    <div className="app">
      <h1 className="app-name hide">JunCoder의 리액트로 만든 포트폴리오</h1>
      <AppHeader></AppHeader>
      <AppSidebar></AppSidebar>
      <main className="app-contents" id="main">
        <Router></Router>
      </main>
      {/* <AppFooter></AppFooter> */}
      {/* <Counter></Counter> */}
    </div>
  );
}

export default App;
