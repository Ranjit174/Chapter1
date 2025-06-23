import React from 'react';
import type { Metadata } from 'next';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: "Contact IndustrialTEK | Get a Quote for Your Automation Project",
  description: "Contact us for a quote on electrical control panels, PLC programming, SPM building, or OEE software. Let's discuss your industrial automation needs today.",
};

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">IndustrialTEK</h1>
              <p className="text-xl text-blue-600 font-semibold mb-8">Industrial Control Panel Experts</p>
             

            </div>

            {/* Hook Content */}
            <div className="pt-8 bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Revolutionize Your Industrial Process?
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  <strong>Stop losing money on inefficient systems.</strong> Our electrical engineering experts don&apos;t just solve problems – we uncover opportunities you never knew existed.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">What You&apos;ll Get:</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>✓ Free consultation with innovative solutions</li>
                    <li>✓ Custom strategies to cut operational costs</li>
                    <li>✓ Expert insights you won&apos;t find anywhere else</li>
                    <li>✓ Streamlined processes that boost efficiency</li>
                  </ul>
                </div>
                
                <p className="text-lg font-semibold text-gray-800 bg-yellow-100 p-3 rounded-lg">
                  <span className="text-yellow-600">⚡</span> Get your project started today – we respond within 24 hours with actionable ideas and cost-saving recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Let&apos;s Engineer Your Solution</h2>
              <p className="text-gray-600">Partner with us to bring your industrial project to life</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;