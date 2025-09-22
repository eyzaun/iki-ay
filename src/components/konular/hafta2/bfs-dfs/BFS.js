import React from 'react';
import Notes from '../../../notes/Notes';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import CodeBlock from '../../../ui/CodeBlock';

function BFS() {
  return (
    <div className="app-container">
      <SEO
        title="BFS (Breadth-First Search) ve Graph Yapıları | İki Ay"
        description="BFS algoritmasını öğren. Level-order traversal, queue kullanımı, graph temelleri, adjacency list/matrix, gerçek hayat uygulamaları."
        canonical="https://iki-ay.web.app/bfs"
        og={{ url: 'https://iki-ay.web.app/bfs' }}
      />

      <div className="content-header">
        <h1>BFS (Breadth-First Search) ve Graph Yapıları</h1>
        <Link to="/hafta2" className="back-link">← 2. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>BFS Nedir? DFS'den Farkı Ne?</h2>
        <p>
          BFS, <strong>seviye seviye (level-by-level)</strong> gezinme tekniğidir. Tıpkı <strong>taş havuza atıldığında</strong> oluşan dalgalar gibi - merkez noktadan başlayıp dışa doğru genişler.
        </p>

        <h3>Gerçek Hayattan Benzetme: Salgın Yayılımı</h3>
        <p>Düşün ki bir şehirde salgın başladı:</p>
        <ul>
          <li><strong>BFS:</strong> Salgın önce <strong>komşu mahallelere</strong>, sonra <strong>daha uzak bölgelere</strong> yayılır</li>
          <li><strong>DFS:</strong> Salgın <strong>bir yol takip ederek</strong> şehrin en ucuna gider, sonra geri dönüp başka yolları dener</li>
        </ul>

        <h3>Görsel Karşılaştırma:</h3>
        <CodeBlock language="csharp">
{`Tree:
       1
      / \\
     2   3
    / \\ / \\
   4 5 6  7

DFS (Preorder): 1 → 2 → 4 → 5 → 3 → 6 → 7  (Derinlemesine)
BFS (Level):    1 → 2 → 3 → 4 → 5 → 6 → 7  (Seviye seviye)`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>BFS'in Kalbi: Queue Kullanımı</h2>
        <p>BFS <strong>her zaman Queue</strong> kullanır! DFS Stack kullanırken, BFS Queue kullanır.</p>

        <div className="topic-card">
          <h3>Basic BFS - Level Order Traversal</h3>
          <CodeBlock language="csharp">
{`// BFS - Level Order Traversal
public List<int> BFS(TreeNode root)
{
    List<int> result = new List<int>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new Queue<TreeNode>();
    queue.Enqueue(root);
    
    while (queue.Count > 0)
    {
        TreeNode current = queue.Dequeue(); // FIFO - İlk giren ilk çıkar
        result.Add(current.Val);
        
        // Çocukları kuyruğa ekle (sol önce, sağ sonra)
        if (current.Left != null)
            queue.Enqueue(current.Left);
        if (current.Right != null)
            queue.Enqueue(current.Right);
    }
    
    return result;
}`}
            </CodeBlock>
          </div>
      </section>

      <section className="section">
        <h2>Level-Order Traversal Variations</h2>

        <div className="topic-card">
          <h3>1. Seviyeli BFS (Her Seviyeyi Ayrı Listede)</h3>
          <CodeBlock language="csharp">
{`public List<List<int>> LevelOrder(TreeNode root)
{
    List<List<int>> result = new List<List<int>>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new Queue<TreeNode>();
    queue.Enqueue(root);
    
    while (queue.Count > 0)
    {
        int levelSize = queue.Count; // Mevcut seviyedeki node sayısı
        List<int> currentLevel = new List<int>();
        
        // Bu seviyedeki tüm node'ları işle
        for (int i = 0; i < levelSize; i++)
        {
            TreeNode current = queue.Dequeue();
            currentLevel.Add(current.Val);
            
            // Sonraki seviyenin node'larını ekle
            if (current.Left != null)
                queue.Enqueue(current.Left);
            if (current.Right != null)
                queue.Enqueue(current.Right);
        }
        
        result.Add(currentLevel);
    }
    
    return result;
}

// Örnek çıktı: [[1], [2,3], [4,5,6,7]]`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>2. Zigzag Level Order</h3>
            <CodeBlock language="csharp">
{`public List<List<int>> ZigzagLevelOrder(TreeNode root)
{
    List<List<int>> result = new List<List<int>>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new Queue<TreeNode>();
    queue.Enqueue(root);
    bool leftToRight = true;
    
    while (queue.Count > 0)
    {
        int levelSize = queue.Count;
        List<int> currentLevel = new List<int>();
        
        for (int i = 0; i < levelSize; i++)
        {
            TreeNode current = queue.Dequeue();
            
            if (leftToRight)
                currentLevel.Add(current.Val);
            else
                currentLevel.Insert(0, current.Val); // Başa ekle (reverse)
            
            if (current.Left != null)
                queue.Enqueue(current.Left);
            if (current.Right != null)
                queue.Enqueue(current.Right);
        }
        
        result.Add(currentLevel);
        leftToRight = !leftToRight; // Yön değiştir
    }
    
    return result;
}

// Örnek çıktı: [[1], [3,2], [4,5,6,7]]`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>3. Right Side View</h3>
              <CodeBlock language="csharp">
{`// Tree'nin sağdan görünümü
public List<int> RightSideView(TreeNode root)
{
    List<int> result = new List<int>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new Queue<TreeNode>();
    queue.Enqueue(root);
    
    while (queue.Count > 0)
    {
        int levelSize = queue.Count;
        
        for (int i = 0; i < levelSize; i++)
        {
            TreeNode current = queue.Dequeue();
            
            // Son node (sağdaki) görünür
            if (i == levelSize - 1)
                result.Add(current.Val);
            
            if (current.Left != null)
                queue.Enqueue(current.Left);
            if (current.Right != null)
                queue.Enqueue(current.Right);
        }
    }
    
    return result;
}`}
                </CodeBlock>
              </div>
      </section>

      <section className="section">
        <h2>Graph Veri Yapısı</h2>
        <p>Graph, <strong>node'ların (vertex) edge'lerle bağlandığı</strong> yapıdır. Tree'nin genelleştirilmiş hali!</p>

        <div className="topic-card">
          <h3>Graph vs Tree:</h3>
          <ul>
            <li><strong>Tree:</strong> Cycle yok, connected, n-1 edge</li>
            <li><strong>Graph:</strong> Cycle olabilir, disconnected olabilir, any number of edges</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>Graph Türleri:</h3>
          <ol>
            <li><strong>Directed/Undirected:</strong> Ok yönlü mü?</li>
            <li><strong>Weighted/Unweighted:</strong> Kenar ağırlıkları var mı?</li>
            <li><strong>Connected/Disconnected:</strong> Tüm node'lar erişilebilir mi?</li>
          </ol>
        </div>
      </section>

      <section className="section">
        <h2>Graph Representation (Temsil Yöntemleri)</h2>

        <div className="topic-card">
          <h3>1. Adjacency List (En Yaygın)</h3>
          <CodeBlock language="csharp">
{`// Adjacency List ile Graph
public class Graph
{
    private Dictionary<int, List<int>> adjList;
    
    public Graph()
    {
        adjList = new Dictionary<int, List<int>>();
    }
    
    public void AddVertex(int vertex)
    {
        if (!adjList.ContainsKey(vertex))
            adjList[vertex] = new List<int>();
    }
    
    public void AddEdge(int source, int destination)
    {
        AddVertex(source);
        AddVertex(destination);
        
        adjList[source].Add(destination);
        // Undirected graph için:
        // adjList[destination].Add(source);
    }
    
    public List<int> GetNeighbors(int vertex)
    {
        return adjList.ContainsKey(vertex) ? adjList[vertex] : new List<int>();
    }
}`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>2. Adjacency Matrix</h3>
            <CodeBlock language="csharp">
{`// Matrix ile Graph
public class GraphMatrix
{
    private int[,] matrix;
    private int vertices;
    
    public GraphMatrix(int vertices)
    {
        this.vertices = vertices;
        matrix = new int[vertices, vertices];
    }
    
    public void AddEdge(int source, int destination, int weight = 1)
    {
        matrix[source, destination] = weight;
        // Undirected için:
        // matrix[destination, source] = weight;
    }
    
    public bool HasEdge(int source, int destination)
    {
        return matrix[source, destination] != 0;
    }
}`}
              </CodeBlock>
            </div>
      </section>

      <section className="section">
        <h2>Graph'ta BFS Implementation</h2>

        <div className="topic-card">
          <h3>Graph'ta BFS - En Kısa Yol Bulur (Unweighted)</h3>
          <CodeBlock language="csharp">
{`public List<int> BFSGraph(Graph graph, int startVertex)
{
    List<int> result = new List<int>();
    HashSet<int> visited = new HashSet<int>();
    Queue<int> queue = new Queue<int>();
    
    queue.Enqueue(startVertex);
    visited.Add(startVertex);
    
    while (queue.Count > 0)
    {
        int current = queue.Dequeue();
        result.Add(current);
        
        // Komşuları kontrol et
        foreach (int neighbor in graph.GetNeighbors(current))
        {
            if (!visited.Contains(neighbor))
            {
                visited.Add(neighbor);
                queue.Enqueue(neighbor);
            }
        }
    }
    
    return result;
}`}
            </CodeBlock>
          </div>
      </section>

      <section className="section">
        <h2>Graph'ta DFS Implementation</h2>

        <div className="topic-card">
          <h3>DFS - Recursive</h3>
          <CodeBlock language="csharp">
{`public List<int> DFSGraph(Graph graph, int startVertex, HashSet<int> visited = null)
{
    if (visited == null)
        visited = new HashSet<int>();
    
    List<int> result = new List<int>();
    
    visited.Add(startVertex);
    result.Add(startVertex);
    
    foreach (int neighbor in graph.GetNeighbors(startVertex))
    {
        if (!visited.Contains(neighbor))
        {
            result.AddRange(DFSGraph(graph, neighbor, visited));
        }
    }
    
    return result;
}`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>DFS - Iterative (Stack Kullanarak)</h3>
            <CodeBlock language="csharp">
{`public List<int> DFSIterative(Graph graph, int startVertex)
{
    List<int> result = new List<int>();
    HashSet<int> visited = new HashSet<int>();
    Stack<int> stack = new Stack<int>();
    
    stack.Push(startVertex);
    
    while (stack.Count > 0)
    {
        int current = stack.Pop();
        
        if (!visited.Contains(current))
        {
            visited.Add(current);
            result.Add(current);
            
            // Komşuları ters sırada ekle (düzen için)
            var neighbors = graph.GetNeighbors(current);
            for (int i = neighbors.Count - 1; i >= 0; i--)
            {
                if (!visited.Contains(neighbors[i]))
                    stack.Push(neighbors[i]);
            }
        }
    }
    
    return result;
}`}
              </CodeBlock>
            </div>
      </section>

      <section className="section">
        <h2>BFS'in Gerçek Hayat Uygulamaları</h2>

        <div className="topic-card">
          <h3>1. Shortest Path (En Kısa Yol)</h3>
          <CodeBlock language="csharp">
{`// Unweighted graph'ta en kısa yol
public int ShortestPath(Graph graph, int start, int target)
{
    if (start == target) return 0;
    
    Queue<int> queue = new Queue<int>();
    HashSet<int> visited = new HashSet<int>();
    Dictionary<int, int> distance = new Dictionary<int, int>();
    
    queue.Enqueue(start);
    visited.Add(start);
    distance[start] = 0;
    
    while (queue.Count > 0)
    {
        int current = queue.Dequeue();
        
        foreach (int neighbor in graph.GetNeighbors(current))
        {
            if (!visited.Contains(neighbor))
            {
                visited.Add(neighbor);
                distance[neighbor] = distance[current] + 1;
                queue.Enqueue(neighbor);
                
                if (neighbor == target)
                    return distance[neighbor];
            }
        }
    }
    
    return -1; // Path bulunamadı
}`}
            </CodeBlock>
          </div>

          <div className="topic-card">
            <h3>2. Connected Components</h3>
            <CodeBlock language="csharp">
{`// Graph'taki bağlı bileşen sayısı
public int CountConnectedComponents(Graph graph, List<int> allVertices)
{
    HashSet<int> visited = new HashSet<int>();
    int components = 0;
    
    foreach (int vertex in allVertices)
    {
        if (!visited.Contains(vertex))
        {
            BFSComponent(graph, vertex, visited);
            components++;
        }
    }
    
    return components;
}

private void BFSComponent(Graph graph, int start, HashSet<int> visited)
{
    Queue<int> queue = new Queue<int>();
    queue.Enqueue(start);
    visited.Add(start);
    
    while (queue.Count > 0)
    {
        int current = queue.Dequeue();
        
        foreach (int neighbor in graph.GetNeighbors(current))
        {
            if (!visited.Contains(neighbor))
            {
                visited.Add(neighbor);
                queue.Enqueue(neighbor);
            }
        }
    }
}`}
              </CodeBlock>
            </div>

            <div className="topic-card">
              <h3>3. Level Distance (Belirli Mesafedeki Node'lar)</h3>
              <CodeBlock language="csharp">
{`// Belirli mesafedeki tüm node'ları bul
public List<int> NodesAtDistance(Graph graph, int start, int targetDistance)
{
    List<int> result = new List<int>();
    Queue<int> queue = new Queue<int>();
    HashSet<int> visited = new HashSet<int>();
    Dictionary<int, int> distance = new Dictionary<int, int>();
    
    queue.Enqueue(start);
    visited.Add(start);
    distance[start] = 0;
    
    while (queue.Count > 0)
    {
        int current = queue.Dequeue();
        
        if (distance[current] == targetDistance)
        {
            result.Add(current);
        }
        
        if (distance[current] < targetDistance)
        {
            foreach (int neighbor in graph.GetNeighbors(current))
            {
                if (!visited.Contains(neighbor))
                {
                    visited.Add(neighbor);
                    distance[neighbor] = distance[current] + 1;
                    queue.Enqueue(neighbor);
                }
            }
        }
    }
    
    return result;
}`}
                </CodeBlock>
              </div>
      </section>

      <section className="section">
        <h2>BFS vs DFS - Ne Zaman Hangisi?</h2>

        <div className="topic-card">
          <h3>Karşılaştırma Tablosu</h3>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Özellik</th>
                <th>BFS</th>
                <th>DFS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Veri Yapısı</strong></td>
                <td>Queue</td>
                <td>Stack/Recursion</td>
              </tr>
              <tr>
                <td><strong>Memory</strong></td>
                <td>O(branching factor)</td>
                <td>O(depth)</td>
              </tr>
              <tr>
                <td><strong>Shortest Path</strong></td>
                <td>✅ Garanti</td>
                <td>❌ Garanti yok</td>
              </tr>
              <tr>
                <td><strong>Space Complexity</strong></td>
                <td>Genelde daha fazla</td>
                <td>Genelde daha az</td>
              </tr>
              <tr>
                <td><strong>Use Cases</strong></td>
                <td>Level-order, shortest path</td>
                <td>Path finding, topological sort</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>BFS vs DFS Kullanım Alanları</h2>

        <div className="topic-card">
          <h3>✅ BFS Kullan Eğer:</h3>
          <ul>
            <li><strong>Shortest path</strong> (unweighted) buluyorsan</li>
            <li><strong>Level-order</strong> işlem gerekiyorsa</li>
            <li><strong>Minimum steps</strong> problemi çözüyorsan</li>
            <li><strong>Connected components</strong> sayıyorsan</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>✅ DFS Kullan Eğer:</h3>
          <ul>
            <li><strong>Path existence</strong> kontrol ediyorsan</li>
            <li><strong>Cycle detection</strong> yapıyorsan</li>
            <li><strong>Topological sorting</strong> gerekiyorsa</li>
            <li><strong>Memory</strong> sınırlı ise</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Complexity Analizi</h2>

        <div className="topic-card">
          <h3>Time Complexity: <strong>O(V + E)</strong></h3>
          <ul>
            <li>V = vertex (node) sayısı</li>
            <li>E = edge sayısı</li>
            <li>Her vertex ve edge bir kez ziyaret edilir</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>Space Complexity:</h3>
          <ul>
            <li><strong>BFS:</strong> O(V) - Queue için</li>
            <li><strong>DFS:</strong> O(V) - Stack/Recursion için</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <p><strong>Next: Sorting Algorithms (MergeSort, QuickSort)! 🔄</strong></p>
      </section>

      <Notes topicPath="/bfs" topicTitle="BFS (Breadth-First Search) ve Graph Yapıları" />

      <div className="navigation-links">
        <Link to="/dfs" className="nav-button">← DFS</Link>
        <Link to="/sorting" className="nav-button">Sorting →</Link>
      </div>
    </div>
  );
}

export default BFS;