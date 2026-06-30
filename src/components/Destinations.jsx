import React from 'react';

const Destinations = () => {
  return (
    <>
      <section id="destinations">
        <div className="dest-header fade-up">
          <div>
            <div className="section-tag">
              <i className="fas fa-location-dot"></i> Where We Place You
            </div>
            <h2 className="section-title">
              Top Study <span>Destinations</span>
            </h2>
          </div>
          <p className="section-desc">
            Elite university admissions across the USA, UK &amp; Europe &mdash; tailored to your aspirations.
          </p>
        </div>
        <div className="dest-grid fade-up">
          <div className="dest-card">
            <img
              src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=85&auto=format&fit=crop&crop=center"
              alt="USA - Statue of Liberty"
            />
            <div className="dest-card-overlay">
              <div className="dest-code">US</div>
              <div className="dest-name">United States</div>
              <div className="dest-unis">
                <i className="fas fa-university" style={{ color: 'var(--teal)', fontSize: '10px' }}></i>{' '}
                Harvard &middot; MIT &middot; Stanford &middot; UCLA &middot; NYU
              </div>
            </div>
            <div className="dest-badge">
              <i className="fas fa-fire"></i> Most Popular
            </div>
          </div>
          <div className="dest-card">
            <img
              src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=85&auto=format&fit=crop&crop=center"
              alt="UK - Big Ben"
            />
            <div className="dest-card-overlay">
              <div className="dest-code">UK</div>
              <div className="dest-name">United Kingdom</div>
              <div className="dest-unis">
                <i className="fas fa-university" style={{ color: 'var(--teal)', fontSize: '10px' }}></i>{' '}
                Oxford &middot; Cambridge &middot; Imperial &middot; LSE &middot; UCL
              </div>
            </div>
          </div>
          <div className="dest-card">
            <img
              src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=85&auto=format&fit=crop&crop=center"
              alt="Europe"
            />
            <div className="dest-card-overlay">
              <div className="dest-code">EU</div>
              <div className="dest-name">Europe</div>
              <div className="dest-unis">
                <i className="fas fa-university" style={{ color: 'var(--teal)', fontSize: '10px' }}></i>{' '}
                TU Munich &middot; ETH Zurich &middot; LMU &middot; Delft &middot; Paris
              </div>
            </div>
            <div
              className="dest-badge"
              style={{ background: 'linear-gradient(135deg,var(--navy),var(--navy-mid))' }}
            >
              <i className="fas fa-star"></i> Low Tuition
            </div>
          </div>
        </div>
      </section>

      {/* COUNTRIES STRIP */}
      <div id="countries-strip">
        <div className="strip-inner fade-up">
          <span className="strip-label-text">
            <i className="fas fa-map-marker-alt" style={{ color: 'var(--teal)' }}></i> Also in
          </span>
          <div className="country-pill">
            <i className="fas fa-circle-dot"></i> Germany
          </div>
          <div className="country-pill">
            <i className="fas fa-circle-dot"></i> Ireland
          </div>
          <div className="country-pill">
            <i className="fas fa-circle-dot"></i> Netherlands
          </div>
          <div className="country-pill">
            <i className="fas fa-circle-dot"></i> France
          </div>
          <div className="country-pill">
            <i className="fas fa-circle-dot"></i> Sweden
          </div>
          <div className="country-pill">
            <i className="fas fa-circle-dot"></i> Finland
          </div>
          <div className="country-pill">
            <i className="fas fa-circle-dot"></i> Austria
          </div>
          <div className="country-pill">
            <i className="fas fa-circle-dot"></i> Denmark
          </div>
          <div className="country-pill">
            <i className="fas fa-circle-dot"></i> Switzerland
          </div>
          <div className="country-pill">
            <i className="fas fa-circle-dot"></i> Belgium
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;
