// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Exemplo de dados dos projetos
const projects = [
  {
    title: "Projeto 1",
    description: "Descrição breve do Projeto 1.",
    image: "url-da-imagem-do-projeto-1.jpg",
    github: "https://github.com/seuusuario/projeto1",
    demo: "https://link-da-demo-projeto1.com"
  },
  {
    title: "Projeto 2",
    description: "Descrição breve do Projeto 2.",
    image: "url-da-imagem-do-projeto-2.jpg",
    github: "https://github.com/seuusuario/projeto2",
    demo: "https://link-da-demo-projeto2.com"
  },
  // Adicione mais projetos conforme necessário
];

function Projetos() {
  return (
    <div className="projects-container">
      <h1>Meus Projetos</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projetos;
