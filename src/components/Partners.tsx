import { Building2, Wrench, Zap } from 'lucide-react';

const partners = [
  { name: "Allen-Bradley", description: "Rockwell Automation", icon: <Wrench /> },
  { name: "Schneider Electric", description: "Energy Management", icon: <Zap /> },
  { name: "Siemens", description: "Digital Industries", icon: <Building2 /> },
  { name: "Eaton", description: "Power Management", icon: <Zap /> },
];

const Partners = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We collaborate with industry-leading manufacturers to deliver cutting-edge automation solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-slate-50 p-6 rounded-lg text-center border border-slate-200/80 hover:shadow-lg transition-shadow duration-300">
              <div className="text-slate-600 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                {partner.icon}
              </div>
              <h3 className="font-bold text-slate-800">{partner.name}</h3>
              <p className="text-sm text-slate-500">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
