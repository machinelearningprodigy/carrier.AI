// src/components/SuccessStories.js
import React from 'react';
import './SuccessStories.css';

const SuccessStories = () => {
  const stories = [
    { name: 'John Doe', career: 'Data Scientist', story: 'Thanks to this platform, I switched careers and got a job at Google!' },
    { name: 'Jane Smith', career: 'Software Engineer', story: 'I landed my dream job at Amazon after completing the suggested courses.' },
    { name: 'Alex Brown', career: 'Digital Marketer', story: 'This platform gave me the confidence to start my own digital marketing firm.' },
  ];

  return (
    <section id="success-stories" className="success-stories">
      <h2>Success Stories</h2>
      <div className="stories-grid">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <h3>{story.name}</h3>
            <p><strong>Career:</strong> {story.career}</p>
            <p>"{story.story}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
