import React from 'react';
import Image from 'next/image';

const industries = [
  { 
    name: 'Machine Tool', 
    image: 'https://images.unsplash.com/photo-1562887189-e5d078243e4d?q=80&w=800&auto=format&fit=crop',
    description: 'Precision control systems for CNC machines, lathes, and manufacturing equipment.'
  },
  { 
    name: 'Bio-Tech & Pharmaceutical', 
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    description: 'Clean room compliant automation for critical pharmaceutical processes.'
  },
  { 
    name: 'Food & Beverage', 
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop',
    description: 'Sanitary automation solutions meeting FDA and USDA standards.'
  },
  { 
    name: 'Water & Wastewater', 
    image: 'https://images.unsplash.com/photo-1500902869226-39f77e6c02a8?q=80&w=800&auto=format&fit=crop',
    description: 'Environmental control systems for water treatment facilities.'
  },
  { 
    name: 'Environmental & Emissions', 
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=800&auto=format&fit=crop',
    description: 'Monitoring and control for environmental compliance systems.'
  },
  { 
    name: 'Paper & Converting', 
    image: 'https://images.unsplash.com/photo-1588339339228-d3308e33480b?q=80&w=800&auto=format&fit=crop',
    description: 'High-speed automation for paper processing and converting operations.'
  },
  { 
    name: 'OEM Equipment', 
    image: 'https://images.unsplash.com/photo-1617198341385-635a3135b51b?q=80&w=800&auto=format&fit=crop',
    description: 'Custom control solutions for original equipment manufacturers.'
  },
  { 
    name: 'General Manufacturing', 
    image: 'https://images.unsplash.com/photo-1580982327522-46a04a245557?q=80&w=800&auto=format&fit=crop',
    description: 'Versatile automation systems for diverse manufacturing applications.'
  },
];

const capabilities = [
  {
    title: 'Custom Control Panel Design',
    description: 'Engineered specifically for your application with optimized layouts and component selection.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
      </svg>
    )
  },
  {
    title: 'PLC Programming & Integration',
    description: 'Expert programming across multiple platforms including Allen-Bradley, Siemens, and more.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
    )
  },
  {
    title: 'HMI & SCADA Development',
    description: 'Intuitive human-machine interfaces for streamlined operations and monitoring.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    )
  },
  {
    title: 'System Integration',
    description: 'Seamless integration with existing equipment and enterprise systems.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
      </svg>
    )
  }
];

const stats = [
  { number: '25+', label: 'Years Experience' },
  { number: '500+', label: 'Projects Completed' },
  { number: '99.5%', label: 'On-Time Delivery' },
  { number: '24/7', label: 'Support Available' }
];

const IndustriesPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1920&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Automation Controls for<br />
            <span className="text-red-500">Multiple Industries</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed mb-8">
            Expert engineering and custom control panel solutions tailored to your industry&apos;s unique needs and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact-us" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg">
              Get Free Consultation
            </a>
            <a href="/portfolio" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg">
              View Our Work
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

      {/* Industries Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Decades of experience across diverse sectors, delivering specialized automation solutions for each industry&apos;s unique challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="relative h-56">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation solutions backed by engineering expertise and cutting-edge technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg text-red-600 flex-shrink-0">
                    {capability.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Industry Experts Helping You Serve Your Customers
              </h2>
              <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
                <p>
                  iAutomation&apos;s engineering group has worked with customers in a wide range of applications suited to their unique needs and requirements. Serving diverse industries keeps us up to date in constantly changing and evolving manufacturing practices.
                </p>
                <p>
                  We listen to your requirements and preferences, to personalize our service to build electrical control panels and provide engineering support to meet your exacting standards, keeping your lead times in mind and deliver on-time.
                </p>
                <p>
                  Our established supplier relationships help us to stay abreast of current technology and trends for programming and automation, and advancements in hardware and componentry. Because of our experience working with different platforms and brands of components, we can offer you the best available solution.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop"
                alt="Industrial automation control panel"
                width={800}
                height={384}
                className="w-full h-auto object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">ISO 9001</div>
                <div className="text-sm opacity-90">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial consultation to final implementation, we follow a structured approach to ensure project success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your requirements and challenges' },
              { step: '02', title: 'Design', desc: 'Custom engineering and system architecture' },
              { step: '03', title: 'Build', desc: 'Manufacturing and programming your solution' },
              { step: '04', title: 'Deploy', desc: 'Installation, testing, and ongoing support' }
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
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-xl max-w-4xl mx-auto mb-10 leading-relaxed opacity-90">
            Whether you need a shortened timeline from prototype to implementation, increased efficiencies in production, or compliance with industry standards, we provide quality assistance throughout the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact-us" 
              className="inline-block bg-white text-red-600 px-10 py-4 rounded-lg font-bold shadow-lg text-lg"
            >
              Request a Free Quote
            </a>
            <a 
              href="/case-studies" 
              className="inline-block border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;