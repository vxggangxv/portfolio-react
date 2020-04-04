import React from 'react';
import { withRouter } from 'react-router-dom';
import './AppHeader.scss';

const AppHeader = ({ location: { pathname } }) => {
  let pageHeader = '';
  if (pathname === '/') {
    pageHeader = 'Project';
  } else if (pathname === '/about') {
    pageHeader = 'About';
  } else if (pathname === '/activity') {
    pageHeader = 'Activity';
  }
  return (
    <>
      <header className="app-header">
        <h2 className="page-header">{pageHeader}</h2>
      </header>
    </>
  );
};

export default withRouter(AppHeader);
