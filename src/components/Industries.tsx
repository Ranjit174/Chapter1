import Image from 'next/image';

const industries = [
  {
    name: 'CNC Retrofitting',
    image: '/component machining.jpg',
    description: 'Comprehensive CNC controller upgrades for VMCs, HMCs, and turning centers with Siemens-828D, Fagor-8055i, Delta-NC300, Mitsubishi-E8, and Fanuc systems.'
  },
  {
    name: 'SPM Machine Development',
    image: '/Spm2.jfif',
    description: 'Custom Special Purpose Machinery development with operator-configurable sequencing, adaptive automation, and revolutionary manufacturing solutions.'
  },
  {
    name: 'R&D Support & Innovation',
    image: '/product_test.jfif',
    description: 'Product testing, validation, compliance verification, and comprehensive lifecycle testing with durability assessment and manufacturing readiness validation for industrial systems.'
  },
  {
    name: 'Product Validation & Testing',
    image: '/ateq-1111.jpg',
    description: 'Advanced product validation machines and testing systems including dry leak testing, PPR testing, and cylinder performance validation solutions.'
  },
  {
    name: 'Jig & Fixture Design',
    image: '/jig and fixtures design (2).jpg',
    description: 'Precision jig and fixture development using SolidWorks and AutoCAD for manufacturing optimization and quality assurance applications.'
  },
  {
    name: 'Product Traceability & OEE',
    image: '/qrcode.jfif',
    description: 'QR code-based product traceability systems and OEE monitoring solutions improving equipment effectiveness by 25% with real-time analytics.'
  },
  {
    name: 'Precision Machining Solutions',
    image: '/machinening.jfif',
    description: 'CNC machining expertise with retrofitting capabilities for VMCs, HMCs, turning centers, and surface grinding machines across multiple platforms.'
  },
  {
    name: 'Product Design & Development',
    image: '/productdesign.jfif',
    description: 'Complete product design solutions with electrical control panel design, servo motor selection, and pneumatic/hydraulic system integration.'
  },
];

const Industries = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete project lifecycle management from concept to commissioning. Specializing in SPM development, R&D support, product validation, precision machining, and advanced industrial automation solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <div key={industry.name} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-56">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {industry.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Key Achievements Section */}
        <div className="mt-20 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Engineering Excellence</h3>
            <p className="text-slate-300 text-lg">Strategic project management and technical innovation across all manufacturing domains</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">8+</div>
              <div className="text-slate-300">Years of Project Leadership Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">25%</div>
              <div className="text-slate-300">Improvement in Overall Equipment Effectiveness</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">40%</div>
              <div className="text-slate-300">Reduction in Unplanned Downtime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">99.9%</div>
              <div className="text-slate-300">Defect Detection Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;