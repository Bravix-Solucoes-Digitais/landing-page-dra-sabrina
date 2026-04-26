import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: ''
  });

  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Bloqueia o scroll do body quando o modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    
    // Máscara (11) 99999-9999
    if (value.length <= 11) {
      value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
      value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    }
    
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formata a mensagem para o WhatsApp
    const message = `Olá, acabei de preencher o formulário no site e gostaria de confirmar meu interesse no procedimento: ${formData.service}. \n\nNome: ${formData.name}\nWhatsApp: ${formData.phone}\nE-mail: ${formData.email}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/554830522922?text=${encodedMessage}`;
    
    // Simula envio e redireciona
    console.log('Formulário enviado:', formData);
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <X size={24} />
        </button>

        <div className="modal-header">
          <h2 className="modal-title">Falta pouco para sua transformação</h2>
          <p className="modal-subtitle">Preencha os dados abaixo e entraremos em contato o mais breve possível.</p>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome Completo</label>
            <input
              id="name"
              type="text"
              required
              placeholder="Ex: Maria Oliveira"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="modal-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">WhatsApp</label>
            <input
              id="phone"
              type="tel"
              required
              placeholder="(11) 99999-9999"
              value={formData.phone}
              onChange={handlePhoneChange}
              className="modal-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              required
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="modal-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Serviço Desejado</label>
            <select
              id="service"
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="modal-input modal-select"
            >
              <option value="" disabled>Selecione um procedimento</option>
              <option value="Botox">Botox (Toxina Botulínica)</option>
              <option value="Preenchimento Labial">Preenchimento Labial</option>
              <option value="Harmonização Facial">Harmonização Facial</option>
              <option value="Bioestimuladores">Bioestimuladores de Colágeno</option>
              <option value="Rinoplastia">Rinoplastia não-cirúrgica</option>
              <option value="Outros">Outros procedimentos</option>
            </select>
          </div>

          <button type="submit" className="btn-gold modal-submit">
            Solicitar agendamento
            <ArrowRight size={20} className="btn-arrow" />
          </button>
        </form>

        <p className="modal-footer-text">
          ✦ Seus dados estão seguros conosco.
        </p>
      </div>
    </div>
  );
};

export default ContactModal;
