import React from "react";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Portfolios from "./PortfolioSection";
import Skills from "./Skills";

export default function App() {
  return(
    <div className="main">
      <div className="navbar_and_hero">
        <Navbar />
        <div className="hero_section">
          <h1>Hi, I am <span>Daut Sadykov</span></h1>
          <p>I am a frontend web developer. I can provide clean code and pixel perfect design. <br/>I also make website more & more interactive with web animations.</p>
          <div className="social_links">
            <a href="https://t.me/daut_s"><img src="telegram_icon.svg" alt="telegram_icon" /></a>
            <a href="https://github.com/DautSadykov"><img src="github_icon.png" alt="github_icon" /></a>
            <a href="https://instagram.com/dauttt.s"><img src="inst_icon.svg" alt="inst_icon" /></a>
          </div>
        </div>
      </div>
      <AboutMe />
      <Portfolios />
      <Skills />
    </div>
  )
}