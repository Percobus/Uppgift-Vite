import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Använd Local Storage för att spara användarens val av tema
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    console.log('Mörkt läge:', isDarkMode); // För felsökning
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <header className="header navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="logo.svg" width="47" alt="Silicon logo" /> Silicon
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
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
          <a href="#" className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex" target="_blank">
            <div className="text-right">
              <i className="fa-regular fa-user"></i>
            </div>
            <span className="fs-sm ms-2 me-n7"> Sign In / Sign up</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;