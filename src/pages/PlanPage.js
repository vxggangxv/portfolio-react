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
                <small>관심사 및 앞으로의 계획</small>
              </h2>
            </div>
            <div className="body">
              <h3>관심사</h3>
              <p>
                TDD(테스트 주도 개발), GraphQL에 관심이 많습니다.
                {/* PWA(프로그레시브웹앱) */}
                <br />
                <br />
                Unit테스트 (@testing-library), 통합테스트(cypress) 사용한 테스트
                주도 개발을 통해 보다 견고한 앱을 개발할 수 있습니다.
                {/* PWA는 Service Worker를 통해 다뤄본 결과 확실히 사용자 측면에서
                더 나은 경험(앱과 같이 첫 방문 이후 접속시 동일한 소스 로딩X)을
                제공할 수 있음을 느꼈습니다. */}
                <br />
                GraphQL은 Over fetch(필요없는 데이터까지 받음), Under
                fetch(데이터가 부족해 두개의 api를 호출)등과 같은 문제를 해결할
                수 있고
                <br />
                RestfullApi와 달리 프론트에서 쿼리문을 통한 데이터 통신 작업이
                매력적입니다.
                <br />
                <br />
                또한, 경우에 따라서 전통적인 Waterfall 개발방식에서 벗어나
                Agile한 개발방식으로 전환이 필요한다고 생각합니다. <br />
                단순히 기획후 기간에 맞혀 작업을 하는 것보다 좀 더 구체적이고
                유연하며(daily scrum), 매 피드백(sprint review)을 통해 개발에
                역동성을 줄 수 있습니다.
              </p>
            </div>

            <div className="body">
              <h3>앞으로의 계획</h3>
              <p>
                실시간 카드게임 Tichu 앱을 개발중이며,
                <br />
                히든 공유맛집을 공유하는 앱도 기획중에 있습니다.
                <br />
                사람들에게 편리함을 주거나 사람들의 증거움을 줄 수 있는 앱을
                개발하고 싶습니다.
                <br />
                <br />
                휼륭한 Front개발 리더 혹은 더 나아가 개발 팀장의 자질을 키울 수
                있도록 계속 노력하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityPage;
