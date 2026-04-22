import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content animate-fade-in">

          {/* ── Hierarquia Tipográfica ── */}
          <p className="hero-eyebrow">HARMONIZAÇÃO FACIAL</p>

          <h1 className="hero-title">
            <span className="hero-title-line1">Descubra sua</span>
            <span className="hero-title-accent">Beleza</span>
            <span className="hero-title-line2">Autêntica</span>
          </h1>

          <p className="hero-description">
            Procedimentos personalizados e seguros para realçar seus traços únicos,
            com o cuidado especializado da Dra. Sabrina Almeida.
          </p>

          {/* ── Formulário com respiração ── */}
          <div className="hero-form-wrap">
            <div className="hero-form-divider"></div>
            <form className="hero-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nome Completo" className="hero-input" />
              <input type="tel" placeholder="Seu WhatsApp com DDD" className="hero-input" />
              <button type="submit" className="btn-gold hero-btn">
                QUERO MINHA CONSULTA GRATUITA
                <span className="btn-arrow">→</span>
              </button>
            </form>
            <p className="hero-promo">✦ Avaliação personalizada sem compromisso</p>
          </div>

          {/* ── Estatísticas ── */}
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

        {/* Imagem desktop (oculta no mobile via CSS) */}
        <div className="hero-image-wrap animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img src="/images/sabrina_hero_1776531165035.png" alt="Dra. Sabrina Almeida" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
