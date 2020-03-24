import React from 'react';
import Router from './routes';
import AppHeader from './components/common/AppHeader';
import AppFooter from './components/common/AppFooter';
import './App.scss';

function App() {
  return (
    <div className="app">
      <AppHeader></AppHeader>
      <div className="app-contents">
        <Router></Router>
      </div>
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
