import React from 'react';

const Trust = () => {
  return (
    <section id="trust" style={{ background: 'var(--cream)', padding: '88px 5%' }}>
      <div className="fade-up" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <i className="fas fa-shield-halved"></i> Built on Trust
        </div>
        <h2 className="section-title">
          Why Families <span>Choose Northgate</span>
        </h2>
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Our relationships go beyond admissions &mdash; we earn the trust of both parents and students at every step.
        </p>
      </div>
      <div className="trust-grid fade-up">
        {/* PARENTS */}
        <div className="trust-card trust-parents">
          <div className="trust-card-header">
            <div className="trust-card-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Why Parents Trust Us</h3>
          </div>
          <ul className="trust-list">
            <li>
              <i className="fas fa-check-circle"></i>
              <span>
                Parents are <strong>actively engaged</strong> throughout the entire journey
              </span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>
                <strong>Detailed written feedback</strong> delivered within 24 hours via email after every session
              </span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>
                <strong>24/7 full support</strong> and assurance whenever needed &mdash; no question too small
              </span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>
                <strong>Transparent progress reports</strong> &mdash; parents always know exactly where their child stands
              </span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>
                <strong>No hidden fees</strong> &mdash; every cost explained upfront with zero surprises
              </span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>
                Regular <strong>one-on-one parent consultations</strong> to discuss milestones and next steps
              </span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>
                Proven track record with <strong>500+ successful placements</strong> and 4.9 Google rating
              </span>
            </li>
          </ul>
        </div>

        {/* STUDENTS */}
        <div className="trust-card trust-students">
          <div className="trust-card-header">
            <div className="trust-card-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Why Students Trust Us</h3>
          </div>
          <ul className="trust-list">
            <li>
              <i className="fas fa-check-circle"></i>
              <span>
                <strong>Mentor-matched coaching</strong> &mdash; work with someone who truly understands your goals
                and personality
              </span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>
                <strong>Zero judgment</strong> &mdash; a safe space to explore options, ask anything, and make
                confident decisions
              </span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>
                <strong>100% personalised roadmap</strong> built around your unique strengths, not a generic template
              </span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>
                <strong>95% individual progress</strong> rate &mdash; every student measurably improves throughout
                the programme
              </span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>
                Flexible online sessions &mdash; study from <strong>anywhere, at your own pace</strong>, without
                disrupting school
              </span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>
                <strong>Score improvement guaranteed</strong> &mdash; our coaching consistently delivers 15&ndash;25%
                uplift in test scores
              </span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>We celebrate every win &mdash; from small breakthroughs to <strong>dream university admissions</strong></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Trust;
