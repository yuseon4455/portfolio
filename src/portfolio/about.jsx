import React from 'react';
import './style.css';

const About = () => {
  return (
    <div className="page page-01 active" id="page-01">
      <h1 className="about-h1">ABOUT ME</h1>
      <div className="about-grid">
        <div className="about-column">
          <img src="/images/myphoto.jpg" alt="프로필 사진" />
        </div>
        <div className="about-column">
          <div className="about-item">
            <div>
              <p className="about-p">이름</p>
              <p>백유선</p>
            </div>
          </div>
          <div className="about-item">
            <div>
              <p className="about-p">연락처</p>
              <p>010-7141-1607</p>
            </div>
          </div>
          <div className="about-item">
            <div>
              <p className="about-p">학력</p>
              <p>한양여자대학교<br />(소프트웨어융합학과)</p>
            </div>
          </div>
        </div>
        <div className="about-column">
          <div className="about-item">
            <div>
              <p className="about-p">생년월일</p>
              <p>2002.03.26</p>
            </div>
          </div>
          <div className="about-item">
            <div>
              <p className="about-p">이메일</p>
              <p>yuseon0344@naver.com</p>
            </div>
          </div>
          <div className="about-item">
            <div>
              <p className="about-p">자격증</p>
              <p>정보처리산업기사<br />ADsP<br />SQLD</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="archiving-section">
        <h1 className="archiving-title">ARCHIVING</h1>
        <div className="arch-grid">
          <div className="arch-git-card">
            <div className="arch-wrapper">
              <h3 className="card-title">GitHub</h3>
              <a 
                href="https://github.com/yuseon4455"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/yuseon4455
              </a>
              <p className="archiving-description">소스 코드 저장소</p>
            </div>
          </div>
          <div className="arch-blog-card">
            <div className="arch-wrapper">
              <h3 className="card-title">IT Blog</h3>
              <a 
                href="https://blog.naver.com/it_blog02"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://blog.naver.com/it_blog02
              </a>
              <p className="archiving-description">공부 및 지식 공유 목적의 블로그</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;