// Simple sitemap generator for CRA + react-router SPA hosted on Firebase
// Update baseUrl to your production domain
const fs = require('fs');
const path = require('path');

const baseUrl = process.env.SITEMAP_BASE_URL || 'https://go-lang-learn.web.app';

// List all static routes you want indexed
// Keep this in sync with src/App.js routes
const routes = [
  '/',
  '/hafta1', '/hafta2', '/hafta3', '/hafta4',
  '/temel-sozdizimi', '/kontrol-yapilari', '/diziler-dilimler', '/map-ve-struct', '/pointers-interfaces', '/fonksiyonlar',
  '/error-handling', '/goroutines-channels', '/algoritmalar', '/hackerrank', '/leetcode', '/projeler', '/kaynaklar', '/ayarlar',
  // Temel Sözdizimi soruları
  '/soru1','/soru2','/soru3','/soru4','/soru5','/soru6','/soru7','/soru8',
  // Kontrol yapıları soruları
  '/kontrol-yapilari/soru1','/kontrol-yapilari/soru2','/kontrol-yapilari/soru3','/kontrol-yapilari/soru4','/kontrol-yapilari/soru5','/kontrol-yapilari/soru6','/kontrol-yapilari/bonus',
  // Diziler ve Dilimler soruları
  '/diziler-dilimler/soru1','/diziler-dilimler/soru2','/diziler-dilimler/soru3','/diziler-dilimler/soru4','/diziler-dilimler/soru5','/diziler-dilimler/soru6','/diziler-dilimler/bonus',
  // Map ve Struct soruları
  '/map-ve-struct/soru1','/map-ve-struct/soru2','/map-ve-struct/soru3','/map-ve-struct/soru4','/map-ve-struct/soru5',
  // Pointers ve Interfaces soruları
  '/pointers-interfaces/soru1','/pointers-interfaces/soru2','/pointers-interfaces/soru3','/pointers-interfaces/soru4','/pointers-interfaces/soru5','/pointers-interfaces/bonus',
  // Fonksiyonlar soruları
  '/fonksiyonlar/soru1','/fonksiyonlar/soru2','/fonksiyonlar/soru3','/fonksiyonlar/soru4','/fonksiyonlar/soru5','/fonksiyonlar/soru6','/fonksiyonlar/soru7','/fonksiyonlar/soru8','/fonksiyonlar/bonus',
  // Error handling soruları
  '/error-handling/soru1','/error-handling/soru2','/error-handling/soru3','/error-handling/soru4',
  // Goroutines & Channels soruları
  '/goroutines-channels/soru1','/goroutines-channels/soru2','/goroutines-channels/soru3','/goroutines-channels/soru4','/goroutines-channels/bonus',
  // Algoritmalar soruları
  '/algoritmalar/soru1','/algoritmalar/soru2','/algoritmalar/soru3','/algoritmalar/soru4','/algoritmalar/soru5','/algoritmalar/soru6','/algoritmalar/soru7','/algoritmalar/soru8','/algoritmalar/bonus',
  // LeetCode soruları
  '/leetcode/soru1','/leetcode/soru2','/leetcode/soru3','/leetcode/soru4','/leetcode/soru5','/leetcode/soru6','/leetcode/soru7',
];

function formatDate(d) {
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}
const lastmod = formatDate(new Date());

// Generate the URL set (pages)
const urls = routes.map((r) => `  <url>\n    <loc>${baseUrl}${r}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${r === '/' ? '1.0' : '0.6'}</priority>\n  </url>`).join('\n');

const urlsetXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const outDir = path.join(__dirname, '..', 'build');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap-pages.xml'), urlsetXml, 'utf8');

// Generate sitemap index that references the pages sitemap
const indexXml = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sitemapindex xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  <sitemap>\n    <loc>${baseUrl}/sitemap-pages.xml</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>\n</sitemapindex>\n`;
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), indexXml, 'utf8');
fs.writeFileSync(path.join(outDir, 'sitemap_index.xml'), indexXml, 'utf8');

console.log('Sitemap index generated: build/sitemap.xml');
console.log('Sitemap pages generated: build/sitemap-pages.xml');
