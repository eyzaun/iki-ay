import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import Notes from '../../../notes/Notes';

function Hafta8Quiz() {
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswer = (questionId) => {
    setVisibleAnswers(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <div className="app-container">
      <SEO
        title="Hafta 8 Modern Development - Soru & Cevap | İki Ay"
        description="8. Hafta modern development tools ve capstone project konularının pekiştirici soru-cevap bölümü. Docker, CI/CD, Design Patterns quiz."
        canonical="https://iki-ay.web.app/hafta8-quiz"
        og={{ url: 'https://iki-ay.web.app/hafta8-quiz' }}
      />

      <div className="content-header">
        <h1>Hafta 8 Modern Development - Soru & Cevap</h1>
        <p className="quiz-subtitle">Modern development tools ve capstone project konularını pekiştirici sorular</p>
        <Link to="/hafta8" className="back-link">← 8. Hafta'ya Dön</Link>
      </div>

      <section className="section quiz-section">
        <h2>Docker</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('docker1')}>
            <strong>S1:</strong> Docker container vs VM arasındaki temel fark nedir?
            <span className="toggle-indicator">{visibleAnswers.docker1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.docker1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>VM:</strong> Hardware virtualization, full OS, heavy, slow startup</li>
                <li><strong>Container:</strong> OS virtualization, shared kernel, lightweight, fast startup</li>
                <li>Container'lar daha efficient ve portable</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('docker2')}>
            <strong>S2:</strong> Dockerfile'da COPY vs ADD arasındaki fark nedir?
            <span className="toggle-indicator">{visibleAnswers.docker2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.docker2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>COPY:</strong> Local files copy, transparent</li>
                <li><strong>ADD:</strong> COPY + tar extract + remote URL support</li>
                <li>Production'da COPY tercih edilir (daha predictable)</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('docker3')}>
            <strong>S3:</strong> Docker layer caching nasıl çalışır?
            <span className="toggle-indicator">{visibleAnswers.docker3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.docker3 && (
            <div className="answer">
              <strong>C:</strong> Her instruction layer oluşturur. Değişiklik olmayan layer'lar cache'den kullanılır. Dockerfile'da sık değişen komutları sona koyarak build optimization yapılır.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>CI/CD</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('cicd1')}>
            <strong>S1:</strong> CI vs CD farkı nedir?
            <span className="toggle-indicator">{visibleAnswers.cicd1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.cicd1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>CI (Continuous Integration):</strong> Code changes automatically build/test</li>
                <li><strong>CD (Continuous Delivery):</strong> Code automatically deployed to staging</li>
                <li><strong>CD (Continuous Deployment):</strong> Code automatically deployed to production</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('cicd2')}>
            <strong>S2:</strong> CI/CD pipeline'ın faydaları nelerdir?
            <span className="toggle-indicator">{visibleAnswers.cicd2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.cicd2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li>Faster feedback</li>
                <li>Automated testing</li>
                <li>Reduced manual errors</li>
                <li>Faster time-to-market</li>
                <li>Improved code quality</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Design Patterns</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pattern1')}>
            <strong>S1:</strong> Factory Pattern ne zaman kullanılır?
            <span className="toggle-indicator">{visibleAnswers.pattern1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pattern1 && (
            <div className="answer">
              <strong>C:</strong> Object creation logic'i encapsulate etmek için. Client code'dan concrete class'ları hide eder. Yeni type'lar eklendiğinde factory'yi modify etmek yeterli olur.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pattern2')}>
            <strong>S2:</strong> Observer Pattern nasıl çalışır?
            <span className="toggle-indicator">{visibleAnswers.pattern2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pattern2 && (
            <div className="answer">
              <strong>C:</strong> Subject state değiştiğinde observer'lara notification gönderir. Loose coupling sağlar. Publisher-subscriber pattern olarak da bilinir.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pattern3')}>
            <strong>S3:</strong> Strategy Pattern'ın faydası nedir?
            <span className="toggle-indicator">{visibleAnswers.pattern3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pattern3 && (
            <div className="answer">
              <strong>C:</strong> Runtime'da algorithm değiştirme imkanı verir. Inheritance yerine composition kullanır. Open/closed principle uygular.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pattern4')}>
            <strong>S4:</strong> Repository Pattern neden kullanılır?
            <span className="toggle-indicator">{visibleAnswers.pattern4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pattern4 && (
            <div className="answer">
              <strong>C:</strong> Data access logic'i encapsulate eder. Domain logic'i data access'den ayırır. Unit testing'i kolaylaştırır. Farklı data source'larına (SQL, NoSQL, in-memory) kolay geçiş sağlar.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pattern5')}>
            <strong>S5:</strong> Decorator Pattern nasıl çalışır?
            <span className="toggle-indicator">{visibleAnswers.pattern5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pattern5 && (
            <div className="answer">
              <strong>C:</strong> Object'e dinamik olarak yeni behavior ekler. Inheritance yerine composition kullanır. Open/closed principle uygular. Class explosion önler.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Capstone Project</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('capstone1')}>
            <strong>S1:</strong> Capstone project'te nelere dikkat edilmeli?
            <span className="toggle-indicator">{visibleAnswers.capstone1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.capstone1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li>Problem definition</li>
                <li>Requirements analysis</li>
                <li>System design (architecture, database, API)</li>
                <li>Implementation with best practices</li>
                <li>Testing (unit, integration, e2e)</li>
                <li>Documentation</li>
                <li>Deployment and monitoring</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('capstone2')}>
            <strong>S2:</strong> Full-stack application'da hangi teknolojiler kullanılmalı?
            <span className="toggle-indicator">{visibleAnswers.capstone2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.capstone2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Frontend:</strong> React, Vue, Angular</li>
                <li><strong>Backend:</strong> Node.js, Python, Go, Java</li>
                <li><strong>Database:</strong> PostgreSQL, MongoDB</li>
                <li><strong>Deployment:</strong> Docker, Kubernetes, AWS/GCP</li>
                <li><strong>Testing:</strong> Jest, Cypress, Postman</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('capstone3')}>
            <strong>S3:</strong> Production deployment için hangi best practices uygulanmalı?
            <span className="toggle-indicator">{visibleAnswers.capstone3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.capstone3 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li>Environment variables for secrets</li>
                <li>HTTPS everywhere</li>
                <li>Error handling and logging</li>
                <li>Monitoring and alerting</li>
                <li>Backup and disaster recovery</li>
                <li>Security hardening</li>
                <li>Performance optimization</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="quiz-summary">
          <h2>Özet</h2>
          <p>Bu sorularla Hafta 8'in tüm önemli modern development kavramlarını pekiştirmiş oldun! Docker, CI/CD, design patterns ve capstone project, full-stack development için gerekli araçlardır.</p>

          <p><strong>Tebrikler!</strong> 8 haftalık "İki Ay" programını başarıyla tamamladın! Artık temel ve ileri seviye yazılım geliştirme konularında solid bir bilgiye sahipsin.</p>
        </div>
      </section>

      <Notes topicPath="/hafta8-quiz" topicTitle="Hafta 8 DSA - Soru & Cevap" />

      <div className="navigation-links">
        <Link to="/capstone" className="nav-button">← Capstone Project</Link>
        <Link to="/home" className="nav-button">Ana Sayfa →</Link>
      </div>
    </div>
  );
}

export default Hafta8Quiz;