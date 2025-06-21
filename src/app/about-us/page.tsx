import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | PanelTEK',
  description: 'Learn about the history, expertise, and commitment to quality of iAutomation, a leader in industrial control panel manufacturing and engineering services.',
};

const AboutUsPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-700 text-white py-20 lg:py-28 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            The iAutomation Difference is Experience
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            From our roots in the machine tool industry to a leader in electrical engineering solutions.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">

          {/* History Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our History</h2>
              <p>
                At iAutomation, we can trace our roots directly back to the machine tool industry. A well-established, large-scale machine-tool equipment manufacturer recognized the need to focus their resources on the mechanical design and manufacture of their sophisticated equipment. In 2000, iAutomation became the dedicated outsource partner for all their equipment operation control panels.
              </p>
              <p>
                Located in Fond du Lac, Wisconsin, iAutomation quickly became known for fine craftsmanship, on-time delivery, and attention to detail. As our reputation grew, so did our customer base and expansion into diversified industries.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=800&auto=format&fit=crop" alt="Industrial Panel Shop" width={600} height={400} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Expansion Section */}
          <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Facility & Expansion</h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700">
                <p>
                    In 2006, iAutomation built a new 20,000 square foot facility. In 2010, we added another 10,000 square feet, upgraded our climate control system, and installed an additional overhead crane to expand capacity and keep up with demand.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>4-ton overhead crane(s)</li>
                    <li>Flat-bed & enclosed trailer loading docks</li>
                    <li>Multiple voltage test stations (up to 570V)</li>
                    <li>Flex-space work cells for jobs large and small</li>
                </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl md:order-last">
                <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop" alt="Team Collaboration" width={600} height={400} className="w-full h-full object-cover" />
            </div>
            <div className="prose prose-lg max-w-none md:order-first">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our History Means to You</h2>
              <p>
                When it comes to creative electrical engineering solutions, we know what we’re talking about. We take a consultative approach to learn what your needs are and leverage our experience to offer suggestions. We have an open-door policy, and our certified engineering staff welcomes your visits, questions and input.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Benefits of working with iAutomation:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Options to provide cost savings</li>
                <li>Detailed project management</li>
                <li>Certified engineering staff</li>
                <li>Timely project completion on budget</li>
                <li>Open door policy for visits and inspections</li>
                <li>Flexible and easy to work with</li>
              </ul>
            </div>
          </div>

          {/* Quality Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">How We Achieve High-Quality Results</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-2">ISO-Based Process</h4>
                    <p>We follow a strict ISO-based documentation process for consistency and quality.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-2">100% Testing</h4>
                    <p>All panels undergo rigorous testing: power on, continuity, wire pull, and torque checks.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-xl mb-2">Trained Staff</h4>
                    <p>Our highly trained assembly staff provide an additional engineering cross-check.</p>
                </div>
            </div>
          </div>

          {/* Industries Served */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving Diverse Industries</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-8">
                Our capabilities reach across technology platforms, and we have the necessary facilities and staff to handle your most demanding applications in industries such as:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
                {['Machine Tool', 'Bio-tech & Pharmaceutical', 'Food & Beverage', 'Material Handling', 'Water & Wastewater', 'Environmental & Emissions', 'General Manufacturing'].map(item => (
                    <span key={item} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">{item}</span>
                ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">All the Industry Qualifications You Require</h2>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-gray-600">
                <span className="font-semibold">UL 508 Certification</span>
                <span className="font-semibold">UL 698A HazLoc</span>
                <span className="font-semibold">NFPA 70E (Safety)</span>
                <span className="font-semibold">CE Mark</span>
                <span className="font-semibold">ISO 9001:2000 Compliant</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-100 rounded-lg p-12 mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">An Industrial Control Panel Shop You Can Rely On</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Are your internal electrical resources stretched thin? Looking for a reliable outsource partner—one with proven experience?
            </p>
            <Link href="/contact-us" className="inline-block bg-orange-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
