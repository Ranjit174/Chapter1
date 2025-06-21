import React from 'react';

const testimonials = [
  {
    quote: "iAutomation saved us 6 months on our project timeline. Their team delivered exactly what they promised.",
    author: 'Sarah Chen',
    title: 'VP Engineering',
    company: 'TechFlow Industries',
    result: '6 months saved',
    avatar: 'SC'
  },
  {
    quote: "Best automation partner we've worked with. Zero downtime since installation 18 months ago.",
    author: 'Michael Rodriguez',
    title: 'Plant Manager',
    company: 'Advanced Manufacturing',
    result: 'Zero downtime',
    avatar: 'MR'
  },
  {
    quote: "They solved a problem 3 other companies couldn't. Production increased 40% immediately.",
    author: 'Jennifer Park',
    title: 'Operations Director',
    company: 'Pacific Foods',
    result: '40% increase',
    avatar: 'JP'
  }
];

const stats = [
  { number: '500+', label: 'Happy Customers' },
  { number: '98%', label: 'Success Rate' },
  { number: '24hr', label: 'Response Time' }
];

const benefits = [
  { icon: '⚡', title: 'Fast Results', desc: 'Projects delivered on time, every time' },
  { icon: '🎯', title: 'Problem Solvers', desc: 'We solve what others cannot' },
  { icon: '🤝', title: 'True Partners', desc: '24/7 support when you need it' }
];

const TestimonialsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero - More compelling */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="mb-6">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
              ⭐ Rated #1 Automation Partner
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Don&apos;t Just Take Our Word For It
          </h1>
          <p className="text-xl opacity-90 mb-8">
            See what happens when you partner with automation experts who actually deliver
          </p>
          <div className="flex items-center justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <span className="text-3xl">⭐⭐⭐⭐⭐</span>
              <span>4.9/5 rating</span>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div>500+ projects delivered</div>
          </div>
        </div>
      </section>

      {/* Static testimonials */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Real Results from Real Customers</h2>
          
          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                    {testimonial.avatar}
                  </div>
                  <blockquote className="text-3xl font-light text-gray-800 mb-8 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="mb-4">
                    <div className="font-bold text-xl text-gray-900">{testimonial.author}</div>
                    <div className="text-blue-600 font-medium">{testimonial.title}</div>
                    <div className="text-gray-600">{testimonial.company}</div>
                  </div>
                  <div className="inline-block bg-green-100 text-green-800 px-6 py-2 rounded-full font-semibold">
                    Result: {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold mb-2 text-blue-400">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Problem/solution focused */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Why Companies Choose Us Over Competitors</h2>
          <p className="text-xl text-gray-600 mb-16">The difference that actually matters to your business</p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 text-lg">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency-driven CTA */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Results Like These?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ companies who chose the automation partner that actually delivers
          </p>
          
          <div className="bg-white/10 rounded-lg p-6 mb-8 max-w-md mx-auto">
            <div className="text-sm opacity-75 mb-2">Free consultation includes:</div>
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Project timeline estimate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Cost breakdown</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Risk assessment</span>
              </div>
            </div>
          </div>

          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105">
            Get Your Free Consultation
          </button>
          
          <div className="mt-4 text-sm opacity-75">
            📞 Or call us directly: (555) 123-4567
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-12 border-t bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📋</span>
              <span>ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>25+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;