import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { tributeInfo } from '../config/cardsConfig';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-brand" onClick={() => setIsOpen(false)}>
          <span className="brand-badge">Tribute</span>
          <span className="brand-name">{tributeInfo.name}</span>
        </Link>

        <div className="nav-right-actions">
          <button
            type="button"
            className="theme-toggle-btn mobile-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className="hamburger"></span>
          </button>
        </div>

        <nav className={`nav-menu ${isOpen ? 'is-open' : ''}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            onClick={() => setIsOpen(false)}
          >
            Overview
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            onClick={() => setIsOpen(false)}
          >
            Biography
          </NavLink>
          <NavLink
            to="/inventions"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            onClick={() => setIsOpen(false)}
          >
            Inventions
          </NavLink>
          <NavLink
            to="/qualities"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            onClick={() => setIsOpen(false)}
          >
            Qualities
          </NavLink>
          <NavLink
            to="/timeline"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            onClick={() => setIsOpen(false)}
          >
            Timeline
          </NavLink>
          <NavLink
            to="/quotes"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            onClick={() => setIsOpen(false)}
          >
            Quotes
          </NavLink>

          <button
            type="button"
            className="theme-toggle-btn desktop-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </nav>
      </div>
    </header>
  );
}
