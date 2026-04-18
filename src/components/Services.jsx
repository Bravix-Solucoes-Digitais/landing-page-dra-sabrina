import React from 'react';
import { Sparkles, Syringe, Droplets } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Droplets size={40} className="gold-icon" />,
      title: "PREENCHIMENTOS SOB MEDIDA",
      description: "Volumização e contorno labial, malar e mandibular com ácido hialurônico.",
      image: "/services/preenchimento.png"
    },
    {
      icon: <Syringe size={40} className="gold-icon" />,
      title: "TOXINA BOTULÍNICA (BOTOX)",
      description: "Tratamento de rugas e linhas de expressão para um rosto descansado.",
      image: "/services/botox.png"
    },
    {
      icon: <Sparkles size={40} className="gold-icon" />,
      title: "BIOESTIMULADORES DE COLÁGENO",
      description: "Ativação natural do colágeno para firmeza e textura renovada de pele.",
      image: "/services/colageno.png"
    }
  ];

  return (
    <section className="services-section section-padding">
      <div className="container">
        <h2 className="section-title text-center title-glow mb-2">SERVIÇOS</h2>
        <p className="section-subtitle text-center mb-5">Tratamentos avançados para realçar sua melhor versão com naturalidade.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card gold-glow">
              <div className="service-image-container">
                <div className="service-image-mask">
                  <img src={service.image} alt={service.title} className="service-image" />
                  <div className="service-image-overlay"></div>
                </div>
                <div className="service-icon-wrap">
                  {service.icon}
                </div>
              </div>
              <div className="service-text-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
