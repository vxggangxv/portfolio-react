import React from 'react';
// import SearchBar from '../components/SearchBar';
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
      {/* <SearchBar></SearchBar> */}
      {/* <Content>컨텐츠</Content> */}
      <section className="page-content project-content">
        <h2 className="sr-only">프로젝트 리스트</h2>
        <ul className="project-list row">
          {projectList.map((item, i) => (
            <ProjectListItem
              name={item.name}
              description={item.description}
              stack={item.stack}
              path={item.path}
              url={item.url}
              demo={item.demo}
              contrib={item.contrib}
              key={i}
            ></ProjectListItem>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ProjectPage;
