import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="logo.svg" width="47" alt="Silicon logo" /> Silicon
        </Link>
        
        {/* Toggler button for mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Off-canvas meny för mobilenheter */}
        <div className={`offcanvas-menu ${isMenuOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={closeMenu} aria-label="Close menu">✕</button>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={closeMenu}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeMenu}>Contact</NavLink>
            </li>
          </ul>
          <div className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="theme-mode" 
              checked={isDarkMode} 
              onChange={toggleTheme} 
            />
            <label className="form-check-label" htmlFor="theme-mode">
              {isDarkMode ? 'Dark' : 'Light'}
            </label>
          </div>
          <a href="#" className="btn btn-primary btn-sm fs-sm rounded mt-3" target="_blank">
            <FontAwesomeIcon icon={faUser} />
            <span className="ms-2">Sign In / Sign up</span>
          </a>
        </div>

        {/* Vanlig meny för desktop */}
        <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="theme-mode" 
              checked={isDarkMode} 
              onChange={toggleTheme} 
            />
            <label className="form-check-label" htmlFor="theme-mode">
              {isDarkMode ? 'Dark' : 'Light'}
            </label>
          </div>
          <a href="#" className="btn btn-primary btn-sm fs-sm rounded" target="_blank">
            <i className="fa-regular fa-user"></i>
            <span className="ms-2">Sign In / Sign up</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
