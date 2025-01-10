import React, { useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import project1 from '../assets/Foto_ssg.PNG';
import project2 from '../assets/SuecaCounter.PNG';
import project3 from '../assets/Foto_smart.PNG';
import project4 from '../assets/Foto_pass.PNG';
import project5 from '../assets/Foto_portfolio.PNG';
import project6 from '../assets/Foto_todoapp.PNG';
import project7 from '../assets/AluguerVeiculo.PNG';

import '../styles/Projects.css';

const projects = [
    {
      title: "SSG - Serious Games",
      description: "The SSG - Serious Games website was developed with the aim of promoting learning in a playful and interactive way. The website features various educational games for students and everyone who wants to learn, covering topics such as Phishing, Ransomware, Spyware among others. The project was developed using React.js, Node.js, Express.js, Mysql, with Sequelize for ORM, axios for requests, and JSON WEB TOKEN for secure authentication.",
      image: project1,
      github: "https://github.com/tiagoomota24/SSG",
      demo: "https://ssg-client.onrender.com/"
    },
    {
      title: "Sueca Counter",
      description: "Sueca Counter is a mobile application that allows users to keep track of the score of the Sueca card game. The project was developed using Kotlin and Firebase.",
      image: project2,
      github: "https://github.com/tiagoomota24/SuecaCounter",
    },
    {
      title: "SmartGreenHouse",
      description: "The Smart Greenhouse project aims to remotely monitor and control temperature and humidity within a greenhouse using a microcontroller (ESP8266), a temperature and humidity sensor (DHT11), and a fan with heating elements. Data is transmitted via Wi-Fi to a remote server, allowing real-time monitoring and control through a web interface. The project utilizes technologies such as Node.js, Express.js, and various Arduino libraries.",
      image: project3,
      github: "https://github.com/tiagoomota24/SSG",
      demo: "https://greenhouse-controller.onrender.com/"
    },
    {
      title: "Password Generator",
      description: "The Password Generator is a web application that allows users to generate a random password based on their preferences. The project was developed using HTML, CSS, and JavaScript.",
      image: project4,
      github: "https://github.com/tiagoomota24/password-generator",
      demo: "https://tiagoomota24.github.io/password-generator/"
    },
    {
      title: "My Website",
      description: "This portfolio website was developed using React and showcases my projects, skills, and personal information",
      image: project5,
      github: "https://github.com/tiagoomota24/tiagoomota24.github.io",
      demo: "https://tiagoomota24.github.io/"
    },
    {
      title: "ToDoWebAPP",
      description: "ToDoWebAPP is a web application built using React. It allows users to add, edit, and delete tasks, offering an interactive way to manage a list of to-do items.",
      image: project6,
      github: "https://github.com/tiagoomota24/TodoWebAPP",
      demo: "https://todowebapp-b2b0.onrender.com/"
    },
    {
      title: "Aluguer de Veículos",
      description: "A web application for managing vehicle rentals, allowing you to efficiently create, view, and manage rental contracts.",
      image: project7,
      github: "https://github.com/tiagoomota24/AluguerVeiculos"
    }
  ];

function Projects() {

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById('project-fade');
      const rect = aboutMeSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        aboutMeSection.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="project-fade" className="projects-container">
    <h1>Projects</h1>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} className="project-image" />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub /> 
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> 
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Projects