import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../seo/SEO';

function Hafta1() {
  return (
    <div className="app-container">
      <SEO
        title="1. Hafta: Veri Yapıları Temelleri | İki Ay"
        description="Big-O, Array, LinkedList, Stack, Queue, HashMap konularını öğrenin"
        canonical="https://iki-ay.web.app/hafta1"
        og={{ url: 'https://iki-ay.web.app/hafta1' }}
      />
      <h1>1. Hafta: Veri Yapıları Temelleri</h1>
      <Link to="/" className="back-link">Ana Sayfa</Link>

      <section className="section">
        <h2>Konular</h2>
        <div className="topics-grid">
          <Link to="/big-o" className="topic-card">
            <h3>Big-O Notation</h3>
            <p>Algoritma karmaşıklığı analizi</p>
          </Link>
          
          <Link to="/array" className="topic-card">
            <h3>Array</h3>
            <p>Dizi veri yapısı ve işlemleri</p>
          </Link>
          
          <Link to="/linkedlist" className="topic-card">
            <h3>LinkedList</h3>
            <p>Bağlı liste veri yapısı</p>
          </Link>
          
          <Link to="/stack" className="topic-card">
            <h3>Stack</h3>
            <p>Yığın veri yapısı (LIFO)</p>
          </Link>
          
          <Link to="/queue" className="topic-card">
            <h3>Queue</h3>
            <p>Kuyruk veri yapısı (FIFO)</p>
          </Link>
          
          <Link to="/hashmap" className="topic-card">
            <h3>HashMap</h3>
            <p>Hash tablosu ve hashing</p>
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Pekiştirme</h2>
        <div className="quiz-card">
          <Link to="/hafta1-quiz" className="topic-card quiz-highlight">
            <h3>Soru & Cevap</h3>
            <p>Hafta 1 konularını pekiştirici quiz</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hafta1;