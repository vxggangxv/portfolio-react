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
  const { projectList, appLoading } = useSelector((state) => ({
    projectList: state.project.projectList,
    appLoading: state.app.appLoading,
  }));

  // TEST:
  useEffect(() => {
    console.log('appLoading', appLoading);
  }, [appLoading]);

  // let projectList = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjectList());
    // dispatch(getProjectList()).then((result) => {
    //   console.log('result', result);
    // });
  }, [dispatch]);

  return (
    <>
      {/* <SearchBar></SearchBar> */}
      {/* <Content>컨텐츠</Content> */}
      {/* <Spinner /> */}
      <section className="page-content project-content">
        <h2 className="sr-only">프로젝트 리스트</h2>
        <ul className="project-list row">
          {projectList.map((item, idx) => (
            <ProjectListItem key={idx} {...item}></ProjectListItem>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ProjectPage;
