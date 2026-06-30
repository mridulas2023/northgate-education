import React, { useEffect } from 'react';

const SatModal = ({ isOpen, onClose }) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('sat-modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="sat-modal-overlay open" onClick={handleOverlayClick}>
      <div className="sat-modal-box">
        <button className="sat-modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times"></i>
        </button>
        <div className="sat-modal-header">
          <div className="sat-modal-badge">
            <i className="fas fa-calculator"></i> Undergraduate Exam
          </div>
          <h2>SAT &mdash; Scholastic Assessment Test</h2>
          <p class="sat-modal-sub">The gateway to US undergraduate admissions at top universities</p>
        </div>
        <div className="sat-modal-body">
          <div className="sat-modal-grid">
            <div className="sat-info-card">
              <div className="sat-info-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <div className="sat-info-label">Score Range</div>
              <div className="sat-info-val">400 &ndash; 1600</div>
            </div>
            <div className="sat-info-card">
              <div className="sat-info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="sat-info-label">Duration</div>
              <div className="sat-info-val">2h 14m</div>
            </div>
            <div className="sat-info-card">
              <div className="sat-info-icon">
                <i className="fas fa-mobile"></i>
              </div>
              <div className="sat-info-label">Format</div>
              <div className="sat-info-val">Digital &amp; Adaptive</div>
            </div>
            <div className="sat-info-card">
              <div className="sat-info-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <div className="sat-info-label">Our Target</div>
              <div className="sat-info-val">1450+</div>
            </div>
          </div>
          <div className="sat-section-title">
            <i className="fas fa-book-open"></i> What the SAT Tests
          </div>
          <div className="sat-sections">
            <div class="sat-sec-card">
              <div className="sat-sec-icon">
                <i className="fas fa-square-root-variable"></i>
              </div>
              <div>
                <div className="sat-sec-name">Math</div>
                <div className="sat-sec-desc">
                  Algebra, advanced math, problem-solving, and data analysis. Calculator permitted throughout.
                </div>
              </div>
            </div>
            <div class="sat-sec-card">
              <div className="sat-sec-icon">
                <i className="fas fa-book"></i>
              </div>
              <div>
                <div className="sat-sec-name">Reading &amp; Writing</div>
                <div className="sat-sec-desc">
                  Evidence-based comprehension, grammar, rhetoric, and information synthesis from passages.
                </div>
              </div>
            </div>
          </div>
          <div className="sat-section-title">
            <i className="fas fa-graduation-cap"></i> Northgate SAT Coaching
          </div>
          <div className="sat-features">
            <div className="sat-feat">
              <i className="fas fa-check-circle"></i>
              <span>
                Covers the new <strong>digital SAT (Bluebook)</strong> adaptive format
              </span>
            </div>
            <div className="sat-feat">
              <i className="fas fa-check-circle"></i>
              <span>
                Personalised <strong>12-week structured programme</strong>
              </span>
            </div>
            <div className="sat-feat">
              <i className="fas fa-check-circle"></i>
              <span>
                Weekly full-length <strong>mock tests</strong> with detailed analytics
              </span>
            </div>
            <div className="sat-feat">
              <i className="fas fa-check-circle"></i>
              <span>
                Average improvement of <strong>200&ndash;300 points</strong>
              </span>
            </div>
            <div className="sat-feat">
              <i className="fas fa-check-circle"></i>
              <span>
                One-on-one <strong>doubt-clearing sessions</strong> with expert tutors
              </span>
            </div>
            <div className="sat-feat">
              <i className="fas fa-check-circle"></i>
              <span>
                Target score <strong>1450+</strong> for Ivy League and top 50 US universities
              </span>
            </div>
          </div>
          <a href="#contact" className="sat-modal-cta" onClick={onClose}>
            <i className="fas fa-calendar-check"></i> Book SAT Coaching Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default SatModal;
