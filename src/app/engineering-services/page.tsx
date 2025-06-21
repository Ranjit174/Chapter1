import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Electrical Engineering Services | PanelTEK',
  description: 'iAutomation offers comprehensive electrical engineering services including control panel design, layout, programming, system start-up, and documentation.',
};

const EngineeringServicesPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-20 lg:py-28 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            We’ve Got Your Control Panel Engineering Services Covered
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
            Leverage our 100+ years of combined experience for your electrical engineering projects.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <p className="text-xl text-gray-600 leading-relaxed">
            Can you use added insights when you’re working on electrical engineering projects? Would it help you to work with an engineering team with proven practices and over 100 years of combined experience? Choose iAutomation as your single source for all your electrical engineering needs, including design, layout, programming, system start-up, documentation services, support, and project maintenance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            iAutomation engineers can work as an extension of your team, providing much needed support from design, layout, and programming to system start-up, project management, and custom builds.
          </p>

          <div className="pt-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Proven Engineering Services for Control Panel Design</h2>
            
            <div className="space-y-16">
              {/* Electrical Engineering Section */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">Electrical Engineering</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We’ll design and layout your industrial control panels per specifications or your drawings/design. We also do AutoCAD drafting electrical schematics design—a powerful tool in expert hands. We design compliant with UL, NFPA70, NFP79, and CE Mark standards to eliminate equipment failure, downtime, and ensure worker safety. Engineering works closely with our dedicated purchasing department to assure best pricing, availability, and support from our supply chain partners.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Image src="https://images.unsplash.com/photo-1581092921462-699de70c3b8a?q=80&w=800&auto=format&fit=crop" alt="Electrical Engineering Schematics" width={600} height={400} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Control/Automation Engineering Section */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-lg overflow-hidden shadow-xl md:order-last transform hover:scale-105 transition-transform duration-300">
                  <Image src="https://images.unsplash.com/photo-1633493725743-d853a18d23e9?q=80&w=800&auto=format&fit=crop" alt="Control and Automation Engineering" width={600} height={400} className="w-full h-full object-cover" />
                </div>
                <div className="prose prose-lg max-w-none md:order-first">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">Control/Automation Engineering</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Whether you need us for your control panel design, or we build your design to spec, we build electrical control panels based on best practices of UL/CE/NEC and more. We’ll identify the best technologies and components for the application. We are proficient in Allen-Bradley/Rockwell Automation PLC Programming, VFD, soft starts, and more. We also partner with Ignition to create a sustainable process and function.
                  </p>
                </div>
              </div>

              {/* Software Engineering Section */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">Software Engineering</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We have over 60 combined years of experience with Rockwell Automation Software—both FactoryTalk Machine Edition and Server Edition. We’re Ignition Gold Certified Integrators who work with Ignition SCADA—a highly flexible software with built-in reporting, alarming, recipe management, and more. With our vast experience in an array of industries, we utilize the best HMI/OIT for your specific needs.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Image src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop" alt="Software Engineering and Development" width={600} height={400} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Additional electrical engineering services & capabilities include:</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>Custom integration</li>
              <li>AutoCAD Electrical</li>
              <li>Allen-Bradley PLC programming</li>
              <li>Certified/Tenured Engineering Staff</li>
              <li>Dedicated Project Management</li>
              <li>Dedicated Purchasing</li>
            </ul>
          </div>

          <div className="pt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Control Panel Engineering Services You Can Rely On</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our engineering group has industry experience, and they are dedicated to helping you meet the demands of the markets you serve. No project is too large or too small. From prototypes to full production, operator stations to multi-door control cabinets, we have the knowledge and expertise to handle it all. We maintain all the appropriate industry certifications and standards. Our capabilities reach across technology platforms and we have the necessary facilities and staff to handle your most demanding applications. We are dedicated to being your long-term partner and we have invested in the resources to make that possible.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Control panel engineering services include:</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>Assembly by trained & experienced teams</li>
              <li>Design/Layout/Build</li>
              <li>Outsource for overflow</li>
              <li>Cost saving solutions and options</li>
              <li>Final testing of all control panels</li>
              <li>Power on</li>
              <li>Continuity</li>
              <li>Torque</li>
            </ul>
          </div>

          <div className="pt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Electrical Engineering Support through a Strategic Partnership Approach</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              iAutomation offers customer-focused solutions, detailed project management, custom integration, and options for cost saving strategies while adhering to industry best practices.  Email us or call us today to see how our team can assist you with delivering your project on time and on budget. Tell us what you need—our engineers love to listen and then get to work designing you what you didn’t even know you needed. Let us know what we can do to exceed your expectations.
            </p>
          </div>
            
          <div className="mt-12 text-center">
            <Link href="/contact-us" className="inline-block bg-orange-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Contact Our Engineers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineeringServicesPage;
