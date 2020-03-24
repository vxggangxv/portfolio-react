import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './AppHeader.scss';

const AppHeader = ({ location: { pathname } }) => {
  return (
    <header className="app-header">
      <h1 className="page-header">해더</h1>
      <nav className="app-nav">
        <ul className="menu">
          <li className={pathname === '/' ? 'active' : ''}>
            <Link to="/">메인</Link>
          </li>
          <li className={pathname === '/about' ? 'active' : ''}>
            <Link to="/about">소개</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(AppHeader);
