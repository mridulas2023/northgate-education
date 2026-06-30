import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-layout">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-award"></i>
            <span>Chennai&apos;s #1 Study Abroad Consultancy</span>
          </div>
          <h1 className="hero-title">
            Northgate Education
            <br />
            <em>Study Abroad</em>
          </h1>
          <p className="hero-tagline">Navigating through the Gates of Opportunity</p>
          <p className="hero-desc">
            Your top-choice university is closer than you think! Get the best online coaching and
            personalized guidance for overseas education and undergrad college application support
            with expert study abroad consultants globally.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              <i className="fas fa-phone"></i> Contact Us
            </a>
            <a href="#services" className="btn-ghost">
              <i className="fas fa-briefcase"></i> Our Services
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">500+</div>
              <div className="stat-label">Students Placed</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">98%</div>
              <div className="stat-label">Visa Success</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">95%</div>
              <div className="stat-label">Individual Progress</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">10+</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
