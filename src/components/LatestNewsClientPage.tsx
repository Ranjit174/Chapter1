'use client';

import { useState } from 'react';
import Link from 'next/link';
import { industrialNewsData, marketStats, getCategoryColor } from '@/lib/news-data';

const LatestNewsClientPage = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
      // Here you would typically handle the form submission, e.g., send to an API
      console.log('Subscribed with:', email);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-slate-800">Industrial Automation News</h1>
          <p className="text-slate-500 mt-1">Insights, trends, and analysis on Industry 4.0</p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {industrialNewsData.map(article => (
              <article key={article.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${getCategoryColor(article.category)}`}></span>
                  <span>{article.category}</span>
                  <span className="mx-2">·</span>
                  <span>{article.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                  <Link href={`/news/${article.id}`} className="hover:text-blue-600 transition-colors">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Market Stats */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Market Snapshot</h3>
              <ul className="space-y-4">
                {marketStats.map(stat => (
                  <li key={stat.label} className="flex justify-between items-center">
                    <span className="text-slate-600">{stat.label}</span>
                    <span className="font-bold text-green-600">
                      {stat.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg text-white text-center sticky top-24">
              <h3 className="text-2xl font-bold mb-4">Stay Ahead of the Curve</h3>
              <p className="text-slate-300 mb-6">
                Subscribe to our newsletter for weekly insights and analysis on industrial automation.
              </p>
              {subscribed ? (
                <div className="bg-green-500 text-white font-bold py-3 px-4 rounded-lg">
                  Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-md bg-slate-700 text-white border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default LatestNewsClientPage; 