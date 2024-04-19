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
                A classic Tic Tac Toe game built with HTML, CSS, and JavaScript.
                Built with React
              </p>
              <div className="pt-8 text-center">
                <a href="https://behshadg-tictactoe.netlify.app">
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

// import React from 'react';

// function Projects() {
//   const projects = [
//     {
//       name: 'Tic Tac Toe Game',
//       description:
//         'A classic Tic Tac Toe game built with HTML, CSS, and JavaScript.',
//       technologies: ['HTML', 'CSS', 'JavaScript'],
//       githubLink: 'https://github.com/behshadg/Tic-Tac-Toe-Game',
//       liveLink: 'https://behshadg-tictactoe.netlify.app',
//       image: 'https://via.placeholder.com/300x200',
//     },
//     {
//       name: 'Random Password Generator',
//       description:
//         'a simple web application that allows users to generate strong, random passwords based on their preferences. Users can specify the length of the password and choose whether to include uppercase letters, lowercase letters, numbers, and special characters.',
//       technologies: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'Tailwind CSS',
//         'React',
//         'Vite',
//       ],
//       githubLink: 'https://github.com/behshadg/RandomPWGen',
//       liveLink: 'https://behshadg-randompwgen.netlify.app/',
//       image: 'https://via.placeholder.com/300x200',
//     },
//     {
//       name: 'Weather App',
//       description:
//         'A weather app that fetches real-time weather data using an API.',
//       technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
//       githubLink: 'https://github.com/behshadg/Weather-App',
//       liveLink: 'https://behshadg-weatherapp.netlify.app',
//       image: 'https://via.placeholder.com/300x200',
//     },
//     {
//       name: 'Note Taker',
//       description:
//         'A simple note-taking application built with Express.js and Node.js.',
//       technologies: ['HTML', 'CSS', 'JavaScript', 'Express.js', 'Node.js'],
//       githubLink: 'https://github.com/behshadg/Note-Taker',
//       liveLink: 'https://behshadg-notetaker.netlify.app',
//       image: 'https://via.placeholder.com/300x200',
//     },
//     {
//       name: 'E-Commerce App',
//       description:
//         'A basic e-commerce application with shopping cart functionality.',
//       technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       githubLink: 'https://github.com/behshadg/E-Commerce-App',
//       liveLink: 'https://behshadg-ecommerceapp.netlify.app',
//       image: 'https://via.placeholder.com/300x200',
//     },
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8">Projects</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg overflow-hidden"
//             >
//               <img src={project.image} alt={project.name} />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
//                 <p className="text-gray-700 mb-4">{project.description}</p>
//                 <p className="text-sm text-gray-600">
//                   <strong>Technologies:</strong>{' '}
//                   {project.technologies.join(', ')}
//                 </p>
//                 <div className="flex mt-4">
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="mr-4 text-blue-500 hover:underline"
//                   >
//                     GitHub
//                   </a>
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-blue-500 hover:underline"
//                   >
//                     Live Site
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Projects;
