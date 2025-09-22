import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../seo/SEO';
import CodeBlock from '../../ui/CodeBlock';

function Stack() {
  return (
    <div className="app-container">
      <SEO
        title="Stack (Yığın) - LIFO Veri Yapısı | İki Ay"
        description="Stack veri yapısını öğren. LIFO prensibi, push, pop, peek işlemleri, array ve linkedlist implementasyonları, pratik kullanım örnekleri."
        canonical="https://iki-ay.web.app/stack"
        og={{ url: 'https://iki-ay.web.app/stack' }}
      />
      
      <div className="content-header">
        <h1>Stack (Yığın) - LIFO Veri Yapısı</h1>
        <Link to="/hafta1" className="back-link">← 1. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>Stack Nedir? LIFO Prensibi</h2>
        <p>
          Stack, <strong>tabak yığını</strong> gibi düşün. Bulaşık yıkarken tabakları üst üste koyarsın, sonra da en üsttekinden alırsın. 
          <strong>Son giren, ilk çıkar</strong> (LIFO - Last In, First Out) prensibiyle çalışır.
        </p>
        
        <h3>Gerçek Hayattan Stack Örnekleri:</h3>
        <ol>
          <li><strong>Tabak yığını:</strong> En üstteki tabağı alırsın</li>
          <li><strong>Kitap yığını:</strong> En üstteki kitabı okursun</li>
          <li><strong>Geri alma (Undo):</strong> Son yaptığın işlemi geri alırsın</li>
          <li><strong>Fonksiyon çağrıları:</strong> Son çağrılan fonksiyon ilk tamamlanır</li>
        </ol>

        <h3>Neden Bu Kadar Önemli?</h3>
        <ul>
          <li><strong>Recursive algoritmalarda</strong> temel</li>
          <li><strong>Function call stack</strong> - her program kullanır</li>
          <li><strong>Expression evaluation</strong> - matematiksel ifadeleri hesaplar</li>
          <li><strong>Undo/Redo</strong> functionality</li>
          <li><strong>Parentheses matching</strong> - parantez kontrolü</li>
        </ul>
      </section>

      <section className="section">
        <h2>Stack'in Temel İşlemleri</h2>
        <p>Stack'te sadece <strong>4 temel işlem</strong> var:</p>

        <div className="topic-card">
          <h3>1. Push - Üste Ekleme O(1) ⚡</h3>
          <CodeBlock language="csharp">
{`// En üste eleman ekle
stack.Push(element);`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Pop - Üstten Alma O(1) ⚡</h3>
          <CodeBlock language="csharp">
{`// En üstteki elemanı al ve kaldır
element = stack.Pop();`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. Peek/Top - Üsttekine Bakma O(1) ⚡</h3>
          <CodeBlock language="csharp">
{`// En üstteki elemanı göster ama kaldırma
element = stack.Peek();`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>4. IsEmpty - Boş mu Kontrolü O(1) ⚡</h3>
          <CodeBlock language="csharp">
{`// Stack boş mu?
bool isEmpty = stack.Count == 0;`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Array ile Stack Implementation</h2>
        
        <CodeBlock language="csharp">
{`public class MyStack
{
    private int[] items;
    private int top;        // En üstteki elemanın index'i
    private int capacity;
    
    public MyStack(int size)
    {
        items = new int[size];
        capacity = size;
        top = -1;  // Boş stack'te top = -1
    }
    
    // Push - O(1)
    public void Push(int item)
    {
        if (top >= capacity - 1)
            throw new StackOverflowException("Stack dolu!");
        
        items[++top] = item;  // top'u artır, elemanı ekle
    }
    
    // Pop - O(1)
    public int Pop()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Stack boş!");
        
        return items[top--];  // Elemanı döndür, top'u azalt
    }
    
    // Peek - O(1)
    public int Peek()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Stack boş!");
        
        return items[top];    // Sadece göster, kaldırma
    }
    
    // IsEmpty - O(1)
    public bool IsEmpty()
    {
        return top == -1;
    }
    
    public int Count => top + 1;
}`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>LinkedList ile Stack Implementation</h2>
        
        <CodeBlock language="csharp">
{`public class LinkedStack
{
    private ListNode head;  // Stack'in tepesi
    
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
    
    // Push - Başa ekleme O(1)
    public void Push(int item)
    {
        ListNode newNode = new ListNode(item);
        newNode.Next = head;    // Yeni node eski head'i gösterir
        head = newNode;         // Head artık yeni node
    }
    
    // Pop - Baştan silme O(1)
    public int Pop()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Stack boş!");
        
        int data = head.Data;
        head = head.Next;       // Head'i bir sonrakine kaydır
        return data;
    }
    
    // Peek - O(1)
    public int Peek()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Stack boş!");
        
        return head.Data;
    }
    
    public bool IsEmpty() => head == null;
}`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>Stack İşlemlerinin Görsel Açıklaması</h2>
        
        <CodeBlock language="csharp">
{`Stack Durumu:    [Boş]

Push(10):        [10]     ← top

Push(20):        [20]     ← top
                 [10]

Push(30):        [30]     ← top
                 [20]
                 [10]

Pop():           [20]     ← top  (30 döndürüldü)
                 [10]

Peek():          [20]     ← top  (20 gösterildi, kaldırılmadı)
                 [10]`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>.NET'te Stack&lt;T&gt; Kullanımı</h2>
        
        <CodeBlock language="csharp">
{`// .NET'in hazır Stack'i
Stack<int> stack = new Stack<int>();

// Push - ekleme
stack.Push(10);
stack.Push(20);
stack.Push(30);

Console.WriteLine($"Count: {stack.Count}"); // 3

// Peek - göz atma
int top = stack.Peek(); // 30 (kaldırılmaz)

// Pop - alma
int popped = stack.Pop(); // 30 (kaldırılır)

// Contains - arama
bool has20 = stack.Contains(20); // true

// ToArray - diziye çevirme
int[] array = stack.ToArray(); // [20, 10] (ters sırada!)`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>Stack'in Gerçek Hayat Uygulamaları</h2>

        <div className="topic-card">
          <h3>1. Parantez Kontrolü (Balanced Parentheses)</h3>
          <CodeBlock language="csharp">
{`public bool IsValidParentheses(string s)
{
    Stack<char> stack = new Stack<char>();
    
    foreach (char c in s)
    {
        if (c == '(' || c == '[' || c == '{')
        {
            stack.Push(c);  // Açılış parantezi stack'e at
        }
        else if (c == ')' || c == ']' || c == '}')
        {
            if (stack.Count == 0) return false; // Eşleşmeyen kapanış
            
            char last = stack.Pop();
            
            // Eşleşme kontrolü
            if ((c == ')' && last != '(') ||
                (c == ']' && last != '[') ||
                (c == '}' && last != '{'))
            {
                return false;
            }
        }
    }
    
    return stack.Count == 0; // Hepsi eşleşti mi?
}

// Kullanım:
// IsValidParentheses("({[]})") → true
// IsValidParentheses("([)]")   → false`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Postfix Notation Hesaplama</h3>
          <CodeBlock language="csharp">
{`public int EvaluatePostfix(string expression)
{
    Stack<int> stack = new Stack<int>();
    string[] tokens = expression.Split(' ');
    
    foreach (string token in tokens)
    {
        if (int.TryParse(token, out int number))
        {
            stack.Push(number);  // Sayı ise stack'e at
        }
        else
        {
            // Operator ise son 2 sayıyı al ve işlem yap
            int b = stack.Pop();
            int a = stack.Pop();
            
            switch (token)
            {
                case "+": stack.Push(a + b); break;
                case "-": stack.Push(a - b); break;
                case "*": stack.Push(a * b); break;
                case "/": stack.Push(a / b); break;
            }
        }
    }
    
    return stack.Pop(); // Son sonuç
}

// Kullanım: "2 3 + 4 *" → ((2+3)*4) = 20`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. Undo Functionality</h3>
          <CodeBlock language="csharp">
{`public class TextEditor
{
    private string text = "";
    private Stack<string> undoStack = new Stack<string>();
    
    public void Type(string newText)
    {
        undoStack.Push(text);  // Mevcut durumu kaydet
        text += newText;
    }
    
    public void Undo()
    {
        if (undoStack.Count > 0)
        {
            text = undoStack.Pop();  // Önceki duruma dön
        }
    }
    
    public string GetText() => text;
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>4. Fonksiyon Çağrı Stack'i (Call Stack)</h3>
          <CodeBlock language="csharp">
{`// Recursive Fibonacci - Call stack kullanır
public int Fibonacci(int n)
{
    Console.WriteLine($"Fibonacci({n}) çağrıldı");
    
    if (n <= 1) return n;
    
    // Stack'e 2 çağrı eklenir
    int result = Fibonacci(n - 1) + Fibonacci(n - 2);
    
    Console.WriteLine($"Fibonacci({n}) tamamlandı");
    return result;
}

// Fibonacci(3) çağrı sırası:
// Push: Fibonacci(3)
//   Push: Fibonacci(2)
//     Push: Fibonacci(1) → Pop (return 1)
//     Push: Fibonacci(0) → Pop (return 0)
//   Pop: Fibonacci(2) returns 1
//   Push: Fibonacci(1) → Pop (return 1)
// Pop: Fibonacci(3) returns 2`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Stack vs Diğer Veri Yapıları</h2>
        
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Özellik</th>
              <th>Stack</th>
              <th>Array</th>
              <th>LinkedList</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Erişim</strong></td>
              <td>Sadece üst O(1)</td>
              <td>Index ile O(1)</td>
              <td>Sıralı O(n)</td>
            </tr>
            <tr>
              <td><strong>Ekleme</strong></td>
              <td>Sadece üste O(1)</td>
              <td>Sona O(1)</td>
              <td>Başa O(1)</td>
            </tr>
            <tr>
              <td><strong>Silme</strong></td>
              <td>Sadece üstten O(1)</td>
              <td>Sondan O(1)</td>
              <td>Baştan O(1)</td>
            </tr>
            <tr>
              <td><strong>Arama</strong></td>
              <td>Desteklenmez</td>
              <td>O(n)</td>
              <td>O(n)</td>
            </tr>
            <tr>
              <td><strong>Kullanım</strong></td>
              <td>LIFO işlemler</td>
              <td>Genel amaçlı</td>
              <td>Dinamik boyut</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>Stack Ne Zaman Kullanılır?</h2>
        
        <div className="topic-card">
          <h3>✅ Stack Kullan Eğer:</h3>
          <ul>
            <li><strong>LIFO</strong> davranış gerekiyorsa</li>
            <li><strong>Undo/Redo</strong> functionality lazımsa</li>
            <li><strong>Recursive</strong> algoritma iterative yapıyorsan</li>
            <li><strong>Expression parsing</strong> yapıyorsan</li>
            <li><strong>Backtracking</strong> algoritmalarında</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>❌ Stack Kullanma Eğer:</h3>
          <ul>
            <li><strong>Random access</strong> gerekiyorsa</li>
            <li><strong>FIFO</strong> davranış istiyorsan (Queue kullan)</li>
            <li><strong>Ortadaki elemanları</strong> sık işliyorsan</li>
            <li><strong>Arama</strong> operasyonu çok önemliyse</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Önemli Stack Kavramları</h2>
        <ol>
          <li><strong>Stack Overflow:</strong> Stack dolunca olur - recursive çağrılarda dikkat!</li>
          <li><strong>Stack Underflow:</strong> Boş stack'ten pop yapmaya çalışınca</li>
          <li><strong>Call Stack:</strong> Her programın fonksiyon çağrıları için kullandığı stack</li>
          <li><strong>DFS (Depth-First Search):</strong> Graph traversal'da stack kullanır</li>
        </ol>
        <p>Stack, basit ama çok güçlü bir veri yapısı. Recursive düşünceyi anlamak için de mükemmel bir araç!</p>
      </section>

      <div className="navigation-links">
        <Link to="/linkedlist" className="nav-button">← LinkedList</Link>
        <Link to="/queue" className="nav-button">Queue →</Link>
      </div>
    </div>
  );
}

export default Stack;