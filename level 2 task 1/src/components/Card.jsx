import React from 'react';

/**
 * Reusable, interoperable Card component for the Linus Torvalds tribute page
 * Consumes properties from cardsConfig.js for inventions, qualities, and highlights.
 */
export default function Card({
  title,
  category,
  badge,
  description,
  tags = [],
  highlight,
  link,
  buttonText,
  children,
}) {
  return (
    <article className="tribute-card">
      <div className="card-header-bar">
        {category && <span className="card-category">{category}</span>}
        {badge && <span className="card-badge">{badge}</span>}
      </div>

      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}

        {description && <p className="card-description">{description}</p>}

        {highlight && (
          <div className="card-highlight">
            <span className="highlight-icon">★</span>
            <span>{highlight}</span>
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="tag-pill">{tag}</span>
            ))}
          </div>
        )}

        {children}

        {link && buttonText && (
          <div className="card-footer">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {buttonText} &rarr;
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
