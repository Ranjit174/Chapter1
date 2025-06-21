import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-slate-900 text-white py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Premier Industrial Control Panel Manufacturer
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-slate-300">
          Engineering innovative, adaptable, and reliable electrical control solutions tailored to your industry&apos;s unique demands.
        </p>
        <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-lg max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-3 text-amber-400">The Result</h2>
          <p className="text-slate-300">
            Quality industrial control panels with comprehensive engineering, programming, and documentation support you can depend on.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact-us" className="bg-amber-500 text-slate-900 px-8 py-3 rounded-md hover:bg-amber-400 font-bold transition-colors duration-300 shadow-lg">
            Request a Quote
          </Link>
          <Link href="/electrical-engineering-services" className="border-2 border-slate-500 text-white px-8 py-3 rounded-md hover:bg-slate-700 font-bold transition-colors duration-300">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
