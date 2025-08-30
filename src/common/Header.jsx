import React from 'react';
import "./Header.css";

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <header className="ys-head">
      <div className="ys-head-inner">
        <p className="head-p" onClick={() => setActiveTab("home")}>YS PORTFOLIO</p>
        <div className="folder-tabs">
          <button 
            className={`tab tab-01 ${activeTab === "about" ? "active" : ""}`} 
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button 
            className={`tab tab-02 ${activeTab === "skills" ? "active" : ""}`} 
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button 
            className={`tab tab-03 ${activeTab === "education" ? "active" : ""}`} 
            onClick={() => setActiveTab("education")}
          >
            Edu
          </button>
          <button 
            className={`tab tab-04 ${activeTab === "3d" ? "active" : ""}`} 
            onClick={() => setActiveTab("3d")}
          >
            3D
          </button>
          <button 
            className={`tab tab-05 ${activeTab === "project" ? "active" : ""}`} 
            onClick={() => setActiveTab("project")}
          >
            Project
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;