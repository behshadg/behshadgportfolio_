import React from 'react';

const ProgressBar = ({ level }) => {
  return (
    <div className="bg-gray-700 rounded-full h-5 w-full overflow-hidden">
      <div
        className="bg-gradient-to-r from-cyan-400 to-blue-600 h-full rounded-full animate-progress"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  );
};

const skills = [
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 90,
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    level: 85,
  },
  {
    name: 'JAVASCRIPT',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 80,
  },
  {
    name: 'REACT',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    level: 75,
  },
  {
    name: 'GITHUB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    level: 90,
  },
  {
    name: 'NODE.JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    level: 70,
  },
  {
    name: 'EXPRESS.JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    level: 65,
  },
  {
    name: 'MONGODB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    level: 60,
  },
  {
    name: 'POSTGRES',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    level: 55,
  },
  {
    name: 'GIT',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    level: 85,
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center">
            Skills
          </p>
          <p className="py-4 text-2xl">
            I enjoy diving into and learning new things. Here's a list of
            technologies I've worked with more to add in the near future:
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg p-4"
            >
              <img src={skill.icon} alt={skill.name} className="w-20 mx-auto" />
              <p className="my-4 text-lg font-semibold">{skill.name}</p>
              <ProgressBar level={skill.level} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
