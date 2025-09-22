import React from 'react';
import Notes from '../../../notes/Notes';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import CodeBlock from '../../../ui/CodeBlock';

function Sorting() {
  return (
    <div className="app-container">
      <SEO
        title="Sorting Algorithms - MergeSort & QuickSort | İki Ay"
        description="MergeSort ve QuickSort algoritmalarını öğren. Divide & Conquer stratejisi, pivot selection, performans karşılaştırmaları."
        canonical="https://iki-ay.web.app/sorting"
        og={{ url: 'https://iki-ay.web.app/sorting' }}
      />

      <div className="content-header">
        <h1>Sorting Algorithms - MergeSort & QuickSort</h1>
        <Link to="/hafta2" className="back-link">← 2. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>Neden Sıralama Bu Kadar Önemli?</h2>
        <p>
          Sıralama, computer science'ın <strong>temel taşlarından</strong> biri. Düşün ki kitaplığındaki binlerce kitabı <strong>alfabetik sıraya</strong> koyuyorsun - aradığın kitabı çok daha hızlı bulursun!
        </p>

        <h3>Gerçek Hayattan Örnekler:</h3>
        <ul>
          <li><strong>Google Search:</strong> Milyarlarca web sayfası relevance'a göre sıralı</li>
          <li><strong>Netflix:</strong> Filmler beğeni puanına göre sıralı</li>
          <li><strong>E-commerce:</strong> Ürünler fiyata/popülariteye göre sıralı</li>
          <li><strong>Database:</strong> Index'ler sıralı tutuluyor</li>
        </ul>
      </section>

      <section className="section">
        <h2>Divide & Conquer Stratejisi</h2>
        <p><strong>MergeSort</strong> ve <strong>QuickSort</strong> ikisi de <strong>Divide & Conquer</strong> tekniğini kullanır:</p>

        <div className="topic-card">
          <h3>Divide & Conquer Mantığı:</h3>
          <ol>
            <li><strong>Divide:</strong> Problemi daha küçük parçalara böl</li>
            <li><strong>Conquer:</strong> Küçük parçaları çöz</li>
            <li><strong>Combine:</strong> Sonuçları birleştir</li>
          </ol>
        </div>

        <div className="topic-card">
          <h3>Gerçek Hayat Örneği: Kargo Şirketi</h3>
          <p>Düşün ki 1000 paketi sıralaman gerek:</p>
          <ul>
            <li><strong>Naif yöntem:</strong> Hepsini tek seferde sırala → Çok zor!</li>
            <li><strong>Akıllı yöntem:</strong> 10 gruba böl (100'er paket), her grubu sırala, sonra birleştir → Kolay!</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>MergeSort - "Böl ve Birleştir"</h2>
        <p>MergeSort mantığı: Array'i <strong>yarıya böl</strong>, her yarıyı <strong>recursive sırala</strong>, sonra <strong>sıralı birleştir</strong>.</p>

        <div className="topic-card">
          <h3>MergeSort Görsel Örnek:</h3>
          <CodeBlock language="csharp">
{`Örnek: [38, 27, 43, 3, 9, 82, 10]

1. Böl:     [38, 27, 43]    [3, 9, 82, 10]
2. Böl:   [38] [27, 43]   [3, 9] [82, 10]
3. Böl:   [38] [27][43]   [3][9] [82][10]
4. Birleştir: [27, 43]     [3, 9] [10, 82]
5. Birleştir: [27, 38, 43] [3, 9, 10, 82]
6. Birleştir: [3, 9, 10, 27, 38, 43, 82]`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>MergeSort Implementation</h3>
            <CodeBlock language="csharp">
{`public class MergeSort
{
    // Ana MergeSort fonksiyonu
    public void Sort(int[] array)
    {
        if (array.Length <= 1) return;
        
        MergeSortHelper(array, 0, array.Length - 1);
    }
    
    // Recursive helper
    private void MergeSortHelper(int[] array, int left, int right)
    {
        if (left >= right) return; // Base case: 1 eleman
        
        int mid = left + (right - left) / 2; // Overflow'u önlemek için
        
        // Divide: Sol ve sağ yarıları sırala
        MergeSortHelper(array, left, mid);      // Sol yarı
        MergeSortHelper(array, mid + 1, right); // Sağ yarı
        
        // Conquer: Sıralı yarıları birleştir
        Merge(array, left, mid, right);
    }
    
    // İki sıralı yarıyı birleştir
    private void Merge(int[] array, int left, int mid, int right)
    {
        // Temporary arrays oluştur
        int leftSize = mid - left + 1;
        int rightSize = right - mid;
        
        int[] leftArray = new int[leftSize];
        int[] rightArray = new int[rightSize];
        
        // Data'yı temporary arrays'e kopyala
        Array.Copy(array, left, leftArray, 0, leftSize);
        Array.Copy(array, mid + 1, rightArray, 0, rightSize);
        
        // İki sıralı array'i birleştir
        int i = 0, j = 0, k = left;
        
        while (i < leftSize && j < rightSize)
        {
            if (leftArray[i] <= rightArray[j])
            {
                array[k] = leftArray[i];
                i++;
            }
            else
            {
                array[k] = rightArray[j];
                j++;
            }
            k++;
        }
        
        // Kalan elemanları ekle
        while (i < leftSize)
        {
            array[k] = leftArray[i];
            i++;
            k++;
        }
        
        while (j < rightSize)
        {
            array[k] = rightArray[j];
            j++;
            k++;
        }
    }
}`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>MergeSort'un Özellikleri</h3>

              <h4>✅ Avantajları:</h4>
              <ul>
                <li><strong>Stable:</strong> Eşit elemanların sırası korunur</li>
                <li><strong>Guaranteed O(n log n):</strong> Worst case bile hızlı</li>
                <li><strong>Predictable:</strong> Her zaman aynı performance</li>
                <li><strong>Good for large datasets:</strong> Büyük veri setlerinde güvenilir</li>
              </ul>

              <h4>❌ Dezavantajları:</h4>
              <ul>
                <li><strong>Extra memory:</strong> O(n) ekstra alan gerekir</li>
                <li><strong>Not in-place:</strong> Original array'in yanında temporary arrays</li>
                <li><strong>Overhead:</strong> Küçük arrays için gereksiz karmaşık</li>
              </ul>
            </div>
      </section>

      <section className="section">
        <h2>QuickSort - "Pivot ve Böl"</h2>
        <p>QuickSort mantığı: Bir <strong>pivot</strong> seç, pivot'tan küçükleri sol'a, büyükleri sağ'a koy, sonra <strong>recursive</strong> devam et.</p>

        <div className="topic-card">
          <h3>QuickSort Görsel Örnek:</h3>
          <CodeBlock language="csharp">
{`Örnek: [10, 7, 8, 9, 1, 5]

1. Pivot = 5 seç
2. Partition: [1] [5] [10, 7, 8, 9]  (5'ten küçük sol, büyük sağ)
3. Sol: [1] → Sorted
4. Sağ: [10, 7, 8, 9] → Pivot = 9 → [7, 8] [9] [10]
5. Continue recursively...`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>QuickSort Implementation</h3>
            <CodeBlock language="csharp">
{`public class QuickSort
{
    // Ana QuickSort fonksiyonu
    public void Sort(int[] array)
    {
        if (array.Length <= 1) return;
        
        QuickSortHelper(array, 0, array.Length - 1);
    }
    
    // Recursive helper
    private void QuickSortHelper(int[] array, int low, int high)
    {
        if (low < high)
        {
            // Partition: pivot'ı doğru yerine koy
            int pivotIndex = Partition(array, low, high);
            
            // Divide: Pivot'ın sol ve sağını recursive sırala
            QuickSortHelper(array, low, pivotIndex - 1);  // Sol alt array
            QuickSortHelper(array, pivotIndex + 1, high); // Sağ alt array
        }
    }
    
    // Lomuto Partition Scheme
    private int Partition(int[] array, int low, int high)
    {
        int pivot = array[high]; // Son elemanı pivot olarak seç
        int i = low - 1;         // Küçük elemanların index'i
        
        for (int j = low; j < high; j++)
        {
            // Pivot'tan küçük veya eşitse
            if (array[j] <= pivot)
            {
                i++;
                Swap(array, i, j);
            }
        }
        
        // Pivot'ı doğru pozisyona koy
        Swap(array, i + 1, high);
        return i + 1; // Pivot'ın final pozisyonu
    }
    
    // Hoare Partition Scheme (Alternative)
    private int HoarePartition(int[] array, int low, int high)
    {
        int pivot = array[low]; // İlk elemanı pivot seç
        int i = low - 1;
        int j = high + 1;
        
        while (true)
        {
            // Sol'dan pivot'tan büyük bul
            do { i++; } while (array[i] < pivot);
            
            // Sağ'dan pivot'tan küçük bul  
            do { j--; } while (array[j] > pivot);
            
            if (i >= j) return j;
            
            Swap(array, i, j);
        }
    }
    
    private void Swap(int[] array, int i, int j)
    {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>QuickSort'un Özellikleri</h3>

              <h4>✅ Avantajları:</h4>
              <ul>
                <li><strong>In-place:</strong> O(1) extra memory (recursion stack hariç)</li>
                <li><strong>Fast average case:</strong> O(n log n) average performance</li>
                <li><strong>Cache efficient:</strong> Locality of reference iyi</li>
                <li><strong>Simple implementation:</strong> Anlaşılması kolay</li>
              </ul>

              <h4>❌ Dezavantajları:</h4>
              <ul>
                <li><strong>Worst case O(n²):</strong> Pivot selection kötüyse</li>
                <li><strong>Not stable:</strong> Eşit elemanların sırası değişebilir</li>
                <li><strong>Recursive depth:</strong> Deep recursion stack overflow'a yol açabilir</li>
              </ul>
            </div>
      </section>

      <section className="section">
        <h2>Pivot Selection Strategies</h2>
        <p>Pivot seçimi QuickSort'un <strong>performansını kritik etkiler</strong>:</p>

        <div className="topic-card">
          <h3>1. First/Last Element</h3>
          <CodeBlock language="csharp">
{`int pivot = array[high]; // Simple ama risky`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>2. Random Pivot</h3>
            <CodeBlock language="csharp">
{`private int RandomPivot(int[] array, int low, int high)
{
    Random rand = new Random();
    int randomIndex = rand.Next(low, high + 1);
    Swap(array, randomIndex, high);
    return array[high];
}`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>3. Median-of-Three</h3>
              <CodeBlock language="csharp">
{`private int MedianOfThree(int[] array, int low, int high)
{
    int mid = low + (high - low) / 2;
    
    // Sort low, mid, high
    if (array[mid] < array[low])
        Swap(array, low, mid);
    if (array[high] < array[low])
        Swap(array, low, high);
    if (array[high] < array[mid])
        Swap(array, mid, high);
    
    // Median şimdi mid'de
    Swap(array, mid, high);
    return array[high];
}`}
                </CodeBlock>
              </div>
      </section>

      <section className="section">
        <h2>MergeSort vs QuickSort Karşılaştırması</h2>

        <div className="topic-card">
          <h3>Performans Karşılaştırması</h3>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Özellik</th>
                <th>MergeSort</th>
                <th>QuickSort</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Best Case</strong></td>
                <td>O(n log n)</td>
                <td>O(n log n)</td>
              </tr>
              <tr>
                <td><strong>Average Case</strong></td>
                <td>O(n log n)</td>
                <td>O(n log n)</td>
              </tr>
              <tr>
                <td><strong>Worst Case</strong></td>
                <td>O(n log n)</td>
                <td><strong>O(n²)</strong></td>
              </tr>
              <tr>
                <td><strong>Space Complexity</strong></td>
                <td><strong>O(n)</strong></td>
                <td>O(log n)</td>
              </tr>
              <tr>
                <td><strong>Stability</strong></td>
                <td><strong>Stable</strong></td>
                <td>Not stable</td>
              </tr>
              <tr>
                <td><strong>In-place</strong></td>
                <td>No</td>
                <td><strong>Yes</strong></td>
              </tr>
              <tr>
                <td><strong>Use Case</strong></td>
                <td>Guaranteed performance</td>
                <td>General purpose</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>Hibrit Sıralama: IntroSort</h2>
        <p>Gerçek dünyada <strong>hibrit</strong> yaklaşımlar kullanılır:</p>

        <div className="topic-card">
          <h3>IntroSort Implementation</h3>
          <CodeBlock language="csharp">
{`public class IntroSort
{
    // .NET'in Array.Sort() benzeri hibrit yaklaşım
    public void Sort(int[] array)
    {
        IntroSortHelper(array, 0, array.Length - 1, 2 * FloorLog2(array.Length));
    }
    
    private void IntroSortHelper(int[] array, int low, int high, int depthLimit)
    {
        int size = high - low + 1;
        
        if (size <= 16)
        {
            // Küçük arrays için InsertionSort
            InsertionSort(array, low, high);
        }
        else if (depthLimit == 0)
        {
            // Çok derin recursion için HeapSort
            HeapSort(array, low, high);
        }
        else
        {
            // Normal durumda QuickSort
            int pivot = Partition(array, low, high);
            IntroSortHelper(array, low, pivot - 1, depthLimit - 1);
            IntroSortHelper(array, pivot + 1, high, depthLimit - 1);
        }
    }
    
    private void InsertionSort(int[] array, int low, int high)
    {
        // Small arrays için efficient
        for (int i = low + 1; i <= high; i++)
        {
            int key = array[i];
            int j = i - 1;
            
            while (j >= low && array[j] > key)
            {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
    }
    
    private int FloorLog2(int n)
    {
        return (int)Math.Floor(Math.Log2(n));
    }
}`}
            </CodeBlock>
          </div>
      </section>

      <section className="section">
        <h2>Pratik Kullanım Örnekleri</h2>

        <div className="topic-card">
          <h3>1. Custom Sorting</h3>
          <CodeBlock language="csharp">
{`public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}

// Custom comparison ile sorting
public void SortPeople(Person[] people)
{
    // Age'e göre sırala, eşitse Name'e göre
    Array.Sort(people, (p1, p2) =>
    {
        int ageComparison = p1.Age.CompareTo(p2.Age);
        return ageComparison != 0 ? ageComparison : p1.Name.CompareTo(p2.Name);
    });
}`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>2. Kth Largest Element (QuickSelect)</h3>
            <CodeBlock language="csharp">
{`// QuickSort'un modified versiyonu - average O(n)
public int FindKthLargest(int[] array, int k)
{
    return QuickSelect(array, 0, array.Length - 1, array.Length - k);
}

private int QuickSelect(int[] array, int low, int high, int targetIndex)
{
    if (low == high) return array[low];
    
    int pivotIndex = Partition(array, low, high);
    
    if (pivotIndex == targetIndex)
        return array[pivotIndex];
    else if (targetIndex < pivotIndex)
        return QuickSelect(array, low, pivotIndex - 1, targetIndex);
    else
        return QuickSelect(array, pivotIndex + 1, high, targetIndex);
}`}
              </CodeBlock>
            </div>
      </section>

      <section className="section">
        <h2>Sorting Algorithm Seçimi</h2>

        <div className="topic-card">
          <h3>🎯 Hangi Durumda Hangisini Kullan:</h3>

          <h4>MergeSort kullan eğer:</h4>
          <ul>
            <li>Stability önemliyse</li>
            <li>Guaranteed O(n log n) performance gerekiyorsa</li>
            <li>External sorting yapıyorsan (büyük dosyalar)</li>
            <li>Linked list sorting yapıyorsan</li>
          </ul>

          <h4>QuickSort kullan eğer:</h4>
          <ul>
            <li>Memory sınırlıysa</li>
            <li>Average case performance yeterliyse</li>
            <li>In-place sorting gerekiyorsa</li>
            <li>General purpose sorting yapıyorsan</li>
          </ul>

          <h4>Hibrit approach kullan eğer:</h4>
          <ul>
            <li>Production code yazıyorsan</li>
            <li>En iyi overall performance istiyorsan</li>
            <li>Different input sizes handle edeceksen</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <p><strong>Next: Advanced BST Operations - Red-Black Trees, AVL Trees! 🌳</strong></p>
      </section>

      <Notes topicPath="/sorting" topicTitle="Sorting Algorithms - MergeSort & QuickSort" />

      <div className="navigation-links">
        <Link to="/bfs" className="nav-button">← BFS</Link>
        <Link to="/bst-advanced" className="nav-button">BST Advanced →</Link>
      </div>
    </div>
  );
}

export default Sorting;