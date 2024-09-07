// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`footer ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="footer-content">
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#career-pathways">Career Pathways</a></li>
            <li><a href="#skills-assessment">Skills Assessment</a></li>
            <li><a href="#job-market">Job Market Insights</a></li>
            <li><a href="#resources">Learning Resources</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Connect with Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 CareerPathAI | All Rights Reserved</p>
        <p><a href="#privacy-policy">Privacy Policy</a> | <a href="#terms-of-service">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;