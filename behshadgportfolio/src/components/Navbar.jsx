import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Navbar.css'; // Import custom CSS file for navbar styling

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            activeClassName="active-link"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={location.pathname === '/projects' ? 'active' : ''}
            activeClassName="active-link"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
            activeClassName="active-link"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className={location.pathname === '/skills' ? 'active' : ''}
            activeClassName="active-link"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
            activeClassName="active-link"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
