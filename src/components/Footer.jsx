import React from 'react';
import { Mail, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <span className="logo-icon">S</span>
          <div className="logo-text">
            <h4>SABRINA ALMEIDA</h4>
            <span className="logo-sub">ESTÉTICA AVANÇADA</span>
          </div>
        </div>
        
        <div className="footer-socials">
          <a href="#" className="social-link"><Mail size={24} /></a>
          <a href="#" className="social-link"><Send size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
