import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Latest News | PanelTEK',
  description: 'Stay up-to-date with the latest news, articles, and updates from iAutomation.',
};

// Placeholder data for news articles
const newsData = [
  {
    id: 1,
    title: 'iAutomation Expands Facility to 30,000 Square Feet',
    date: 'October 26, 2023',
    excerpt: 'To keep up with growing demand and to continue providing top-tier services, we have expanded our facility, adding 10,000 square feet of production space and a new overhead crane...',
    slug: 'facility-expansion-2023',
  },
  {
    id: 2,
    title: 'Achieving Ignition Gold Certification',
    date: 'September 15, 2023',
    excerpt: 'We are proud to announce that our engineering team has achieved Gold Level Certification for the Ignition SCADA platform, enhancing our ability to deliver powerful and flexible automation solutions...',
    slug: 'ignition-gold-certification',
  },
  {
    id: 3,
    title: 'Partnering with Rockwell Automation for Enhanced Machine Safety',
    date: 'August 02, 2023',
    excerpt: 'Our ongoing partnership with Rockwell Automation allows us to integrate the latest machine safety designs and technologies, ensuring the highest level of protection and compliance for our clients...',
    slug: 'rockwell-automation-partnership',
  },
];

const LatestNewsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* News Articles Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {newsData.map((article) => (
              <article key={article.id} className="bg-white p-8 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
                <header>
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    <Link href={`/latest-news/${article.slug}`} className="hover:text-red-600 transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                </header>
                <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                  <p>{article.excerpt}</p>
                </div>
                <footer>
                  <Link href={`/latest-news/${article.slug}`} className="font-semibold text-red-600 hover:text-red-800 transition-colors">
                    Read More →
                  </Link>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestNewsPage;
