import { useEffect } from 'react'

import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import SuccessCases from './components/SuccessCases'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

import './App.css'

function App() {
  useEffect(() => {
    // Scroll Reveal anims
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Selecionar todos os itens que queremos animar e adicionar a classe base
    const elementsToAnimate = document.querySelectorAll(
      '.section-title, .service-card, .benefit-card, .case-card, .testimonial-card, .faq-item, .about-content'
    );

    elementsToAnimate.forEach((el, index) => {
      // Para não piscar na inicialização, só adicionamos reveal se estiver rodando o script
      el.classList.add('reveal');
      
      // Delay escalonado para cartões se eles estiverem na mesma linha
      if (el.className.includes('card') || el.className.includes('item')) {
        el.style.transitionDelay = `${(index % 3) * 0.15}s`;
      }
      
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Hero />
      <Services />
      <Benefits />
      <SuccessCases />
      <Testimonials />
      <About />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
