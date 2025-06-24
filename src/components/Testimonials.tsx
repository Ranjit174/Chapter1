import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Award, Leaf } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4">
              <span className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">
                <ShieldCheck className="w-4 h-4 mr-1" />
                Trusted Partner
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Your Control Panels Must Be Safe and Dependable
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              At IndustrialTek, we build partnerships on a foundation of honesty and integrity you can have peace of mind that your investment will contribute to your company&apos;s long-term success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-slate-700">UL 508A Listed</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-center">
                <ShieldCheck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-slate-700">HazLoc Certified</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-center">
                <Leaf className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-slate-700">ISO 9000 Compliant</p>
              </div>
            </div>
            <Link href="/about-us" className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-bold transition-colors duration-300">
              About IndustrialTek
            </Link>
          </div>
          <div className="relative h-80 md:h-96">
            <Image
              src="/api/placeholder/600/400"
              alt="UL 508A listed panel shop manufacturing facility"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
