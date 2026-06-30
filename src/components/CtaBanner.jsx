import React from 'react';

const CtaBanner = () => {
  return (
    <section id="cta-banner">
      <h2>Ready to Study Abroad?</h2>
      <p>Join 500+ students who reached their dream universities with Northgate Education.</p>
      <div className="cta-buttons">
        <a href="#contact" className="btn-primary">
          <i className="fas fa-calendar-check"></i> Book Free Consultation
        </a>
        <a href="tel:+918925965118" className="btn-ghost">
          <i className="fas fa-phone"></i> Call Us Now
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
