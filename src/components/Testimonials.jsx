import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Carolina R.",
      role: "Professora, 36 anos",
      text: "A Dra. Sabrina tem um cuidado único com cada paciente. Fiz o preenchimento labial e o resultado ficou incrivelmente natural. Pela primeira vez me senti completamente eu mesma, mas em uma versão melhorada. Recomendo de olhos fechados!",
      avatar: "https://i.pravatar.cc/160?img=47"
    },
    {
      name: "Fernanda Souza",
      role: "Empresária, 43 anos",
      text: "Tinha muito medo de fazer qualquer procedimento estético, mas a Dra. Sabrina me explicou tudo com paciência e profissionalismo. O resultado do bioestimulador superou todas as minhas expectativas — minha pele está renovada.",
      avatar: "https://i.pravatar.cc/160?img=45"
    },
    {
      name: "Juliana Martins",
      role: "Designer, 29 anos",
      text: "Fiz o botox e o contorno mandibular e ficou perfeito! A Dra. Sabrina tem uma habilidade técnica incrível e um olhar artístico para cada rosto. Me sinto muito mais confiante no meu dia a dia.",
      avatar: "https://i.pravatar.cc/160?img=9"
    },
    {
      name: "Mariana Lima",
      role: "Advogada, 38 anos",
      text: "Experiência incrível do início ao fim. O atendimento é personalizado, o ambiente é acolhedor e os resultados são impressionantes. Fiz a harmonização facial completa e recebo elogios todos os dias. Valeu cada centavo!",
      avatar: "https://i.pravatar.cc/160?img=44"
    },
    {
      name: "Camila Rodrigues",
      role: "Nutricionista, 31 anos",
      text: "Sempre tive insegurança com meu perfil, especialmente o nariz. A Dra. Sabrina fez a rinoplastia não-cirúrgica e o resultado foi transformador e completamente natural. Me devolveu a autoestima que eu precisava!",
      avatar: "https://i.pravatar.cc/160?img=41"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = useCallback(() => goTo((current + 1) % testimonials.length), [current, goTo, testimonials.length]);

  // Autoplay a cada 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Índices dos 3 cards visíveis (centrado no atual)
  const getVisible = () => {
    const len = testimonials.length;
    return [
      (current - 1 + len) % len,
      current,
      (current + 1) % len
    ];
  };

  const visible = getVisible();

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <h2 className="section-title text-center title-glow mb-2">DEPOIMENTOS</h2>
        <p className="section-subtitle text-center mb-5">O que nossas pacientes dizem sobre sua experiência.</p>

        {/* --- CARROSSEL DESKTOP (Escondido no mobile) --- */}
        <div className="carousel-wrapper desktop-only">
          {/* Seta esquerda */}
          <button className="carousel-arrow carousel-arrow-left" onClick={prev} aria-label="Anterior">
            <ChevronLeft size={22} />
          </button>

          {/* Cards */}
          <div className="carousel-track">
            {visible.map((tIdx, pos) => {
              const t = testimonials[tIdx];
              const isCenter = pos === 1;
              return (
                <div
                  key={tIdx}
                  className={`testimonial-card gold-glow ${isCenter ? 'testimonial-card--active' : 'testimonial-card--side'}`}
                >
                  <div className="testimonial-quote-mark">"</div>
                  <div className="stars mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="var(--primary-gold)" color="var(--primary-gold)" />
                    ))}
                  </div>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                    <div>
                      <p className="testimonial-name">{t.name}</p>
                      <p className="testimonial-role">{t.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Seta direita */}
          <button className="carousel-arrow carousel-arrow-right" onClick={next} aria-label="Próximo">
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots - Desktop Only */}
        <div className="carousel-dots desktop-only">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === current ? 'carousel-dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>

        {/* --- CARROSSEL MOBILE (Visível apenas no mobile) --- */}
        <div className="mobile-carousel-track mobile-only">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card gold-glow testimonial-card--mobile">
              <div className="testimonial-quote-mark">"</div>
              <div className="stars mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--primary-gold)" color="var(--primary-gold)" />
                ))}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
