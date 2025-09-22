import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';

function Home() {
  return (
    <div className="app-container">
      <SEO
        title="İki Ay | 8 Haftalık Yazılım Geliştirme Programı"
        description="8 haftalık yoğun yazılım geliştirme programı - Veri yapıları, algoritmalar, veritabanları, işletim sistemleri ve modern teknolojiler"
        canonical="https://iki-ay.web.app/"
        og={{ url: 'https://iki-ay.web.app/' }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: 'İki Aylık Yazılım Geliştirme Programı',
          description: '8 haftalık yoğun yazılım geliştirme eğitimi',
          url: 'https://iki-ay.web.app/',
          provider: {
            '@type': 'Organization',
            name: 'İki Ay'
          }
        }}
      />
      <div className="header">
        <h1>8 Haftalık Yazılım Geliştirme Programı</h1>
        <p>Veri yapılarından modern teknolojilere kadar kapsamlı öğrenme yolculuğu</p>
      </div>

      <section className="section">
        <h2>Program İçeriği</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <h3><Link to="/hafta1">1. Hafta: Veri Yapıları Temelleri</Link></h3>
            <p>Big-O Notation, Array, Linked List, Stack, Queue, HashMap</p>
          </div>
          
          <div className="topic-card">
            <h3><Link to="/hafta2">2. Hafta: İleri Veri Yapıları</Link></h3>
            <p>Tree, BST, Heap, Trie, Graph Temelleri</p>
          </div>
          
          <div className="topic-card">
            <h3><Link to="/hafta3">3. Hafta: Algoritma Teknikleri</Link></h3>
            <p>Sorting, Searching, Two Pointers, Sliding Window</p>
          </div>
          
          <div className="topic-card">
            <h3><Link to="/hafta4">4. Hafta: İleri Algoritmalar</Link></h3>
            <p>Dynamic Programming, Greedy, Backtracking, Graph Algorithms</p>
          </div>
          
          <div className="topic-card">
            <h3><Link to="/hafta5">5. Hafta: Veritabanı Sistemleri</Link></h3>
            <p>SQL Temelleri, İleri SQL, NoSQL, Database Design</p>
          </div>
          
          <div className="topic-card">
            <h3><Link to="/hafta6">6. Hafta: İşletim Sistemleri</Link></h3>
            <p>OS Concepts, Process & Threads, Memory Management, File Systems</p>
          </div>
          
          <div className="topic-card">
            <h3><Link to="/hafta7">7. Hafta: Version Control & Networking</Link></h3>
            <p>Git İleri Seviye, Network Protocols, Web Technologies</p>
          </div>
          
          <div className="topic-card">
            <h3><Link to="/hafta8">8. Hafta: Modern Teknolojiler</Link></h3>
            <p>CI/CD, Docker, Design Patterns, Software Architecture</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2><Link to="/projeler">Pratik Projeler</Link></h2>
        <p>Proje içeriği yakında eklenecek...</p>
      </section>

      <section className="section">
        <h2><Link to="/kaynaklar">Önerilen Kaynaklar</Link></h2>
        <p>Kaynak listesi yakında eklenecek...</p>
      </section>
    </div>
  );
}

export default Home;
