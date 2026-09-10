import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { personalInfo, projectsConfig, skillsConfig } from '../config/cardsConfig';

export default function Home() {
  const featuredProjects = projectsConfig.slice(0, 3);
  const featuredSkills = skillsConfig.slice(0, 3);

  return (
    <main className="page-content home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-text">
            <span className="hero-badge">🚀 Available for Web & Python Roles</span>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight-text">{personalInfo.name}</span>
            </h1>
            <h2 className="hero-subtitle">{personalInfo.title}</h2>
            <p className="hero-description">{personalInfo.tagline}</p>

            <div className="hero-buttons">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Download Resume 📄
              </a>
              <Link to="/projects" className="btn btn-secondary">
                Explore Projects 💻
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch ✉️
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-frame">
              <img
                src="/assets/profile.jpg"
                alt={personalInfo.name}
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot About Section */}
      <section className="summary-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">About Prince</span>
            <h2 className="section-title">Engineering With Purpose</h2>
            <p className="section-subtitle">
              Passionate about systems programming, Python automation, and responsive web applications.
            </p>
          </div>

          <div className="summary-grid">
            <div className="summary-card">
              <h3>Who I Am</h3>
              <p>{personalInfo.aboutText}</p>
              <p>
                Winner of the 1st Place National Youth Festival with Campus Gigs, I believe in
                delivering software that is practical, robust, and intuitive.
              </p>
              <div style={{ marginTop: '1.25rem' }}>
                <Link to="/about" className="btn btn-outline">
                  Read My Full Story &rarr;
                </Link>
              </div>
            </div>

            <div className="stats-cards">
              <div className="stat-card">
                <span className="stat-number">1st</span>
                <h4>National Youth Festival</h4>
                <p>Awarded 1st place for Campus Gigs platform.</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">6+</span>
                <h4>Projects Engineered</h4>
                <p>Covering Python sockets, Firebase cloud, and React UI.</p>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <h4>Open Source Mindset</h4>
                <p>Inspired by Linus Torvalds's consistency and technical rigor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="section-badge">Portfolio Highlights</span>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                Rendered with our interoperable <code>Card.jsx</code> component driven by <code>cardsConfig.js</code>.
              </p>
            </div>
            <Link to="/projects" className="btn btn-secondary">
              View All 6 Projects &rarr;
            </Link>
          </div>

          <div className="cards-grid">
            {featuredProjects.map((project) => (
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Skills Preview */}
      <section className="skills-preview-section">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="section-badge">Technical Stack</span>
              <h2 className="section-title">Core Competencies</h2>
              <p className="section-subtitle">
                Demonstrating card reusability across projects and skills data.
              </p>
            </div>
            <Link to="/skills" className="btn btn-secondary">
              View Full Skills Matrix &rarr;
            </Link>
          </div>

          <div className="cards-grid">
            {featuredSkills.map((skill) => (
              <Card
                key={skill.id}
                title={skill.title}
                category={skill.category}
                badge={skill.badge}
                description={skill.description}
                tags={skill.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="cta-section">
        <div className="container cta-container">
          <h2>Ready to Collaborate?</h2>
          <p>
            I am actively seeking software engineering internships, Python backend roles,
            and web development opportunities.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Send a Message ✉️
            </Link>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View Resume (PDF) 📄
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
