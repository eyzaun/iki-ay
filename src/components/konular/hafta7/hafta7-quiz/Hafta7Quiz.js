import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import Notes from '../../../notes/Notes';

function Hafta7Quiz() {
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
        title="Hafta 7 Development Practices - Soru & Cevap | İki Ay"
        description="7. Hafta development practices konularının pekiştirici soru-cevap bölümü. Git, Clean Code, SOLID, Unit Testing, Test Coverage quiz."
        canonical="https://iki-ay.web.app/hafta7-quiz"
        og={{ url: 'https://iki-ay.web.app/hafta7-quiz' }}
      />

      <div className="content-header">
        <h1>Hafta 7 Development Practices - Soru & Cevap</h1>
        <p className="quiz-subtitle">Development practices konularını pekiştirici sorular</p>
        <Link to="/hafta7" className="back-link">← 7. Hafta'ya Dön</Link>
      </div>

      <section className="section quiz-section">
        <h2>Git Basics</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('git1')}>
            <strong>S1:</strong> Git'te working directory, staging area, repository arasındaki fark nedir?
            <span className="toggle-indicator">{visibleAnswers.git1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.git1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Working Directory:</strong> Dosyalarınızın bulunduğu yer</li>
                <li><strong>Staging Area:</strong> Commit'e hazır değişiklikler (.git/index)</li>
                <li><strong>Repository:</strong> Commit edilmiş değişiklikler (.git/objects)</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('git2')}>
            <strong>S2:</strong> git add . vs git add -A arasındaki fark nedir?
            <span className="toggle-indicator">{visibleAnswers.git2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.git2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>git add . :</strong> Current directory'deki değişiklikler (new/modified), deleted files eklemez</li>
                <li><strong>git add -A:</strong> Tüm değişiklikler (new, modified, deleted, untracked)</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('git3')}>
            <strong>S3:</strong> git reset --soft vs --mixed vs --hard farkı nedir?
            <span className="toggle-indicator">{visibleAnswers.git3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.git3 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>--soft:</strong> HEAD'i değiştir, staging area ve working directory değişmez</li>
                <li><strong>--mixed:</strong> HEAD ve staging area değişir, working directory değişmez</li>
                <li><strong>--hard:</strong> Her şeyi değiştir (dikkatli kullan!)</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Git Workflow</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('workflow1')}>
            <strong>S1:</strong> Git Flow vs GitHub Flow arasındaki temel fark nedir?
            <span className="toggle-indicator">{visibleAnswers.workflow1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.workflow1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Git Flow:</strong> Multiple long-running branches (master, develop, feature, release, hotfix)</li>
                <li><strong>GitHub Flow:</strong> Single main branch, feature branches, frequent deployments</li>
                <li>Git Flow enterprise/large teams için, GitHub Flow startup/continuous deployment için</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('workflow2')}>
            <strong>S2:</strong> Pull request'in faydaları nelerdir?
            <span className="toggle-indicator">{visibleAnswers.workflow2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.workflow2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li>Code review imkanı</li>
                <li>Automated testing (CI/CD)</li>
                <li>Documentation of changes</li>
                <li>Knowledge sharing</li>
                <li>Quality gate before merge</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Git Advanced</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('advanced1')}>
            <strong>S1:</strong> git rebase vs git merge farkı nedir?
            <span className="toggle-indicator">{visibleAnswers.advanced1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.advanced1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Merge:</strong> Yeni merge commit oluşturur, history'yi korur</li>
                <li><strong>Rebase:</strong> Commit'leri yeni base'e taşır, linear history oluşturur</li>
                <li>Rebase history'yi temiz tutar ama public branch'lerde tehlikeli</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('advanced2')}>
            <strong>S2:</strong> git cherry-pick ne için kullanılır?
            <span className="toggle-indicator">{visibleAnswers.advanced2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.advanced2 && (
            <div className="answer">
              <strong>C:</strong> Belirli commit'leri başka branch'e kopyalamak için. Hotfix'i birden fazla branch'e uygulamak veya yanlış branch'e yapılan commit'i düzeltmek için kullanılır.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Clean Code</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('clean1')}>
            <strong>S1:</strong> Clean code'un 4 temel prensibi nedir?
            <span className="toggle-indicator">{visibleAnswers.clean1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.clean1 && (
            <div className="answer">
              <strong>C:</strong>
              <ol>
                <li><strong>Meaningful names:</strong> Değişken/fonksiyon isimleri ne yaptığını açıkça belirtmeli</li>
                <li><strong>Functions do one thing:</strong> Her fonksiyon tek sorumluluk</li>
                <li><strong>Small functions:</strong> Kısa, readable fonksiyonlar</li>
                <li><strong>Comments when necessary:</strong> Kod kendini açıklarsa comment'e gerek yok</li>
              </ol>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('clean2')}>
            <strong>S2:</strong> Code smell örnekleri nelerdir?
            <span className="toggle-indicator">{visibleAnswers.clean2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.clean2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li>Long methods/functions</li>
                <li>Duplicate code</li>
                <li>Large classes</li>
                <li>Too many parameters</li>
                <li>Dead code</li>
                <li>Magic numbers</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>SOLID Principles</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('solid1')}>
            <strong>S1:</strong> SOLID prensiplerini açıklayın (kısaca).
            <span className="toggle-indicator">{visibleAnswers.solid1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.solid1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>S - Single Responsibility:</strong> Class'ın tek sorumluluğu olmalı</li>
                <li><strong>O - Open/Closed:</strong> Extension'a açık, modification'a kapalı</li>
                <li><strong>L - Liskov Substitution:</strong> Subtype superclass yerine kullanılabilir</li>
                <li><strong>I - Interface Segregation:</strong> Client'lar kullanmadıkları interface'e bağımlı olmamalı</li>
                <li><strong>D - Dependency Inversion:</strong> High-level modüller low-level'e bağımlı olmamalı</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('solid2')}>
            <strong>S2:</strong> Dependency Inversion prensibinin faydası nedir?
            <span className="toggle-indicator">{visibleAnswers.solid2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.solid2 && (
            <div className="answer">
              <strong>C:</strong> Loose coupling sağlar. High-level modüller abstraction'a bağımlı olur, concrete implementation'a değil. Bu testing'i kolaylaştırır ve değişikliklere karşı esnek yapar.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Unit Testing</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('unit1')}>
            <strong>S1:</strong> Unit test'in özellikleri nelerdir? (FIRST prensibi)
            <span className="toggle-indicator">{visibleAnswers.unit1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.unit1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Fast:</strong> Hızlı çalışmalı</li>
                <li><strong>Independent:</strong> Diğer test'lerden bağımsız</li>
                <li><strong>Repeatable:</strong> Her ortamda aynı sonucu vermeli</li>
                <li><strong>Self-validating:</strong> Pass/fail açık olmalı</li>
                <li><strong>Timely:</strong> Kodla birlikte yazılmalı</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('unit2')}>
            <strong>S2:</strong> Mock vs Stub vs Spy farkı nedir?
            <span className="toggle-indicator">{visibleAnswers.unit2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.unit2 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Stub:</strong> Test için sahte data döner</li>
                <li><strong>Mock:</strong> Behavior verify eder, interaction test eder</li>
                <li><strong>Spy:</strong> Real object wrap eder, calls'ı record eder</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('unit3')}>
            <strong>S3:</strong> Test doubles neden kullanılır?
            <span className="toggle-indicator">{visibleAnswers.unit3 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.unit3 && (
            <div className="answer">
              <strong>C:</strong> Dependencies'i isolate etmek için. Database, network, file system gibi external dependencies yerine test doubles kullanılır. Bu test'leri fast, reliable ve independent yapar.
            </div>
          )}
        </div>
      </section>

      <section className="section quiz-section">
        <h2>Test Coverage</h2>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('coverage1')}>
            <strong>S1:</strong> Farklı coverage türleri nelerdir?
            <span className="toggle-indicator">{visibleAnswers.coverage1 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.coverage1 && (
            <div className="answer">
              <strong>C:</strong>
              <ul>
                <li><strong>Line coverage:</strong> Executed code lines / total lines</li>
                <li><strong>Branch coverage:</strong> Executed branches / total branches</li>
                <li><strong>Function coverage:</strong> Called functions / total functions</li>
                <li><strong>Statement coverage:</strong> Executed statements / total statements</li>
              </ul>
            </div>
          )}
        </div>

        <div className="quiz-item">
          <div className="question" onClick={() => toggleAnswer('coverage2')}>
            <strong>S2:</strong> %100 coverage yeterli midir?
            <span className="toggle-indicator">{visibleAnswers.coverage2 ? '−' : '+'}</span>
          </div>
          {visibleAnswers.coverage2 && (
            <div className="answer">
              <strong>C:</strong> Hayır! Coverage metric'tir, quality guarantee etmez. Önemli olan meaningful test'ler yazmak. %100 coverage olsa bile logic hatalar olabilir veya edge case'ler test edilmemiş olabilir.
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="quiz-summary">
          <h2>Özet</h2>
          <p>Bu sorularla Hafta 7'nin tüm önemli development practices kavramlarını pekiştirmiş oldun! Clean code, testing ve version control, professional software development için vazgeçilmezdir.</p>

          <p><strong>Bir sonraki hafta:</strong> Modern development tools ve capstone project seni bekliyor!</p>
        </div>
      </section>

      <Notes topicPath="/hafta7-quiz" topicTitle="Hafta 7 DSA - Soru & Cevap" />

      <div className="navigation-links">
        <Link to="/test-coverage" className="nav-button">← Test Coverage</Link>
        <Link to="/hafta8" className="nav-button">8. Hafta →</Link>
      </div>
    </div>
  );
}

export default Hafta7Quiz;