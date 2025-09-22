# iki-ay

React ile geliştirilmiş, konu anlatımları ve kişisel notlar için hazırlanmış bir çalışma uygulaması. Firebase ile kimlik doğrulama ve not kaydı, PWA desteği ve ayarlanabilir kod blokları içerir.

## Başlarken

Gereksinimler:
- Node.js 18+
- Firebase projesi ve `firebase-tools`

Kurulum:
1. Bağımlılıkları yükleyin
   npm install
2. Geliştirme sunucusunu başlatın
   npm start
3. Üretim için derleyin
   npm run build

## Özellikler
- Konu sayfaları ve hafta bazlı içerik
- Notlar: zengin metin, kod blokları, görsel yükleme, otomatik kaydetme
- Not penceresi: sürükle-bırak, yeniden boyutlandırma, şeffaflık ayarı, mobil uyumlu
- Kod blokları: Prism temaları, ayarlardan tema ve yazı boyutu değiştirilebilir
- Notlarım sayfası: tüm notları listeleme, birleştirilmiş notu görüntüleme ve indirme
- PWA: ana ekrana ekleme ve çevrimdışı önbellekleme
- SEO: temel meta ve site haritası üretimi

## Firebase
- `firebase.json` ve `firestore.rules` dosyaları projede mevcut.
- Dağıtım için:
   npm run build
   firebase deploy

## Proje Yapısı
- public: statik dosyalar ve manifest
- src: React bileşenleri, bağlamlar ve stiller
- tools: site haritası gibi yardımcı scriptler

## Komutlar
- Geliştirme: npm start
- Derleme: npm run build
- Test: npm test
- Dağıtım: npm run build && firebase deploy

## Notlar
- Kod temaları ve yazı boyutu Ayarlar sayfasından değiştirilebilir.
- Not editöründeki kod blokları, konu sayfalarındaki ile aynı temayı kullanır.
