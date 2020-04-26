import React from 'react';
import { withRouter } from 'react-router-dom';
import './AppHeader.scss';
import SearchBar from '../../SearchBar';

const AppHeader = ({ location: { pathname } }) => {
  let pageHeader = '';
  const capitalize = (s) => {
    if (typeof s !== 'string') return;
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  pageHeader = capitalize(pathname.slice(1));

  let funcRef = React.createRef();

  return (
    <>
      <header className="app-header">
        <div className="lg-wd lg-pd app-header-area" ref={funcRef}>
          <h2 className="page-header">{pageHeader}</h2>
          {pathname === '/project' && <SearchBar></SearchBar>}
        </div>
      </header>
    </>
  );
};

export default withRouter(AppHeader);
