import React, { useState } from 'react';
import './FAQ.css';

const FAQ = ({ onOpenModal }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "A Dra. Sabrina atende por convênio?",
      a: "Nossos atendimentos são exclusivamente particulares, o que nos permite oferecer um tempo de consulta estendido, materiais de primeiríssima linha e um plano de tratamento totalmente personalizado para cada paciente."
    },
    {
      q: "Quanto tempo dura o efeito dos procedimentos?",
      a: "Isso varia conforme o procedimento. O Botox costuma durar de 4 a 6 meses. Já os preenchimentos com ácido hialurônico e bioestimuladores podem durar de 12 a 24 meses, dependendo do metabolismo de cada organismo."
    },
    {
      q: "Os procedimentos são doloridos?",
      a: "Prezamos pelo seu conforto total. Utilizamos as melhores técnicas anestésicas (tópicas e injetáveis) para garantir que sua experiência seja o mais tranquila e indolor possível."
    },
    {
      q: "Preciso de repouso após a aplicação?",
      a: "A maioria dos procedimentos permite que você retorne às suas atividades no mesmo dia. Recomendamos apenas evitar exercícios físicos intensos e exposição direta ao sol nas primeiras 24 a 48 horas."
    },
    {
      q: "Onde o consultório está localizado?",
      a: "Estamos localizados em uma área nobre e de fácil acesso, com estacionamento privativo e total discrição para nossas pacientes. O endereço exato é enviado no momento do agendamento."
    }
  ];

  const toggle = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <h2 className="section-title text-center title-glow mb-2">PERGUNTAS FREQUENTES</h2>
        <p className="section-subtitle text-center mb-5">
          Tire suas principais dúvidas sobre nossos procedimentos e atendimento.
        </p>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${openFaq === idx ? 'open' : ''}`}
              onClick={() => toggle(idx)}
            >
              <div className="faq-question">
                <span className="faq-question-text">{faq.q}</span>
                <span className={`faq-icon ${openFaq === idx ? 'rotated' : ''}`}>+</span>
              </div>
              <div className="faq-answer-wrap">
                <p className="faq-answer">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta text-center mt-5">
          <button onClick={onOpenModal} className="btn-gold cta-button">
            MINHAS DÚVIDAS ESTÃO RESPONDIDAS, QUERO AGENDAR
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
