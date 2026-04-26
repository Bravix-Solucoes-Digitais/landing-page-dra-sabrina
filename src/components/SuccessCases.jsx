import React from 'react';
import { ArrowRight } from 'lucide-react';
import './SuccessCases.css';

const SuccessCases = ({ onOpenModal }) => {
  const cases = [
    {
      image: "/images/case_transformacao_1.jpg",
      name: "Paciente 01",
      procedure: "Rinoplastia não-cirúrgica",
      result: "Perfil harmonizado com resultado natural"
    },
    {
      image: "/images/case_transformacao_2.jpg",
      name: "Paciente 02",
      procedure: "Rinoplastia não-cirúrgica",
      result: "Definição do nariz com técnica segura"
    },
    {
      image: "/images/case_transformacao_3.jpg",
      name: "Paciente 03",
      procedure: "Preenchimento Labial",
      result: "Lábios volumosos e naturais"
    },
    {
      image: "/images/case_transformacao_4.jpg",
      name: "Paciente 04",
      procedure: "Harmonização Facial Completa",
      result: "Rejuvenescimento e suavização de traços"
    }
  ];

  return (
    <section className="success-cases-section section-padding">
      <div className="container">
        <h2 className="section-title text-center title-glow mb-2">TRANSFORMAÇÕES</h2>
        <p className="section-subtitle text-center mb-5">Resultados reais que devolvem a autoestima e a confiança.</p>

        <div className="cases-grid">
          {cases.map((c, index) => (
            <div key={index} className="case-card gold-glow">
              <div className="case-image-wrap">
                <img src={c.image} alt="Antes e Depois" className="case-image" />
                <div className="case-labels">
                  <span className="case-label">ANTES</span>
                  <span className="case-label case-label-after">DEPOIS</span>
                </div>
              </div>
              <div className="case-footer">
                <div className="case-divider"></div>
                <p className="case-name">{c.name}</p>
                <p className="case-procedure">{c.procedure}</p>
                <p className="case-result">✦ {c.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta text-center mt-5">
          <button onClick={onOpenModal} className="btn-gold cta-button">
            Quero um resultado como esses
            <ArrowRight size={20} className="btn-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
