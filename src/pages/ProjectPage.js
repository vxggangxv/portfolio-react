import React, { useEffect } from 'react';
// import SearchBar from '../components/SearchBar';
import { ProjectListItem } from '../components/Projects';
import { useSelector, useDispatch } from 'react-redux';
import { getProjectList } from 'store/project';
// import styled from 'styled-components';
// import Spinner from '../components/common/Spinner';

// const ProjectList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
// `;

const ProjectPage = () => {
  const projectList = useSelector((state) => state.project.projectList);

  // let projectList = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectList());
  }, [dispatch]);

  return (
    <>
      {/* <SearchBar></SearchBar> */}
      {/* <Content>컨텐츠</Content> */}
      {/* <Spinner /> */}
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
