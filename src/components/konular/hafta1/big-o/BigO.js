import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import CodeBlock from '../../../ui/CodeBlock';

function BigO() {
  return (
    <div className="app-container">
      <SEO
        title="Big-O Notation - Algoritma Performansı | İki Ay"
        description="Big-O notation ile algoritma karmaşıklığını öğren. Time complexity, space complexity ve performans analizi."
        canonical="https://iki-ay.web.app/big-o"
        og={{ url: 'https://iki-ay.web.app/big-o' }}
      />
      
      <div className="content-header">
        <h1>Big-O Notation - Algoritma Performansı</h1>
        <Link to="/hafta1" className="back-link">← 1. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>Big-O Nedir ve Neden Önemli?</h2>
        <p>
          Big-O notation, algoritmaların <strong>ne kadar hızlı</strong> çalıştığını ölçmek için kullanılan bir dil gibi düşünebilirsin. 
          Tıpki araba hızını km/saat ile ölçtüğümüz gibi, algoritma hızını da Big-O ile ölçeriz.
        </p>
        
        <h3>Gerçek Hayattan Örnek</h3>
        <p>Diyelim ki telefonunda 1000 kişilik rehberin var:</p>
        <ul>
          <li><strong>Sırayla arama:</strong> A'dan Z'ye tek tek bakarsın → En kötü 1000 işlem</li>
          <li><strong>Hızlı arama:</strong> Ortadan başlayıp yarıya böl böl ararsın → En kötü 10 işlem</li>
        </ul>
        <p>İşte Big-O bu farkı gösterir! Birinci yöntem O(n), ikincisi O(log n).</p>
        
        <h3>Neden Önemli?</h3>
        <ol>
          <li><strong>Büyük veri:</strong> 1000 eleman için fark az, 1 milyon eleman için çok büyük</li>
          <li><strong>Doğru algoritma seçimi:</strong> Hangi durumda hangi yöntemi kullanacağını bilirsin</li>
          <li><strong>Performans tahmini:</strong> Kodun ne kadar süreceğini önceden tahmin edebilirsin</li>
        </ol>
      </section>

      <section className="section">
        <h2>Temel Big-O Türleri (Yavaştan Hızlıya)</h2>

        <div className="topic-card">
          <h3>1. O(1) - Sabit Zaman ⚡</h3>
          <p><strong>Ne demek:</strong> Veri ne kadar büyük olursa olsun, hep aynı sürede çalışır.</p>
          <p><strong>Gerçek hayat örneği:</strong> TV kumandası ile kanal değiştirmek. İster 50 kanal ister 500 kanal olsun, tuşa basınca hep aynı sürede değişir.</p>
          <CodeBlock language="csharp">
            {`// Array'de index ile eleman alma - Hep aynı hızda!
public int GetElement(int[] array, int index)
{
    return array[index]; // Index 0 da olsa 1000 de olsa aynı hız
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. O(log n) - Logaritmik Zaman �</h3>
          <p><strong>Ne demek:</strong> Veri 2 katına çıkınca sadece 1 adım daha atarsın.</p>
          <p><strong>Gerçek hayat örneği:</strong> Sözlükte kelime aramak. 1000 sayfalık sözlükte kelime ararken ortadan başlar, yanlış yarıyı atarsın. Böyle böyle çok hızlı bulursun.</p>
          <CodeBlock language="csharp">
            {`// Binary Search - Her adımda yarıya böl
public int BinarySearch(int[] sortedArray, int target)
{
    int left = 0, right = sortedArray.Length - 1;
    
    while (left <= right)
    {
        int mid = (left + right) / 2;
        if (sortedArray[mid] == target) return mid;
        
        if (sortedArray[mid] < target)
            left = mid + 1;  // Sol yarıyı at
        else
            right = mid - 1; // Sağ yarıyı at
    }
    return -1;
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. O(n) - Doğrusal Zaman 📈</h3>
          <p><strong>Ne demek:</strong> Veri 2 katına çıkınca süre de 2 katına çıkar.</p>
          <p><strong>Gerçek hayat örneği:</strong> Kitap okumak. 100 sayfalık kitap 1 saat, 200 sayfalık kitap 2 saat.</p>
          <CodeBlock language="csharp">
            {`// Linear Search - Tek tek hepsine bak
public int LinearSearch(int[] array, int target)
{
    for (int i = 0; i < array.Length; i++)
    {
        if (array[i] == target) return i;
    }
    return -1; // En kötü durumda tüm elemanları gezer
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>4. O(n²) - Karesel Zaman 🐌</h3>
          <p><strong>Ne demek:</strong> Veri 2 katına çıkınca süre 4 katına çıkar!</p>
          <p><strong>Gerçek hayat örneği:</strong> Sınıftaki herkesin herkesle tokalaşması. 10 kişi varsa 100 tokalaşma, 20 kişi varsa 400 tokalaşma.</p>
          <CodeBlock language="csharp">
            {`// Bubble Sort - İç içe döngü
public void BubbleSort(int[] array)
{
    for (int i = 0; i < array.Length; i++)        // Dış döngü
    {
        for (int j = 0; j < array.Length - 1; j++) // İç döngü
        {
            if (array[j] > array[j + 1])
            {
                // Swap
                int temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Pratik Örnekler ve Karşılaştırma</h2>

        <div className="topic-card">
          <h3>Problem: Array'de en büyük sayıyı bul</h3>
          <CodeBlock language="csharp">
            {`// Tek döngü ile - O(n)
public int FindMax(int[] array)
{
    int max = array[0];
    for (int i = 1; i < array.Length; i++) // Her elemanı bir kez kontrol et
    {
        if (array[i] > max)
            max = array[i];
    }
    return max;
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>Problem: İki sayının toplamı target'a eşit mi?</h3>
          <CodeBlock language="csharp">
            {`// Yavaş yöntem - O(n²)
public bool HasPairSumSlow(int[] array, int target)
{
    for (int i = 0; i < array.Length; i++)
    {
        for (int j = i + 1; j < array.Length; j++) // Her ikiliye bak
        {
            if (array[i] + array[j] == target)
                return true;
        }
    }
    return false;
}

// Hızlı yöntem - O(n)
public bool HasPairSumFast(int[] array, int target)
{
    HashSet<int> seen = new HashSet<int>();
    
    foreach (int num in array)
    {
        int complement = target - num;
        if (seen.Contains(complement)) // O(1) arama
            return true;
        seen.Add(num);
    }
    return false;
}`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Hangi Durumda Hangi Hız Beklenir?</h2>
        <ul>
          <li><strong>O(1):</strong> Hashtable'da arama, array'de index ile erişim</li>
          <li><strong>O(log n):</strong> Binary search, balanced tree'lerde arama</li>
          <li><strong>O(n):</strong> Linear search, array'i bir kez gezmek</li>
          <li><strong>O(n log n):</strong> İyi sıralama algoritmaları (Merge Sort, Quick Sort)</li>
          <li><strong>O(n²):</strong> Basit sıralama algoritmaları (Bubble Sort, Selection Sort)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Önemli Püf Noktaları</h2>
        <ol>
          <li><strong>Büyük veri için önemli:</strong> 10 eleman varsa fark yok, 1 milyon varsa çok fark var</li>
          <li><strong>Sabitler ihmal edilir:</strong> O(2n) = O(n), O(n + 100) = O(n)</li>
          <li><strong>En kötü durum:</strong> Big-O genellikle worst-case'i gösterir</li>
          <li><strong>En büyük terim:</strong> O(n² + n) = O(n²), çünkü n² çok daha büyük</li>
        </ol>
      </section>

      <section className="section">
        <h2>Algoritma Seçerken Kendine Sor:</h2>
        <ul>
          <li>Verimin ne kadar büyük olacak?</li>
          <li>Kaç kez bu işlemi yapacaksın?</li>
          <li>Hafıza da önemli mi yoksa sadece hız mı?</li>
        </ul>
        <p>Bu sorulara göre doğru algoritma karmaşıklığını seçebilirsin!</p>
      </section>

      <div className="navigation-links">
        <Link to="/big-o" className="nav-button">← Big-O</Link>
        <Link to="/linkedlist" className="nav-button">LinkedList →</Link>
      </div>
    </div>
  );
}

export default BigO;