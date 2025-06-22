import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About iAutomation | Leading Industrial Control Panel Manufacturer',
  description: 'Discover iAutomation\'s 24+ years of expertise in industrial control panel manufacturing, electrical engineering solutions, and certified quality processes serving diverse industries.',
  keywords: 'industrial control panels, electrical engineering, UL certification, manufacturing, automation solutions',
  openGraph: {
    title: 'About IndustrialTEK | Industrial Control Panel Excellence',
    description: 'Leading manufacturer of industrial control panels with 24+ years of experience, certified processes, and proven expertise across multiple industries.',
    type: 'website',
  },
};

const AboutUsPage = () => {


  const capabilities = [
    {
      title: 'Advanced Manufacturing',
      description: '2000 sq ft facility with overhead cranes and specialized testing stations',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 20a2 2 0 1 0-4 0" />
          <path d="M18 10a2 2 0 1 0-4 0" />
          <path d="M6 10a2 2 0 1 0-4 0" />
          <path d="M18 4H6" />
          <path d="M18 8H6" />
          <path d="M16 12h-8" />
          <path d="M12 12H6" />
          <path d="M16 16H6" />
          <path d="m14 16 2 4" />
          <path d="m10 16-2 4" />
          <path d="M12 8V4" />
          <path d="m12 20-2-4" />
          <path d="M12 20 14 16" />
        </svg>
      ),
    },
    {
      title: 'Quality Assurance',
      description: 'ISO-based processes with 100% testing protocols ensuring zero-defect delivery',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
    },
    {
      title: 'Engineering Excellence',
      description: 'Certified engineering staff providing consultative solutions and design optimization',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      title: 'Project Management',
      description: 'Detailed project oversight ensuring on-time, on-budget delivery every time',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="M12 11h4" />
          <path d="M12 16h4" />
          <path d="M8 11h.01" />
          <path d="M8 16h.01" />
        </svg>
      ),
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
              8+ years of proven expertise in industrial control panel manufacturing and electrical engineering solutions
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
                  IndustrialTEK emerged in 2017 as the dedicated outsource partner for a well-established, large-scale machine tool manufacturer who recognized the need to focus their resources on mechanical design while partnering with electrical engineering specialists.
                </p>
                <p>
                  From our strategic location in Coimbatore, Tamilnadu, India. we rapidly established our reputation for exceptional craftsmanship, unwavering on-time delivery, and meticulous attention to detail. This foundation of excellence has driven our expansion across diverse industrial sectors.
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
                  src="/SPM__3.jpg" 
                  alt=" Industrial Panel Manufacturing Facility" 
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
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 transform hover:-translate-y-2 group flex flex-col items-start">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-full mb-6 shadow-lg shadow-blue-500/20 text-white transform group-hover:scale-110 transition-transform">
                    <capability.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
            {/* Mobile Scroller */}
            <div className="md:hidden -mx-4">
              <div className="flex overflow-x-auto space-x-6 px-4 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex-shrink-0 w-[80%] max-w-[300px] bg-white p-6 rounded-2xl shadow-lg border border-gray-100/50">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full mr-4 shadow-md shadow-blue-500/20 text-white">
                        <capability.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{capability.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">{capability.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Innovation Hub */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl transform -rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/robo.jpg" 
                  alt="Advanced Engineering Innovation Center" 
                  width={600} 
                  height={400} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 lg:order-first">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                Innovation Center
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Technology Excellence
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our state-of-the-art engineering center combines cutting-edge technology with proven methodologies to deliver exceptional automation solutions. Our dedicated R&D facility focuses on emerging technologies, ensuring we stay ahead of industry trends and deliver future-ready solutions to our clients.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Digital Twin Lab</h4>
                  <p className="text-gray-600 text-sm">Virtual system modeling and simulation testing</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">IoT Integration</h4>
                  <p className="text-gray-600 text-sm">Industry 4.0 connectivity and edge computing</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">AI-Driven Analytics</h4>
                  <p className="text-gray-600 text-sm">Predictive maintenance and optimization algorithms</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Rapid Prototyping</h4>
                  <p className="text-gray-600 text-sm">3D printing and agile development processes</p>
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
                The IndustrialTEK Advantage
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
            <h2 className="text-4xl font-bold mb-6">Your Trusted Industrial Engineering Partner</h2>
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