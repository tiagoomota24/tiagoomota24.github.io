// src/components/Home.js
import React from 'react';
import profilePic from '../assets/Foto_perfil.png';
import '../styles/Home.css';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Home() {
  return (
    <div className="home-container">
      <div className="profile">
        <img src={profilePic} alt="John Doe" className="profile-pic" />
      </div>
      <div className="intro">
        <p className="greeting">Hello, I'm</p>
        <h1 className="name">Tiago Mota</h1>
        <p className="profession">Recent computer engineering graduate </p>
        <div className="buttons">
        <a href="/Tiago mota.pdf" className="btn btn-primary" download>Download CV</a>
        <a href="mailto:tiago.cmota@hotmail.com" className="btn btn-secondary">Contact Info</a>
        </div>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/tiagocmota/" className="social-link"><FaLinkedin /></a>
            <a href="https://github.com/tiagoomota24" className="social-link"><FaGithub /></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
