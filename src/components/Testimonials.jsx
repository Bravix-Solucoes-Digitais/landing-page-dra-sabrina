import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria L.",
      text: "Minha experiência foi incrível! A Dra. Sabrina é muito cuidadosa.",
      avatar: "https://i.pravatar.cc/100?img=5"
    },
    {
      name: "Pedro S.",
      text: "Nunca me senti tão bem com meu rosto.",
      avatar: "https://i.pravatar.cc/100?img=11"
    },
    {
      name: "Ana C.",
      text: "Minha experiência foi incrível! A Dra. Sabrina é muito cuidadosa.",
      avatar: "https://i.pravatar.cc/100?img=9"
    },
    {
      name: "João M.",
      text: "Nunca me senti tão bem com meu rosto.",
      avatar: "https://i.pravatar.cc/100?img=12"
    }
  ];

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <h2 className="section-title text-center title-glow mb-2">O QUE MEUS PACIENTES DIZEM</h2>
        <p className="section-subtitle text-center mb-5">O que nossos pacientes dizem sobre sua experiência na clínica.</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="testimonial-card gold-glow">
              <img src={testi.avatar} alt={testi.name} className="testimonial-avatar" />
              <div className="stars mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--primary-gold)" color="var(--primary-gold)" />)}
              </div>
              <p className="testimonial-text">"{testi.text}"</p>
              <p className="testimonial-name">- {testi.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
