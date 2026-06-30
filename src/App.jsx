import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Services from './components/Services';
import Exams from './components/Exams';
import Process from './components/Process';
import About from './components/About';
import Universities from './components/Universities';
import Testimonials from './components/Testimonials';
import Alumni from './components/Alumni';
import Trust from './components/Trust';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Chatbot from './components/Chatbot';
import SatModal from './components/SatModal';

function App() {
  const [isSatModalOpen, setIsSatModalOpen] = useState(false);

  // Setup fade-up animations scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach((el) => observer.observe(el));

    return () => {
      fadeUpElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const openSatModal = () => {
    setIsSatModalOpen(true);
  };

  const closeSatModal = () => {
    setIsSatModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Services />
      <Exams onOpenSatModal={openSatModal} />
      <Process />
      <About />
      <Universities />
      <Testimonials />
      <Alumni />
      <Trust />
      <FAQ />
      <ContactForm />
      <CtaBanner />
      <Footer />
      <WhatsAppButton />
      <Chatbot />
      <SatModal isOpen={isSatModalOpen} onClose={closeSatModal} />
    </>
  );
}

export default App;
