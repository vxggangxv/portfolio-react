import React from 'react';
import { withRouter } from 'react-router-dom';
import './AppHeader.scss';
import SearchBar from '../../SearchBar';

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
        <SearchBar></SearchBar>
      </header>
    </>
  );
};

export default withRouter(AppHeader);
