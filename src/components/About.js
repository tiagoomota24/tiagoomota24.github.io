import React, { useState } from 'react';
import '../styles/About.css';
import '../styles/Projects.css';
import '../styles/Contact.css';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import project1 from '../assets/Foto_ssg.PNG';
import project2 from '../assets/SuecaCounter.PNG';
import project3 from '../assets/Foto_smart.PNG';
import project4 from '../assets/Foto_pass.PNG';

// Exemplo de dados dos projetos
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

function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="content">
        <p>
          Hello! I'm Tiago Mota, a recent graduate in Computer Engineering. 
          My passion for technology and coding started when I was in high school, and since then, 
          I have developed a strong interest in web development and software engineering.
        </p>
        <p>
          Throughout my academic journey, I have gained experience in various programming languages 
          such as JavaScript, Python, and Java. I have also worked on several projects involving 
          web development using frameworks like React, Bootstrap and Express.js. 
        </p>
        <p>
          When I'm not coding, you can find me playing video games, or watching movies/series. I'm currtenly looking for my first job opportunity.
        </p>
        <p>
          Feel free to check out my projects below, and don't hesitate to contact me if you have any questions or would like to collaborate!
        </p>
      </div>
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
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">
            <FaUser className="icon" /> Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">
            <FaEnvelope className="icon" /> Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">
            <FaCommentDots className="icon" /> Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default About;
