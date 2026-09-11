import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, timelineMilestones } from '../config/cardsConfig';

export default function About() {
  return (
    <main className="page-content about-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="section-badge">Biography & Background</span>
          <h1 className="page-title">About Prince Raj</h1>
          <p className="page-subtitle">
            Software developer, systems enthusiast, and open-source advocate from India.
          </p>
        </div>

        {/* Story Section */}
        <section className="about-narrative-section">
          <div className="narrative-grid">
            <div className="narrative-text">
              <h2>My Developer Journey</h2>
              <p>
                My passion for computing began with curiosity about how software truly works beneath
                layers of abstraction. I began by diving into low-level <strong>C programming</strong>,
                learning manual memory management, pointer arithmetic, and operating system mechanics.
              </p>
              <p>
                As I expanded into <strong>Python</strong>, I fell in love with socket programming and
                systems automation. Building custom network intrusion detectors like <em>Threat_Monitor</em>
                taught me how to inspect raw packets, detect unauthorized port sweeps, and build resilient
                security logging utilities.
              </p>
              <p>
                At the same time, I recognized the importance of building user-friendly interfaces that
                empower people. I mastered modern <strong>React</strong> and JavaScript, focusing on
                clean component architectures, reusable design systems, and cloud integration with Firebase.
              </p>
              <p>
                In 2023, my team and I were awarded <strong>1st Place at the National Youth Festival</strong> for
                engineering <em>Campus Gigs</em>, a platform designed to streamline student project delegation
                and micro-collaborations.
              </p>

              <div className="narrative-actions">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Download Full Resume 📄
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Get in Touch ✉️
                </Link>
              </div>
            </div>

            <div className="narrative-sidebar">
              <div className="profile-card-static">
                <img
                  src="/assets/profile.jpg"
                  alt={personalInfo.name}
                  className="narrative-img"
                />
                <h3>{personalInfo.name}</h3>
                <p className="profile-role">{personalInfo.title}</p>
                <div className="profile-meta">
                  <div><strong>Location:</strong> {personalInfo.location}</div>
                  <div><strong>Status:</strong> Available for Roles</div>
                  <div><strong>Email:</strong> {personalInfo.email}</div>
                </div>
              </div>

              <div className="values-box">
                <h4>Core Principles</h4>
                <ul>
                  <li><strong>Consistency:</strong> Daily commits, continuous learning, and persistent practice.</li>
                  <li><strong>Pragmatism:</strong> Writing straightforward, maintainable code over clever tricks.</li>
                  <li><strong>Utility:</strong> Software must provide genuine value to its users.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="milestones-section">
          <div className="section-header">
            <span className="section-badge">Career Roadmap</span>
            <h2 className="section-title">Milestones & Achievements</h2>
          </div>

          <div className="milestones-timeline">
            {timelineMilestones.map((m, index) => (
              <div key={index} className="milestone-entry">
                <div className="milestone-period">{m.period}</div>
                <div className="milestone-body">
                  <h3>{m.role}</h3>
                  <h4 className="milestone-inst">{m.institution}</h4>
                  <p>{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
