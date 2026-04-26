import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999" 
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <div className="whatsapp-icon-circle">
        <img 
          src="/images/whatsapp_gold.png" 
          alt="WhatsApp Dra. Sabrina" 
          className="whatsapp-img-icon"
        />
      </div>
    </a>
  );
};

export default WhatsAppButton;
