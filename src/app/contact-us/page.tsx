import React from 'react';
import type { Metadata } from 'next';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | PanelTEK',
  description: 'Get in touch with iAutomation for a quote or any inquiries about our industrial control panel and electrical engineering services.',
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
              <h1 className="text-4xl font-bold text-gray-800 mb-8">iAutomation</h1>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">130 East Larsen Drive</p>
                <p className="text-lg">Fond du Lac, Wisconsin 54937</p>
                
                <div className="pt-4">
                  <p className="text-lg font-semibold">Phone: 920.906.9457</p>
                </div>
                
                <div className="pt-6">
                  <button className="bg-red-600 text-white px-8 py-3 font-bold hover:bg-red-700 transform -skew-x-12">
                    <span className="block transform skew-x-12">VIEW MAP</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-gray-700 leading-relaxed">
                Please fill out the form for more information on your electrical engineering project. We&apos;ll get back to you right away with ideas and maybe even things you didn&apos;t consider that will help you with what you&apos;re trying to accomplish. Our goal is to simplify your process, increase efficiency, and save you money.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;