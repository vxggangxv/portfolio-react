import React from 'react';
import './ProjectListItem.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

// const LazyImage = ({ image }) => (
//   <>
//     <LazyLoadImage
//       alt={image.alt}
//       height={image.height}
//       src={image.src} // use normal <img> attributes as props
//       width={image.width} />
//     <span>{image.caption}</span>
//   </>
// );
// import styled from 'styled-components';

// const Item = styled.li`
//   width: 495px;
//   margin: 25px;
// `;

const ProjectItem = ({
  name,
  description,
  stack,
  path,
  url,
  demo,
  contrib,
}) => {
  return (
    <li className="project-item">
      <div className="in-cover">
        <figure className="thumbnail">
          {/* <img src={`${props.url}`} alt="프로젝트사진" /> */}
          {/* <img src={`${process.env.PUBLIC_URL}${path}`} alt="프로젝트사진" /> */}
          {/* <img src={require('../../assets' + path)} alt="프로젝트사진" /> */}
          <LazyLoadImage
            src={require('../../assets' + path)}
            effect="opacity"
            alt="프로젝트사진"
          />
        </figure>
        <div className="info">
          <p className="name">{name}</p>
          <p className="description">{description}</p>
          <hr className="line" />
          <p className="stack">{stack}</p>
        </div>
      </div>
      <div className="link-area">
        {/* mdi-pencil-circle-outline */}
        {/* mdi-vector-link */}
        {/* mdi-open-in-new */}
        {/* mdi-pencil-box-outline */}
        {url && (
          <a
            className="link-item"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="mdi mdi-open-in-new"></i> Link
          </a>
        )}
        {demo && (
          <a
            className="link-item"
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="mdi mdi-vector-link"></i> Demo
          </a>
        )}
        <span className="contrib">
          <i className="mdi mdi-lead-pencil"></i> {contrib}
        </span>
      </div>
    </li>
  );
};

export default ProjectItem;
