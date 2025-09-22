import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../seo/SEO';

function Hafta6() {
  return (
    <div className="app-container">
      <SEO
        title="6. Hafta: İşletim Sistemleri & Concurrency | İki Ay"
        description="Process, Thread, Memory Management, Synchronization"
        canonical="https://iki-ay.web.app/hafta6"
        og={{ url: 'https://iki-ay.web.app/hafta6' }}
      />
      <h1>6. Hafta: İşletim Sistemleri & Concurrency</h1>
      <Link to="/" className="back-link">Ana Sayfa</Link>

      <section className="section">
        <h2>Konular</h2>
        <div className="topics-grid">
          <Link to="/process-thread" className="topic-card">
            <h3>Process vs Thread</h3>
            <p>İşlem ve iş parçacığı farkları</p>
          </Link>
          
          <Link to="/cpu-scheduling" className="topic-card">
            <h3>CPU Scheduling</h3>
            <p>Round Robin, Priority Scheduling</p>
          </Link>
          
          <Link to="/context-switching" className="topic-card">
            <h3>Context Switching</h3>
            <p>Bağlam değiştirme mantığı</p>
          </Link>
          
          <Link to="/memory-management" className="topic-card">
            <h3>Memory Management</h3>
            <p>Paging, Segmentation, Virtual Memory</p>
          </Link>
          
          <Link to="/synchronization" className="topic-card">
            <h3>Synchronization</h3>
            <p>Mutex, Semaphore, Monitor</p>
          </Link>
          
          <Link to="/deadlock" className="topic-card">
            <h3>Deadlock</h3>
            <p>Koşulları & Önleme Stratejileri</p>
          </Link>
          
          <Link to="/producer-consumer" className="topic-card">
            <h3>Producer-Consumer</h3>
            <p>Üretici-Tüketici Problemi</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hafta6;