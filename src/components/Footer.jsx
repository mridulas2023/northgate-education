import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo" style={{ pointerEvents: 'none' }}>
            <div className="logo-img">
              <img src="/assets/html_img_41.png" alt="Northgate" />
            </div>
            <div>
              <div className="logo-text">Northgate Education</div>
              <div className="logo-sub">Study Abroad Consultants</div>
            </div>
          </div>
          <p>
            Chennai&apos;s most trusted study abroad consultancy. Expert guidance for USA, UK &amp; Europe.
            Online, personalized, and completely transparent.
          </p>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/northgateeducation/"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/people/Northgate-Education/61558048812308/"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://wa.me/918925965118"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.youtube.com/@northgateeducation"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://northgateeducation.com"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>
            <i className="fas fa-globe"></i> Destinations
          </h4>
          <ul>
            <li>
              <a href="#destinations">
                <i className="fas fa-arrow-right"></i> Study in USA
              </a>
            </li>
            <li>
              <a href="#destinations">
                <i className="fas fa-arrow-right"></i> Study in UK
              </a>
            </li>
            <li>
              <a href="#destinations">
                <i className="fas fa-arrow-right"></i> Study in Germany
              </a>
            </li>
            <li>
              <a href="#destinations">
                <i className="fas fa-arrow-right"></i> Study in France
              </a>
            </li>
            <li>
              <a href="#destinations">
                <i className="fas fa-arrow-right"></i> Study in Netherlands
              </a>
            </li>
            <li>
              <a href="#destinations">
                <i className="fas fa-arrow-right"></i> Study in Ireland
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>
            <i className="fas fa-briefcase"></i> Services
          </h4>
          <ul>
            <li>
              <a href="#services">
                <i className="fas fa-arrow-right"></i> Profile Building
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="fas fa-arrow-right"></i> Test Coaching
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="fas fa-arrow-right"></i> University Selection
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="fas fa-arrow-right"></i> SOP Writing
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="fas fa-arrow-right"></i> Visa Assistance
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="fas fa-arrow-right"></i> Scholarship Guidance
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>
            <i className="fas fa-building-columns"></i> Company
          </h4>
          <ul>
            <li>
              <a href="#about">
                <i className="fas fa-arrow-right"></i> About Us
              </a>
            </li>
            <li>
              <a href="#testimonials">
                <i className="fas fa-arrow-right"></i> Student Reviews
              </a>
            </li>
            <li>
              <a href="#exams">
                <i className="fas fa-arrow-right"></i> Exam Coaching
              </a>
            </li>
            <li>
              <a href="#faq">
                <i className="fas fa-arrow-right"></i> FAQ
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="fas fa-arrow-right"></i> Contact
              </a>
            </li>
            <li>
              <a href="https://northgateeducation.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-arrow-right"></i> Official Website
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          <i className="fas fa-copyright" style={{ fontSize: '10px' }}></i> 2025 Northgate Education. All rights
          reserved.
        </p>
        <p>
          <i className="fas fa-location-dot" style={{ color: 'var(--teal)', fontSize: '10px' }}></i> Chennai &amp;
          Hyderabad &mdash; India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
