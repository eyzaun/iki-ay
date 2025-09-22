import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import Notes from '../../../notes/Notes';

function Hafta6Quiz() {
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswer = (questionId) => {
    setVisibleAnswers(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <div className="app-container">
      <SEO
        title="Hafta 6 OS Concepts - Soru & Cevap | İki Ay"
        description="6. Hafta işletim sistemi konularının pekiştirici soru-cevap bölümü. Process, Thread, CPU Scheduling, Memory Management, Synchronization quiz."
        canonical="https://iki-ay.web.app/hafta6-quiz"
        og={{ url: 'https://iki-ay.web.app/hafta6-quiz' }}
      />

      <div className="content-header">
        <h1>Hafta 6 OS Concepts - Soru & Cevap</h1>
        <p className="quiz-subtitle">İşletim sistemi konularını pekiştirici sorular</p>
  <Link to="/hafta6" className="back-link">6. Hafta'ya Dön</Link>
      </div>

      <section className="section quiz-section">
        <h2>Process & Thread</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('process1')}>
            <strong>S1:</strong> Process ve Thread arasındaki temel fark nedir?
            <span className="toggle-indicator">{visibleAnswers.process1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.process1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Process:</strong> Kendi memory space'i olan bağımsız execution unit</li>
                <li><strong>Thread:</strong> Process içinde shared memory space kullanan execution unit</li>
                <li>Thread'ler daha lightweight ve communication daha kolay</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('process2')}>
            <strong>S2:</strong> Multi-threading'in avantajları nelerdir?
            <span className="toggle-indicator">{visibleAnswers.process2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.process2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li>Responsiveness (UI thread'i bloklanmaz)</li>
                <li>Resource sharing (memory ve file sharing)</li>
                <li>Economy (thread creation process'ten daha ucuz)</li>
                <li>Scalability (multi-core sistemlerde parallelism)</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('process3')}>
            <strong>S3:</strong> Process states (ready, running, waiting, terminated) arasındaki geçişler nasıl olur?
            <span className="toggle-indicator">{visibleAnswers.process3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.process3 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>New -&gt; Ready:</strong> Process oluşturuldu, CPU bekliyor</li>
                <li><strong>Ready -&gt; Running:</strong> Scheduler CPU verdi</li>
                <li><strong>Running -&gt; Waiting:</strong> I/O request veya event bekleme</li>
                <li><strong>Waiting -&gt; Ready:</strong> I/O tamamlandı</li>
                <li><strong>Running -&gt; Terminated:</strong> Process bitti</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>CPU Scheduling</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('cpu1')}>
            <strong>S1:</strong> FCFS, SJF, Round Robin algoritmalarının avantaj/dezavantajları nedir?
            <span className="toggle-indicator">{visibleAnswers.cpu1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.cpu1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>FCFS:</strong> Simple ama convoy effect (uzun process kısa olanları bekletir)</li>
                <li><strong>SJF:</strong> Optimal average waiting time ama starvation riski</li>
                <li><strong>Round Robin:</strong> Fair ama context switching overhead</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('cpu2')}>
            <strong>S2:</strong> Preemptive vs Non-preemptive scheduling farkı nedir?
            <span className="toggle-indicator">{visibleAnswers.cpu2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.cpu2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Non-preemptive:</strong> Process CPU'yu bırakana kadar çalışır</li>
                <li><strong>Preemptive:</strong> Scheduler process'i interrupt edebilir (time quantum, priority)</li>
                <li>Preemptive daha responsive ama complex</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Context Switching</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('context1')}>
            <strong>S1:</strong> Context switching sırasında hangi bilgiler kaydedilir?
            <span className="toggle-indicator">{visibleAnswers.context1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.context1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li>Program Counter (PC)</li>
                <li>CPU registers</li>
                <li>Process state</li>
                <li>Memory management info</li>
                <li>Open file descriptors</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('context2')}>
            <strong>S2:</strong> Context switching overhead'ını minimize etmek için hangi teknikler kullanılır?
            <span className="toggle-indicator">{visibleAnswers.context2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.context2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li>Larger time quantum</li>
                <li>Thread'ler yerine process'ler (daha az context)</li>
                <li>Hardware support (register sets)</li>
                <li>Kernel threads</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Memory Management</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('memory1')}>
            <strong>S1:</strong> Paging vs Segmentation arasındaki fark nedir?
            <span className="toggle-indicator">{visibleAnswers.memory1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.memory1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Paging:</strong> Fixed-size blocks (frames/pages), invisible to programmer</li>
                <li><strong>Segmentation:</strong> Variable-size blocks (segments), visible to programmer</li>
                <li>Paging external fragmentation önler, segmentation logical division sağlar</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('memory2')}>
            <strong>S2:</strong> Virtual memory'nin faydaları nelerdir?
            <span className="toggle-indicator">{visibleAnswers.memory2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.memory2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li>Physical memory'den büyük programlar çalıştırılabilir</li>
                <li>Memory protection (process isolation)</li>
                <li>Memory sharing and efficient allocation</li>
                <li>Relocation support</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('memory3')}>
            <strong>S3:</strong> Thrashing nedir ve nasıl önlenir?
            <span className="toggle-indicator">{visibleAnswers.memory3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.memory3 && (
            <div className="answer">
              <strong>C:</strong> Çok fazla page fault nedeniyle sistemin tamamını paging'e harcadığı durum. Working set model ile veya process sayısını azaltarak önlenir.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Synchronization</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('sync1')}>
            <strong>S1:</strong> Race condition nedir ve nasıl oluşur?
            <span className="toggle-indicator">{visibleAnswers.sync1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.sync1 && (
            <div className="answer">
              <strong>C:</strong> Multiple thread/process aynı shared data'ya aynı anda erişip modify ettiğinde oluşur. Sonuç non-deterministic olur. Critical section problemi.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('sync2')}>
            <strong>S2:</strong> Mutex vs Semaphore farkı nedir?
            <span className="toggle-indicator">{visibleAnswers.sync2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.sync2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Mutex:</strong> Binary semaphore, lock/unlock, ownership</li>
                <li><strong>Semaphore:</strong> Counting semaphore, signal/wait, no ownership</li>
                <li>Mutex mutual exclusion için, semaphore resource counting için</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Deadlock</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('deadlock1')}>
            <strong>S1:</strong> Deadlock oluşması için 4 koşul nedir? (Coffman conditions)
            <span className="toggle-indicator">{visibleAnswers.deadlock1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.deadlock1 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Mutual Exclusion:</strong> Resource aynı anda sadece bir process tarafından kullanılabilir</li>
                <li><strong>Hold and Wait:</strong> Process bir resource beklerken başka resource tutabilir</li>
                <li><strong>No Preemption:</strong> Resource'lar force alınamaz</li>
                <li><strong>Circular Wait:</strong> Process'ler circular şekilde birbirlerini bekler</li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('deadlock2')}>
            <strong>S2:</strong> Deadlock prevention vs avoidance farkı nedir?
            <span className="toggle-indicator">{visibleAnswers.deadlock2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.deadlock2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Prevention:</strong> 4 koşuldan birini eliminate eder (conservative, low resource utilization)</li>
                <li><strong>Avoidance:</strong> Safe state'e izin verir, unsafe state'e geçmez (Banker's algorithm)</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Producer-Consumer Problem</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pc1')}>
            <strong>S1:</strong> Producer-consumer probleminde bounded buffer nasıl implement edilir?
            <span className="toggle-indicator">{visibleAnswers.pc1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pc1 && (
            <div className="answer">
              <strong>C:</strong> İki semaphore kullanılır:
              <ul>
                <li><strong>empty:</strong> Boş slot sayısı (başlangıç: n)</li>
                <li><strong>full:</strong> Dolu slot sayısı (başlangıç: 0)</li>
                <li><strong>mutex:</strong> Buffer'a erişim için</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pc2')}>
            <strong>S2:</strong> Busy waiting (spinlock) ne zaman kullanılır?
            <span className="toggle-indicator">{visibleAnswers.pc2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pc2 && (
            <div className="answer">
              <strong>C:</strong> Critical section çok kısa olduğunda ve context switching maliyeti yüksek olduğunda. Multi-core sistemlerde effective olabilir.
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="quiz-summary">
          <h2>Özet</h2>
          <p>Bu sorularla Hafta 6'nın tüm önemli işletim sistemi kavramlarını pekiştirmiş oldun! OS concepts, concurrent programming ve system design için temel oluşturur.</p>

          <p><strong>Bir sonraki hafta:</strong> Development practices (Git, Clean Code, SOLID, Unit Testing, Test Coverage) seni bekliyor!</p>
        </div>
      </section>

      <Notes topicPath="/hafta6-quiz" topicTitle="Hafta 6 DSA - Soru & Cevap" />

      <div className="navigation-links">
  <Link to="/producer-consumer" className="nav-button">Producer-Consumer</Link>
  <Link to="/hafta7" className="nav-button">7. Hafta</Link>
      </div>
    </div>
  );
}

export default Hafta6Quiz;