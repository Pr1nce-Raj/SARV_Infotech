import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-quote">
          "Talk is cheap. Show me the code." — Linus Torvalds
        </p>
        <div className="footer-links">
          <a href="https://www.kernel.org" target="_blank" rel="noopener noreferrer">Linux Kernel</a>
          <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">Git SCM</a>
          <a href="https://github.com/torvalds" target="_blank" rel="noopener noreferrer">Linus on GitHub</a>
        </div>
        <p className="footer-copy">
          &copy; {year} Tribute to Linus Torvalds. Created by Prince Raj for SARV Infotech Internship.
        </p>
      </div>
    </footer>
  );
}
