import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "O procedimento dói?",
      a: "Usamos técnicas para garantir seu conforto."
    },
    {
      q: "Quanto tempo dura?",
      a: "Varia de 6 a 18 meses, dependendo do produto e da sua pele."
    },
    {
      q: "O resultado é imediato?",
      a: "Alguns sim, outros como bioestimuladores levam algumas semanas."
    },
    {
      q: "Posso trabalhar depois?",
      a: "Sim, a maioria permite retorno imediato às atividades leves."
    },
    {
      q: "Fica natural?",
      a: "Sim, nossa filosofia é o 'natural-glam', sutil e sofisticado."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <h2 className="section-title text-center title-glow mb-2">PERGUNTAS FREQUENTES</h2>
        <p className="section-subtitle text-center mb-5">Esclareça suas principais dúvidas sobre nossos procedimentos.</p>
        <div className="faq-content">
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <span>P{idx+1}: {faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {openFaq === idx && (
                  <div className="faq-answer">
                    R: {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
