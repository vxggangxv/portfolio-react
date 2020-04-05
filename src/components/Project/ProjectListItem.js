import React from 'react';
import './Project.scss';

const ProjectItem = (props) => {
  return (
    <div>
      {props.name}, {props.date}
    </div>
  );
};

export default ProjectItem;
