import React from 'react';
import Notes from '../../../notes/Notes';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import CodeBlock from '../../../ui/CodeBlock';

function UnionFind() {
  return (
    <div className="app-container">
      <SEO
        title="Union-Find (Disjoint Set) - Grup Yönetimi | İki Ay"
        description="Union-Find veri yapısını öğren. Dynamic connectivity, Path compression, Union by rank, Kruskal's MST."
        canonical="https://iki-ay.web.app/union-find"
        og={{ url: 'https://iki-ay.web.app/union-find' }}
      />

      <div className="content-header">
        <h1>Union-Find (Disjoint Set) - Grup Yönetimi</h1>
  <Link to="/hafta3" className="back-link">3. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>Union-Find Nedir? Dynamic Connectivity Problemi</h2>
        <p>
          Union-Find, <strong>"İki eleman aynı grupta mı?" sorusunu neredeyse O(1) zamanda</strong> cevaplayan veri yapısı.
          Dynamic connectivity problemlerinin şampiyonu!
        </p>

        <h3>Gerçek Hayattan Benzetme: Sosyal Ağ</h3>
        <p>Düşün ki Facebook'ta arkadaşlık ağını yönetiyorsun:</p>
        <ul>
          <li><strong>Find(x):</strong> "Ali ile Ayşe aynı arkadaş grubunda mı?"</li>
          <li><strong>Union(x, y):</strong> "Mehmet ile Fatma'nın gruplarını birleştir"</li>
          <li><strong>Connected:</strong> "Bu iki kişi birbirini tanıyor mu (dolaylı yoldan)?"</li>
          <li><strong>Dynamic:</strong> Arkadaşlıklar sürekli değişiyor!</li>
        </ul>
        <p>İşte Union-Find de tam böyle çalışır!</p>
      </section>

      <section className="section">
        <h2>Temel Operasyonlar</h2>

        <div className="topic-card">
          <h3>1. Find(x) - Elemanın Grubunu Bul</h3>
          <p>Root parent'ı bulana kadar yukarı çık</p>
          <CodeBlock language="csharp">
{`public int Find(int x)
{
    while (parent[x] != x) // Root'a kadar git
    {
        x = parent[x];
    }
    return x;
}

// Iterative approach - basit ama yavaş`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Union(x, y) - İki Grubu Birleştir</h3>
          <p>İki farklı grupsa birini diğerinin altına bağla</p>
          <CodeBlock language="csharp">
{`public void Union(int x, int y)
{
    int rootX = Find(x);
    int rootY = Find(y);
    
    if (rootX != rootY) // Farklı gruplardan
    {
        parent[rootX] = rootY; // Birini diğerinin altına bağla
        components--;          // Grup sayısı azaldı
    }
}

// Basic union - tree çok derin olabilir!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. Connected(x, y) - Aynı Grupta mı?</h3>
          <p>Root'ları aynı mı kontrol et</p>
          <CodeBlock language="csharp">
{`public bool Connected(int x, int y)
{
    return Find(x) == Find(y);
}

// O(1) amortized time with optimizations!`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Basic Union-Find Implementation</h2>

        <div className="topic-card">
          <h3>Temel Sınıf</h3>
          <CodeBlock language="csharp">
{`public class BasicUnionFind
{
    private int[] parent;
    private int components;
    
    public BasicUnionFind(int n)
    {
        parent = new int[n];
        components = n;
        
        // Başlangıçta herkes kendi parent'ı
        for (int i = 0; i < n; i++)
        {
            parent[i] = i;
        }
    }
    
    public int Find(int x)
    {
        while (parent[x] != x)
            x = parent[x];
        return x;
    }
    
    public void Union(int x, int y)
    {
        int rootX = Find(x);
        int rootY = Find(y);
        
        if (rootX != rootY)
        {
            parent[rootX] = rootY;
            components--;
        }
    }
    
    public bool Connected(int x, int y) => Find(x) == Find(y);
    public int ComponentCount => components;
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>Problemi: Tree Çok Derin Olabilir!</h3>
          <CodeBlock language="csharp">
{`// Union işlemleri sonrası:
// 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10
// Find(10) = O(n) time - çok yavaş!

// Çözüm: Optimizations!`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Optimization 1: Union by Rank/Size</h2>
        <p><strong>"Küçük tree'yi büyük tree'nin altına bağla"</strong></p>

        <div className="topic-card">
          <h3>Union by Rank</h3>
          <CodeBlock language="csharp">
{`public class UnionFindByRank
{
    private int[] parent;
    private int[] rank;    // Tree'nin yüksekliği
    private int components;
    
    public UnionFindByRank(int n)
    {
        parent = new int[n];
        rank = new int[n];
        components = n;
        
        for (int i = 0; i < n; i++)
        {
            parent[i] = i;
            rank[i] = 0; // Başlangıçta hepsi leaf
        }
    }
    
    public int Find(int x)
    {
        while (parent[x] != x)
            x = parent[x];
        return x;
    }
    
    public void Union(int x, int y)
    {
        int rootX = Find(x);
        int rootY = Find(y);
        
        if (rootX == rootY) return;
        
        // Rank'ı küçük olanı büyük olanın altına bağla
        if (rank[rootX] < rank[rootY])
        {
            parent[rootX] = rootY;
        }
        else if (rank[rootX] > rank[rootY])
        {
            parent[rootY] = rootX;
        }
        else
        {
            parent[rootY] = rootX;
            rank[rootX]++; // Aynı rank'taysa birinin rank'ını artır
        }
        
        components--;
    }
    
    public bool Connected(int x, int y) => Find(x) == Find(y);
    public int ComponentCount => components;
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>Union by Size</h3>
          <CodeBlock language="csharp">
{`public class UnionFindBySize
{
    private int[] parent;
    private int[] size;
    private int components;
    
    public UnionFindBySize(int n)
    {
        parent = new int[n];
        size = new int[n];
        components = n;
        
        for (int i = 0; i < n; i++)
        {
            parent[i] = i;
            size[i] = 1;
        }
    }
    
    public void Union(int x, int y)
    {
        int rootX = Find(x);
        int rootY = Find(y);
        
        if (rootX == rootY) return;
        
        // Küçük tree'yi büyük tree'nin altına bağla
        if (size[rootX] < size[rootY])
        {
            parent[rootX] = rootY;
            size[rootY] += size[rootX];
        }
        else
        {
            parent[rootY] = rootX;
            size[rootX] += size[rootY];
        }
        
        components--;
    }
    
    public int GetComponentSize(int x) => size[Find(x)];
}`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Optimization 2: Path Compression</h2>
        <p><strong>"Find sırasında tree'yi düzleştir"</strong></p>

        <div className="topic-card">
          <h3>Recursive Path Compression</h3>
          <CodeBlock language="csharp">
{`public int Find(int x)
{
    if (parent[x] != x)
    {
        parent[x] = Find(parent[x]); // Recursive compression
    }
    return parent[x];
}

// Tüm path boyunca node'ları direkt root'a bağlar!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>Iterative Path Compression</h3>
          <CodeBlock language="csharp">
{`public int Find(int x)
{
    int root = x;
    while (parent[root] != root)
        root = parent[root];
    
    // Path'i compress et
    while (x != root)
    {
        int next = parent[x];
        parent[x] = root;
        x = next;
    }
    
    return root;
}

// Stack overflow riski yok`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>Görsel: Path Compression</h3>
          <CodeBlock language="csharp">
{`// Before Find(7):
//     1
//    / \
//   2   5
//  /   / \
// 3   6   8
// |   |
// 4   7

// After Find(7) with Path Compression:
//     1
//    /|\
//   2 3 4 5 7
//      /|\
//     6 8`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Optimized Union-Find (En İyi)</h2>

        <div className="topic-card">
          <h3>Union by Size + Path Compression</h3>
          <CodeBlock language="csharp">
{`public class OptimizedUnionFind
{
    private int[] parent;
    private int[] size;
    private int components;
    
    public OptimizedUnionFind(int n)
    {
        parent = new int[n];
        size = new int[n];
        components = n;
        
        for (int i = 0; i < n; i++)
        {
            parent[i] = i;
            size[i] = 1;
        }
    }
    
    public int Find(int x)
    {
        if (parent[x] != x)
        {
            parent[x] = Find(parent[x]); // Path compression
        }
        return parent[x];
    }
    
    public void Union(int x, int y)
    {
        int rootX = Find(x);
        int rootY = Find(y);
        
        if (rootX == rootY) return;
        
        // Union by size
        if (size[rootX] < size[rootY])
        {
            parent[rootX] = rootY;
            size[rootY] += size[rootX];
        }
        else
        {
            parent[rootY] = rootX;
            size[rootX] += size[rootY];
        }
        
        components--;
    }
    
    public bool Connected(int x, int y) => Find(x) == Find(y);
    public int ComponentCount => components;
    public int GetComponentSize(int x) => size[Find(x)];
}`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Klasik Union-Find Problemleri</h2>

        <div className="topic-card">
          <h3>1. Number of Islands</h3>
          <p>2D grid'de kaç tane island var?</p>
          <CodeBlock language="csharp">
{`public int NumIslands(char[,] grid)
{
    int rows = grid.GetLength(0);
    int cols = grid.GetLength(1);
    
    OptimizedUnionFind uf = new OptimizedUnionFind(rows * cols);
    int waterCells = 0;
    
    int[] dx = {-1, 1, 0, 0};
    int[] dy = {0, 0, -1, 1};
    
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            if (grid[i, j] == '1')
            {
                // 4 yönü kontrol et
                for (int d = 0; d < 4; d++)
                {
                    int ni = i + dx[d];
                    int nj = j + dy[d];
                    
                    if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && 
                        grid[ni, nj] == '1')
                    {
                        int current = i * cols + j;
                        int neighbor = ni * cols + nj;
                        uf.Union(current, neighbor);
                    }
                }
            }
            else
            {
                waterCells++;
            }
        }
    }
    
    return uf.ComponentCount - waterCells;
}

// Union-Find ile O(n) time!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Friend Circles</h3>
          <p>Arkadaşlık matrix'inde kaç friend circle var?</p>
          <CodeBlock language="csharp">
{`public int FindCircleNum(int[,] M)
{
    int n = M.GetLength(0);
    OptimizedUnionFind uf = new OptimizedUnionFind(n);
    
    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (M[i, j] == 1) // Direct friendship
            {
                uf.Union(i, j);
            }
        }
    }
    
    return uf.ComponentCount;
}

// Matrix'i graph'a çevir, component'ları say`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Graph Algorithms'ta Union-Find</h2>

        <div className="topic-card">
          <h3>1. Kruskal's Minimum Spanning Tree</h3>
          <p>Edge'leri ağırlığa göre sırala, cycle oluşturmayanı ekle</p>
          <CodeBlock language="csharp">
{`public class KruskalMST
{
    public class Edge : IComparable<Edge>
    {
        public int From { get; set; }
        public int To { get; set; }
        public int Weight { get; set; }
        
        public int CompareTo(Edge other) => Weight.CompareTo(other.Weight);
    }
    
    public List<Edge> FindMST(int vertices, List<Edge> edges)
    {
        edges.Sort(); // Ağırlığa göre sırala
        
        OptimizedUnionFind uf = new OptimizedUnionFind(vertices);
        List<Edge> mst = new List<Edge>();
        
        foreach (var edge in edges)
        {
            // Cycle oluşturmazsa ekle
            if (!uf.Connected(edge.From, edge.To))
            {
                uf.Union(edge.From, edge.To);
                mst.Add(edge);
                
                if (mst.Count == vertices - 1) break;
            }
        }
        
        return mst;
    }
}

// Union-Find cycle detection için mükemmel!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Redundant Connection</h3>
          <p>Cycle oluşturan edge'i bul</p>
          <CodeBlock language="csharp">
{`public int[] FindRedundantConnection(int[,] edges)
{
    int n = edges.GetLength(0);
    OptimizedUnionFind uf = new OptimizedUnionFind(n + 1);
    
    for (int i = 0; i < n; i++)
    {
        int u = edges[i, 0];
        int v = edges[i, 1];
        
        if (uf.Connected(u, v))
        {
            return new int[] { u, v }; // Cycle!
        }
        
        uf.Union(u, v);
    }
    
    return new int[0];
}

// Son eklenen edge cycle oluşturur`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Union-Find vs Diğer Veri Yapıları</h2>

        <div className="topic-card">
          <h3>Karşılaştırma Tablosu</h3>
          <table>
            <thead>
              <tr>
                <th>Operation</th>
                <th>Union-Find</th>
                <th>Graph (Adj List)</th>
                <th>Tree</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Find Component</td>
                <td>O(α(n))</td>
                <td>O(V+E)</td>
                <td>O(log n)</td>
              </tr>
              <tr>
                <td>Union/Connect</td>
                <td>O(α(n))</td>
                <td>O(1)</td>
                <td>O(log n)</td>
              </tr>
              <tr>
                <td>Space</td>
                <td>O(n)</td>
                <td>O(V+E)</td>
                <td>O(n)</td>
              </tr>
              <tr>
                <td>Dynamic</td>
                <td>Evet</td>
                <td>Evet</td>
                <td>Limited</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="topic-card">
          <h3>α(n) = Inverse Ackermann Function</h3>
          <p>α(n), n'in pratik değerleri için ≤ 5. Yani virtually O(1)!</p>
          <CodeBlock language="csharp">
{`// α(n) büyüme hızı:
// n=1: α(1)=0
// n=2: α(2)=1  
// n=4: α(4)=2
// n=16: α(16)=3
// n=65536: α(65536)=4
// n=2^65536: α(2^65536)=5

// Modern bilgisayarlar için α(n) ≤ 5!`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Union-Find Ne Zaman Kullanılır?</h2>

        <div className="topic-card">
          <h3>Uygun Olduğu Durumlar:</h3>
          <ul>
            <li><strong>Dynamic connectivity</strong> queries</li>
            <li><strong>Connected components</strong> bulma</li>
            <li><strong>Cycle detection</strong> (undirected graph)</li>
            <li><strong>MST algorithms</strong> (Kruskal)</li>
            <li><strong>Percolation</strong> problems</li>
            <li><strong>Network connectivity</strong> tracking</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>Uygun Olmadığı Durumlar:</h3>
          <ul>
            <li><strong>Path queries</strong> gerekli (shortest path)</li>
            <li><strong>Disconnection</strong> operations gerekli</li>
            <li><strong>Directed graph</strong> problems</li>
            <li><strong>Weighted connectivity</strong> (shortest path)</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Advanced Union-Find</h2>

        <div className="topic-card">
          <h3>1. Union-Find with Rollback</h3>
          <p>Operations'ları geri alabilmek için</p>
          <CodeBlock language="csharp">
{`public class UnionFindWithRollback
{
    private int[] parent;
    private int[] rank;
    private Stack<(int node, int oldParent, int oldRank)> history;
    
    public void Union(int x, int y)
    {
        int rootX = Find(x);
        int rootY = Find(y);
        
        if (rootX == rootY) return;
        
        if (rank[rootX] < rank[rootY])
        {
            history.Push((rootX, parent[rootX], rank[rootX]));
            parent[rootX] = rootY;
        }
        else if (rank[rootX] > rank[rootY])
        {
            history.Push((rootY, parent[rootY], rank[rootY]));
            parent[rootY] = rootX;
        }
        else
        {
            history.Push((rootY, parent[rootY], rank[rootY]));
            parent[rootY] = rootX;
            rank[rootX]++;
        }
    }
    
    public void Rollback()
    {
        if (history.Count == 0) return;
        
        var (node, oldParent, oldRank) = history.Pop();
        parent[node] = oldParent;
        rank[node] = oldRank;
    }
    
    // Find without path compression for rollback compatibility
    public int Find(int x)
    {
        while (parent[x] != x) x = parent[x];
        return x;
    }
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Dynamic Connectivity with Queries</h3>
          <CodeBlock language="csharp">
{`public class DynamicConnectivity
{
    private OptimizedUnionFind uf;
    
    public DynamicConnectivity(int n)
    {
        uf = new OptimizedUnionFind(n);
    }
    
    public void Connect(int p, int q)
    {
        uf.Union(p, q);
        Console.WriteLine($"Connected {p} and {q}");
    }
    
    public bool IsConnected(int p, int q)
    {
        bool connected = uf.Connected(p, q);
        Console.WriteLine($"{p} and {q} connected: {connected}");
        return connected;
    }
    
    public int GetComponentCount()
    {
        return uf.ComponentCount;
    }
}

// Usage example
public void DynamicConnectivityExample()
{
    var dc = new DynamicConnectivity(10);
    
    dc.Connect(4, 3);    // Components: 9
    dc.Connect(3, 8);    // Components: 8
    dc.Connect(6, 5);    // Components: 7
    dc.Connect(9, 4);    // Components: 6
    dc.Connect(2, 1);    // Components: 5
    
    dc.IsConnected(8, 9); // true (8-3-4-9)
    dc.IsConnected(5, 0); // false
    
    dc.Connect(5, 0);    // Components: 4
    dc.Connect(7, 2);    // Components: 3
    dc.Connect(6, 1);    // Components: 2 (connects two large components)
}
`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Interview Tips</h2>
        <ol>
          <li><strong>Optimizations kullan:</strong> Union by rank/size + path compression</li>
          <li><strong>1-indexed vs 0-indexed:</strong> Problem'e göre ayarla</li>
          <li><strong>Cycle detection:</strong> Connected kontrolü</li>
          <li><strong>Component count:</strong> Dynamic tracking</li>
          <li><strong>Time complexity:</strong> Amortized O(α(n))</li>
        </ol>
        <p>Union-Find, connectivity problemlerinin şampiyonu! Dynamic systems'te vazgeçilmez.</p>
      </section>

      <Notes topicPath="/unionfind" topicTitle="Union-Find (Disjoint Set) - Grup Yönetimi" />

      <div className="navigation-links">
  <Link to="/sliding-window" className="nav-button">Sliding Window</Link>
  <Link to="/topological-sort" className="nav-button">Topological Sort</Link>
      </div>
    </div>
  );
}

export default UnionFind;