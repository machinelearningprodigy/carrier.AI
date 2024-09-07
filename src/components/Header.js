// src/components/Header.js
import React from 'react';
import { FaHome, FaGraduationCap, FaUser, FaMoon, FaSun } from 'react-icons/fa';
import './Header.css';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="logo">Career.AI</div>
      <nav> 
        <ul>
          <li>
            <a href="#career-pathways">
              <FaHome className="nav-icon" />
              Career Pathways
            </a>
          </li>
          <li>
            <a href="#skills-assessment">
              <FaGraduationCap className="nav-icon" />
              Skills Assessment
            </a>
          </li>
          <li>
            <a href="#profile">
              <FaUser className="nav-icon" />
              Profile
            </a>
          </li>
          <li>
            <button onClick={toggleDarkMode} className="mode-toggle">
              {isDarkMode ? <FaSun className="nav-icon" /> : <FaMoon className="nav-icon" />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;