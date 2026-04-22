import React from 'react';
import { Droplets, Syringe, Sparkles } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Droplets size={28} className="gold-icon" />,
      title: "PREENCHIMENTO LABIAL",
      description: "Lábios naturalmente volumosos com técnicas de preenchimento precisas. Recupere o contorno e a hidratação labial com resultado imediato.",
      detail: "Ácido Hialurônico",
      image: "/services/preenchimento.png"
    },
    {
      icon: <Syringe size={28} className="gold-icon" />,
      title: "TOXINA BOTULÍNICA",
      description: "Suavize linhas de expressão e restaure a jovialidade do rosto com a aplicação refinada do Botox pela Dra. Sabrina.",
      detail: "Botox Premium",
      image: "/services/botox.png"
    },
    {
      icon: <Sparkles size={28} className="gold-icon" />,
      title: "BIOESTIMULADORES",
      description: "Ativação natural do colágeno para firmeza e textura renovada. Resultados progressivos que duram até 2 anos.",
      detail: "Colágeno Natural",
      image: "/services/colageno.png"
    }
  ];

  return (
    <section className="services-section section-padding">
      <div className="container">
        <h2 className="section-title text-center title-glow mb-2">PROCEDIMENTOS</h2>
        <p className="section-subtitle text-center mb-5">Tratamentos avançados para realçar sua melhor versão com naturalidade.</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image-wrap">
                <img src={service.image} alt={service.title} className="service-image" />
                <div className="service-overlay">
                  <p className="service-overlay-text">{service.description}</p>
                  <span className="service-overlay-cta">Saiba mais →</span>
                </div>
              </div>
              <div className="service-body">
                <div className="service-icon-wrap">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <span className="service-detail">{service.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
