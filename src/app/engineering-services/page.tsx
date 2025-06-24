import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Engineering Services | PLC, CNC, Mechanical Design | IndustrialTEK",
  description: "Comprehensive engineering services including PLC programming, CNC machine retrofitting, mechanical design with AutoCAD & SolidWorks, fixture making, and machine maintenance.",
};

const EngineeringServicesPage = () => {
  const services = [
    {
      "title": "Industrial Electrical Engineering & Control Systems",
      "description": "Professional electrical engineering solutions for precision-engineered industrial control panels. Our certified team delivers AutoCAD electrical schematics with full IEC, NEMA, and UL standards compliance.",
      "image": "/A detailed close-up image of a person's hands wearing safety gloves while carefully connecting wires to a neat and organized control panel. The panel should be more visible, showcasing intricate wiring and various c.jpg",
      "features": [
        "Comprehensive BOM analysis and cost optimization",
        "Professional AutoCAD electrical schematic design",
        "Strategic component selection and vendor sourcing",
        "Power distribution system design and load analysis",
        "Integrated safety system design with risk assessment"
      ]
    },
    {
      "title": "Industrial Control & Automation Systems",
      "description": "Comprehensive automation solutions featuring advanced control panel design and multi-platform PLC programming. Our certified engineers deliver scalable systems optimized for maximum operational efficiency and Industry 4.0 integration.",
      "image": "/A detailed photorealistic rendering of the interior of a large industrial factory, showcasing a complex arrangement of heavy machinery and automated systems within a meticulously planned layout.  The image should em.jpg",
      "features": [
        "Multi-platform PLC programming (Allen-Bradley, Siemens, Omron, Mitsubishi, Fanuc, Delta)",
        "Advanced servo drive, VFD, and soft starter integration",
        "Ignition SCADA partnership for sustainable process management",
        "Precision motion control and robotics integration",
        "Data-driven process optimization and performance analytics"
      ]
    },
    {
      "title": "Industrial Software Engineering & HMI Development",
      "description": "Specialized industrial software solutions backed by extensive experience in automation platforms and HMI technologies. Our certified development team delivers enterprise-grade applications tailored to specific industry requirements and operational workflows.",
      "image": "/Create a detailed image of an Indian male engineer, approximately 30-40 years old, wearing a clean, light blue collared shirt and khaki pants, intently programming a large, imposing industrial robotic arm with a lap.jpg",
      "features": [
        "Rockwell FactoryTalk Machine & Server Edition development",
        "Ignition Gold Certified integration and deployment",
        "Custom HMI/IoT solutions with responsive design",
        "Database integration and SQL optimization for industrial systems",
        "Advanced real-time data analytics and reporting dashboards"
      ]
    }
  ];

  const stats = [
    { number: "8+", label: "Years Combined Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "24/7", label: "Support Available" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  const capabilities = [
    { title: "Custom Integration", desc: "Tailored solutions for unique industrial requirements" },
    { title: "AutoCAD Electrical", desc: "Precision design and comprehensive documentation" },
    { title: "PLC Programming", desc: "Allen-Bradley certified expertise and implementation" },
    { title: "Project Management", desc: "Dedicated support throughout project lifecycle" },
    { title: "Quality Assurance", desc: "Comprehensive validation and verification processes" },
    { title: "Technical Support", desc: "Ongoing maintenance and troubleshooting services" }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section 
        className="relative text-white py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/plc.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium">
                Industry-Leading Engineering Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Control Panel
              <span className="block text-blue-400">Engineering Services</span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Transform your industrial automation with our combined expertise. 
              From design to deployment, we deliver professional engineering solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded font-semibold text-lg transition-colors duration-300">
                Request Consultation
              </Link>
              <Link href="#services" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded font-semibold text-lg transition-all duration-300">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Engineering Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your specific industrial automation needs
            </p>
          </div>

          {/* Professional Card Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    width={400} 
                    height={200} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-4 h-4 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Project Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to ongoing maintenance, we provide comprehensive engineering support
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center sm:text-left">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {capability.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Engineering Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional engineering solutions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Understanding your requirements and objectives" },
                { step: "02", title: "Design", desc: "Creating detailed engineering specifications" },
                { step: "03", title: "Implementation", desc: "Professional installation and programming" },
                { step: "04", title: "Support", desc: "Ongoing maintenance and optimization" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Our engineering team is ready to discuss your automation requirements and provide expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded font-semibold text-lg transition-colors duration-300">
                Schedule Consultation
              </Link>
              <Link href="/portfolio" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded font-semibold text-lg transition-all duration-300">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineeringServicesPage;