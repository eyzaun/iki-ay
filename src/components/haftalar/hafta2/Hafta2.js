import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../seo/SEO';

function Hafta2() {
  return (
    <div className="app-container">
      <SEO
        title="2. Hafta: İleri Veri Yapıları ve Algoritmalar | İki Ay"
        description="Binary Tree, BST, Graph, BFS/DFS, Sorting algoritmaları"
        canonical="https://iki-ay.web.app/hafta2"
        og={{ url: 'https://iki-ay.web.app/hafta2' }}
      />
      <h1>2. Hafta: İleri Veri Yapıları ve Algoritmalar</h1>
      <Link to="/" className="back-link">Ana Sayfa</Link>

      <section className="section">
        <h2>Konular</h2>
        <div className="topics-grid">
          <Link to="/binary-tree" className="topic-card">
            <h3>Binary Tree</h3>
            <p>Ağaç veri yapısının temelleri</p>
          </Link>
          
          <Link to="/bst" className="topic-card">
            <h3>Binary Search Tree (BST)</h3>
            <p>Sıralı ağaç yapısı ve O(log n) operasyonlar</p>
          </Link>
          
          <Link to="/dfs" className="topic-card">
            <h3>Tree Traversal - DFS</h3>
            <p>Preorder, Inorder, Postorder traversals</p>
          </Link>
          
          <Link to="/bfs" className="topic-card">
            <h3>BFS & Graph Yapıları</h3>
            <p>Level-order traversal ve graph temelleri</p>
          </Link>
          
          <Link to="/sorting" className="topic-card">
            <h3>Sorting Algorithms</h3>
            <p>MergeSort, QuickSort ve divide & conquer</p>
          </Link>
          
          <Link to="/bst-advanced" className="topic-card">
            <h3>Binary Search Advanced</h3>
            <p>Advanced binary search applications</p>
          </Link>
          
          <Link to="/quiz-hafta2" className="topic-card">
            <h3>Quiz - Hafta 2</h3>
            <p>45 soru ile kendini test et</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hafta2;