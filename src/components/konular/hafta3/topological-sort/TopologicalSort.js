import React from 'react';
import Notes from '../../../notes/Notes';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import CodeBlock from '../../../ui/CodeBlock';

function TopologicalSort() {
  return (
    <div className="app-container">
      <SEO
        title="Topological Sort - Graf Sıralama | İki Ay"
        description="Topological Sort algoritmasını öğren. DAG'lerde sıralama, Course Schedule problemleri."
        canonical="https://iki-ay.web.app/topological-sort"
        og={{ url: 'https://iki-ay.web.app/topological-sort' }}
      />

      <div className="content-header">
        <h1>Topological Sort - Graf Sıralama</h1>
        <Link to="/hafta3" className="back-link">← 3. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>Topological Sort Nedir?</h2>
        <p>
          Topological Sort, <strong>Directed Acyclic Graph (DAG)'lerde node'ları sıralama</strong> algoritmasıdır.
          Dependency order'da sıralar - önce yapılması gerekenler önce gelir.
        </p>

        <h3>Gerçek Hayattan Benzetme: Ders Programı</h3>
        <p>Düşün ki üniversite derslerini alıyorsun:</p>
        <ul>
          <li><strong>Algoritma dersi:</strong> Programlama dersinden sonra alınmalı</li>
          <li><strong>Veri Yapıları:</strong> Algoritmadan sonra</li>
          <li><strong>Dependency chain:</strong> Programlama → Algoritma → Veri Yapıları</li>
        </ul>
        <p>İşte Topological Sort de tam böyle çalışır!</p>
      </section>

      <section className="section">
        <h2>Kahn's Algorithm (BFS)</h2>

        <div className="topic-card">
          <h3>Adım Adım</h3>
          <ol>
            <li><strong>Indegree hesapla:</strong> Her node'a kaç edge giriyor?</li>
            <li><strong>Queue'ye indegree=0 olanları koy</strong></li>
            <li><strong>BFS yap:</strong> Node'u çıkar, komşularının indegree'ini azalt</li>
            <li><strong>Indegree=0 olunca queue'ye ekle</strong></li>
          </ol>
        </div>

        <div className="topic-card">
          <h3>Implementation</h3>
          <CodeBlock language="csharp">
{`public List<int> TopologicalSort(int[][] graph)
{
    int n = graph.Length;
    int[] indegree = new int[n];
    List<int> result = new List<int>();
    Queue<int> queue = new Queue<int>();
    
    // Indegree hesapla
    foreach (var edges in graph)
    {
        foreach (int neighbor in edges)
        {
            indegree[neighbor]++;
        }
    }
    
    // Indegree=0 olanları queue'ye koy
    for (int i = 0; i < n; i++)
    {
        if (indegree[i] == 0)
            queue.Enqueue(i);
    }
    
    while (queue.Count > 0)
    {
        int node = queue.Dequeue();
        result.Add(node);
        
        // Komşularının indegree'ini azalt
        foreach (int neighbor in graph[node])
        {
            indegree[neighbor]--;
            if (indegree[neighbor] == 0)
                queue.Enqueue(neighbor);
        }
    }
    
    // Cycle varsa tüm node'lar eklenemez
    return result.Count == n ? result : new List<int>();
}

// Time: O(V+E), Space: O(V+E)`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>DFS ile Topological Sort</h2>

        <div className="topic-card">
          <h3>Post-order Traversal</h3>
          <CodeBlock language="csharp">
{`public List<int> TopologicalSortDFS(int[][] graph)
{
    int n = graph.Length;
    bool[] visited = new bool[n];
    Stack<int> stack = new Stack<int>();
    
    for (int i = 0; i < n; i++)
    {
        if (!visited[i])
            DFS(i, graph, visited, stack);
    }
    
    List<int> result = new List<int>();
    while (stack.Count > 0)
        result.Add(stack.Pop());
    
    return result;
}

private void DFS(int node, int[][] graph, bool[] visited, Stack<int> stack)
{
    visited[node] = true;
    
    foreach (int neighbor in graph[node])
    {
        if (!visited[neighbor])
            DFS(neighbor, graph, visited, stack);
    }
    
    stack.Push(node); // Post-order: sonra ekle
}

// Time: O(V+E), Space: O(V+E)`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Klasik Problemler</h2>

        <div className="topic-card">
          <h3>1. Course Schedule</h3>
          <p>Dersleri alabilir miyim? (Cycle detection)</p>
          <CodeBlock language="csharp">
{`public bool CanFinish(int numCourses, int[][] prerequisites)
{
    // Kahn's algorithm ile cycle detection
    int[] indegree = new int[numCourses];
    List<int>[] graph = new List<int>[numCourses];
    
    for (int i = 0; i < numCourses; i++)
        graph[i] = new List<int>();
    
    foreach (var prereq in prerequisites)
    {
        graph[prereq[1]].Add(prereq[0]); // prereq[1] -> prereq[0]
        indegree[prereq[0]]++;
    }
    
    Queue<int> queue = new Queue<int>();
    for (int i = 0; i < numCourses; i++)
    {
        if (indegree[i] == 0) queue.Enqueue(i);
    }
    
    int completed = 0;
    while (queue.Count > 0)
    {
        int course = queue.Dequeue();
        completed++;
        
        foreach (int nextCourse in graph[course])
        {
            indegree[nextCourse]--;
            if (indegree[nextCourse] == 0)
                queue.Enqueue(nextCourse);
        }
    }
    
    return completed == numCourses; // Tüm dersleri alabilir mi?
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Course Schedule II</h3>
          <p>Hangi sırayla almalıyım?</p>
          <CodeBlock language="csharp">
{`public int[] FindOrder(int numCourses, int[][] prerequisites)
{
    // Yukarıdaki CanFinish kodunu kullan
    // result listesini döndür
    var result = TopologicalSort(numCourses, prerequisites);
    return result.Count == numCourses ? result.ToArray() : new int[0];
}`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Cycle Detection</h2>

        <div className="topic-card">
          <h3>DAG Kontrolü</h3>
          <CodeBlock language="csharp">
{`public bool HasCycle(int[][] graph)
{
    int n = graph.Length;
    int[] state = new int[n]; // 0: not visited, 1: visiting, 2: visited
    
    for (int i = 0; i < n; i++)
    {
        if (state[i] == 0 && HasCycleDFS(i, graph, state))
            return true;
    }
    
    return false;
}

private bool HasCycleDFS(int node, int[][] graph, int[] state)
{
    state[node] = 1; // Visiting
    
    foreach (int neighbor in graph[node])
    {
        if (state[neighbor] == 1) return true; // Cycle!
        if (state[neighbor] == 0 && HasCycleDFS(neighbor, graph, state))
            return true;
    }
    
    state[node] = 2; // Visited
    return false;
}

// DFS ile cycle detection`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Topological Sort Özellikleri</h2>

        <div className="topic-card">
          <h3>✅ Ne Zaman Kullanılır:</h3>
          <ul>
            <li><strong>DAG'ler:</strong> Directed Acyclic Graph</li>
            <li><strong>Dependency ordering:</strong> Task scheduling</li>
            <li><strong>Build systems:</strong> Makefile dependencies</li>
            <li><strong>Course prerequisites:</strong> Ders ön koşulları</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>❌ Ne Zaman Kullanılmaz:</h3>
          <ul>
            <li><strong>Cycle varsa:</strong> Topological sort imkansız</li>
            <li><strong>Undirected graph:</strong> Yön yok</li>
            <li><strong>Shortest path:</strong> Dijkstra kullan</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Interview Tips</h2>
        <ol>
          <li><strong>Kahn's vs DFS:</strong> BFS daha intuitif, DFS daha concise</li>
          <li><strong>Cycle detection:</strong> Topological sort ile birlikte yap</li>
          <li><strong>Indegree array:</strong> Input processing'te hesapla</li>
          <li><strong>Result validation:</strong> Tüm node'lar dahil mi?</li>
        </ol>
        <p>Topological Sort, dependency problemlerinin temel çözümü! Build systems ve scheduling'de vazgeçilmez.</p>
      </section>

      <Notes topicPath="/topologicalsort" topicTitle="Topological Sort - Graf Sıralama" />

      <div className="navigation-links">
        <Link to="/union-find" className="nav-button">← Union-Find</Link>
        <Link to="/recursion-backtracking" className="nav-button">Recursion →</Link>
      </div>
    </div>
  );
}

export default TopologicalSort;