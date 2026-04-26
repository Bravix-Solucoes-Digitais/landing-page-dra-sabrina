import React from 'react';
import { Crown, Hourglass, Smile } from 'lucide-react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      icon: <Crown size={40} className="gold-icon" />,
      title: "AUTOESTIMA RENOVADA",
      description: "Sinta se mais confiante e segura com sua própria imagem."
    },
    {
      icon: <Hourglass size={40} className="gold-icon" />,
      title: "REJUVENESCIMENTO NATURAL",
      description: "Resultados sutis que suavizam os sinais do tempo."
    },
    {
      icon: <Smile size={40} className="gold-icon" />,
      title: "HARMONIA E EQUILÍBRIO",
      description: "Proporções faciais otimizadas para um rosto mais atraente."
    }
  ];

  return (
    <section className="benefits-section section-padding">
      <div className="container">
        <h2 className="section-title text-center title-glow mb-2">BENEFÍCIOS</h2>
        <p className="section-subtitle text-center mb-5">Por que escolher o cuidado exclusivo da Dra. Sabrina.</p>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon-wrap mb-2">
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
