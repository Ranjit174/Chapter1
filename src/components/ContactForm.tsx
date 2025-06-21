'use client'

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    interests: [] as string[],
    otherInterest: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, value]
        : prev.interests.filter(interest => interest !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company*
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            I am interested in*
          </label>
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="general"
                value="General Inquiry"
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <label htmlFor="general" className="ml-2 text-sm text-gray-700">
                General Inquiry
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="engineering"
                value="Engineering Services"
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <label htmlFor="engineering" className="ml-2 text-sm text-gray-700">
                Engineering Services
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="panel"
                value="Panel Assembly"
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <label htmlFor="panel" className="ml-2 text-sm text-gray-700">
                Panel Assembly
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="quote"
                value="Request For Quote"
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <label htmlFor="quote" className="ml-2 text-sm text-gray-700">
                Request For Quote
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="other"
                value="Other"
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <label htmlFor="other" className="ml-2 text-sm text-gray-700">
                Other
              </label>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">(Check all that apply)</p>
        </div>

        <div>
          <input
            type="text"
            name="otherInterest"
            value={formData.otherInterest}
            onChange={handleInputChange}
            placeholder="[group other-interest]"
            className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
