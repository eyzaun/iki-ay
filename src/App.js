import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Hafta1 from "./components/haftalar/hafta1";
import Hafta2 from "./components/haftalar/hafta2";
import Hafta3 from "./components/haftalar/hafta3";
import Hafta4 from "./components/haftalar/hafta4";
import Hafta5 from "./components/haftalar/hafta5";
import Hafta6 from "./components/haftalar/hafta6";
import Hafta7 from "./components/haftalar/hafta7";
import Hafta8 from "./components/haftalar/hafta8";
import BigO from "./components/konular/hafta1/big-o";
import Array from "./components/konular/hafta1/array";
import LinkedList from "./components/konular/hafta1/linkedlist/LinkedList";
import Stack from "./components/konular/hafta1/stack/Stack";
import Queue from "./components/konular/hafta1/queue/Queue";
import HashMap from "./components/konular/hafta1/hashmap/HashMap";
import Hafta1Quiz from "./components/konular/hafta1/hafta1-quiz/Hafta1Quiz";
import Hafta2Quiz from "./components/konular/hafta2/hafta2-quiz/Hafta2Quiz";
import Hafta3Quiz from "./components/konular/hafta3/hafta3-quiz/Hafta3Quiz";
import Hafta4Quiz from "./components/konular/hafta4/hafta4-quiz/Hafta4Quiz";
import Hafta5Quiz from "./components/konular/hafta5/hafta5-quiz/Hafta5Quiz";
import Hafta6Quiz from "./components/konular/hafta6/hafta6-quiz/Hafta6Quiz";
import Hafta7Quiz from "./components/konular/hafta7/hafta7-quiz/Hafta7Quiz";
import Hafta8Quiz from "./components/konular/hafta8/hafta8-quiz/Hafta8Quiz";
// 2. Hafta Component'leri
import BinaryTree from "./components/konular/hafta2/binary-tree/BinaryTree";
import BST from "./components/konular/hafta2/bst/BST";
import DFS from "./components/konular/hafta2/bfs-dfs/DFS";
import BFS from "./components/konular/hafta2/bfs-dfs/BFS";
import Sorting from "./components/konular/hafta2/merge-ve-quick/Sorting";
import BSTAdvanced from "./components/konular/hafta2/map-ve-struct/BSTAdvanced";
import QuizHafta2 from "./components/konular/hafta2/pointers-interfaces/Quiz";
import Projeler from "./components/projeler/Projeler";
import Kaynaklar from "./components/kaynaklar/Kaynaklar";
import TopNav from "./components/ui/TopNav";
import { CodePrefsProvider } from "./context/CodePrefsContext";
import { UIThemeProvider } from "./context/UIThemeContext";
import { DesignLanguageProvider } from "./context/DesignLanguageContext";
import { AuthProvider } from "./context/AuthContext";
import { NotesProvider } from "./context/NotesContext";
import SettingsPage from "./components/settings/SettingsPage";
import Login from "./components/auth/Login";
import AllNotes from "./components/notes/AllNotes";
import "./design/design.css";
// 3. Hafta Component'leri
import DynamicProgramming from "./components/konular/hafta3/dynamic-programming/DynamicProgramming";
import Greedy from "./components/konular/hafta3/greedy/Greedy";
import SlidingWindow from "./components/konular/hafta3/sliding-window/SlidingWindow";
import UnionFind from "./components/konular/hafta3/union-find/UnionFind";
import TopologicalSort from "./components/konular/hafta3/topological-sort/TopologicalSort";
import RecursionBacktracking from "./components/konular/hafta3/recursion-backtracking/RecursionBacktracking";
import NotesWidget from "./components/notes/NotesWidget";

function App() {
  return (
    <AuthProvider>
      <NotesProvider>
        <CodePrefsProvider>
          <UIThemeProvider>
            <DesignLanguageProvider>
          <Router>
            <TopNav />
            {/* Global Notes widget (launcher + overlay) */}
            <NotesWidget />
            <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hafta1" element={<Hafta1 />} />
          <Route path="/hafta2" element={<Hafta2 />} />
          <Route path="/hafta3" element={<Hafta3 />} />
          <Route path="/hafta4" element={<Hafta4 />} />
          <Route path="/hafta5" element={<Hafta5 />} />
          <Route path="/hafta6" element={<Hafta6 />} />
          <Route path="/hafta7" element={<Hafta7 />} />
          <Route path="/hafta8" element={<Hafta8 />} />
          <Route path="/giris" element={<Login />} />
          <Route path="/kayit" element={<Login />} />
          <Route path="/notlarim" element={<AllNotes />} />
          <Route path="/big-o" element={<BigO />} />
          <Route path="/array" element={<Array />} />
          <Route path="/linkedlist" element={<LinkedList />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/hashmap" element={<HashMap />} />
          {/* 2. Hafta Route'ları */}
          <Route path="/binary-tree" element={<BinaryTree />} />
          <Route path="/bst" element={<BST />} />
          <Route path="/dfs" element={<DFS />} />
          <Route path="/bfs" element={<BFS />} />
          <Route path="/sorting" element={<Sorting />} />
          <Route path="/bst-advanced" element={<BSTAdvanced />} />
          <Route path="/quiz-hafta2" element={<QuizHafta2 />} />
          {/* 3. Hafta Route'ları */}
          <Route path="/dynamic-programming" element={<DynamicProgramming />} />
          <Route path="/greedy" element={<Greedy />} />
          <Route path="/sliding-window" element={<SlidingWindow />} />
          <Route path="/union-find" element={<UnionFind />} />
          <Route path="/topological-sort" element={<TopologicalSort />} />
          <Route path="/recursion-backtracking" element={<RecursionBacktracking />} />
          <Route path="/hafta1-quiz" element={<Hafta1Quiz />} />
          <Route path="/hafta2-quiz" element={<Hafta2Quiz />} />
          <Route path="/hafta3-quiz" element={<Hafta3Quiz />} />
          <Route path="/hafta4-quiz" element={<Hafta4Quiz />} />
          <Route path="/hafta5-quiz" element={<Hafta5Quiz />} />
          <Route path="/hafta6-quiz" element={<Hafta6Quiz />} />
          <Route path="/hafta7-quiz" element={<Hafta7Quiz />} />
          <Route path="/hafta8-quiz" element={<Hafta8Quiz />} />
          <Route path="/projeler" element={<Projeler />} />
          <Route path="/kaynaklar" element={<Kaynaklar />} />
          <Route path="/ayarlar" element={<SettingsPage />} />
        </Routes>
        </Router>
            </DesignLanguageProvider>
        </UIThemeProvider>
      </CodePrefsProvider>
      </NotesProvider>
    </AuthProvider>
  );
}

export default App;