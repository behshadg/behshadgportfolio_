import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Navbar.css'; // Import custom CSS file for navbar styling

function Navbar() {
  const location = useLocation();
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
      .then((response) => response.json())
      .then((data) => setApiMessage(data.message))
      .catch((error) => console.error('Error fetching message:', error));
  }, []);

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className={location.pathname === '/skills' ? 'active' : ''}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
