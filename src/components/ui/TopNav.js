import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './TopNav.css';

const TopNav = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);
  const [hoveredTopic, setHoveredTopic] = useState(null);
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const hideTimer = useRef(null);
  const [isMobile, setIsMobile] = useState(false); // viewport/layout breakpoint
  const [isTouch, setIsTouch] = useState(false);   // input capability for UX decisions
  const dropdownCloseTimer = useRef(null);
  const hoverCloseTimer = useRef(null);
  const lastMoveTimeRef = useRef(0);

  // Header hide/show helpers
  const clearHeaderHide = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };
  const scheduleHeaderHide = (delay = 1500) => {
    clearHeaderHide();
    if (topicsOpen) return; // don't hide while interacting with dropdown
    hideTimer.current = setTimeout(() => setCollapsed(true), delay);
  };

  // Track mobile viewport (layout) and touch capability (UX)
  useEffect(() => {
    const mqViewport = window.matchMedia('(max-width: 1024px)');
    const mqTouch = window.matchMedia('(hover: none) and (pointer: coarse)');
    const update = () => {
      setIsMobile(mqViewport.matches);
      const hasTouch = (typeof window !== 'undefined' && 'ontouchstart' in window)
        || (typeof navigator !== 'undefined' && ((navigator.maxTouchPoints || 0) > 0 || (navigator.msMaxTouchPoints || 0) > 0));
      setIsTouch(mqTouch.matches || hasTouch);
    };
    update();
    mqViewport.addEventListener?.('change', update);
    mqTouch.addEventListener?.('change', update);
    window.addEventListener('resize', update);
    return () => {
      mqViewport.removeEventListener?.('change', update);
      mqTouch.removeEventListener?.('change', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const isShown = !collapsed; // header visibility

  // Hide logic: after 1.5s away from header (no pointer inside), collapse.
  // Do NOT auto-show on scroll/move; only the peek-tab toggles visibility back.
  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;

    const onPointerEnter = () => {
      // do not auto-show; only prevent premature hide while inside
      clearHeaderHide();
    };
    const onPointerLeave = () => {
      scheduleHeaderHide(1500);
    };

    node.addEventListener('pointerenter', onPointerEnter);
    node.addEventListener('pointerleave', onPointerLeave);

    // Initial visible, then schedule hide after 1.5s if user doesn't interact
    scheduleHeaderHide(1500);

    return () => {
      node.removeEventListener('pointerenter', onPointerEnter);
      node.removeEventListener('pointerleave', onPointerLeave);
      clearHeaderHide();
    };
  }, [topicsOpen]);

  // On route change, close menus; do not force header visible (no auto-show)
  useEffect(() => {
    setTopicsOpen(false);
  }, [location.pathname]);
  // Unified behavior: no separate mobile menu/backdrop/body lock

  // Mobile: hide header on outside tap or on scroll (mirror desktop feel)
  useEffect(() => {
    const onDocTouchStart = (e) => {
      const inside = headerRef.current && headerRef.current.contains(e.target);
      if (!inside) {
        setTopicsOpen(false);
        setHoveredTopic(null);
        scheduleHeaderHide(1500);
      }
    };
    const onScroll = () => {
      scheduleHeaderHide(1500);
    };
    const onTouchMove = () => {
      lastMoveTimeRef.current = Date.now();
    };
    if (isTouch || isMobile) {
      document.addEventListener('touchstart', onDocTouchStart, { passive: true });
      document.addEventListener('touchmove', onTouchMove, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => {
        document.removeEventListener('touchstart', onDocTouchStart);
        document.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, [isTouch, isMobile, scheduleHeaderHide]);

  // Helpers to manage dropdown close timers
  const clearDropdownClose = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
  };
  const scheduleDropdownClose = (delay = 1000) => {
    clearDropdownClose();
    dropdownCloseTimer.current = setTimeout(() => {
      setTopicsOpen(false);
      setHoveredTopic(null);
    }, delay);
  };
  const clearHoverClose = () => {
    if (hoverCloseTimer.current) {
      clearTimeout(hoverCloseTimer.current);
      hoverCloseTimer.current = null;
    }
  };
  const scheduleHoverClose = (key, delay = 1000) => {
    clearHoverClose();
    hoverCloseTimer.current = setTimeout(() => {
      setHoveredTopic((cur) => (cur === key ? null : cur));
    }, delay);
  };

  // Clear timers on unmount
  useEffect(() => () => { clearDropdownClose(); clearHoverClose(); }, []);

  // Weeks with their topics and questions
  const weeks = [
    {
      key: 'hafta1',
      label: '1. Hafta',
      route: '/hafta1',
      topics: [
        { label: 'Big-O Notation', route: '/big-o' },
        { label: 'Array', route: '/array' },
        { label: 'LinkedList', route: '/linkedlist' },
        { label: 'Stack', route: '/stack' },
        { label: 'Queue', route: '/queue' },
        { label: 'HashMap', route: '/hashmap' },
      ],
      questions: [
        '/big-o/soru1', '/big-o/soru2', '/big-o/soru3', '/big-o/soru4', '/big-o/soru5',
        '/array/soru1', '/array/soru2', '/array/soru3', '/array/soru4', '/array/soru5', '/array/soru6',
        '/linkedlist/soru1', '/linkedlist/soru2', '/linkedlist/soru3', '/linkedlist/soru4', '/linkedlist/soru5',
        '/stack/soru1', '/stack/soru2', '/stack/soru3', '/stack/soru4', '/stack/soru5',
        '/queue/soru1', '/queue/soru2', '/queue/soru3', '/queue/soru4', '/queue/soru5',
        '/hashmap/soru1', '/hashmap/soru2', '/hashmap/soru3', '/hashmap/soru4', '/hashmap/soru5'
      ]
    },
    {
      key: 'hafta2',
      label: '2. Hafta',
      route: '/hafta2',
      topics: [
        { label: 'Binary Tree', route: '/binary-tree' },
        { label: 'Binary Search Tree (BST)', route: '/bst' },
        { label: 'Tree Traversal - DFS', route: '/dfs' },
        { label: 'BFS & Graph Yapıları', route: '/bfs' },
        { label: 'Sorting Algorithms', route: '/sorting' },
        { label: 'Binary Search Advanced', route: '/bst-advanced' },
      ],
      questions: [
        '/binary-tree/soru1', '/binary-tree/soru2', '/binary-tree/soru3', '/binary-tree/soru4', '/binary-tree/soru5',
        '/bst/soru1', '/bst/soru2', '/bst/soru3', '/bst/soru4', '/bst/soru5',
        '/dfs/soru1', '/dfs/soru2', '/dfs/soru3', '/dfs/soru4', '/dfs/soru5',
        '/bfs/soru1', '/bfs/soru2', '/bfs/soru3', '/bfs/soru4', '/bfs/soru5',
        '/sorting/soru1', '/sorting/soru2', '/sorting/soru3', '/sorting/soru4', '/sorting/soru5',
        '/bst-advanced/soru1', '/bst-advanced/soru2', '/bst-advanced/soru3', '/bst-advanced/soru4', '/bst-advanced/soru5'
      ]
    },
    {
      key: 'hafta3',
      label: '3. Hafta',
      route: '/hafta3',
      topics: [
        { label: 'Dynamic Programming', route: '/dynamic-programming' },
        { label: 'Greedy Algorithms', route: '/greedy' },
        { label: 'Sliding Window', route: '/sliding-window' },
        { label: 'Union-Find', route: '/union-find' },
        { label: 'Topological Sort', route: '/topological-sort' },
        { label: 'Recursion & Backtracking', route: '/recursion-backtracking' },
      ],
      questions: [
        '/dynamic-programming/soru1', '/dynamic-programming/soru2', '/dynamic-programming/soru3', '/dynamic-programming/soru4', '/dynamic-programming/soru5',
        '/greedy/soru1', '/greedy/soru2', '/greedy/soru3', '/greedy/soru4', '/greedy/soru5',
        '/sliding-window/soru1', '/sliding-window/soru2', '/sliding-window/soru3', '/sliding-window/soru4', '/sliding-window/soru5',
        '/union-find/soru1', '/union-find/soru2', '/union-find/soru3', '/union-find/soru4', '/union-find/soru5',
        '/topological-sort/soru1', '/topological-sort/soru2', '/topological-sort/soru3', '/topological-sort/soru4', '/topological-sort/soru5',
        '/recursion-backtracking/soru1', '/recursion-backtracking/soru2', '/recursion-backtracking/soru3', '/recursion-backtracking/soru4', '/recursion-backtracking/soru5'
      ]
    },
    {
      key: 'hafta4',
      label: '4. Hafta',
      route: '/hafta4',
      topics: [
        { label: 'SQL CRUD Operations', route: '/sql-crud' },
        { label: 'SQL Filtering', route: '/sql-filtering' },
        { label: 'SQL Joins', route: '/sql-joins' },
        { label: 'SQL Group By', route: '/sql-groupby' },
        { label: 'SQL Subqueries', route: '/sql-subqueries' },
        { label: 'SQL Views & Indexes', route: '/sql-views-index' },
        { label: 'SQL ACID', route: '/sql-acid' },
      ],
      questions: [
        '/sql-crud/soru1', '/sql-crud/soru2', '/sql-crud/soru3', '/sql-crud/soru4', '/sql-crud/soru5',
        '/sql-filtering/soru1', '/sql-filtering/soru2', '/sql-filtering/soru3', '/sql-filtering/soru4', '/sql-filtering/soru5',
        '/sql-joins/soru1', '/sql-joins/soru2', '/sql-joins/soru3', '/sql-joins/soru4', '/sql-joins/soru5',
        '/sql-groupby/soru1', '/sql-groupby/soru2', '/sql-groupby/soru3', '/sql-groupby/soru4', '/sql-groupby/soru5',
        '/sql-subqueries/soru1', '/sql-subqueries/soru2', '/sql-subqueries/soru3', '/sql-subqueries/soru4', '/sql-subqueries/soru5',
        '/sql-views-index/soru1', '/sql-views-index/soru2', '/sql-views-index/soru3', '/sql-views-index/soru4', '/sql-views-index/soru5',
        '/sql-acid/soru1', '/sql-acid/soru2', '/sql-acid/soru3', '/sql-acid/soru4', '/sql-acid/soru5'
      ]
    },
    {
      key: 'hafta5',
      label: '5. Hafta',
      route: '/hafta5',
      topics: [
        { label: 'Database Normalization', route: '/normalization' },
        { label: 'Index Performance', route: '/index-performance' },
        { label: 'Transaction Isolation', route: '/transaction-isolation' },
        { label: 'Explain Plan', route: '/explain-plan' },
        { label: 'NoSQL Databases', route: '/nosql' },
        { label: 'MongoDB', route: '/mongodb' },
      ],
      questions: [
        '/normalization/soru1', '/normalization/soru2', '/normalization/soru3', '/normalization/soru4', '/normalization/soru5',
        '/index-performance/soru1', '/index-performance/soru2', '/index-performance/soru3', '/index-performance/soru4', '/index-performance/soru5',
        '/transaction-isolation/soru1', '/transaction-isolation/soru2', '/transaction-isolation/soru3', '/transaction-isolation/soru4', '/transaction-isolation/soru5',
        '/explain-plan/soru1', '/explain-plan/soru2', '/explain-plan/soru3', '/explain-plan/soru4', '/explain-plan/soru5',
        '/nosql/soru1', '/nosql/soru2', '/nosql/soru3', '/nosql/soru4', '/nosql/soru5',
        '/mongodb/soru1', '/mongodb/soru2', '/mongodb/soru3', '/mongodb/soru4', '/mongodb/soru5'
      ]
    },
    {
      key: 'hafta6',
      label: '6. Hafta',
      route: '/hafta6',
      topics: [
        { label: 'Process & Thread', route: '/process-thread' },
        { label: 'CPU Scheduling', route: '/cpu-scheduling' },
        { label: 'Context Switching', route: '/context-switching' },
        { label: 'Memory Management', route: '/memory-management' },
        { label: 'Synchronization', route: '/synchronization' },
        { label: 'Deadlock', route: '/deadlock' },
        { label: 'Producer-Consumer', route: '/producer-consumer' },
      ],
      questions: [
        '/process-thread/soru1', '/process-thread/soru2', '/process-thread/soru3', '/process-thread/soru4', '/process-thread/soru5',
        '/cpu-scheduling/soru1', '/cpu-scheduling/soru2', '/cpu-scheduling/soru3', '/cpu-scheduling/soru4', '/cpu-scheduling/soru5',
        '/context-switching/soru1', '/context-switching/soru2', '/context-switching/soru3', '/context-switching/soru4', '/context-switching/soru5',
        '/memory-management/soru1', '/memory-management/soru2', '/memory-management/soru3', '/memory-management/soru4', '/memory-management/soru5',
        '/synchronization/soru1', '/synchronization/soru2', '/synchronization/soru3', '/synchronization/soru4', '/synchronization/soru5',
        '/deadlock/soru1', '/deadlock/soru2', '/deadlock/soru3', '/deadlock/soru4', '/deadlock/soru5',
        '/producer-consumer/soru1', '/producer-consumer/soru2', '/producer-consumer/soru3', '/producer-consumer/soru4', '/producer-consumer/soru5'
      ]
    },
    {
      key: 'hafta7',
      label: '7. Hafta',
      route: '/hafta7',
      topics: [
        { label: 'Git Basics', route: '/git-basics' },
        { label: 'Git Workflow', route: '/git-workflow' },
        { label: 'Git Advanced', route: '/git-advanced' },
        { label: 'Clean Code', route: '/clean-code' },
        { label: 'SOLID Principles', route: '/solid' },
        { label: 'Unit Testing', route: '/unit-testing' },
        { label: 'Test Coverage', route: '/test-coverage' },
      ],
      questions: [
        '/git-basics/soru1', '/git-basics/soru2', '/git-basics/soru3', '/git-basics/soru4', '/git-basics/soru5',
        '/git-workflow/soru1', '/git-workflow/soru2', '/git-workflow/soru3', '/git-workflow/soru4', '/git-workflow/soru5',
        '/git-advanced/soru1', '/git-advanced/soru2', '/git-advanced/soru3', '/git-advanced/soru4', '/git-advanced/soru5',
        '/clean-code/soru1', '/clean-code/soru2', '/clean-code/soru3', '/clean-code/soru4', '/clean-code/soru5',
        '/solid/soru1', '/solid/soru2', '/solid/soru3', '/solid/soru4', '/solid/soru5',
        '/unit-testing/soru1', '/unit-testing/soru2', '/unit-testing/soru3', '/unit-testing/soru4', '/unit-testing/soru5',
        '/test-coverage/soru1', '/test-coverage/soru2', '/test-coverage/soru3', '/test-coverage/soru4', '/test-coverage/soru5'
      ]
    },
    {
      key: 'hafta8',
      label: '8. Hafta',
      route: '/hafta8',
      topics: [
        { label: 'Docker', route: '/docker' },
        { label: 'CI/CD', route: '/cicd' },
        { label: 'Design Patterns - Repository', route: '/design-patterns-repository' },
        { label: 'Design Patterns - Factory', route: '/design-patterns-factory' },
        { label: 'Design Patterns - Strategy', route: '/design-patterns-strategy' },
        { label: 'Design Patterns - Observer', route: '/design-patterns-observer' },
        { label: 'Design Patterns - Decorator', route: '/design-patterns-decorator' },
        { label: 'Capstone Project', route: '/capstone' },
      ],
      questions: [
        '/docker/soru1', '/docker/soru2', '/docker/soru3', '/docker/soru4', '/docker/soru5',
        '/cicd/soru1', '/cicd/soru2', '/cicd/soru3', '/cicd/soru4', '/cicd/soru5',
        '/design-patterns-repository/soru1', '/design-patterns-repository/soru2', '/design-patterns-repository/soru3', '/design-patterns-repository/soru4', '/design-patterns-repository/soru5',
        '/design-patterns-factory/soru1', '/design-patterns-factory/soru2', '/design-patterns-factory/soru3', '/design-patterns-factory/soru4', '/design-patterns-factory/soru5',
        '/design-patterns-strategy/soru1', '/design-patterns-strategy/soru2', '/design-patterns-strategy/soru3', '/design-patterns-strategy/soru4', '/design-patterns-strategy/soru5',
        '/design-patterns-observer/soru1', '/design-patterns-observer/soru2', '/design-patterns-observer/soru3', '/design-patterns-observer/soru4', '/design-patterns-observer/soru5',
        '/design-patterns-decorator/soru1', '/design-patterns-decorator/soru2', '/design-patterns-decorator/soru3', '/design-patterns-decorator/soru4', '/design-patterns-decorator/soru5',
        '/capstone/soru1', '/capstone/soru2', '/capstone/soru3', '/capstone/soru4', '/capstone/soru5'
      ]
    }
  ];

  return (
    <>
      {/* Peek tab to restore menu when header is collapsed */}
      {collapsed && (
        <button
          className="peek-tab"
          onClick={() => {
            // Avoid accidental opens on mobile right after a scroll/drag gesture
            if (isTouch) {
              const now = Date.now();
              if (now - lastMoveTimeRef.current < 300) return;
            }
            setCollapsed(false);
          }}
          aria-label="Menüyü göster"
        >
          Menü
        </button>
      )}

      <header
        className={`topnav ${isShown ? 'shown' : 'collapsed'}`}
        ref={headerRef}
      >
        <div className="brand">
          <Link to="/">İki Ay</Link>
        </div>

        <div className="menu-wrapper">
          <nav ref={menuRef} className={`menu`}>
            {/* Removed redundant Home link; brand already navigates home */}

          {/* Konular dropdown (shared for desktop & mobile). On touch, tap week to open its submenu. */}
            <div
              className={`dropdown ${topicsOpen ? 'open' : ''}`}
              onPointerEnter={() => { if (!isTouch) { clearDropdownClose(); setTopicsOpen(true); } }}
              onPointerLeave={() => { if (!isTouch) { scheduleDropdownClose(1000); } }}
            >
              <button
                className="dropdown-toggle"
                onClick={() => { clearDropdownClose(); setTopicsOpen(v => !v); }}
                aria-expanded={topicsOpen}
                aria-haspopup="menu"
              >
                Konular
              </button>
              <div
                className="dropdown-menu"
                role="menu"
                onPointerEnter={() => { if (!isTouch) { clearDropdownClose(); setTopicsOpen(true); } }}
                onPointerLeave={() => { if (!isTouch) { scheduleDropdownClose(1000); } }}
              >
                {weeks.map((week) => (
                  <div
                    key={week.key}
                    className={`topic-row ${week.topics ? 'has-submenu' : ''}`}
                    onPointerEnter={() => { if (!isTouch) { clearHoverClose(); clearDropdownClose(); setTopicsOpen(true); setHoveredTopic(week.key); } }}
                    onPointerLeave={() => { if (!isTouch) { scheduleHoverClose(week.key, 1000); } }}
                  >
                    <>
                      <NavLink
                        to={week.route}
                        role="menuitem"
                        className="menuitem"
                        onClick={(e) => {
                          if (isTouch) {
                            if (hoveredTopic !== week.key) {
                              // First tap: open submenu (do not navigate)
                              e.preventDefault();
                              clearHoverClose();
                              clearDropdownClose();
                              setHoveredTopic(week.key);
                              setTopicsOpen(true);
                            } else {
                              // Second tap on the same week: allow navigation
                              clearDropdownClose();
                              setTopicsOpen(false);
                            }
                          } else {
                            clearDropdownClose();
                            setTopicsOpen(false);
                          }
                        }}
                      >
                        {week.label}
                      </NavLink>
                      {hoveredTopic === week.key && (
                        <div
                          className="submenu"
                          role="menu"
                          onPointerEnter={() => { if (!isTouch) { clearHoverClose(); clearDropdownClose(); setTopicsOpen(true); } }}
                        >
                          <div className="submenu-section">
                            <div className="submenu-title">Konular</div>
                            {(week.topics || []).map((topic) => (
                              <NavLink key={topic.route} to={topic.route} role="menuitem" onClick={() => { clearDropdownClose(); setTopicsOpen(false); }}>{topic.label}</NavLink>
                            ))}
                          </div>
                          <div className="submenu-section">
                            <NavLink to={`/hafta${week.key.slice(-1)}-quiz`} role="menuitem" className="questions-link" onClick={() => { clearDropdownClose(); setTopicsOpen(false); }}>
                              Sorular ({week.questions?.length ?? 0})
                            </NavLink>
                          </div>
                        </div>
                      )}
                    </>
                  </div>
                ))}
              </div>
            </div>

            <NavLink to="/hackerrank">Hackerrank</NavLink>
            <NavLink to="/projeler">Projeler</NavLink>
            <NavLink to="/kaynaklar">Kaynaklar</NavLink>
            <NavLink to="/ayarlar">Ayarlar</NavLink>

            {/* Auth inline after Ayarlar */}
            {user ? (
              <>
                <NavLink to="/notlarim">Notlarım</NavLink>
                <button onClick={() => { logout(); }} className="nav-button">Çıkış Yap</button>
              </>
            ) : (
              <NavLink to="/giris" className="auth-link">Giriş Yap</NavLink>
            )}
          </nav>
        </div>
        {/* Collapse toggle removed per request */
        }
      </header>
    </>
  );
};

export default TopNav;
