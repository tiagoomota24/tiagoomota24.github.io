import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import project1 from '../assets/Foto_ssg.PNG';
import project2 from '../assets/SuecaCounter.PNG';
import project3 from '../assets/Foto_smart.PNG';
import project4 from '../assets/Foto_pass.PNG';
import '../styles/Projects.css';

const projects = [
    {
      title: "SSG - Serious Games",
      description: "The SSG - Serious Games website was developed with the aim of promoting learning in a playful and interactive way. The website features various educational games for students and everyone who wants to learn, covering topics such as Phishing, Ransomware, Spyware among others. The project was developed using React.js, Node.js, Express.js, and Mysql.",
      image: project1,
      github: "https://github.com/tiagoomota24/SSG",
      demo: "https://ssg-client.onrender.com/"
    },
    {
      title: "Sueca Counter",
      description: "Sueca Counter is a web application that allows users to keep track of the score of the Sueca card game. The project was developed using Kotlin and Firebase.",
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
  ];

function Projects() {
  return (
    <div className="projects-container">
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