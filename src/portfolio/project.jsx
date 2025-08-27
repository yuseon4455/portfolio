import React, { useState } from 'react';
import ImageModalSwiper from './component/ImageSwiper';
import ReadmeModal from './component/ReadmeModal ';
import './style.css';
import './project.css';

const Project = () => {
  const [openModal, setOpenModal] = useState(null);
  const [openImageModal, setOpenImageModal] = useState(null);

  const openReadmeModal = (projectId) => {
    setOpenModal(projectId);
  };

  const closeReadmeModal = () => {
    setOpenModal(null);
  };

  const openImageModalHandler = (projectId) => {
    setOpenImageModal(projectId);
  };

  const closeImageModal = () => {
    setOpenImageModal(null);
  };

  // PPT 링크를 여는 함수
  const openPPT = (url) => {
    window.open(url, '_blank');
  };

  // 프로젝트별 이미지 데이터
  const projectImages = {
    rocketbook: [
      { src: './images/projects/rocketbook/1.png', alt: 'RocketBookstore 메인 페이지' },
      { src: './images/projects/rocketbook/2.png', alt: 'RocketBookstore 도서 목록' },
      { src: './images/projects/rocketbook/3.png', alt: 'RocketBookstore 상세 페이지' },
      { src: './images/projects/rocketbook/4.png', alt: 'RocketBookstore 장바구니' },
    ],
    javaNyang: [
      { src: './images/projects/javanyang/1.png', alt: 'JavaNyang 메인 화면' },
      { src: './images/projects/javanyang/2.png', alt: 'JavaNyang 게임 화면' },
      { src: './images/projects/javanyang/3.png', alt: 'JavaNyang 채팅 화면' },
    ],
    ashley: [
      { src: './images/projects/ashley/1.png', alt: 'Ashley 메인 페이지' },
      { src: './images/projects/ashley/2.png', alt: 'Ashley 제품 페이지' },
    ],
    '20century': [
      { src: './images/projects/20century/1.png', alt: '20세기 영화 메인' },
      { src: './images/projects/20century/2.png', alt: '20세기 영화 목록' },
    ],
    animal: [
      { src: './images/projects/animal/1.png', alt: '동물병원 협회 메인' },
      { src: './images/projects/animal/2.png', alt: '동물병원 협회 소개' },
    ]
  };

  return (
    <section className="page page-05 active" id="page-05">
      <h1 className="project-h1">PROJECTS</h1>
      
      {/* 백엔드 + 프론트엔드 */}
      <h2 className="project-category">백엔드 + 프론트엔드</h2>
      <div className="project-grid">
        {/* 프로젝트 1 - RocketBookstore */}
        <div className="project-card">
          <div className="project-header">
            <span className="project-tag">RocketBookstore</span>
            <span className="project-date">2025.03 (5인 팀 프로젝트)</span>
          </div>
          <h3>온라인 도서 쇼핑몰 플랫폼</h3>
          <div className="project-features">
            <ul>
              <li>카테고리별 도서 리스트 및 상세 조회 구현</li>
              <li>위시리스트 및 장바구니 기능</li>
              <li>관리자 페이지에서 도서/회원/배송/재고 관리</li>
            </ul>
          </div>
          <a 
            href="https://github.com/yuseon4455/rocketbookstore"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/yuseon4455/rocketbookstore
          </a>
          <div className="project-techs">
            <span>HTML</span>
            <span>CSS</span>
            <span>JSP</span>
            <span>Oracle</span>
            <span>JavaScript</span>
          </div>
          <div className="project-buttons">
            <button className="btn" onClick={() => openReadmeModal('rocketbook')}>README</button>
            <button className="btn btn-image" onClick={() => openImageModalHandler('rocketbook')}>이미지</button>
            <button 
              className="btn btn-ppt" 
              onClick={() => openPPT('https://www.figma.com/deck/ojy35bJP876zoR997GSvo1/Rocket-Bookstore--Copy-?node-id=6-37&t=dPxHfJCciPfrSG9W-1')}
            >
              PPT
            </button>
          </div>
        </div>

        {/* 프로젝트 2 - javaNyang */}
        <div className="project-card">
          <div className="project-header">
            <span className="project-tag">javaNyang</span>
            <span className="project-date">2025.05 (6인 팀 프로젝트)</span>
          </div>
          <h3>javaNyang</h3>
          <div className="project-features">
            <ul>
              <li>React + Vite 기반 구조 설계 및 반응형 UI 구현</li>
              <li>JWT 기반 로그인 / 회원정보 수정 / 마이페이지 구현</li>
              <li>WebSocket 기반 실시간 채팅 및 대전 기능 구현</li>
              <li>사용자 경험을 고려한 인터랙션 및 상태 관리 최적화</li>
            </ul>
          </div>
          <a 
            href="https://github.com/hyunsupLee/JavaNyang"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/hyunsupLee/JavaNyang
          </a>
          <div className="project-techs">
            <span>React</span>
            <span>Vite</span>
            <span>CSS</span>
            <span>Supabase</span>
            <span>JWT</span>
            <span>JavaScript</span>
          </div>
          <div className="project-buttons">
            <button className="btn" onClick={() => openReadmeModal('javaNyang')}>README</button>
            <button className="btn btn-image" onClick={() => openImageModalHandler('javaNyang')}>이미지</button>
            <button 
              className="btn btn-ppt" 
              onClick={() => openPPT('https://docs.google.com/presentation/d/1kZLok7ghs3k1yS8DlzHbeXU9XlowPUsiCXJ1jTjBqGU/edit?usp=sharing')}
            >
              PPT
            </button>
          </div>
        </div>

        {/* 프로젝트 3 - StudyO */}
        <div className="project-card">
          <div className="project-header">
            <span className="project-tag">StudyO</span>
            <span className="project-date">2025.07 (6인 팀 프로젝트)</span>
          </div>
          <h3>스터디 모집 플랫폼</h3>
          <div className="project-features">
            <ul>
              <li>React와 Spring Boot를 결합하여 프론트부터 백엔드까지 원활한 전체 흐름 구현</li>
              <li>회원 관리, 게시글 작성, 참여 신청 등 다양한 기능 구현</li>
              <li>Redux와 React Router를 활용한 상태 관리 및 인터랙션 구현</li>
              <li>Tailwind CSS를 이용한 반응형 UI 구성 및 배포 자동화 경험</li>
            </ul>
          </div>
          <a 
            href="https://www.studyo.r-e.kr/"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.studyo.r-e.kr/
          </a>
          <div className="project-techs">
            <span>React</span>
            <span>Spring Boot</span>
            <span>Oracle</span>
            <span>AWS</span>
            <span>Tailwind CSS</span>
            <span>Flutter</span>
          </div>
          <div className="project-buttons">
            <button className="btn" onClick={() => openReadmeModal('studyO')}>README</button>
            
            <button 
              className="btn btn-ppt" 
              onClick={() => openPPT('https://www.figma.com/slides/wcNAN0dl7TiPoTO4TzYsaJ/StudyO-PPT?node-id=1-653')}
            >
              PPT
            </button>
          </div>
        </div>
      </div>

      {/* 프론트엔드 */}
      <h2 className="project-category">프론트엔드</h2>
      <div className="project-grid">
        {/* Ashley Redesign */}
        <div className="project-card">
          <div className="project-header">
            <span className="project-tag">Ashley Redesign</span>
            <span className="project-date">2024.06 (캡스톤 프로젝트)</span>
          </div>
          <h3>Ashley 브랜드 클론 기반 리디자인 코딩</h3>
          <div className="project-features">
            <ul>
              <li>Ashley 브랜드 웹사이트를 기반으로 전체 구조 및 UI 리디자인</li>
              <li>HTML, CSS, JavaScript만으로 정적 페이지 구성</li>
              <li>사용자 경험을 고려한 레이아웃 재구성 및 스타일링</li>
            </ul>
          </div>
          <a 
            href="https://yuseon4455.github.io/Ashley/"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://yuseon4455.github.io/Ashley/
          </a>
          <div className="project-techs">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
          <div className="project-buttons">
            <button className="btn" onClick={() => openReadmeModal('ashley')}>README</button>
            <button className="btn btn-image" onClick={() => openImageModalHandler('ashley')}>이미지</button>
          </div>
        </div>

        {/* 20th century */}
        <div className="project-card">
          <div className="project-header">
            <span className="project-tag">20th century</span>
            <span className="project-date">2022.06 (5인 팀 프로젝트)</span>
          </div>
          <h3>20세기 테마 웹사이트</h3>
          <div className="project-features">
            <ul>
              <li>모바일 앱 UI를 기반으로 제작한 정적인 영화 소개 웹사이트</li>
              <li>영화 리스트 및 상세 페이지 등 콘텐츠 중심의 단일 페이지 구성</li>
              <li>간결한 인터페이스와 레이아웃으로 영화 정보 전달에 집중</li>
            </ul>
          </div>
          <a 
            href="https://yuseon4455.github.io/20cs/"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://yuseon4455.github.io/20cs/
          </a>
          <div className="project-techs">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
          <div className="project-buttons">
            <button className="btn" onClick={() => openReadmeModal('20century')}>README</button>
            <button className="btn btn-image" onClick={() => openImageModalHandler('20century')}>이미지</button>
          </div>
        </div>

        {/* 동물병원 협회 */}
        <div className="project-card">
          <div className="project-header">
            <span className="project-tag">Korea Animal Hospital Association</span>
            <span className="project-date">2022.08 (5인 팀 프로젝트)</span>
          </div>
          <h3>동물병원 협회 웹사이트</h3>
          <div className="project-features">
            <ul>
              <li>동물병원 협회 웹사이트 클론 및 리디자인</li>
              <li>공지사항, 자료실, 인사말, 설립 목적 등 주요 정적 콘텐츠 페이지 구성</li>
              <li>다양한 디바이스에서 안정적인 레이아웃을 위한 반응형 웹디자인 적용</li>
            </ul>
          </div>
          <a 
            href="https://yuseon4455.github.io/aniimal-project/"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://yuseon4455.github.io/aniimal-project/
          </a>
          <div className="project-techs">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>jQuery</span>
          </div>
          <div className="project-buttons">
            <button className="btn" onClick={() => openReadmeModal('animal')}>README</button>
            <button className="btn btn-image" onClick={() => openImageModalHandler('animal')}>이미지</button>
          </div>
        </div>
      </div>

      {/* 이미지 모달 */}
      <ImageModalSwiper 
        images={projectImages[openImageModal]} 
        projectName={openImageModal}
        isOpen={!!openImageModal}
        onClose={closeImageModal}
      />

      {/* README 모달 */}
      <ReadmeModal 
        openModal={openModal} 
        closeReadmeModal={closeReadmeModal} 
      />
    </section>
  );
};

export default Project;