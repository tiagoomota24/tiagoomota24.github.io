// src/components/Home.js
import React from 'react';
import profilePic from '../assets/Foto_perfil.png';
import '../styles/Home.css';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";

function Home() {

  const scrollToAboutMe = () => {
    document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="home-container">
      <div className="profile">
        <img src={profilePic} alt="Tiago Mota" className="profile-pic" />
      </div>
      <div className="intro">
        <p className="greeting">Hello, I'm</p>
        <h1 className="name">Tiago Mota</h1>
        <p className="profession">Software Engineering </p>
        <div className="buttons">
        <a href="/Tiago mot.pdf" className="btn btn-primary" /* download */>Download CV</a>
        <a href="mailto:tiago.cmota@hotmail.com" className="btn btn-secondary">Contact Info</a>
        </div>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/tiagocmota/" className="social-link"><FaLinkedin /></a>
            <a href="https://github.com/tiagoomota24" className="social-link"><FaGithub /></a>
        </div>
      </div>
      <div className="arrow-down">
      <button onClick={scrollToAboutMe} className="arrow-btn">
          <FaCircleArrowDown />
        </button>
      </div>
    </div>
  );
}

export default Home;
