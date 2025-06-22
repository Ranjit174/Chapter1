import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-slate-900 text-white py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
          Complete Industrial Automation & Engineering Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-slate-300">
          Engineering excellence across every aspect of industrial automation - from initial concept and custom machinery development to advanced PLC systems and comprehensive product validation.
        </p>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-6xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-amber-400 mb-2">Control Systems</h3>
            <p className="text-sm text-slate-300">Industrial control panels & PLC programming</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-amber-400 mb-2">Custom Machinery</h3>
            <p className="text-sm text-slate-300">SPM development & machining solutions</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-amber-400 mb-2">R&D Support</h3>
            <p className="text-sm text-slate-300">NPD, validation machines & testing</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-amber-400 mb-2">Smart Manufacturing</h3>
            <p className="text-sm text-slate-300">OEE monitoring & product traceability</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-amber-400 mb-2">Precision Tools</h3>
            <p className="text-sm text-slate-300">Jigs, fixtures & industrial software</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-amber-400 mb-2">Project Management</h3>
            <p className="text-sm text-slate-300">End-to-end project delivery</p>
          </div>
        </div>
        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-lg max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-3 text-amber-400">Your Industrial Automation Partner</h2>
          <p className="text-slate-300">
            We bring together decades of engineering expertise, advanced automation technologies, and proven project management to deliver solutions that work seamlessly together - ensuring your operations run efficiently from day one and scale with your business growth.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact-us" className="bg-amber-500 text-slate-900 px-8 py-3 rounded-md hover:bg-amber-400 font-bold transition-colors duration-300 shadow-lg">
            Request a Quote
          </Link>
          <Link href="/services" className="border-2 border-slate-500 text-white px-8 py-3 rounded-md hover:bg-slate-700 font-bold transition-colors duration-300">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;