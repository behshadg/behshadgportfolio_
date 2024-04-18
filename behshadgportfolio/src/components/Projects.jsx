import React from 'react';

function Projects() {
  const projects = [
    {
      name: 'Tic Tac Toe Game',
      description:
        'A classic Tic Tac Toe game built with HTML, CSS, and JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/behshadg/Tic-Tac-Toe-Game',
      liveLink: 'https://behshadg-tictactoe.netlify.app',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      name: 'Weather App',
      description:
        'A weather app that fetches real-time weather data using an API.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      githubLink: 'https://github.com/behshadg/Weather-App',
      liveLink: 'https://behshadg-weatherapp.netlify.app',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      name: 'Note Taker',
      description:
        'A simple note-taking application built with Express.js and Node.js.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Express.js', 'Node.js'],
      githubLink: 'https://github.com/behshadg/Note-Taker',
      liveLink: 'https://behshadg-notetaker.netlify.app',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      name: 'E-Commerce App',
      description:
        'A basic e-commerce application with shopping cart functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      githubLink: 'https://github.com/behshadg/E-Commerce-App',
      liveLink: 'https://behshadg-ecommerceapp.netlify.app',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.name} />
          <div className="project-info">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                Live Site
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
