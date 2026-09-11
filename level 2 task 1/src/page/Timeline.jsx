import React from 'react';
import { timelineConfig } from '../config/cardsConfig';

export default function Timeline() {
  return (
    <main className="page-content timeline-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="section-badge">Historic Milestones</span>
          <h1 className="page-title">Chronological Timeline</h1>
          <p className="page-subtitle">
            From childhood coding on a Commodore VIC-20 to stewarding over 30 million lines of Linux kernel code.
          </p>
        </div>

        {/* Timeline List */}
        <div className="timeline-full-list">
          {timelineConfig.map((milestone, idx) => (
            <div key={idx} className="timeline-full-item">
              <div className="timeline-year-col">
                <span className="timeline-year-tag">{milestone.year}</span>
                <span className="timeline-connector-line"></span>
              </div>
              <div className="timeline-card-col">
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
