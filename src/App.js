import React from 'react';
import Router from './Router';
import AppHeader from './components/common/AppHeader';
import AppFooter from './components/common/AppFooter';
import './App.css';

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
