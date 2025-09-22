import React from 'react';
import Notes from '../../../notes/Notes';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import CodeBlock from '../../../ui/CodeBlock';

function BSTAdvanced() {
  return (
    <div className="app-container">
      <SEO
        title="Binary Search - Advanced Applications | İki Ay"
        description="Binary search'in gelişmiş uygulamaları. Lower/upper bound, rotated arrays, answer space search, 2D matrix search."
        canonical="https://iki-ay.web.app/bst-advanced"
        og={{ url: 'https://iki-ay.web.app/bst-advanced' }}
      />

      <div className="content-header">
        <h1>Binary Search - Advanced Applications</h1>
        <Link to="/hafta2" className="back-link">← 2. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>Binary Search'in Gücü</h2>
        <p>
          Binary Search sadece <strong>sorted array'de arama</strong> değil! Aslında çok daha güçlü bir <strong>problem solving technique</strong>. Temel prensibi: <strong>"Search space'i yarıya böl"</strong>.
        </p>

        <h3>Gerçek Hayattan Benzetme: Sayı Tahmin Oyunu</h3>
        <p>Düşün ki 1-100 arası sayı tuttum:</p>
        <ul>
          <li><strong>Naif yaklaşım:</strong> 1, 2, 3, 4... şeklinde tek tek dene → O(n)</li>
          <li><strong>Akıllı yaklaşım:</strong> 50 de, büyük mü küçük mü?, sonra 75 veya 25... → O(log n)</li>
        </ul>

        <p>Bu mantık <strong>sadece sayılarda değil</strong>, <strong>her monotonic (tek yönlü) problemde</strong> çalışır!</p>
      </section>

      <section className="section">
        <h2>Klasik Binary Search - Temel</h2>

        <div className="topic-card">
          <h3>Standart Binary Search Implementation</h3>
          <CodeBlock language="csharp">
{`// Standart binary search - exact match
public int BinarySearch(int[] array, int target)
{
    int left = 0;
    int right = array.Length - 1;
    
    while (left <= right)
    {
        int mid = left + (right - left) / 2; // Overflow prevention
        
        if (array[mid] == target)
            return mid;         // Found!
        else if (array[mid] < target)
            left = mid + 1;     // Search right half
        else
            right = mid - 1;    // Search left half
    }
    
    return -1; // Not found
}`}
            </CodeBlock>
          </div>
      </section>

      <section className="section">
        <h2>Binary Search Variants</h2>

        <div className="topic-card">
          <h3>1. Lower Bound (İlk Occurrence)</h3>
          <p><strong>"Target'ın ilk görüldüğü index"</strong></p>
          <CodeBlock language="csharp">
{`// Target'ın ilk görüldüğü index'i bul
public int LowerBound(int[] array, int target)
{
    int left = 0;
    int right = array.Length;
    
    while (left < right)
    {
        int mid = left + (right - left) / 2;
        
        if (array[mid] < target)
            left = mid + 1;     // Target daha büyük, sağa git
        else
            right = mid;        // Target ≤ array[mid], sol tarafta da olabilir
    }
    
    return left; // İlk valid position
}

// Kullanım örneği: [1, 2, 2, 2, 3, 4], target=2 → return 1`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>2. Upper Bound (Son Occurrence + 1)</h3>
            <p><strong>"Target'tan büyük ilk eleman"</strong></p>
            <CodeBlock language="csharp">
{`// Target'tan büyük ilk elemanın index'i
public int UpperBound(int[] array, int target)
{
    int left = 0;
    int right = array.Length;
    
    while (left < right)
    {
        int mid = left + (right - left) / 2;
        
        if (array[mid] <= target)
            left = mid + 1;     // Target ≥ array[mid], daha sağa bak
        else
            right = mid;        // Target < array[mid], sol tarafı kontrol et
    }
    
    return left;
}

// Kullanım örneği: [1, 2, 2, 2, 3, 4], target=2 → return 4`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>3. First and Last Position</h3>
              <CodeBlock language="csharp">
{`// Target'ın ilk ve son pozisyonunu bul
public int[] SearchRange(int[] nums, int target)
{
    int first = LowerBound(nums, target);
    
    // Target hiç yok mu?
    if (first == nums.Length || nums[first] != target)
        return new int[] { -1, -1 };
    
    int last = UpperBound(nums, target) - 1; // Upper bound - 1 = last occurrence
    
    return new int[] { first, last };
}

// Örnek: [5,7,7,8,8,10], target=8 → [3,4]`}
                </CodeBlock>
              </div>
      </section>

      <section className="section">
        <h2>Advanced Binary Search Applications</h2>

        <div className="topic-card">
          <h3>1. Search in Rotated Sorted Array</h3>
          <p><strong>"Döndürülmüş sıralı array'de arama"</strong></p>
          <CodeBlock language="csharp">
{`// Rotated sorted array'de arama
public int SearchRotated(int[] nums, int target)
{
    int left = 0;
    int right = nums.Length - 1;
    
    while (left <= right)
    {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] == target)
            return mid;
        
        // Sol yarı sorted mı?
        if (nums[left] <= nums[mid])
        {
            // Target sol sorted yarıda mı?
            if (nums[left] <= target && target < nums[mid])
                right = mid - 1;
            else
                left = mid + 1;
        }
        else // Sağ yarı sorted
        {
            // Target sağ sorted yarıda mı?
            if (nums[mid] < target && target <= nums[right])
                left = mid + 1;
            else
                right = mid - 1;
        }
    }
    
    return -1;
}

// Örnek: [4,5,6,7,0,1,2], target=0 → return 4`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>2. Find Minimum in Rotated Array</h3>
            <CodeBlock language="csharp">
{`// Rotated sorted array'deki minimum
public int FindMin(int[] nums)
{
    int left = 0;
    int right = nums.Length - 1;
    
    while (left < right)
    {
        int mid = left + (right - left) / 2;
        
        // Sağ yarı unsorted (minimum sağ tarafta)
        if (nums[mid] > nums[right])
            left = mid + 1;
        else
            right = mid; // Minimum sol tarafta veya mid'de
    }
    
    return nums[left];
}`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>3. Peak Element</h3>
              <p><strong>"Komşularından büyük olan eleman"</strong></p>
              <CodeBlock language="csharp">
{`// Peak element bul (komşularından büyük)
public int FindPeakElement(int[] nums)
{
    int left = 0;
    int right = nums.Length - 1;
    
    while (left < right)
    {
        int mid = left + (right - left) / 2;
        
        // Sağdaki daha büyükse, peak sağ tarafta
        if (nums[mid] < nums[mid + 1])
            left = mid + 1;
        else
            right = mid; // Peak sol tarafta veya mid'de
    }
    
    return left;
}

// Örnek: [1,2,3,1] → return 2 (value 3)`}
                </CodeBlock>
              </div>
      </section>

      <section className="section">
        <h2>Binary Search on Answer Space</h2>
        <p><strong>"Cevap uzayında binary search"</strong> - En güçlü teknik!</p>

        <div className="topic-card">
          <h3>1. Square Root</h3>
          <CodeBlock language="csharp">
{`// Integer square root bulma
public int MySqrt(int x)
{
    if (x < 2) return x;
    
    int left = 2;
    int right = x / 2;
    
    while (left <= right)
    {
        int mid = left + (right - left) / 2;
        long square = (long)mid * mid; // Overflow prevention
        
        if (square == x)
            return mid;
        else if (square < x)
            left = mid + 1;
        else
            right = mid - 1;
    }
    
    return right; // En büyük valid answer
}`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>2. Capacity To Ship Packages</h3>
            <p><strong>"Minimum ship capacity bul"</strong></p>
            <CodeBlock language="csharp">
{`// Minimum ship capacity - packages'ları D gün içinde gönder
public int ShipWithinDays(int[] weights, int D)
{
    int left = weights.Max();        // En ağır paket (minimum capacity)
    int right = weights.Sum();       // Tüm paketler (maximum capacity)
    
    while (left < right)
    {
        int mid = left + (right - left) / 2;
        
        if (CanShipWithCapacity(weights, D, mid))
            right = mid;      // Bu capacity yeterli, daha küçük dene
        else
            left = mid + 1;   // Bu capacity yetersiz, büyüt
    }
    
    return left;
}

private bool CanShipWithCapacity(int[] weights, int D, int capacity)
{
    int days = 1;
    int currentWeight = 0;
    
    foreach (int weight in weights)
    {
        if (currentWeight + weight > capacity)
        {
            days++;
            currentWeight = weight;
        }
        else
        {
            currentWeight += weight;
        }
    }
    
    return days <= D;
}`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>3. Koko Eating Bananas</h3>
              <CodeBlock language="csharp">
{`// Minimum eating speed - H saatte tüm banana'ları ye
public int MinEatingSpeed(int[] piles, int H)
{
    int left = 1;                    // Minimum speed
    int right = piles.Max();         // Maximum speed (biggest pile)
    
    while (left < right)
    {
        int mid = left + (right - left) / 2;
        
        if (CanFinishInTime(piles, H, mid))
            right = mid;      // Bu hız yeterli, daha yavaş dene
        else
            left = mid + 1;   // Bu hız yetersiz, hızlan
    }
    
    return left;
}

private bool CanFinishInTime(int[] piles, int H, int speed)
{
    int hours = 0;
    
    foreach (int pile in piles)
    {
        hours += (pile + speed - 1) / speed; // Ceiling division
    }
    
    return hours <= H;
}`}
                </CodeBlock>
              </div>
      </section>

      <section className="section">
        <h2>2D Binary Search</h2>

        <div className="topic-card">
          <h3>1. Search 2D Matrix</h3>
          <CodeBlock language="csharp">
{`// 2D matrix'te arama (satır ve sütun sorted)
public bool SearchMatrix(int[,] matrix, int target)
{
    int rows = matrix.GetLength(0);
    int cols = matrix.GetLength(1);
    
    // Matrix'i 1D array gibi düşün
    int left = 0;
    int right = rows * cols - 1;
    
    while (left <= right)
    {
        int mid = left + (right - left) / 2;
        int midValue = matrix[mid / cols, mid % cols]; // 1D index'i 2D'ye çevir
        
        if (midValue == target)
            return true;
        else if (midValue < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    
    return false;
}`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>2. Search 2D Matrix II</h3>
            <CodeBlock language="csharp">
{`// Her satır ve sütun sorted ama matrix genel olarak sorted değil
public bool SearchMatrix2(int[,] matrix, int target)
{
    int row = 0;
    int col = matrix.GetLength(1) - 1; // Sağ üst köşeden başla
    
    while (row < matrix.GetLength(0) && col >= 0)
    {
        int current = matrix[row, col];
        
        if (current == target)
            return true;
        else if (current > target)
            col--;    // Sol'a git (küçük değerler)
        else
            row++;    // Aşağı git (büyük değerler)
    }
    
    return false;
}`}
              </CodeBlock>
            </div>
      </section>

      <section className="section">
        <h2>Binary Search Template Pattern</h2>
        <p><strong>Genel binary search template:</strong></p>

        <div className="topic-card">
          <h3>Universal Binary Search Template</h3>
          <CodeBlock language="csharp">
{`public class BinarySearchTemplate
{
    // Template for most binary search problems
    public int BinarySearchTemplate(int[] array, Func<int, bool> condition)
    {
        int left = 0;              // Search space start
        int right = array.Length;  // Search space end (exclusive)
        
        while (left < right)
        {
            int mid = left + (right - left) / 2;
            
            if (condition(mid))
                right = mid;        // Condition true, answer left side
            else
                left = mid + 1;     // Condition false, answer right side
        }
        
        return left; // First position where condition is true
    }
    
    // Kullanım örneği: First position >= target
    public int FindFirstGE(int[] array, int target)
    {
        return BinarySearchTemplate(array, i => array[i] >= target);
    }
}`}
            </CodeBlock>
          </div>
      </section>

      <section className="section">
        <h2>Binary Search'ün Gerçek Hayat Uygulamaları</h2>

        <div className="topic-card">
          <h3>1. Database Index</h3>
          <CodeBlock language="csharp">
{`// Database'de range query
public class DatabaseIndex
{
    private int[] sortedIds;
    
    public List<int> RangeQuery(int minId, int maxId)
    {
        int startIndex = LowerBound(sortedIds, minId);
        int endIndex = UpperBound(sortedIds, maxId);
        
        List<int> result = new List<int>();
        for (int i = startIndex; i < endIndex; i++)
        {
            result.Add(sortedIds[i]);
        }
        
        return result;
    }
}`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>2. Version Control</h3>
            <CodeBlock language="csharp">
{`// Git-like version control'de first bad version
public int FirstBadVersion(int n)
{
    int left = 1;
    int right = n;
    
    while (left < right)
    {
        int mid = left + (right - left) / 2;
        
        if (IsBadVersion(mid))
            right = mid;      // Bad version, daha erken de olabilir
        else
            left = mid + 1;   // Good version, daha sonrasında bad var
    }
    
    return left;
}

private bool IsBadVersion(int version)
{
    // API call to check if version is bad
    return true; // Placeholder
}`}
              </CodeBlock>
            </div>
      </section>

      <section className="section">
        <h2>Binary Search Complexity</h2>

        <div className="topic-card">
          <h3>Time Complexity: <strong>O(log n)</strong></h3>
          <ul>
            <li>Her iterasyonda search space yarıya iner</li>
            <li>n elemanlı array'de en fazla log₂(n) adım</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>Space Complexity: <strong>O(1)</strong></h3>
          <ul>
            <li>Iterative implementation sadece birkaç variable kullanır</li>
            <li>Recursive implementation O(log n) stack space</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Binary Search Ne Zaman Kullanılır?</h2>

        <div className="topic-card">
          <h3>✅ Binary Search Kullan Eğer:</h3>
          <ul>
            <li><strong>Sorted data</strong> varsa</li>
            <li><strong>Monotonic</strong> property varsa (tek yönlü artış/azalış)</li>
            <li><strong>Answer space</strong> binary search yapılabilirse</li>
            <li><strong>O(log n)</strong> performance gerekiyorsa</li>
            <li><strong>Large dataset</strong> ve frequent queries varsa</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>🎯 Binary Search Problem Patterns:</h3>
          <ol>
            <li><strong>Direct search:</strong> Sorted array'de exact match</li>
            <li><strong>Boundary search:</strong> First/last occurrence</li>
            <li><strong>Rotated array:</strong> Special sorted array variations</li>
            <li><strong>Answer space:</strong> Minimum/maximum value bulma</li>
            <li><strong>2D search:</strong> Matrix'te arama</li>
          </ol>
        </div>
      </section>

      <section className="section">
        <h2>Advanced Tips</h2>

        <div className="topic-card">
          <h3>1. Overflow Prevention</h3>
          <CodeBlock language="csharp">
{`// ❌ Yanlış: int overflow olabilir
int mid = (left + right) / 2;

// ✅ Doğru: Overflow'u önler
int mid = left + (right - left) / 2;`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>2. Boundary Conditions</h3>
            <CodeBlock language="csharp">
{`// Template'e göre boundary'leri doğru ayarla
int left = 0;
int right = array.Length;     // Exclusive upper bound
// veya
int right = array.Length - 1; // Inclusive upper bound`}
              </CodeBlock>
            </div>
      </section>

      <section className="section">
        <p>Binary Search, <strong>problem solving'in İsviçre çakısı</strong> gibi! Sadece arama değil, <strong>optimization problemlerinde</strong> de çok güçlü! 🔍</p>
      </section>

      <section className="section">
        <h2>🎉 Hafta 2 Tamamlandı!</h2>

        <div className="topic-card">
          <h3>Öğrendiğin Konular:</h3>
          <ul>
            <li>✅ <strong>Binary Tree</strong> - Ağaç yapılarının temeli</li>
            <li>✅ <strong>BST</strong> - Sıralı ağaç yapısı ve O(log n) operasyonlar</li>
            <li>✅ <strong>Tree Traversal</strong> - DFS (preorder, inorder, postorder)</li>
            <li>✅ <strong>BFS & Graphs</strong> - Level-order traversal ve graph algorithms</li>
            <li>✅ <strong>Sorting</strong> - MergeSort, QuickSort ve divide & conquer</li>
            <li>✅ <strong>Binary Search</strong> - Advanced applications ve answer space search</li>
          </ul>

          <p>Bu konular, <strong>algorithm design'ın kalbi</strong>! Şimdi pratik yapmaya başlayabilirsin! 🚀</p>
        </div>
      </section>

      <Notes topicPath="/bstadvanced" topicTitle="Binary Search - Advanced Applications" />

      <div className="navigation-links">
        <Link to="/sorting" className="nav-button">← Sorting</Link>
        <Link to="/quiz-hafta2" className="nav-button">Quiz →</Link>
      </div>
    </div>
  );
}

export default BSTAdvanced;