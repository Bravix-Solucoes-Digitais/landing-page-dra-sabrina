import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Calendar, Clock, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import './ServiceDetail.css';

const ServiceDetail = ({ onOpenModal }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      navigate('/');
    }
  }, [id, service, navigate]);

  if (!service) return null;

  return (
    <div className="service-detail-page">
      <nav className="detail-nav">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Voltar para Home
          </Link>
        </div>
      </nav>

      <section className="detail-hero">
        <div className="container">
          <div className="detail-header animate-fade-in">
            <span className="detail-category">{service.detail}</span>
            <h1 className="detail-title">{service.title}</h1>
            <p className="detail-subtitle">{service.description}</p>
          </div>
        </div>
        <div className="detail-hero-bg">
            <img src={service.image} alt={service.title} />
            <div className="detail-hero-overlay"></div>
        </div>
      </section>

      <section className="detail-content section-padding">
        <div className="container">
          <div className="detail-grid">
            <div className="detail-info">
              <h2 className="content-title">SOBRE O PROCEDIMENTO</h2>
              <p className="full-desc">{service.fullDescription}</p>
              
              <div className="benefits-list">
                <h3 className="list-title">Principais Benefícios:</h3>
                <ul>
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="benefit-item">
                      <div className="check-icon">
                        <Check size={16} />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="detail-sidebar">
              <div className="info-card">
                <div className="info-item">
                  <Clock className="gold-icon" size={24} />
                  <div>
                    <h4>Duração</h4>
                    <p>{service.duration}</p>
                  </div>
                </div>
                <div className="info-item">
                  <Sparkles className="gold-icon" size={24} />
                  <div>
                    <h4>Recuperação</h4>
                    <p>{service.recovery}</p>
                  </div>
                </div>
                <button onClick={() => onOpenModal()} className="btn-gold detail-cta">
                  <Calendar size={20} />
                  Agendar minha avaliação
                </button>
              </div>

              <div className="sidebar-note">
                <p>✦ Cada tratamento é personalizado após uma análise facial minuciosa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;
