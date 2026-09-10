import React from 'react';

/**
 * Reusable, interoperable Card component
 * Can be used for projects, skills, services, or product showcases
 * by consuming configuration properties.
 */
export default function Card({
  title,
  category,
  badge,
  description,
  image,
  tags = [],
  link,
  buttonText,
  highlight,
  children,
}) {
  return (
    <article className="app-card">
      {image && (
        <div className="card-image-wrap">
          <img src={image} alt={title} className="card-image" loading="lazy" />
        </div>
      )}

      <div className="card-body">
        <div className="card-meta">
          {category && <span className="card-category">{category}</span>}
          {badge && <span className="card-badge">{badge}</span>}
        </div>

        <h3 className="card-title">{title}</h3>

        {description && <p className="card-description">{description}</p>}

        {highlight && (
          <div className="card-highlight">
            <strong>Highlight:</strong> {highlight}
          </div>
        )}

        {tags && tags.length > 0 && (
          <ul className="card-tags">
            {tags.map((tag, index) => (
              <li key={index} className="card-tag">{tag}</li>
            ))}
          </ul>
        )}

        {children}

        {link && buttonText && (
          <div className="card-actions">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-btn"
            >
              {buttonText} &rarr;
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
