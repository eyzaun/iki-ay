import React from 'react';
import { Link } from 'react-router-dom';
import SEO from "../seo/SEO";

function Projeler() {
  return (
    <div className="app-container">
      <SEO
        title="Pratik Projeler | İki Ay"
        description="İki aylık program için pratik projeler - yakında eklenecek"
        canonical="https://iki-ay.web.app/projeler"
        og={{ url: 'https://iki-ay.web.app/projeler' }}
        jsonLd={{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Pratik Projeler', url: 'https://iki-ay.web.app/projeler' }}
      />
      <h1>Pratik Projeler</h1>
      <Link to="/" className="back-link">Ana Sayfa</Link>
      
      <section className="section">
        <p>Proje listesi yakında eklenecek...</p>
      </section>
    </div>
  );
}

export default Projeler;
