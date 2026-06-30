import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { saveContactSubmission } from '../firebase';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    level: '',
    message: '',
    bProgram: '',
    bConsent: false,
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState('');
  const [brochureStatus, setBrochureStatus] = useState('idle'); // idle, preparing, sent

  useEffect(() => {
    // Initialize EmailJS with the public key from env
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '3aWC1kw6lFXVlPsDX';
    emailjs.init(publicKey);
  }, []);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setStatus('idle');

    const { firstName, lastName, email, phone, destination, level, message, bProgram, bConsent } = formData;

    if (!firstName.trim() || !email.trim() || !phone.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields (Name, Email, Phone).');
      return;
    }

    setStatus('submitting');

    const time = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

    const templateParams = {
      to_email: 'fedrickengels9@gmail.com',
      from_name: fullName,
      client_name: fullName,
      client_email: email.trim(),
      client_phone: phone.trim(),
      destination: destination || 'Not specified',
      study_level: level || 'Not specified',
      program: bProgram || 'Not specified',
      message: message.trim() || 'No message provided',
      submitted_at: time,
    };

    let emailSucceeded = false;
    let dbSucceeded = false;
    let emailError = null;
    let dbError = null;

    // 1. Send via EmailJS
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_b7t74un';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_po9n4ea';
      await emailjs.send(serviceId, templateId, templateParams);
      emailSucceeded = true;
    } catch (err) {
      console.error('EmailJS submission failed:', err);
      emailError = err;
    }

    // 2. Save in Firebase
    try {
      await saveContactSubmission(templateParams);
      dbSucceeded = true;
    } catch (err) {
      console.error('Firestore saving failed:', err);
      dbError = err;
    }

    if (emailSucceeded || dbSucceeded) {
      setStatus('success');
      
      // Automatically trigger brochure download
      const link = document.createElement('a');
      link.href = '/brochure.pdf';
      link.download = 'Northgate-Education-Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      if (!emailSucceeded) {
        console.warn('Form saved to database, but EmailJS dispatch failed:', emailError);
      }
      if (!dbSucceeded) {
        console.warn('Email sent, but saving to database failed:', dbError);
      }
    } else {
      setStatus('error');
      const detailMsg = (emailError && (emailError.text || emailError.message || JSON.stringify(emailError))) || 
                        (dbError && (dbError.message || JSON.stringify(dbError))) || 'unknown error';
      setErrorMsg(`Could not send (${detailMsg}). Please email us directly at contact@northgateeducation.com`);
    }
  };

  return (
    <section id="contact">
      <div style={{ textAlign: 'center', marginBottom: '52px' }} className="fade-up">
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <i className="fas fa-calendar-check"></i> Get In Touch
        </div>
        <h2 className="section-title">
          Book Your <span>Free Consultation</span>
        </h2>
        <p className="section-desc" style={{ margin: '0 auto' }}>
          Our counselors will reach you within 24 hours. Zero obligation, completely free.
        </p>
      </div>
      <div className="contact-wrapper">
        <div className="contact-left fade-up">
          <div className="contact-form">
            <h3>Schedule a Consultation</h3>
            <p>Fill in your details, book your free consultation and get instant access to our brochure.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">
                    <i className="fas fa-user"></i> First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Priya"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={status === 'submitting' || status === 'success'}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">
                    <i className="fas fa-user"></i> Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Sharma"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={status === 'submitting' || status === 'success'}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i> Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'submitting' || status === 'success'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  <i className="fas fa-phone"></i> Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === 'submitting' || status === 'success'}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="destination">
                    <i className="fas fa-globe"></i> Preferred Destination
                  </label>
                  <select
                    id="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    disabled={status === 'submitting' || status === 'success'}
                  >
                    <option value="">Select country</option>
                    <option>USA</option>
                    <option>United Kingdom</option>
                    <option>Europe (Germany)</option>
                    <option>Europe (France)</option>
                    <option>Europe (Netherlands)</option>
                    <option>Europe (Other)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="level">
                    <i className="fas fa-graduation-cap"></i> Study Level
                  </label>
                  <select
                    id="level"
                    value={formData.level}
                    onChange={handleChange}
                    disabled={status === 'submitting' || status === 'success'}
                  >
                    <option value="">Select level</option>
                    <option>Undergraduate</option>
                    <option>Postgraduate (Master&apos;s)</option>
                    <option>MBA</option>
                    <option>PhD / Doctoral</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  <i className="fas fa-comment"></i> Your Goals / Questions
                </label>
                <textarea
                  rows="3"
                  id="message"
                  placeholder="What do you want to study? Any specific universities in mind?"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting' || status === 'success'}
                ></textarea>
              </div>

              {/* Program of interest for brochure */}
              <div className="form-group">
                <label htmlFor="bProgram">
                  <i className="fas fa-book-open"></i> Program of Interest (for Brochure)
                </label>
                <select
                  id="bProgram"
                  value={formData.bProgram}
                  onChange={handleChange}
                  disabled={status === 'submitting' || status === 'success'}
                >
                  <option value="">Select a program</option>
                  <option>Undergraduate (USA)</option>
                  <option>Postgraduate (UK)</option>
                  <option>MBA (Europe)</option>
                  <option>PhD / Doctoral</option>
                  <option>Test Preparation (SAT / IELTS)</option>
                </select>
              </div>

              <div className="brochure-consent" style={{ margin: '12px 0 20px' }}>
                <input
                  type="checkbox"
                  id="bConsent"
                  checked={formData.bConsent}
                  onChange={handleChange}
                  disabled={status === 'submitting' || status === 'success'}
                />
                <label htmlFor="bConsent" style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.6', marginLeft: '6px' }}>
                  I agree to my personal data being processed by Northgate Education to receive programme information
                  via phone, email, or messages. I understand I can withdraw my consent at any time.
                </label>
              </div>

              {status !== 'success' && (
                <button
                  type="submit"
                  className="form-submit"
                  id="submitBtn"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Booking...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-calendar-check"></i> Book My Free Consultation
                    </>
                  )}
                </button>
              )}
            </form>

            {status === 'success' && (
              <div className="form-success" id="formSuccess" style={{ display: 'block' }}>
                <i className="fas fa-circle-check"></i> Appointment request sent! We will confirm your slot within 24 hours.
                <p style={{ marginTop: '8px', fontSize: '14px', opacity: 0.9 }}>
                  Your brochure download should have started automatically. If it did not, please click below:
                </p>
                <div style={{ marginTop: '16px' }}>
                  <a
                    href="/brochure.pdf"
                    download="Northgate-Education-Brochure.pdf"
                    className="brochure-submit"
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '13px',
                      fontSize: '14px',
                      textAlign: 'center',
                      textDecoration: 'none',
                      color: 'var(--white)',
                      fontWeight: 'bold',
                      borderRadius: '8px',
                    }}
                  >
                    <i className="fas fa-download"></i> Download Brochure (PDF) &rarr;
                  </a>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="form-error" id="formError" style={{ display: 'block' }}>
                <i className="fas fa-circle-exclamation"></i> {errorMsg}
              </div>
            )}
          </div>
        </div>
        
        <div className="contact-right fade-up">
          <div className="contact-details-box">
            <h4>
              <i className="fas fa-location-dot"></i> Contact Details
            </h4>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className="contact-detail">
                  <strong>Visit Us</strong>
                  <span>
                    No: 76, Second Floor, Chamiers Road, Nandanam, Chennai &ndash; 600018
                    <br />
                    Forest Lane, Ghitorni, Delhi
                  </span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-detail">
                  <strong>Call / WhatsApp</strong>
                  <span>+91 89259 65118</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-detail">
                  <strong>Email Us</strong>
                  <span>contact@northgateeducation.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-detail">
                  <strong>Office Hours</strong>
                  <span>
                    Mon&ndash;Sat: 9 AM &ndash; 7 PM IST
                    <br />
                    Online sessions available 7 days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
