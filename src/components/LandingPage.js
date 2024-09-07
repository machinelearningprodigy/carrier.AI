// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css';
import { FaArrowRight } from 'react-icons/fa';

const LandingPage = ({ isDarkMode }) => {
  return (
    <div className={`landing-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="overlay">
        <div className="content">
          <h1>Unlock Your Future with AI-Driven Career Guidance</h1>
          <p>Get personalized career recommendations based on your skills, interests, and job market trends.</p>
          <button>Get Started <FaArrowRight /></button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;