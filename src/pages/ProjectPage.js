import React from 'react';
import SearchBar from '../components/SearchBar';
import { ProjectListItem } from '../components/Projects';
import { useSelector } from 'react-redux';
import { selectProjectList } from 'store/project';
// import styled from 'styled-components';

// const ProjectList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const projectList = [
//   {
//     name: 'Conacoin',
//     date: '2020.03.25',
//   },
//   {
//     name: 'Conacoin2',
//     date: '2020.03.25',
//   },
//   {
//     name: 'Conacoin3',
//     date: '2020.03.25',
//   },
// ];

const ProjectPage = () => {
  // const projectList = useSelector((state) => state.project.projectList);
  const projectList = useSelector(selectProjectList);

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
              url={item.url}
              key={i}
            ></ProjectListItem>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectPage;
