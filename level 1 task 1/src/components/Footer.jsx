import React from 'react';
import { personalInfo } from '../config/cardsConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h4>{personalInfo.name}</h4>
          <p>{personalInfo.tagline}</p>
        </div>

        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">Resume PDF</a>
        </div>

        <div className="footer-copy">
          <p>&copy; {currentYear} {personalInfo.name}. Designed & Built for SARV Infotech Internship.</p>
        </div>
      </div>
    </footer>
  );
}
