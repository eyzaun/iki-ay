import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../seo/SEO';

function Hafta7() {
  return (
    <div className="app-container">
      <SEO
        title="7. Hafta: Git, Clean Code, Testing | İki Ay"
        description="Git, Clean Code, SOLID, Unit Testing"
        canonical="https://iki-ay.web.app/hafta7"
        og={{ url: 'https://iki-ay.web.app/hafta7' }}
      />
      <h1>7. Hafta: Git, Clean Code, Testing</h1>
      <Link to="/" className="back-link">Ana Sayfa</Link>

      <section className="section">
        <h2>Konular</h2>
        <div className="topics-grid">
          <Link to="/git-basics" className="topic-card">
            <h3>Git Temelleri</h3>
            <p>Commit, Branch, Merge, Rebase</p>
          </Link>
          
          <Link to="/git-workflow" className="topic-card">
            <h3>Git Workflow</h3>
            <p>Feature Branch & Pull Request</p>
          </Link>
          
          <Link to="/git-advanced" className="topic-card">
            <h3>Git Advanced</h3>
            <p>Stash, Revert, Reset</p>
          </Link>
          
          <Link to="/clean-code" className="topic-card">
            <h3>Clean Code</h3>
            <p>Naming, Small Functions, Comments</p>
          </Link>
          
          <Link to="/solid" className="topic-card">
            <h3>SOLID Prensipleri</h3>
            <p>5 temel yazılım tasarım prensibi</p>
          </Link>
          
          <Link to="/unit-testing" className="topic-card">
            <h3>Unit Testing</h3>
            <p>xUnit, Go testing package</p>
          </Link>
          
          <Link to="/test-coverage" className="topic-card">
            <h3>Test Coverage & CI</h3>
            <p>Test otomasyonu</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hafta7;