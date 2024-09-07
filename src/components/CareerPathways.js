import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import './CareerPathways.css';

const CareerPathways = ({ isDarkMode }) => {
  const careers = [
    { title: 'Data Scientist', description: 'Analyze complex data to gain actionable insights.', salary: '$120k', icon: '📊' },
    { title: 'Software Engineer', description: 'Develop innovative software solutions.', salary: '$110k', icon: '💻' },
    { title: 'Digital Marketer', description: 'Create and execute online marketing strategies.', salary: '$80k', icon: '📱' },
    { title: 'UX/UI Designer', description: 'Design intuitive and visually appealing interfaces.', salary: '$95k', icon: '🎨' },
    { title: 'Cloud Architect', description: 'Design and oversee cloud computing strategies.', salary: '$130k', icon: '☁️' },
    { title: 'Cybersecurity Analyst', description: 'Protect organizations from digital threats.', salary: '$105k', icon: '🔒' },
  ];

  return (
    <section id="career-pathways" className={`career-pathways ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2>Explore Exciting Career Pathways</h2>
      <div className="career-grid">
        {careers.map((career, index) => (
          <div key={index} className="career-card">
            <div className="career-icon">{career.icon}</div>
            <h3>{career.title}</h3>
            <p>{career.description}</p>
            <div className="career-salary">
              <Briefcase size={16} />
              <span>{career.salary}</span>
            </div>
            <button className="read-more-btn">
              Read More <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerPathways;