import React from 'react';
import './style.css';

const Modeling3D = () => {
  const characters = [
    { id: 1, name: "공강", image: "./images/1.png" },
    { id: 2, name: "종강", image: "./images/2.png" },
    { id: 3, name: "개강", image: "./images/3.png" },
    { id: 4, name: "휴강", image: "./images/4.png" },
    { id: 5, name: "시험 범위", image: "./images/5.png" },
    { id: 6, name: "시험", image: "./images/6.png" },
    { id: 7, name: "발표", image: "./images/7.png" },
    { id: 8, name: "지각", image: "./images/8.png" },
    { id: 9, name: "교수님", image: "./images/9.png" },
    { id: 10, name: "피곤", image: "./images/11.png" },
    { id: 11, name: "종강(신난버전)", image: "./images/10.png" },
    { id: 12, name: "휴학", image: "./images/12.png" },
    { id: 13, name: "성적", image: "./images/13.png" },
    { id: 14, name: "수강신청", image: "./images/14.png" },
    { id: 15, name: "시간", image: "./images/15.png" },
    { id: 16, name: "밥", image: "./images/16.png" },
    { id: 17, name: "비타민", image: "./images/17.png" },
    { id: 18, name: "통학", image: "./images/18.png" },
    { id: 19, name: "집", image: "./images/19.png" },
    { id: 20, name: "포기", image: "./images/20.png" },
    { id: 21, name: "이해불가", image: "./images/21.png" },
    { id: 22, name: "공부", image: "./images/22.png" },
    { id: 23, name: "망했다", image: "./images/23.png" },
    { id: 24, name: "월요병", image: "./images/24.png" },
    { id: 25, name: "취업", image: "./images/25.png" },
    { id: 26, name: "학교", image: "./images/26.png" },
    { id: 27, name: "할 일", image: "./images/27.png" },
  ];

  return (
    <section className="page page-04 active" id="page-04">
      <div className="section-header">
        <h1 className="section-title">3D MODELING</h1>
        <p className="section-subtitle">대학생활로 인해 팍다가 되어버린 북극이</p>
      </div>

      <div className="gallery-grid">
        {characters.map((character) => (
          <div className="gallery-item" key={character.id}>
            <div className="image-wrapper">
              <img src={character.image} alt={character.name} />
              <div className="overlay">
                <div className="char-num">캐릭터 {character.id}</div>
                <div className="char-title">{character.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modeling3D;