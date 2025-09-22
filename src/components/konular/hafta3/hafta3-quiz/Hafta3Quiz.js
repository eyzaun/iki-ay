import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import Notes from '../../../notes/Notes';

function Hafta3Quiz() {
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
        title="Hafta 3 İleri Algoritmalar - Soru & Cevap | İki Ay"
        description="3. Hafta DP, Greedy, Heap, Union-Find konularının pekiştirici soru-cevap bölümü."
        canonical="https://iki-ay.web.app/hafta3-quiz"
        og={{ url: 'https://iki-ay.web.app/hafta3-quiz' }}
      />
      
      <div className="content-header">
        <h1>Hafta 3 İleri Algoritmalar - Soru & Cevap</h1>
        <p className="quiz-subtitle">Dynamic Programming, Greedy, Heap & Priority Queue, Union-Find konularını pekiştirici sorular</p>
  <Link to="/hafta3" className="back-link">3. Hafta'ya Dön</Link>
      </div>

      <section className="section quiz-section">
  <h2>Dynamic Programming</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('dp1')}>
            <strong>S1:</strong> Dynamic Programming'in temel prensipi nedir?
            <span className="toggle-indicator">{visibleAnswers.dp1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.dp1 && (
            <div className="answer">
              <strong>C:</strong> <strong>"Overlapping subproblems'ları bir kez çöz, sonuçları sakla, tekrar kullan"</strong>. Optimal substructure + overlapping subproblems = DP. Recursive çözümün exponential time'ını polynomial time'a düşürür.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('dp2')}>
            <strong>S2:</strong> Memoization ile Tabulation arasındaki fark nedir?
            <span className="toggle-indicator">{visibleAnswers.dp2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.dp2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Memoization:</strong> Top-down, recursive + cache. Natural ama function call overhead var</li>
                <li><strong>Tabulation:</strong> Bottom-up, iterative + table. Efficient ama less intuitive</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('dp3')}>
            <strong>S3:</strong> Fibonacci için naive recursive O(2ⁿ) neden bu kadar yavaş?
            <span className="toggle-indicator">{visibleAnswers.dp3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.dp3 && (
            <div className="answer">
              <strong>C:</strong> <strong>Aynı değerleri tekrar tekrar hesaplıyor</strong>. Fib(5) hesaplarken Fib(3)'ü 2 kez, Fib(2)'yi 3 kez hesaplar. DP ile O(n)'e düşer.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('dp4')}>
            <strong>S4:</strong> House Robber probleminin DP formülü nedir?
            <span className="toggle-indicator">{visibleAnswers.dp4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.dp4 && (
            <div className="answer">
              <strong>C:</strong> <code>dp[i] = Math.Max(nums[i] + dp[i-2], dp[i-1])</code> - Bu evi soy + 2 önceki max vs bu evi soyma + önceki max.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('dp5')}>
            <strong>S5:</strong> Coin Change'de neden bottom-up yaklaşım kullanırız?
            <span className="toggle-indicator">{visibleAnswers.dp5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.dp5 && (
            <div className="answer">
              <strong>C:</strong> <strong>Küçük amount'lar için optimal solution bulduktan sonra, büyük amount'ları bunları kullanarak çözeriz</strong>. Her amount için tüm coin'leri deneyip minimum buluruz.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('dp6')}>
            <strong>S6:</strong> 2D DP problemlerinde state tanımı nasıl yapılır?
            <span className="toggle-indicator">{visibleAnswers.dp6 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.dp6 && (
            <div className="answer">
              <strong>C:</strong> <strong>dp[i][j]</strong> genelde <strong>"i pozisyonuna kadar j constraint ile optimal solution"</strong> anlamına gelir. Unique Paths'te dp[i][j] = (i,j)'ye kaç yoldan ulaşılır.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('dp7')}>
            <strong>S7:</strong> LCS (Longest Common Subsequence) algoritmasının recurrence relation'ı nedir?
            <span className="toggle-indicator">{visibleAnswers.dp7 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.dp7 && (
            <div className="answer">
              <strong>C:</strong>
              <pre>if (s1[i] == s2[j]): dp[i][j] = 1 + dp[i-1][j-1]</pre>
              <pre>else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])</pre>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('dp8')}>
            <strong>S8:</strong> 0/1 Knapsack ile Fractional Knapsack arasındaki fark nedir?
            <span className="toggle-indicator">{visibleAnswers.dp8 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.dp8 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>0/1 Knapsack:</strong> Item'i bölemezsin -&gt; DP gerekir -&gt; O(nW)</li>
                <li><strong>Fractional:</strong> Item'i bölebilirsin -&gt; Greedy yeter -&gt; O(n log n)</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('dp9')}>
            <strong>S9:</strong> DP problem'i nasıl identify edersin?
            <span className="toggle-indicator">{visibleAnswers.dp9 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.dp9 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Optimization</strong> (min/max) veya <strong>counting</strong> problem</li>
                <li><strong>Optimal substructure</strong> var mı?</li>
                <li><strong>Overlapping subproblems</strong> var mı?</li>
                <li><strong>Future decisions</strong> previous decisions'a bağlı mı?</li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('dp10')}>
            <strong>S10:</strong> Space optimization nasıl yapılır?
            <span className="toggle-indicator">{visibleAnswers.dp10 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.dp10 && (
            <div className="answer">
              <strong>C:</strong> <strong>Sadece previous state'leri tutarak</strong> table size'ını küçültürüz. Fibonacci'de n boyutlu array yerine 2 variable yeter. 2D DP'de genelde 1D array'e optimize edilebilir.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
  <h2>Greedy Algorithms</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('greedy1')}>
            <strong>S11:</strong> Greedy algorithm'ın temel felsefesi nedir?
            <span className="toggle-indicator">{visibleAnswers.greedy1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.greedy1 && (
            <div className="answer">
              <strong>C:</strong> <strong>"Her adımda local optimal choice yap, gerisini düşünme"</strong>. Global optimal'a ulaşmayı garanti etmez ama çoğu zaman yeterince iyi + çok hızlı.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('greedy2')}>
            <strong>S12:</strong> Activity Selection'da neden "earliest end time" greedy choice'ı optimal?
            <span className="toggle-indicator">{visibleAnswers.greedy2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.greedy2 && (
            <div className="answer">
              <strong>C:</strong> <strong>En erken biten activity, gelecekteki en fazla activity için yer bırakır</strong>. Matematiksel olarak kanıtlanabilir ki bu choice global optimal'a götürür.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('greedy3')}>
            <strong>S13:</strong> Fractional Knapsack'te greedy strategy nedir?
            <span className="toggle-indicator">{visibleAnswers.greedy3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.greedy3 && (
            <div className="answer">
              <strong>C:</strong> <strong>Value/weight ratio'su en yüksek item'ları önce al</strong>. Birim ağırlık başına en değerli item'lar optimal çözümde yer alır.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('greedy4')}>
            <strong>S14:</strong> Standard coin systems için Greedy Coin Change neden çalışır?
            <span className="toggle-indicator">{visibleAnswers.greedy4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.greedy4 && (
            <div className="answer">
              <strong>C:</strong> <strong>[1,5,10,25] gibi sistemlerde büyük coin'i kullanmak her zaman optimal</strong>. Ama [1,3,4] amount=6 için Greedy [4,1,1] (3 coin), Optimal [3,3] (2 coin) verir.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('greedy5')}>
            <strong>S15:</strong> Jump Game'de greedy approach nasıl çalışır?
            <span className="toggle-indicator">{visibleAnswers.greedy5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.greedy5 && (
            <div className="answer">
              <strong>C:</strong> <strong>Şimdiye kadar ulaşabileceğimiz en uzak noktayı track ederiz</strong>. Her position'da <code>maxReach = max(maxReach, i + nums[i])</code> güncellenir.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('greedy6')}>
            <strong>S16:</strong> Meeting Rooms probleminde neden start/end time'ları ayrı sıralıyoruz?
            <span className="toggle-indicator">{visibleAnswers.greedy6 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.greedy6 && (
            <div className="answer">
              <strong>C:</strong> <strong>Event-based simulation</strong> - Her time point'te kaç meeting aktif kontrol ederiz. Start event +1 room, end event -1 room demek.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('greedy7')}>
            <strong>S17:</strong> Gas Station probleminde start point'i nasıl belirliyoruz?
            <span className="toggle-indicator">{visibleAnswers.greedy7 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.greedy7 && (
            <div className="answer">
              <strong>C:</strong> <strong>Current gas negative olursa o start point çalışmaz demektir</strong>. Bir sonraki position'dan yeni start deneriz. Total gas yetiyorsa bir solution mutlaka vardır.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('greedy8')}>
            <strong>S18:</strong> Greedy algorithm'ın correctness'ini nasıl kanıtlarsın?
            <span className="toggle-indicator">{visibleAnswers.greedy8 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.greedy8 && (
            <div className="answer">
              <strong>C:</strong> <strong>Exchange argument</strong>: Optimal solution'da greedy choice olmasaydı, onu greedy choice ile değiştirip daha iyi/eşit solution elde edebileceğimizi gösteririz.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('greedy9')}>
            <strong>S19:</strong> Greedy vs DP - hangi durumda hangisini kullanırsın?
            <span className="toggle-indicator">{visibleAnswers.greedy9 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.greedy9 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Greedy:</strong> Local optimal -&gt; global optimal + hız önemli</li>
                <li><strong>DP:</strong> Overlapping subproblems + optimal solution garanti</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('greedy10')}>
            <strong>S20:</strong> Hangi problemlerde Greedy kesinlikle çalışmaz?
            <span className="toggle-indicator">{visibleAnswers.greedy10 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.greedy10 && (
            <div className="answer">
              <strong>C:</strong> <strong>0/1 Knapsack, LCS, shortest path (negative weights), coin change (non-standard)</strong> - Bu problemlerde future consequences local choice'ları etkiler.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
  <h2>Heap &amp; Priority Queue</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('heap1')}>
            <strong>S21:</strong> Heap'in temel property'si nedir?
            <span className="toggle-indicator">{visibleAnswers.heap1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.heap1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Shape property:</strong> Complete binary tree</li>
                <li><strong>Heap property:</strong> Parent ≥ children (max heap) veya parent ≤ children (min heap)</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('heap2')}>
            <strong>S22:</strong> Heap'i array'de nasıl represent ederiz?
            <span className="toggle-indicator">{visibleAnswers.heap2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.heap2 && (
            <div className="answer">
              <strong>C:</strong> <strong>Index 0'dan başlayarak</strong>: Parent(i) = (i-1)/2, LeftChild(i) = 2i+1, RightChild(i) = 2i+2. Bu sayede pointer gerektirmez.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('heap3')}>
            <strong>S23:</strong> Heap'te insert operation'ı nasıl çalışır?
            <span className="toggle-indicator">{visibleAnswers.heap3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.heap3 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Array'in sonuna ekle</strong> (complete tree property için)</li>
                <li><strong>Heapify up</strong> - parent'tan küçükse (min heap) swap et, root'a kadar devam et</li>
                <li><strong>Time: O(log n)</strong></li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('heap4')}>
            <strong>S24:</strong> Extract min/max neden O(log n) sürer?
            <span className="toggle-indicator">{visibleAnswers.heap4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.heap4 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Root'taki min/max'ı al</strong></li>
                <li><strong>Son elemanı root'a taşı, son elemanı sil</strong></li>
                <li><strong>Heapify down</strong> - child'lardan küçük olanla swap et, leaf'e kadar</li>
                <li><strong>Tree height = log n, worst case tüm tree'yi traverse</strong></li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('heap5')}>
            <strong>S25:</strong> Build heap işlemi neden O(n) time alır?
            <span className="toggle-indicator">{visibleAnswers.heap5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.heap5 && (
            <div className="answer">
              <strong>C:</strong> <strong>Bottom-up heapify</strong>: Son non-leaf'ten başlayıp root'a kadar heapify. Mathematical analysis gösterir ki total work O(n).
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('heap6')}>
            <strong>S26:</strong> Top K elements bulma için hangi heap kullanılır?
            <span className="toggle-indicator">{visibleAnswers.heap6 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.heap6 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>K largest:</strong> Min heap (size k) - küçüğü çıkar, büyükleri sakla</li>
                <li><strong>K smallest:</strong> Max heap (size k) - büyüğü çıkar, küçükleri sakla</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('heap7')}>
            <strong>S27:</strong> Merge K sorted lists'te heap nasıl kullanılır?
            <span className="toggle-indicator">{visibleAnswers.heap7 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.heap7 && (
            <div className="answer">
              <strong>C:</strong> <strong>Her list'in head'ini heap'e at, en küçüğü al, o list'in next'ini heap'e at</strong>. Her adımda K elemanlı heap maintain ederiz.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('heap8')}>
            <strong>S28:</strong> Median from data stream problemi nasıl çözülür?
            <span className="toggle-indicator">{visibleAnswers.heap8 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.heap8 && (
            <div className="answer">
              <strong>C:</strong> <strong>İki heap kullan</strong>: MaxHeap (lower half), MinHeap (upper half). Balance maintain et, median heap'lerin peek'lerinden bulunur.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('heap9')}>
            <strong>S29:</strong> Dijkstra algorithm'da heap'in rolü nedir?
            <span className="toggle-indicator">{visibleAnswers.heap9 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.heap9 && (
            <div className="answer">
              <strong>C:</strong> <strong>Distance'a göre node'ları prioritize eder</strong>. En yakın unvisited node'u her zaman önce process eder. Min heap kullanılır.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('heap10')}>
            <strong>S30:</strong> Heap vs BST - ne zaman hangisini kullanırsın?
            <span className="toggle-indicator">{visibleAnswers.heap10 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.heap10 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Heap:</strong> Priority operations (min/max), no search needed</li>
                <li><strong>BST:</strong> Search operations, sorted traversal, range queries</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
  <h2>Union-Find (Disjoint Set)</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('uf1')}>
            <strong>S31:</strong> Union-Find'ın temel amacı nedir?
            <span className="toggle-indicator">{visibleAnswers.uf1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.uf1 && (
            <div className="answer">
              <strong>C:</strong> <strong>Dynamic connectivity queries'i efficiently handle etmek</strong>. "İki eleman aynı component'te mi?" sorusunu neredeyse O(1)'de cevaplar.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('uf2')}>
            <strong>S32:</strong> Path compression nasıl çalışır?
            <span className="toggle-indicator">{visibleAnswers.uf2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.uf2 && (
            <div className="answer">
              <strong>C:</strong> <strong>Find operation sırasında tüm node'ları direkt root'a bağlarız</strong>. Recursive: <code>parent[x] = Find(parent[x])</code>. Tree'yi düzleştirerek future queries'i hızlandırır.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('uf3')}>
            <strong>S33:</strong> Union by rank/size'ın mantığı nedir?
            <span className="toggle-indicator">{visibleAnswers.uf3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.uf3 && (
            <div className="answer">
              <strong>C:</strong> <strong>Küçük tree'yi büyük tree'nin altına bağlarız</strong>. Bu tree'nin depth'ini minimize eder, Find operation'ını hızlandırır.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('uf4')}>
            <strong>S34:</strong> Union-Find'ın amortized complexity'si nedir?
            <span className="toggle-indicator">{visibleAnswers.uf4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.uf4 && (
            <div className="answer">
              <strong>C:</strong> <strong>O(α(n))</strong> - α inverse Ackermann function. Pratik n değerleri için ≤ 5, yani virtually constant.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('uf5')}>
            <strong>S35:</strong> Number of Islands problemi nasıl Union-Find ile çözülür?
            <span className="toggle-indicator">{visibleAnswers.uf5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.uf5 && (
            <div className="answer">
              <strong>C:</strong> <strong>Her land cell'i komşu land cell'leri ile union et</strong>. Son'da total components - water cells = island count.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('uf6')}>
            <strong>S36:</strong> Kruskal's MST'de Union-Find'ın rolü nedir?
            <span className="toggle-indicator">{visibleAnswers.uf6 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.uf6 && (
            <div className="answer">
              <strong>C:</strong> <strong>Cycle detection</strong>: Edge eklenmeden önce endpoints aynı component'te mi kontrol ederiz. Aynı component'teyse cycle yaratır, eklemeyiz.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('uf7')}>
            <strong>S37:</strong> Friend Circles probleminde Union-Find nasıl uygulanır?
            <span className="toggle-indicator">{visibleAnswers.uf7 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.uf7 && (
            <div className="answer">
              <strong>C:</strong> <strong>Her person bir node, direct friendship edge</strong>. Friend matrix'te M[i][j]=1 ise Union(i,j). Son'da component count = friend circle count.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('uf8')}>
            <strong>S38:</strong> Redundant Connection problemi nasıl çözülür?
            <span className="toggle-indicator">{visibleAnswers.uf8 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.uf8 && (
            <div className="answer">
              <strong>C:</strong> <strong>Edge'leri sırayla process ederiz</strong>. Edge eklemeden önce endpoints connected mi kontrol ederiz. Connected ise o edge redundant.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('uf9')}>
            <strong>S39:</strong> Union-Find'da rollback mümkün mü?
            <span className="toggle-indicator">{visibleAnswers.uf9 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.uf9 && (
            <div className="answer">
              <strong>C:</strong> <strong>Path compression kullanmazsak mümkün</strong>. Union operation'larını stack'te tutarız, rollback için reverse ederiz. Ama complexity artar.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('uf10')}>
            <strong>S40:</strong> Hangi durumlarda Union-Find kullanmamalısın?
            <span className="toggle-indicator">{visibleAnswers.uf10 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.uf10 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Path queries</strong> gerekiyorsa (shortest path)</li>
                <li><strong>Disconnection</strong> operations gerekiyorsa</li>
                <li><strong>Directed graph</strong> problems</li>
                <li><strong>Weighted connectivity</strong> (shortest path)</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
  <h2>Algorithm Design &amp; Problem Solving</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('design1')}>
            <strong>S41:</strong> Bir optimization problem gördüğünde hangi technique'i düşünürsün?
            <span className="toggle-indicator">{visibleAnswers.design1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.design1 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Greedy work eder mi?</strong> (local optimal -&gt; global)</li>
                <li><strong>DP patterns var mı?</strong> (overlapping subproblems)</li>
                <li><strong>Graph problem mi?</strong> (shortest path, MST)</li>
                <li><strong>Search space'te binary search?</strong> (monotonic property)</li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('design2')}>
            <strong>S42:</strong> Recursive DP'den iterative DP'ye nasıl geçersin?
            <span className="toggle-indicator">{visibleAnswers.design2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.design2 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Base cases'i identify et</strong></li>
                <li><strong>Recurrence direction'ını belirle</strong> (bottom-up)</li>
                <li><strong>Table'ı base cases ile initialize et</strong></li>
                <li><strong>Recurrence relation'ı iterative olarak uygula</strong></li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('design3')}>
            <strong>S43:</strong> Space optimization hangi DP problemlerinde mümkün?
            <span className="toggle-indicator">{visibleAnswers.design3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.design3 && (
            <div className="answer">
              <strong>C:</strong> <strong>Sadece previous row/column'a depend eden</strong> problemlerde. 1D DP'de O(1), 2D DP'de O(min(m,n)) space'e optimize edilebilir.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('design4')}>
            <strong>S44:</strong> Graph problem'ini gördüğünde hangi algorithm'ı seçersin?
            <span className="toggle-indicator">{visibleAnswers.design4 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.design4 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Connectivity:</strong> Union-Find</li>
                <li><strong>Shortest path:</strong> Dijkstra (positive), Bellman-Ford (negative)</li>
                <li><strong>MST:</strong> Kruskal (Union-Find), Prim (Heap)</li>
                <li><strong>Topological sort:</strong> DFS/BFS</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('design5')}>
            <strong>S45:</strong> Algorithm complexity analyze ederken nelere dikkat edersin?
            <span className="toggle-indicator">{visibleAnswers.design5 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.design5 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Dominant operations</strong> (loops, recursive calls)</li>
                <li><strong>Input size parameters</strong> (n, m, k)</li>
                <li><strong>Space usage</strong> (extra arrays, recursion stack)</li>
                <li><strong>Best/Average/Worst case</strong> scenarios</li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('design6')}>
            <strong>S46:</strong> Interview'da algorithm problem approach'ın nasıl olur?
            <span className="toggle-indicator">{visibleAnswers.design6 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.design6 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Problem'i understand et</strong> (examples, constraints)</li>
                <li><strong>Brute force'dan başla</strong> (correctness önce)</li>
                <li><strong>Optimize et</strong> (bottleneck'leri identify et)</li>
                <li><strong>Edge cases</strong> (empty input, single element)</li>
                <li><strong>Complexity analysis</strong> (time + space)</li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('design7')}>
            <strong>S47:</strong> Debugging algorithm'ında hangi teknik'leri kullanırsın?
            <span className="toggle-indicator">{visibleAnswers.design7 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.design7 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Small examples</strong> ile trace et</li>
                <li><strong>Base cases</strong> kontrol et</li>
                <li><strong>Invariants</strong> maintain ediliyor mu?</li>
                <li><strong>State transitions</strong> doğru mu?</li>
                <li><strong>Print statements</strong> critical points'te</li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('design8')}>
            <strong>S48:</strong> Advanced algorithm topics'e geçmek için hangi foundation gerekli?
            <span className="toggle-indicator">{visibleAnswers.design8 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.design8 && (
            <div className="answer">
              <strong>C:</strong> <strong>DP + Greedy + Graph algorithms + data structures (heap, union-find) + complexity analysis</strong>. Bu 4 teknik modern algorithm design'ın %80'ini kapsar.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('design9')}>
            <strong>S49:</strong> Real-world problem'i algorithm problem'ine nasıl translate edersin?
            <span className="toggle-indicator">{visibleAnswers.design9 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.design9 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Core problem'i extract et</strong> (requirements'ten)</li>
                <li><strong>Mathematical model'e çevir</strong> (graph, array, tree)</li>
                <li><strong>Constraints'leri identify et</strong> (time, space, accuracy)</li>
                <li><strong>Known patterns'e map et</strong> (DP, greedy, graph)</li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('design10')}>
            <strong>S50:</strong> Performance critical system'de hangi algorithm choices yaparsin?
            <span className="toggle-indicator">{visibleAnswers.design10 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.design10 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Time vs Space tradeoff</strong> (caching vs computation)</li>
                <li><strong>Average case'i optimize et</strong> (worst case nadir)</li>
                <li><strong>Parallelizable</strong> algorithms tercih et</li>
                <li><strong>Cache-friendly</strong> memory access patterns</li>
                <li><strong>Early termination</strong> conditions ekle</li>
              </ol>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="quiz-summary">
          <h2>Özet</h2>
          <p>Bu sorularla Hafta 3'ün tüm önemli kavramlarını pekiştirmiş oldun! İleri algoritmalar artık senin için çok daha anlaşılır.</p>
          
          <p><strong>Öğrendiğin İleri Algoritmalar:</strong></p>
          <ul>
            <li><strong>Dynamic Programming</strong> - Memoization vs Tabulation</li>
            <li><strong>Greedy Algorithms</strong> - Local optimal seçimler</li>
            <li><strong>Heap &amp; Priority Queue</strong> - Öncelik tabanlı işlemler</li>
            <li><strong>Union-Find</strong> - Dynamic connectivity ve grup yönetimi</li>
          </ul>
          
          <p>Bu 4 teknik, <strong>algorithm design'ın en güçlü araçları</strong>! Artık karmaşık optimization problemlerini çözebilir, efficient priority systems tasarlayabilir ve dynamic graph problemlerini handle edebilirsin!</p>
        </div>
      </section>

      <Notes topicPath="/hafta3-quiz" topicTitle="Hafta 3 DSA - Soru & Cevap" />

      <div className="navigation-links">
  <Link to="/hafta2-quiz" className="nav-button">2. Hafta Quiz</Link>
  <Link to="/hafta4" className="nav-button">4. Hafta</Link>
      </div>
    </div>
  );
}

export default Hafta3Quiz;