import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import Notes from '../../../notes/Notes';

function Hafta4Quiz() {
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
        title="Hafta 4 DSA - Soru & Cevap | İki Ay"
        description="4. Hafta ileri seviye Go konularının pekiştirici soru-cevap bölümü. Goroutines, Channels, Pointers, Interfaces quiz."
        canonical="https://iki-ay.web.app/hafta4-quiz"
        og={{ url: 'https://iki-ay.web.app/hafta4-quiz' }}
      />
      
      <div className="content-header">
        <h1>Hafta 4 DSA - Soru & Cevap</h1>
        <p className="quiz-subtitle">İleri seviye Go konularını pekiştirici sorular</p>
        <Link to="/hafta4" className="back-link">← 4. Hafta'ya Dön</Link>
      </div>

      <section className="section quiz-section">
        <h2>Goroutines</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('goroutine1')}>
            <strong>S1:</strong> Goroutine nedir ve nasıl oluşturulur?
            <span className="toggle-indicator">{visibleAnswers.goroutine1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.goroutine1 && (
            <div className="answer">
              <strong>C:</strong> Goroutine, Go'nun lightweight thread'idir. <code>go function()</code> ile oluşturulur. OS thread'lerinden farklı olarak, çok az memory kullanır ve binlercesi aynı anda çalışabilir.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('goroutine2')}>
            <strong>S2:</strong> Goroutine'lerin main function'dan farkı nedir?
            <span className="toggle-indicator">{visibleAnswers.goroutine2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.goroutine2 && (
            <div className="answer">
              <strong>C:</strong> Main function bitince program sonlanır, goroutine'ler beklenmez. <code>time.Sleep()</code> veya <code>sync.WaitGroup</code> ile beklemek gerekir.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('goroutine3')}>
            <strong>S3:</strong> Race condition nedir ve nasıl önlenir?
            <span className="toggle-indicator">{visibleAnswers.goroutine3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.goroutine3 && (
            <div className="answer">
              <strong>C:</strong> Birden fazla goroutine aynı veriye aynı anda erişince oluşur. Mutex, channel veya atomic operations ile önlenir.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Channels</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('channel1')}>
            <strong>S1:</strong> Channel nedir ve nasıl oluşturulur?
            <span className="toggle-indicator">{visibleAnswers.channel1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.channel1 && (
            <div className="answer">
              <strong>C:</strong> Goroutine'ler arası communication için kullanılır. <code>ch := make(chan int)</code> ile oluşturulur. Typed'dır ve thread-safe'dir.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('channel2')}>
            <strong>S2:</strong> Buffered vs Unbuffered channel farkı nedir?
            <span className="toggle-indicator">{visibleAnswers.channel2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.channel2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Unbuffered:</strong> <code>make(chan int)</code> - Sender ve receiver aynı anda hazır olmalı</li>
                <li><strong>Buffered:</strong> <code>make(chan int, 10)</code> - Buffer kadar mesaj sıraya girebilir</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('channel3')}>
            <strong>S3:</strong> Channel closing ve range kullanımı nedir?
            <span className="toggle-indicator">{visibleAnswers.channel3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.channel3 && (
            <div className="answer">
              <strong>C:</strong> <code>close(ch)</code> ile channel kapatılır. <code>for v := range ch</code> ile channel'dan değer okumaya devam eder, channel kapanınca döngü biter.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Pointers & Interfaces</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pointer1')}>
            <strong>S1:</strong> Pointer receiver vs Value receiver farkı nedir?
            <span className="toggle-indicator">{visibleAnswers.pointer1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pointer1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Value receiver:</strong> Struct'ın kopyası üzerinde çalışır</li>
                <li><strong>Pointer receiver:</strong> Orijinal struct üzerinde değişiklik yapabilir</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('interface1')}>
            <strong>S1:</strong> Interface nedir ve nasıl tanımlanır?
            <span className="toggle-indicator">{visibleAnswers.interface1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.interface1 && (
            <div className="answer">
              <strong>C:</strong> Behavior contract'ıdır. <code>type Writer interface {'{'} Write([]byte) (int, error) {'}'}</code> şeklinde tanımlanır. Method set'ini belirtir.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('interface2')}>
            <strong>S2:</strong> Empty interface (interface{'{}'}) ne için kullanılır?
            <span className="toggle-indicator">{visibleAnswers.interface2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.interface2 && (
            <div className="answer">
              <strong>C:</strong> Herhangi bir type'ı kabul eder. Type assertion ile concrete type'a dönüştürülebilir. JSON parsing, generic containers için kullanılır.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Concurrency Patterns</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pattern1')}>
            <strong>S1:</strong> Select statement nedir?
            <span className="toggle-indicator">{visibleAnswers.pattern1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pattern1 && (
            <div className="answer">
              <strong>C:</strong> Birden fazla channel operation'ını bekler. İlk hazır olanı execute eder. Timeout ve default case kullanabilir.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pattern2')}>
            <strong>S2:</strong> Context package ne için kullanılır?
            <span className="toggle-indicator">{visibleAnswers.pattern2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pattern2 && (
            <div className="answer">
              <strong>C:</strong> Request cancellation, timeout, deadline management için. Goroutine'lere sinyal gönderir. HTTP request'lerde çok kullanılır.
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('pattern3')}>
            <strong>S3:</strong> Worker pool pattern nasıl çalışır?
            <span className="toggle-indicator">{visibleAnswers.pattern3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.pattern3 && (
            <div className="answer">
              <strong>C:</strong> Sabit sayıda worker goroutine, job channel'ından task alır, result channel'ına yazar. Load balancing için kullanılır.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Memory Management</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('memory1')}>
            <strong>S1:</strong> Stack vs Heap allocation farkı nedir?
            <span className="toggle-indicator">{visibleAnswers.memory1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.memory1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Stack:</strong> Fast, function scope, automatic cleanup</li>
                <li><strong>Heap:</strong> Slower, global lifetime, garbage collected</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('memory2')}>
            <strong>S2:</strong> Go'da garbage collection nasıl çalışır?
            <span className="toggle-indicator">{visibleAnswers.memory2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.memory2 && (
            <div className="answer">
              <strong>C:</strong> Concurrent mark-and-sweep algoritması kullanır. Stop-the-world pause'ları minimal. Generational değil, whole-heap collection yapar.
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="quiz-summary">
          <h2>Özet</h2>
          <p>Bu sorularla Hafta 4'ün tüm önemli kavramlarını pekiştirmiş oldun! Goroutines, channels, pointers ve interfaces concurrent programming'in temelini oluşturur.</p>
          
          <p><strong>Bir sonraki hafta:</strong> Capstone projeleri ve pratik uygulamalar seni bekliyor!</p>
        </div>
      </section>

      <Notes topicPath="/hafta4-quiz" topicTitle="Hafta 4 DSA - Soru & Cevap" />

      <div className="navigation-links">
        <Link to="/hafta3-quiz" className="nav-button">← 3. Hafta Quiz</Link>
        <Link to="/hafta5" className="nav-button">5. Hafta →</Link>
      </div>
    </div>
  );
}

export default Hafta4Quiz;