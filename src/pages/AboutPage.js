import React from 'react';
import './AboutPage.scss';

const AboutPage = () => {
  var today = new Date();
  var dateString = '2015-01-16';
  var dateArray = dateString.split('-');
  var dateObj = new Date(dateArray[0], Number(dateArray[1]) - 1, dateArray[2]);
  var betweenDay = (today.getTime() - dateObj.getTime()) / 1000 / 60 / 60 / 24;
  var careerYear = Math.ceil(betweenDay / 365);

  return (
    <section className="page-content about-content">
      <div className="row">
        <div className="col lg-wd">
          <div className="card card-lg">
            <div className="header">
              <h2>
                <strong>About</strong> me
                <small>개발자 JunCoder입니다.</small>
              </h2>
            </div>
            <div className="body">
              <p>
                고등학교는 이공 계열을 대학교는 예체능 계열을 졸업하였고
                <br />
                현재는 {careerYear}년 차 Front 개발을 하고 있습니다.
                <br />
                <br />
                코딩을 통해서 UI를 만들고, 로직을 만들어 내어 서로 연결하고
                기능들을 개발하는 작업들에 매력을 느꼈고 앞으로의 제 미래를
                책임질 직업으로 삼기로 결정했습니다.
                <br />
                <br />
                웹의 다양한 기술들을 구현하는 작업에 흥미를 느끼고 제가 직접
                코딩하여 그것을 웹에 적용할때면 매우 흥분됩니다.
                <br />
                사용자 환경을 고려하고 사용자 느낌과 행동변화을 일으키도록하는
                UI/UX를 고려한 웹을 만들어 사용자가 만족을 느끼도록 하고
                싶습니다.
                <br />
                <br />
                훌륭한 개발자가 되기 위해 항상 열의를 가지고 계속해서
                성장하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
