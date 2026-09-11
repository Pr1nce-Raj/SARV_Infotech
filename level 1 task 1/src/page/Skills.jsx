import React from 'react';
import Card from '../components/Card';
import { skillsConfig } from '../config/cardsConfig';

export default function Skills() {
  return (
    <main className="page-content skills-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="section-badge">Technical Matrix</span>
          <h1 className="page-title">Skills & Proficiencies</h1>
          <p className="page-subtitle">
            A structured breakdown of my programming languages, frameworks, systems capabilities,
            and developer tooling.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="cards-grid">
          {skillsConfig.map((skill) => (
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

        {/* Methodology & Working Style */}
        <section className="methodology-section">
          <div className="section-header">
            <span className="section-badge">Engineering Standards</span>
            <h2 className="section-title">How I Build Software</h2>
          </div>

          <div className="methodology-grid">
            <div className="methodology-box">
              <h3>1. Clean Architecture</h3>
              <p>
                Separation of concerns between state, UI components, and API/socket layers.
                Predictable data flow makes debugging painless.
              </p>
            </div>
            <div className="methodology-box">
              <h3>2. Human-Readable Commits</h3>
              <p>
                Every commit tells a clear story with descriptive messages, clean branches,
                and targeted atomic changes.
              </p>
            </div>
            <div className="methodology-box">
              <h3>3. Performance & Security</h3>
              <p>
                Careful attention to memory management in C, non-blocking socket loops in Python,
                and bundle optimization in React.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
