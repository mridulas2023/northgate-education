import React, { useState } from 'react';

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const faqs = [
    {
      icon: 'fas fa-clock',
      q: 'When should I start the study abroad process?',
      a: 'Ideally 18–24 months before your intended intake. This gives adequate time for test preparation, profile building, and applications. We have also helped students with as little as 6 months notice — reach out and we will assess your timeline.',
    },
    {
      icon: 'fas fa-coins',
      q: 'How much does it cost to study abroad?',
      a: 'Costs vary by country: USA and UK typically ₹30–80L/year; Europe (especially Germany) can be as low as ₹5–15L/year at public universities. We help you find universities matching your budget and identify scholarships to reduce the burden.',
    },
    {
      icon: 'fas fa-graduation-cap',
      q: 'Do you support both undergraduate and postgraduate applications?',
      a: "Yes, we specialise in both Bachelor's and Master's/MBA/PhD admissions, with domain experts for each level who understand the specific evaluation criteria at each stage.",
    },
    {
      icon: 'fas fa-passport',
      q: 'What is your visa success rate?',
      a: 'We maintain a 98%+ visa success rate across all destination countries. Our counselors provide thorough documentation support and mock interview preparation for F-1, Tier-4, Study Permit, and Schengen student visas.',
    },
    {
      icon: 'fas fa-user-tie',
      q: 'Can I switch my assigned mentor?',
      a: 'Absolutely. You can request a switch at any time without any penalty. Finding the right mentor chemistry is a core part of our service commitment — we want you to enjoy the journey.',
    },
    {
      icon: 'fas fa-robot',
      q: 'How does the AI chatbot work?',
      a: "Our AI assistant (the teal robot button at the bottom right) answers questions about destinations, exams, visa processes, and scholarships instantly, 24/7. For deeper personalised advice, book a free consultation with our human counselors.",
    },
  ];

  return (
    <section id="faq">
      <div className="fade-up" style={{ textAlign: 'center' }}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <i className="fas fa-circle-question"></i> Common Questions
        </div>
        <h2 className="section-title">
          Frequently Asked <span>Questions</span>
        </h2>
      </div>
      <div className="faq-list fade-up">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeFaq === index ? 'open' : ''}`}>
            <div className="faq-q" onClick={() => toggleFaq(index)}>
              <i className={`${faq.icon} faq-lead`}></i>
              {faq.q}
              <i className="fas fa-plus faq-icon"></i>
            </div>
            <div className="faq-a">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
