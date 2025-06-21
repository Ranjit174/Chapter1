import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Award, Leaf } from 'lucide-react';

const CustomerExperiences = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            You Can Trust iAutomation
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are a UL 508A and HazLoc listed panel shop, and ISO 9000 compliant, so you can have peace of mind that your control panel investment will contribute to the long-term success of your company.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96">
            <Image
              src="/api/placeholder/600/400"
              alt="UL 508A listed panel shop manufacturing facility"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white border border-slate-200 p-4 rounded-lg text-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <Award className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <p className="font-semibold text-slate-700">UL 508A Listed</p>
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-lg text-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <ShieldCheck className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <p className="font-semibold text-slate-700">HazLoc Certified</p>
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-lg text-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <Leaf className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <p className="font-semibold text-slate-700">ISO 9000 Compliant</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">A Partner in Your Success</h3>
            <p className="text-lg text-slate-600 mb-8">
              We understand you&apos;re looking for a partner you can rely on. We build that trust on a foundation of honesty and integrity, ensuring your projects are completed to the highest standards of safety and dependability.
            </p>
            <Link href="/about-us" className="bg-slate-800 text-white px-8 py-3 rounded-md hover:bg-slate-900 font-bold transition-colors duration-300">
              About Our Company
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerExperiences;
