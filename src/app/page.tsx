import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indus Control Panel Manufacturer | Custom Control Panel Builder | PanelTEK',
  description: 'Leading industrial control panel manufacturer specializing in custom control panel design, UL 508A listed fabrication, and electrical engineering services.',
  keywords: ['industrial control panel manufacturer', 'custom control panel builder', 'UL 508A panel shop', 'electrical engineering services', 'control panel fabrication'],
  alternates: {
    canonical: 'https://www.paneltekllc.com/',
  },
};

export default function Home() {
  return (
    <>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                Industrial Control Panel<br />
                <span className="text-orange-400 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  Manufacturer
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-5xl mx-auto leading-relaxed text-gray-100">
                What happens when you merge diversity in an array of industries with engineers who have a vast knowledge of electrical control panels? At iAutomation, we create engineering services that are innovative, adaptable, customer-focused, and above all reliable.
              </p>
              <div className="bg-blue-800 bg-opacity-70 backdrop-blur-sm p-6 lg:p-8 rounded-xl max-w-4xl mx-auto mb-8 border border-blue-600 shadow-2xl">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-orange-400">THE RESULT</h2>
                <p className="text-lg lg:text-xl leading-relaxed">
                  Quality industrial control panels with engineering, programming, documentation & application support you can rely on to manage your unique industry needs safely, efficiently, and reliably.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <Link href="/contact-us" className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Request Quote
                </Link>
                <Link href="/electrical-engineering-services" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-800 font-bold transition-all duration-300">
                  Engineering Services
                </Link>
              </div>
            </div>
          </section>

          {/* Industries Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h3 className="text-center text-2xl font-bold mb-12 text-gray-800 tracking-wide">INDUSTRIES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: "Manufacturing", icon: "🏭", description: "Automated manufacturing solutions" },
                  { name: "Food & Beverage", icon: "🍕", description: "Sanitary control systems" },
                  { name: "Oil & Gas", icon: "⚡", description: "Hazardous location panels" },
                  { name: "Water Treatment", icon: "💧", description: "Process control systems" },
                  { name: "Power Generation", icon: "🔌", description: "Critical infrastructure controls" },
                  { name: "Chemical Processing", icon: "🧪", description: "Safety-critical applications" }
                ].map((industry, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-300">
                    <div className="text-3xl mb-4">{industry.icon}</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{industry.name}</h4>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Control Panel Manufacturing & Engineering Services Section */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-800 text-center">
                Control Panel Manufacturing & Engineering Services
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-gray-200 h-64 sm:h-80 lg:h-96 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="PanelTEK engineers working on control panel design"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="max-w-xl">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 leading-tight">
                      Our Engineers are Detail Oriented and Customer-Focused
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      When you come to us with your control panel design, we&apos;ll listen to what your project needs are and include a review of your design right away—before we&apos;ve even quoted your project. Our approach is to pay attention to the details and think outside the box—or panel in this case! If there is a way to improve your process and save you valuable time and money, we&apos;ll find it.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/electrical-engineering-services" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition-all duration-300 shadow-md hover:shadow-lg text-center">
                        Engineering Services
                      </Link>
                      <Link href="/electrical-engineering-services/control-panel-design" className="inline-block border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-600 hover:text-white transition-all duration-300 text-center">
                        Control Panel Design
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Experiences Section */}
          <section className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl lg:text-3xl font-bold mb-12 text-gray-800 text-center">
                iAutomation CUSTOMER EXPERIENCES
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
                <div>
                  <div className="max-w-xl">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 leading-tight">
                      You Need to Trust that Your Electrical Control Panels are Safe and Dependable
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      At iAutomation, we understand that you&apos;re looking for a partner you can rely on for your electrical control panel and engineering services needs. You need a company that you can trust, that works on a foundation of honesty and integrity. As a UL 508A and HazLoc listed panel shop, and ISO 9000 compliant, you can have peace of mind that your control panel investment will contribute to the long-term success of your company.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-8">
                      <Link href="/latest-news/ul-508a-panel-shop" className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors">
                        UL 508A Listed Panel Shop
                      </Link>
                      <Link href="/latest-news/hazardous-environment-control-panel-manufacturing" className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-200 transition-colors">
                        HazLoc Certified
                      </Link>
                      <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">ISO 9000 Compliant</span>
                    </div>
                    <Link href="/about-us" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition-all duration-300 shadow-md hover:shadow-lg">
                      About PanelTEK
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-200 h-64 sm:h-80 lg:h-96 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="UL 508A listed panel shop manufacturing facility"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-2xl font-bold mb-12 text-gray-800 tracking-wide">OUR PARTNERS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                {[
                  "Allen-Bradley", "Schneider Electric", "Siemens", "ABB"
                ].map((partner, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg w-full h-28 flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                    <span className="text-gray-700 text-base font-semibold text-center">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-blue-600 bg-opacity-30 h-64 sm:h-80 lg:h-96 rounded-xl flex items-center justify-center shadow-2xl overflow-hidden">
                    <Image
                      src="/api/placeholder/600/400"
                      alt="Industrial control panel assembly at PanelTEK facility"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover opacity-90"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="max-w-xl">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                      CHOOSE iAutomation FOR INDUSTRIAL CONTROL PANELS AND ENGINEERING
                    </h2>
                    <p className="text-lg lg:text-xl mb-8 leading-relaxed text-gray-100">
                      Whether you have your own industrial control panel design or need our turnkey service, you can rest assured we&apos;ll deliver your project on time and on budget. Contact iAutomation today to learn how we can exceed your expectations for control panel fabrication, electrical engineering, PLC programming, custom integration, process control system upgrades and more.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/contact-us" className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                        Request Quote
                      </Link>
                      <Link href="tel:19209069457" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-800 transition-all duration-300 text-center">
                        Call Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}