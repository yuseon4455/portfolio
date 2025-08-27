import React from 'react';
import './style.css';

const Education = () => {
  return (
    <section className="page page-03 active" id="page-03">
      <h1 className="edu-title">EDUCATION</h1>
      <div className="edu-wrap">
        <div className="education-item">
          <div className="education-period">2025.01 ~ 2025.09</div>
          <h3 className="education-mtitle">프로젝트 기반 풀스택(프론트/백엔드) 개발자 취업부트캠프</h3>
          <p className="education-institution">더조은아카데미학원</p>
          <div className="education-content">
            <div className="education-title">주요 학습 내용:</div>
            <div className="education-list">
              JAVA, Oracle, HTML5/CSS3, JavaScript, jQuery, React, Spring Boot, AWS, Git/GitHub 등을 활용한
              풀스택 웹 개발
            </div>
          </div>
        </div>

        <div className="education-item">
          <div className="education-period">2022.04 ~ 2022.09</div>
          <h3 className="education-mtitle">[디지털디자인] 모바일 UI/UX 반응형 웹디자인(웹퍼블리싱)</h3>
          <p className="education-institution">이젠 아카데미학원</p>
          <div className="education-content">
            <div className="education-title">주요 학습 내용:</div>
            <div className="education-list">
              포토샵, UI/UX 디자인, 반응형 웹디자인, 모바일 웹 퍼블리싱
            </div>
          </div>
        </div>

        <div className="education-item">
          <div className="education-period">2024.01 ~ 2024.02 (2개월)</div>
          <h3 className="education-mtitle">일본 소프트웨어 개발 프로젝트 기초 학습</h3>
          <p className="education-institution">CRC</p>
          <div className="education-content">
            <div className="education-title">주요 학습 내용:</div>
            <div className="education-list">
              소프트웨어 개발 프로세스 기초 학습 (요구사항 분석, 설계, 문서화)코딩, 전 단계 중요성 이해 - 기획서, 플로우차트, DB 설계
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;