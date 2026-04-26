import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Coluna 1 — Marca */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo">
              <span className="logo-icon">S</span>
              <div className="logo-text">
                <h4>SABRINA ALMEIDA</h4>
                <span className="logo-sub">ESTÉTICA AVANÇADA</span>
              </div>
            </div>
            <p className="footer-tagline">
              Harmonização facial com naturalidade, segurança e excelência técnica.
            </p>
          </div>

          {/* Coluna 2 — Informações Clínicas */}
          <div className="footer-col">
            <h5 className="footer-col-title">CLÍNICA</h5>
            <ul className="footer-info-list">
              <li>Av. Marcolino Martins Cabral, 1688</li>
              <li>Centro, Tubarão - SC</li>
              <li>CEP: 88705-000</li>
            </ul>
            <h5 className="footer-info-list-item-title">Horários de Atendimento:</h5>
            <ul className="footer-info-list">
              <li>07:00 – 12:00</li>
              <li>13:15 – 19:00</li>
            </ul>
          </div>

          {/* Coluna 3 — Redes e Links */}
          <div className="footer-col">
            <h5 className="footer-col-title">CONTATO</h5>
            <div className="footer-socials">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram size={20} />
                <span>drasabrinapeixoto</span>
              </a>
              <a
                href="https://wa.me/554830522922"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
            <div className="footer-legal">
              <a href="#">Política de Privacidade</a>
              <span>·</span>
              <a href="#">Termos de Uso</a>
            </div>
          </div>

        </div>

        <div className="footer-copyright-main">
          <p>© {new Date().getFullYear()} Dra. Sabrina Almeida — Todos os direitos reservados.</p>
        </div>

        <div className="footer-bottom">
          <p className="footer-dev">
            Desenvolvido por <a href="https://wa.me/554898617799" target="_blank" rel="noopener noreferrer">Bravix Soluções Digitais</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
