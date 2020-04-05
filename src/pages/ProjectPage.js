import React from 'react';
import SearchBar from '../components/SearchBar';
import { ProjectListItem } from '../components/Project';
// import styled from 'styled-components';

// const Content = styled.div`
//   padding: 50px;
// `;

const projectList = [
  {
    name: 'Conacoin',
    date: '2020.03.25',
  },
  {
    name: 'Conacoin2',
    date: '2020.03.25',
  },
  {
    name: 'Conacoin3',
    date: '2020.03.25',
  },
];

const ProjectPage = () => {
  return (
    <>
      <SearchBar></SearchBar>
      {/* <Content>컨텐츠</Content> */}
      <div className="page-content project-content">
        <ul className="project-list">
          {projectList.map((item, i) => (
            <ProjectListItem
              name={item.name}
              date={item.date}
              key={i}
            ></ProjectListItem>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectPage;
