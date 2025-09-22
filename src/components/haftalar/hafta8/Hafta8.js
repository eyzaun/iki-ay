import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../seo/SEO';

function Hafta8() {
  return (
    <div className="app-container">
      <SEO
        title="8. Hafta: CI/CD, Docker & Design Patterns | İki Ay"
        description="Docker, CI/CD, Design Patterns, Capstone Project"
        canonical="https://iki-ay.web.app/hafta8"
        og={{ url: 'https://iki-ay.web.app/hafta8' }}
      />
      <h1>8. Hafta: CI/CD, Docker & Design Patterns</h1>
      <Link to="/" className="back-link">Ana Sayfa</Link>

      <section className="section">
        <h2>Konular</h2>
        <div className="topics-grid">
          <Link to="/docker" className="topic-card">
            <h3>Docker Temelleri</h3>
            <p>Image, Container, Dockerfile</p>
          </Link>
          
          <Link to="/cicd" className="topic-card">
            <h3>CI/CD Pipeline</h3>
            <p>GitHub Actions, Test & Build</p>
          </Link>
          
          <Link to="/design-patterns-repository" className="topic-card">
            <h3>Repository Pattern</h3>
            <p>Veri erişim katmanı deseni</p>
          </Link>
          
          <Link to="/design-patterns-factory" className="topic-card">
            <h3>Factory Method</h3>
            <p>Nesne yaratma deseni</p>
          </Link>
          
          <Link to="/design-patterns-strategy" className="topic-card">
            <h3>Strategy Pattern</h3>
            <p>Strateji tasarım deseni</p>
          </Link>
          
          <Link to="/design-patterns-observer" className="topic-card">
            <h3>Observer Pattern</h3>
            <p>Gözlemci tasarım deseni</p>
          </Link>
          
          <Link to="/design-patterns-decorator" className="topic-card">
            <h3>Decorator Pattern</h3>
            <p>Dekoratör tasarım deseni</p>
          </Link>
          
          <Link to="/capstone" className="topic-card">
            <h3>Capstone Project</h3>
            <p>2 Servisli Mini Microservice</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hafta8;