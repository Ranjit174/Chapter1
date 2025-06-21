import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries We Serve | PanelTEK',
  description: 'iAutomation provides expert automation and control panel solutions for a wide range of industries, including machine tool, biotech, food & beverage, and more.',
};

const industries = [
  { name: 'Machine Tool', image: 'https://images.unsplash.com/photo-1562887189-e5d078243e4d?q=80&w=800&auto=format&fit=crop' },
  { name: 'Bio-Tech & Pharmaceutical', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop' },
  { name: 'Food & Beverage', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop' },
  { name: 'Water & Wastewater', image: 'https://images.unsplash.com/photo-1500902869226-39f77e6c02a8?q=80&w=800&auto=format&fit=crop' },
  { name: 'Environmental & Emissions', image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=800&auto=format&fit=crop' },
  { name: 'Paper & Converting', image: 'https://images.unsplash.com/photo-1588339339228-d3308e33480b?q=80&w=800&auto=format&fit=crop' },
  { name: 'OEM Equipment', image: 'https://images.unsplash.com/photo-1617198341385-635a3135b51b?q=80&w=800&auto=format&fit=crop' },
  { name: 'General Manufacturing', image: 'https://images.unsplash.com/photo-1580982327522-46a04a245557?q=80&w=800&auto=format&fit=crop' },
];

const IndustriesPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20 lg:py-28 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Automation Controls for Multiple Industries
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Expert engineering and custom control panel solutions tailored to your industry&apos;s unique needs.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="group bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <div className="relative h-48">
                  <Image src={industry.image} alt={industry.name} layout="fill" objectFit="cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Experts Helping You Serve Your Customers</h2>
          <div className="prose prose-lg max-w-none mx-auto text-gray-700 space-y-4">
            <p>
              iAutomation’s engineering group has worked with customers in a wide range of applications suited to their unique needs and requirements. Serving diverse industries keeps us up to date in constantly changing and evolving manufacturing practices. We listen to your requirements and preferences, to personalize our service to build electrical control panels and provide engineering support to meet your exacting standards, keeping your lead times in mind and deliver on-time.
            </p>
            <p>
              Our established supplier relationships help us to stay abreast of current technology and trends for programming and automation, and advancements in hardware and componentry. Because of our experience working with different platforms and brands of components, we can offer you the best available solution.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Custom Automation Controls for Your Industrial Application</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Whether you need a shortened timeline from prototype to implementation, increased efficiencies in production, or compliance with industry standards, we provide quality assistance throughout the process.
          </p>
          <Link href="/contact-us" className="inline-block bg-white text-red-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
