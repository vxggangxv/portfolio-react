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
                <strong>Interest and Plan</strong> forward
                <small>
                  관심사 및 앞으로의 계획
                </small>
              </h2>
            </div>
            <div className="body">
              <h3>관심사</h3>
              <p>
                TDD(테스트 주도 개발), PWA(프로그레시브웹앱), GraphQL에 관심이 많습니다.<br />
                TDD는 Jest를 사용해서 다뤄본 결과 프로젝트가 커질수록 테스트주도 개발을 했을 경우 실서버 적용시 오류를 줄일 수 있음을 느꼈고,<br />
                PWA는 Service Worker를 통해 다뤄본 결과 확실히 사용자 측면에서 더 나은 경험(앱과 같이 첫 방문 이후 접속시 동일한 소스 로딩X)을 제공할 수 있음을 느꼈습니다.<br />
                개인적인 바램으로는 Google Play Store와 같은 PWA Store가 생겨나서 PWA에 대한 수요와 관심이 더 많아졌으면 좋겠습니다.
                <br />
                <br />
                GraphQL은 프론트와 백엔드를 동시 개발하는경우에 특히 효과적일거 같습니다. <br />
                RestfullApi와 달리 프론트에서 쿼리문을 통한 데이터 통신 작업이 매력적입니다.
              </p>
            </div>
            <div className="body">
              <h3>앞으로의 계획</h3>
              <p>
                React와 GraphQL을 이용한 간단한 MovieApp을 만들고<br />
                React를 이용한 커뮤니티 사이트를 개발해볼 예정입니다. <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityPage;
