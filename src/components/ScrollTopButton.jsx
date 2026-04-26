import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import './ScrollTopButton.css';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar botão após rolar 300px (aproximadamente 20-30% de uma tela comum)
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`scroll-top-btn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <ChevronUp size={28} />
    </button>
  );
};

export default ScrollTopButton;
