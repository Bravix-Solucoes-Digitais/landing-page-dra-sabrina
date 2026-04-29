import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = ({ onOpenModal }) => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge animate-fade-in">
            <span className="badge-icon">✦</span>
            <span className="badge-text">Dra. Sabrina Peixoto</span>
          </div>

          <p className="hero-eyebrow">HARMONIZAÇÃO FACIAL</p>

          <h1 className="hero-title">
            <span className="hero-title-line1">Descubra sua</span>
            <div className="hero-title-glow-wrap">
              <span className="hero-title-accent">Beleza</span>
            </div>
            <span className="hero-title-line2">Autêntica</span>
          </h1>

          <div className="hero-image-main">
            <img src="/images/hero_mobile_v6.jpg" alt="Dra. Sabrina Peixoto" className="hero-main-img" />
          </div>

          <p className="hero-description">
            Procedimentos personalizados e seguros para realçar seus traços únicos,
            com o cuidado especializado da Dra. Sabrina Peixoto.
          </p>

          <div className="hero-form-wrap">
            <div className="hero-form-divider"></div>
            <button onClick={onOpenModal} className="btn-gold hero-btn">
              Quero minha consulta gratuita
              <ArrowRight size={20} className="btn-arrow" />
            </button>
            <p className="hero-promo">✦ Avaliação personalizada sem compromisso</p>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">+500</span>
              <span className="stat-label">Rostos Harmonizados</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">+8 Anos</span>
              <span className="stat-label">de Experiência</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
