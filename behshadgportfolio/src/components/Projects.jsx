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
      name: 'Random Password Generator',
      description:
        'a simple web application that allows users to generate strong, random passwords based on their preferences. Users can specify the length of the password and choose whether to include uppercase letters, lowercase letters, numbers, and special characters.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Tailwind CSS',
        'React',
        'Vite',
      ],
      githubLink: 'https://github.com/behshadg/RandomPWGen',
      liveLink: 'https://behshadg-randompwgen.netlify.app/',
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
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={project.image} alt={project.name} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-sm text-gray-600">
                  <strong>Technologies:</strong>{' '}
                  {project.technologies.join(', ')}
                </p>
                <div className="flex mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mr-4 text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
