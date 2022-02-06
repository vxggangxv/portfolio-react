import React from 'react';
import { withRouter } from 'react-router-dom';
import './AppHeader.scss';
import SearchBar from '../../SearchBar';
// import { findDOMNode } from 'react-dom';
// import $ from 'jquery';

const AppHeader = ({ location: { pathname } }) => {
  let pageHeader = '';
  const capitalize = (s) => {
    if (typeof s !== 'string') return;
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  pageHeader = capitalize(pathname.slice(1));
  const isProject = pathname === '/project';

  // handleToggle = () => {
  //   const el = findDOMNode(this.refs.toggle);
  //   $(el).slideToggle();
  // };
  let funcRef = React.createRef();

  return (
    <>
      <header className="app-header">
        <div className="lg-wd lg-pd app-header-area" ref={funcRef}>
          <h2 className="page-header">
            {pageHeader}{' '}
            {/* {isProject && (
              <span className="current-badge">
                <i className="mdi mdi-source-repository" /> current
              </span>
            )} */}
          </h2>
          {isProject && <SearchBar></SearchBar>}
        </div>
      </header>
    </>
  );
};

export default withRouter(AppHeader);
