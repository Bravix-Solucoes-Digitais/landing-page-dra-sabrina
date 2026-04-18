import React from 'react';
import './SuccessCases.css';

const SuccessCases = () => {
  return (
    <section className="success-cases-section section-padding">
      <div className="container">
        <h2 className="section-title text-center title-glow mb-2">CASES DE SUCESSO</h2>
        <p className="section-subtitle text-center mb-5">Resultados reais que devolvem a autoestima e a confiança.</p>
        
        <div className="cases-grid mb-4">
          <div className="case-card">
            <img src="/images/success_case_1776531353865.png" alt="Antes e Depois" className="case-image" />
            <div className="case-labels">
              <span className="case-label">ANTES</span>
              <span className="case-label">DEPOIS</span>
            </div>
          </div>
          <div className="case-card">
            <img src="/images/success_case_1776531353865.png" alt="Antes e Depois" className="case-image" />
            <div className="case-labels">
               <span className="case-label">ANTES</span>
               <span className="case-label">DEPOIS</span>
            </div>
          </div>
          <div className="case-card">
            <img src="/images/success_case_1776531353865.png" alt="Antes e Depois" className="case-image" />
            <div className="case-labels">
               <span className="case-label">ANTES</span>
               <span className="case-label">DEPOIS</span>
            </div>
          </div>
        </div>

        <h3 className="section-subtitle text-center">
          TRANSFORMAÇÕES REAIS, <span className="text-gold">BELEZA AUTÊNTICA</span>
        </h3>
      </div>
    </section>
  );
};

export default SuccessCases;
