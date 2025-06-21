import Link from 'next/link';
import Image from 'next/image';

const ControlPanelManufacturing = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96">
            <Image
              src="/api/placeholder/600/400"
              alt="Engineers working on a custom control panel design"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Detail-Oriented, Customer-Focused Engineering
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We start by reviewing your control panel design before we even quote the project. Our approach is to pay attention to the details and think outside the box. If there&apos;s a way to improve your process and save you valuable time and money, we&apos;ll find it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/electrical-engineering-services" className="bg-amber-500 text-slate-900 px-8 py-3 rounded-md hover:bg-amber-400 font-bold transition-colors duration-300">
                Our Engineering Services
              </Link>
              <Link href="/electrical-engineering-services/control-panel-design" className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-md hover:bg-slate-100 font-bold transition-colors duration-300">
                Control Panel Design
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlPanelManufacturing;
