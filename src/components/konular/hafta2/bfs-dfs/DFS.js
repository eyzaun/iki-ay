import React from 'react';
import Notes from '../../../notes/Notes';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import CodeBlock from '../../../ui/CodeBlock';

function DFS() {
  return (
    <div className="app-container">
      <SEO
        title="Tree Traversal - DFS (Depth-First Search) | İki Ay"
        description="DFS traversal tekniklerini öğren. Preorder, inorder, postorder algoritmaları, recursive ve iterative implementasyonları, kullanım alanları."
        canonical="https://iki-ay.web.app/dfs"
        og={{ url: 'https://iki-ay.web.app/dfs' }}
      />

      <div className="content-header">
        <h1>Tree Traversal - DFS (Depth-First Search)</h1>
        <Link to="/hafta2" className="back-link">← 2. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>Tree Traversal Nedir? Neden Bu Kadar Önemli?</h2>
        <p>
          Tree Traversal, <strong>ağaçtaki her node'u sistematik olarak ziyaret etme</strong> yöntemidir. Tıpkı bir müzeyi gezmek gibi - hangi sırayla hangi salonu ziyaret edeceğine karar vermelisin.
        </p>

        <h3>Gerçek Hayattan Benzetme: Ev Temizliği</h3>
        <p>Düşün ki 3 katlı bir evi temizliyorsun:</p>
        <ul>
          <li><strong>DFS (Depth-First):</strong> Bir odaya gir, o odanın tüm dolap/çekmecelerini bitir, sonra diğer odaya geç</li>
          <li><strong>BFS (Breadth-First):</strong> Tüm odaları yüzeysel temizle, sonra derinlemesine git</li>
        </ul>
      </section>

      <section className="section">
        <h2>DFS'in 3 Türü</h2>
        <p>DFS'te <strong>Root, Left, Right</strong> sıralaması önemli:</p>

        <div className="topic-card">
          <h3>1. <strong>Preorder:</strong> Root → Left → Right</h3>
        </div>

        <div className="topic-card">
          <h3>2. <strong>Inorder:</strong> Left → Root → Right</h3>
        </div>

        <div className="topic-card">
          <h3>3. <strong>Postorder:</strong> Left → Right → Root</h3>
        </div>

        <h3>Görsel Örnek:</h3>
        <CodeBlock language="csharp">
{`Tree:
       1
      / \\
     2   3
    / \\
   4   5

Preorder:  1, 2, 4, 5, 3  (Root önce)
Inorder:   4, 2, 5, 1, 3  (Root ortada)
Postorder: 4, 5, 2, 3, 1  (Root sonra)`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>1. Preorder Traversal (Root → Left → Right)</h2>
        <p><strong>Ne zaman kullanılır:</strong> Tree'yi <strong>kopyalamak</strong>, <strong>serialize etmek</strong> için.</p>

        <div className="topic-card">
          <h3>Recursive Implementation</h3>
          <CodeBlock language="csharp">
{`// Preorder: Root işle, sonra sol, sonra sağ
public void PreorderTraversal(TreeNode root, List<int> result)
{
    if (root == null) return;
    
    result.Add(root.Val);               // Root'u işle (1. adım)
    PreorderTraversal(root.Left, result);  // Sol alt ağaç (2. adım)
    PreorderTraversal(root.Right, result); // Sağ alt ağaç (3. adım)
}`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>Iterative Implementation (Stack kullanarak)</h3>
            <CodeBlock language="csharp">
{`public List<int> PreorderIterative(TreeNode root)
{
    List<int> result = new List<int>();
    if (root == null) return result;
    
    Stack<TreeNode> stack = new Stack<TreeNode>();
    stack.Push(root);
    
    while (stack.Count > 0)
    {
        TreeNode current = stack.Pop();
        result.Add(current.Val);        // Root'u işle
        
        // Sağ çocuğu önce push et (sonra işlenmesi için)
        if (current.Right != null)
            stack.Push(current.Right);
        
        // Sol çocuğu sonra push et (önce işlenmesi için)
        if (current.Left != null)
            stack.Push(current.Left);
    }
    
    return result;
}`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>Preorder Kullanım Alanları</h3>
              <CodeBlock language="csharp">
{`// 1. Tree'yi serialize etme (string'e çevirme)
public string SerializeTree(TreeNode root)
{
    if (root == null) return "null";
    
    return root.Val + "," + 
           SerializeTree(root.Left) + "," + 
           SerializeTree(root.Right);
}

// 2. Directory structure yazdırma
public void PrintDirectoryStructure(TreeNode root, int depth = 0)
{
    if (root == null) return;
    
    // Current directory'yi yazdır (Root)
    string indent = new string(' ', depth * 2);
    Console.WriteLine($"{indent}{root.Val}");
    
    // Alt directory'leri yazdır (Left, Right)
    PrintDirectoryStructure(root.Left, depth + 1);
    PrintDirectoryStructure(root.Right, depth + 1);
}`}
                </CodeBlock>
              </div>
      </section>

      <section className="section">
        <h2>2. Inorder Traversal (Left → Root → Right)</h2>
        <p><strong>Ne zaman kullanılır:</strong> <strong>BST'de sorted order</strong> elde etmek için!</p>

        <div className="topic-card">
          <h3>Recursive Implementation</h3>
          <CodeBlock language="csharp">
{`// Inorder: Sol, Root işle, sağ
public void InorderTraversal(TreeNode root, List<int> result)
{
    if (root == null) return;
    
    InorderTraversal(root.Left, result);   // Sol alt ağaç (1. adım)
    result.Add(root.Val);                  // Root'u işle (2. adım)
    InorderTraversal(root.Right, result);  // Sağ alt ağaç (3. adım)
}`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>Iterative Implementation</h3>
            <CodeBlock language="csharp">
{`public List<int> InorderIterative(TreeNode root)
{
    List<int> result = new List<int>();
    Stack<TreeNode> stack = new Stack<TreeNode>();
    TreeNode current = root;
    
    while (current != null || stack.Count > 0)
    {
        // En sol node'a kadar git
        while (current != null)
        {
            stack.Push(current);
            current = current.Left;
        }
        
        // Stack'ten al ve işle
        current = stack.Pop();
        result.Add(current.Val);
        
        // Sağ alt ağaca geç
        current = current.Right;
    }
    
    return result;
}`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>Inorder'ın Sihirli Gücü - BST'de Sorted Order</h3>
              <CodeBlock language="csharp">
{`// BST'deki elemanları sıralı şekilde al
public List<int> GetSortedElementsFromBST(TreeNode root)
{
    List<int> result = new List<int>();
    InorderTraversal(root, result);
    return result; // Otomatik olarak sıralı! 🎯
}

// BST'de k'ıncı smallest element
public int KthSmallest(TreeNode root, int k)
{
    int count = 0;
    return KthSmallestHelper(root, k, ref count);
}

private int KthSmallestHelper(TreeNode root, int k, ref int count)
{
    if (root == null) return -1;
    
    // Sol (smaller elements)
    int leftResult = KthSmallestHelper(root.Left, k, ref count);
    if (leftResult != -1) return leftResult;
    
    // Root
    count++;
    if (count == k) return root.Val;
    
    // Sağ (larger elements)
    return KthSmallestHelper(root.Right, k, ref count);
}`}
                </CodeBlock>
              </div>
      </section>

      <section className="section">
        <h2>3. Postorder Traversal (Left → Right → Root)</h2>
        <p><strong>Ne zaman kullanılır:</strong> <strong>Tree'yi silmek</strong>, <strong>alt ağaçların sonucunu birleştirmek</strong> için.</p>

        <div className="topic-card">
          <h3>Recursive Implementation</h3>
          <CodeBlock language="csharp">
{`// Postorder: Sol, sağ, Root işle
public void PostorderTraversal(TreeNode root, List<int> result)
{
    if (root == null) return;
    
    PostorderTraversal(root.Left, result);  // Sol alt ağaç (1. adım)
    PostorderTraversal(root.Right, result); // Sağ alt ağaç (2. adım)
    result.Add(root.Val);                   // Root'u işle (3. adım)
}`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>Iterative Implementation (2 Stack kullanarak)</h3>
            <CodeBlock language="csharp">
{`public List<int> PostorderIterative(TreeNode root)
{
    List<int> result = new List<int>();
    if (root == null) return result;
    
    Stack<TreeNode> stack1 = new Stack<TreeNode>();
    Stack<TreeNode> stack2 = new Stack<TreeNode>();
    
    stack1.Push(root);
    
    while (stack1.Count > 0)
    {
        TreeNode current = stack1.Pop();
        stack2.Push(current);
        
        if (current.Left != null)
            stack1.Push(current.Left);
        if (current.Right != null)
            stack1.Push(current.Right);
    }
    
    while (stack2.Count > 0)
    {
        result.Add(stack2.Pop().Val);
    }
    
    return result;
}`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>Postorder Kullanım Alanları</h3>
              <CodeBlock language="csharp">
{`// 1. Tree'yi silme (alt ağaçları önce sil)
public void DeleteTree(TreeNode root)
{
    if (root == null) return;
    
    DeleteTree(root.Left);   // Sol alt ağacı sil
    DeleteTree(root.Right);  // Sağ alt ağacı sil
    
    // Şimdi current node'u güvenle sil
    Console.WriteLine($"Silinen node: {root.Val}");
    root = null;
}

// 2. Directory size hesaplama
public int CalculateDirectorySize(TreeNode root)
{
    if (root == null) return 0;
    
    int leftSize = CalculateDirectorySize(root.Left);   // Sol klasör boyutu
    int rightSize = CalculateDirectorySize(root.Right); // Sağ klasör boyutu
    
    return root.Val + leftSize + rightSize; // Total boyut
}

// 3. Tree height hesaplama
public int CalculateHeight(TreeNode root)
{
    if (root == null) return -1;
    
    int leftHeight = CalculateHeight(root.Left);
    int rightHeight = CalculateHeight(root.Right);
    
    return Math.Max(leftHeight, rightHeight) + 1;
}`}
                </CodeBlock>
              </div>
      </section>

      <section className="section">
        <h2>DFS Traversal'ların Karşılaştırması</h2>

        <CodeBlock language="csharp">
{`public class TraversalDemo
{
    public void DemonstrateTraversals()
    {
        // Sample tree oluştur:
        //       1
        //      / \\
        //     2   3
        //    / \\
        //   4   5
        
        TreeNode root = new TreeNode(1);
        root.Left = new TreeNode(2);
        root.Right = new TreeNode(3);
        root.Left.Left = new TreeNode(4);
        root.Left.Right = new TreeNode(5);
        
        List<int> preorder = new List<int>();
        List<int> inorder = new List<int>();
        List<int> postorder = new List<int>();
        
        PreorderTraversal(root, preorder);
        InorderTraversal(root, inorder);
        PostorderTraversal(root, postorder);
        
        Console.WriteLine($"Preorder:  {string.Join(", ", preorder)}");  // 1, 2, 4, 5, 3
        Console.WriteLine($"Inorder:   {string.Join(", ", inorder)}");   // 4, 2, 5, 1, 3
        Console.WriteLine($"Postorder: {string.Join(", ", postorder)}"); // 4, 5, 2, 3, 1
    }
}`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>Traversal ile Problem Çözme Örnekleri</h2>

        <div className="topic-card">
          <h3>1. Tree'deki Maximum Path Sum</h3>
          <CodeBlock language="csharp">
{`public int MaxPathSum(TreeNode root)
{
    int maxSum = int.MinValue;
    MaxPathSumHelper(root, ref maxSum);
    return maxSum;
}

private int MaxPathSumHelper(TreeNode root, ref int maxSum)
{
    if (root == null) return 0;
    
    // Alt ağaçlardan maksimum contribution'ı al (negatifse 0)
    int leftMax = Math.Max(0, MaxPathSumHelper(root.Left, ref maxSum));
    int rightMax = Math.Max(0, MaxPathSumHelper(root.Right, ref maxSum));
    
    // Current node'dan geçen maksimum path
    int currentPathSum = root.Val + leftMax + rightMax;
    maxSum = Math.Max(maxSum, currentPathSum);
    
    // Parent'a döndürülecek maksimum (tek taraf)
    return root.Val + Math.Max(leftMax, rightMax);
}`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>2. Tree'yi Mirror Etme</h3>
            <CodeBlock language="csharp">
{`public TreeNode MirrorTree(TreeNode root)
{
    if (root == null) return null;
    
    // Alt ağaçları mirror et
    TreeNode leftMirror = MirrorTree(root.Left);
    TreeNode rightMirror = MirrorTree(root.Right);
    
    // Sol ve sağı yer değiştir
    root.Left = rightMirror;
    root.Right = leftMirror;
    
    return root;
}`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>3. Same Tree Kontrolü</h3>
              <CodeBlock language="csharp">
{`public bool IsSameTree(TreeNode p, TreeNode q)
{
    // Base cases
    if (p == null && q == null) return true;
    if (p == null || q == null) return false;
    
    // Current node'ları karşılaştır
    if (p.Val != q.Val) return false;
    
    // Alt ağaçları recursive kontrol et
    return IsSameTree(p.Left, q.Left) && IsSameTree(p.Right, q.Right);
}`}
              </CodeBlock>
            </div>
      </section>

      <section className="section">
        <h2>DFS'in Complexity Analizi</h2>

        <div className="topic-card">
          <h3>Time Complexity: <strong>O(n)</strong></h3>
          <ul>
            <li>Her node'u tam olarak 1 kez ziyaret ederiz</li>
            <li>n = toplam node sayısı</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>Space Complexity: <strong>O(h)</strong></h3>
          <ul>
            <li>Recursion call stack'i tree height'i kadar</li>
            <li>h = tree height</li>
            <li><strong>Best case (balanced):</strong> O(log n)</li>
            <li><strong>Worst case (degenerate):</strong> O(n)</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>DFS Ne Zaman Kullanılır?</h2>

        <div className="topic-card">
          <h3>✅ DFS Kullan Eğer:</h3>
          <ul>
            <li><strong>Tree structure'ı işliyorsan</strong></li>
            <li><strong>Path-based</strong> problemler çözüyorsan</li>
            <li><strong>Bottom-up</strong> hesaplama gerekiyorsa (postorder)</li>
            <li><strong>Memory efficient</strong> solution lazımsa</li>
            <li><strong>Recursive</strong> nature'ı varsa</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>🎯 Hangi DFS Türünü Seç:</h3>
          <ul>
            <li><strong>Preorder:</strong> Tree copying, serialization</li>
            <li><strong>Inorder:</strong> BST'de sorted order, validation</li>
            <li><strong>Postorder:</strong> Tree deletion, size calculation, bottom-up computations</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <p><strong>Next: BFS (Breadth-First Search) - Level-order traversal! 🌊</strong></p>
      </section>

      <Notes topicPath="/dfs" topicTitle="Tree Traversal - DFS (Depth-First Search)" />

      <div className="navigation-links">
        <Link to="/bst" className="nav-button">← BST</Link>
        <Link to="/bfs" className="nav-button">BFS →</Link>
      </div>
    </div>
  );
}

export default DFS;