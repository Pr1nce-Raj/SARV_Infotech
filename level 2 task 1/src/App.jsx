import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './page/Home';
import About from './page/About';
import Inventions from './page/Inventions';
import Qualities from './page/Qualities';
import Timeline from './page/Timeline';
import Quotes from './page/Quotes';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('tribute-theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('tribute-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className={`tribute-layout theme-${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inventions" element={<Inventions />} />
          <Route path="/qualities" element={<Qualities />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
