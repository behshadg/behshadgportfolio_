// import React from 'react';

// const projects = [
//   {
//     id: 1,
//     title: 'Tic-Tac-Toe Game',
//     description:
//       'A classic Tic Tac Toe game made with HTML, CSS, and JavaScript. Built with React',
//     image: 'https://via.placeholder.com/300', // Replace with your project image URL
//     demoLink: 'https://behshadg-tictactoe.netlify.app',
//     codeLink: 'https://github.com/behshadg/Tic-Tac-Toe-Game',
//   },
//   {
//     id: 2,
//     title: 'Random Password Generator',
//     description:
//       'A simple web application that allows users to generate strong, random passwords based on their preferences. Built on React w/ JavaScript, HTML/CSS and Tailwind CSS',
//     image: 'https://via.placeholder.com/300', // Replace with your project image URL
//     demoLink: 'https://behshadg-randompwgen.netlify.app/',
//     codeLink: 'https://github.com/behshadg/RandomPWGen',
//   },
//   {
//     id: 3,
//     title: 'Weather App',
//     description:
//       'A weather app that fetches real-time weather data using an API. Built on React w/ JavaScript, HTML/CSS',
//     image: 'https://via.placeholder.com/300', // Replace with your project image URL
//     demoLink: 'https://behshadg-weatherapp.netlify.app',
//     codeLink: 'https://github.com/behshadg/Weather-App',
//   },
//   {
//     id: 4,
//     title: 'CBT Application',
//     description: 'A CBT web application built with React and MongoDB',
//     image: 'https://via.placeholder.com/300', // Replace with your project image URL
//     demoLink: '/',
//     codeLink: '/',
//   },
//   // Add more projects as needed
// ];

// const Projects = () => {
//   return (
//     <div id="projects" className="w-full h-screen bg-[#0a192f] text-gray-300">
//       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
//         <div className="w-full flex justify-center items-center flex-col mb-7">
//           <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center">
//             Projects
//           </p>
//           <p className="py-4 text-2xl">Check out some of my recent projects</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {projects.map(
//             ({ id, title, description, image, demoLink, codeLink }) => (
//               <div
//                 key={id}
//                 className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
//               >
//                 <img src={image} alt={title} className="rounded-t-lg" />
//                 <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col p-4">
//                   <h3 className="text-2xl font-semibold mb-2">{title}</h3>
//                   <p className="text-gray-400 mb-4">{description}</p>
//                   <div className="flex justify-between">
//                     <a
//                       href={demoLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-7 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
//                     >
//                       Demo
//                     </a>
//                     <a
//                       href={codeLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-7 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
//                     >
//                       Code
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from 'react';
const Projects = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Work
          </p>
          <p className="py-6 text-2xl">Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Tic-Tac-Toe Game
              </span>
              <p className="text-center">
                A classic Tic Tac Toe game made with HTML, CSS, and JavaScript.
                Built with React
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://behshadg-tictactoe.netlify.app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/behshadg/Tic-Tac-Toe-Game"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Random Password Generator
              </span>
              <p className="text-center">
                A simple web application that allows users to generate strong,
                random passwords based on their preferences. Built on React w/
                JavaScript, HTML/CSS andTailwind CSS
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://behshadg-randompwgen.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/behshadg/RandomPWGen"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Weather App
              </span>
              <p className="text-center">
                A weather app that fetches real-time weather data using an API.
                Built on React w/ Javascript, HTML/CSS, API
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://behshadg-weatherapp.netlify.app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/behshadg/Weather-App"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                CBT Application
              </span>
              <p className="text-center">
                A CBT web application built with React and Mongodb
              </p>
              <div className="pt-8 text-center">
                <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                CBT Application
              </span>
              <p className="text-center">
                A CBT web application built with React and Mongodb
              </p>
              <div className="pt-8 text-center">
                <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                CBT Application
              </span>
              <p className="text-center">
                A CBT web application built with React and Mongodb
              </p>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
