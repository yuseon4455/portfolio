import React, { useEffect } from 'react';

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
      className="readme-modal" 
      style={{
        display: 'flex',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: '20px',
        boxSizing: 'border-box'
      }}
      onClick={closeReadmeModal} // 바깥 클릭 시 모달 닫기
    >
      <div 
        className="readme-modal-content"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          width: '90%',
          maxWidth: '600px',
          maxHeight: '80vh',
          overflowY: 'auto',
          position: 'relative',
          border: '1px solid #e0e0e0',
          margin: 'auto', // 중앙 정렬 강제
          left: 0,
          right: 0
        }}
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 버블링 방지
      >
        <span className="readme-close-btn" onClick={closeReadmeModal}>&times;</span>
        
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
            <p><strong>소개:</strong> React와 Spring Boot를 활용한 풀스택 스터디 모집 플랫폼입니다. 다양한 분야의 스터디 그룹을 생성하고 참여할 수 있는 종합적인 학습 커뮤니티 서비스를 구현했습니다.</p>

            <h3>프로젝트 배경</h3>
            <p>개인 학습의 한계를 극복하고 함께 성장할 수 있는 스터디 문화를 만들기 위해 기획된 프로젝트입니다. 사용자들이 쉽게 스터디를 개설하고 참여할 수 있는 직관적인 플랫폼을 목표로 개발했습니다.</p>

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
              <li><strong>Database:</strong> Oracle DB를 활용한 데이터 관리 및 최적화</li>
              <li><strong>Styling:</strong> Tailwind CSS로 일관성 있는 반응형 UI 구현</li>
              <li><strong>Mobile:</strong> Flutter를 활용한 크로스 플랫폼 모바일 앱 개발</li>
              <li><strong>라우팅:</strong> React Router를 통한 SPA 네비게이션</li>
            </ul>

            <h3>팀 협업 및 역할</h3>
            <ul>
              <li>6인 팀 프로젝트로 프론트엔드, 백엔드, 모바일 개발 영역 분담</li>
              <li>Git을 활용한 협업 워크플로우 및 코드 리뷰 프로세스 구축</li>
              <li>Agile 방법론을 적용한 스프린트 기반 개발 진행</li>
              <li>API 문서화 및 팀 간 소통을 위한 협업 도구 활용</li>
            </ul>

            <h3>배포 및 운영</h3>
            <ul>
              <li>CI/CD 파이프라인 구축을 통한 자동화된 빌드 및 배포</li>
              <li>클라우드 환경에서의 서버 운영 및 모니터링</li>
              <li>데이터베이스 성능 최적화 및 백업 전략 수립</li>
            </ul>

            <h3>프로젝트를 통해 얻은 경험</h3>
            <p>대규모 팀 프로젝트를 통해 실무와 유사한 개발 환경에서의 협업 경험을 쌓을 수 있었습니다. 특히 프론트엔드와 백엔드 간의 API 연동, 상태 관리, 그리고 사용자 경험을 고려한 인터페이스 설계에 대한 깊은 이해를 얻었습니다.</p>

            <p><a href="https://github.com/hyunsupLee/react-study-o" target="_blank">GitHub 저장소 바로가기</a></p>
          </div>
        )}

        {/* Ashley README */}
        {openModal === 'ashley' && (
          <div className='modal-content-wrapper'>
            <h2>Ashley 브랜드 클론 기반 리디자인 코딩</h2>
            <p><strong>제작 기간:</strong> 2024.06 (캡스톤 프로젝트)</p>
            <p><strong>소개:</strong> Ashley 가구 브랜드의 공식 웹사이트를 분석하고 전체적인 구조와 UI를 새롭게 리디자인한 캡스톤 프로젝트입니다. 기존 사이트의 장점을 유지하면서 더 나은 사용자 경험을 제공하는 것을 목표로 했습니다.</p>

            <h3>프로젝트 배경</h3>
            <p>Ashley Furniture의 기존 웹사이트를 철저히 분석하여 사용성 개선점을 찾고, 이를 바탕으로 전면적인 리디자인을 진행했습니다. 가구 브랜드의 특성을 살린 시각적 매력과 직관적인 네비게이션 구조에 중점을 두었습니다.</p>

            <h3>주요 개선사항</h3>
            <ul>
              <li>기존 사이트 대비 향상된 시각적 계층 구조 및 타이포그래피</li>
              <li>가구 제품의 특성을 살린 고품질 이미지 레이아웃 최적화</li>
              <li>사용자 친화적인 제품 카테고리 분류 및 네비게이션 개선</li>
              <li>모바일과 데스크톱 환경 모두를 고려한 반응형 디자인</li>
              <li>브랜드 아이덴티티를 강화하는 색상 팔레트 및 디자인 요소 적용</li>
            </ul>

            <h3>기술적 구현</h3>
            <ul>
              <li>시멘틱 HTML을 활용한 구조적이고 접근성 높은 마크업</li>
              <li>CSS Grid와 Flexbox를 조합한 복잡한 레이아웃 구현</li>
              <li>CSS 애니메이션과 트랜지션을 활용한 인터랙티브 요소</li>
              <li>JavaScript를 통한 동적 콘텐츠 표시 및 사용자 인터랙션</li>
              <li>크로스 브라우저 호환성을 고려한 안정적인 코드 작성</li>
            </ul>

            <h3>캡스톤 프로젝트로서의 의미</h3>
            <p>실제 기업의 웹사이트를 분석하고 개선하는 과정을 통해 상용 웹사이트 개발에 필요한 전반적인 기술과 사용자 경험 설계 능력을 기를 수 있었습니다. 또한 브랜드 가이드라인을 준수하면서도 창의적인 해결책을 제시하는 능력을 개발했습니다.</p>

            <p><a href="https://yuseon4455.github.io/Ashley/" target="_blank">사이트 바로가기</a></p>
          </div>
        )}

        {/* 20th Century README */}
        {openModal === '20century' && (
          <div className='modal-content-wrapper'>
            <h2>20세기 테마 웹사이트 - README</h2>
            <p><strong>제작 기간:</strong> 2022.06 (5인 팀 프로젝트)</p>
            <p><strong>소개:</strong> 20세기를 테마로 한 영화 소개 웹사이트입니다. 모바일 앱 UI를 웹으로 구현하여 사용자 친화적인 인터페이스로 영화 정보를 제공합니다.</p>

            <h3>프로젝트 배경</h3>
            <p>20세기의 클래식 영화들을 소개하는 정적 웹사이트를 제작했습니다. 모바일 앱의 직관적인 UI/UX를 웹 환경에 적용하여 사용자가 쉽게 영화 정보를 탐색할 수 있도록 설계했습니다.</p>

            <h3>주요 기능</h3>
            <ul>
              <li>20세기 클래식 영화들의 정보를 카드 형태로 구성한 리스트 페이지</li>
              <li>각 영화별 상세 정보 페이지 (줄거리, 출연진, 제작 정보 등)</li>
              <li>모바일 앱 스타일의 직관적인 네비게이션 구조</li>
              <li>간결하고 세련된 디자인으로 콘텐츠에 집중할 수 있는 레이아웃</li>
              <li>반응형 웹디자인으로 다양한 디바이스에서 최적화된 viewing 경험</li>
            </ul>

            <h3>기술적 특징</h3>
            <ul>
              <li>순수 HTML, CSS, JavaScript만을 사용한 가벼운 정적 사이트</li>
              <li>CSS Grid와 Flexbox를 활용한 반응형 레이아웃 구현</li>
              <li>JavaScript를 통한 동적 콘텐츠 로딩 및 사용자 인터랙션</li>
              <li>모바일 퍼스트 접근 방식으로 설계된 UI/UX</li>
            </ul>

            <h3>배운 점</h3>
            <p>팀 프로젝트를 통해 협업 능력을 기르고, 모바일 앱의 사용성을 웹에 적용하는 경험을 쌓을 수 있었습니다. 또한 콘텐츠 중심의 웹사이트 설계와 사용자 경험 최적화에 대해 깊이 있게 학습했습니다.</p>

            <p><a href="https://yuseon4455.github.io/20cs/" target="_blank">사이트 바로가기</a></p>
          </div>
        )}

        {/* Animal Hospital README */}
        {openModal === 'animal' && (
          <div className='modal-content-wrapper'>
            <h2>동물병원 협회 웹사이트 - README</h2>
            <p><strong>제작 기간:</strong> 2022.08 (5인 팀 프로젝트)</p>
            <p><strong>소개:</strong> HTML, CSS, JavaScript, jQuery를 활용해 동물병원 협회 웹사이트를 정적 페이지로 구현한 프로젝트입니다. 기존 협회 웹사이트의 구조를 분석하고 사용자 경험을 개선한 리디자인 작업을 진행했습니다.</p>

            <h3>프로젝트 배경</h3>
            <p>실제 동물병원 협회 홈페이지의 구조 및 콘텐츠를 기반으로 클론 및 개선 작업을 진행했습니다. 협회의 정체성을 유지하면서도 더 나은 사용자 경험을 제공하는 웹사이트 구축을 목표로 했습니다.</p>

            <h3>주요 기능 및 페이지</h3>
            <ul>
              <li><strong>메인 페이지:</strong> 협회 소개 및 주요 공지사항 하이라이트</li>
              <li><strong>협회 소개:</strong> 인사말, 설립 목적, 연혁 등 협회 정보</li>
              <li><strong>공지사항:</strong> 협회 공지 및 업데이트 정보 게시판</li>
              <li><strong>자료실:</strong> 관련 문서 및 자료 다운로드 센터</li>
              <li><strong>회원 병원:</strong> 협회 소속 동물병원 정보 및 찾기 서비스</li>
              <li><strong>교육 프로그램:</strong> 수의사 대상 교육 과정 안내</li>
            </ul>

            <h3>기술적 구현</h3>
            <ul>
              <li><strong>시멘틱 HTML:</strong> 구조적이고 접근성 높은 마크업 구성</li>
              <li><strong>반응형 CSS:</strong> 모바일, 태블릿, 데스크톱 모든 환경 대응</li>
              <li><strong>jQuery 활용:</strong> 탭 전환, 슬라이더, 드롭다운 메뉴 등 인터랙티브 요소</li>
              <li><strong>크로스 브라우저:</strong> 다양한 브라우저에서 일관된 화면 제공</li>
              <li><strong>최적화:</strong> 이미지 압축 및 코드 최적화로 빠른 로딩 속도 구현</li>
            </ul>

            <h3>디자인 개선사항</h3>
            <ul>
              <li>기존 사이트 대비 향상된 시각적 계층 구조</li>
              <li>협회의 전문성을 나타내는 색상 팔레트 적용</li>
              <li>사용자 친화적인 내비게이션 구조 개선</li>
              <li>가독성을 고려한 타이포그래피 및 레이아웃 설계</li>
              <li>모바일 우선 접근 방식의 반응형 디자인</li>
            </ul>

            <h3>반응형 웹디자인</h3>
            <ul>
              <li><strong>Mobile First:</strong> 모바일 환경을 우선으로 설계</li>
              <li><strong>Flexible Grid:</strong> 유연한 그리드 시스템으로 다양한 화면 크기 대응</li>
              <li><strong>Media Queries:</strong> 디바이스별 최적화된 레이아웃 제공</li>
              <li><strong>Touch Friendly:</strong> 터치 기반 디바이스에 최적화된 UI 요소</li>
            </ul>

            <h3>팀 협업 경험</h3>
            <ul>
              <li>5인 팀으로 페이지별 역할 분담 및 협업</li>
              <li>Git을 활용한 버전 관리 및 브랜치 전략</li>
              <li>코드 리뷰를 통한 품질 관리 및 학습</li>
              <li>디자인 가이드라인 수립 및 일관성 유지</li>
            </ul>

            <h3>프로젝트를 통해 배운 점</h3>
            <p>웹 퍼블리싱의 기초를 다지고, 팀워크를 통한 협업 능력을 기를 수 있었던 의미 있는 프로젝트였습니다. 특히 실제 존재하는 웹사이트를 분석하고 개선하는 과정에서 사용자 중심의 웹 개발 사고방식을 기를 수 있었으며, jQuery를 활용한 동적 요소 구현 경험을 쌓을 수 있었습니다.</p>

            <p><a href="https://yuseon4455.github.io/aniimal-project/" target="_blank">사이트 바로가기</a></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadmeModal;