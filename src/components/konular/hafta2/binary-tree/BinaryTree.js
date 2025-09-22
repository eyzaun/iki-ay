import React from 'react';
import Notes from '../../../notes/Notes';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import CodeBlock from '../../../ui/CodeBlock';

function BinaryTree() {
  return (
    <div className="app-container">
      <SEO
        title="Binary Tree - Ağaç Veri Yapısının Temeli | İki Ay"
        description="Binary Tree veri yapısını öğren. Node yapısı, tree traversal, recursive algoritmalar, complete/perfect tree türleri ve pratik örnekler."
        canonical="https://iki-ay.web.app/binary-tree"
        og={{ url: 'https://iki-ay.web.app/binary-tree' }}
      />

      <div className="content-header">
        <h1>Binary Tree - Ağaç Veri Yapısının Temeli</h1>
        <Link to="/hafta2" className="back-link">← 2. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>Binary Tree Nedir? Neden Bu Kadar Önemli?</h2>
        <p>
          Binary Tree'yi <strong>aile soybağacı</strong> gibi düşün. Her kişinin en fazla <strong>2 çocuğu</strong> olabilir (sol ve sağ).
          Bu basit kural, inanılmaz güçlü veri yapıları yaratmamızı sağlar.
        </p>

        <h3>Gerçek Hayattan Benzetme: Karar Ağacı</h3>
        <p>Düşün ki kahvaltıda ne yiyeceğine karar veriyorsun:</p>
        <CodeBlock language="csharp">
{`        Acıktın mı?
       /            \\
    Evet             Hayır
   /    \\              |
Tatlı   Tuzlu      Bir şey içme
 |       |
Krep   Omlet`}
          </CodeBlock>
        <p>İşte bu bir Binary Tree! Her <strong>düğümde (node)</strong> bir karar var, en fazla <strong>2 seçenek</strong> var.</p>
      </section>

      <section className="section">
        <h2>Binary Tree'nin Anatomisi</h2>

        <h3>Temel Kavramlar:</h3>
        <ul>
          <li><strong>Root (Kök):</strong> En üstteki node - başlangıç noktası</li>
          <li><strong>Parent (Ebeveyn):</strong> Üstteki node</li>
          <li><strong>Child (Çocuk):</strong> Alttaki node'lar (sol/sağ)</li>
          <li><strong>Leaf (Yaprak):</strong> Çocuğu olmayan node'lar</li>
          <li><strong>Height (Yükseklik):</strong> Root'tan en derin yaprak'a kadar olan seviye sayısı</li>
          <li><strong>Depth (Derinlik):</strong> Bir node'un root'a olan uzaklığı</li>
        </ul>

        <h3>Görsel Örnek:</h3>
        <CodeBlock language="csharp">
{`        A (Root, Depth=0)
       / \\
      B   C (Depth=1)
     / \\   \\
    D   E   F (Depth=2, Leaves)`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>Node Yapısı - C# Implementation</h2>

        <CodeBlock language="csharp">
{`// Binary Tree Node sınıfı
public class TreeNode
{
    public int Val { get; set; }
    public TreeNode Left { get; set; }    // Sol çocuk
    public TreeNode Right { get; set; }   // Sağ çocuk
    
    public TreeNode(int val = 0)
    {
        Val = val;
        Left = null;
        Right = null;
    }
    
    // Helper method
    public bool IsLeaf => Left == null && Right == null;
}

// Generic version
public class TreeNode<T>
{
    public T Data { get; set; }
    public TreeNode<T> Left { get; set; }
    public TreeNode<T> Right { get; set; }
    
    public TreeNode(T data)
    {
        Data = data;
        Left = null;
        Right = null;
    }
}`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>Temel Binary Tree İşlemleri</h2>

        <div className="topic-card">
          <h3>1. Tree Oluşturma</h3>
          <CodeBlock language="csharp">
{`public class BinaryTree
{
    public TreeNode Root { get; set; }
    
    // Manuel tree oluşturma
    public void CreateSampleTree()
    {
        Root = new TreeNode(1);
        Root.Left = new TreeNode(2);
        Root.Right = new TreeNode(3);
        Root.Left.Left = new TreeNode(4);
        Root.Left.Right = new TreeNode(5);
        
        //      1
        //     / \\
        //    2   3
        //   / \\
        //  4   5
    }
}`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>2. Tree'de Arama (Search)</h3>
            <CodeBlock language="csharp">
{`// Herhangi bir değeri ara - O(n)
public bool Search(TreeNode root, int target)
{
    if (root == null) return false;
    
    if (root.Val == target) return true;
    
    // Sol ve sağ alt ağaçlarda ara
    return Search(root.Left, target) || Search(root.Right, target);
}`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>3. Tree'nin Yüksekliğini Bulma</h3>
              <CodeBlock language="csharp">
{`// Tree'nin height'ini hesapla - O(n)
public int GetHeight(TreeNode root)
{
    if (root == null) return -1; // Boş tree'nin height'i -1
    
    int leftHeight = GetHeight(root.Left);
    int rightHeight = GetHeight(root.Right);
    
    return Math.Max(leftHeight, rightHeight) + 1;
}`}
                </CodeBlock>
              </div>

              <div className="topic-card">
                <h3>4. Node Sayısını Sayma</h3>
                <CodeBlock language="csharp">
{`// Toplam node sayısı - O(n)
public int CountNodes(TreeNode root)
{
    if (root == null) return 0;
    
    return 1 + CountNodes(root.Left) + CountNodes(root.Right);
}`}
                  </CodeBlock>
                </div>

                <div className="topic-card">
                  <h3>5. Leaf Node'ları Sayma</h3>
                  <CodeBlock language="csharp">
{`// Yaprak node sayısı - O(n)
public int CountLeaves(TreeNode root)
{
    if (root == null) return 0;
    
    if (root.IsLeaf) return 1;
    
    return CountLeaves(root.Left) + CountLeaves(root.Right);
}`}
                    </CodeBlock>
                  </div>
        </section>

        <section className="section">
          <h2>Binary Tree Türleri</h2>

          <div className="topic-card">
            <h3>1. Full Binary Tree</h3>
            <p>Her node'un <strong>0 veya 2 çocuğu</strong> var (1 çocuk yok):</p>
            <CodeBlock language="csharp">
{`      1
     / \\
    2   3
   / \\
  4   5`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>2. Complete Binary Tree</h3>
              <p>Son seviye hariç <strong>tüm seviyeler dolu</strong>, son seviye <strong>soldan dolu</strong>:</p>
              <CodeBlock language="csharp">
{`      1
     / \\
    2   3
   / \\ /
  4  5 6`}
                </CodeBlock>
              </div>

              <div className="topic-card">
                <h3>3. Perfect Binary Tree</h3>
                <p><strong>Tüm seviyeler tamamen dolu</strong>:</p>
                <CodeBlock language="csharp">
{`      1
     / \\
    2   3
   /|\\ |\\ 
  4 5 6 7`}
                  </CodeBlock>
                </div>

                <div className="topic-card">
                  <h3>4. Balanced Binary Tree</h3>
                  <p>Her node için <strong>sol ve sağ alt ağaçların height farkı ≤ 1</strong>:</p>
                  <CodeBlock language="csharp">
{`// Balanced tree kontrolü
public bool IsBalanced(TreeNode root)
{
    if (root == null) return true;
    
    int leftHeight = GetHeight(root.Left);
    int rightHeight = GetHeight(root.Right);
    
    // Height farkı 1'den fazla olmamalı
    if (Math.Abs(leftHeight - rightHeight) > 1)
        return false;
    
    // Alt ağaçlar da balanced olmalı
    return IsBalanced(root.Left) && IsBalanced(root.Right);
}`}
                    </CodeBlock>
                  </div>
          </section>

          <section className="section">
            <h2>Binary Tree'nin Gerçek Hayat Kullanımları</h2>

            <div className="topic-card">
              <h3>1. Dosya Sistemi</h3>
              <CodeBlock language="csharp">
{`    Root/
    /    \\
  Users   System
  /  \\      |
 Ali Ayşe  Logs
 |
Documents`}
                </CodeBlock>
              </div>

              <div className="topic-card">
                <h3>2. Mathematical Expression Tree</h3>
                <CodeBlock language="csharp">
{`Ifade: (2 + 3) * 4

      *
     / \\
    +   4
   / \\
  2   3`}
                  </CodeBlock>
                </div>

                <div className="topic-card">
                  <h3>3. Decision Tree (Karar Ağacı)</h3>
                  <CodeBlock language="csharp">
{`public class DecisionTree
{
    public class DecisionNode
    {
        public string Question { get; set; }
        public DecisionNode YesChild { get; set; }
        public DecisionNode NoChild { get; set; }
        public string Result { get; set; } // Leaf node'lar için
    }
    
    // Basit karar ağacı örneği
    public DecisionNode BuildWeatherDecisionTree()
    {
        var root = new DecisionNode { Question = "Hava güneşli mi?" };
        
        root.YesChild = new DecisionNode { Question = "Sıcak mı?" };
        root.YesChild.YesChild = new DecisionNode { Result = "Plaja git!" };
        root.YesChild.NoChild = new DecisionNode { Result = "Park'ta yürü" };
        
        root.NoChild = new DecisionNode { Question = "Yağmur yağıyor mu?" };
        root.NoChild.YesChild = new DecisionNode { Result = "Evde kal" };
        root.NoChild.NoChild = new DecisionNode { Result = "Şemsiye al" };
        
        return root;
    }
}`}
                    </CodeBlock>
                  </div>
            </section>

            <section className="section">
              <h2>Binary Tree vs Diğer Veri Yapıları</h2>

              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Özellik</th>
                    <th>Array</th>
                    <th>LinkedList</th>
                    <th>Binary Tree</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Arama</strong></td>
                    <td>O(n)</td>
                    <td>O(n)</td>
                    <td>O(n) genel, O(log n) BST'de</td>
                  </tr>
                  <tr>
                    <td><strong>Ekleme</strong></td>
                    <td>O(n)</td>
                    <td>O(1) başa</td>
                    <td>O(log n) balanced'da</td>
                  </tr>
                  <tr>
                    <td><strong>Silme</strong></td>
                    <td>O(n)</td>
                    <td>O(n)</td>
                    <td>O(log n) balanced'da</td>
                  </tr>
                  <tr>
                    <td><strong>Hierarchical</strong></td>
                    <td>❌</td>
                    <td>❌</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td><strong>Sorted order</strong></td>
                    <td>Manuel</td>
                    <td>Manual</td>
                    <td>Otomatik (BST'de)</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="section">
              <h2>Binary Tree'nin Avantajları</h2>

              <div className="topic-card">
                <h3>✅ Güçlü Yanları:</h3>
                <ol>
                  <li><strong>Hierarchical structure:</strong> Parent-child ilişkileri doğal</li>
                  <li><strong>Recursive algorithms:</strong> Çok elegant çözümler</li>
                  <li><strong>Efficient operations:</strong> Balanced tree'lerde O(log n)</li>
                  <li><strong>Flexible:</strong> Birçok probleme uyarlanabilir</li>
                </ol>
              </div>

              <div className="topic-card">
                <h3>❌ Zayıf Yanları:</h3>
                <ol>
                  <li><strong>Unbalanced tree risk:</strong> Worst case O(n) olabilir</li>
                  <li><strong>Extra memory:</strong> Pointer'lar için ekstra yer</li>
                  <li><strong>No cache locality:</strong> LinkedList gibi dağınık bellek</li>
                  <li><strong>Complex implementation:</strong> Array'den daha karmaşık</li>
                </ol>
              </div>
            </section>

            <section className="section">
              <h2>Önemli Binary Tree Properties</h2>

              <div className="topic-card">
                <h3>1. Recursive Nature</h3>
                <p>Her binary tree, daha küçük binary tree'lerin birleşimi:</p>
                <CodeBlock language="csharp">
{`// Recursive pattern
public void ProcessTree(TreeNode root)
{
    if (root == null) return; // Base case
    
    // Current node'u işle
    Console.WriteLine(root.Val);
    
    // Alt ağaçları recursive işle
    ProcessTree(root.Left);
    ProcessTree(root.Right);
}`}
                  </CodeBlock>
                </div>

                <div className="topic-card">
                  <h3>2. Mathematical Properties</h3>
                  <ul>
                    <li><strong>n node'lu complete binary tree'nin height'i:</strong> ⌊log₂(n)⌋</li>
                    <li><strong>Height h'lı perfect binary tree'deki node sayısı:</strong> 2^(h+1) - 1</li>
                    <li><strong>n node'lu binary tree'nin maksimum height'i:</strong> n-1 (degenerate case)</li>
                  </ul>
                </div>
              </section>

              <section className="section">
                <h2>Next Steps: Tree Traversal</h2>
                <p>
                  Binary Tree'yi anladığında <strong>Tree Traversal</strong> (ağaç gezinme) teknikleri:
                </p>
                <ul>
                  <li><strong>Preorder:</strong> Root → Left → Right</li>
                  <li><strong>Inorder:</strong> Left → Root → Right</li>
                  <li><strong>Postorder:</strong> Left → Right → Root</li>
                  <li><strong>Level-order (BFS):</strong> Seviye seviye</li>
                </ul>
                <p>Bu traversal teknikleri, tree'deki tüm algoritmaların temelini oluşturur!</p>
                <p><strong>Binary Tree, computer science'ın en fundamental kavramlarından biri. İyi anlamak, BST, AVL Tree, Heap gibi gelişmiş yapıların kapısını açar! 🌳</strong></p>
              </section>

              <Notes topicPath="/binarytree" topicTitle="Binary Tree - Ağaç Veri Yapısının Temeli" />

      <div className="navigation-links">
                <Link to="/hafta2" className="nav-button">← 2. Hafta</Link>
                <Link to="/bst" className="nav-button">BST →</Link>
              </div>
            </div>
  );
}

export default BinaryTree;