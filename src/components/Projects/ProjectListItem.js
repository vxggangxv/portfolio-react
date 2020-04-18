import React from 'react';
import './ProjectListItem.scss';
// import styled from 'styled-components';

// const Item = styled.li`
//   width: 495px;
//   margin: 25px;
// `;

const ProjectItem = ({ name, description, stack, path, url, demo }) => {
  return (
    <li className="project-item">
      <div className="in-cover">
        <figure className="thumbnail">
          {/* <img src={`${props.url}`} alt="프로필사진" /> */}
          <img src={`${process.env.PUBLIC_URL}${path}`} alt="프로필사진" />
        </figure>
        <div className="info">
          <p className="name">{name}</p>
          <p className="description">{description}</p>
          <hr className="line" />
          <p className="stack">{stack}</p>
        </div>
      </div>
      <div className="link-area">
        <a
          className="link-item"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="mdi mdi-vector-link"></i> Link
        </a>
        <a
          className="link-item"
          hidden={!demo ? 'hidden' : ''}
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="mdi mdi-vector-link"></i> Demo
        </a>
      </div>
    </li>
  );
};

export default ProjectItem;
