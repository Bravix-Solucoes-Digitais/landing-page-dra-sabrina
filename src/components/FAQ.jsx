import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "Os procedimentos causam dor?",
      a: "A maioria dos procedimentos é realizada com anestesia tópica ou bloqueio local, garantindo máximo conforto durante toda a sessão. A sensação é mínima e bem tolerada pela grande maioria das pacientes."
    },
    {
      q: "Quanto tempo duram os resultados?",
      a: "Depende do procedimento: o preenchimento com ácido hialurônico dura de 8 a 18 meses, a toxina botulínica de 4 a 6 meses, e os bioestimuladores de colágeno podem durar até 2 anos. Cada caso é avaliado individualmente."
    },
    {
      q: "O resultado fica natural?",
      a: "Sim. Nossa filosofia é o 'natural-glam': realçar a beleza que já existe em você, nunca transformar. A Dra. Sabrina prioriza resultados sutis, harmoniosos e totalmente personalizados para os seus traços."
    },
    {
      q: "Posso retomar minhas atividades logo após?",
      a: "Na maioria dos procedimentos, sim. Pode haver pequeno inchaço ou hematoma por 24–48 horas, mas sem impedimento para atividades cotidianas. Orientações específicas são fornecidas na consulta."
    },
    {
      q: "Como é feita a avaliação inicial?",
      a: "A consulta é totalmente personalizada. A Dra. Sabrina analisa suas características faciais, histórico clínico e objetivos para criar um plano de tratamento exclusivo para você — sem pressão ou compromisso."
    }
  ];

  const toggle = (idx) => setOpenFaq(openFaq === idx ? -1 : idx);

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <h2 className="section-title text-center title-glow mb-2">PERGUNTAS FREQUENTES</h2>
        <p className="section-subtitle text-center mb-5">
          Esclareça suas principais dúvidas sobre nossos procedimentos.
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
      </div>
    </section>
  );
};

export default FAQ;
