import React from 'react';
import Card from '../components/Card';
import { qualitiesConfig } from '../config/cardsConfig';

export default function Qualities() {
  return (
    <main className="page-content qualities-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="section-badge">Principles of Mastery</span>
          <h1 className="page-title">Admirable Qualities</h1>
          <p className="page-subtitle">
            The core engineering virtues and philosophies that guided Linus Torvalds through 30+ years of leading the open-source movement.
          </p>
        </div>

        {/* Qualities Cards Grid */}
        <div className="cards-grid">
          {qualitiesConfig.map((quality) => (
            <Card
              key={quality.id}
              title={quality.title}
              category={quality.category}
              badge={quality.badge}
              description={quality.description}
              tags={quality.tags}
            >
              {quality.deepDive && (
                <div className="quality-deep-dive">
                  <strong>Practical Reflection:</strong>
                  <p>{quality.deepDive}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Lessons for Aspiring Developers */}
        <section className="lessons-section">
          <div className="section-header">
            <span className="section-badge">Student Takeaways</span>
            <h2 className="section-title">What I Strive to Emulate</h2>
          </div>

          <div className="lessons-grid">
            <div className="lesson-box">
              <div className="lesson-num">1</div>
              <h3>Consistency Builds Empires</h3>
              <p>
                A single massive sprint rarely builds durable software. Showing up daily to read code,
                write tests, and fix bugs produces compounding results over years.
              </p>
            </div>
            <div className="lesson-box">
              <div className="lesson-num">2</div>
              <h3>Simplicity Over Cleverness</h3>
              <p>
                Clever code is hard to read, hard to test, and full of subtle defects. Good programmers
                find data structures that make edge cases disappear naturally.
              </p>
            </div>
            <div className="lesson-box">
              <div className="lesson-num">3</div>
              <h3>Build for Humanity</h3>
              <p>
                Open-source software democratizes opportunity. By sharing solutions, we lift up
                students, researchers, and engineers around the world.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
