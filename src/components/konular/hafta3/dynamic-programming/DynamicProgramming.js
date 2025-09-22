import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import CodeBlock from '../../../ui/CodeBlock';
import Notes from '../../../notes/Notes';

function DynamicProgramming() {
  return (
    <div className="app-container">
      <SEO
        title="Dynamic Programming (DP) - İleri Algoritmalar | İki Ay"
        description="Dynamic Programming'i öğren. Memoization, Tabulation, Fibonacci, House Robber, Coin Change, LCS, 0/1 Knapsack problemleri."
        canonical="https://iki-ay.web.app/dynamic-programming"
        og={{ url: 'https://iki-ay.web.app/dynamic-programming' }}
      />

      <div className="content-header">
        <h1>Dynamic Programming (DP) - İleri Algoritmalar</h1>
        <Link to="/hafta3" className="back-link">3. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>Dynamic Programming Nedir? Neden Bu Kadar Güçlü?</h2>
        <p>
          Dynamic Programming, <strong>karmaşık problemleri küçük parçalara bölüp, sonuçları saklayarak çözen</strong> yaklaşım.
          "Overlapping subproblems" + "Optimal substructure" = DP'nin altın kuralı!
        </p>

        <h3>Gerçek Hayattan Benzetme</h3>
        <p>Düşün ki büyük bir puzzle'ı çözüyorsun:</p>
        <ul>
          <li><strong>Küçük parçaları çöz, sonucu sakla:</strong> Tekrar aynı parçaya gelince hazır olsun</li>
          <li><strong>Optimal parçaları birleştir:</strong> En iyi küçük çözümlerden en iyi büyük çözüm</li>
          <li><strong>Recursive + Memoization:</strong> Akıllıca hesapla, tekrar etme</li>
        </ul>
        <p>İşte DP de tam böyle çalışır! Bu yüzden exponential problemleri polynomial'e düşürür.</p>
      </section>

      <section className="section">
        <h2>DP'nin 2 Temel Yaklaşımı</h2>

        <div className="topic-card">
          <h3>1. Top-Down (Memoization) - Yukarıdan Aşağı</h3>
          <p>Recursive çözüm + cache. Doğal ama function call overhead var.</p>
          <CodeBlock language="csharp">
{`// Fibonacci - Memoization
Dictionary<int, long> memo = new Dictionary<int, long>();

public long FibonacciMemo(int n)
{
    if (n <= 1) return n;
    if (memo.ContainsKey(n)) return memo[n];
    
    long result = FibonacciMemo(n - 1) + FibonacciMemo(n - 2);
    memo[n] = result;
    return result;
}

// Avantaj: Kolay anlaşılır, sadece gerekli hesaplamalar yapılır
// Dezavantaj: Recursion stack, function call overhead`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Bottom-Up (Tabulation) - Aşağıdan Yukarı</h3>
          <p>Iterative çözüm + table. Efficient ama less intuitive.</p>
          <CodeBlock language="csharp">
{`// Fibonacci - Tabulation
public long FibonacciTab(int n)
{
    if (n <= 1) return n;
    
    long[] dp = new long[n + 1];
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++)
    {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// Avantaj: Daha hızlı, stack overflow yok
// Dezavantaj: Tüm alt problemleri çözer (gereksiz olabilir)`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Klasik DP Problemleri</h2>

        <div className="topic-card">
          <h3>1. House Robber - Ev Soygunu Problemi</h3>
          <p>Yan yana evleri soymak yasak. Maximum para?</p>
          <CodeBlock language="csharp">
{`public int Rob(int[] nums)
{
    if (nums.Length == 0) return 0;
    if (nums.Length == 1) return nums[0];
    
    int[] dp = new int[nums.Length];
    dp[0] = nums[0];
    dp[1] = Math.Max(nums[0], nums[1]);
    
    for (int i = 2; i < nums.Length; i++)
    {
        // Bu evi soy + 2 önceki max vs bu evi soyma + önceki max
        dp[i] = Math.Max(nums[i] + dp[i - 2], dp[i - 1]);
    }
    
    return dp[nums.Length - 1];
}

// Recurrence: dp[i] = max(nums[i] + dp[i-2], dp[i-1])`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Coin Change - Minimum Coin Sayısı</h3>
          <p>Verilen coin'lerle amount'u yap. Minimum coin sayısı?</p>
          <CodeBlock language="csharp">
{`public int CoinChange(int[] coins, int amount)
{
    int[] dp = new int[amount + 1];
    Array.Fill(dp, amount + 1); // Impossible başlangıç
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++)
    {
        foreach (int coin in coins)
        {
            if (i >= coin)
            {
                dp[i] = Math.Min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
}

// Bottom-up: Küçük amount'lardan büyük amount'lara`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. Longest Common Subsequence (LCS)</h3>
          <p>İki string'in en uzun ortak alt dizisi?</p>
          <CodeBlock language="csharp">
{`public int LongestCommonSubsequence(string text1, string text2)
{
    int m = text1.Length, n = text2.Length;
    int[,] dp = new int[m + 1, n + 1];
    
    for (int i = 1; i <= m; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            if (text1[i - 1] == text2[j - 1])
            {
                dp[i, j] = dp[i - 1, j - 1] + 1;
            }
            else
            {
                dp[i, j] = Math.Max(dp[i - 1, j], dp[i, j - 1]);
            }
        }
    }
    
    return dp[m, n];
}

// Recurrence: eşitse +1, değilse max(sol, üst)`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>0/1 Knapsack - Klasik DP Problemi</h2>
        <p>Sınırlı ağırlık kapasitesi olan çantaya maximum value koy.</p>

        <div className="topic-card">
          <h3>2D DP Çözümü</h3>
          <CodeBlock language="csharp">
{`public int Knapsack01(int[] weights, int[] values, int capacity)
{
    int n = weights.Length;
    int[,] dp = new int[n + 1, capacity + 1];
    
    for (int i = 1; i <= n; i++)
    {
        for (int w = 1; w <= capacity; w++)
        {
            if (weights[i - 1] <= w)
            {
                // Bu item'i al veya alma
                dp[i, w] = Math.Max(
                    values[i - 1] + dp[i - 1, w - weights[i - 1]], // Al
                    dp[i - 1, w] // Alma
                );
            }
            else
            {
                dp[i, w] = dp[i - 1, w]; // Alamam
            }
        }
    }
    
    return dp[n, capacity];
}

// Time: O(nW), Space: O(nW)`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>1D Space Optimization</h3>
          <CodeBlock language="csharp">
{`public int Knapsack01Optimized(int[] weights, int[] values, int capacity)
{
    int n = weights.Length;
    int[] dp = new int[capacity + 1];
    
    for (int i = 0; i < n; i++)
    {
        for (int w = capacity; w >= weights[i]; w--)
        {
            // Backward iteration - aynı item'i tekrar kullanma
            dp[w] = Math.Max(dp[w], values[i] + dp[w - weights[i]]);
        }
    }
    
    return dp[capacity];
}

// Space: O(W) - çok daha iyi!`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>2D DP Problemleri</h2>

        <div className="topic-card">
          <h3>Unique Paths - Robot'un Yolları</h3>
          <p>Grid'de sağ/aşağı hareketlerle kaç yol var?</p>
          <CodeBlock language="csharp">
{`public int UniquePaths(int m, int n)
{
    int[,] dp = new int[m, n];
    
    // İlk satır ve sütun 1 (sadece bir yol)
    for (int i = 0; i < m; i++) dp[i, 0] = 1;
    for (int j = 0; j < n; j++) dp[0, j] = 1;
    
    for (int i = 1; i < m; i++)
    {
        for (int j = 1; j < n; j++)
        {
            dp[i, j] = dp[i - 1, j] + dp[i, j - 1];
        }
    }
    
    return dp[m - 1, n - 1];
}

// dp[i][j] = (i,j)'ye kaç yoldan ulaşılır`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>Edit Distance - Düzenleme Mesafesi</h3>
          <p>Bir string'i diğerine çevirmek için minimum işlem?</p>
          <CodeBlock language="csharp">
{`public int MinDistance(string word1, string word2)
{
    int m = word1.Length, n = word2.Length;
    int[,] dp = new int[m + 1, n + 1];
    
    // Base cases
    for (int i = 0; i <= m; i++) dp[i, 0] = i; // Delete
    for (int j = 0; j <= n; j++) dp[0, j] = j; // Insert
    
    for (int i = 1; i <= m; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            if (word1[i - 1] == word2[j - 1])
            {
                dp[i, j] = dp[i - 1, j - 1]; // No operation
            }
            else
            {
                dp[i, j] = 1 + Math.Min(
                    dp[i - 1, j - 1], // Replace
                    Math.Min(dp[i - 1, j], dp[i, j - 1]) // Delete/Insert
                );
            }
        }
    }
    
    return dp[m, n];
}`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>DP Pattern Recognition</h2>

        <div className="topic-card">
          <h3>DP Kullan Eğer:</h3>
          <ul>
            <li><strong>Optimization problemi:</strong> Min/max/count</li>
            <li><strong>Optimal substructure:</strong> Küçük problemlerin çözümü büyük problemi çözer</li>
            <li><strong>Overlapping subproblems:</strong> Aynı alt problemler tekrarlanır</li>
            <li><strong>Future decisions:</strong> Geçmiş kararlar gelecek kararları etkiler</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>DP Kullanma Eğer:</h3>
          <ul>
            <li><strong>Greedy yeterli:</strong> Local optimal = global optimal</li>
            <li><strong>No overlapping:</strong> Her alt problem unique</li>
            <li><strong>Graph problemi:</strong> Shortest path, MST vs.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Space Optimization Teknikleri</h2>

        <div className="topic-card">
          <h3>1. 2 Variable ile Fibonacci</h3>
          <CodeBlock language="csharp">
{`public int FibonacciOptimized(int n)
{
    if (n <= 1) return n;
    
    int prev2 = 0, prev1 = 1;
    
    for (int i = 2; i <= n; i++)
    {
        int current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

// O(n) time, O(1) space!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. 2 Row ile Matrix DP</h3>
          <CodeBlock language="csharp">
{`// LCS için 2 row yeterli
public int LCSOptimized(string s1, string s2)
{
    int[] prev = new int[s2.Length + 1];
    int[] curr = new int[s2.Length + 1];
    
    for (int i = 1; i <= s1.Length; i++)
    {
        for (int j = 1; j <= s2.Length; j++)
        {
            if (s1[i - 1] == s2[j - 1])
                curr[j] = prev[j - 1] + 1;
            else
                curr[j] = Math.Max(prev[j], curr[j - 1]);
        }
        
        // Swap
        int[] temp = prev;
        prev = curr;
        curr = temp;
        Array.Fill(curr, 0);
    }
    
    return prev[s2.Length];
}`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>DP Interview Tips</h2>
        <ol>
          <li><strong>State tanımla:</strong> dp[i] neyi temsil ediyor?</li>
          <li><strong>Base case belirle:</strong> En küçük problemler nasıl çözülür?</li>
          <li><strong>Recurrence yaz:</strong> dp[i] = ... ?</li>
          <li><strong>Order belirle:</strong> Hangi sırayla dolduracaksın?</li>
          <li><strong>Space optimize et:</strong> Gereksiz boyutları kaldır</li>
        </ol>
        <p>DP, algorithm design'ın en güçlü aracı! Pattern'leri tanıdığında karmaşık problemler kolaylaşacak.</p>
      </section>

      <Notes topicPath="/dynamic-programming" topicTitle="Dynamic Programming (DP) - İleri Algoritmalar" />

      <div className="navigation-links">
        <Link to="/hafta3" className="nav-button">3. Hafta</Link>
        <Link to="/greedy" className="nav-button">Greedy</Link>
      </div>
    </div>
  );
}

export default DynamicProgramming;