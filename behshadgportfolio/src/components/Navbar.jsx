// import React from 'react';
// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../Navbar.css';

// function Navbar() {
//   const location = useLocation();
//   const [apiMessage, setApiMessage] = useState('');

//   useEffect(() => {
//     fetch('/api/message')
//       .then((response) => response.json())
//       .then((data) => setApiMessage(data.message))
//       .catch((error) => console.error('Error fetching message:', error));
//   }, []);

//   return (
//     <div className="navbar">
//       <ul>
//         <li>
//           <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/resume"
//             className={location.pathname === '/' ? 'active' : ''}
//           >
//             Resume
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/projects"
//             className={location.pathname === '/projects' ? 'active' : ''}
//           >
//             Projects
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/contact"
//             className={location.pathname === '/contact' ? 'active' : ''}
//           >
//             Contact
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/skills"
//             className={location.pathname === '/skills' ? 'active' : ''}
//           >
//             Skills
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/about"
//             className={location.pathname === '/about' ? 'active' : ''}
//           >
//             About
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
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
      </ul>
    </div>
  );
};

export default Navbar;
