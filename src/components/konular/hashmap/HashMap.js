import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../seo/SEO';
import CodeBlock from '../../ui/CodeBlock';

function HashMap() {
  return (
    <div className="app-container">
      <SEO
        title="HashMap (HashTable) - Hızlı Arama Veri Yapısı | İki Ay"
        description="HashMap veri yapısını öğren. Hash function, collision resolution, O(1) arama süreleri, Dictionary kullanımı ve pratik örnekler."
        canonical="https://iki-ay.web.app/hashmap"
        og={{ url: 'https://iki-ay.web.app/hashmap' }}
      />
      
      <div className="content-header">
        <h1>HashMap (HashTable) - Hızlı Arama Veri Yapısı</h1>
        <Link to="/hafta1" className="back-link">← 1. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>HashMap Nedir? Sihirli Hızı Nereden Geliyor?</h2>
        <p>
          HashMap'i <strong>devasa kütüphanenin sihirli katalogu</strong> gibi düşün. Normal kütüphanede kitap arasan rafa rafa bakarsın (O(n)). 
          Ama HashMap'te <strong>hash function</strong> dediğimiz sihirli formül, kitabın tam hangi rafta olduğunu direkt söylüyor (O(1))!
        </p>
        
        <h3>Gerçek Hayattan Benzetme: Telefon Rehberi</h3>
        <p>Eski zamanlarda telefon rehberi alfabetik sıralıydı. "Mehmet"i aradığın zaman M harfinden başlayıp sırayla bakardın.</p>
        
        <p>HashMap'te ise sihirli bir formül var:</p>
        <ul>
          <li><strong>"Mehmet"</strong> → Hash Function → <strong>Index 47</strong></li>
          <li>Direkt 47. kutuya gidip numarayı alıyorsun!</li>
        </ul>

        <h3>Neden Bu Kadar Hızlı?</h3>
        <ul>
          <li><strong>Array'in hızı:</strong> Index ile direkt erişim O(1)</li>
          <li><strong>Hash function'ın gücü:</strong> Key'den index'i hemen hesaplıyor</li>
          <li><strong>Smart organization:</strong> Veriler akıllıca dağıtılıyor</li>
        </ul>
      </section>

      <section className="section">
        <h2>HashMap'in Temel Bileşenleri</h2>

        <div className="topic-card">
          <h3>1. Hash Function (Sihirli Formül)</h3>
          <CodeBlock language="csharp">
{`// Basit hash function örneği
public int SimpleHash(string key, int tableSize)
{
    int hash = 0;
    
    foreach (char c in key)
    {
        hash += (int)c;  // Karakterlerin ASCII değerlerini topla
    }
    
    return hash % tableSize;  // Table boyutuna göre index
}

// Örnek:
// "Ali" → A(65) + l(108) + i(105) = 278
// 278 % 10 = 8 → Index 8'e koy`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Collision (Çarpışma) Problemi</h3>
          <p>İki farklı key aynı index'i verse ne olur?</p>
          <CodeBlock language="csharp">
{`"Ali"  → Hash → Index 8
"Bob"  → Hash → Index 8  ← Aynı index! COLLISION!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. Collision Resolution (Çarpışma Çözümü)</h3>
          <h4>Separate Chaining (Ayrı Zincirleme)</h4>
          <CodeBlock language="csharp">
{`// Her index'te LinkedList tutuyoruz
public class HashMapWithChaining
{
    private LinkedList<KeyValuePair<string, int>>[] buckets;
    private int size;
    
    public HashMapWithChaining(int capacity)
    {
        buckets = new LinkedList<KeyValuePair<string, int>>[capacity];
        for (int i = 0; i < capacity; i++)
        {
            buckets[i] = new LinkedList<KeyValuePair<string, int>>();
        }
        size = 0;
    }
    
    private int Hash(string key)
    {
        int hash = 0;
        foreach (char c in key)
        {
            hash = (hash * 31 + c) % buckets.Length;
        }
        return Math.Abs(hash);
    }
    
    // Put - O(1) average case
    public void Put(string key, int value)
    {
        int index = Hash(key);
        var bucket = buckets[index];
        
        // Aynı key var mı kontrol et
        foreach (var kvp in bucket)
        {
            if (kvp.Key == key)
            {
                // Değeri güncelle
                bucket.Remove(kvp);
                bucket.AddLast(new KeyValuePair<string, int>(key, value));
                return;
            }
        }
        
        // Yeni key, listeye ekle
        bucket.AddLast(new KeyValuePair<string, int>(key, value));
        size++;
    }
    
    // Get - O(1) average case
    public int Get(string key)
    {
        int index = Hash(key);
        var bucket = buckets[index];
        
        foreach (var kvp in bucket)
        {
            if (kvp.Key == key)
            {
                return kvp.Value;
            }
        }
        
        throw new KeyNotFoundException($"Key '{key}' bulunamadı!");
    }
    
    // Contains - O(1) average case
    public bool ContainsKey(string key)
    {
        try
        {
            Get(key);
            return true;
        }
        catch (KeyNotFoundException)
        {
            return false;
        }
    }
}`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Görsel HashMap İşleyişi</h2>
        
        <CodeBlock language="csharp">
{`Hash Table (size=5):

Index 0: [ ]
Index 1: ["Alice", 25] → ["Bob", 30]  ← Collision, chaining
Index 2: [ ]  
Index 3: ["Charlie", 35]
Index 4: ["David", 40]

Put("Eve", 28):
"Eve" → Hash → Index 1
Index 1: ["Alice", 25] → ["Bob", 30] → ["Eve", 28]

Get("Bob"):
"Bob" → Hash → Index 1 → LinkedList'te ara → 30 döndür`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>.NET'te Dictionary&lt;TKey, TValue&gt; Kullanımı</h2>
        
        <CodeBlock language="csharp">
{`// .NET'in hash table implementasyonu
Dictionary<string, int> ages = new Dictionary<string, int>();

// Ekleme - O(1) average
ages["Alice"] = 25;
ages["Bob"] = 30;
ages.Add("Charlie", 35);  // Alternative syntax

// Erişim - O(1) average  
int aliceAge = ages["Alice"];  // 25

// Güvenli erişim
if (ages.TryGetValue("David", out int davidAge))
{
    Console.WriteLine($"David'in yaşı: {davidAge}");
}
else
{
    Console.WriteLine("David bulunamadı");
}

// Kontrol - O(1) average
bool hasAlice = ages.ContainsKey("Alice");  // true
bool hasAge25 = ages.ContainsValue(25);     // true

// Silme - O(1) average
bool removed = ages.Remove("Bob");

// Iteration
foreach (var kvp in ages)
{
    Console.WriteLine($"{kvp.Key}: {kvp.Value}");
}

// Keys ve Values
var names = ages.Keys;    // Tüm key'ler
var allAges = ages.Values; // Tüm value'lar`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>HashMap'in Gerçek Hayat Uygulamaları</h2>

        <div className="topic-card">
          <h3>1. Frequency Counting (Frekans Sayma)</h3>
          <CodeBlock language="csharp">
{`public Dictionary<char, int> CountCharacters(string text)
{
    Dictionary<char, int> frequencies = new Dictionary<char, int>();
    
    foreach (char c in text.ToLower())
    {
        if (char.IsLetter(c))
        {
            frequencies[c] = frequencies.GetValueOrDefault(c, 0) + 1;
        }
    }
    
    return frequencies;
}

// Kullanım:
// CountCharacters("hello") → {'h':1, 'e':1, 'l':2, 'o':1}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Two Sum Problem - O(n) Çözüm</h3>
          <CodeBlock language="csharp">
{`public int[] TwoSum(int[] nums, int target)
{
    Dictionary<int, int> map = new Dictionary<int, int>();
    
    for (int i = 0; i < nums.Length; i++)
    {
        int complement = target - nums[i];
        
        if (map.ContainsKey(complement))
        {
            return new int[] { map[complement], i };
        }
        
        map[nums[i]] = i;  // Mevcut sayı ve index'i kaydet
    }
    
    return new int[0]; // Bulunamadı
}

// Örnek: TwoSum([2,7,11,15], 9) → [0,1] (2+7=9)`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. Group Anagrams</h3>
          <CodeBlock language="csharp">
{`public List<List<string>> GroupAnagrams(string[] strs)
{
    Dictionary<string, List<string>> groups = new Dictionary<string, List<string>>();
    
    foreach (string str in strs)
    {
        // Key olarak sorted string kullan
        char[] chars = str.ToCharArray();
        Array.Sort(chars);
        string key = new string(chars);
        
        if (!groups.ContainsKey(key))
        {
            groups[key] = new List<string>();
        }
        
        groups[key].Add(str);
    }
    
    return groups.Values.ToList();
}

// Örnek: ["eat","tea","tan","ate","nat","bat"]
// Sonuç: [["eat","tea","ate"], ["tan","nat"], ["bat"]]`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>HashMap Performans Analizi</h2>
        
        <div className="topic-card">
          <h3>⚡ Ortalama Durumlar (Average Case):</h3>
          <ul>
            <li><strong>Insert:</strong> O(1)</li>
            <li><strong>Delete:</strong> O(1)</li>
            <li><strong>Search:</strong> O(1)</li>
            <li><strong>Update:</strong> O(1)</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>🐌 En Kötü Durumlar (Worst Case):</h3>
          <ul>
            <li><strong>Tüm işlemler:</strong> O(n) - Tüm elemanlar aynı index'e düşerse</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>🎯 Load Factor (Doluluk Oranı):</h3>
          <CodeBlock language="csharp">
{`Load Factor = Eleman Sayısı / Table Boyutu

- Load Factor < 0.75: İyi performans
- Load Factor > 0.75: Collision artar, rehashing gerekir`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>HashMap vs Diğer Veri Yapıları</h2>
        
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Özellik</th>
              <th>HashMap</th>
              <th>Array</th>
              <th>LinkedList</th>
              <th>Binary Search Tree</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Search</strong></td>
              <td>O(1) avg ⚡</td>
              <td>O(n) 🐌</td>
              <td>O(n) 🐌</td>
              <td>O(log n) 📈</td>
            </tr>
            <tr>
              <td><strong>Insert</strong></td>
              <td>O(1) avg ⚡</td>
              <td>O(n) 🐌</td>
              <td>O(1) ⚡</td>
              <td>O(log n) 📈</td>
            </tr>
            <tr>
              <td><strong>Delete</strong></td>
              <td>O(1) avg ⚡</td>
              <td>O(n) 🐌</td>
              <td>O(n) 🐌</td>
              <td>O(log n) 📈</td>
            </tr>
            <tr>
              <td><strong>Order</strong></td>
              <td>No ❌</td>
              <td>Yes ✅</td>
              <td>Yes ✅</td>
              <td>Yes ✅</td>
            </tr>
            <tr>
              <td><strong>Memory</strong></td>
              <td>Extra 📊</td>
              <td>Minimal ⚡</td>
              <td>Extra 📊</td>
              <td>Extra 📊</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>Hash Function Kalitesi</h2>
        
        <h3>İyi Hash Function Özellikleri:</h3>
        <ol>
          <li><strong>Uniform distribution:</strong> Elemanları eşit dağıtır</li>
          <li><strong>Deterministic:</strong> Aynı input, aynı output</li>
          <li><strong>Fast computation:</strong> Hızlı hesaplanır</li>
          <li><strong>Avalanche effect:</strong> Küçük değişiklik, büyük fark</li>
        </ol>

        <CodeBlock language="csharp">
{`// .NET'in string hash function'ı (basitleştirilmiş)
public int GetHashCode(string str)
{
    int hash = 0;
    foreach (char c in str)
    {
        hash = hash * 31 + c;  // 31 prime sayısı, iyi dağıtım sağlar
    }
    return hash;
}`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>HashMap Ne Zaman Kullanılır?</h2>
        
        <div className="topic-card">
          <h3>✅ HashMap Kullan Eğer:</h3>
          <ul>
            <li><strong>Hızlı lookup</strong> gerekiyorsa</li>
            <li><strong>Key-value</strong> ilişkisi varsa</li>
            <li><strong>Frequency counting</strong> yapıyorsan</li>
            <li><strong>Caching</strong> gerekiyorsa</li>
            <li><strong>Set operations</strong> (union, intersection) yapıyorsan</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>❌ HashMap Kullanma Eğer:</h3>
          <ul>
            <li><strong>Ordered data</strong> gerekiyorsa (SortedDictionary kullan)</li>
            <li><strong>Memory critical</strong> durumda (Array daha az yer kaplar)</li>
            <li><strong>Small datasets</strong> (Array daha hızlı olabilir)</li>
            <li><strong>Range queries</strong> yapacaksan (Tree kullan)</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Önemli HashMap Varyantları</h2>

        <div className="topic-card">
          <h3>1. HashSet&lt;T&gt; - Sadece Key'ler</h3>
          <CodeBlock language="csharp">
{`HashSet<int> numbers = new HashSet<int>();
numbers.Add(1);
numbers.Add(2);
bool contains = numbers.Contains(1); // O(1)`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. SortedDictionary&lt;K,V&gt; - Sıralı</h3>
          <CodeBlock language="csharp">
{`SortedDictionary<string, int> sorted = new SortedDictionary<string, int>();
// İçeride Red-Black Tree kullanır, O(log n) operations`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. ConcurrentDictionary&lt;K,V&gt; - Thread-Safe</h3>
          <CodeBlock language="csharp">
{`ConcurrentDictionary<string, int> concurrent = new ConcurrentDictionary<string, int>();
// Multi-threading'de güvenli`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <p><strong>HashMap, modern programlamanın kalbi! Neredeyse her projede kullanacağın, çok güçlü bir veri yapısı. Hız konusunda rakipsiz!</strong></p>
      </section>

      <div className="navigation-links">
        <Link to="/queue" className="nav-button">← Queue</Link>
        <Link to="/hafta1-quiz" className="nav-button">Quiz →</Link>
      </div>
    </div>
  );
}

export default HashMap;