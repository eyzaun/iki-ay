import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import Notes from '../../../notes/Notes';

function Hafta5Quiz() {
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
        title="Hafta 5 Database - Soru & Cevap | İki Ay"
        description="5. Hafta database konularının pekiştirici soru-cevap bölümü. Normalization, Index Performance, Transaction Isolation, Explain Plan, NoSQL, MongoDB quiz."
        canonical="https://iki-ay.web.app/hafta5-quiz"
        og={{ url: 'https://iki-ay.web.app/hafta5-quiz' }}
      />

      <div className="content-header">
        <h1>Hafta 5 Database - Soru & Cevap</h1>
        <p className="quiz-subtitle">Database konularını pekiştirici sorular</p>
        <Link to="/hafta5" className="back-link">← 5. Hafta'ya Dön</Link>
      </div>

      <section className="section quiz-section">
        <h2>Database Normalization</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('norm1')}>
            <strong>S1:</strong> 1NF, 2NF, 3NF arasındaki temel fark nedir?
            <span className="toggle-indicator">{visibleAnswers.norm1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.norm1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>1NF:</strong> Atomic values, no repeating groups</li>
                <li><strong>2NF:</strong> 1NF + no partial dependencies</li>
                <li><strong>3NF:</strong> 2NF + no transitive dependencies</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('norm2')}>
            <strong>S2:</strong> Normalization'ın ana faydaları nelerdir?
            <span className="toggle-indicator">{visibleAnswers.norm2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.norm2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li>Data integrity (veri bütünlüğü)</li>
                <li>Reduced redundancy (azaltılmış tekrar)</li>
                <li>Improved data consistency (daha iyi tutarlılık)</li>
                <li>Easier maintenance (kolay bakım)</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('norm3')}>
            <strong>S3:</strong> Denormalization ne zaman tercih edilir?
            <span className="toggle-indicator">{visibleAnswers.norm3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.norm3 && (
            <div className="answer">
              <strong>C:</strong> Read performance kritik olduğunda ve data consistency'nin biraz牺牲 edilebileceği durumlarda. Data warehouse'larda sık kullanılır.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Index Performance</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('index1')}>
            <strong>S1:</strong> B-Tree index neden Hash index'ten daha yaygın kullanılır?
            <span className="toggle-indicator">{visibleAnswers.index1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.index1 && (
            <div className="answer">
              <strong>C:</strong> B-Tree range queries destekler (&gt;, &lt;, BETWEEN). Hash index sadece equality (=) destekler. Çoğu gerçek dünya sorgusu range query içerir.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('index2')}>
            <strong>S2:</strong> Index'in dezavantajları nelerdir?
            <span className="toggle-indicator">{visibleAnswers.index2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.index2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li>INSERT/UPDATE/DELETE yavaşlar (index güncelleme maliyeti)</li>
                <li>Extra disk space kullanır</li>
                <li>Yanlış index seçimi performance düşürür</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('index3')}>
            <strong>S3:</strong> Composite index ne zaman kullanılır?
            <span className="toggle-indicator">{visibleAnswers.index3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.index3 && (
            <div className="answer">
              <strong>C:</strong> WHERE clause'da birden fazla column birlikte kullanıldığında. Örnek: <code>WHERE category = 'A' AND status = 'active'</code>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Transaction Isolation</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('iso1')}>
            <strong>S1:</strong> READ UNCOMMITTED isolation level'da hangi problem oluşur?
            <span className="toggle-indicator">{visibleAnswers.iso1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.iso1 && (
            <div className="answer">
              <strong>C:</strong> <strong>Dirty Read:</strong> Başka bir transaction'ın commit etmediği değişiklikleri okumak. Veri tutarsızlığı riski.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('iso2')}>
            <strong>S2:</strong> SERIALIZABLE isolation level'ın avantaj ve dezavantajı nedir?
            <span className="toggle-indicator">{visibleAnswers.iso2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.iso2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Avantaj:</strong> En yüksek consistency garantisi</li>
                <li><strong>Dezavantaj:</strong> En yavaş performans, deadlock riski yüksek</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Explain Plan</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('explain1')}>
            <strong>S1:</strong> EXPLAIN plan'da "cost" metriği neyi gösterir?
            <span className="toggle-indicator">{visibleAnswers.explain1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.explain1 && (
            <div className="answer">
              <strong>C:</strong> Query'nin tahmini execution cost'u. Optimizer'ın farklı execution plan'larını karşılaştırmak için kullanılır. Düşük cost = daha iyi performans.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('explain2')}>
            <strong>S2:</strong> Table scan vs Index scan ne zaman tercih edilir?
            <span className="toggle-indicator">{visibleAnswers.explain2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.explain2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Table Scan:</strong> Küçük tablolar veya yüksek selectivity (&gt;20-30%)</li>
                <li><strong>Index Scan:</strong> Büyük tablolar ve düşük selectivity (&lt;5%)</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>NoSQL Databases</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('nosql1')}>
            <strong>S1:</strong> CAP theorem nedir ve ne anlama gelir?
            <span className="toggle-indicator">{visibleAnswers.nosql1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.nosql1 && (
            <div className="answer">
              <strong>C:</strong> Distributed sistemlerde 3 özellikten en fazla 2'si garanti edilebilir:
              <ul>
                <li><strong>Consistency:</strong> Tüm node'lar aynı data'ya sahip</li>
                <li><strong>Availability:</strong> Sistem her zaman yanıt verir</li>
                <li><strong>Partition Tolerance:</strong> Network bölünmelerine dayanıklı</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('nosql2')}>
            <strong>S2:</strong> MongoDB, Cassandra, Redis arasındaki temel fark nedir?
            <span className="toggle-indicator">{visibleAnswers.nosql2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.nosql2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>MongoDB:</strong> Document store, flexible schema</li>
                <li><strong>Cassandra:</strong> Wide column store, high availability</li>
                <li><strong>Redis:</strong> Key-value store, in-memory, caching</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>MongoDB</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('mongo1')}>
            <strong>S1:</strong> MongoDB'de embedding vs referencing ne zaman kullanılır?
            <span className="toggle-indicator">{visibleAnswers.mongo1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.mongo1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Embedding:</strong> One-to-one, one-to-few ilişkiler, sık birlikte erişilen data</li>
                <li><strong>Referencing:</strong> One-to-many, many-to-many ilişkiler, data büyüdüğünde</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('mongo2')}>
            <strong>S2:</strong> MongoDB aggregation pipeline nedir?
            <span className="toggle-indicator">{visibleAnswers.mongo2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.mongo2 && (
            <div className="answer">
              <strong>C:</strong> Document'ları işlemek için stage'lerden oluşan pipeline. $match, $group, $sort, $project gibi operatörlerle complex sorgular yapılır.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('mongo3')}>
            <strong>S3:</strong> MongoDB'de indexing stratejileri nelerdir?
            <span className="toggle-indicator">{visibleAnswers.mongo3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.mongo3 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li>Single field indexes</li>
                <li>Compound indexes (multiple fields)</li>
                <li>Multikey indexes (array fields)</li>
                <li>Text indexes (full-text search)</li>
                <li>Geospatial indexes (location queries)</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="quiz-summary">
          <h2>Özet</h2>
          <p>Bu sorularla Hafta 5'in tüm önemli database kavramlarını pekiştirmiş oldun! Database design ve optimization, modern uygulama geliştirme için kritik önem taşır.</p>

          <p><strong>Bir sonraki hafta:</strong> Operating System kavramları (Process, Thread, CPU Scheduling, Memory Management) seni bekliyor!</p>
        </div>
      </section>

      <Notes topicPath="/hafta5-quiz" topicTitle="Hafta 5 DSA - Soru & Cevap" />

      <div className="navigation-links">
        <Link to="/mongodb" className="nav-button">← MongoDB</Link>
        <Link to="/hafta6" className="nav-button">6. Hafta →</Link>
      </div>
    </div>
  );
}

export default Hafta5Quiz;