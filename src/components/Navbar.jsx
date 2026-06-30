import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
      <a href="#" className="logo" onClick={closeMenu}>
        <div className="logo-img">
          <img src="/assets/html_img_0.png" alt="Northgate Education" />
        </div>
        <div>
          <div className="logo-text">Northgate Education</div>
          <div className="logo-sub">Study Abroad Consultants</div>
        </div>
      </a>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navLinks">
        <li>
          <a href="#destinations" onClick={closeMenu}>
            <i className="fas fa-globe"></i> Destinations
          </a>
        </li>
        <li>
          <a href="#services" onClick={closeMenu}>
            <i className="fas fa-briefcase"></i> Services
          </a>
        </li>
        <li>
          <a href="#exams" onClick={closeMenu}>
            <i className="fas fa-pen-to-square"></i> Exams
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            <i className="fas fa-building-columns"></i> About
          </a>
        </li>
        <li>
          <a href="#testimonials" onClick={closeMenu}>
            <i className="fas fa-star"></i> Reviews
          </a>
        </li>
        <li>
          <a href="#faq" onClick={closeMenu}>
            <i className="fas fa-circle-question"></i> FAQ
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            <i className="fas fa-calendar-check"></i> Free Consultation
          </a>
        </li>
      </ul>
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} id="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
