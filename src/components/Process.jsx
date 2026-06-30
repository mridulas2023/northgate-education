import React from 'react';

const Process = () => {
  return (
    <section id="process">
      <div className="fade-up" style={{ textAlign: 'center' }}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <i className="fas fa-route"></i> How It Works
        </div>
        <h2 className="section-title">
          Your <span>5-Step Journey</span> Abroad
        </h2>
      </div>
      <div className="process-grid fade-up">
        <div className="process-step">
          <div className="step-circle">
            <i className="fas fa-handshake"></i>
            <span className="step-num-badge">1</span>
          </div>
          <div className="step-title">Free Consultation</div>
          <p className="step-desc">
            We understand your goals, assess your profile, and map the best path forward at zero cost.
          </p>
        </div>
        <div className="process-step">
          <div className="step-circle">
            <i className="fas fa-magnifying-glass-chart"></i>
            <span className="step-num-badge">2</span>
          </div>
          <div className="step-title">Profile Analysis</div>
          <p className="step-desc">
            Deep-dive into your academics, scores, and experiences to identify strengths and gaps.
          </p>
        </div>
        <div className="process-step">
          <div className="step-circle">
            <i className="fas fa-map-location-dot"></i>
            <span className="step-num-badge">3</span>
          </div>
          <div className="step-title">Roadmap Creation</div>
          <p className="step-desc">
            A personalised, month-by-month action plan covering tests, applications, and deadlines.
          </p>
        </div>
        <div className="process-step">
          <div className="step-circle">
            <i className="fas fa-envelope-open-text"></i>
            <span className="step-num-badge">4</span>
          </div>
          <div className="step-title">Apply &amp; Get Admitted</div>
          <p className="step-desc">
            End-to-end application management and scholarship support until you get your offer letter.
          </p>
        </div>
        <div className="process-step">
          <div className="step-circle">
            <i className="fas fa-plane"></i>
            <span className="step-num-badge">5</span>
          </div>
          <div className="step-title">Visa &amp; Departure</div>
          <p className="step-desc">
            Complete visa filing, interview prep, and pre-departure orientation so you land prepared.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
