import React, { useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./portfolio/home";
import About from "./portfolio/about";
import Skills from "./portfolio/skills";
import Education from "./portfolio/education";
import Project from "./portfolio/project";
import Modeling3D from "./portfolio/3d-modeling";
import './portfolio/style.css';

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "education":
        return <Education />;
      case "project":
        return <Project />;
      case "3d":
        return <Modeling3D />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <div className="portfolio-container">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="content-area">
          {renderContent()}
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;