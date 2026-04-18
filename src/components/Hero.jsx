import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            HARMONIZAÇÃO FACIAL:<br />
            <span className="hero-subtitle">DESCUBRA SUA BELEZA<br />AUTÊNTICA E NATURAL</span>
          </h1>

          <p className="hero-description">
            Realce seus traços e recupere sua confiança com procedimentos personalizados e seguros pela Dra. Sabrina Almeida.
          </p>

          <form className="hero-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Nome Completo" className="hero-input" />
            <input type="text" placeholder="Seu WhatsApp" className="hero-input" />
            <button type="submit" className="btn-primary hero-btn">QUERO MINHA CONSULTA DE AVALIAÇÃO</button>
          </form>

          <p className="hero-promo">
            Nos acompanhe nas redes sociais.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">+500</span>
              <span className="stat-label">Rostos Harmonizados</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">+8 Anos</span>
              <span className="stat-label">Experiência</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Satisfação</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrap animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img src="/images/sabrina_hero_1776531165035.png" alt="Dra. Sabrina Almeida" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
