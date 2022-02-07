import React from 'react';
import './AboutPage.scss';

const ActivityPage = () => {
  return (
    <section className="page-content activity-content">
      <div className="row">
        <div className="col lg-wd">
          <div className="card card-lg">
            <div className="header">
              <h2>
                <strong>Recent Activities</strong>
                <small>
                  프론트와 백엔드(Node.js) 관련 작업을 하고 있습니다.
                </small>
              </h2>
            </div>
            <div className="body">
              <h3>최근 활동 리스트</h3>
              <p>
                2022.01 ~. &nbsp; 실시간 카드게임 Tichu 개발중, React-native,
                Socket Server - 프론트, 백엔드 개발
              </p>
              <p>
                2021.08. &nbsp; react-redux, redux-saga, redux-toolkit기반
                커스텀 라이브러리 redux-toolkit-saga-combinator 개발 npm 배포
              </p>
              <p>
                2020.03. &nbsp; Conacoin 반응형사이트 제작, 유지관리 - 프론트,
                백엔드(Node.js) 개발
              </p>
              <p>
                2020.03. &nbsp; Conacoin 관리자사이트 제작, 유지관리 - 프론트,
                백엔드(Node.js) 개발
              </p>
              <p>2020.01. &nbsp; Bizberry 반응형사이트 제작 - 프론트 개발</p>
              <p>
                2019.12. &nbsp; Sumblockterminal 반응형사이트 제작 - 프론트 개발
              </p>
              <p>
                2019.10. &nbsp; Front-end-maker 블로그 제작 - Vue, Firebase 개발
              </p>
              <p>
                2019.08. &nbsp; Vue-todo 간단 앱 제작 - Vue, LocalStroage 개발
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityPage;
