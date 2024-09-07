// src/components/ProfileDashboard.js
import React from 'react';
import './ProfileDashboard.css';

const ProfileDashboard = ({ isDarkMode }) => {
  const savedCareers = [
    { title: 'Software Engineer', progress: 75 },
    { title: 'Data Scientist', progress: 60 },
  ];

  return (
    <section id="profile" className={`profile-dashboard ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2>Your Profile Dashboard</h2>
      <div className="dashboard-grid">
        <div className="profile-card">
          <h3>Saved Careers</h3>
          <ul>
            {savedCareers.map((career, index) => (
              <li key={index}>
                <div>
                  <strong>{career.title}</strong>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${career.progress}%` }}></div>
                  </div>
                </div>
                <span>{career.progress}%</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="profile-card">
          <h3>Resume Builder</h3>
          <p>Upload or build your resume to align with your career path.</p>
          <button>Build Resume</button>
        </div>
        <div className="profile-card">
          <h3>Portfolio Upload</h3>
          <p>Upload your portfolio and certificates to showcase your skills.</p>
          <button>Upload Portfolio</button>
        </div>
      </div>
    </section>
  ); 
};

export default ProfileDashboard;
