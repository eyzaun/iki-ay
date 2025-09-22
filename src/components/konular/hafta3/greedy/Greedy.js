import React from 'react';
import Notes from '../../../notes/Notes';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import CodeBlock from '../../../ui/CodeBlock';

function Greedy() {
  return (
    <div className="app-container">
      <SEO
        title="Greedy Algorithms - Açgözlü Algoritmalar | İki Ay"
        description="Greedy algoritmalar öğren. Activity Selection, Fractional Knapsack, Coin Change, Jump Game problemleri."
        canonical="https://iki-ay.web.app/greedy"
        og={{ url: 'https://iki-ay.web.app/greedy' }}
      />

      <div className="content-header">
        <h1>Greedy Algorithms - Açgözlü Algoritmalar</h1>
  <Link to="/hafta3" className="back-link">3. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>Greedy Algorithm Nedir? Felsefesi Nedir?</h2>
        <p>
          Greedy Algorithm, <strong>her adımda local optimal choice yaparak global optimal çözümü bulan</strong> yaklaşım.
          "Açgözlü" çünkü her seferinde en iyi görüneni alır, geleceği düşünmez!
        </p>

        <h3>Gerçek Hayattan Benzetme</h3>
        <p>Düşün ki markete gittin ve en ucuz ürünleri almak istiyorsun:</p>
        <ul>
          <li><strong>Local optimal:</strong> Şu an gördüğüm en ucuz ürünü al</li>
          <li><strong>Global optimal:</strong> Tüm alışveriş sonunda minimum para harca</li>
          <li><strong>Greedy choice:</strong> Her adımda en ucuzu alırsan toplam minimum olur mu?</li>
        </ul>
        <p>Greedy'de bu mantık çalışır! Ama her zaman değil...</p>
      </section>

      <section className="section">
        <h2>Klasik Greedy Problemleri</h2>

        <div className="topic-card">
          <h3>1. Activity Selection - Etkinlik Seçimi</h3>
          <p>Çakışmayan maximum etkinlik sayısı? En erken biteni seç!</p>
          <CodeBlock language="csharp">
{`public class Activity
{
    public int Start { get; set; }
    public int End { get; set; }
    public string Name { get; set; }
}

public int MaxActivities(List<Activity> activities)
{
    // Bitiş zamanına göre sırala
    activities.Sort((a, b) => a.End.CompareTo(b.End));
    
    int count = 1;
    int lastEndTime = activities[0].End;
    
    for (int i = 1; i < activities.Count; i++)
    {
        if (activities[i].Start >= lastEndTime)
        {
            count++;
            lastEndTime = activities[i].End;
        }
    }
    
    return count;
}

// Neden çalışır? En erken biten etkinlik, diğerleri için en çok yer bırakır!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Fractional Knapsack - Kesirli Sırt Çantası</h3>
          <p>Kapasite sınırlı, item'leri bölebilirsin. Maximum value?</p>
          <CodeBlock language="csharp">
{`public class Item
{
    public int Weight { get; set; }
    public int Value { get; set; }
    public double Ratio => (double)Value / Weight;
}

public double FractionalKnapsack(List<Item> items, int capacity)
{
    // Value/weight ratio'suna göre sırala (azalan)
    items.Sort((a, b) => b.Ratio.CompareTo(a.Ratio));
    
    double totalValue = 0;
    int currentWeight = 0;
    
    foreach (var item in items)
    {
        if (currentWeight + item.Weight <= capacity)
        {
            // Tam al
            totalValue += item.Value;
            currentWeight += item.Weight;
        }
        else
        {
            // Kesirli al
            int remaining = capacity - currentWeight;
            totalValue += item.Ratio * remaining;
            break; // Çanta dolu
        }
    }
    
    return totalValue;
}

// Greedy: En değerli ratio'dan başla!`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Coin Change Problemleri</h2>

        <div className="topic-card">
          <h3>Standard Coin Systems - Greedy Çalışır</h3>
          <p>[1,5,10,25] gibi sistemlerde greedy optimal!</p>
          <CodeBlock language="csharp">
{`public int CoinChangeGreedy(int[] coins, int amount)
{
    Array.Sort(coins); // Büyükten küçüğe
    Array.Reverse(coins);
    
    int count = 0;
    
    foreach (int coin in coins)
    {
        if (amount >= coin)
        {
            int numCoins = amount / coin;
            count += numCoins;
            amount %= coin;
        }
        
        if (amount == 0) break;
    }
    
    return amount == 0 ? count : -1;
}

// 87 cents için: 25*3 + 10*1 + 1*2 = 6 coin
// Optimal!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>Non-Standard Systems - Greedy Yanlış!</h3>
          <p>[1,3,4] sisteminde greedy yanlış sonuç verir.</p>
          <CodeBlock language="csharp">
{`// Amount = 6 için:
// Greedy: 4 + 1 + 1 = 3 coin
// Optimal: 3 + 3 = 2 coin

// Bu yüzden DP kullanmalısın non-standard sistemlerde!`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Array/Matrix Problemleri</h2>

        <div className="topic-card">
          <h3>Jump Game - Sıçrama Oyunu</h3>
          <p>Array'deki sayı kadar sıçrayabilirsin. Sonuna ulaşabilir misin?</p>
          <CodeBlock language="csharp">
{`public bool CanJump(int[] nums)
{
    int maxReach = 0;
    
    for (int i = 0; i < nums.Length; i++)
    {
        if (i > maxReach) return false; // Buraya ulaşamamışım
        
        // Bu pozisyondan ne kadar uzağa gidebilirim?
        maxReach = Math.Max(maxReach, i + nums[i]);
        
        if (maxReach >= nums.Length - 1) return true;
    }
    
    return true;
}

// Greedy: Her adımda max reach'i güncelle!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>Jump Game II - Minimum Sıçrama</h3>
          <p>Sonuna minimum kaç sıçramada ulaşırım?</p>
          <CodeBlock language="csharp">
{`public int Jump(int[] nums)
{
    int jumps = 0;
    int currentEnd = 0;
    int farthest = 0;
    
    for (int i = 0; i < nums.Length - 1; i++)
    {
        farthest = Math.Max(farthest, i + nums[i]);
        
        if (i == currentEnd)
        {
            jumps++;
            currentEnd = farthest;
            
            if (currentEnd >= nums.Length - 1) break;
        }
    }
    
    return jumps;
}

// Greedy: Current range'de en uzağa gidebileni seç!`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Meeting Rooms Problemleri</h2>

        <div className="topic-card">
          <h3>Meeting Rooms II - Minimum Oda Sayısı</h3>
          <p>Çakışan toplantılar için kaç oda lazım?</p>
          <CodeBlock language="csharp">
{`public int MinMeetingRooms(int[][] intervals)
{
    // Start ve end time'ları ayrı sırala
    int[] starts = intervals.Select(x => x[0]).ToArray();
    int[] ends = intervals.Select(x => x[1]).ToArray();
    
    Array.Sort(starts);
    Array.Sort(ends);
    
    int rooms = 0;
    int endPtr = 0;
    
    // Event-based simulation
    for (int i = 0; i < starts.Length; i++)
    {
        if (starts[i] < ends[endPtr])
        {
            rooms++; // Yeni oda lazım
        }
        else
        {
            endPtr++; // Mevcut oda boşaldı
        }
    }
    
    return rooms;
}

// Start event: oda sayısı +1
// End event: oda sayısı -1`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>Gas Station - Benzin İstasyonu</h3>
          <p>Döngüde gaz yeterli mi? Başlangıç noktası?</p>
          <CodeBlock language="csharp">
{`public int CanCompleteCircuit(int[] gas, int[] cost)
{
    int totalGas = 0, currentGas = 0;
    int start = 0;
    
    for (int i = 0; i < gas.Length; i++)
    {
        int netGas = gas[i] - cost[i];
        totalGas += netGas;
        currentGas += netGas;
        
        if (currentGas < 0)
        {
            // Bu start point çalışmaz, sonraki ile dene
            start = i + 1;
            currentGas = 0;
        }
    }
    
    return totalGas >= 0 ? start : -1;
}

// Greedy: Negative olunca yeni start dene!`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Greedy Algorithm Analysis</h2>

        <div className="topic-card">
          <h3>Correctness Kanıtlaması</h3>
          <p>Greedy'nin doğru olduğunu nasıl kanıtlarsın?</p>
          <ol>
            <li><strong>Optimal substructure:</strong> Küçük problemlerin optimal çözümü büyük problemi çözer</li>
            <li><strong>Greedy choice property:</strong> Local optimal choice global optimal'a götürür</li>
            <li><strong>Exchange argument:</strong> Optimal çözümde greedy choice yoksa, değiştirerek daha iyi yapabilirsin</li>
          </ol>
        </div>

        <div className="topic-card">
          <h3>Greedy vs DP Karşılaştırması</h3>
          <table>
            <thead>
              <tr>
                <th>Özellik</th>
                <th>Greedy</th>
                <th>DP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Time Complexity</td>
                <td>O(n log n)</td>
                <td>O(n²) veya daha fazla</td>
              </tr>
              <tr>
                <td>Space Complexity</td>
                <td>O(1) veya O(n)</td>
                <td>O(n) veya O(n²)</td>
              </tr>
              <tr>
                <td>Correctness</td>
                <td>Yalnızca belirli problemlerde</td>
                <td>Genel olarak garanti</td>
              </tr>
              <tr>
                <td>Implementation</td>
                <td>Daha kolay</td>
                <td>Daha karmaşık</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>Greedy'nin Çalışmadığı Problemler</h2>

        <div className="topic-card">
          <h3>0/1 Knapsack</h3>
          <p>Item'i bölemezsin, future consequences var!</p>
          <CodeBlock language="csharp">
{`// Greedy yanlış: Value/weight ratio'ya göre al
// DP doğru: Her item için al/alma kararı ver

// Greedy: [60/10=6, 100/20=5, 120/30=4] -> 60+100=160
// Optimal: [100/20, 120/30] -> 220 (60/10'u alma!)`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>Coin Change (Non-standard)</h3>
          <p>Greedy optimal olmayabilir!</p>
        </div>

        <div className="topic-card">
          <h3>Longest Common Subsequence</h3>
          <p>Future matching'ler local choice'ı etkiler</p>
        </div>
      </section>

      <section className="section">
        <h2>Greedy Pattern Recognition</h2>

        <div className="topic-card">
          <h3>Greedy Kullan Eğer:</h3>
          <ul>
            <li><strong>Local optimal = Global optimal</strong></li>
            <li><strong>Sorting yeterli</strong> (activity selection, fractional knapsack)</li>
            <li><strong>Single pass</strong> yeterli (jump game)</li>
            <li><strong>Greedy choice property</strong> kanıtlanabilir</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>Greedy Kullanma Eğer:</h3>
          <ul>
            <li><strong>Future decisions</strong> local choice'ı etkiler</li>
            <li><strong>Overlapping subproblems</strong> var</li>
            <li><strong>All subsets</strong> denenmesi lazım</li>
            <li><strong>Non-standard systems</strong> (coin change)</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Interview Tips</h2>
        <ol>
          <li><strong>Greedy olduğunu doğrula:</strong> Counter-example ara</li>
          <li><strong>Sorting kullan:</strong> Çoğu greedy problem sorting ile başlar</li>
          <li><strong>Single pass yap:</strong> Array'i bir kez tara</li>
          <li><strong>Edge case'leri test et:</strong> Empty, single element</li>
          <li><strong>Time complexity hesapla:</strong> Genelde O(n log n)</li>
        </ol>
        <p>Greedy, basit ama güçlü! Doğru problemi seçersen çok hızlı çözüm verir.</p>
      </section>

      <Notes topicPath="/greedy" topicTitle="Greedy Algorithms - Açgözlü Algoritmalar" />

      <div className="navigation-links">
        <Link to="/dynamic-programming" className="nav-button">DP</Link>
        <Link to="/sliding-window" className="nav-button">Sliding Window</Link>
      </div>
    </div>
  );
}

export default Greedy;