
import React from 'react';
import Notes from '../../../notes/Notes';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import CodeBlock from '../../../ui/CodeBlock';

function BST() {
  return (
    <div className="app-container">
      <SEO
        title="Binary Search Tree (BST) - Sıralı Ağaç Yapısı | İki Ay"
        description="BST veri yapısını öğren. Search, insert, delete operasyonları, inorder traversal, range queries ve balanced tree kavramları."
        canonical="https://iki-ay.web.app/bst"
        og={{ url: 'https://iki-ay.web.app/bst' }}
      />

      <div className="content-header">
        <h1>Binary Search Tree (BST) - Sıralı Ağaç Yapısı</h1>
        <Link to="/hafta2" className="back-link">← 2. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>BST Nedir? Binary Tree'den Farkı Ne?</h2>
        <p>
          BST, <strong>özel kurallı Binary Tree</strong> gibi düşün. Her node için:
        </p>
        <ul>
          <li><strong>Sol çocuk &lt; Parent</strong></li>
          <li><strong>Sağ çocuk &gt; Parent</strong></li>
        </ul>
        <p>Bu basit kural, <strong>O(log n) arama</strong> süper gücü verir!</p>

        <h3>Gerçek Hayattan Benzetme: Kütüphane Sistemi</h3>
        <p>Düşün ki çok akıllı bir kütüphaneci var:</p>
        <ul>
          <li><strong>Sol rafa</strong> senden <strong>küçük numaralı</strong> kitapları koyuyor</li>
          <li><strong>Sağ rafa</strong> senden <strong>büyük numaralı</strong> kitapları koyuyor</li>
          <li>Her rafta da <strong>aynı sistem</strong> devam ediyor</li>
        </ul>
        <p>Bu sayede istediğin kitabı çok hızlı bulabiliyorsun!</p>

        <h3>Örnek BST:</h3>
        <CodeBlock language="csharp">
{`       50
      /  \\
    30    70
   /  \\   /  \\
  20  40 60  80

Left < Root < Right kuralı her yerde geçerli!`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>BST'nin Sihirli Gücü: Sorted Order</h2>
        <p>BST'nin en büyük avantajı: <strong>Inorder traversal ile sıralı liste</strong> elde edersin!</p>
        <CodeBlock language="csharp">
{`Yukarıdaki BST'nin inorder traversal'ı: 20, 30, 40, 50, 60, 70, 80
→ Otomatik olarak sıralı! 🎯`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>BST Node Implementation</h2>

        <CodeBlock language="csharp">
{`public class BSTNode
{
    public int Val { get; set; }
    public BSTNode Left { get; set; }
    public BSTNode Right { get; set; }
    
    public BSTNode(int val)
    {
        Val = val;
        Left = null;
        Right = null;
    }
}

public class BinarySearchTree
{
    public BSTNode Root { get; set; }
    
    public BinarySearchTree()
    {
        Root = null;
    }
}`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>BST Temel İşlemleri</h2>

        <div className="topic-card">
          <h3>1. Search (Arama) - O(log n) ⚡</h3>
          <CodeBlock language="csharp">
{`// BST'de değer arama - çok hızlı!
public bool Search(BSTNode root, int target)
{
    if (root == null) return false;
    
    if (root.Val == target) 
        return true; // Bulundu!
    
    if (target < root.Val)
        return Search(root.Left, target);  // Sol tarafa git
    else
        return Search(root.Right, target); // Sağ tarafa git
}

// Iterative version - daha memory efficient
public bool SearchIterative(int target)
{
    BSTNode current = Root;
    
    while (current != null)
    {
        if (current.Val == target)
            return true;
        
        if (target < current.Val)
            current = current.Left;
        else
            current = current.Right;
    }
    
    return false;
}`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>2. Insert (Ekleme) - O(log n) ⚡</h3>
            <CodeBlock language="csharp">
{`// BST'ye yeni değer ekleme
public BSTNode Insert(BSTNode root, int val)
{
    // Base case: boş yer buldu, yeni node oluştur
    if (root == null)
        return new BSTNode(val);
    
    if (val < root.Val)
        root.Left = Insert(root.Left, val);   // Sol tarafa ekle
    else if (val > root.Val)
        root.Right = Insert(root.Right, val); // Sağ tarafa ekle
    // val == root.Val durumunda ekleme (duplicate'leri ignore et)
    
    return root;
}

// Public method
public void Insert(int val)
{
    Root = Insert(Root, val);
}`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>3. Min/Max Bulma - O(log n) ⚡</h3>
              <CodeBlock language="csharp">
{`// En küçük değer - en soldaki node
public int FindMin(BSTNode root)
{
    if (root == null)
        throw new InvalidOperationException("Tree boş!");
    
    while (root.Left != null)
        root = root.Left;
    
    return root.Val;
}

// En büyük değer - en sağdaki node  
public int FindMax(BSTNode root)
{
    if (root == null)
        throw new InvalidOperationException("Tree boş!");
    
    while (root.Right != null)
        root = root.Right;
    
    return root.Val;
}`}
                </CodeBlock>
              </div>

              <div className="topic-card">
                <h3>4. Delete (Silme) - O(log n) 🤔</h3>
                <p>Bu en karmaşık işlem! 3 durum var:</p>
                <CodeBlock language="csharp">
{`public BSTNode Delete(BSTNode root, int val)
{
    if (root == null) return null; // Değer bulunamadı
    
    if (val < root.Val)
        root.Left = Delete(root.Left, val);
    else if (val > root.Val)
        root.Right = Delete(root.Right, val);
    else // val == root.Val, silinecek node bulundu!
    {
        // Case 1: Leaf node (çocuk yok)
        if (root.Left == null && root.Right == null)
            return null;
        
        // Case 2: Tek çocuk var
        if (root.Left == null)
            return root.Right;
        if (root.Right == null)
            return root.Left;
        
        // Case 3: İki çocuk var - en karmaşık durum!
        // Sağ alt ağaçtaki en küçük değeri bul (inorder successor)
        int minVal = FindMin(root.Right);
        root.Val = minVal; // Current node'un değerini değiştir
        root.Right = Delete(root.Right, minVal); // Successor'ı sil
    }
    
    return root;
}`}
                  </CodeBlock>
                </div>
        </section>

        <section className="section">
          <h2>Silme İşleminin Görsel Açıklaması</h2>

          <CodeBlock language="csharp">
{`Silme Case 3 örneği:
       50
      /  \\
    30    70    ← 50'yi silmek istiyoruz
   /  \\   /  \\
  20  40 60  80

Adımlar:
1. 50'nin sağ alt ağacındaki en küçük: 60
2. 50'yi 60 ile değiştir
3. 60'ı orijinal yerinden sil

Sonuç:
       60
      /  \\
    30    70
   /  \\    \\
  20  40   80`}
            </CodeBlock>
        </section>

        <section className="section">
          <h2>BST Traversal ve Sıralama</h2>

          <div className="topic-card">
            <h3>Inorder Traversal = Sıralı Liste!</h3>
            <CodeBlock language="csharp">
{`// Inorder: Left → Root → Right
public void InorderTraversal(BSTNode root, List<int> result)
{
    if (root == null) return;
    
    InorderTraversal(root.Left, result);   // Sol
    result.Add(root.Val);                  // Root
    InorderTraversal(root.Right, result);  // Sağ
}

// BST'deki tüm elemanları sıralı şekilde al
public List<int> GetSortedElements()
{
    List<int> result = new List<int>();
    InorderTraversal(Root, result);
    return result; // Otomatik olarak sıralı!
}`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>BST'den Range Query</h3>
              <CodeBlock language="csharp">
{`// Belirli aralıktaki değerleri bul
public List<int> RangeQuery(BSTNode root, int min, int max)
{
    List<int> result = new List<int>();
    RangeQueryHelper(root, min, max, result);
    return result;
}

private void RangeQueryHelper(BSTNode root, int min, int max, List<int> result)
{
    if (root == null) return;
    
    // Current value aralıkta mı?
    if (root.Val >= min && root.Val <= max)
        result.Add(root.Val);
    
    // Sol alt ağaca git (eğer mantıklıysa)
    if (root.Val > min)
        RangeQueryHelper(root.Left, min, max, result);
    
    // Sağ alt ağaca git (eğer mantıklıysa)
    if (root.Val < max)
        RangeQueryHelper(root.Right, min, max, result);
}`}
                </CodeBlock>
              </div>
        </section>

        <section className="section">
          <h2>BST Validation (Doğrulama)</h2>
          <p>Bir tree'nin gerçekten BST olup olmadığını kontrol etmek:</p>

          <CodeBlock language="csharp">
{`// BST property'sini kontrol et
public bool IsValidBST(BSTNode root)
{
    return IsValidBSTHelper(root, int.MinValue, int.MaxValue);
}

private bool IsValidBSTHelper(BSTNode root, int min, int max)
{
    if (root == null) return true;
    
    // Current node sınırlar içinde mi?
    if (root.Val <= min || root.Val >= max)
        return false;
    
    // Sol alt ağaç: üst sınır current value
    // Sağ alt ağaç: alt sınır current value
    return IsValidBSTHelper(root.Left, min, root.Val) &&
           IsValidBSTHelper(root.Right, root.Val, max);
}`}
            </CodeBlock>
        </section>

        <section className="section">
          <h2>BST'nin Gerçek Hayat Uygulamaları</h2>

          <div className="topic-card">
            <h3>1. Database Index</h3>
            <CodeBlock language="csharp">
{`// Database'deki kayıtları hızlı arama için
public class DatabaseIndex
{
    private BSTNode root;
    
    public void AddRecord(int id)
    {
        root = Insert(root, id);
    }
    
    public bool RecordExists(int id)
    {
        return Search(root, id); // O(log n) arama!
    }
}`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>2. Auto-complete System</h3>
              <CodeBlock language="csharp">
{`// String BST for auto-complete
public class AutoComplete
{
    public class StringBSTNode
    {
        public string Word { get; set; }
        public StringBSTNode Left { get; set; }
        public StringBSTNode Right { get; set; }
        
        public StringBSTNode(string word)
        {
            Word = word;
        }
    }
    
    private StringBSTNode root;
    
    public void AddWord(string word)
    {
        root = InsertString(root, word);
    }
    
    private StringBSTNode InsertString(StringBSTNode root, string word)
    {
        if (root == null)
            return new StringBSTNode(word);
        
        if (string.Compare(word, root.Word) < 0)
            root.Left = InsertString(root.Left, word);
        else if (string.Compare(word, root.Word) > 0)
            root.Right = InsertString(root.Right, word);
        
        return root;
    }
}`}
              </CodeBlock>
            </div>
        </section>

        <section className="section">
          <h2>BST Performance Analizi</h2>

          <div className="topic-card">
            <h3>⚡ Best Case (Balanced Tree):</h3>
            <ul>
              <li><strong>Search:</strong> O(log n)</li>
              <li><strong>Insert:</strong> O(log n)</li>
              <li><strong>Delete:</strong> O(log n)</li>
              <li><strong>Min/Max:</strong> O(log n)</li>
            </ul>
          </div>

          <div className="topic-card">
            <h3>🐌 Worst Case (Degenerate Tree):</h3>
            <CodeBlock language="csharp">
{`Degenerate BST (LinkedList gibi):
1
 \\
  2
   \\
    3
     \\
      4

Tüm operasyonlar O(n) olur!`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>🎯 BST'yi Balanced Tutma:</h3>
              <p>Bu durumda <strong>AVL Tree</strong> veya <strong>Red-Black Tree</strong> kullanılır (self-balancing).</p>
            </div>
        </section>

        <section className="section">
          <h2>BST vs Diğer Veri Yapıları</h2>

          <table className="comparison-table">
            <thead>
              <tr>
                <th>Özellik</th>
                <th>Array (Sorted)</th>
                <th>HashMap</th>
                <th>BST</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Search</strong></td>
                <td>O(log n)</td>
                <td>O(1) avg</td>
                <td>O(log n)</td>
              </tr>
              <tr>
                <td><strong>Insert</strong></td>
                <td>O(n)</td>
                <td>O(1) avg</td>
                <td>O(log n)</td>
              </tr>
              <tr>
                <td><strong>Sorted order</strong></td>
                <td>Manual</td>
                <td>❌</td>
                <td>Otomatik ✅</td>
              </tr>
              <tr>
                <td><strong>Range query</strong></td>
                <td>O(log n + k)</td>
                <td>O(n)</td>
                <td>O(log n + k)</td>
              </tr>
              <tr>
                <td><strong>Memory</strong></td>
                <td>Compact</td>
                <td>Extra</td>
                <td>Extra</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>BST Ne Zaman Kullanılır?</h2>

          <div className="topic-card">
            <h3>✅ BST Kullan Eğer:</h3>
            <ul>
              <li><strong>Sorted order</strong> önemliyse</li>
              <li><strong>Range queries</strong> yapacaksan</li>
              <li><strong>Minimum/Maximum</strong> sık bulacaksan</li>
              <li><strong>Dynamic dataset</strong> ve sıralama gerekiyorsa</li>
              <li><strong>Predecessor/Successor</strong> bulma gerekiyorsa</li>
            </ul>
          </div>

          <div className="topic-card">
            <h3>❌ BST Kullanma Eğer:</h3>
            <ul>
              <li><strong>Only key lookup</strong> gerekiyorsa (HashMap kullan)</li>
              <li><strong>Fixed dataset</strong> (Sorted array kullan)</li>
              <li><strong>Memory critical</strong> (Array daha efficient)</li>
              <li><strong>Worst case guarantee</strong> gerekiyorsa (Balanced BST kullan)</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Advanced BST Concepts</h2>

          <div className="topic-card">
            <h3>Kth Smallest Element</h3>
            <CodeBlock language="csharp">
{`// BST'deki k'ıncı en küçük elemanı bul
public int KthSmallest(BSTNode root, int k)
{
    int count = 0;
    return KthSmallestHelper(root, k, ref count);
}

private int KthSmallestHelper(BSTNode root, int k, ref int count)
{
    if (root == null) return -1;
    
    // Sol alt ağaçta ara
    int leftResult = KthSmallestHelper(root.Left, k, ref count);
    if (leftResult != -1) return leftResult;
    
    // Current node
    count++;
    if (count == k) return root.Val;
    
    // Sağ alt ağaçta ara
    return KthSmallestHelper(root.Right, k, ref count);
}`}
              </CodeBlock>
            </div>
        </section>

        <section className="section">
          <p><strong>BST, sorting ve searching problemlerinin elegant çözümü! Next: Tree Traversal teknikleri 🌲</strong></p>
        </section>

        <Notes topicPath="/bst" topicTitle="Binary Search Tree (BST) - Sıralı Ağaç Yapısı" />

      <div className="navigation-links">
          <Link to="/binary-tree" className="nav-button">← Binary Tree</Link>
          <Link to="/dfs" className="nav-button">DFS →</Link>
        </div>
      </div>
  );
}

export default BST;