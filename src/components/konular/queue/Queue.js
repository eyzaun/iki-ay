import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../seo/SEO';
import CodeBlock from '../../ui/CodeBlock';

function Queue() {
  return (
    <div className="app-container">
      <SEO
        title="Queue (Kuyruk) - FIFO Veri Yapısı | İki Ay"
        description="Queue veri yapısını öğren. FIFO prensibi, enqueue, dequeue işlemleri, circular queue, BFS algoritması ve pratik örnekler."
        canonical="https://iki-ay.web.app/queue"
        og={{ url: 'https://iki-ay.web.app/queue' }}
      />
      
      <div className="content-header">
        <h1>Queue (Kuyruk) - FIFO Veri Yapısı</h1>
        <Link to="/hafta1" className="back-link">← 1. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>Queue Nedir? FIFO Prensibi</h2>
        <p>
          Queue, <strong>market kuyruğu</strong> gibi düşün. İlk gelen ilk hizmet alır - <strong>First In, First Out (FIFO)</strong> prensibiyle çalışır. Stack'in tam tersi!
        </p>
        
        <h3>Gerçek Hayattan Queue Örnekleri:</h3>
        <ol>
          <li><strong>Market kuyruğu:</strong> İlk gelen önce kassaya gider</li>
          <li><strong>Yazıcı kuyruğu:</strong> İlk gönderilen döküman önce çıkar</li>
          <li><strong>Trafik ışığı:</strong> Önde duran araba önce geçer</li>
          <li><strong>Telefon müşteri hizmetleri:</strong> İlk arayan önce bağlanır</li>
        </ol>

        <h3>Stack vs Queue - Temel Fark:</h3>
        <ul>
          <li><strong>Stack:</strong> Son giren ilk çıkar (tabak yığını) 🥞</li>
          <li><strong>Queue:</strong> İlk giren ilk çıkar (kuyruk) 🚶‍♂️🚶‍♀️🚶‍♂️</li>
        </ul>
      </section>

      <section className="section">
        <h2>Queue'nun Temel İşlemleri</h2>
        <p>Queue'da iki ana işlem var:</p>

        <div className="topic-card">
          <h3>1. Enqueue - Arkaya Ekleme O(1) ⚡</h3>
          <CodeBlock language="csharp">
{`// Kuyruğun arkasına eleman ekle
queue.Enqueue(element);`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Dequeue - Önden Alma O(1) ⚡</h3>
          <CodeBlock language="csharp">
{`// Kuyruğun önündeki elemanı al ve kaldır
element = queue.Dequeue();`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. Front/Peek - Öndekine Bakma O(1) ⚡</h3>
          <CodeBlock language="csharp">
{`// Önündeki elemanı göster ama kaldırma
element = queue.Peek();`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>4. IsEmpty - Boş mu Kontrolü O(1) ⚡</h3>
          <CodeBlock language="csharp">
{`// Queue boş mu?
bool isEmpty = queue.Count == 0;`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Array ile Queue Implementation</h2>
        
        <CodeBlock language="csharp">
{`public class MyQueue
{
    private int[] items;
    private int front;      // Kuyruğun önü
    private int rear;       // Kuyruğun arkası
    private int count;      // Eleman sayısı
    private int capacity;
    
    public MyQueue(int size)
    {
        items = new int[size];
        capacity = size;
        front = 0;
        rear = -1;
        count = 0;
    }
    
    // Enqueue - O(1)
    public void Enqueue(int item)
    {
        if (count >= capacity)
            throw new InvalidOperationException("Queue dolu!");
        
        rear = (rear + 1) % capacity;  // Circular movement
        items[rear] = item;
        count++;
    }
    
    // Dequeue - O(1)
    public int Dequeue()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Queue boş!");
        
        int item = items[front];
        front = (front + 1) % capacity;  // Circular movement
        count--;
        return item;
    }
    
    // Peek - O(1)
    public int Peek()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Queue boş!");
        
        return items[front];
    }
    
    public bool IsEmpty() => count == 0;
    public int Count => count;
}`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>Circular Queue - Akıllı Çözüm</h2>
        <p>Normal array queue'da problem: elemanlar çıktıkça başta boş yer kalır ama kullanamayız. <strong>Circular Queue</strong> bu sorunu çözer:</p>
        
        <CodeBlock language="csharp">
{`Normal Queue:
[_][_][C][D][E]    ← Front=2, Rear=4, Boş alan kullanılamaz
 ↑  ↑   
boş boş

Circular Queue:
[F][G][C][D][E]    ← Front=2, Rear=1 (wrap around)
 ↑     ↑
rear  front`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>LinkedList ile Queue Implementation</h2>
        
        <CodeBlock language="csharp">
{`public class LinkedQueue
{
    private ListNode front;   // Kuyruğun önü
    private ListNode rear;    // Kuyruğun arkası
    private int count;
    
    private class ListNode
    {
        public int Data { get; set; }
        public ListNode Next { get; set; }
        
        public ListNode(int data)
        {
            Data = data;
            Next = null;
        }
    }
    
    public LinkedQueue()
    {
        front = null;
        rear = null;
        count = 0;
    }
    
    // Enqueue - Arkaya ekleme O(1)
    public void Enqueue(int item)
    {
        ListNode newNode = new ListNode(item);
        
        if (rear == null)  // İlk eleman
        {
            front = rear = newNode;
        }
        else
        {
            rear.Next = newNode;  // Son node'un next'i yeni node
            rear = newNode;       // Rear'ı güncelle
        }
        count++;
    }
    
    // Dequeue - Önden alma O(1)
    public int Dequeue()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Queue boş!");
        
        int data = front.Data;
        front = front.Next;
        
        if (front == null)  // Son eleman çıkarıldı
            rear = null;
        
        count--;
        return data;
    }
    
    public int Peek()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Queue boş!");
        
        return front.Data;
    }
    
    public bool IsEmpty() => front == null;
    public int Count => count;
}`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>Queue İşlemlerinin Görsel Açıklaması</h2>
        
        <CodeBlock language="csharp">
{`Queue Durumu:    [Boş]

Enqueue(10):     [10]
                 ↑   ↑
               front rear

Enqueue(20):     [10] → [20]
                 ↑      ↑
               front   rear

Enqueue(30):     [10] → [20] → [30]
                 ↑             ↑
               front          rear

Dequeue():       [20] → [30]      (10 döndürüldü)
                 ↑      ↑
               front   rear

Peek():          [20] → [30]      (20 gösterildi)
                 ↑      ↑
               front   rear`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>.NET'te Queue&lt;T&gt; Kullanımı</h2>
        
        <CodeBlock language="csharp">
{`// .NET'in hazır Queue'u
Queue<int> queue = new Queue<int>();

// Enqueue - ekleme
queue.Enqueue(10);
queue.Enqueue(20);
queue.Enqueue(30);

Console.WriteLine($"Count: {queue.Count}"); // 3

// Peek - önündekine bakma
int front = queue.Peek(); // 10 (kaldırılmaz)

// Dequeue - önden alma
int dequeued = queue.Dequeue(); // 10 (kaldırılır)

// Contains - arama
bool has20 = queue.Contains(20); // true

// ToArray - diziye çevirme
int[] array = queue.ToArray(); // [20, 30] (sıra korunur)

// Clear - temizleme
queue.Clear();`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>Queue'nun Gerçek Hayat Uygulamaları</h2>

        <div className="topic-card">
          <h3>1. BFS (Breadth-First Search) - Graf Gezinme</h3>
          <CodeBlock language="csharp">
{`public void BFS(GraphNode startNode)
{
    Queue<GraphNode> queue = new Queue<GraphNode>();
    HashSet<GraphNode> visited = new HashSet<GraphNode>();
    
    queue.Enqueue(startNode);
    visited.Add(startNode);
    
    while (queue.Count > 0)
    {
        GraphNode current = queue.Dequeue();
        Console.WriteLine($"Ziyaret: {current.Value}");
        
        // Komşuları kuyruğa ekle
        foreach (GraphNode neighbor in current.Neighbors)
        {
            if (!visited.Contains(neighbor))
            {
                queue.Enqueue(neighbor);
                visited.Add(neighbor);
            }
        }
    }
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Yazıcı Kuyruğu (Print Queue)</h3>
          <CodeBlock language="csharp">
{`public class PrintQueue
{
    private Queue<PrintJob> jobs = new Queue<PrintJob>();
    
    public void AddJob(string document, int pages)
    {
        PrintJob job = new PrintJob(document, pages);
        jobs.Enqueue(job);
        Console.WriteLine($"İş eklendi: {document}");
    }
    
    public void ProcessNextJob()
    {
        if (jobs.Count > 0)
        {
            PrintJob job = jobs.Dequeue();
            Console.WriteLine($"Yazdırılıyor: {job.Document}");
            // Yazdırma işlemi...
        }
        else
        {
            Console.WriteLine("Kuyruk boş!");
        }
    }
    
    public int JobsWaiting => jobs.Count;
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. Hot Potato Game (Josephus Problem)</h3>
          <CodeBlock language="csharp">
{`public string HotPotato(string[] names, int num)
{
    Queue<string> queue = new Queue<string>();
    
    // Herkesi kuyruğa ekle
    foreach (string name in names)
    {
        queue.Enqueue(name);
    }
    
    while (queue.Count > 1)
    {
        // num kadar döndür
        for (int i = 0; i < num; i++)
        {
            string person = queue.Dequeue();
            queue.Enqueue(person);  // Arkaya geri ekle
        }
        
        // Son kişiyi eleme
        string eliminated = queue.Dequeue();
        Console.WriteLine($"Elenen: {eliminated}");
    }
    
    return queue.Dequeue(); // Son kalan
}

// Kullanım: HotPotato(["Ali", "Ayşe", "Mehmet", "Fatma"], 3)`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>4. Multi-level Queue (Öncelik Sırası)</h3>
          <CodeBlock language="csharp">
{`public class PriorityQueue
{
    private Queue<Task> highPriority = new Queue<Task>();
    private Queue<Task> normalPriority = new Queue<Task>();
    private Queue<Task> lowPriority = new Queue<Task>();
    
    public void AddTask(Task task)
    {
        switch (task.Priority)
        {
            case Priority.High:
                highPriority.Enqueue(task);
                break;
            case Priority.Normal:
                normalPriority.Enqueue(task);
                break;
            case Priority.Low:
                lowPriority.Enqueue(task);
                break;
        }
    }
    
    public Task GetNextTask()
    {
        // Yüksek öncelik → Normal → Düşük sırasıyla
        if (highPriority.Count > 0)
            return highPriority.Dequeue();
        else if (normalPriority.Count > 0)
            return normalPriority.Dequeue();
        else if (lowPriority.Count > 0)
            return lowPriority.Dequeue();
        else
            return null;
    }
}`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Queue Türleri</h2>
        
        <div className="topic-card">
          <h3>1. Simple Queue</h3>
          <ul>
            <li>Standart FIFO davranış</li>
            <li>En yaygın kullanılan tür</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>2. Circular Queue</h3>
          <ul>
            <li>Array sonuna gelince başa döner</li>
            <li>Bellek efficient</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>3. Priority Queue</h3>
          <ul>
            <li>Elemanların öncelik sırası var</li>
            <li>Heap veri yapısı ile implement edilir</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>4. Deque (Double-ended Queue)</h3>
          <ul>
            <li>Her iki ucundan da ekleme/çıkarma</li>
            <li>Hem Stack hem Queue gibi davranabilir</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Queue vs Stack - Detaylı Karşılaştırma</h2>
        
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Özellik</th>
              <th>Queue (FIFO)</th>
              <th>Stack (LIFO)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Ekleme</strong></td>
              <td>Arkaya (rear)</td>
              <td>Üste (top)</td>
            </tr>
            <tr>
              <td><strong>Çıkarma</strong></td>
              <td>Önden (front)</td>
              <td>Üstten (top)</td>
            </tr>
            <tr>
              <td><strong>Kullanım</strong></td>
              <td>Sıra takip</td>
              <td>Geri alma</td>
            </tr>
            <tr>
              <td><strong>Algoritma</strong></td>
              <td>BFS</td>
              <td>DFS</td>
            </tr>
            <tr>
              <td><strong>Gerçek hayat</strong></td>
              <td>Market kuyruğu</td>
              <td>Tabak yığını</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>Queue Ne Zaman Kullanılır?</h2>
        
        <div className="topic-card">
          <h3>✅ Queue Kullan Eğer:</h3>
          <ul>
            <li><strong>FIFO</strong> davranış gerekiyorsa</li>
            <li><strong>BFS</strong> algoritması uyguluyorsan</li>
            <li><strong>Task scheduling</strong> yapıyorsan</li>
            <li><strong>Buffering</strong> gerekiyorsa (IO operations)</li>
            <li><strong>Level-order traversal</strong> (tree'lerde)</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>❌ Queue Kullanma Eğer:</h3>
          <ul>
            <li><strong>LIFO</strong> davranış istiyorsan (Stack kullan)</li>
            <li><strong>Random access</strong> gerekiyorsa (Array kullan)</li>
            <li><strong>Priority</strong> önemliyse (PriorityQueue kullan)</li>
            <li><strong>Arama</strong> operasyonu çok önemliyse</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>İleri Seviye: Deque (Double-ended Queue)</h2>
        
        <CodeBlock language="csharp">
{`// .NET'te Deque yok, ama LinkedList ile simüle edebiliriz
LinkedList<int> deque = new LinkedList<int>();

// Başa ekleme/çıkarma (Stack gibi)
deque.AddFirst(10);
int front = deque.First.Value;
deque.RemoveFirst();

// Sona ekleme/çıkarma (Queue gibi)  
deque.AddLast(20);
int back = deque.Last.Value;
deque.RemoveLast();`}
          </CodeBlock>
        
        <p>Queue, sistemlerin adil ve düzenli çalışması için kritik bir veri yapısı. Her yerde karşılaştığın ama fark etmediğin bir kavram!</p>
      </section>

      <div className="navigation-links">
        <Link to="/stack" className="nav-button">← Stack</Link>
        <Link to="/hafta1" className="nav-button">1. Hafta →</Link>
      </div>
    </div>
  );
}

export default Queue;