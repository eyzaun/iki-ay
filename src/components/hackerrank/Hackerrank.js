import React from 'react';
import { Link } from 'react-router-dom';
import SEO from "../seo/SEO";

function Hackerrank() {
  return (
    <div className="app-container">
  <SEO
    title="HackerRank ve LeetCode Stratejisi | Go Lang Learn"
    description="Go ile algoritma pratiği için HackerRank ve LeetCode stratejileri, konu önerileri ve progresyon planı."
    canonical="https://go-lang-learn.web.app/hackerrank"
    og={{ url: 'https://go-lang-learn.web.app/hackerrank' }}
    jsonLd={{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'HackerRank ve LeetCode Stratejisi', url: 'https://go-lang-learn.web.app/hackerrank' }}
  />
  <h1>HackerRank ve LeetCode Stratejisi</h1>
  <Link to="/" className="back-link">Ana Sayfa</Link>
      <section className="section">
        <h2>Başlangıç Seviyesi (5-6. Hafta)</h2>
        <p><strong>Easy Problemler:</strong></p>
        <ul>
          <li>Two Sum</li>
          <li>Reverse String</li>
          <li>Valid Palindrome</li>
          <li>Remove Duplicates from Sorted Array</li>
          <li>Maximum Subarray</li>
          <li>Merge Two Sorted Lists</li>
          <li>Valid Parentheses</li>
          <li>Best Time to Buy and Sell Stock</li>
        </ul>
        <p><strong>Çözüm Yaklaşımı:</strong></p>
        <ol>
          <li>Problemi anlayın ve örnekleri inceleyin</li>
          <li>Brute force çözüm düşünün</li>
          <li>Time/Space complexity analizi yapın</li>
          <li>Optimize edin</li>
          <li>Edge case'leri kontrol edin</li>
        </ol>
      </section>
      <section className="section">
        <h2>Orta Seviye (7-8. Hafta)</h2>
        <p><strong>Medium Problemler:</strong></p>
        <ul>
          <li>Container With Most Water</li>
          <li>3Sum</li>
          <li>Letter Combinations of a Phone Number</li>
          <li>Remove Nth Node From End of List</li>
          <li>Generate Parentheses</li>
          <li>Search in Rotated Sorted Array</li>
          <li>Group Anagrams</li>
          <li>Longest Substring Without Repeating Characters</li>
        </ul>
      </section>
    </div>
  );
}

export default Hackerrank;
