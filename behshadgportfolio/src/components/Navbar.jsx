// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import '../index.css';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);

//   return (
//     <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-white z-10">
//       <div>
//         <h1 className="text-4xl font-bold">Portfolio</h1>
//       </div>
//       {/* Menu */}
//       <ul className="hidden md:flex">
//         <li className="hover:text-blue-500 duration-300">
//           <Link to="/">Home</Link>
//         </li>
//         <li className="hover:text-blue-500 duration-300">
//           <Link to="/about">About</Link>
//         </li>
//         <li className="hover:text-blue-500 duration-300">
//           <Link to="/skills">Skills</Link>
//         </li>
//         <li className="hover:text-blue-500 duration-300">
//           <Link to="/projects">Projects</Link>
//         </li>
//         <li className="hover:text-blue-500 duration-300">
//           <Link to="/contact">Contact</Link>
//         </li>
//         <li className="hover:text-blue-500 duration-300">
//           <Link to="/resume">Resume</Link>
//         </li>
//       </ul>
//       {/* Hamburger */}
//       <div onClick={handleClick} className="md:hidden z-10">
//         {!nav ? (
//           <FaBars className="text-blue-500" />
//         ) : (
//           <FaTimes className="text-blue-500" />
//         )}
//       </div>
//       {/* Mobile Menu */}
//       <ul
//         className={
//           !nav
//             ? 'hidden'
//             : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'
//         }
//       >
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="/">
//             Home
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="/about">
//             About
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="/skills">
//             Skills
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="/projects">
//             Work
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="/contact">
//             Contact
//           </Link>
//         </li>
//         <li className="py-6 text-4xl">
//           <Link onClick={handleClick} to="/resume">
//             Resume
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
