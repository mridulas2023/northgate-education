import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="testi-header fade-up">
        <div className="google-badge">
          <svg width="22" height="22" viewBox="0 0 48 48">
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            />
            <path
              fill="#FBBC05"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            />
            <path fill="none" d="M0 0h48v48H0z" />
          </svg>
          <div>
            <div className="google-badge-text">Google Reviews</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="google-badge-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span className="google-badge-count">4.9 &middot; 200+ reviews</span>
            </div>
          </div>
        </div>
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <i className="fas fa-comments"></i> Student Stories
        </div>
        <h2 className="section-title">
          What Our <span>Students Say</span>
        </h2>
      </div>
      <div className="testi-track-wrap">
        <div className="testi-track" id="testiTrack">
          {/* Card 1 */}
          <div className="testi-card">
            <div className="testi-top">
              <div className="testi-author-row">
                <div className="testi-avatar">PR</div>
                <div>
                  <div className="testi-name">Priya Ramesh</div>
                  <div className="testi-dest">MS CS &middot; UC San Diego, USA</div>
                </div>
              </div>
              <div className="testi-google-icon">
                <svg width="14" height="14" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
              </div>
            </div>
            <div className="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="testi-text">
              Northgate was incredible from start to finish. Their honesty about timelines was refreshing &mdash;
              no false promises. My visa was approved on the very first attempt. Highly recommend!
            </p>
            <div className="testi-date">
              <i className="fas fa-clock" style={{ fontSize: '10px' }}></i> 2 months ago &middot;{' '}
              <span style={{ color: 'var(--teal)', fontSize: '10px' }}>Google Review</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="testi-card">
            <div className="testi-top">
              <div className="testi-author-row">
                <div className="testi-avatar">AK</div>
                <div>
                  <div className="testi-name">Arjun Kumar</div>
                  <div className="testi-dest">BEng &middot; University of Toronto</div>
                </div>
              </div>
              <div className="testi-google-icon">
                <svg width="14" height="14" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
              </div>
            </div>
            <div className="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="testi-text">
              The mentor matching made a huge difference. I actually enjoyed the prep process. Best study abroad
              consultancy in Chennai, absolutely no contest. The team truly cares.
            </p>
            <div className="testi-date">
              <i className="fas fa-clock" style={{ fontSize: '10px' }}></i> 3 months ago &middot;{' '}
              <span style={{ color: 'var(--teal)', fontSize: '10px' }}>Google Review</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="testi-card">
            <div className="testi-top">
              <div className="testi-author-row">
                <div className="testi-avatar">SM</div>
                <div>
                  <div className="testi-name">Shruti Menon</div>
                  <div className="testi-dest">MSc Finance &middot; Imperial, UK</div>
                </div>
              </div>
              <div className="testi-google-icon">
                <svg width="14" height="14" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
              </div>
            </div>
            <div className="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="testi-text">
              My SOP was completely transformed. Got into first-choice UK university and arrived feeling
              genuinely prepared for everything. Exceptional service throughout!
            </p>
            <div className="testi-date">
              <i className="fas fa-clock" style={{ fontSize: '10px' }}></i> 4 months ago &middot;{' '}
              <span style={{ color: 'var(--teal)', fontSize: '10px' }}>Google Review</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="testi-card">
            <div className="testi-top">
              <div className="testi-author-row">
                <div className="testi-avatar">VN</div>
                <div>
                  <div className="testi-name">Vikram Nair</div>
                  <div className="testi-dest">BSc CS &middot; Purdue University, USA</div>
                </div>
              </div>
              <div className="testi-google-icon">
                <svg width="14" height="14" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
              </div>
            </div>
            <div className="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="testi-text">
              SAT coaching brought my score up by 200 points in 8 weeks. The personalised study plan and weekly
              mock tests were absolute game-changers. Worth every rupee!
            </p>
            <div className="testi-date">
              <i className="fas fa-clock" style={{ fontSize: '10px' }}></i> 5 months ago &middot;   {' '}
              <span style={{ color: 'var(--teal)', fontSize: '10px' }}>Google Review</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="testi-card">
            <div className="testi-top">
              <div className="testi-author-row">
                <div className="testi-avatar">DI</div>
                <div>
                  <div className="testi-name">Divya Iyer</div>
                  <div className="testi-dest">MBA &middot; McGill University, CA</div>
                </div>
              </div>
              <div className="testi-google-icon">
                <svg width="14" height="14" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
              </div>
            </div>
            <div className="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="testi-text">
              Northgate helped me secure a partial scholarship too. Their financial aid guidance is exceptional
              and often overlooked by other consultancies. Outstanding!
            </p>
            <div className="testi-date">
              <i className="fas fa-clock" style={{ fontSize: '10px' }}></i> 1 month ago &middot;   {' '}
              <span style={{ color: 'var(--teal)', fontSize: '10px' }}>Google Review</span>
            </div>
          </div>

          {/* Card 6 */}
          <div className="testi-card">
            <div className="testi-top">
              <div className="testi-author-row">
                <div className="testi-avatar">RS</div>
                <div>
                  <div className="testi-name">Rohit Sharma</div>
                  <div className="testi-dest">MS Data Science &middot; TU Munich</div>
                </div>
              </div>
              <div className="testi-google-icon">
                <svg width="14" height="14" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
              </div>
            </div>
            <div className="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="testi-text">
              Transparency, attention to detail, genuine care &mdash; Northgate stands apart. My dream of
              studying in Europe is now a reality thanks to their incredible guidance.
            </p>
            <div className="testi-date">
              <i className="fas fa-clock" style={{ fontSize: '10px' }}></i> 3 weeks ago &middot;   {' '}
              <span style={{ color: 'var(--teal)', fontSize: '10px' }}>Google Review</span>
            </div>
          </div>

          {/* Card 7 */}
          <div className="testi-card">
            <div className="testi-top">
              <div className="testi-author-row">
                <div className="testi-avatar">KP</div>
                <div>
                  <div className="testi-name">Kavitha Pillai</div>
                  <div className="testi-dest">LLM &middot; University of Edinburgh, UK</div>
                </div>
              </div>
              <div className="testi-google-icon">
                <svg width="14" height="14" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
              </div>
            </div>
            <div className="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="testi-text">
              From IELTS coaching to visa approval, Northgate handled everything perfectly. Responsive,
              professional, and genuinely invested in your success.
            </p>
            <div className="testi-date">
              <i className="fas fa-clock" style={{ fontSize: '10px' }}></i> 6 months ago &middot;   {' '}
              <span style={{ color: 'var(--teal)', fontSize: '10px' }}>Google Review</span>
            </div>
          </div>

          {/* Card 8 */}
          <div className="testi-card">
            <div className="testi-top">
              <div className="testi-author-row">
                <div className="testi-avatar">MT</div>
                <div>
                  <div className="testi-name">Madhav Tiwari</div>
                  <div className="testi-dest">MS Robotics &middot; ETH Zurich</div>
                </div>
              </div>
              <div className="testi-google-icon">
                <svg width="14" height="14" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
              </div>
            </div>
            <div className="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="testi-text">
              Getting into ETH Zurich felt impossible until Northgate created my application strategy. Their
              knowledge of European admissions is unmatched. Incredibly thankful.
            </p>
            <div className="testi-date">
              <i className="fas fa-clock" style={{ fontSize: '10px' }}></i> 2 months ago &middot;   {' '}
              <span style={{ color: 'var(--teal)', fontSize: '10px' }}>Google Review</span>
            </div>
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="testi-card">
            <div className="testi-top">
              <div className="testi-author-row">
                <div className="testi-avatar">PR</div>
                <div>
                  <div className="testi-name">Priya Ramesh</div>
                  <div className="testi-dest">MS CS &middot; UC San Diego, USA</div>
                </div>
              </div>
              <div className="testi-google-icon">
                <svg width="14" height="14" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
              </div>
            </div>
            <div className="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="testi-text">
              Northgate was incredible from start to finish. No false promises, genuine honesty. Visa approved
              first attempt. Best decision I made for my abroad journey.
            </p>
            <div className="testi-date">
              <i className="fas fa-clock" style={{ fontSize: '10px' }}></i> 2 months ago &middot;   {' '}
              <span style={{ color: 'var(--teal)', fontSize: '10px' }}>Google Review</span>
            </div>
          </div>

          <div className="testi-card">
            <div className="testi-top">
              <div className="testi-author-row">
                <div className="testi-avatar">AK</div>
                <div>
                  <div className="testi-name">Arjun Kumar</div>
                  <div className="testi-dest">BEng &middot; University of Toronto</div>
                </div>
              </div>
              <div className="testi-google-icon">
                <svg width="14" height="14" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
              </div>
            </div>
            <div className="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="testi-text">
              Mentor matching was a game-changer. Enjoyed the entire process. Best consultancy in Chennai, no
              contest at all.
            </p>
            <div className="testi-date">
              <i className="fas fa-clock" style={{ fontSize: '10px' }}></i> 3 months ago &middot;   {' '}
              <span style={{ color: 'var(--teal)', fontSize: '10px' }}>Google Review</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '40px' }} className="fade-up">
        <div className="google-reviews-embed">
          <div className="gr-header">
            <div className="gr-logo">
              <svg width="24" height="24" viewBox="0 0 48 48">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                />
              </svg>
            </div>
            <div className="gr-info">
              <strong>Northgate Education &mdash; Google Reviews</strong>
              <span>Verified student reviews on Google Maps</span>
            </div>
          </div>
          <div className="gr-overall">
            <div className="gr-score">4.9</div>
            <div>
              <div className="gr-stars-big">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <div className="gr-count">Based on 200+ Google reviews</div>
            </div>
          </div>
          <div className="gr-notice">
            <i className="fas fa-circle-info"></i>
            <p>
              The reviews shown above are sourced from real students of Northgate Education. To read all verified
              Google reviews directly, visit our Google Business profile. Google&apos;s API restricts automatic
              embedding of live reviews &mdash;{' '}
              <a href="https://www.google.com/search?q=Northgate+Education+Chennai+reviews" target="_blank" rel="noopener noreferrer">
                click here to read all reviews on Google
              </a>
              .
            </p>
          </div>
          <a
            href="https://www.google.com/search?q=Northgate+Education+Chennai+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="gr-btn"
          >
            <svg width="16" height="16" viewBox="0 0 48 48">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
            Read All Google Reviews &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
