import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Customer Experiences | PanelTEK',
  description: 'Read testimonials from our satisfied customers and learn why iAutomation is a trusted partner for industrial control panel solutions.',
};

const testimonials = [
  {
    quote: 'The team at iAutomation has been a critical partner for us. Their attention to detail, from design to delivery, is unmatched. They consistently deliver high-quality panels on schedule, which is crucial for our production timelines.',
    author: 'John D., Senior Project Manager',
    company: 'Global Machine Tools Inc.',
  },
  {
    quote: 'We turned to iAutomation for a complex control system for our new biotech facility. Their engineers were not only knowledgeable but also incredibly collaborative. They listened to our needs and delivered a solution that exceeded our expectations in both performance and reliability.',
    author: 'Samantha R., Lead Automation Engineer',
    company: 'PharmaSolutions',
  },
  {
    quote: 'As a fast-growing food and beverage company, we needed a partner who could scale with us. iAutomation has been that partner. Their flexible work cells and expert team have handled everything we’ve thrown at them, from small prototype panels to large-scale system integrations.',
    author: 'Michael B., Director of Operations',
    company: 'FreshFare Foods',
  },
  {
    quote: 'The quality and craftsmanship of the control panels from iAutomation are top-notch. Their 100% testing process gives us peace of mind, knowing that every panel we receive is ready for deployment without any issues. Their open-door policy and responsive project management make them a pleasure to work with.',
    author: 'David L., Plant Manager',
    company: 'EnviroTech Systems',
  },
];

const CustomerExperiencesPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-500 text-white py-20 lg:py-28 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Trusted by Industry Leaders
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-green-100">
            See what our customers have to say about their experience with iAutomation.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <blockquote className="text-lg text-gray-700 border-l-4 border-green-500 pl-6">
                  <p className="mb-4">{testimonial.quote}</p>
                  <footer className="font-bold text-gray-900">
                    {testimonial.author}
                    <span className="block font-normal text-gray-600">{testimonial.company}</span>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join our list of satisfied customers and let us provide the expert engineering solutions your business deserves.
          </p>
          <Link href="/contact-us" className="inline-block bg-white text-red-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CustomerExperiencesPage;
