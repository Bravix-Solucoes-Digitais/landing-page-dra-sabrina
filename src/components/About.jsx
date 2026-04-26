import React from 'react';
import { ArrowRight } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <h2 className="section-title text-center title-glow mb-2">SOBRE A ESPECIALISTA</h2>
        <p className="section-subtitle text-center mb-5">Conheça a trajetória e a paixão por trás de cada transformação.</p>
        <div className="about-content">
          <div className="about-image-wrap">
            <img src="/images/about_dr_sabrina.jpeg" alt="Dra. Sabrina" className="about-image" />
          </div>
          <div className="about-text-content">
            <h3 className="about-name text-gold mb-2">DRA. SABRINA ALMEIDA</h3>
            <p className="about-desc mb-3">
              Com ampla formação e especialização em Harmonização Facial, a Dra. Sabrina dedica-se a
              entender e realçar a beleza única de cada paciente. Com anos de experiência e constante
              atualização técnica, ela acredita que a verdadeira harmonia vem de um cuidado meticuloso e personalizado.
            </p>
            <button className="btn-primary about-btn">
              Falar com a especialista <ArrowRight size={18} className="btn-arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
