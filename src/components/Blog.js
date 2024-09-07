// src/components/Blog.js
import React from 'react';
import './Blog.css';

const Blog = () => {
  const articles = [
    { title: 'The Future of AI in Career Guidance', date: 'August 25, 2024', summary: 'Exploring how AI will revolutionize career paths and job markets.' },
    { title: 'Top 10 Skills to Master in 2024', date: 'July 18, 2024', summary: 'A list of must-have skills to stay relevant in the modern job market.' },
    { title: 'How to Build a Strong Tech Portfolio', date: 'June 5, 2024', summary: 'Tips on building an impressive portfolio that catches recruiters\' attention.' },
  ];

  return (
    <section id="blog" className="blog">
      <h2>Career Blog</h2>
      <div className="blog-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <h3>{article.title}</h3>
            <p><em>{article.date}</em></p>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
