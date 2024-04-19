import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    console.log('Theme:', theme);
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
      <div>
        <h1 className="text-4xl font-bold text-[#ccd6f6]">Portfolio</h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-[#64ffda] duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-[#64ffda] duration-300">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-[#64ffda] duration-300">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="hover:text-[#64ffda] duration-300">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="hover:text-[#64ffda] duration-300">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:text-[#64ffda] duration-300">
          <Link to="/resume">Resume</Link>
        </li>
      </ul>

      {/* Light/Dark Mode Toggle Button */}
      <button
        onClick={toggleTheme}
        className="text-white ml-4 md:hidden"
        style={{ display: 'inline-block' }}
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="text-[#64ffda]" />
        ) : (
          <FaTimes className="text-[#64ffda]" />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/about">
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/skills">
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/projects">
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/contact">
            Contact
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/resume">
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
