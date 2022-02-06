import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import './AppSidebar.scss';

const navigation = [
  {
    path: '/about',
    text: 'About',
  },
  {
    path: '/project',
    text: 'Project',
  },
  {
    path: '/activity',
    text: 'Activity',
  },
  {
    path: '/plan',
    text: 'Plan',
  },
];

const AppSidebar = ({ location: { pathname } }) => {
  return (
    <div className="app-sidebar">
      <div className="profile">
        <figure>
          {/* <img src={`${process.env.PUBLIC_URL}${urlPath}`} alt="프로필사진" /> */}
          {/* <img src={process.env.PUBLIC_URL + '/img/me2.jpg'} alt="프로필사진" /> */}
          {/* <img src={require('assets/img/me2.jpg')} alt="프로필사진" /> */}
          <img src={require('assets/img/me.jpg')} alt="프로필사진" />
          <figcaption>
            JunCoder
            <br />
            <small className="intro">I'm crazy about Coding</small>
          </figcaption>
        </figure>
      </div>
      <nav className="nav">
        <h1 className="hide">메인메뉴</h1>
        <div className="stack-area">
          <p className="title">Stack</p>
          <p className="text">
            <span className="item">Html5</span>,{' '}
            <span className="item">Css3</span>,{' '}
            <span className="item">Scss</span>,{' '}
            <span className="item">Gulp</span>,<br />
            <span className="item">Javascript</span>,{' '}
            <span className="item">Typescript</span>,{' '}
            <span className="item">React</span>,<br />
            <span className="item">React-redux</span>,{' '}
            <span className="item">Recoil</span>,{' '}
            <span className="item">Vue</span>, <br />
            <span className="item">Node.js</span>,{' '}
            <span className="item">Express</span>,{' '}
            <span className="item">Mysql</span>,{' '}
            <span className="item">Prisma</span>,{' '}
            <span className="item">Sequelize</span>,{' '}
            <span className="item">Graphql</span>,{' '}
            <span className="item">Graphql</span>,{' '}
          </p>
        </div>
        <ul className="menu">
          {navigation.map((item, idx) => (
            <li key={idx} className={pathname === item.path ? 'active' : ''}>
              <NavLink to={item.path}>{item.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <small className="copyright">Made by JunCoder with React, Redux</small>
    </div>
  );
};

export default withRouter(AppSidebar);
