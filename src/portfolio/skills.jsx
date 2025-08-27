import React from 'react';
import './style.css';

const Skills = () => {
  return (
    <section className="page page-02 active" id="page-02">
      <h1 className="page3-h1">SKILLS</h1>
      
      <div className="skill-category">
        <div className="skill-inner">
          <h2>Frontend</h2>
          <div className="skill-grid">
            <div className="skill-card">
              <img src="./images/devicon_vitejs.png" alt="React" />
              <span>React</span>
            </div>
            <div className="skill-card">
              <img src="./images/vscode-icons_file-type-js-official.png" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="skill-card">
              <img src="./images/material-icon-theme_html.png" alt="HTML" />
              <span>HTML</span>
            </div>
            <div className="skill-card">
              <img src="./images/skill-icons_css.png" alt="CSS" />
              <span>CSS</span>
            </div>
            <div className="skill-card">
              <img src="./images/skill-icons_figma-light.png" alt="Figma" />
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>

      <div className="skill-category">
        <h2>Backend</h2>
        <div className="skill-inner">
          <div className="skill-grid">
            <div className="skill-card">
              <img src="./images/vscode-icons_file-type-java.png" alt="Java" />
              <span>Java</span>
            </div>
            <div className="skill-card">
              <img src="./images/skill-icons_spring-light.png" alt="Spring" />
              <span>Spring</span>
            </div>
            <div className="skill-card">
              <img src="./images/simple-icons_springboot.png" alt="Spring Boot" />
              <span>Spring Boot</span>
            </div>
            <div className="skill-card">
              <img src="./images/devicon_java.png" alt="JSP" />
              <span>JSP</span>
            </div>
          </div>
        </div>
      </div>

      <div className="skill-category">
        <h2>Tools</h2>
        <div className="skill-grid">
          <div className="skill-card">
            <img src="./images/skill-icons_aws-light.png" alt="AWS" />
            <span>AWS</span>
          </div>
          <div className="skill-card">
            <img src="./images/skill-icons_git.png" alt="Git" />
            <span>Git</span>
          </div>
          <div className="skill-card">
            <img src="./images/mdi_github.png" alt="GitHub" />
            <span>GitHub</span>
          </div>
          <div className="skill-card">
            <img src="./images/devicon_eclipse.png" alt="Eclipse" />
            <span>Eclipse</span>
          </div>
        </div>
      </div>

      <div className="skill-category">
        <h2>Database</h2>
        <div className="skill-grid">
          <div className="skill-card">
            <img src="./images/lineicons_oracle.png" alt="Oracle" />
            <span>Oracle</span>
          </div>
          <div className="skill-card">
            <img src="./images/skill-icons_supabase-light.png" alt="Supabase" />
            <span>Supabase</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;