import React from 'react';
import { HiArrowNarrowDown } from 'react-icons/hi';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';
import Resume from './Resume';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      {/* Home section */}
      <div
        id="home"
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-24 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience in web development. Currently, I love
            to work on web application using technologies like
            React.js/Javascript, HTML/CSS, Tailwind CSS, Express and Node.
          </p>
          <div>
            <a
              href="#about"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowDown size={25} className="ml-3" />
              </span>
            </a>
          </div>
          <div>
            <a
              href="#skills"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Skills
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowDown size={25} className="ml-3" />
              </span>
            </a>
          </div>
          <div>
            <a
              href="#projects"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowDown size={25} className="ml-3" />
              </span>
            </a>
          </div>
          <div>
            <a
              href="#contact"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Contact Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowDown size={25} className="ml-3" />
              </span>
            </a>
          </div>
          <div>
            <a
              href="#resume"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowDown size={25} className="ml-3" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div id="about" className="section">
        <About />
      </div>
      <div id="skills" className="section">
        <Skills />
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
      <div id="resume" className="section">
        <Resume />
      </div>
    </div>
  );
};

export default Home;
