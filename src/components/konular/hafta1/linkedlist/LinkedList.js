import React from 'react';
import Notes from '../../../notes/Notes';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import CodeBlock from '../../../ui/CodeBlock';

function LinkedList() {
  return (
    <div className="app-container">
      <SEO
        title="LinkedList (Bağlı Liste) - Esnek Veri Yapısı | İki Ay"
        description="LinkedList veri yapısını öğren. Node yapısı, pointer mantığı, dinamik boyut, singly ve doubly linked list örnekleri."
        canonical="https://iki-ay.web.app/linkedlist"
        og={{ url: 'https://iki-ay.web.app/linkedlist' }}
      />
      
      <div className="content-header">
        <h1>LinkedList (Bağlı Liste) - Esnek Veri Yapısı</h1>
        <Link to="/hafta1" className="back-link">← 1. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>LinkedList Nedir? Array'den Farkı Ne?</h2>
        <p>
          LinkedList'i <strong>tren vagonu</strong> gibi düşün. Her vagon (node) iki şey taşır:
        </p>
        <ol>
          <li><strong>Yolcu (data):</strong> Asıl sakladığın veri</li>
          <li><strong>Sonraki vagonun numarası (pointer):</strong> Bir sonraki node'un adresi</li>
        </ol>
        
        <p>
          Array'de elemanlar yan yana sıralı apartman daireleri gibiydi. LinkedList'te ise elemanlar şehrin farklı yerlerinde dağınık evler gibi, 
          ama her ev bir sonrakinin adresini biliyor.
        </p>

        <h3>Gerçek Hayattan Benzetme: Hazine Avı</h3>
        <p>Düşün ki hazine avı oynuyorsun:</p>
        <ul>
          <li><strong>Array:</strong> Hazine haritasında "X işareti 5. adımda" yazıyor → Direkt gidiyorsun</li>
          <li><strong>LinkedList:</strong> İlk ipucu diyor ki "İkinci ipucunu çeşmede ara", oradan "Üçüncü ipucunu ağaçta ara" → Sırayla takip etmen gerekiyor</li>
        </ul>
        <p>Bu yüzden LinkedList'te elemanlara erişim O(n), Array'de O(1).</p>
      </section>

      <section className="section">
        <h2>Node Yapısı - Temel Yapı Taşı</h2>
        
        <CodeBlock language="csharp">
{`// Basit Node sınıfı
public class ListNode
{
    public int Data { get; set; }        // Veri kısmı
    public ListNode Next { get; set; }   // Sonraki node'u gösterer

    public ListNode(int data)
    {
        Data = data;
        Next = null; // Başlangıçta kimseyi göstermiyor
    }
}`}
          </CodeBlock>

        <h3>Node'ların Bellekteki Durumu:</h3>
        <CodeBlock language="csharp">
{`Array:     [10][20][30][40]  ← Yan yana, ardışık
           
LinkedList: [10]→   [20]→   [30]→   [40]→ null
             ↑       ↑       ↑       ↑
           Farklı   Farklı  Farklı  Farklı
           adresler adresler adresler adresler`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>LinkedList'in Süper Güçleri ve Zayıflıkları</h2>

        <div className="topic-card">
          <h3>🚀 Süper Güçleri:</h3>
          <ol>
            <li><strong>Dinamik boyut:</strong> İstediğin kadar büyüyebilir</li>
            <li><strong>Başa ekleme çok hızlı:</strong> O(1) - Sadece pointer değiştir</li>
            <li><strong>Bellek efficient:</strong> Sadece ihtiyacın kadar yer kullanır</li>
            <li><strong>Esnek:</strong> Ortadan ekleme/silme Array'den kolay</li>
          </ol>
        </div>

        <div className="topic-card">
          <h3>😕 Zayıflıkları:</h3>
          <ol>
            <li><strong>Yavaş erişim:</strong> i'nci elemana ulaşmak için baştan sayman gerek - O(n)</li>
            <li><strong>Extra bellek:</strong> Her node için pointer de saklanıyor</li>
            <li><strong>Cache unfriendly:</strong> Elemanlar bellekte dağınık</li>
            <li><strong>No random access:</strong> Index ile direkt erişim yok</li>
          </ol>
        </div>
      </section>

      <section className="section">
        <h2>Temel LinkedList İşlemleri</h2>

        <div className="topic-card">
          <h3>1. Başa Ekleme - O(1) ⚡</h3>
          <CodeBlock language="csharp">
{`public class SimpleLinkedList
{
    private ListNode head;
    
    public void AddFirst(int data)
    {
        ListNode newNode = new ListNode(data);
        newNode.Next = head;  // Yeni node eski head'i gösterir
        head = newNode;       // Head artık yeni node'u gösterir
    }
}

// Örnek:
// Başlangıç: head → [20] → [30] → null
// AddFirst(10) sonrası: head → [10] → [20] → [30] → null`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Sona Ekleme - O(n) 🐌</h3>
          <CodeBlock language="csharp">
{`public void AddLast(int data)
{
    ListNode newNode = new ListNode(data);
    
    if (head == null) // Liste boşsa
    {
        head = newNode;
        return;
    }
    
    // Son node'u bul - Baştan sona yürümen gerek!
    ListNode current = head;
    while (current.Next != null)
    {
        current = current.Next;
    }
    
    current.Next = newNode; // Son node'un next'ini yeni node yap
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. Arama - O(n) 🔍</h3>
          <CodeBlock language="csharp">
{`public bool Contains(int data)
{
    ListNode current = head;
    
    while (current != null)
    {
        if (current.Data == data)
            return true;
        current = current.Next; // Bir sonraki node'a geç
    }
    
    return false; // Bulunamadı
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>4. Silme - O(n)</h3>
          <CodeBlock language="csharp">
{`public bool Remove(int data)
{
    if (head == null) return false;
    
    // İlk node silinecekse - Özel durum
    if (head.Data == data)
    {
        head = head.Next; // Head'i bir sonrakine kaydır
        return true;
    }
    
    // Silinecek node'un öncesini bul
    ListNode current = head;
    while (current.Next != null && current.Next.Data != data)
    {
        current = current.Next;
    }
    
    // Bulunduysa bypass et
    if (current.Next != null)
    {
        current.Next = current.Next.Next; // Aradan çıkar
        return true;
    }
    
    return false;
}`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Görsel LinkedList İşlemleri</h2>

        <div className="topic-card">
          <h3>Ekleme İşlemi:</h3>
          <CodeBlock language="csharp">
{`Öncesi: head → [10] → [30] → null
        
20'yi 10 ile 30 arasına eklemek:
1. Yeni node oluştur: [20]
2. [20].Next = [30]
3. [10].Next = [20]

Sonrası: head → [10] → [20] → [30] → null`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>Silme İşlemi:</h3>
          <CodeBlock language="csharp">
{`Öncesi: head → [10] → [20] → [30] → null

20'yi silmek:
1. 20'nin öncesini bul: [10]
2. [10].Next = [20].Next (yani [30])

Sonrası: head → [10] → [30] → null
        [20] → çöpte (garbage collected)`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Doubly LinkedList - İleri Geri Hareket</h2>
        
        <CodeBlock language="csharp">
{`public class DoublyListNode
{
    public int Data { get; set; }
    public DoublyListNode Next { get; set; }    // İleriye pointer
    public DoublyListNode Prev { get; set; }    // Geriye pointer
    
    public DoublyListNode(int data)
    {
        Data = data;
        Next = null;
        Prev = null;
    }
}`}
          </CodeBlock>

        <div className="topic-card">
          <h3>Avantajları:</h3>
          <ul>
            <li><strong>Geriye gidebilme:</strong> Bazen çok kullanışlı</li>
            <li><strong>Kolay silme:</strong> Önceki node'u bulmaya gerek yok</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>Dezavantajı:</h3>
          <ul>
            <li><strong>Daha fazla bellek:</strong> Her node'da 2 pointer</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>LinkedList vs Array - Kapışma!</h2>
        
        <table className="comparison-table">
          <thead>
            <tr>
              <th>İşlem</th>
              <th>Array</th>
              <th>LinkedList</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Erişim (i'nci eleman)</strong></td>
              <td>O(1) ⚡</td>
              <td>O(n) 🐌</td>
            </tr>
            <tr>
              <td><strong>Başa ekleme</strong></td>
              <td>O(n) 🐌</td>
              <td>O(1) ⚡</td>
            </tr>
            <tr>
              <td><strong>Sona ekleme</strong></td>
              <td>O(1) ⚡</td>
              <td>O(n) 🐌</td>
            </tr>
            <tr>
              <td><strong>Ortaya ekleme</strong></td>
              <td>O(n) 🐌</td>
              <td>O(n) 🐌</td>
            </tr>
            <tr>
              <td><strong>Arama</strong></td>
              <td>O(n) 🐌</td>
              <td>O(n) 🐌</td>
            </tr>
            <tr>
              <td><strong>Bellek kullanımı</strong></td>
              <td>Az ⚡</td>
              <td>Fazla 🐌</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>LinkedList Ne Zaman Kullanmalı?</h2>
        
        <div className="topic-card">
          <h3>✅ LinkedList Kullan Eğer:</h3>
          <ul>
            <li><strong>Sık sık başa ekleme</strong> yapıyorsan</li>
            <li><strong>Boyut çok değişkensse</strong></li>
            <li><strong>Bellek parçalanması</strong> sorun değilse</li>
            <li><strong>Undo/Redo</strong> functionality lazımsa</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>❌ LinkedList Kullanma Eğer:</h3>
          <ul>
            <li><strong>Random access</strong> gerekiyorsa (index ile erişim)</li>
            <li><strong>Cache performance</strong> kritikse</li>
            <li><strong>Bellek tasarrufu</strong> önemliyse</li>
            <li><strong>Sık arama</strong> yapacaksan</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>.NET'te LinkedList&lt;T&gt;</h2>
        
        <CodeBlock language="csharp">
{`// .NET'in hazır LinkedList'i
LinkedList<int> list = new LinkedList<int>();

// Ekleme
list.AddFirst(10);  // Başa ekle
list.AddLast(30);   // Sona ekle

LinkedListNode<int> node = list.Find(10); // Node'u bul
list.AddAfter(node, 20); // 10'dan sonra 20 ekle

// Çıktı: 10 ↔ 20 ↔ 30

// Silme
list.Remove(20);    // Değer ile sil
list.RemoveFirst(); // Baştan sil
list.RemoveLast();  // Sondan sil`}
          </CodeBlock>
      </section>

      <section className="section">
        <h2>Pratik Kullanım Örnekleri</h2>
        <ol>
          <li><strong>Undo/Redo sistemi:</strong> Her işlem bir node</li>
          <li><strong>Müzik çalar:</strong> Şarkılar arası geçiş</li>
          <li><strong>Browser history:</strong> İleri/geri butonları</li>
          <li><strong>LRU Cache:</strong> En az kullanılan elemanı at</li>
        </ol>
        <p>LinkedList'i anlamak, pointer mantığını anlamaktır. Bu da daha gelişmiş veri yapılarının (Tree, Graph) temelini oluşturur!</p>
      </section>

      <Notes topicPath="/linkedlist" topicTitle="LinkedList (Bağlı Liste) - Esnek Veri Yapısı" />

      <div className="navigation-links">
        <Link to="/array" className="nav-button">← Array</Link>
        <Link to="/stack" className="nav-button">Stack →</Link>
      </div>
    </div>
  );
}

export default LinkedList;