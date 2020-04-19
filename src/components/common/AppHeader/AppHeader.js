import React from 'react';
import { withRouter } from 'react-router-dom';
import './AppHeader.scss';
import SearchBar from '../../SearchBar';

const AppHeader = ({ location: { pathname } }) => {
  let pageHeader = '';
  if (pathname === '/project') {
    pageHeader = 'Project';
  } else if (pathname === '/about') {
    pageHeader = 'About';
  } else if (pathname === '/activity') {
    pageHeader = 'Activity';
  }
  return (
    <>
      <header className="app-header">
        <div className="lg-wd lg-pd app-header-area">
          <h2 className="page-header">{pageHeader}</h2>
          {pathname === '/project' && <SearchBar></SearchBar>}
        </div>
      </header>
    </>
  );
};

export default withRouter(AppHeader);
