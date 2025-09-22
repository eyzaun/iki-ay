import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import Notes from '../../../notes/Notes';

function Hafta2Quiz() {
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
        title="Hafta 2 DSA - Soru & Cevap | İki Ay"
        description="2. Hafta ileri veri yapıları ve algoritmalar konularının pekiştirici soru-cevap bölümü. Tree, BST, Heap, Graph, BFS/DFS quiz."
        canonical="https://iki-ay.web.app/hafta2-quiz"
        og={{ url: 'https://iki-ay.web.app/hafta2-quiz' }}
      />
      
      <div className="content-header">
        <h1>Hafta 2 DSA - Soru & Cevap</h1>
        <p className="quiz-subtitle">İleri veri yapıları ve algoritmalar konularını pekiştirici sorular</p>
  <Link to="/hafta2" className="back-link">2. Hafta'ya Dön</Link>
      </div>

      <section className="section quiz-section">
        <h2>Binary Tree & BST</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bst1')}>
            <strong>S1:</strong> Binary Tree'da inorder traversal ne verir?
            <span className="toggle-indicator">{visibleAnswers.bst1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bst1 && (
            <div className="answer">
              <strong>C:</strong> BST'de inorder traversal sıralı liste verir (küçükten büyüğe). Normal binary tree'de herhangi bir sıralama garantisi yoktur.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bst2')}>
            <strong>S2:</strong> BST'de bir eleman ekleme karmaşıklığı nedir?
            <span className="toggle-indicator">{visibleAnswers.bst2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bst2 && (
            <div className="answer">
              <strong>C:</strong> O(log n) - ağaç dengeli ise. Her adımda yarısını elimine ederek ilerleriz. Ama dengesiz ağaçta O(n) olabilir.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bst3')}>
            <strong>S3:</strong> BST'de bir elemanı silme işlemi nasıl yapılır?
            <span className="toggle-indicator">{visibleAnswers.bst3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bst3 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li>Leaf node: Direkt sil</li>
                <li>Tek çocuk: Çocuğu yerine koy</li>
                <li>İki çocuk: Inorder successor'ı (sağ alt ağacın en küçüğü) yerine koy</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Tree Traversal</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('traversal1')}>
            <strong>S1:</strong> Preorder, Inorder, Postorder arasındaki fark nedir?
            <span className="toggle-indicator">{visibleAnswers.traversal1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.traversal1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Preorder:</strong> Root -&gt; Left -&gt; Right</li>
                <li><strong>Inorder:</strong> Left -&gt; Root -&gt; Right</li>
                <li><strong>Postorder:</strong> Left -&gt; Right -&gt; Root</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('traversal2')}>
            <strong>S2:</strong> Level Order traversal (BFS) nasıl çalışır?
            <span className="toggle-indicator">{visibleAnswers.traversal2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.traversal2 && (
            <div className="answer">
              <strong>C:</strong> Queue kullanarak level level gezer. Önce root'u queue'ya koyar, sonra her level'daki tüm node'ları çıkarırken çocuklarını queue'ya ekler.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Heap (Priority Queue)</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('heap1')}>
            <strong>S1:</strong> Max-Heap ve Min-Heap arasındaki fark nedir?
            <span className="toggle-indicator">{visibleAnswers.heap1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.heap1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Max-Heap:</strong> Parent &gt; Children (en büyük element root'ta)</li>
                <li><strong>Min-Heap:</strong> Parent &lt; Children (en küçük element root'ta)</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('heap2')}>
            <strong>S2:</strong> Heap'te insert ve extract-max işlemleri nasıl yapılır?
            <span className="toggle-indicator">{visibleAnswers.heap2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.heap2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Insert:</strong> Sona ekle, yukarı bubble up</li>
                <li><strong>Extract-Max:</strong> Root'u al, son elemanı root yap, aşağı percolate down</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Graph Temelleri</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('graph1')}>
            <strong>S1:</strong> Adjacency List vs Adjacency Matrix?
            <span className="toggle-indicator">{visibleAnswers.graph1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.graph1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Adjacency List:</strong> Sparse graph'lar için iyi, O(V+E) space</li>
                <li><strong>Adjacency Matrix:</strong> Dense graph'lar için iyi, O(V²) space</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('graph2')}>
            <strong>S2:</strong> Directed vs Undirected graph?
            <span className="toggle-indicator">{visibleAnswers.graph2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.graph2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Directed:</strong> Edge'ler yönlü (A-&gt;B != B-&gt;A)</li>
                <li><strong>Undirected:</strong> Edge'ler yönsüz (A-B = B-A)</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>BFS & DFS</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bfsdfs1')}>
            <strong>S1:</strong> BFS ve DFS arasındaki temel fark nedir?
            <span className="toggle-indicator">{visibleAnswers.bfsdfs1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bfsdfs1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>BFS:</strong> Queue, level-order, en kısa yol</li>
                <li><strong>DFS:</strong> Stack/Recursion, derinlik öncelikli, memory efficient</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bfsdfs2')}>
            <strong>S2:</strong> DFS ne zaman tercih edilir?
            <span className="toggle-indicator">{visibleAnswers.bfsdfs2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bfsdfs2 && (
            <div className="answer">
              <strong>C:</strong> Topological sort, cycle detection, path finding (maze), connected components, memory kısıtlı ortamlarda.
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="quiz-summary">
          <h2>Özet</h2>
          <p>Bu sorularla Hafta 2'nin tüm önemli kavramlarını pekiştirmiş oldun! Tree, Heap, Graph gibi ileri seviye veri yapıları algoritma dünyasının temelini oluşturur.</p>
          
          <p><strong>Bir sonraki hafta:</strong> Temel sözdizimi ve kontrol yapıları seni bekliyor!</p>
        </div>
      </section>

      <Notes topicPath="/hafta2-quiz" topicTitle="Hafta 2 DSA - Soru & Cevap" />

      <div className="navigation-links">
  <Link to="/hafta1-quiz" className="nav-button">1. Hafta Quiz</Link>
  <Link to="/hafta3" className="nav-button">3. Hafta</Link>
      </div>
    </div>
  );
}

export default Hafta2Quiz;