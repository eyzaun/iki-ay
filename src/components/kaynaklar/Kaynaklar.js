import React from 'react';
import { Link } from 'react-router-dom';
import SEO from "../seo/SEO";

function Kaynaklar() {
  return (
    <div className="app-container">
      <SEO
        title="Önerilen Kaynaklar | İki Ay"
        description="İki aylık program için önerilen kaynaklar - yakında eklenecek"
        canonical="https://iki-ay.web.app/kaynaklar"
        og={{ url: 'https://iki-ay.web.app/kaynaklar' }}
        jsonLd={{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Önerilen Kaynaklar', url: 'https://iki-ay.web.app/kaynaklar' }}
      />
      <h1>Önerilen Kaynaklar</h1>
      <Link to="/" className="back-link">Ana Sayfa</Link>
      
      <section className="section">
        <p>Kaynak listesi yakında eklenecek...</p>
      </section>
    </div>
  );
}

export default Kaynaklar;
