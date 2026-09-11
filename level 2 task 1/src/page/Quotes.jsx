import React, { useState } from 'react';
import { quotesConfig } from '../config/cardsConfig';

export default function Quotes() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedId, setCopiedId] = useState(null);

  const categories = ['All', 'Coding', 'Architecture', 'Philosophy', 'Simplicity', 'Open Source'];

  const filteredQuotes = selectedCategory === 'All'
    ? quotesConfig
    : quotesConfig.filter((q) => q.category === selectedCategory);

  const copyQuote = (quoteText, id) => {
    navigator.clipboard.writeText(quoteText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <main className="page-content quotes-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="section-badge">The Torvalds Philosophy</span>
          <h1 className="page-title">Iconic Quotes & Wisdom</h1>
          <p className="page-subtitle">
            Candid, pragmatic, and timeless advice on programming, data structures, and open-source collaboration.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filters-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quotes Grid */}
        <div className="quotes-grid">
          {filteredQuotes.map((q) => (
            <div key={q.id} className="quote-box">
              <div className="quote-header">
                <span className="quote-cat-tag">{q.category}</span>
                <button
                  type="button"
                  className="btn-copy"
                  onClick={() => copyQuote(q.quote, q.id)}
                  aria-label="Copy Quote"
                >
                  {copiedId === q.id ? 'Copied! ✓' : 'Copy Quote'}
                </button>
              </div>

              <blockquote className="quote-text">
                &ldquo;{q.quote}&rdquo;
              </blockquote>

              <div className="quote-footer">
                <span className="quote-context">{q.context}</span>
                {q.lesson && (
                  <p className="quote-lesson">
                    <strong>Lesson:</strong> {q.lesson}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
