import React, { useState } from 'react';
import Card from '../components/Card';
import { projectsConfig } from '../config/cardsConfig';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Systems & Security', 'Web & Collaboration', 'Tools & Utilities'];

  const filteredProjects = filter === 'All'
    ? projectsConfig
    : projectsConfig.filter((p) => p.category === filter);

  return (
    <main className="page-content projects-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="section-badge">Portfolio Catalog</span>
          <h1 className="page-title">Featured Projects</h1>
          <p className="page-subtitle">
            An interactive showcase of software engineering projects, built with Python sockets,
            modern React, and cloud integrations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filters-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Interoperable Card Component */}
        <div className="cards-grid">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              category={project.category}
              badge={project.badge}
              image={project.image}
              description={project.description}
              tags={project.tags}
              highlight={project.highlight}
              link={project.link}
              buttonText={project.buttonText}
            >
              {project.details && (
                <div className="project-expanded-details">
                  <p>{project.details}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
