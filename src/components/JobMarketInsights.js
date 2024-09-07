import React from 'react';
import './JobMarketInsights.css';

const JobMarketInsights = ({ isDarkMode }) => {
  const jobInsights = [
    { title: 'Data Scientist', demand: 'High', salary: '$120k - $160k', growth: '22% over 5 years' },
    { title: 'Software Engineer', demand: 'Very High', salary: '$100k - $150k', growth: '30% over 5 years' },
    { title: 'Digital Marketer', demand: 'Medium', salary: '$70k - $110k', growth: '15% over 5 years' },
  ];

  return (
    <section id="job-market" className={`job-market-insights ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2>Job Market Insights</h2>
      <div className="job-grid">
        {jobInsights.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <p>Demand: {job.demand}</p>
            <p>Salary: {job.salary}</p>
            <p>Growth: {job.growth}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobMarketInsights;