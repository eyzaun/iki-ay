import React from 'react';
import Notes from '../../../notes/Notes';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import CodeBlock from '../../../ui/CodeBlock';

function RecursionBacktracking() {
  return (
    <div className="app-container">
      <SEO
        title="Recursion & Backtracking - Özyineleme | İki Ay"
        description="Recursion ve Backtracking tekniklerini öğren. Divide & Conquer, Permutations, Subsets problemleri."
        canonical="https://iki-ay.web.app/recursion-backtracking"
        og={{ url: 'https://iki-ay.web.app/recursion-backtracking' }}
      />

      <div className="content-header">
        <h1>Recursion & Backtracking - Özyineleme</h1>
  <Link to="/hafta3" className="back-link">3. Hafta'ya Dön</Link>
      </div>

      <section className="section">
        <h2>Recursion Nedir? Neden Önemli?</h2>
        <p>
          Recursion, <strong>bir fonksiyonun kendini çağırması</strong>dır. Karmaşık problemleri küçük parçalara böler.
          "Divide & Conquer" stratejisinin temelidir!
        </p>

        <h3>Gerçek Hayattan Benzetme: Matruşka Bebekleri</h3>
        <p>Rus matruşka bebeklerini düşün:</p>
        <ul>
          <li><strong>En dış bebek:</strong> Ana problem</li>
          <li><strong>İçindeki bebek:</strong> Alt problem</li>
          <li><strong>En içteki bebek:</strong> Base case</li>
          <li><strong>Açma süreci:</strong> Recursive çağrılar</li>
        </ul>
        <p>İşte recursion da tam böyle çalışır!</p>
      </section>

      <section className="section">
        <h2>Recursion'ın 3 Temel Bileşeni</h2>

        <div className="topic-card">
          <h3>1. Base Case - Durma Koşulu</h3>
          <p>Recursion'ın durduğu yer. Sonsuz döngüye girmemek için şart!</p>
          <CodeBlock language="csharp">
{`public int Factorial(int n)
{
    // Base case: n=0 veya n=1
    if (n <= 1) return 1;
    
    // Recursive case
    return n * Factorial(n - 1);
}

// Base case olmadan: Stack overflow!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Recursive Case - Kendini Çağırma</h3>
          <p>Problemi küçülterek tekrar çağırma</p>
          <CodeBlock language="csharp">
{`public int Fibonacci(int n)
{
    if (n <= 1) return n; // Base case
    
    // İki recursive çağrı
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// Her çağrı problemi küçültür: n -> n-1, n-2`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. Stack Frame - Çağrı Yığını</h3>
          <p>Her recursive çağrı stack'te yeni frame oluşturur</p>
          <CodeBlock language="csharp">
{`// Factorial(3) çağrısı:
// Stack: [Factorial(3)] -> 3 * Factorial(2)
// Stack: [Factorial(3), Factorial(2)] -> 2 * Factorial(1)
// Stack: [Factorial(3), Factorial(2), Factorial(1)] -> 1
// Stack: [Factorial(3), Factorial(2)] -> 2 * 1 = 2
// Stack: [Factorial(3)] -> 3 * 2 = 6
// Stack: [] -> 6`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Klasik Recursive Problemler</h2>

        <div className="topic-card">
          <h3>1. Tower of Hanoi</h3>
          <p>3 çubuk, n disk. Tüm diskleri 3. çubuğa taşı</p>
          <CodeBlock language="csharp">
{`public void Hanoi(int n, char from, char to, char aux)
{
    if (n == 1)
    {
        Console.WriteLine($"Move disk 1 from {from} to {to}");
        return;
    }
    
    // n-1 diskleri auxiliary'ye taşı
    Hanoi(n - 1, from, aux, to);
    
    // En büyük disk'i hedefe taşı
    Console.WriteLine($"Move disk {n} from {from} to {to}");
    
    // n-1 diskleri auxiliary'den hedefe taşı
    Hanoi(n - 1, aux, to, from);
}

// Time: O(2^n) - exponential!`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Binary Tree Traversal</h3>
          <CodeBlock language="csharp">
{`public void InorderTraversal(TreeNode node)
{
    if (node == null) return; // Base case
    
    InorderTraversal(node.left);   // Sol alt ağaç
    Console.Write(node.val + " "); // Kök
    InorderTraversal(node.right);  // Sağ alt ağaç
}

// Preorder: Kök, Sol, Sağ
// Postorder: Sol, Sağ, Kök`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Backtracking - Geri İzleme</h2>
        <p>Backtracking, recursive olarak tüm olasılıkları dener, yanlış yoldaysa geri döner.</p>

        <div className="topic-card">
          <h3>1. N-Queens Problem</h3>
          <p>N×N tahtaya N veziri yerleştir ki birbirini yemesinler</p>
          <CodeBlock language="csharp">
{`public List<List<string>> SolveNQueens(int n)
{
    List<List<string>> result = new List<List<string>>();
    char[][] board = new char[n][];
    for (int i = 0; i < n; i++)
    {
        board[i] = new char[n];
        Array.Fill(board[i], '.');
    }
    
    Backtrack(board, 0, result);
    return result;
}

private void Backtrack(char[][] board, int row, List<List<string>> result)
{
    if (row == board.Length)
    {
        // Solution found!
        List<string> solution = new List<string>();
        foreach (var r in board)
            solution.Add(new string(r));
        result.Add(solution);
        return;
    }
    
    for (int col = 0; col < board.Length; col++)
    {
        if (IsValid(board, row, col))
        {
            board[row][col] = 'Q';
            Backtrack(board, row + 1, result);
            board[row][col] = '.'; // Backtrack
        }
    }
}

private bool IsValid(char[][] board, int row, int col)
{
    // Check column
    for (int i = 0; i < row; i++)
        if (board[i][col] == 'Q') return false;
    
    // Check diagonal
    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
        if (board[i][j] == 'Q') return false;
    
    for (int i = row - 1, j = col + 1; i >= 0 && j < board.Length; i--, j++)
        if (board[i][j] == 'Q') return false;
    
    return true;
}`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>2. Subsets (Power Set)</h3>
          <p>Bir array'in tüm alt kümelerini üret</p>
          <CodeBlock language="csharp">
{`public List<List<int>> Subsets(int[] nums)
{
    List<List<int>> result = new List<List<int>>();
    Backtrack(nums, 0, new List<int>(), result);
    return result;
}

private void Backtrack(int[] nums, int start, List<int> current, List<List<int>> result)
{
    // Her adımda current subset'i ekle
    result.Add(new List<int>(current));
    
    for (int i = start; i < nums.Length; i++)
    {
        current.Add(nums[i]);
        Backtrack(nums, i + 1, current, result);
        current.RemoveAt(current.Count - 1); // Backtrack
    }
}

// Time: O(2^n), Space: O(2^n)`}
          </CodeBlock>
        </div>

        <div className="topic-card">
          <h3>3. Permutations</h3>
          <p>Array'in tüm permütasyonlarını üret</p>
          <CodeBlock language="csharp">
{`public List<List<int>> Permute(int[] nums)
{
    List<List<int>> result = new List<List<int>>();
    Backtrack(nums, 0, result);
    return result;
}

private void Backtrack(int[] nums, int start, List<List<int>> result)
{
    if (start == nums.Length)
    {
        result.Add(new List<int>(nums));
        return;
    }
    
    for (int i = start; i < nums.Length; i++)
    {
        Swap(nums, start, i);
        Backtrack(nums, start + 1, result);
        Swap(nums, start, i); // Backtrack
    }
}

private void Swap(int[] nums, int i, int j)
{
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Recursion vs Iteration</h2>

        <div className="topic-card">
          <h3>Recursion Avantajları:</h3>
          <ul>
            <li><strong>Clean code:</strong> Daha okunabilir</li>
            <li><strong>Natural:</strong> Bazı problemlerde doğal</li>
            <li><strong>Divide & Conquer:</strong> Kolay implementasyon</li>
            <li><strong>Tree problems:</strong> Mükemmel</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>Recursion Dezavantajları:</h3>
          <ul>
            <li><strong>Stack overflow:</strong> Derin recursion'da</li>
            <li><strong>Memory overhead:</strong> Stack frames</li>
            <li><strong>Slower:</strong> Function call overhead</li>
            <li><strong>Debugging:</strong> Daha zor</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Memoization - Recursion Optimization</h2>

        <div className="topic-card">
          <h3>Fibonacci with Memoization</h3>
          <CodeBlock language="csharp">
{`Dictionary<int, long> memo = new Dictionary<int, long>();

public long FibonacciMemo(int n)
{
    if (n <= 1) return n;
    if (memo.ContainsKey(n)) return memo[n];
    
    long result = FibonacciMemo(n - 1) + FibonacciMemo(n - 2);
    memo[n] = result;
    return result;
}

// Time: O(n), Space: O(n)
// Exponential -> Linear!`}
          </CodeBlock>
        </div>
      </section>

      <section className="section">
        <h2>Recursion Pattern Recognition</h2>

        <div className="topic-card">
          <h3>Recursion Kullan Eğer:</h3>
          <ul>
            <li><strong>Tree/Graph traversal:</strong> DFS, inorder vs.</li>
            <li><strong>Divide & Conquer:</strong> Merge sort, quick sort</li>
            <li><strong>Combinatorial problems:</strong> Permutations, combinations</li>
            <li><strong>Memoization ile:</strong> DP problems</li>
          </ul>
        </div>

        <div className="topic-card">
          <h3>Recursion Kullanma Eğer:</h3>
          <ul>
            <li><strong>Derin recursion:</strong> Stack overflow riski</li>
            <li><strong>Performance critical:</strong> Function call overhead</li>
            <li><strong>Simple loops:</strong> Iteration yeterli</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Interview Tips</h2>
        <ol>
          <li><strong>Base case belirle:</strong> Her zaman önce düşün</li>
          <li><strong>Recursive case yaz:</strong> Problemi küçült</li>
          <li><strong>Stack overflow'a dikkat:</strong> Derinlik kontrolü</li>
          <li><strong>Memoization ekle:</strong> Performance için</li>
          <li><strong>Backtracking pattern:</strong> Dene, geri dön</li>
        </ol>
        <p>Recursion, problem solving'in güçlü aracı! Doğru yerde kullanıldığında çok elegant çözümler verir.</p>
      </section>

      <Notes topicPath="/recursionbacktracking" topicTitle="Recursion & Backtracking - Özyineleme" />

      <div className="navigation-links">
        <Link to="/topological-sort" className="nav-button">Topological Sort</Link>
        <Link to="/hafta3-quiz" className="nav-button">Quiz</Link>
      </div>
    </div>
  );
}

export default RecursionBacktracking;