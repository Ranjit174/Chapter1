'use client'
import React from 'react';

const testimonials = [
  {
    quote: "iAutomation delivered exactly what they promised. Our manual processes are now fully automated and running smoothly.",
    author: 'Sarah Chen',
    title: 'Operations Manager',
    company: 'TechFlow Industries',
    metrics: ['3-month implementation', '40% time savings', '99% accuracy'],
    avatar: 'SC',
    industry: 'Manufacturing'
  },
  {
    quote: "Professional team that understood our needs. The system has been reliable since day one.",
    author: 'Michael Rodriguez',
    title: 'Plant Supervisor',
    company: 'Advanced Manufacturing',
    metrics: ['Zero downtime', '6-month ROI', 'Easy maintenance'],
    avatar: 'MR',
    industry: 'Manufacturing'
  },
  {
    quote: "They solved our production bottleneck efficiently. Great communication throughout the project.",
    author: 'Jennifer Park',
    title: 'Production Director',
    company: 'Pacific Foods',
    metrics: ['25% increase output', '8-week delivery', 'Staff trained'],
    avatar: 'JP',
    industry: 'Food Processing'
  },
  {
    quote: "The automation system has streamlined our warehouse operations beyond expectations. Highly recommend their services.",
    author: 'David Wilson',
    title: 'Warehouse Manager',
    company: 'LogiCorp Solutions',
    metrics: ['50% faster processing', '4-month implementation', '98% accuracy rate'],
    avatar: 'DW',
    industry: 'Logistics'
  },
  {
    quote: "Excellent technical expertise and customer service. Our quality control process is now completely automated.",
    author: 'Lisa Thompson',
    title: 'Quality Assurance Lead',
    company: 'Precision Parts Inc',
    metrics: ['Automated QC process', '30% cost reduction', 'Real-time reporting'],
    avatar: 'LT',
    industry: 'Manufacturing'
  },
  {
    quote: "From planning to implementation, everything was handled professionally. The system works flawlessly.",
    author: 'Robert Martinez',
    title: 'Facility Manager',
    company: 'Metro Distribution',
    metrics: ['Seamless integration', '5-month timeline', '24/7 monitoring'],
    avatar: 'RM',
    industry: 'Distribution'
  }
];

const stats = [
  { number: '50+', label: 'Projects Completed', icon: '📊' },
  { number: '95%', label: 'Customer Satisfaction', icon: '⭐' },
  { number: '< 24hr', label: 'Response Time', icon: '🕐' }
];

const certifications = [
  'ISO 9001 Certified',
  'Industry 4.0 Partner',
  'Certified Automation Specialists'
];

const TestimonialsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 rounded-lg px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm font-medium text-blue-200">Client Testimonials</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Proven Results in
              <span className="text-blue-400 block">Industrial Automation</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mb-12">
              Discover how leading manufacturers and industrial companies have transformed their operations with our automation solutions.
            </p>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-4 mb-12">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                  <span className="text-sm font-medium text-white">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{stat.icon}</span>
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                </div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              What Industry Leaders Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real experiences from companies who have implemented our automation solutions across manufacturing, logistics, and processing industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900 text-lg">{testimonial.author}</div>
                    <div className="text-blue-600 font-semibold">{testimonial.title}</div>
                    <div className="text-slate-600">{testimonial.company}</div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm font-medium">
                      {testimonial.industry}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                
                <div className="border-t border-slate-200 pt-6">
                  <div className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">Key Outcomes</div>
                  <div className="grid grid-cols-1 gap-3">
                    {testimonial.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-slate-600 font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Schedule a consultation with our automation specialists to discuss your specific requirements and explore how we can optimize your industrial processes.
          </p>
          
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <div className="text-lg font-bold mb-6 text-white">Consultation Process</div>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold mb-3">1</div>
                <div className="font-semibold text-white mb-2">Assessment</div>
                <div className="text-sm text-slate-400">Current process evaluation</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold mb-3">2</div>
                <div className="font-semibold text-white mb-2">Solution Design</div>
                <div className="text-sm text-slate-400">Custom automation plan</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold mb-3">3</div>
                <div className="font-semibold text-white mb-2">Implementation</div>
                <div className="text-sm text-slate-400">Project timeline & ROI</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg">
              Schedule Consultation
            </button>
            <button className="bg-transparent border-2 border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              Download Case Studies
            </button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-slate-400">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
              <span>📧 hello@iautomation.com</span>
              <span>📞 (555) 123-4567</span>
              <span>🕐 Response within 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-bold text-slate-900 text-lg">Proven Expertise</div>
              <div className="text-slate-600">Over 10 years specializing in industrial automation solutions</div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="font-bold text-slate-900 text-lg">Reliable Support</div>
              <div className="text-slate-600">24/7 monitoring and comprehensive maintenance programs</div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="font-bold text-slate-900 text-lg">Fast Implementation</div>
              <div className="text-slate-600">Rapid deployment with minimal disruption to operations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;