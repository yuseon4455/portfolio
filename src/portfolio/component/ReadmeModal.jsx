import React, { useEffect } from 'react';
import './ReadmeModal.css';

const ReadmeModal = ({ openModal, closeReadmeModal }) => {
  // 모달이 열릴 때 배경 스크롤 방지
  useEffect(() => {
    if (openModal) {
      const scrollY = window.scrollY;
      
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        window.scrollTo(0, scrollY);
      };
    }
  }, [openModal]);

  if (!openModal) return null;

  return (
    <div 
      className="readme-modal-overlay"
      onClick={closeReadmeModal}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
    >
      <div 
        className="readme-modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          width: '90%',
          maxWidth: '700px',
          maxHeight: '85vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* 헤더 */}
        <div className="readme-modal-header">
          <button 
            className="readme-modal-close"
            onClick={closeReadmeModal}
          >
            ✕
          </button>
          <h2 className="readme-modal-title">README.md</h2>
        </div>

        {/* 컨텐츠 */}
        <div className="readme-modal-content">
          {/* RocketBookstore README */}
          {openModal === 'rocketbook' && (
            <div className='modal-content-wrapper'>
              <h2>RocketBookstore 온라인 도서 쇼핑몰 플랫폼</h2>
              <p><strong>제작 기간:</strong> 2025.03.20 ~ 2025.04.11 (5인 팀 프로젝트)</p>
              <p><strong>소개:</strong> '쿠팡 로켓배송'의 빠른 속도와 '배달의민족'의 1:1 단독 배송 모델을 융합한 혁신적인 온라인 도서 쇼핑몰 플랫폼입니다.</p>

              <h3>프로젝트 기획 의도</h3>
              <ul>
                <li><strong>로켓배송 시스템:</strong> 하루 1회 이상 도서 배송이 가능한 초고속 배달 구조</li>
                <li><strong>실시간 배송 관리:</strong> 주문 시간과 배송지 기반의 배송 타임 슬롯 분배 시스템</li>
                <li><strong>1:1 단독 배송:</strong> 배송기사 1명이 1회에 한 고객에게만 전담 배송하는 프리미엄 서비스</li>
              </ul>

              <h3>주요 기능</h3>
              <h4>메인 화면</h4>
              <ul>
                <li>웹 컨셉에 맞는 마우스 커스텀 커서 제작</li>
                <li>New/Best 상품 하위 4개/상위 4개 표시</li>
                <li>도서제목 및 저자 기반 실시간 검색 기능</li>
              </ul>

              <h4>도서 관리 시스템</h4>
              <ul>
                <li>카테고리별 도서 리스트 및 페이지네이션</li>
                <li>도서 상세정보 조회 및 위시리스트/장바구니 추가</li>
                <li>관리자의 도서 및 재고 관리 시스템</li>
              </ul>

              <h4>사용자 서비스</h4>
              <ul>
                <li>회원가입/로그인 및 회원정보 관리</li>
                <li>마이페이지: 관심 도서, 배송지 관리, 위시리스트 필터링</li>
                <li>장바구니부터 결제까지 완전한 주문 프로세스</li>
                <li>실시간 배송 현황 확인</li>
              </ul>

              <h4>관리자 페이지</h4>
              <ul>
                <li>회원 관리 및 도서 관리</li>
                <li>배송지 관리 및 재고 관리</li>
                <li>주문 관리 및 배송 현황 모니터링</li>
              </ul>

              <h3>기술 스택</h3>
              <ul>
                <li><strong>Frontend:</strong> HTML, CSS, JavaScript를 활용한 동적 사용자 인터페이스</li>
                <li><strong>Backend:</strong> JSP와 Apache Tomcat 서버</li>
                <li><strong>Database:</strong> Oracle DB를 활용한 데이터 관리</li>
              </ul>

              <h3>데이터베이스 구조 (ERD)</h3>
              <ul>
                <li><strong>users:</strong> 회원 정보 관리</li>
                <li><strong>categories:</strong> 도서 카테고리 분류</li>
                <li><strong>books:</strong> 도서 상세 정보</li>
                <li><strong>cart:</strong> 장바구니 시스템</li>
                <li><strong>orders/order_detail:</strong> 주문 및 주문 상세 관리</li>
                <li><strong>ship/shipping_history:</strong> 배송지 및 배송 현황 추적</li>
                <li><strong>wishlist:</strong> 위시리스트 관리</li>
                <li><strong>stock_logs:</strong> 실시간 재고 정보</li>
              </ul>

              <h3>팀 구성 및 역할 분담</h3>
              <ul>
                <li><strong>박희원:</strong> 회원 관리 시스템</li>
                <li><strong>김환희:</strong> 관리자 페이지 및 재고 관리</li>
                <li><strong>박채원:</strong> 마이페이지 및 배송 관리</li>
                <li><strong>선승희:</strong> 장바구니 및 주문 로직</li>
                <li><strong>백유선:</strong> 위시리스트 및 도서 관리</li>
              </ul>

              <h3>향후 개선 계획</h3>
              <h4>기능 확장</h4>
              <ul>
                <li>리뷰/평점 시스템 추가</li>
                <li>쿠폰/할인 이벤트 기능</li>
                <li>배송원 매칭 알고리즘</li>
                <li>총 가격 자동 계산 시스템</li>
              </ul>

              <h4>UX/UI 개선</h4>
              <ul>
                <li>반응형 웹 디자인 적용</li>
                <li>사용자 경험 최적화</li>
              </ul>

              <h3>프로젝트 의의</h3>
              <p>기존 온라인 서점과 차별화된 배송 시스템을 기획하고 구현함으로써, 실제 서비스 기획부터 개발까지의 전 과정을 경험할 수 있었습니다. 특히 팀 협업을 통해 대규모 웹 애플리케이션 개발 경험을 쌓고, 사용자 중심의 서비스 설계 능력을 기를 수 있었습니다.</p>

              <p><a href="https://github.com/yuseon4455/rocketbookstore" target="_blank">GitHub 저장소 바로가기</a></p>
            </div>
          )}

          {/* javaNyang README */}
          {openModal === 'javaNyang' && (
            <div className='modal-content-wrapper'>
              <h2>javaNyang</h2>
              <p><strong>제작 기간:</strong> 2025.05 (6인 팀 프로젝트)</p>
              <p><strong>소개:</strong> React + Vite를 활용한 실시간 채팅 및 게임 플랫폼입니다.</p>
              
              <h3>프로젝트 개요</h3>
              <ul>
                <li><strong>목표:</strong> 사용자들이 실시간으로 소통하고 게임을 즐길 수 있는 웹 플랫폼 구축</li>
                <li><strong>핵심 기능:</strong> 실시간 채팅, 게임 대전, 회원 관리</li>
              </ul>
              
              <h3>주요 구현 기능</h3>
              <ul>
                <li><strong>인증 시스템:</strong> JWT 기반 로그인/회원가입</li>
                <li><strong>마이페이지:</strong> 회원정보 수정 및 관리</li>
                <li><strong>실시간 채팅:</strong> WebSocket 기반 채팅 시스템</li>
                <li><strong>게임 시스템:</strong> 실시간 대전 기능</li>
                <li><strong>반응형 UI:</strong> 다양한 디바이스 지원</li>
              </ul>
              
              <h3>기술 스택</h3>
              <ul>
                <li><strong>Frontend:</strong> React, Vite, CSS3, JavaScript</li>
                <li><strong>Backend:</strong> Supabase</li>
                <li><strong>인증:</strong> JWT</li>
                <li><strong>실시간 통신:</strong> WebSocket</li>
              </ul>
            </div>
          )}

          {/* StudyO README */}
          {openModal === 'studyO' && (
            <div className='modal-content-wrapper'>
              <h2>StudyO 스터디 모집 플랫폼</h2>
              <p><strong>제작 기간:</strong> 2025.07 (6인 팀 프로젝트)</p>
              <p><strong>소개:</strong> React와 Spring Boot를 활용한 풀스택 스터디 모집 플랫폼입니다.</p>

              <h3>프로젝트 배경</h3>
              <p>개인 학습의 한계를 극복하고 함께 성장할 수 있는 스터디 문화를 만들기 위해 기획된 프로젝트입니다.</p>

              <h3>주요 기능</h3>
              <ul>
                <li><strong>스터디 그룹 관리:</strong> 카테고리별 스터디 생성, 수정, 삭제 기능</li>
                <li><strong>회원 시스템:</strong> 회원가입, 로그인, 프로필 관리 및 권한 관리</li>
                <li><strong>참여 신청 시스템:</strong> 스터디 참여 신청, 승인/거절, 멤버 관리</li>
                <li><strong>게시판 기능:</strong> 스터디별 공지사항, 자료 공유, 질문답변 게시판</li>
                <li><strong>실시간 알림:</strong> 참여 신청, 승인, 새 게시글 등에 대한 알림 기능</li>
                <li><strong>검색 및 필터링:</strong> 지역, 카테고리, 난이도별 스터디 검색</li>
              </ul>

              <h3>기술 스택 및 아키텍처</h3>
              <ul>
                <li><strong>Frontend:</strong> React 18, Redux Toolkit을 활용한 상태 관리</li>
                <li><strong>Backend:</strong> Spring Boot, Spring Security를 통한 인증/인가</li>
                <li><strong>Database:</strong> Oracle DB</li>
                <li><strong>Styling:</strong> Tailwind CSS</li>
                <li><strong>Mobile:</strong> Flutter</li>
                <li><strong>라우팅:</strong> React Router</li>
              </ul>

              <h3>팀 협업 및 역할</h3>
              <ul>
                <li>6인 팀 프로젝트로 프론트엔드, 백엔드, 모바일 개발 영역 분담</li>
                <li>Git을 활용한 협업 워크플로우 및 코드 리뷰</li>
                <li>Agile 스프린트 기반 개발 진행</li>
                <li>API 문서화 및 팀 소통 도구 활용</li>
              </ul>

              <h3>배포 및 운영</h3>
              <ul>
                <li>CI/CD 파이프라인 구축</li>
                <li>클라우드 서버 운영 및 모니터링</li>
                <li>DB 성능 최적화 및 백업 전략 수립</li>
              </ul>

              <h3>프로젝트 경험</h3>
              <p>대규모 팀 프로젝트에서 API 연동, 상태 관리, UX 고려 UI 설계 경험을 쌓았습니다.</p>

              <p><a href="https://github.com/hyunsupLee/react-study-o" target="_blank">GitHub 저장소 바로가기</a></p>
            </div>
          )}

          {/* Ashley README */}
          {openModal === 'ashley' && (
            <div className='modal-content-wrapper'>
              <h2>Ashley 브랜드 클론 기반 리디자인 코딩</h2>
              <p><strong>제작 기간:</strong> 2024.06 (캡스톤 프로젝트)</p>
              <p><strong>소개:</strong> Ashley 가구 브랜드의 공식 웹사이트를 분석하고 전체적인 구조와 UI를 새롭게 리디자인한 캡스톤 프로젝트입니다.</p>

              <h3>프로젝트 배경</h3>
              <p>Ashley Furniture 기존 웹사이트 분석 후 전면 리디자인</p>

              <h3>주요 개선사항</h3>
              <ul>
                <li>향상된 시각적 계층 구조 및 타이포그래피</li>
                <li>고품질 이미지 레이아웃 최적화</li>
                <li>사용자 친화적인 네비게이션 개선</li>
                <li>반응형 디자인 적용</li>
                <li>브랜드 아이덴티티 강화</li>
              </ul>

              <h3>기술적 구현</h3>
              <ul>
                <li>시멘틱 HTML</li>
                <li>CSS Grid와 Flexbox 활용</li>
                <li>CSS 애니메이션/트랜지션</li>
                <li>JavaScript 동적 콘텐츠</li>
                <li>크로스 브라우저 호환</li>
              </ul>

              <h3>캡스톤 프로젝트 의미</h3>
              <p>실제 기업 웹사이트 분석 및 개선 경험을 통해 상용 웹 개발 능력 강화</p>

              <p><a href="https://yuseon4455.github.io/Ashley/" target="_blank">사이트 바로가기</a></p>
            </div>
          )}

          {/* 20th Century README */}
          {openModal === '20century' && (
            <div className='modal-content-wrapper'>
              <h2>20세기 테마 웹사이트 - README</h2>
              <p><strong>제작 기간:</strong> 2022.06 (5인 팀 프로젝트)</p>
              <p><strong>소개:</strong> 20세기 클래식 영화 소개 웹사이트</p>

              <h3>주요 기능</h3>
              <ul>
                <li>영화 카드 리스트 페이지</li>
                <li>영화 상세 정보 페이지</li>
                <li>모바일 앱 스타일 네비게이션</li>
                <li>세련된 레이아웃</li>
                <li>반응형 웹 디자인</li>
              </ul>

              <h3>기술적 특징</h3>
              <ul>
                <li>HTML, CSS, JavaScript 기반 정적 사이트</li>
                <li>CSS Grid/Flexbox 활용</li>
                <li>동적 콘텐츠 로딩</li>
                <li>Mobile First UI/UX</li>
              </ul>

              <p><a href="https://yuseon4455.github.io/20cs/" target="_blank">사이트 바로가기</a></p>
            </div>
          )}

          {/* Animal Hospital README */}
          {openModal === 'animal' && (
            <div className='modal-content-wrapper'>
              <h2>동물병원 협회 웹사이트 - README</h2>
              <p><strong>제작 기간:</strong> 2022.08 (5인 팀 프로젝트)</p>
              <p><strong>소개:</strong> HTML, CSS, JS, jQuery를 활용한 정적 웹사이트 클론 프로젝트</p>

              <h3>주요 기능</h3>
              <ul>
                <li>협회 소개, 공지사항, 자료실, 회원 병원, 교육 안내</li>
              </ul>

              <h3>기술적 구현</h3>
              <ul>
                <li>시멘틱 HTML</li>
                <li>반응형 CSS</li>
                <li>jQuery 탭/슬라이더/드롭다운</li>
                <li>크로스 브라우저</li>
                <li>최적화</li>
              </ul>

              <h3>디자인 개선사항</h3>
              <ul>
                <li>향상된 시각적 계층 구조</li>
                <li>색상 팔레트 적용</li>
                <li>네비게이션 개선</li>
                <li>가독성 타이포그래피</li>
                <li>모바일 우선 반응형</li>
              </ul>

              <p><a href="https://yuseon4455.github.io/aniimal-project/" target="_blank">사이트 바로가기</a></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadmeModal;