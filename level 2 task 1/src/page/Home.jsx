import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import {
  tributeInfo,
  inventionsConfig,
  qualitiesConfig,
  timelineConfig,
  quotesConfig,
} from '../config/cardsConfig';

export default function Home() {
  const featuredInventions = inventionsConfig.slice(0, 2);
  const featuredQuotes = quotesConfig.slice(0, 3);

  return (
    <main className="page-content home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">Pioneer of Open Source</span>
            <h1 className="hero-title">{tributeInfo.name}</h1>
            <p className="hero-dates">{tributeInfo.dates}</p>
            <h2 className="hero-subtitle">{tributeInfo.headline}</h2>
            
            <blockquote className="hero-quote">
              &ldquo;{tributeInfo.quote}&rdquo;
            </blockquote>

            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary">
                Why I Look Up to Him &rarr;
              </Link>
              <Link to="/inventions" className="btn btn-secondary">
                Explore Inventions 🐧
              </Link>
              <Link to="/timeline" className="btn btn-secondary">
                View Timeline ⏳
              </Link>
            </div>
          </div>

          <div className="hero-portrait-frame">
            <img
              src="/assets/linus.jpg"
              alt="Linus Torvalds Portrait"
              className="hero-portrait"
            />
            <div className="portrait-caption">
              Linus Benedict Torvalds
            </div>
          </div>
        </div>
      </section>

      {/* Overview Snapshot */}
      <section className="reflection-preview-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Personal Dedication</span>
            <h2 className="section-title">The Value of Consistency & Utility</h2>
            <p className="section-subtitle">
              A tribute by student software developer Prince Raj.
            </p>
          </div>

          <div className="reflection-card">
            <div className="reflection-content">
              <h3>More Than Just An Operating System Creator</h3>
              <p>{tributeInfo.personalNote}</p>
              <p>
                What makes Linus extraordinary is his unwavering commitment to writing, testing,
                and maintaining code across three continuous decades. He demonstrated that true
                technological leadership is grounded in technical honesty, clean data structures,
                and creating tools that empower everyone.
              </p>
              <div style={{ marginTop: '1.25rem' }}>
                <Link to="/about" className="btn btn-outline">
                  Read Full Dedication & Biography &rarr;
                </Link>
              </div>
            </div>

            <div className="reflection-takeaways">
              <div className="takeaway-item">
                <span className="takeaway-num">01</span>
                <h4>Relentless Consistency</h4>
                <p>30+ years of daily commits and uninterrupted code reviews.</p>
              </div>
              <div className="takeaway-item">
                <span className="takeaway-num">02</span>
                <h4>Universal Utility</h4>
                <p>Created Linux and Git—the dual backbones of global computing.</p>
              </div>
              <div className="takeaway-item">
                <span className="takeaway-num">03</span>
                <h4>Radical Generosity</h4>
                <p>Donated both creations freely to the global commons.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Twin Pillars Preview */}
      <section className="inventions-preview-section">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="section-badge">Foundations of Modern Tech</span>
              <h2 className="section-title">The Twin Pillars</h2>
              <p className="section-subtitle">
                Two monumental technologies created by Linus that run the world.
              </p>
            </div>
            <Link to="/inventions" className="btn btn-secondary">
              View All Inventions &rarr;
            </Link>
          </div>

          <div className="cards-grid">
            {featuredInventions.map((inv) => (
              <Card
                key={inv.id}
                title={inv.title}
                category={inv.category}
                badge={inv.badge}
                description={inv.description}
                tags={inv.tags}
                highlight={inv.highlight}
                link={inv.link}
                buttonText={inv.buttonText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Roadmap Snapshot */}
      <section className="timeline-preview-section">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="section-badge">Historic Milestones</span>
              <h2 className="section-title">Journey Through Time</h2>
              <p className="section-subtitle">
                From a student hobby project in 1991 to powering all 500 top supercomputers.
              </p>
            </div>
            <Link to="/timeline" className="btn btn-secondary">
              Explore Full Timeline &rarr;
            </Link>
          </div>

          <div className="timeline-list">
            {timelineConfig.slice(0, 3).map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year-badge">{item.year}</div>
                <div className="timeline-card">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Snapshot */}
      <section className="quotes-preview-section">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="section-badge">Wisdom in Engineering</span>
              <h2 className="section-title">Iconic Quotes</h2>
              <p className="section-subtitle">
                Pragmatic engineering philosophies directly from Linus Torvalds.
              </p>
            </div>
            <Link to="/quotes" className="btn btn-secondary">
              View All Quotes &rarr;
            </Link>
          </div>

          <div className="quotes-grid">
            {featuredQuotes.map((q) => (
              <div key={q.id} className="quote-box">
                <p className="quote-text">&ldquo;{q.quote}&rdquo;</p>
                <span className="quote-context">{q.context}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
