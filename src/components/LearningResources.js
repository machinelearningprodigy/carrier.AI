// src/components/LearningResources.js
import React from 'react';
import './LearningResources.css';

const LearningResources = ({ isDarkMode }) => {
  const resources = [
    { title: 'Data Science Bootcamp', platform: 'Coursera', link: '#' },
    { title: 'Full-Stack Development', platform: 'Udemy', link: '#' },
    { title: 'Digital Marketing Specialization', platform: 'LinkedIn Learning', link: '#' },
    { title: 'Machine Learning A-Z', platform: 'Udemy', link: '#' },
    { title: 'UI/UX Design Fundamentals', platform: 'Skillshare', link: '#' },
    { title: 'Cloud Computing Specialization', platform: 'Coursera', link: '#' },
  ];

  return (
    <section id="resources" className={`learning-resources ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <h2>Learning Resources</h2>
        <div className="resource-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <h3>{resource.title}</h3>
              <p>Platform: {resource.platform}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">View Course</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningResources;