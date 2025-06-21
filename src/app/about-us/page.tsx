import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About iAutomation | Leading Industrial Control Panel Manufacturer',
  description: 'Discover iAutomation\'s 24+ years of expertise in industrial control panel manufacturing, electrical engineering solutions, and certified quality processes serving diverse industries.',
  keywords: 'industrial control panels, electrical engineering, UL certification, manufacturing, automation solutions',
  openGraph: {
    title: 'About iAutomation | Industrial Control Panel Excellence',
    description: 'Leading manufacturer of industrial control panels with 24+ years of experience, certified processes, and proven expertise across multiple industries.',
    type: 'website',
  },
};

const AboutUsPage = () => {


  const capabilities = [
    {
      title: 'Advanced Manufacturing',
      description: '30,000 sq ft climate-controlled facility with overhead cranes and specialized testing stations',
      icon: '🏭'
    },
    {
      title: 'Quality Assurance',
      description: 'ISO-based processes with 100% testing protocols ensuring zero-defect delivery',
      icon: '✓'
    },
    {
      title: 'Engineering Excellence',
      description: 'Certified engineering staff providing consultative solutions and design optimization',
      icon: '⚡'
    },
    {
      title: 'Project Management',
      description: 'Detailed project oversight ensuring on-time, on-budget delivery every time',
      icon: '📋'
    }
  ];

  const stats = [
    { number: '24+', label: 'Years of Excellence', description: 'Serving industry since 2000' },
    { number: '30K', label: 'Square Feet', description: 'State-of-the-art facility' },
    { number: '100%', label: 'Testing Protocol', description: 'Every panel thoroughly tested' },
    { number: '7', label: 'Diverse Industries', description: 'Cross-platform expertise' }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Engineering Excellence
              <span className="block text-blue-400">Through Experience</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8 leading-relaxed">
              24+ years of proven expertise in industrial control panel manufacturing and electrical engineering solutions
            </p>

          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-6xl space-y-20">

          {/* Company Heritage */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                Our Heritage
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Born from Industry Excellence
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  iAutomation emerged in 2000 as the dedicated outsource partner for a well-established, large-scale machine tool manufacturer who recognized the need to focus their resources on mechanical design while partnering with electrical engineering specialists.
                </p>
                <p>
                  From our strategic location in Fond du Lac, Wisconsin, we rapidly established our reputation for exceptional craftsmanship, unwavering on-time delivery, and meticulous attention to detail. This foundation of excellence has driven our expansion across diverse industrial sectors.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-blue-900 font-medium italic">
                  &quot;Our success stems from understanding that every control panel is critical to our client&apos;s operations. We don&apos;t just build panels—we engineer reliability.&quot;
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl transform rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=800&auto=format&fit=crop" 
                  alt="iAutomation Industrial Panel Manufacturing Facility" 
                  width={600} 
                  height={400} 
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-12 lg:p-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions backed by state-of-the-art facilities and certified expertise
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-3xl mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Facility Excellence */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl transform -rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop" 
                  alt="iAutomation Engineering Team Collaboration" 
                  width={600} 
                  height={400} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 lg:order-first">
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                World-Class Facility
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                30,000 Square Feet of Manufacturing Excellence
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our purpose-built facility represents the pinnacle of modern manufacturing infrastructure. Beginning with our initial 20,000 square foot facility in 2006, we expanded by an additional 10,000 square feet in 2010, incorporating advanced climate control systems and material handling capabilities.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Material Handling</h4>
                  <p className="text-gray-600 text-sm">4-ton overhead cranes with precision positioning</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Loading Infrastructure</h4>
                  <p className="text-gray-600 text-sm">Flat-bed & enclosed trailer loading docks</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Testing Capabilities</h4>
                  <p className="text-gray-600 text-sm">Multiple voltage stations up to 570V</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Flexible Production</h4>
                  <p className="text-gray-600 text-sm">Adaptable work cells for all project sizes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="bg-gradient-to-br from-slate-900 to-gray-800 text-white rounded-3xl p-12 lg:p-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Zero-Defect Quality Assurance</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive quality management system ensures every panel meets the highest standards
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">ISO-Based Documentation</h3>
                <p className="text-gray-300">Rigorous documentation processes following ISO 9001:2015 standards for consistent, traceable quality</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">100% Testing Protocol</h3>
                <p className="text-gray-300">Comprehensive testing including power-on verification, continuity checks, wire pull tests, and torque validation</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Expert Validation</h3>
                <p className="text-gray-300">Certified assembly staff provide additional engineering cross-checks throughout the manufacturing process</p>
              </div>
            </div>
          </div>



          {/* Value Proposition */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                The iAutomation Advantage
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Why Industry Leaders Choose iAutomation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our consultative approach combines deep industry knowledge with proven engineering excellence. We don&apos;t just fulfill specifications—we optimize solutions to deliver superior value, reliability, and performance.
              </p>
              <div className="space-y-4">
                {[
                  'Cost optimization through value engineering',
                  'Detailed project management and tracking',
                  'Certified engineering staff and quality systems',
                  'Guaranteed on-time, on-budget delivery',
                  'Open-door policy for inspections and collaboration',
                  'Flexible, responsive partnership approach'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Partner with Excellence?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Whether your internal electrical resources are stretched thin or you&apos;re seeking a proven outsource partner, iAutomation delivers the experience and reliability you need.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span className="text-blue-100">Free consultation and project assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span className="text-blue-100">Detailed proposal within 48 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  <span className="text-blue-100">Transparent pricing and timeline</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-3xl p-12 lg:p-16 text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Your Trusted Industrial Control Panel Partner</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-orange-100 leading-relaxed">
              Join the hundreds of companies who rely on iAutomation for mission-critical electrical engineering solutions. Experience the difference that 24+ years of specialized expertise makes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link 
                href="/contact-us" 
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex-1 text-center"
              >
                Get Started Today
              </Link>
              <Link 
                href="/quote" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-all duration-300 flex-1 text-center"
              >
                Request Quote
              </Link>
            </div>
            <p className="text-orange-200 text-sm mt-4">
              Response within 24 hours • Free consultation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;