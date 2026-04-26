import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Benefits from '../components/Benefits'
import SuccessCases from '../components/SuccessCases'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

/* ── Separador ornamental dourado ── */
const GoldDivider = () => (
  <div className="gold-divider" aria-hidden="true">
    <span className="gold-divider-icon">✦</span>
  </div>
);

const Home = ({ onOpenModal }) => {
  useEffect(() => {
    // Scroll Reveal — IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.12
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll(
      '.hero-title, .hero-description, .hero-form-wrap, .section-title, .service-card, .benefit-card, .case-card, .testimonial-card, .faq-item, .about-content'
    );

    elementsToAnimate.forEach((el, index) => {
      el.classList.add('reveal');
      if (el.className.includes('card') || el.className.includes('item')) {
        el.style.transitionDelay = `${(index % 3) * 0.1}s`;
      }
      observer.observe(el);
    });

    // Segurança: Força a exibição após 2.5s caso algo trave
    const safetyTimeout = setTimeout(() => {
      elementsToAnimate.forEach(el => el.classList.add('active'));
    }, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimeout);
    };
  }, []);

  return (
    <>
      <Hero onOpenModal={onOpenModal} />
      <GoldDivider />
      <Services />
      <GoldDivider />
      <Benefits />
      <GoldDivider />
      <SuccessCases onOpenModal={onOpenModal} />
      <GoldDivider />
      <Testimonials onOpenModal={onOpenModal} />
      <GoldDivider />
      <About />
      <GoldDivider />
      <FAQ onOpenModal={onOpenModal} />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;
