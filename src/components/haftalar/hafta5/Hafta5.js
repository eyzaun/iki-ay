import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../seo/SEO';

function Hafta5() {
  return (
    <div className="app-container">
      <SEO
        title="5. Hafta: Database Derinleşme + NoSQL | İki Ay"
        description="Normalization, Index Performance, NoSQL, MongoDB"
        canonical="https://iki-ay.web.app/hafta5"
        og={{ url: 'https://iki-ay.web.app/hafta5' }}
      />
      <h1>5. Hafta: Database Derinleşme + NoSQL</h1>
      <Link to="/" className="back-link">Ana Sayfa</Link>

      <section className="section">
        <h2>Konular</h2>
        <div className="topics-grid">
          <Link to="/normalization" className="topic-card">
            <h3>Normalization</h3>
            <p>1NF, 2NF, 3NF ve Denormalization</p>
          </Link>
          
          <Link to="/index-performance" className="topic-card">
            <h3>Index Performance</h3>
            <p>B-Tree, Hash Index</p>
          </Link>
          
          <Link to="/transaction-isolation" className="topic-card">
            <h3>Transaction Isolation</h3>
            <p>Read Uncommitted → Serializable</p>
          </Link>
          
          <Link to="/explain-plan" className="topic-card">
            <h3>Query Optimization</h3>
            <p>Explain Plan / Query Optimization</p>
          </Link>
          
          <Link to="/nosql" className="topic-card">
            <h3>NoSQL Temelleri</h3>
            <p>Key-Value, Document, Graph DB</p>
          </Link>
          
          <Link to="/mongodb" className="topic-card">
            <h3>MongoDB</h3>
            <p>CRUD ve Aggregation Pipeline</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hafta5;