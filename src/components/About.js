import React, { useEffect } from 'react';
import '../styles/About.css';

function About() {

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById('about-me');
      const rect = aboutMeSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        aboutMeSection.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div id="about-me" className="about-container">
      <h1>About Me</h1>
      <div className="content">
        <p>
          Hello! I'm Tiago , a recent graduate in Computer Engineering. 
          My passion for technology and coding started when I was in high school, and since then, 
          I have developed a strong interest in web development and software engineering.
        </p>
        <p>
          Throughout my academic journey, I have gained experience in various programming languages 
          such as JavaScript, Python, and Java. I have also worked on several projects involving 
          web development using frameworks like React, Bootstrap and Express.js. 
        </p>
        <p>
          When I'm not coding, you can find me playing video games, or watching movies/series. I'm currently looking for my first job opportunity.
        </p>
        <p>
          Feel free to check out my projects below, and don't hesitate to contact me if you have any questions or would like to collaborate!
        </p>
      </div>
    </div>
  );
}

export default About;
