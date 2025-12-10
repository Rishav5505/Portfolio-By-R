import React, { useState, useEffect } from 'react';
import './Header.css';
import profileImg from '../assets/Copy.jpg';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('site-theme') || 'light');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    'AI & ML Engineer',
    'Data Scientist',
    'Computer Vision Engineer',
    'Robotics Engineer',
    'Project Manager',
    'Python Developer',
    'ML Researcher'
  ];

  // Auto-scroll roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('site-theme', newTheme);
    document.documentElement.classList.remove('light-theme', 'dark-theme', 'blue-theme', 'purple-theme', 'green-theme');
    if (newTheme !== 'light') {
      document.documentElement.classList.add(newTheme + '-theme');
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      const headerOffset = 90;
      const top = targetEl ? Math.max(targetEl.offsetTop - headerOffset, 0) : 0;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.replaceState(null, '', href);
      setTimeout(closeNav, 650);
    }
  };

  return (
    <header className="top-header">
      <div className="header-container">
        <div className="header-profile">
          <img src={profileImg} alt="Profile" className="header-profile-img" />
          <div className="header-info">
            <h1 className="header-name">VINAY BADNORIYA</h1>
            <div className="header-role-container">
              <p className="header-role header-role-animated" key={currentRoleIndex}>
                {roles[currentRoleIndex]}
              </p>
            </div>
          </div>
        </div>

        <button
          id="navToggle"
          className="nav-toggle"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          ☰
        </button>

        <nav className={`top-nav ${isNavOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link active" onClick={handleNavClick}>Home</a>
          <a href="#about" className="nav-link" onClick={handleNavClick}>About Me</a>
          <a href="#resume" className="nav-link" onClick={handleNavClick}>Resume</a>
          <a href="#portfolio" className="nav-link" onClick={handleNavClick}>Portfolio</a>
          <a href="#github" className="nav-link" onClick={handleNavClick}>GitHub</a>
          <a href="#testimonials" className="nav-link" onClick={handleNavClick}>Testimonials</a>
          <a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a>
        </nav>

        <div className="header-theme">
          <label htmlFor="themeSelect" className="theme-label">Theme:</label>
          <select
            id="themeSelect"
            className="theme-dropdown"
            value={theme}
            onChange={(e) => handleThemeChange(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="green">Green</option>
          </select>
        </div>
      </div>
    </header>
  );
}
