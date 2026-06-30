import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="about-inner">
        <div className="about-img-wrap fade-up">
          <img
            src="/assets/html_img_1.png"
            alt="Counsellor in a one-on-one session with a student"
            style={{ objectPosition: 'center 38%' }}
          />
          <div className="about-badge-card">
            <div className="about-badge-num">
              <i className="fas fa-star" style={{ fontSize: '20px', color: 'var(--teal)' }}></i> 4.9
            </div>
            <div className="about-badge-text">
              Google Rating
              <br />
              200+ Reviews
            </div>
          </div>
        </div>
        <div className="about-content fade-up">
          <div className="section-tag">
            <i className="fas fa-building-columns"></i> Why Northgate
          </div>
          <h2 className="section-title">
            Personalized Guidance
            <br />
            by <span>Experts Who Care</span>
          </h2>
          <p className="section-desc">
            Based in Chennai, we are a boutique consultancy offering fully online, one-on-one coaching
            tailored to each student&apos;s unique profile and aspirations.
          </p>
          <ul className="about-points">
            <li>
              <div className="icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <span>
                <strong>Mentor-matched coaching</strong> &mdash; paired with a counselor who gets you; switch
                anytime
              </span>
            </li>
            <li>
              <div className="icon">
                <i className="fas fa-laptop"></i>
              </div>
              <span>
                <strong>Fully online &amp; flexible</strong> &mdash; attend sessions from anywhere, adjust
                your pace freely
              </span>
            </li>
            <li>
              <div className="icon">
                <i className="fas fa-shield-halved"></i>
              </div>
              <span>
                <strong>Transparent &amp; honest</strong> &mdash; no hidden fees, no false promises, no
                inflated timelines
              </span>
            </li>
            <li>
              <div className="icon">
                <i className="fas fa-seedling"></i>
              </div>
              <span>
                <strong>Whole-profile building</strong> &mdash; volunteering, research, internships, and more
              </span>
            </li>
            <li>
              <div className="icon">
                <i className="fas fa-heart"></i>
              </div>
              <span>
                <strong>Post-departure support</strong> &mdash; our relationship continues long beyond your
                visa stamp
              </span>
            </li>
          </ul>
          <a href="#contact" className="btn-primary">
            <i className="fas fa-arrow-right"></i> Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
