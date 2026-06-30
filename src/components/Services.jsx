import React, { useState } from 'react';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (index) => {
    if (activeService === index) {
      setActiveService(null);
    } else {
      setActiveService(index);
    }
  };

  return (
    <section id="services">
      <div className="fade-up" style={{ textAlign: 'center' }}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <i className="fas fa-briefcase"></i> What We Offer
        </div>
        <h2 className="section-title">
          Complete Abroad <span>Education Support</span>
        </h2>
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Click any service to see full details of what is included.
        </p>
      </div>
      <div className="services-grid">
        {/* Card 1 */}
        <div
          className={`service-card fade-up ${activeService === 0 ? 'open' : ''}`}
          onClick={() => toggleService(0)}
        >
          <div className="service-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="service-title">Profile Building</div>
          <p className="service-short">
            Craft a compelling application profile that stands out to top admissions committees worldwide.
          </p>
          <div className="service-expand">
            We evaluate your academics, extracurriculars, work experience, and test scores to identify unique
            strengths. Our counselors create a strategic narrative and recommend profile-enhancing activities.
            <br />
            <br />
            <strong style={{ color: 'var(--teal)' }}>Includes:</strong> Academic gap analysis &middot;
            Extracurricular planning &middot; Leadership guidance &middot; Research support
          </div>
          <button className="service-toggle">
            {activeService === 0 ? 'Show less' : 'Learn more'}{' '}
            <i className={activeService === 0 ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
        </div>

        {/* Card 2 */}
        <div
          className={`service-card fade-up ${activeService === 1 ? 'open' : ''}`}
          onClick={() => toggleService(1)}
        >
          <div className="service-icon">
            <i className="fas fa-pen-to-square"></i>
          </div>
          <div className="service-title">Test Preparation</div>
          <p className="service-short">
            Personalized SAT, IELTS, TOEFL &amp; more with proven score improvement in weeks.
          </p>
          <div className="service-expand">
            Expert tutors, customized study plans, weekly mock tests, and detailed performance analytics. Most
            students see 15&ndash;25% improvement within 8 weeks.
            <br />
            <br />
            <strong style={{ color: 'var(--teal)' }}>Exams:</strong> SAT &middot; IELTS &middot; TOEFL &middot;
            CAE-C1 &middot; Duolingo English Test
          </div>
          <button className="service-toggle">
            {activeService === 1 ? 'Show less' : 'Learn more'}{' '}
            <i className={activeService === 1 ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
        </div>

        {/* Card 3 */}
        <div
          className={`service-card fade-up ${activeService === 2 ? 'open' : ''}`}
          onClick={() => toggleService(2)}
        >
          <div className="service-icon">
            <i className="fas fa-building-columns"></i>
          </div>
          <div className="service-title">University Selection</div>
          <p className="service-short">
            Data-driven shortlisting of best-fit universities based on your profile, goals &amp; budget.
          </p>
          <div className="service-expand">
            We analyze admit rates, program rankings, ROI, scholarship availability, and work opportunities to
            build your personalized list across reach, match, and safe tiers.
            <br />
            <br />
            <strong style={{ color: 'var(--teal)' }}>Covers:</strong> Program comparison &middot; Admit chance
            analysis &middot; Scholarship mapping &middot; Post-study work rules
          </div>
          <button className="service-toggle">
            {activeService === 2 ? 'Show less' : 'Learn more'}{' '}
            <i className={activeService === 2 ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
        </div>

        {/* Card 4 */}
        <div
          className={`service-card fade-up ${activeService === 3 ? 'open' : ''}`}
          onClick={() => toggleService(3)}
        >
          <div className="service-icon">
            <i className="fas fa-file-pen"></i>
          </div>
          <div className="service-title">SOP &amp; Essay Writing</div>
          <p className="service-short">
            Compelling Statements of Purpose and personal essays tailored to each university.
          </p>
          <div className="service-expand">
            Every SOP tells your unique story in a voice that resonates with admissions readers. Multiple
            drafts with university-specific feedback until your essays are polished and deadline-ready.
            <br />
            <br />
            <strong style={{ color: 'var(--teal)' }}>Documents:</strong> SOP &middot; Personal Statement &middot;
            Diversity Essay &middot; LOR guidance &middot; CV &middot; Research Proposal
          </div>
          <button className="service-toggle">
            {activeService === 3 ? 'Show less' : 'Learn more'}{' '}
            <i className={activeService === 3 ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
        </div>

        {/* Card 5 */}
        <div
          className={`service-card fade-up ${activeService === 4 ? 'open' : ''}`}
          onClick={() => toggleService(4)}
        >
          <div className="service-icon">
            <i className="fas fa-passport"></i>
          </div>
          <div className="service-title">Visa Assistance</div>
          <p className="service-short">
            98% visa approval rate with complete documentation support and mock interview prep.
          </p>
          <div className="service-expand">
            Complete visa guidance from document checklist to financial proof, DS-160 filling, and mock
            interview simulations. Updated on latest embassy guidelines for all countries.
            <br />
            <br />
            <strong style={{ color: 'var(--teal)' }}>Countries:</strong> USA (F-1) &middot; UK (Student Visa)
            &middot; Europe (Schengen) &middot; Ireland
          </div>
          <button className="service-toggle">
            {activeService === 4 ? 'Show less' : 'Learn more'}{' '}
            <i className={activeService === 4 ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
        </div>

        {/* Card 6 */}
        <div
          className={`service-card fade-up ${activeService === 5 ? 'open' : ''}`}
          onClick={() => toggleService(5)}
        >
          <div className="service-icon">
            <i className="fas fa-plane-departure"></i>
          </div>
          <div className="service-title">Pre-Departure Support</div>
          <p className="service-short">
            Flight planning, accommodation, forex, insurance &amp; full orientation so you arrive prepared.
          </p>
          <div className="service-expand">
            Comprehensive pre-departure session covering accommodation, banking, SIM cards, health insurance,
            and cultural adjustment. Access to our alumni network in your destination city.
            <br />
            <br />
            <strong style={{ color: 'var(--teal)' }}>Includes:</strong> Accommodation &middot; Forex &middot;
            Insurance &middot; Banking setup &middot; Alumni connect
          </div>
          <button className="service-toggle">
            {activeService === 5 ? 'Show less' : 'Learn more'}{' '}
            <i className={activeService === 5 ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
        </div>

        {/* Card 7 */}
        <div
          className={`service-card fade-up ${activeService === 6 ? 'open' : ''}`}
          onClick={() => toggleService(6)}
        >
          <div className="service-icon">
            <i className="fas fa-coins"></i>
          </div>
          <div className="service-title">Scholarship Guidance</div>
          <p className="service-short">
            Identify and apply for merit, need-based &amp; country-specific scholarships to fund your education.
          </p>
          <div className="service-expand">
            Database of 500+ scholarships worldwide matched to your profile. Our students have collectively
            secured over &#8377;15 Crore in scholarships in the past two years.
            <br />
            <br />
            <strong style={{ color: 'var(--teal)' }}>Types:</strong> Merit &middot; Country-specific Grants
            &middot; University Aid &middot; Government Fellowships
          </div>
          <button className="service-toggle">
            {activeService === 6 ? 'Show less' : 'Learn more'}{' '}
            <i className={activeService === 6 ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
        </div>

        {/* Card 8 */}
        <div
          className={`service-card fade-up ${activeService === 7 ? 'open' : ''}`}
          onClick={() => toggleService(7)}
        >
          <div className="service-icon">
            <i className="fas fa-handshake"></i>
          </div>
          <div className="service-title">Post-Departure Support</div>
          <p className="service-short">
            We stay by your side from the moment you depart &mdash; guiding you through your first semester and beyond.
          </p>
          <div className="service-expand">
            From airport pickup coordination to settling into your new city and navigating orientation week,
            we are a call away. Alumni introductions, part-time work regulations, and beyond.
            <br />
            <br />
            <strong style={{ color: 'var(--teal)' }}>Includes:</strong> Settling-in &middot; Part-time work
            guidance &middot; Internship prep &middot; Alumni network
          </div>
          <button className="service-toggle">
            {activeService === 7 ? 'Show less' : 'Learn more'}{' '}
            <i className={activeService === 7 ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
        </div>

        {/* Card 9 */}
        <div
          className={`service-card fade-up ${activeService === 8 ? 'open' : ''}`}
          onClick={() => toggleService(8)}
        >
          <div className="service-icon">
            <i className="fas fa-trophy"></i>
          </div>
          <div className="service-title">Extracurriculars &amp; Leadership</div>
          <p className="service-short">
            Build a standout profile through passion projects, community service, competitions, and leadership development.
          </p>
          <div className="service-expand">
            Top universities expect more than academics. We help you identify and build meaningful
            extracurricular activities that reflect your passions and leadership potential.
            <br />
            <br />
            <strong style={{ color: 'var(--teal)' }}>Includes:</strong> Passion Project &middot; Portfolio
            &amp; Resume Building &middot; Community Service &middot; Leadership Building &middot; Competitions
          </div>
          <button className="service-toggle">
            {activeService === 8 ? 'Show less' : 'Learn more'}{' '}
            <i className={activeService === 8 ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
        </div>

        {/* Card 10 */}
        <div
          className={`service-card fade-up ${activeService === 9 ? 'open' : ''}`}
          onClick={() => toggleService(9)}
        >
          <div className="service-icon">
            <i className="fas fa-pen-nib"></i>
          </div>
          <div className="service-title">Creative &amp; Academic Writing</div>
          <p className="service-short">
            Master college-level writing &mdash; from plagiarism-free academic papers to creative essays that impress admissions committees.
          </p>
          <div className="service-expand">
            Strong writing is the backbone of every successful application. Our coaches train you in academic
            integrity, structure, and style so every word stands out.
            <br />
            <br />
            <strong style={{ color: 'var(--teal)' }}>Includes:</strong> Avoid Plagiarism &amp; Learn Referencing
            &middot; Attention Grabbers for Essays &middot; Appropriate Transitions &middot; College Level
            Academic Writing &middot; Creative Brainstorming
          </div>
          <button className="service-toggle">
            {activeService === 9 ? 'Show less' : 'Learn more'}{' '}
            <i className={activeService === 9 ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
        </div>

        {/* Card 11 */}
        <div
          className={`service-card fade-up ${activeService === 10 ? 'open' : ''}`}
          onClick={() => toggleService(10)}
        >
          <div className="service-icon">
            <i className="fas fa-microphone-lines"></i>
          </div>
          <div className="service-title">Public Speaking &amp; Presentations</div>
          <p className="service-short">
            Develop the confidence to nail interviews, university presentations, and visa panels with TED-Talk level communication skills.
          </p>
          <div className="service-expand">
            From visa interviews to university rounds, your ability to speak confidently can make or break
            opportunities. We coach you to own every room you walk into.
            <br />
            <br />
            <strong style={{ color: 'var(--teal)' }}>Includes:</strong> Storytelling &amp; Persuasion &middot;
            Corporate Level Presentations &middot; Speak Like a TED-Talk Speaker &middot; Understanding Body
            Language &middot; Connect With the Audience &middot; Ace College Presentations
          </div>
          <button className="service-toggle">
            {activeService === 10 ? 'Show less' : 'Learn more'}{' '}
            <i className={activeService === 10 ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
        </div>

        {/* Card 12 */}
        <div
          className={`service-card fade-up ${activeService === 11 ? 'open' : ''}`}
          onClick={() => toggleService(11)}
        >
          <div className="service-icon">
            <i className="fas fa-hands-helping"></i>
          </div>
          <div className="service-title">Volunteering Opportunities</div>
          <p className="service-short">
            Make a real difference while strengthening your university application through certified, meaningful community service.
          </p>
          <div className="service-expand">
            Our volunteering programme connects students with impactful community service opportunities that
            are recognised by admissions officers worldwide. You leave a positive mark on your community while
            building a standout profile.
            <br />
            <br />
            <strong style={{ color: 'var(--teal)' }}>Includes:</strong>
            <ul style={{ marginTop: '10px', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
              <li>
                <i className="fas fa-certificate" style={{ color: 'var(--teal)', marginRight: '6px' }}></i>
                <strong>Get Certified by Us</strong> &mdash; official Northgate certificate recognising your contribution
              </li>
              <li>
                <i className="fas fa-envelope-open-text" style={{ color: 'var(--teal)', marginRight: '6px' }}></i>
                <strong>Get a Recommendation Letter</strong> &mdash; strong, personalised LOR for your applications
              </li>
              <li>
                <i className="fas fa-heart" style={{ color: 'var(--teal)', marginRight: '6px' }}></i>
                <strong>Leave a Positive Impact</strong> &mdash; contribute meaningfully to your local and global community
              </li>
              <li>
                <i className="fas fa-user-graduate" style={{ color: 'var(--teal)', marginRight: '6px' }}></i>
                <strong>Impress Admission Officers</strong> &mdash; stand out with verified, values-driven extracurriculars
              </li>
              <li>
                <i className="fas fa-people-group" style={{ color: 'var(--teal)', marginRight: '6px' }}></i>
                <strong>Engage in Various Community Services</strong> &mdash; diverse programmes across education, environment, and welfare
              </li>
            </ul>
          </div>
          <button className="service-toggle">
            {activeService === 11 ? 'Show less' : 'Learn more'}{' '}
            <i className={activeService === 11 ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
