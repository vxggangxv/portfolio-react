import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './AppSidebar.scss';

const AppSidebar = ({ location: { pathname } }) => {
  const t = 'ative dd';
  return (
    <div className="app-sidebar">
      <div className="profile">
        <figure>
          <img src={require('assets/img/me.jpg')} alt="프로필사진" />
          <figcaption>JunCoder</figcaption>
        </figure>
      </div>
      <nav className="nav">
        <h1 className="hide">메인메뉴</h1>
        <ul className="menu">
          {/* <li className={`link ${pathname === '/about' ? 'active' : ''}`}> */}
          <li className={pathname === '/about' ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
          <li className={pathname === '/' ? 'active' : ''}>
            <Link to="/">Project</Link>
          </li>
          <li className={pathname === '/activity' ? 'active' : ''}>
            <Link to="/activity">Activity</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(AppSidebar);
