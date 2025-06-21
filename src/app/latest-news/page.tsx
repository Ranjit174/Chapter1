'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { industrialNewsData, marketStats, getCategoryColor } from '@/lib/news-data';

const IndustrialAutomationNewsPage = () => {
  const [visibleArticles, setVisibleArticles] = useState(5);
  const [email, setEmail] = useState('');
  const [expandedArticleId, setExpandedArticleId] = useState<number | null>(null);

  const loadMoreArticles = () => {
    setVisibleArticles((prev) => prev + 5);
  };

  const handleToggleArticle = (articleId: number) => {
    setExpandedArticleId(expandedArticleId === articleId ? null : articleId);
  };

  const handleSubscription = () => {
    // Basic email validation
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 min-h-screen">
      {/* Hero Section with Market Stats */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              🏭 Industrial Automation News Hub
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Latest insights in PLC, SCADA, IoT & Manufacturing Efficiency
            </p>
          </div>
          
          {/* Market Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4">
                <div className="text-2xl lg:text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Industry News & Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay ahead with the most recent developments in industrial automation, 
              manufacturing efficiency, and emerging technologies.
            </p>
          </div>

          <div className="space-y-8">
            {industrialNewsData.slice(0, visibleArticles).map((article, index) => {
              const isExpanded = expandedArticleId === article.id;
              return (
              <article 
                key={article.id} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <header className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <time className="text-sm text-gray-500">{article.date}</time>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    <Link 
                      href={`/industrial-news/${article.slug}`} 
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      {article.title}
                    </Link>
                  </h2>
                </header>

                <div className="prose prose-lg max-w-none text-gray-700 mb-6 transition-all duration-500">
                  <p className="leading-relaxed">{isExpanded ? article.fullContent : article.excerpt}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag, tagIndex) => (
                    <button 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>

                <footer className="flex items-center justify-between">
                  <button 
                    onClick={() => handleToggleArticle(article.id)}
                    className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200 group"
                  >
                    {isExpanded ? 'Show Less' : 'Read Full Article'}
                    <svg 
                      className={`ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 ${isExpanded ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div className="text-sm text-gray-500">
                    📊 Industry Analysis
                  </div>
                </footer>
              </article>
            )})}
          </div>

          {/* Load More Section */}
          {visibleArticles < industrialNewsData.length && (
            <div className="text-center mt-12">
              <button 
                onClick={loadMoreArticles}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Industry Insights Footer */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Connected with Industry Trends</h3>
          <p className="text-gray-300 mb-6">
            Get the latest updates on industrial automation, IoT innovations, and manufacturing efficiency delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg text-gray-900 w-full sm:w-auto sm:min-w-[300px]"
            />
            <button 
              onClick={handleSubscription}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrialAutomationNewsPage;