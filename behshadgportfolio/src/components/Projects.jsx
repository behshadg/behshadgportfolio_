import React from 'react';
const Projects = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Work
          </p>
          <p className="py-6 text-2xl">
            Check out some of my most recent work (hover over each box to
            reveal)
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProjectItem
            title={'Travel App'}
            desc={
              'A beautiful fabricated travel site landing page demonstrating creation of responsive UI/UX website. Built with React, Next.js and Tailwind CSS'
            }
            demoLink={'https://behshadg-travelsite.netlify.app/'}
            codeLink={'https://github.com/behshadg/Travel-Site'}
          ></ProjectItem>
          {/* <ProjectItem
            title={'Banking App'}
            desc={
              'A classic Tic Tac Toe game made with HTML, CSS, and JavaScript. Built with React'
            }
            demoLink={'https://behshadg-tictactoe.netlify.app/'}
            codeLink={'https://github.com/behshadg/Tic-Tac-Toe-Game'}
          ></ProjectItem>
          <ProjectItem
            title={'Tic-Tac-Toe Game'}
            desc={
              'A classic Tic Tac Toe game made with HTML, CSS, and JavaScript. Built with React'
            }
            demoLink={'https://behshadg-tictactoe.netlify.app/'}
            codeLink={'https://github.com/behshadg/Tic-Tac-Toe-Game'}
          ></ProjectItem> */}
          <ProjectItem
            title={'Tic-Tac-Toe Game'}
            desc={
              'A classic Tic Tac Toe game made with HTML, CSS, and JavaScript. Built with React'
            }
            demoLink={'https://behshadg-tictactoe.netlify.app/'}
            codeLink={'https://github.com/behshadg/Tic-Tac-Toe-Game'}
          ></ProjectItem>
          <ProjectItem
            title={'Random Password Generator'}
            desc={
              'A simple web application that allows users to generate strong, random passwords based on their preferences. Built on React w/JavaScript, HTML and Tailwind CSS'
            }
            demoLink={'https://behshadg-randompwgen.netlify.app/'}
            codeLink={'https://github.com/behshadg/RandomPWGen'}
          ></ProjectItem>
          <ProjectItem
            title={'Weather App'}
            desc={
              'A weather app that fetches real-time weather data using an API. Built on React w/ Javascript, HTML/CSS, API'
            }
            demoLink={'https://behshadg-weatherapp.netlify.app'}
            codeLink={'https://github.com/behshadg/Weather-App'}
          ></ProjectItem>
        </div>
      </div>
    </div>
  );
};

function ProjectItem({ title, desc, demoLink, codeLink }) {
  return (
    <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div transform transition hover:scale-110">
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
        <span className=" text-lg font-bold text-white tracking-wider">
          {title}
        </span>
        <p className="text-center">{desc}</p>
        <div className="pt-8 text-center">
          <a href={demoLink} target="_blank">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Demo
            </button>
          </a>
          <a href={codeLink} target="_blank">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Projects;
