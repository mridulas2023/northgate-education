import React from 'react';

const Exams = ({ onOpenSatModal }) => {

  return (
    <section id="exams">
      <div style={{ textAlign: 'center' }}>
        <div className="section-tag" style={{ justifyContent: 'center', color: 'var(--teal)' }}>
          <i className="fas fa-graduation-cap"></i> Test Coaching
        </div>
        <h2 className="section-title light">
          Exams We <span style={{ color: 'var(--teal)' }}>Specialize In</span>
        </h2>
        <p className="section-desc light" style={{ margin: '10px auto 0' }}>
          Click any card to see coaching details and target scores.
        </p>
      </div>
      <div className="exams-grid">
        {/* SAT (Triggers SAT Modal) */}
        <div className="exam-card sat-card" onClick={onOpenSatModal}>
          <div className="exam-badge">
            <i className="fas fa-calculator"></i> Undergraduate
          </div>
          <div className="exam-name">SAT</div>
          <p className="exam-short">
            Required for most US undergraduate admissions. Digital adaptive test covering Math and
            Evidence-Based Reading &amp; Writing.
          </p>
          <div className="exam-meta">
            <span>
              <i className="fas fa-chart-bar"></i> 400&ndash;1600
            </span>
            <span>
              <i className="fas fa-mobile"></i> Digital
            </span>
            <span>
              <i className="fas fa-flag-usa"></i> USA
            </span>
          </div>
          <div className="sat-cta">
            <i className="fas fa-arrow-up-right-from-square"></i> Learn More
          </div>
        </div>

        {/* IELTS */}
        <div className="exam-card">
          <div className="exam-badge">
            <i className="fas fa-microphone"></i> English Proficiency
          </div>
          <div className="exam-name">IELTS</div>
          <p className="exam-short">
            The world&apos;s most recognised English test. Required for UK, USA, Europe and more. Tests
            Listening, Reading, Writing, and Speaking.
          </p>
          <div className="exam-expand">
            Intensive coaching covering all four modules with band-specific strategies. Mock tests simulate
            real exam conditions. Average improvement: 1&ndash;1.5 bands in 6 weeks. Target: 7.0+
          </div>
          <div className="exam-meta">
            <span>
              <i className="fas fa-chart-bar"></i> Band 6.0&ndash;9.0
            </span>
            <span>
              <i className="fas fa-clock"></i> 2h 45m
            </span>
            <span>
              <i className="fas fa-globe"></i> UK &middot; AU &middot; EU
            </span>
          </div>
        </div>

        {/* TOEFL */}
        <div className="exam-card">
          <div className="exam-badge">
            <i className="fas fa-laptop"></i> English Proficiency
          </div>
          <div className="exam-name">TOEFL iBT</div>
          <p className="exam-short">
            Preferred by US and European universities. Internet-based test covering Reading, Listening,
            Speaking, and Writing in an academic context.
          </p>
          <div className="exam-expand">
            Training on integrated tasks unique to TOEFL &mdash; note-taking from lectures and synthesising
            information. Our coaches help you hit 100+ consistently. Target: 100+
          </div>
          <div className="exam-meta">
            <span>
              <i className="fas fa-chart-bar"></i> Score 0&ndash;120
            </span>
            <span>
              <i className="fas fa-clock"></i> 3 hours
            </span>
            <span>
              <i className="fas fa-globe"></i> USA &middot; Europe
            </span>
          </div>
        </div>

        {/* CAE */}
        <div className="exam-card">
          <div className="exam-badge">
            <i className="fas fa-language"></i> English Proficiency
          </div>
          <div className="exam-name">CAE &mdash; C1 Advanced</div>
          <p className="exam-short">
            Cambridge C1 Advanced is widely accepted by UK and European universities as proof of high-level English.
            Ideal for direct university entry.
          </p>
          <div className="exam-expand">
            C1 Advanced tests Reading &amp; Use of English, Writing, Listening, and Speaking at an advanced
            level. Particularly valued by UK universities and widely accepted across Europe. We coach all
            parts with past paper practice. Target: Grade B or above.
          </div>
          <div className="exam-meta">
            <span>
              <i className="fas fa-chart-bar"></i> 160&ndash;210
            </span>
            <span>
              <i className="fas fa-certificate"></i> Cambridge
            </span>
            <span>
              <i className="fas fa-globe"></i> UK &middot; Europe
            </span>
          </div>
        </div>

        {/* Duolingo */}
        <div className="exam-card">
          <div className="exam-badge">
            <i className="fas fa-mobile-screen"></i> English Proficiency
          </div>
          <div className="exam-name">Duolingo English</div>
          <p className="exam-short">
            Affordable at-home English test accepted by 5,000+ institutions worldwide. Results in 2 days,
            taken in under an hour.
          </p>
          <div className="exam-expand">
            We guide students on the adaptive format, literacy and comprehension sub-scores, and how to meet
            each university minimum requirement. Great budget-friendly alternative to IELTS. Target: 120+
          </div>
          <div className="exam-meta">
            <span>
              <i className="fas fa-chart-bar"></i> 10&ndash;160
            </span>
            <span>
              <i className="fas fa-house"></i> At-home
            </span>
            <span>
              <i className="fas fa-tag"></i> Budget-friendly
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exams;
