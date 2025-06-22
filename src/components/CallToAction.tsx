import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-slate-800">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss your specific needs and how Industrial Tek can deliver the reliable, high-quality control panels your operations depend on.
        </p>
        <Link href="/contact-us" className="bg-amber-500 text-slate-900 px-8 py-3 rounded-md hover:bg-amber-400 font-bold transition-colors duration-300 shadow-lg">
          Request a Free Quote
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
