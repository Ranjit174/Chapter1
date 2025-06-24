import React from 'react';
import Image from 'next/image';
import { BarChart, Cpu, Wifi, Cloud, ShieldCheck, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Industrial IoT & OEE Software | IndustrialTEK",
  description: "Boost your factory's efficiency with our Industrial IoT solutions, OEE software, and efficiency metric software. Achieve real-time monitoring and data-driven decisions.",
};

const iiotSolutions = [
  {
    title: 'Smart Sensor Integration',
    description: 'Deploying and integrating a wide range of sensors to capture critical data from your industrial equipment and environments.',
    icon: <Wifi className="w-8 h-8" />
  },
  {
    title: 'Edge & Cloud Computing',
    description: 'Designing robust architectures for processing data at the edge for real-time response and in the cloud for deep analytics.',
    icon: <Cloud className="w-8 h-8" />
  },
  {
    title: 'Predictive Maintenance',
    description: 'Leveraging machine learning models to predict equipment failures before they happen, minimizing downtime and maintenance costs.',
    icon: <BarChart className="w-8 h-8" />
  },
  {
    title: 'Custom IIoT Dashboards',
    description: 'Creating intuitive, real-time dashboards for visualizing data, monitoring KPIs, and managing your connected operations.',
    icon: <Cpu className="w-8 h-8" />
  },
  {
    title: 'Secure Device Management',
    description: 'Ensuring the security and integrity of your connected devices with robust management and OTA update capabilities.',
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: 'Energy Management Systems',
    description: 'Implementing IIoT solutions to monitor and optimize energy consumption across your facilities for significant cost savings.',
    icon: <Zap className="w-8 h-8" />
  }
];

const stats = [
  { number: '500+', label: 'Devices Connected' },
  { number: '30%', label: 'Avg. Efficiency Gain' },
  { number: '100%', label: 'Data Accuracy' },
  { number: '24/7', label: 'Real-Time Monitoring' }
];

const IoTPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: "url('/oee(over all equipment efficency)dashboard monitoring system.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Industrial Internet of Things
            <span className="text-red-500 block mt-2">(IIoT) Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed mb-8">
            Transform your industrial operations with intelligent, connected systems that provide real-time data, predictive insights, and unmatched efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact-us" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-red-700 transition-all">
              Start Your IIoT Project
            </a>
            <a href="/case-studies" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-all">
              See Our Success Stories
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IIoT Solutions Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our IIoT Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From sensor to cloud, we provide end-to-end IIoT solutions to digitalize your manufacturing and industrial processes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iiotSolutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200/80">
                <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Unlock the Value of Your Industrial Data
              </h2>
              <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
                <p>
                  The Industrial Internet of Things is revolutionizing manufacturing. By connecting your machines, sensors, and systems, you can unlock a wealth of data that drives smarter decisions, predictive maintenance, and optimized workflows.
                </p>
                <p>
                  Our team of IIoT experts works with you to design and implement a scalable and secure platform tailored to your specific operational goals. We handle everything from hardware selection and network architecture to data analytics and dashboard development.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/oee_dash.png"
                alt="IIoT Dashboard showing industrial data"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our IIoT Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured, four-step approach to ensure your IIoT initiative is a success from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Strategy', desc: 'Aligning IIoT goals with your business objectives.' },
              { step: '02', title: 'Architecture & Design', desc: 'Designing the optimal hardware, software, and cloud stack.' },
              { step: '03', title: 'Development & Integration', desc: 'Building the platform and integrating with existing systems.' },
              { step: '04', title: 'Deployment & Scaling', desc: 'Rolling out the solution and providing ongoing support.' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Connected Factory?
          </h2>
          <p className="text-xl max-w-4xl mx-auto mb-10 leading-relaxed opacity-90">
            Let&apos;s discuss how an IIoT solution can reduce your operational costs, increase uptime, and give you a competitive edge. Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact-us" 
              className="inline-block bg-white text-red-600 px-10 py-4 rounded-lg font-bold shadow-lg text-lg hover:bg-gray-200 transition-all"
            >
              Request a Free Consultation
            </a>
            <a 
              href="/case-studies"
              className="inline-block border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-all"
            >
              View IIoT Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoTPage;