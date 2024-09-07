// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import CareerPathways from './components/CareerPathways';
import SkillsAssessment from './components/SkillsAssessment';
import JobMarketInsights from './components/JobMarketInsights';
import ProfileDashboard from './components/ProfileDashboard';
import LearningResources from './components/LearningResources';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <LandingPage isDarkMode={isDarkMode} />
        <CareerPathways isDarkMode={isDarkMode} />
        <SkillsAssessment isDarkMode={isDarkMode} />
        <JobMarketInsights isDarkMode={isDarkMode} />
        <ProfileDashboard isDarkMode={isDarkMode} />
        <LearningResources isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;