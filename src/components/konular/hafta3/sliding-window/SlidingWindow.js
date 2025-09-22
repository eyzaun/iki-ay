import React from 'react';
import Notes from '../../../notes/Notes';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import CodeBlock from '../../../ui/CodeBlock';

function SlidingWindow() {
  return (
    <div className="app-container">
      <SEO
        title="Sliding Window & Two Pointers - İleri Teknikler | İki Ay"
        description="Sliding Window ve Two Pointers tekniklerini öğren. Maximum sum, minimum window, longest substring problemleri."
        canonical="https://iki-ay.web.app/sliding-window"
        og={{ url: 'https://iki-ay.web.app/sliding-window' }}
      />

      <div className="content-header">
        <h1>Sliding Window & Two Pointers - İleri Teknikler</h1>
  <Link to="/hafta3" className="back-link">3. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>Sliding Window Nedir? Neden Bu Kadar Önemli?</h2>
        <p>
          Sliding Window, <strong>sabit veya değişken boyutlu pencereyi array/matrix üzerinde kaydırarak</strong> problemi çözen teknik.
          Brute force'un O(n²)'ini O(n)'e düşürür!
        </p>

        <h3>Gerçek Hayattan Benzetme</h3>
        <p>Düşün ki büyük bir bahçede yürüyorsun ve en güzel manzarayı görmek istiyorsun:</p>
        <ul>
          <li><strong>Pencere:</strong> Camından baktığın alan</li>
          <li><strong>Kaydırma:</strong> Pencereyi sağa sola hareket ettir</li>
          <li><strong>Optimal:</strong> En güzel manzarayı bulan pencere pozisyonu</li>
          <li><strong>Efficiency:</strong> Tüm bahçeyi dolaşmana gerek yok!</li>
        </ul>
        <p>İşte Sliding Window de tam böyle çalışır!</p>
      </section>

      <section className="section">
        <h2>Fixed Size Sliding Window</h2>

        <div className="topic-card">
          <h3>1. Maximum Sum Subarray of Size K</h3>
          <p>K boyutlu pencerede maximum toplam?</p>
          <CodeBlock language="csharp">
{`public int MaxSumSubarray(int[] nums, int k)
{
    int maxSum = 0;
    int windowSum = 0;
    
    // İlk pencereyi hesapla
    for (int i = 0; i < k; i++)
    {
        windowSum += nums[i];
    }
    maxSum = windowSum;
    
    // Pencereyi kaydır: eski çıkar, yeni girer
    for (int i = k; i < nums.Length; i++)
    {
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.Max(maxSum, windowSum);
    }
    
    return maxSum;
}

// Time: O(n), Space: O(1)
// Brute force O(n*k) yerine O(n)!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. First Negative in Every Window</h3>
          <p>Her K boyutlu pencerede ilk negative sayı?</p>
          <CodeBlock language="csharp">
{`public int[] FirstNegativeInWindow(int[] nums, int k)
{
    List<int> result = new List<int>();
    Queue<int> negatives = new Queue<int>(); // Negative index'leri tut
    
    for (int i = 0; i < nums.Length; i++)
    {
        // Negative ise queue'ye ekle
        if (nums[i] < 0)
            negatives.Enqueue(i);
        
        // Pencere doldu mu?
        if (i >= k - 1)
        {
            // Queue'nin başı geçerli pencerede mi?
            if (negatives.Count > 0 && negatives.Peek() >= i - k + 1)
            {
                result.Add(nums[negatives.Peek()]);
            }
            else
            {
                result.Add(0); // No negative
            }
            
            // Pencere dışına çıkan negative'ı çıkar
            if (negatives.Count > 0 && negatives.Peek() <= i - k + 1)
            {
                negatives.Dequeue();
            }
        }
    }
    
    return result.ToArray();
}`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Variable Size Sliding Window</h2>

        <div className="topic-card">
          <h3>1. Minimum Size Subarray Sum</h3>
          <p>Toplamı ≥ target olan minimum uzunluklu subarray?</p>
          <CodeBlock language="csharp">
{`public int MinSubArrayLen(int target, int[] nums)
{
    int minLength = int.MaxValue;
    int windowSum = 0;
    int left = 0;
    
    for (int right = 0; right < nums.Length; right++)
    {
        windowSum += nums[right];
        
        // Shrink window while sum >= target
        while (windowSum >= target && left <= right)
        {
            minLength = Math.Min(minLength, right - left + 1);
            windowSum -= nums[left];
            left++;
        }
    }
    
    return minLength == int.MaxValue ? 0 : minLength;
}

// Two pointers: left ve right ile window kontrolü`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Longest Substring Without Repeating</h3>
          <p>Tekrar eden karakter olmadan en uzun substring?</p>
          <CodeBlock language="csharp">
{`public int LengthOfLongestSubstring(string s)
{
    HashSet<char> chars = new HashSet<char>();
    int maxLength = 0;
    int left = 0;
    
    for (int right = 0; right < s.Length; right++)
    {
        // Duplicate varsa window'ı shrink et
        while (chars.Contains(s[right]))
        {
            chars.Remove(s[left]);
            left++;
        }
        
        chars.Add(s[right]);
        maxLength = Math.Max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

// Set ile duplicate kontrolü, O(n) time!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. Longest Substring with K Distinct Characters</h3>
          <p>En fazla K farklı karakter içeren en uzun substring?</p>
          <CodeBlock language="csharp">
{`public int LongestSubstringKDistinct(string s, int k)
{
    Dictionary<char, int> charCount = new Dictionary<char, int>();
    int maxLength = 0;
    int left = 0;
    
    for (int right = 0; right < s.Length; right++)
    {
        // Karakter sayısını artır
        if (!charCount.ContainsKey(s[right]))
            charCount[s[right]] = 0;
        charCount[s[right]]++;
        
        // K'den fazla distinct karakter varsa shrink
        while (charCount.Count > k && left <= right)
        {
            charCount[s[left]]--;
            if (charCount[s[left]] == 0)
                charCount.Remove(s[left]);
            left++;
        }
        
        maxLength = Math.Max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

// Dictionary ile karakter frekans takibi`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Two Pointers Tekniği</h2>

        <div className="topic-card">
          <h3>1. Two Sum (Sorted Array)</h3>
          <p>Sıralı array'de iki sayı toplamı target?</p>
          <CodeBlock language="csharp">
{`public int[] TwoSumSorted(int[] nums, int target)
{
    int left = 0, right = nums.Length - 1;
    
    while (left < right)
    {
        int sum = nums[left] + nums[right];
        
        if (sum == target)
            return new int[] { left, right };
        else if (sum < target)
            left++;  // Toplam küçük, sol pointer'ı artır
        else
            right--; // Toplam büyük, sağ pointer'ı azalt
    }
    
    return new int[] { -1, -1 };
}

// O(n) time, O(1) space - çok efficient!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Remove Duplicates from Sorted Array</h3>
          <p>Sıralı array'den duplicate'ları kaldır?</p>
          <CodeBlock language="csharp">
{`public int RemoveDuplicates(int[] nums)
{
    if (nums.Length == 0) return 0;
    
    int slow = 0; // Unique element'lerin son pozisyonu
    
    for (int fast = 1; fast < nums.Length; fast++)
    {
        if (nums[fast] != nums[slow])
        {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    
    return slow + 1; // Unique element sayısı
}

// Two pointers: slow ve fast pointer`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. Container With Most Water</h3>
          <p>En çok su tutan container?</p>
          <CodeBlock language="csharp">
{`public int MaxArea(int[] height)
{
    int maxArea = 0;
    int left = 0, right = height.Length - 1;
    
    while (left < right)
    {
        int width = right - left;
        int currentHeight = Math.Min(height[left], height[right]);
        int area = width * currentHeight;
        maxArea = Math.Max(maxArea, area);
        
        // Kısa kenarı hareket ettir (daha yüksek olabilir)
        if (height[left] < height[right])
            left++;
        else
            right--;
    }
    
    return maxArea;
}

// Greedy: Kısa kenardan ilerle!`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Sliding Window vs Brute Force</h2>

        <div className="topic-card">
          <h3>Brute Force Yaklaşım</h3>
          <CodeBlock language="csharp">
{`// Tüm subarray'leri dene - O(n²)
public int MaxSumBruteForce(int[] nums, int k)
{
    int maxSum = int.MinValue;
    
    for (int i = 0; i <= nums.Length - k; i++)
    {
        int currentSum = 0;
        for (int j = i; j < i + k; j++)
        {
            currentSum += nums[j];
        }
        maxSum = Math.Max(maxSum, currentSum);
    }
    
    return maxSum;
}

// O(n*k) time - çok yavaş!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>Sliding Window Optimization</h3>
          <CodeBlock language="csharp">
{`// Pencereyi kaydır - O(n)
public int MaxSumOptimized(int[] nums, int k)
{
    int windowSum = 0;
    
    // İlk pencere
    for (int i = 0; i < k; i++)
        windowSum += nums[i];
    
    int maxSum = windowSum;
    
    // Kaydır: çıkar + ekle
    for (int i = k; i < nums.Length; i++)
    {
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.Max(maxSum, windowSum);
    }
    
    return maxSum;
}

// O(n) time - çok hızlı!`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Sliding Window Pattern Recognition</h2>

        <div className="topic-card">
          <h3>Uygun Olduğu Durumlar:</h3>
          <ul>
            <li><strong>Contiguous subarray/substring</strong> problemi</li>
            <li><strong>Window size</strong> sabit veya değişken</li>
            <li><strong>Maximum/minimum</strong> arıyorsun</li>
            <li><strong>Brute force O(n²)</strong> verecek</li>
            <li><strong>Array/string</strong> üzerinde çalışıyorsun</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>Uygun Olmadığı Durumlar:</h3>
          <ul>
            <li><strong>Non-contiguous</strong> element'ler lazım</li>
            <li><strong>Permutation/combination</strong> problemi</li>
            <li><strong>Tree/graph</strong> üzerinde çalışıyorsun</li>
            <li><strong>Sorting</strong> gerekli</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Advanced Sliding Window</h2>

        <div className="topic-card">
          <h3>1. Minimum Window Substring</h3>
          <p>S içindeki tüm T karakterlerini içeren minimum window?</p>
          <CodeBlock language="csharp">
{`public string MinWindow(string s, string t)
{
    Dictionary<char, int> targetCount = new Dictionary<char, int>();
    Dictionary<char, int> windowCount = new Dictionary<char, int>();
    
    // Target karakter frekansları
    foreach (char c in t)
    {
        if (!targetCount.ContainsKey(c)) targetCount[c] = 0;
        targetCount[c]++;
    }
    
    int required = targetCount.Count;
    int formed = 0;
    int left = 0, right = 0;
    int minLength = int.MaxValue;
    int minLeft = 0;
    
    while (right < s.Length)
    {
        char c = s[right];
        if (!windowCount.ContainsKey(c)) windowCount[c] = 0;
        windowCount[c]++;
        
        if (targetCount.ContainsKey(c) && 
            windowCount[c] == targetCount[c])
        {
            formed++;
        }
        
        // Tüm karakterler varsa shrink et
        while (left <= right && formed == required)
        {
            // Minimum window'u güncelle
            if (right - left + 1 < minLength)
            {
                minLength = right - left + 1;
                minLeft = left;
            }
            
            char leftChar = s[left];
            windowCount[leftChar]--;
            
            if (targetCount.ContainsKey(leftChar) && 
                windowCount[leftChar] < targetCount[leftChar])
            {
                formed--;
            }
            
            left++;
        }
        
        right++;
    }
    
    return minLength == int.MaxValue ? "" : 
           s.Substring(minLeft, minLength);
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Sliding Window Maximum (Deque)</h3>
          <p>Her pencerede maximum element?</p>
          <CodeBlock language="csharp">
{`public int[] MaxSlidingWindow(int[] nums, int k)
{
    List<int> result = new List<int>();
    LinkedList<int> deque = new LinkedList<int>(); // Index'leri tut
    
    for (int i = 0; i < nums.Length; i++)
    {
        // Pencere dışına çıkanları çıkar
        while (deque.Count > 0 && deque.First.Value <= i - k)
            deque.RemoveFirst();
        
        // Küçük element'leri çıkar (max lazım)
        while (deque.Count > 0 && nums[deque.Last.Value] <= nums[i])
            deque.RemoveLast();
        
        deque.AddLast(i);
        
        // Pencere doldu mu?
        if (i >= k - 1)
        {
            result.Add(nums[deque.First.Value]);
        }
    }
    
    return result.ToArray();
}

// Deque ile O(n) time - çok efficient!`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Interview Tips</h2>
        <ol>
          <li><strong>Window boundaries belirle:</strong> left ve right pointer</li>
          <li><strong>Window condition'unu tanımla:</strong> Ne zaman expand/shrink?</li>
          <li><strong>Data structure seç:</strong> Set, Map, Deque?</li>
          <li><strong>Edge case'leri test et:</strong> Empty, single element, all same</li>
          <li><strong>Time complexity hesapla:</strong> Genelde O(n)</li>
        </ol>
        <p>Sliding Window, array problemlerinin şampiyonu! Pattern'leri tanıdığında çok hızlı çözeceksin.</p>
      </section>

      <Notes topicPath="/slidingwindow" topicTitle="Sliding Window & Two Pointers - İleri Teknikler" />

      <div className="navigation-links">
  <Link to="/greedy" className="nav-button">Greedy</Link>
  <Link to="/union-find" className="nav-button">Union-Find</Link>
      </div>
    </div>
  );
}

export default SlidingWindow;