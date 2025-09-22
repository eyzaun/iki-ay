import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../seo/SEO';

function Hafta4() {
  return (
    <div className="app-container">
      <SEO
        title="4. Hafta: SQL & Database Fundamentals | İki Ay"
        description="SQL CRUD, JOIN, GROUP BY, Subqueries, ACID"
        canonical="https://iki-ay.web.app/hafta4"
        og={{ url: 'https://iki-ay.web.app/hafta4' }}
      />
      <h1>4. Hafta: SQL & Database Fundamentals</h1>
      <Link to="/" className="back-link">Ana Sayfa</Link>

      <section className="section">
        <h2>Konular</h2>
        <div className="topics-grid">
          <Link to="/sql-crud" className="topic-card">
            <h3>SQL CRUD</h3>
            <p>SELECT, INSERT, UPDATE, DELETE</p>
          </Link>
          
          <Link to="/sql-filtering" className="topic-card">
            <h3>Filtering</h3>
            <p>WHERE, ORDER BY, LIMIT, DISTINCT</p>
          </Link>
          
          <Link to="/sql-joins" className="topic-card">
            <h3>JOIN Türleri</h3>
            <p>INNER, LEFT, RIGHT, FULL</p>
          </Link>
          
          <Link to="/sql-groupby" className="topic-card">
            <h3>GROUP BY & HAVING</h3>
            <p>COUNT, SUM, AVG, MAX, MIN</p>
          </Link>
          
          <Link to="/sql-subqueries" className="topic-card">
            <h3>Subqueries</h3>
            <p>SELECT içinde SELECT</p>
          </Link>
          
          <Link to="/sql-views-index" className="topic-card">
            <h3>View ve Index</h3>
            <p>View ve Index temelleri</p>
          </Link>
          
          <Link to="/sql-acid" className="topic-card">
            <h3>ACID & Transaction</h3>
            <p>BEGIN, COMMIT, ROLLBACK</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hafta4;