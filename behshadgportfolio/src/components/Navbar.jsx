import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  return (
    <header
      className={`fixed w-full h-20 z-50 ${shadow ? 'bg-[#0a192f]/90 backdrop-blur-sm shadow-xl' : 'bg-[#0a192f]'} transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex justify-between items-center px-4 2xl:px-16">
        <Link to="/">
          <h1 className="text-cyan-500 text-3xl font-bold tracking-wider">
            BG<span className="text-white">DEV</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:text-cyan-500 transition-colors duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:text-cyan-500 transition-colors duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:text-cyan-500 transition-colors duration-300">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:text-cyan-500 transition-colors duration-300">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:text-cyan-500 transition-colors duration-300">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:text-cyan-500 transition-colors duration-300">
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Icon */}
        <div
          onClick={handleNav}
          className="md:hidden cursor-pointer p-2 hover:bg-cyan-500/20 rounded-full transition-all duration-300"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed left-0 top-0 w-full h-screen bg-black/70 backdrop-blur-sm ${nav ? 'block' : 'hidden'} md:hidden`}
      >
        <div
          className={`fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0a192f] p-10 ease-in duration-500 ${nav ? 'left-0' : 'left-[-100%]'}`}
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h1 className="text-cyan-500 text-3xl font-bold tracking-wider">
                BG<span className="text-white">DEV</span>
              </h1>
              <div
                onClick={handleNav}
                className="p-3 rounded-full shadow-lg bg-cyan-500/20 cursor-pointer"
              >
                <FaTimes size={18} />
              </div>
            </div>
            <div className="border-b border-gray-700 my-4">
              <p className="py-4 text-gray-400">
                Let's build something amazing together
              </p>
            </div>
          </div>
          <nav className="py-4 flex flex-col">
            <ul>
              <li
                onClick={() => setNav(false)}
                className="py-4 hover:text-cyan-500 transition-colors duration-300"
              >
                <Link to="/">Home</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 hover:text-cyan-500 transition-colors duration-300"
              >
                <Link to="/about">About</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 hover:text-cyan-500 transition-colors duration-300"
              >
                <Link to="/skills">Skills</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 hover:text-cyan-500 transition-colors duration-300"
              >
                <Link to="/projects">Projects</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 hover:text-cyan-500 transition-colors duration-300"
              >
                <Link to="/contact">Contact</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 hover:text-cyan-500 transition-colors duration-300"
              >
                <Link to="/resume">Resume</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
