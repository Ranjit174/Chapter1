import Link from 'next/link';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const CustomerExperiences = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            You Can Trust Industrial Tek
          </h2>
          <p className="text-lg text-slate-800 max-w-4xl mx-auto">
            We are a proven engineering team delivering 8+ years of digital transformation success that drives 25% efficiency gains and 40% downtime reduction.We ensure your automation investment contributes to long-term operational excellence you can depend on.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96">
            <Image
              src="/A detailed photorealistic rendering of the interior of a large industrial factory, showcasing a complex arrangement of heavy machinery and automated systems within a meticulously planned layout.  The image should em.jpg"
              alt="Modern industrial factory with automated systems"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
            <Quote className="w-12 h-12 text-amber-400 mb-4" />
            <blockquote className="text-lg text-slate-700 italic mb-6">
              &quot;Industrial Tek isn&apos;t just a vendor; they are a true extension of our engineering team. Their attention to detail and commitment to our project&apos;s success was evident from day one. They delivered a robust solution that has significantly improved our production uptime.&quot;
            </blockquote>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-6">
              <div className="font-bold text-slate-800 text-right">
                — Agustin, Operations Manager
                <p className="text-sm font-normal text-slate-500">Tussor Machine Tools.</p>
              </div>
              <Link href="/about-us" className="bg-slate-800 text-white px-8 py-3 rounded-md hover:bg-slate-900 font-bold transition-colors duration-300 whitespace-nowrap">
                  Learn More About Our Approach
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerExperiences;
