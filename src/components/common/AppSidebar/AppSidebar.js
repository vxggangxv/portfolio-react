import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './AppSidebar.scss';

const AppSidebar = ({ location: { pathname } }) => {
  return (
    <div className="app-sidebar">
      <div className="profile">
        <figure>
          {/* <img src={`${process.env.PUBLIC_URL}${urlPath}`} alt="프로필사진" /> */}
          {/* <img src={process.env.PUBLIC_URL + '/img/me2.jpg'} alt="프로필사진" /> */}
          {/* <img src={require('assets/img/me2.jpg')} alt="프로필사진" /> */}
          <img src={require('assets/img/me3.jpg')} alt="프로필사진" />
          <figcaption>JunCoder</figcaption>
        </figure>
      </div>
      <nav className="nav">
        <h1 className="hide">메인메뉴</h1>
        <div className="stack-area">
          <p className="title">Stack</p>
          <p className="text">
            <span className="item">Html5</span>,&nbsp;
            <span className="item">Css3</span>,&nbsp;
            <span className="item">Scss</span>,<br />
            <span className="item">Javascript</span>,&nbsp;
            <span className="item">React</span>,&nbsp;
            <span className="item">Vue</span>,<br />
            <span className="item">Node.js</span>,&nbsp;
            <span className="item">Express</span>
          </p>
        </div>
        <ul className="menu">
          {/* <li className={`link ${pathname === '/about' ? 'active' : ''}`}> */}
          <li className={pathname === '/about' ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
          <li className={pathname === '/project' ? 'active' : ''}>
            <Link to="/">Project</Link>
          </li>
          <li className={pathname === '/activity' ? 'active' : ''}>
            <Link to="/activity">Activity</Link>
            {/* <Link to="/activity">Activities</Link> */}
          </li>
        </ul>
      </nav>
      <small className="copyright">Made by JunCoder with React, Redux</small>
    </div>
  );
};

export default withRouter(AppSidebar);
