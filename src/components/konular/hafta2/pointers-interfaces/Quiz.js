import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import Notes from '../../../notes/Notes';

function QuizHafta2() {
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
        title="Hafta 2 Quiz - DSA Soruları & Cevapları | İki Ay"
        description="Hafta 2 DSA konularında kapsamlı quiz. Binary Tree, BST, DFS, BFS, Sorting, Binary Search sorularıyla kendini test et."
        canonical="https://iki-ay.web.app/quiz-hafta2"
        og={{ url: 'https://iki-ay.web.app/quiz-hafta2' }}
      />

      <div className="content-header">
        <h1>Hafta 2 DSA - Soru & Cevap</h1>
        <p className="quiz-subtitle">İleri veri yapıları ve algoritmalar konularını pekiştirici sorular</p>
  <Link to="/hafta2" className="back-link">2. Hafta'ya Dön</Link>
      </div>

      <section className="section quiz-section">
        <h2>Binary Tree</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bt1')}>
            <strong>S1:</strong> Binary Tree nedir ve normal tree'den farkı nedir?
            <span className="toggle-indicator">{visibleAnswers.bt1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bt1 && (
            <div className="answer">
              <strong>C:</strong> Binary Tree, her node'un **en fazla 2 çocuğu** olan tree'dir (sol ve sağ). Normal tree'de node'un istediği kadar çocuğu olabilir. Bu kısıtlama, algoritmaları daha basit ve efficient yapar.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bt2')}>
            <strong>S2:</strong> Complete Binary Tree ile Full Binary Tree arasındaki fark nedir?
            <span className="toggle-indicator">{visibleAnswers.bt2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bt2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Complete:</strong> Son seviye hariç tüm seviyeler dolu, son seviye soldan dolu</li>
                <li><strong>Full:</strong> Her node'un 0 veya 2 çocuğu var (1 çocuk yok)</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bt3')}>
            <strong>S3:</strong> Binary Tree'nin height'ini hesaplayan algoritmanın Big-O karmaşıklığı nedir?
            <span className="toggle-indicator">{visibleAnswers.bt3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bt3 && (
            <div className="answer">
              <strong>C:</strong> **O(n)** - Çünkü height'i bulmak için tüm node'ları ziyaret etmek gerekir (worst case'de tree degenerate olabilir).
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bt4')}>
            <strong>S4:</strong> Binary Tree'de leaf node sayısını bulan kodun logic'i nasıl çalışır?
            <span className="toggle-indicator">{visibleAnswers.bt4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bt4 && (
            <div className="answer">
              <strong>C:</strong> Recursive: Eğer node null ise 0 döndür. Eğer node leaf ise (sol ve sağ çocuk null) 1 döndür. Değilse sol ve sağ alt ağaçların leaf sayısını topla.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bt5')}>
            <strong>S5:</strong> Binary Tree ne zaman LinkedList'ten daha avantajlı?
            <span className="toggle-indicator">{visibleAnswers.bt5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bt5 && (
            <div className="answer">
              <strong>C:</strong> **Hierarchical data** saklarken, **parent-child ilişkileri** önemli olduğunda, ve **recursive algorithms** kullanırken daha avantajlı.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Binary Search Tree (BST)</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bst1')}>
            <strong>S1:</strong> BST'nin temel property'si nedir ve neden bu özellik önemli?
            <span className="toggle-indicator">{visibleAnswers.bst1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bst1 && (
            <div className="answer">
              <strong>C:</strong> **Sol çocuk &lt; Parent &lt; Sağ çocuk** kuralı. Bu özellik sayesinde **O(log n)** arama, ekleme, silme işlemleri yapabilir ve **inorder traversal** ile sıralı liste elde ederiz.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bst2')}>
            <strong>S2:</strong> BST'de search işlemi neden O(log n) sürer?
            <span className="toggle-indicator">{visibleAnswers.bst2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bst2 && (
            <div className="answer">
              <strong>C:</strong> Her adımda arama alanını yarıya böldüğümüz için. Target'ı current node ile karşılaştırıp ya sol ya sağ alt ağaca gideriz, böylece logaritmik zaman elde ederiz.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bst3')}>
            <strong>S3:</strong> BST'den sorted bir liste elde etmek için hangi traversal kullanılır?
            <span className="toggle-indicator">{visibleAnswers.bst3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bst3 && (
            <div className="answer">
              <strong>C:</strong> <strong>Inorder traversal</strong> (Left -&gt; Root -&gt; Right). BST property'si sayesinde bu sıralama otomatik olarak sorted order verir.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bst4')}>
            <strong>S4:</strong> BST'de node silme işleminin 3 case'i nedir?
            <span className="toggle-indicator">{visibleAnswers.bst4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bst4 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Leaf node:</strong> Direkt sil</li>
                <li><strong>Tek çocuk:</strong> Çocuğu parent'a bağla</li>
                <li><strong>İki çocuk:</strong> Inorder successor (sağ alt ağaçtaki en küçük) ile değiştir</li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bst5')}>
            <strong>S5:</strong> Degenerate BST nedir ve neden kötüdür?
            <span className="toggle-indicator">{visibleAnswers.bst5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bst5 && (
            <div className="answer">
              <strong>C:</strong> LinkedList gibi tek taraflı uzamış BST. Tüm operasyonlar O(n) olur çünkü tree'nin avantajı kalmaz. Bu durumda balanced tree (AVL, Red-Black) kullanılır.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bst6')}>
            <strong>S6:</strong> BST'de range query [min, max] nasıl yapılır?
            <span className="toggle-indicator">{visibleAnswers.bst6 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bst6 && (
            <div className="answer">
              <strong>C:</strong> Recursive: Current node range içindeyse result'a ekle. Node &gt; min ise sol alt ağacı, node &lt; max ise sağ alt ağacı ziyaret et. BST property sayesinde gereksiz branch'leri atlarız.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Tree Traversal - DFS</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('dfs1')}>
            <strong>S1:</strong> DFS'nin 3 türü nedir ve hangi sırayla node'ları ziyaret ederler?
            <span className="toggle-indicator">{visibleAnswers.dfs1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.dfs1 && (
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
          <div className="question" onClick={() => toggleAnswer('dfs2')}>
            <strong>S2:</strong> Preorder traversal ne zaman kullanılır?
            <span className="toggle-indicator">{visibleAnswers.dfs2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.dfs2 && (
            <div className="answer">
              <strong>C:</strong> **Tree copying**, **serialization** (tree'yi string'e çevirme), **directory structure** yazdırma gibi **top-down** işlemler için.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('dfs3')}>
            <strong>S3:</strong> Postorder traversal'ın tipik kullanım alanları nelerdir?
            <span className="toggle-indicator">{visibleAnswers.dfs3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.dfs3 && (
            <div className="answer">
              <strong>C:</strong> **Tree deletion** (alt ağaçları önce sil), **directory size calculation**, **expression evaluation** gibi **bottom-up** işlemler için.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('dfs4')}>
            <strong>S4:</strong> DFS'nin space complexity'si nedir ve neden?
            <span className="toggle-indicator">{visibleAnswers.dfs4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.dfs4 && (
            <div className="answer">
              <strong>C:</strong> **O(h)** - h = tree height. Recursive call stack'i tree derinliği kadar yer kaplar. Balanced tree'de O(log n), worst case'de O(n).
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>BFS & Graph Yapıları</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bfs1')}>
            <strong>S1:</strong> BFS hangi veri yapısını kullanır ve neden?
            <span className="toggle-indicator">{visibleAnswers.bfs1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bfs1 && (
            <div className="answer">
              <strong>C:</strong> **Queue** kullanır. FIFO (First In, First Out) prensibi sayesinde **level-order** (seviye seviye) gezinme sağlar.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bfs2')}>
            <strong>S2:</strong> BFS ile DFS arasındaki temel fark nedir?
            <span className="toggle-indicator">{visibleAnswers.bfs2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bfs2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>BFS:</strong> Seviye seviye (genişlemesine), Queue kullanır</li>
                <li><strong>DFS:</strong> Derinlemesine, Stack/Recursion kullanır</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bfs3')}>
            <strong>S3:</strong> Tree'nin Right Side View'ını bulmak için BFS nasıl kullanılır?
            <span className="toggle-indicator">{visibleAnswers.bfs3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bfs3 && (
            <div className="answer">
              <strong>C:</strong> Her level'da **en sağdaki node**'u al. BFS ile level-by-level ilerleyip her seviyenin son elemanını result'a ekle.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bfs4')}>
            <strong>S4:</strong> BFS'nin graph'ta temel kullanım alanları nelerdir?
            <span className="toggle-indicator">{visibleAnswers.bfs4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bfs4 && (
            <div className="answer">
              <strong>C:</strong> **Shortest path** (unweighted), **level-order processing**, **connected components** bulma, **minimum steps** problemleri.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bfs5')}>
            <strong>S5:</strong> Graph'ta BFS ile DFS'nin space complexity farkı nedir?
            <span className="toggle-indicator">{visibleAnswers.bfs5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bfs5 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>BFS:</strong> O(width) - en geniş seviye kadar queue</li>
                <li><strong>DFS:</strong> O(depth) - en derin seviye kadar stack</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('graph1')}>
            <strong>S6:</strong> Adjacency List ile Adjacency Matrix arasındaki fark nedir?
            <span className="toggle-indicator">{visibleAnswers.graph1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.graph1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Adjacency List:</strong> Her vertex için komşuların listesi. Space: O(V+E), Edge check: O(degree)</li>
                <li><strong>Adjacency Matrix:</strong> V×V matrix. Space: O(V²), Edge check: O(1)</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('graph2')}>
            <strong>S7:</strong> Sparse graph'ta hangisi daha efficient?
            <span className="toggle-indicator">{visibleAnswers.graph2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.graph2 && (
            <div className="answer">
              <strong>C:</strong> **Adjacency List**. Çünkü sadece var olan edge'ler için yer kullanır (O(V+E)), matrix ise tüm possible edge'ler için yer ayırır (O(V²)).
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Sorting Algorithms</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('sort1')}>
            <strong>S1:</strong> Divide & Conquer stratejisi nedir?
            <span className="toggle-indicator">{visibleAnswers.sort1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.sort1 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Divide:</strong> Problemi küçük parçalara böl</li>
                <li><strong>Conquer:</strong> Küçük parçaları çöz</li>
                <li><strong>Combine:</strong> Sonuçları birleştir</li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('sort2')}>
            <strong>S2:</strong> MergeSort'un guaranteed O(n log n) olmasının nedeni nedir?
            <span className="toggle-indicator">{visibleAnswers.sort2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.sort2 && (
            <div className="answer">
              <strong>C:</strong> Her zaman **array'i tam yarıya böler** (log n seviye) ve her seviyede **linear merge** yapar (n işlem). Input'tan bağımsız olarak hep aynı performance.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('sort3')}>
            <strong>S3:</strong> QuickSort'un worst case ne zaman O(n²) olur?
            <span className="toggle-indicator">{visibleAnswers.sort3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.sort3 && (
            <div className="answer">
              <strong>C:</strong> **Pivot selection kötü** olduğunda. Örneğin zaten sorted array'de hep en küçük/büyük elemanı pivot seçersen, partition balanced olmaz.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('sort4')}>
            <strong>S4:</strong> Stable sorting algorithm nedir? MergeSort stable mı, QuickSort stable mı?
            <span className="toggle-indicator">{visibleAnswers.sort4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.sort4 && (
            <div className="answer">
              <strong>C:</strong> **Stable:** Eşit elemanların relatif sırası korunur. **MergeSort stable**, **QuickSort stable değil**.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('sort5')}>
            <strong>S5:</strong> Hangi durumda QuickSort, MergeSort'tan daha iyi?
            <span className="toggle-indicator">{visibleAnswers.sort5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.sort5 && (
            <div className="answer">
              <strong>C:</strong> **Memory sınırlı** durumlarda. QuickSort in-place (O(1) extra space), MergeSort O(n) extra space gerektirir.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('sort6')}>
            <strong>S6:</strong> Hibrit sorting (IntroSort) neden kullanılır?
            <span className="toggle-indicator">{visibleAnswers.sort6 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.sort6 && (
            <div className="answer">
              <strong>C:</strong> **Best of both worlds**: Küçük arrays için InsertionSort, normal durumda QuickSort, worst case'de HeapSort kullanarak her duruma optimize eder.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Binary Search Advanced</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bs1')}>
            <strong>S1:</strong> Lower bound ve Upper bound arasındaki fark nedir?
            <span className="toggle-indicator">{visibleAnswers.bs1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bs1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Lower bound:</strong> Target'ın **ilk görüldüğü** index</li>
                <li><strong>Upper bound:</strong> Target'tan **büyük ilk elemanın** index'i</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bs2')}>
            <strong>S2:</strong> Rotated sorted array'de arama nasıl yapılır?
            <span className="toggle-indicator">{visibleAnswers.bs2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bs2 && (
            <div className="answer">
              <strong>C:</strong> Binary search'te **hangi yarının sorted** olduğunu kontrol et. Target sorted yarıda mı değil mi'ye göre arama yönünü belirle.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bs3')}>
            <strong>S3:</strong> "Search in answer space" tekniği nedir?
            <span className="toggle-indicator">{visibleAnswers.bs3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bs3 && (
            <div className="answer">
              <strong>C:</strong> Direct arama yerine **possible answer'lar üzerinde binary search**. Örnek: "Minimum capacity" bulma - capacity değerleri üzerinde binary search yap.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bs4')}>
            <strong>S4:</strong> Binary search'te mid hesaplarken neden `left + (right-left)/2` kullanırız?
            <span className="toggle-indicator">{visibleAnswers.bs4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bs4 && (
            <div className="answer">
              <strong>C:</strong> `(left+right)/2` **integer overflow** yapabilir. `left + (right-left)/2` formülü overflow'u önler.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('bs5')}>
            <strong>S5:</strong> Peak element bulma algoritması nasıl çalışır?
            <span className="toggle-indicator">{visibleAnswers.bs5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.bs5 && (
            <div className="answer">
              <strong>C:</strong> Binary search: Mid element'in sağ komşusu büyükse peak sağ tarafta, değilse sol tarafta. O(log n)'de peak bulur.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Genel Algorithm Design</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('gen1')}>
            <strong>S1:</strong> Recursive algoritmanın 3 temel bileşeni nedir?
            <span className="toggle-indicator">{visibleAnswers.gen1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.gen1 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Base case:</strong> Recursion'u durduran koşul</li>
                <li><strong>Recursive case:</strong> Problemi küçülten kısım</li>
                <li><strong>Progress:</strong> Her çağrıda problem küçülmeli</li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('gen2')}>
            <strong>S2:</strong> Tree problemlerinde hangi traversal türünü ne zaman kullanırsın?
            <span className="toggle-indicator">{visibleAnswers.gen2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.gen2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Preorder:</strong> Copying, serialization, top-down processing</li>
                <li><strong>Inorder:</strong> BST'de sorted order, validation</li>
                <li><strong>Postorder:</strong> Deletion, size calculation, bottom-up</li>
                <li><strong>Level-order (BFS):</strong> Level-wise operations, shortest path</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('gen3')}>
            <strong>S3:</strong> Stack overflow'u önlemek için recursive algoritmaları nasıl optimize edersin?
            <span className="toggle-indicator">{visibleAnswers.gen3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.gen3 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Iterative version</strong> yaz (Stack/Queue kullan)</li>
                <li><strong>Tail recursion</strong> optimization</li>
                <li><strong>Memoization</strong> ile duplicate calls'ları önle</li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('gen4')}>
            <strong>S4:</strong> Greedy vs Divide & Conquer vs Dynamic Programming - temel farklar?
            <span className="toggle-indicator">{visibleAnswers.gen4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.gen4 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Greedy:</strong> Her adımda local optimal seçim (her zaman optimal değil)</li>
                <li><strong>Divide & Conquer:</strong> Problemi böl, çöz, birleştir</li>
                <li><strong>DP:</strong> Overlapping subproblems'ı memoize et</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Problem Solving Patterns</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pat1')}>
            <strong>S1:</strong> Tree'de path sum problemi nasıl çözülür?
            <span className="toggle-indicator">{visibleAnswers.pat1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pat1 && (
            <div className="answer">
              <strong>C:</strong> DFS ile current sum'ı track et. Leaf'e ulaştığında target ile karşılaştır. Backtracking ile tüm path'leri kontrol et.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pat2')}>
            <strong>S2:</strong> Graph'ta shortest path bulmanın farklı yolları nelerdir?
            <span className="toggle-indicator">{visibleAnswers.pat2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pat2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Unweighted:</strong> BFS (O(V+E))</li>
                <li><strong>Weighted positive:</strong> Dijkstra (O(V log V + E))</li>
                <li><strong>Weighted with negative:</strong> Bellman-Ford (O(VE))</li>
                <li><strong>All pairs:</strong> Floyd-Warshall (O(V³))</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pat3')}>
            <strong>S3:</strong> Binary search'in uygulanabilirlik koşulu nedir?
            <span className="toggle-indicator">{visibleAnswers.pat3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pat3 && (
            <div className="answer">
              <strong>C:</strong> **Monotonic property** - arama kriterine göre "evet/hayır" cevabının tek yönlü değişmesi. Sorted olması şart değil, monotonic olması yeter.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pat4')}>
            <strong>S4:</strong> Tree'de LCA (Lowest Common Ancestor) nasıl bulunur?
            <span className="toggle-indicator">{visibleAnswers.pat4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pat4 && (
            <div className="answer">
              <strong>C:</strong> **BST'de:** Value'ları karşılaştır. **Normal tree'de:** DFS ile path'leri bul ya da parent pointer'ları kullan.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pat5')}>
            <strong>S5:</strong> In-place algoritma nedir ve avantajı nedir?
            <span className="toggle-indicator">{visibleAnswers.pat5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pat5 && (
            <div className="answer">
              <strong>C:</strong> **Extra space kullanmayan** (O(1) space) algoritma. Memory efficient, özellikle büyük data setlerinde önemli. Örnek: QuickSort, HeapSort.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Performance & Optimization</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('perf1')}>
            <strong>S1:</strong> Cache-friendly algorithm nedir?
            <span className="toggle-indicator">{visibleAnswers.perf1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.perf1 && (
            <div className="answer">
              <strong>C:</strong> **Memory locality** iyi olan algoritma. Sequential memory access yapan (Array traversal) algoritmaları, random access yapanlardan (LinkedList, Tree) daha cache-friendly.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('perf2')}>
            <strong>S2:</strong> Recursive vs Iterative - performance farkları nelerdir?
            <span className="toggle-indicator">{visibleAnswers.perf2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.perf2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Recursive:</strong> Clean code, ama function call overhead ve stack space</li>
                <li><strong>Iterative:</strong> Daha az overhead, daha az memory, ama kod karmaşık olabilir</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('perf3')}>
            <strong>S3:</strong> Hangi sorting algorithm'ı ne zaman kullanırsın?
            <span className="toggle-indicator">{visibleAnswers.perf3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.perf3 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Small arrays (≤16):</strong> InsertionSort</li>
                <li><strong>General purpose:</strong> QuickSort veya IntroSort</li>
                <li><strong>Stability gerekli:</strong> MergeSort</li>
                <li><strong>Memory critical:</strong> HeapSort</li>
                <li><strong>Partially sorted:</strong> TimSort</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('perf4')}>
            <strong>S4:</strong> Tree operations'ın amortized complexity'si ne demek?
            <span className="toggle-indicator">{visibleAnswers.perf4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.perf4 && (
            <div className="answer">
              <strong>C:</strong> **Ortalama performans** - worst case nadir olduğunda overall performance iyi. Örnek: Dynamic array resize O(n) ama amortized O(1).
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('perf5')}>
            <strong>S5:</strong> Graph representation seçimi nasıl yapılır?
            <span className="toggle-indicator">{visibleAnswers.perf5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.perf5 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Dense graph (çok edge):</strong> Adjacency Matrix</li>
                <li><strong>Sparse graph (az edge):</strong> Adjacency List</li>
                <li><strong>Frequent edge queries:</strong> Matrix</li>
                <li><strong>Memory efficient:</strong> List</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="quiz-summary">
          <h2>Özet</h2>
          <p>Bu sorularla Hafta 2'nin tüm önemli kavramlarını pekiştirmiş oldun! İleri seviye veri yapıları ve algoritmalar artık sana daha anlamlı geliyor olmalı.</p>

          <p><strong>Bir sonraki hafta:</strong> Dynamic Programming & Greedy Algorithms seni bekliyor. Bu teknikler, interview'larda en çok karşına çıkan konulardan!</p>
        </div>
      </section>

      <Notes topicPath="/hafta2-quiz" topicTitle="Hafta 2 DSA - Soru & Cevap" />

      <div className="navigation-links">
  <Link to="/bst-advanced" className="nav-button">BST Advanced</Link>
  <Link to="/hafta3" className="nav-button">Hafta 3</Link>
      </div>
    </div>
  );
}

export default QuizHafta2;