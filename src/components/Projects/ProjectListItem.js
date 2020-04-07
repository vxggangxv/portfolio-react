import React from 'react';
import './Projects.scss';
// import styled from 'styled-components';

// const Item = styled.li`
//   width: 495px;
//   margin: 25px;
// `;

const ProjectItem = (props) => {
  return (
    <li className="project-item">
      <figure className="thumbnail">
        <img src={`${process.env.PUBLIC_URL}${props.url}`} alt="프로필사진" />
      </figure>
      <div className="info">
        <p className="name">{props.name}</p>
        <p className="date">{props.date}</p>
      </div>
    </li>
  );
};

export default ProjectItem;
