import React from 'react';
import Notes from '../../../notes/Notes';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import CodeBlock from '../../../ui/CodeBlock';

function Array() {
  return (
    <div className="app-container">
      <SEO
        title="Arrays (Diziler) - Programlamanın Temeli | İki Ay"
        description="Array veri yapısını öğren. Fixed size arrays, dynamic arrays, two pointers, sliding window teknikleri ve pratik örnekler."
        canonical="https://iki-ay.web.app/array"
        og={{ url: 'https://iki-ay.web.app/array' }}
      />
      
      <div className="content-header">
        <h1>Arrays (Diziler) - Programlamanın Temeli</h1>
        <Link to="/hafta1" className="back-link">← 1. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>Array Nedir? Neden Bu Kadar Önemli?</h2>
        <p>
          Array, <strong>aynı tipte</strong> verileri <strong>yan yana</strong> saklayan kutular dizisi gibi düşün. 
          Tıpki apartmandaki daireler gibi: her dairenin bir numarası (index) var ve hepsine çok hızlı ulaşabiliyorsun.
        </p>
        
        <h3>Gerçek Hayattan Benzetme</h3>
        <p>Düşün ki elinde 100 sayfalık bir not defteri var:</p>
        <ul>
          <li><strong>Sayfa numarası = Index:</strong> 5. sayfaya gitmek istiyorsan direkt açarsın</li>
          <li><strong>Her sayfa aynı boyutta = Aynı tip veri:</strong> Uniform yapı</li>
          <li><strong>Sayfalar ardışık = Bellek düzeni:</strong> Bir sonraki sayfa hep yanında</li>
        </ul>
        <p>İşte array de tam böyle çalışır! Bu yüzden çok hızlı ve efficient.</p>
      </section>

      <section className="section">
        <h2>.NET'te Array Çeşitleri</h2>

        <div className="topic-card">
          <h3>1. Klasik Array (Fixed Size)</h3>
          <CodeBlock language="csharp">
{`// Farklı tanımlama yolları
int[] numbers = new int[5];              // 5 elemanlı boş array
int[] scores = {85, 92, 78, 96, 88};     // Değerlerle birlikte
string[] names = new string[3];          // 3 elemanlı string array`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Dinamik Array (List&lt;T&gt;)</h3>
          <CodeBlock language="csharp">
{`List<int> dynamicNumbers = new List<int>();     // Boyut otomatik büyür
dynamicNumbers.Add(10);  // İstediğin kadar ekle
dynamicNumbers.Add(20);`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Array'in Süper Güçleri ve Zayıflıkları</h2>

        <div className="topic-card">
          <h3>🚀 Süper Güçleri:</h3>
          <ol>
            <li><strong>Işık hızında erişim:</strong> Index biliyorsan → O(1)</li>
            <li><strong>Bellek dostu:</strong> Minimum yer kaplar</li>
            <li><strong>Cache friendly:</strong> Veriler yan yana olduğu için CPU çok seviyor</li>
            <li><strong>Basit:</strong> Öğrenmesi ve kullanması kolay</li>
          </ol>
        </div>

        <div className="topic-card">
          <h3>😕 Zayıflıkları:</h3>
          <ol>
            <li><strong>Sabit boyut:</strong> Klasik array'lerde boyut değiştiremezsin</li>
            <li><strong>Ortaya ekleme pahalı:</strong> Tüm elemanları kaydırman gerek</li>
            <li><strong>Silme pahalı:</strong> Yine kaydırma gerekiyor</li>
            <li><strong>Tek tip:</strong> Sadece aynı tipte veri</li>
          </ol>
        </div>
      </section>

      <section className="section">
        <h2>Temel İşlemler ve Hızları</h2>

        <div className="topic-card">
          <h3>1. Erişim - O(1)</h3>
          <CodeBlock language="csharp">
{`int[] numbers = {10, 20, 30, 40, 50};
int value = numbers[2]; // 30'u alır - Işık hızında!

// Neden bu kadar hızlı?
// Array başlangıç adresi + (index × eleman boyutu) = Tam adres`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Güncelleme - O(1)</h3>
          <CodeBlock language="csharp">
{`numbers[2] = 99; // 30 yerine 99 yazar - Yine çok hızlı!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. Arama - O(n)</h3>
          <CodeBlock language="csharp">
{`// Linear Search - Teker teker bakman gerekiyor
public int FindElement(int[] array, int target)
{
    for (int i = 0; i < array.Length; i++)
    {
        if (array[i] == target)
            return i; // Bulundu!
    }
    return -1; // Bulunamadı
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>4. Sıralı Array'de Arama - O(log n) 🔍</h3>
          <CodeBlock language="csharp">
{`// Binary Search - Çok daha hızlı!
public int BinarySearch(int[] sortedArray, int target)
{
    int left = 0, right = sortedArray.Length - 1;
    
    while (left <= right)
    {
        int mid = (left + right) / 2;
        
        if (sortedArray[mid] == target)
            return mid;
        else if (sortedArray[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;
}`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Dinamik Array (List&lt;T&gt;) - Büyüyen Kutular</h2>
        <p>List&lt;T&gt;, ihtiyaç oldukça büyüyen akıllı array gibi düşün:</p>
        
        <CodeBlock language="csharp">
{`List<int> smartList = new List<int>();

// Ekleme - Genelde O(1), bazen O(n)
smartList.Add(10);  // İlk eleman
smartList.Add(20);  // İkinci eleman
smartList.Add(30);  // Üçüncü eleman

// Erişim - O(1)
int first = smartList[0];

// Arama - O(n)
bool exists = smartList.Contains(20);

// Silme - O(n) çünkü kaydırma gerekiyor
smartList.Remove(20);`}
          </CodeBlock>

        <h3>List&lt;T&gt; Kapasitesi Nasıl Çalışır?</h3>
        <CodeBlock language="csharp">
{`List<int> list = new List<int>();
Console.WriteLine($"Başlangıç kapasitesi: {list.Capacity}"); // 0

for (int i = 0; i < 10; i++)
{
    list.Add(i);
    Console.WriteLine($"Eleman: {i}, Kapasite: {list.Capacity}");
}

// Çıktı genelde: 0 → 4 → 8 → 16
// Dolunca 2 katına çıkar - akıllıca!`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>Önemli Array Teknikleri</h2>

        <div className="topic-card">
          <h3>1. Two Pointers (İki İşaretçi)</h3>
          <p>İki uctan orta doğru ilerlemek:</p>
          <CodeBlock language="csharp">
{`// Palindrome kontrolü
public bool IsPalindrome(string s)
{
    int left = 0;
    int right = s.Length - 1;
    
    while (left < right)
    {
        if (s[left] != s[right])
            return false;
        left++;
        right--;
    }
    return true;
}

// Array'i ters çevirme
public void ReverseArray(int[] array)
{
    int left = 0;
    int right = array.Length - 1;
    
    while (left < right)
    {
        // Swap
        int temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        
        left++;
        right--;
    }
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Sliding Window (Kayan Pencere)</h3>
          <p>Sabit boyutlu pencereyi kaydırarak optimizasyon:</p>
          <CodeBlock language="csharp">
{`// K elemanlı en büyük toplam
public int MaxSum(int[] array, int k)
{
    // İlk pencereyi hesapla
    int windowSum = 0;
    for (int i = 0; i < k; i++)
        windowSum += array[i];
    
    int maxSum = windowSum;
    
    // Pencereyi kaydır: eski çıkar, yeni girer
    for (int i = k; i < array.Length; i++)
    {
        windowSum = windowSum - array[i - k] + array[i];
        maxSum = Math.Max(maxSum, windowSum);
    }
    
    return maxSum;
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. Prefix Sum (Ön Toplam)</h3>
          <p>Aralık toplamlarını hızlı hesaplama:</p>
          <CodeBlock language="csharp">
{`public class PrefixSum
{
    private int[] prefixSum;
    
    public PrefixSum(int[] array)
    {
        prefixSum = new int[array.Length + 1];
        
        for (int i = 0; i < array.Length; i++)
        {
            prefixSum[i + 1] = prefixSum[i] + array[i];
        }
    }
    
    // Herhangi bir aralığın toplamını O(1)'de hesapla
    public int RangeSum(int left, int right)
    {
        return prefixSum[right + 1] - prefixSum[left];
    }
}`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Array Ne Zaman Kullanılır?</h2>
        
        <div className="topic-card">
          <h3>✅ Array Kullan Eğer:</h3>
          <ul>
            <li><strong>Hızlı erişim</strong> gerekiyorsa (index ile)</li>
            <li><strong>Bellek tasarrufu</strong> önemliyse</li>
            <li><strong>Sabit boyut</strong> yeterliyse</li>
            <li><strong>Cache performance</strong> kritikse</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>❌ Array Kullanma Eğer:</h3>
          <ul>
            <li><strong>Sık ekleme/silme</strong> yapacaksan (ortadan)</li>
            <li><strong>Boyut çok değişkensse</strong></li>
            <li><strong>Farklı tipte</strong> veriler saklayacaksan</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Sık Karşılaşılan Array Problemleri</h2>
        <ol>
          <li><strong>Two Sum:</strong> İki sayının toplamı target'a eşit mi?</li>
          <li><strong>Maximum Subarray:</strong> En büyük alt dizi toplamı</li>
          <li><strong>Rotate Array:</strong> Array'i k pozisyon döndür</li>
          <li><strong>Remove Duplicates:</strong> Tekrarları kaldır</li>
          <li><strong>Merge Sorted Arrays:</strong> İki sıralı array'i birleştir</li>
        </ol>
        <p>Array, programlamanın kalbidir! İyi anladığında diğer veri yapıları çok daha kolay gelecek.</p>
      </section>

      <Notes topicPath="/array" topicTitle="Arrays (Diziler) - Programlamanın Temeli" />

      <div className="navigation-links">
        <Link to="/big-o" className="nav-button">← Big-O</Link>
        <Link to="/linkedlist" className="nav-button">LinkedList →</Link>
      </div>
    </div>
  );
}

export default Array;