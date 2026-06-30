import React from 'react';

const Universities = () => {
  return (
    <section id="universities">
      <div className="fade-up" style={{ textAlign: 'center', padding: '0 5%' }}>
        <div className="section-tag" style={{ justifyContent: 'center', color: 'var(--teal)' }}>
          <i className="fas fa-trophy"></i> Our Track Record
        </div>
        <h2 className="section-title light">
          Students <span style={{ color: 'var(--teal)' }}>Admitted To</span>
        </h2>
        <p className="section-desc light" style={{ margin: '10px auto 0', maxWidth: '520px' }}>
          Our students have earned places at some of the world&apos;s most prestigious universities.
        </p>
      </div>
      <div className="uni-marquee-wrap fade-up">
        <div className="uni-marquee-mask">
          <div className="uni-marquee-track" id="uniMarqueeTrack">
            {/* Slide group 1 */}
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#57068c' }}>
                <img src="/assets/html_img_2.png" alt="NYU" loading="lazy" />
              </div>
              <span className="uni-logo-name">NYU</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f5f7fc' }}>
                <img src="/assets/html_img_3.png" alt="Columbia University" loading="lazy" />
              </div>
              <span className="uni-logo-name">Columbia University</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#fff' }}>
                <img src="/assets/html_img_4.png" alt="UCL" loading="lazy" />
              </div>
              <span className="uni-logo-name">UCL</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f5f5f5' }}>
                <img src="/assets/html_img_5.png" alt="Caltech" loading="lazy" />
              </div>
              <span className="uni-logo-name">Caltech</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#fff' }}>
                <img src="/assets/html_img_6.png" alt="King's College London" loading="lazy" />
              </div>
              <span className="uni-logo-name">King's College London</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f8f8f8' }}>
                <img src="/assets/html_img_7.png" alt="Hult Business School" loading="lazy" />
              </div>
              <span className="uni-logo-name">Hult Business School</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f5f7fa' }}>
                <img src="/assets/html_img_8.png" alt="MIT" loading="lazy" />
              </div>
              <span className="uni-logo-name">MIT</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#2D68C4' }}>
                <img src="/assets/html_img_9.png" alt="UCLA" loading="lazy" />
              </div>
              <span className="uni-logo-name">UCLA</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f0f4f8' }}>
                <img src="/assets/html_img_10.png" alt="Imperial College" loading="lazy" />
              </div>
              <span className="uni-logo-name">Imperial College</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f5f7fc' }}>
                <img src="/assets/html_img_11.png" alt="Yale University" loading="lazy" />
              </div>
              <span className="uni-logo-name">Yale University</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f9f5f5' }}>
                <img src="/assets/html_img_12.png" alt="Harvard University" loading="lazy" />
              </div>
              <span className="uni-logo-name">Harvard University</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#fff' }}>
                <img src="/assets/html_img_13.png" alt="NTU Singapore" loading="lazy" />
              </div>
              <span className="uni-logo-name">NTU Singapore</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f8f8f8' }}>
                <img src="/assets/html_img_14.png" alt="Charles University" loading="lazy" />
              </div>
              <span className="uni-logo-name">Charles University</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f5f5f5' }}>
                <img src="/assets/html_img_15.png" alt="Univ. of Illinois" loading="lazy" />
              </div>
              <span className="uni-logo-name">Univ. of Illinois</span>
            </div>

            {/* Slide group 2 (Duplicates for seamless loop) */}
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#57068c' }}>
                <img src="/assets/html_img_16.png" alt="NYU" loading="lazy" />
              </div>
              <span className="uni-logo-name">NYU</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f5f7fc' }}>
                <img src="/assets/html_img_17.png" alt="Columbia University" loading="lazy" />
              </div>
              <span className="uni-logo-name">Columbia University</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#fff' }}>
                <img src="/assets/html_img_18.png" alt="UCL" loading="lazy" />
              </div>
              <span className="uni-logo-name">UCL</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f5f5f5' }}>
                <img src="/assets/html_img_19.png" alt="Caltech" loading="lazy" />
              </div>
              <span className="uni-logo-name">Caltech</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#fff' }}>
                <img src="/assets/html_img_20.png" alt="King's College London" loading="lazy" />
              </div>
              <span className="uni-logo-name">King's College London</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f8f8f8' }}>
                <img src="/assets/html_img_21.png" alt="Hult Business School" loading="lazy" />
              </div>
              <span className="uni-logo-name">Hult Business School</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f5f7fa' }}>
                <img src="/assets/html_img_22.png" alt="MIT" loading="lazy" />
              </div>
              <span className="uni-logo-name">MIT</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#2D68C4' }}>
                <img src="/assets/html_img_23.png" alt="UCLA" loading="lazy" />
              </div>
              <span className="uni-logo-name">UCLA</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f0f4f8' }}>
                <img src="/assets/html_img_24.png" alt="Imperial College" loading="lazy" />
              </div>
              <span className="uni-logo-name">Imperial College</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f5f7fc' }}>
                <img src="/assets/html_img_25.png" alt="Yale University" loading="lazy" />
              </div>
              <span className="uni-logo-name">Yale University</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f9f5f5' }}>
                <img src="/assets/html_img_26.png" alt="Harvard University" loading="lazy" />
              </div>
              <span className="uni-logo-name">Harvard University</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#fff' }}>
                <img src="/assets/html_img_27.png" alt="NTU Singapore" loading="lazy" />
              </div>
              <span className="uni-logo-name">NTU Singapore</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f8f8f8' }}>
                <img src="/assets/html_img_28.png" alt="Charles University" loading="lazy" />
              </div>
              <span className="uni-logo-name">Charles University</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#f5f5f5' }}>
                <img src="/assets/html_img_29.png" alt="Univ. of Illinois" loading="lazy" />
              </div>
              <span className="uni-logo-name">Univ. of Illinois</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#003262' }}>
                <img src="/assets/html_img_30.svg" alt="UC Berkeley" loading="lazy" />
              </div>
              <span className="uni-logo-name">UC Berkeley</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#C60C30' }}>
                <img src="/assets/html_img_31.svg" alt="Carnegie Mellon" loading="lazy" />
              </div>
              <span className="uni-logo-name">Carnegie Mellon</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#fff' }}>
                <img src="/assets/html_img_32.svg" alt="ETH Zurich" loading="lazy" />
              </div>
              <span className="uni-logo-name">ETH Zurich</span>
            </div>
            <div className="uni-logo-item">
              <div className="uni-logo-box" style={{ background: '#fff' }}>
                <img src="/assets/html_img_33.svg" alt="Sciences Po" loading="lazy" />
              </div>
              <span className="uni-logo-name">Sciences Po</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universities;
