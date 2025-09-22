import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../seo/SEO';

function Hafta3() {
  return (
    <div className="app-container">
      <SEO
        title="3. Hafta: İleri Algoritmalar | İki Ay"
        description="Dynamic Programming, Greedy, Sliding Window, Union-Find"
        canonical="https://iki-ay.web.app/hafta3"
        og={{ url: 'https://iki-ay.web.app/hafta3' }}
      />
      <h1>3. Hafta: İleri Algoritmalar</h1>
      <Link to="/" className="back-link">Ana Sayfa</Link>

      <section className="section">
        <h2>Konular</h2>
        <div className="topics-grid">
          <Link to="/dynamic-programming" className="topic-card">
            <h3>Dynamic Programming</h3>
            <p>Memoization & Tabulation</p>
          </Link>
          
          <Link to="/greedy" className="topic-card">
            <h3>Greedy Algorithms</h3>
            <p>Açgözlü algoritma yaklaşımı</p>
          </Link>
          
          <Link to="/sliding-window" className="topic-card">
            <h3>Sliding Window & Two Pointer</h3>
            <p>Pencere kaydırma ve iki işaretçi</p>
          </Link>
          
          <Link to="/union-find" className="topic-card">
            <h3>Union-Find (DSU)</h3>
            <p>Disjoint Set Union</p>
          </Link>
          
          <Link to="/topological-sort" className="topic-card">
            <h3>Topological Sort</h3>
            <p>Graf üzerinde topolojik sıralama</p>
          </Link>
          
          <Link to="/recursion-backtracking" className="topic-card">
            <h3>Recursion & Backtracking</h3>
            <p>Özyineleme ve geri izleme</p>
          </Link>
          
          <Link to="/hafta3-quiz" className="topic-card quiz-card">
            <h3>🧠 Hafta 3 Quiz</h3>
            <p>Soru & Cevap</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hafta3;