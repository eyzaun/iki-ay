import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import Notes from '../../../notes/Notes';

function Hafta1Quiz() {
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswer = (questionId) => {
    setVisibleAnswers(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <div className="app-container">
      <SEO
        title="Hafta 1 DSA - Soru & Cevap | İki Ay"
        description="1. Hafta veri yapıları konularının pekiştirici soru-cevap bölümü. Big-O, Array, LinkedList, Stack, Queue, HashMap quiz."
        canonical="https://iki-ay.web.app/hafta1-quiz"
        og={{ url: 'https://iki-ay.web.app/hafta1-quiz' }}
      />
      
      <div className="content-header">
        <h1>Hafta 1 DSA - Soru & Cevap</h1>
        <p className="quiz-subtitle">Veri yapıları konularını pekiştirici sorular</p>
        <Link to="/hafta1" className="back-link">← 1. Hafta'ya Dön</Link>
      </div>

      <section className="section quiz-section">
        <h2>Big-O Notation</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bigO1')}>
            <strong>S1:</strong> Big-O notation nedir ve neden önemlidir?
            <span className="toggle-indicator">{visibleAnswers.bigO1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bigO1 && (
            <div className="answer">
              <strong>C:</strong> Big-O, algoritmaların performansını ölçen bir notasyondur. Algoritmanın en kötü durumda ne kadar süreceğini gösterir. 
              Önemli çünkü farklı algoritmaları karşılaştırabilir ve büyük veri setlerinde hangisinin daha iyi olacağını önceden bilebiliriz.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bigO2')}>
            <strong>S2:</strong> O(1) ve O(n) arasındaki fark nedir? Örnek verin.
            <span className="toggle-indicator">{visibleAnswers.bigO2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bigO2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>O(1):</strong> Veri boyutu ne olursa olsun hep aynı süre. Örnek: Array'de index ile erişim <code>arr[5]</code></li>
                <li><strong>O(n):</strong> Veri boyutu 2 katına çıkınca süre de 2 katına çıkar. Örnek: Array'de linear search</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bigO3')}>
            <strong>S3:</strong> Aşağıdaki kodun Big-O karmaşıklığı nedir?
            <pre><code>{`for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        Console.WriteLine(i + j);
    }
}`}</code></pre>
            <span className="toggle-indicator">{visibleAnswers.bigO3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bigO3 && (
            <div className="answer">
              <strong>C:</strong> <strong>O(n²)</strong> - İç içe iki döngü var ve ikisi de n kez çalışıyor. n × n = n²
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bigO4')}>
            <strong>S4:</strong> Binary Search neden O(log n) karmaşıklığına sahiptir?
            <span className="toggle-indicator">{visibleAnswers.bigO4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bigO4 && (
            <div className="answer">
              <strong>C:</strong> Her adımda arama alanını yarıya böldüğü için. 1000 elemanlık array'de en fazla 10 adımda (log₂ 1000 ≈ 10) sonuca ulaşır.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bigO5')}>
            <strong>S5:</strong> O(n + n²) ifadesi nasıl sadeleşir?
            <span className="toggle-indicator">{visibleAnswers.bigO5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bigO5 && (
            <div className="answer">
              <strong>C:</strong> <strong>O(n²)</strong> olur. Big-O'da en büyük terim alınır, sabitler ve küçük terimler ihmal edilir.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Arrays (Diziler)</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('array1')}>
            <strong>S1:</strong> Array'in en büyük avantajı ve dezavantajı nedir?
            <span className="toggle-indicator">{visibleAnswers.array1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.array1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Avantaj:</strong> Index ile O(1) hızında erişim</li>
                <li><strong>Dezavantaj:</strong> Sabit boyut (klasik array'lerde) ve ortaya ekleme/silme pahalı (O(n))</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('array2')}>
            <strong>S2:</strong> List&lt;T&gt; ile Array arasındaki temel fark nedir?
            <span className="toggle-indicator">{visibleAnswers.array2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.array2 && (
            <div className="answer">
              <strong>C:</strong> Array sabit boyutlu, List&lt;T&gt; dinamik boyutlu. List&lt;T&gt; ihtiyaç oldukça büyür ama bu bazen O(n) ekleme maliyeti getirir (yeniden boyutlandırma).
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('array3')}>
            <strong>S3:</strong> Two Pointers tekniği nedir ve ne zaman kullanılır?
            <span className="toggle-indicator">{visibleAnswers.array3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.array3 && (
            <div className="answer">
              <strong>C:</strong> İki işaretçi kullanarak array'i verimli gezmek. Genelde sorted array'lerde kullanılır. Örnek: palindrome kontrolü (baştan ve sondan ortaya doğru)
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('array4')}>
            <strong>S4:</strong> Sliding Window tekniği neyi çözer?
            <span className="toggle-indicator">{visibleAnswers.array4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.array4 && (
            <div className="answer">
              <strong>C:</strong> Sabit boyutlu alt dizilerdeki işlemleri optimize eder. Örnek: 3 elemanlı en büyük toplamı bulmak için tüm pencereyi yeniden hesaplamak yerine, eski elemanı çıkar yeniyi ekle.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('array5')}>
            <strong>S5:</strong> Array'de bir elemanı ortaya eklemek neden O(n) sürer?
            <span className="toggle-indicator">{visibleAnswers.array5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.array5 && (
            <div className="answer">
              <strong>C:</strong> Eklenecek pozisyondan sonraki tüm elemanları bir sağa kaydırmak gerekir. En kötü durumda (başa ekleme) tüm elemanlar kaydırılır.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>LinkedList (Bağlı Liste)</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('linked1')}>
            <strong>S1:</strong> LinkedList'in Array'e göre ana avantajı nedir?
            <span className="toggle-indicator">{visibleAnswers.linked1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.linked1 && (
            <div className="answer">
              <strong>C:</strong> <strong>Dinamik boyut</strong> ve <strong>başa ekleme O(1)</strong>. Array'de başa ekleme O(n) sürerken, LinkedList'te sadece pointer değiştirme yeterli.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('linked2')}>
            <strong>S2:</strong> LinkedList'te neden random access (index ile erişim) yok?
            <span className="toggle-indicator">{visibleAnswers.linked2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.linked2 && (
            <div className="answer">
              <strong>C:</strong> Elemanlar bellekte ardışık değil, pointer'larla bağlı. 5. elemana ulaşmak için baştan 5 adım yürümek gerekir.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('linked3')}>
            <strong>S3:</strong> Doubly LinkedList ne zaman Single LinkedList'ten daha avantajlı?
            <span className="toggle-indicator">{visibleAnswers.linked3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.linked3 && (
            <div className="answer">
              <strong>C:</strong> Geriye doğru hareket gerektiğinde veya bir node'u silmek için önceki node'a ihtiyaç duyduğunda. Browser history gibi.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('linked4')}>
            <strong>S4:</strong> LinkedList'te bir elemanı silmek için hangi adımlar gerekir?
            <span className="toggle-indicator">{visibleAnswers.linked4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.linked4 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li>Silinecek node'un öncesini bul</li>
                <li>Önceki node'un next'ini, silinecek node'un next'ine bağla</li>
                <li>Silinecek node artık erişilemez (garbage collected)</li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('linked5')}>
            <strong>S5:</strong> Memory açısından LinkedList vs Array karşılaştırması?
            <span className="toggle-indicator">{visibleAnswers.linked5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.linked5 && (
            <div className="answer">
              <strong>C:</strong> Array daha verimli (sadece data), LinkedList her node için ekstra pointer saklar. Ama LinkedList sadece ihtiyaç kadar yer kullanır.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Stack (Yığın)</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('stack1')}>
            <strong>S1:</strong> LIFO prensibi nedir ve Stack'te nasıl uygulanır?
            <span className="toggle-indicator">{visibleAnswers.stack1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.stack1 && (
            <div className="answer">
              <strong>C:</strong> Last In, First Out - son giren ilk çıkar. Stack'te sadece en üstteki elemana erişebilirsin, tıpkı tabak yığını gibi.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('stack2')}>
            <strong>S2:</strong> Stack'in 4 temel operasyonu nedir?
            <span className="toggle-indicator">{visibleAnswers.stack2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.stack2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Push:</strong> Üste ekleme</li>
                <li><strong>Pop:</strong> Üstten alma ve kaldırma</li>
                <li><strong>Peek:</strong> Üsttekine bakma (kaldırmadan)</li>
                <li><strong>IsEmpty:</strong> Boş mu kontrolü</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('stack3')}>
            <strong>S3:</strong> Recursive fonksionlar Stack'i nasıl kullanır?
            <span className="toggle-indicator">{visibleAnswers.stack3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.stack3 && (
            <div className="answer">
              <strong>C:</strong> Her fonksiyon çağrısı call stack'e eklenir. Fonksiyon bitince stack'ten çıkar. Bu yüzden çok derin recursion stack overflow'a neden olur.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('stack4')}>
            <strong>S4:</strong> Parantez kontrolü algoritması Stack'i nasıl kullanır?
            <span className="toggle-indicator">{visibleAnswers.stack4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.stack4 && (
            <div className="answer">
              <strong>C:</strong> Açılış parantezi görünce stack'e push, kapanış görünce pop yapıp eşleşme kontrol et. Son'da stack boşsa balanced.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('stack5')}>
            <strong>S5:</strong> Stack ne zaman Queue'dan daha uygun?
            <span className="toggle-indicator">{visibleAnswers.stack5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.stack5 && (
            <div className="answer">
              <strong>C:</strong> LIFO davranış gerektiğinde: undo/redo, function calls, expression evaluation, DFS algorithm.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Queue (Kuyruk)</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('queue1')}>
            <strong>S1:</strong> FIFO prensibi nedir ve hangi durumlarda gerekir?
            <span className="toggle-indicator">{visibleAnswers.queue1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.queue1 && (
            <div className="answer">
              <strong>C:</strong> First In, First Out - ilk giren ilk çıkar. Market kuyruğu, task scheduling, BFS algorithm gibi adil sıralama gereken durumlarda.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('queue2')}>
            <strong>S2:</strong> Queue'nun temel operasyonları nelerdir?
            <span className="toggle-indicator">{visibleAnswers.queue2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.queue2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Enqueue:</strong> Arkaya ekleme</li>
                <li><strong>Dequeue:</strong> Önden alma</li>
                <li><strong>Front/Peek:</strong> Öndekine bakma</li>
                <li><strong>IsEmpty:</strong> Boş mu kontrolü</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('queue3')}>
            <strong>S3:</strong> Circular Queue'nun normal Queue'ya avantajı nedir?
            <span className="toggle-indicator">{visibleAnswers.queue3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.queue3 && (
            <div className="answer">
              <strong>C:</strong> Array implementasyonunda yer tasarrufu. Normal queue'da elemanlar çıktıkça başta boş alan kalır ama kullanılamaz. Circular'da bu alan tekrar kullanılır.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('queue4')}>
            <strong>S4:</strong> BFS (Breadth-First Search) neden Queue kullanır?
            <span className="toggle-indicator">{visibleAnswers.queue4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.queue4 && (
            <div className="answer">
              <strong>C:</strong> BFS, komşuları level-level gezer. Önce 1. level'daki tüm node'ları, sonra 2. level'dakileri... Queue FIFO yapısıyla bu sırayı korur.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('queue5')}>
            <strong>S5:</strong> Queue ile Stack arasındaki temel fark nedir?
            <span className="toggle-indicator">{visibleAnswers.queue5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.queue5 && (
            <div className="answer">
              <strong>C:</strong> <strong>Queue:</strong> İlk giren ilk çıkar (adil kuyruk), <strong>Stack:</strong> Son giren ilk çıkar (tabak yığını). Farklı problemler için farklı veri yapıları.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>HashMap (HashTable)</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('hash1')}>
            <strong>S1:</strong> HashMap neden O(1) arama süresine sahiptir?
            <span className="toggle-indicator">{visibleAnswers.hash1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.hash1 && (
            <div className="answer">
              <strong>C:</strong> Hash function sayesinde key'den direkt index hesaplar. Array'deki index erişimi O(1) olduğu için HashMap de O(1).
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('hash2')}>
            <strong>S2:</strong> Hash collision nedir ve nasıl çözülür?
            <span className="toggle-indicator">{visibleAnswers.hash2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.hash2 && (
            <div className="answer">
              <strong>C:</strong> İki farklı key aynı index'e düştüğünde collision olur. <strong>Separate Chaining</strong> (her index'te LinkedList) veya <strong>Open Addressing</strong> ile çözülür.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('hash3')}>
            <strong>S3:</strong> Load Factor nedir ve neden önemlidir?
            <span className="toggle-indicator">{visibleAnswers.hash3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.hash3 && (
            <div className="answer">
              <strong>C:</strong> Load Factor = Eleman Sayısı / Table Boyutu. 0.75'ten yüksek olunca collision artar, performans düşer. Bu durumda rehashing gerekir.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('hash4')}>
            <strong>S4:</strong> HashMap ile Array'in performans farkı nedir?
            <span className="toggle-indicator">{visibleAnswers.hash4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.hash4 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>HashMap:</strong> Search O(1), Insert O(1), Delete O(1)</li>
                <li><strong>Array:</strong> Search O(n), Insert O(n), Delete O(n)</li>
                <li>Ama HashMap'te ekstra memory ve order yok.</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('hash5')}>
            <strong>S5:</strong> İyi bir hash function'ın özellikleri nelerdir?
            <span className="toggle-indicator">{visibleAnswers.hash5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.hash5 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Uniform distribution:</strong> Elemanları eşit dağıtır</li>
                <li><strong>Deterministic:</strong> Aynı input, aynı output</li>
                <li><strong>Fast:</strong> Hızlı hesaplanır</li>
                <li><strong>Avalanche effect:</strong> Küçük değişiklik büyük farka yol açar</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('hash6')}>
            <strong>S6:</strong> Dictionary&lt;string, int&gt; ve int[] arasında ne zaman hangisini kullanırsın?
            <span className="toggle-indicator">{visibleAnswers.hash6 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.hash6 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Dictionary:</strong> Key-value ilişkisi, hızlı lookup, değişken boyut</li>
                <li><strong>Array:</strong> Index-based erişim, memory efficiency, sıralı veri</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Genel Kavramlar</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('general1')}>
            <strong>S1:</strong> Hangi veri yapısı hangi durum için en uygun?
            <span className="toggle-indicator">{visibleAnswers.general1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.general1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Hızlı erişim:</strong> Array (index varsa) veya HashMap (key varsa)</li>
                <li><strong>Sık ekleme/silme (başta):</strong> LinkedList veya Stack</li>
                <li><strong>Sıralı işleme:</strong> Queue</li>
                <li><strong>Undo/Redo:</strong> Stack</li>
                <li><strong>Key-value mapping:</strong> HashMap</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('general2')}>
            <strong>S2:</strong> Memory vs Speed trade-off'unu açıklayın.
            <span className="toggle-indicator">{visibleAnswers.general2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.general2 && (
            <div className="answer">
              <strong>C:</strong> Genelde hız için extra memory kullanırız. HashMap extra pointer'lar saklar ama O(1) arama verir. Array minimum memory kullanır ama bazı işlemler O(n).
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('general3')}>
            <strong>S3:</strong> Cache-friendly veri yapısı nedir?
            <span className="toggle-indicator">{visibleAnswers.general3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.general3 && (
            <div className="answer">
              <strong>C:</strong> Elemanları bellekte yan yana saklayan yapılar (Array). CPU cache'i ardışık veriyi hızlı işler. LinkedList cache-unfriendly çünkü elemanlar dağınık.
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="quiz-summary">
          <h2>Özet</h2>
          <p>Bu sorularla Hafta 1'in tüm önemli kavramlarını pekiştirmiş oldun! Her veri yapısının kendine özgü güçlü yanları ve kullanım alanları var. 
          Doğru veri yapısını seçmek, algoritma performansını büyük ölçüde etkiler.</p>
          
          <p><strong>Bir sonraki hafta:</strong> İleri seviye veri yapıları (Tree, BST, Heap, Trie, Graph) seni bekliyor!</p>
        </div>
      </section>

      <Notes topicPath="/hafta1-quiz" topicTitle="Hafta 1 DSA - Soru & Cevap" />

      <div className="navigation-links">
        <Link to="/hashmap" className="nav-button">← HashMap</Link>
        <Link to="/hafta2" className="nav-button">2. Hafta →</Link>
      </div>
    </div>
  );
}

export default Hafta1Quiz;