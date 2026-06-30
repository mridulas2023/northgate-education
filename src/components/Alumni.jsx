import React, { useState, useEffect, useRef } from 'react';

const Alumni = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const viewportRef = useRef(null);
  const totalCards = 7;
  const gap = 24;

  // Determine how many cards are visible based on screen width
  const updateLayout = () => {
    if (viewportRef.current) {
      setViewportWidth(viewportRef.current.offsetWidth);
    }
    const width = window.innerWidth;
    if (width <= 600) {
      setVisibleCards(1);
    } else if (width <= 900) {
      setVisibleCards(2);
    } else {
      setVisibleCards(3);
    }
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  // Calculate card width including gap
  const getCardWidth = () => {
    if (viewportWidth === 0) return 0;
    return (viewportWidth - gap * (visibleCards - 1)) / visibleCards + gap;
  };

  const maxIndex = totalCards - visibleCards;

  const slide = (direction) => {
    setCurrentIndex((prev) => {
      let next = prev + direction;
      // Wrap around or cap? Legacy caps: Math.max(0, Math.min(prev + dir, maxIdx))
      // But auto-slide wraps back to 0 if it hits max index
      if (next > maxIndex) {
        return 0; // wrap around for auto-slide
      }
      if (next < 0) {
        return maxIndex;
      }
      return next;
    });
  };

  const goTo = (index) => {
    const target = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(target);
  };

  // Auto-slide effect
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      slide(1);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHovered, visibleCards, viewportWidth]);

  // Touch Swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      slide(diff > 0 ? 1 : -1);
    }
  };

  const cardWidth = getCardWidth();
  const trackTranslation = currentIndex * cardWidth;

  return (
    <section id="alumni" style={{ background: 'var(--navy)', padding: '88px 0 72px', overflow: 'hidden' }}>
      <div style={{ padding: '0 5%', textAlign: 'center', marginBottom: '52px' }} className="fade-up">
        <div className="section-tag" style={{ justifyContent: 'center', color: 'var(--teal)' }}>
          <i className="fas fa-star"></i> Real Results
        </div>
        <h2 className="section-title light" style={{ fontSize: 'clamp(24px,3vw,40px)' }}>
          Meet A Few Northgate Alumni
          <br />
          <span style={{ color: 'var(--teal)' }}>With Great Success Stories to Share</span>
        </h2>
        <p className="section-desc light" style={{ margin: '12px auto 0', maxWidth: '600px' }}>
          From TED talks to international robotics championships &mdash; our students achieve the extraordinary.
        </p>
      </div>

      <div className="alumni2-outer">
        {/* Left Arrow */}
        <button className="alumni2-btn alumni2-prev" onClick={() => slide(-1)} aria-label="Previous">
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Viewport */}
        <div
          className="alumni2-viewport"
          id="alumni2Viewport"
          ref={viewportRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="alumni2-track"
            id="alumni2Track"
            style={{
              transform: `translateX(-${trackTranslation}px)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {/* MAIA */}
            <div className="alumni2-card">
              <div className="alumni2-img">
                <img src="/assets/html_img_34.jpg" alt="Maia - UCLA" />
                <div className="alumni2-overlay">
                  <span className="alumni2-uni">
                    <i className="fas fa-graduation-cap"></i> UCLA
                  </span>
                </div>
              </div>
              <div className="alumni2-body">
                <div className="alumni2-tag">
                  <i className="fas fa-seedling"></i> Community Leadership
                </div>
                <h3 className="alumni2-name">Maia</h3>
                <p className="alumni2-text">
                  <strong>Maia&apos;s Mental Health Awareness Seminar</strong>, attended by nearly 200 participants
                  and featuring Prof. Dr. Daniel David, showcased her commitment to youth advocacy and community
                  impact. This was a success through our <span className="ah">ECL course</span>. She developed an app
                  connecting children under 18 with volunteer therapists. Her leadership contributed to her admission
                  to <strong>University of California, Los Angeles</strong> with a generous scholarship.
                </p>
                <div className="alumni2-badge">
                  <i className="fas fa-award"></i> UCLA &mdash; Scholarship Recipient
                </div>
              </div>
            </div>

            {/* KARINA */}
            <div className="alumni2-card">
              <div className="alumni2-img">
                <img src="/assets/html_img_35.jpg" alt="Karina - King's College London" />
                <div className="alumni2-overlay">
                  <span className="alumni2-uni">
                    <i className="fas fa-graduation-cap"></i> King&apos;s College London
                  </span>
                </div>
              </div>
              <div className="alumni2-body">
                <div className="alumni2-tag">
                  <i className="fas fa-pen-nib"></i> Creative &amp; Academic Writing
                </div>
                <h3 className="alumni2-name">Karina</h3>
                <p className="alumni2-text">
                  <strong>Karina</strong> earned recognition in the <strong>John Locke Essay Competition</strong> for
                  her award-winning Theology essay, &ldquo;Why Pray?&rdquo; Supported by Northgate&apos;s{' '}
                  <span className="ah">Creative Writing Course</span>, she developed critical thinking and writing skills
                  that helped her stand out on an international stage. Today she is a proud Law student at{' '}
                  <strong>King&apos;s College London.</strong>
                </p>
                <div className="alumni2-badge">
                  <i className="fas fa-award"></i> John Locke Essay Competition Winner
                </div>
              </div>
            </div>

            {/* ALEXIA */}
            <div className="alumni2-card">
              <div className="alumni2-img">
                <img src="/assets/html_img_36.jpg" alt="Alexia - Columbia Sciences Po" />
                <div className="alumni2-overlay">
                  <span className="alumni2-uni">
                    <i className="fas fa-graduation-cap"></i> Columbia &ndash; Sciences Po
                  </span>
                </div>
              </div>
              <div className="alumni2-body">
                <div className="alumni2-tag">
                  <i className="fas fa-microphone-lines"></i> Public Speaking
                </div>
                <h3 className="alumni2-name">Alexia</h3>
                <p className="alumni2-text">
                  After overcoming stage fright through Northgate&apos;s{' '}
                  <span className="ah">Storytelling and Persuasion Program</span>, <strong>Alexia</strong> delivered her{' '}
                  <strong>TEDx talk</strong>, &ldquo;Accepting the Unknown to Thrive,&rdquo; to an audience of 1,000+
                  attendees. Today she is admitted to the prestigious{' '}
                  <strong>Columbia&ndash;Sciences Po Dual Degree Program.</strong>
                </p>
                <a
                  href="https://youtu.be/gC5fYOZ8NEk?si=fKmvjquEnxnWdBB4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="alumni2-yt"
                >
                  <i className="fab fa-youtube"></i> Watch her TEDx Talk
                </a>
                <div className="alumni2-badge">
                  <i className="fas fa-award"></i> TEDx Speaker &bull; Columbia&ndash;Sciences Po
                </div>
              </div>
            </div>

            {/* DAVID */}
            <div className="alumni2-card">
              <div className="alumni2-img">
                <img src="/assets/html_img_37.jpg" alt="David - Carnegie Mellon" />
                <div className="alumni2-overlay">
                  <span className="alumni2-uni">
                    <i className="fas fa-graduation-cap"></i> Carnegie Mellon
                  </span>
                </div>
              </div>
              <div className="alumni2-body">
                <div className="alumni2-tag">
                  <i className="fas fa-robot"></i> Extracurriculars &amp; Leadership
                </div>
                <h3 className="alumni2-name">David</h3>
                <p className="alumni2-text">
                  <strong>David&apos;s robotics team</strong>, High Five, was featured on international television following
                  their success in the International Robotics League Tournament, qualifying for the{' '}
                  <strong>International Championship Finals.</strong> He landed this opportunity through our{' '}
                  <span class="ah">ECL course</span>. Today David is a proud student at{' '}
                  <strong>Carnegie Mellon University.</strong>
                </p>
                <div className="alumni2-badge">
                  <i className="fas fa-award"></i> Intl. Robotics Championship Finalist
                </div>
              </div>
            </div>

            {/* ANA */}
            <div className="alumni2-card">
              <div className="alumni2-img">
                <img src="/assets/html_img_38.jpg" alt="Ana - UCL" />
                <div className="alumni2-overlay">
                  <span className="alumni2-uni">
                    <i className="fas fa-graduation-cap"></i> UCL
                  </span>
                </div>
              </div>
              <div className="alumni2-body">
                <div className="alumni2-tag">
                  <i className="fas fa-drafting-compass"></i> Portfolio Building
                </div>
                <h3 className="alumni2-name">Ana</h3>
                <p className="alumni2-text">
                  Through Northgate&apos;s <span className="ah">ECL Program</span>, <strong>Ana</strong> developed a strong{' '}
                  <strong>architecture portfolio</strong> and refined her passion for designing innovative, comfortable
                  living spaces. Her creative work stood out strongly during admissions. Today she is studying Architecture
                  at <strong>University College London (UCL).</strong>
                </p>
                <div className="alumni2-badge">
                  <i className="fas fa-award"></i> Architecture at UCL
                </div>
              </div>
            </div>

            {/* ADRIAN */}
            <div className="alumni2-card">
              <div className="alumni2-img">
                <img src="/assets/html_img_39.jpg" alt="Adrian - UC Berkeley" />
                <div className="alumni2-overlay">
                  <span className="alumni2-uni">
                    <i className="fas fa-graduation-cap"></i> UC Berkeley
                  </span>
                </div>
              </div>
              <div className="alumni2-body">
                <div className="alumni2-tag">
                  <i className="fas fa-laptop-code"></i> Passion Project
                </div>
                <h3 className="alumni2-name">Adrian</h3>
                <p className="alumni2-text">
                  <strong>Adrian</strong> combined his passion for music and technology through Northgate&apos;s{' '}
                  <span className="ah">ECL Program</span>, creating{' '}
                  <strong>
                    <a
                      href="https://www.oscilluna.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--teal)' }}
                    >
                      www.oscilluna.com
                    </a>
                  </strong>{' '}
                  &mdash; a platform connecting musicians worldwide for real-time collaboration. Today Adrian is a proud
                  student at <strong>University of California, Berkeley.</strong>
                </p>
                <div className="alumni2-badge">
                  <i className="fas fa-award"></i> Founder, Oscilluna &bull; UC Berkeley
                </div>
              </div>
            </div>

            {/* DARIA */}
            <div className="alumni2-card">
              <div className="alumni2-img">
                <img src="/assets/html_img_40.jpg" alt="Daria - IE University" />
                <div className="alumni2-overlay">
                  <span className="alumni2-uni">
                    <i className="fas fa-graduation-cap"></i> IE University
                  </span>
                </div>
              </div>
              <div className="alumni2-body">
                <div className="alumni2-tag">
                  <i className="fas fa-hashtag"></i> Social Impact &amp; Tech
                </div>
                <h3 className="alumni2-name">Daria</h3>
                <p className="alumni2-text">
                  Through our <span className="ah">ECL course</span>, <strong>Daria</strong> created{' '}
                  <strong>@theadvanceduniversal</strong> on Instagram to simplify AI and Machine Learning for beginners,
                  gaining 2,000+ followers. Her passion for education and technology has inspired many young learners. Today
                  she is a proud student at <strong>IE University.</strong>
                </p>
                <div className="alumni2-badge">
                  <i className="fas fa-award"></i> 2K+ Followers &bull; IE University
                </div>
              </div>
            </div>
          </div>
          {/* end track */}
        </div>
        {/* end viewport */}

        {/* Right Arrow */}
        <button className="alumni2-btn alumni2-next" onClick={() => slide(1)} aria-label="Next">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Dots */}
      <div className="alumni2-dots" id="alumni2Dots">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <span
            key={idx}
            className={`a2dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => goTo(idx)}
          ></span>
        ))}
      </div>
      <div className="alumni2-counter">
        <span id="alumni2Cur">{currentIndex + 1}</span> / {maxIndex + 1}
      </div>
    </section>
  );
};

export default Alumni;
