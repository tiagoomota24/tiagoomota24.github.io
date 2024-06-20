import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
        <div className="social-links">
          <a href="https://github.com/tiagoomota24" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/tiagocmota/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <p>© 2024 Tiago Mota. All rights reserved.</p>
      </footer>
    );
    }

export default Footer;