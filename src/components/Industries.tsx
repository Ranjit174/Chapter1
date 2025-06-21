import { Factory, UtensilsCrossed, Droplets, Zap, Wind, Beaker } from 'lucide-react';

const industries = [
  {
    name: "Manufacturing",
    icon: <Factory className="w-8 h-8" />,
    description: "Advanced automation for precision manufacturing and quality control.",
  },
  {
    name: "Food & Beverage",
    icon: <UtensilsCrossed className="w-8 h-8" />,
    description: "Sanitary control systems ensuring product safety and compliance.",
  },
  {
    name: "Water Treatment",
    icon: <Droplets className="w-8 h-8" />,
    description: "Comprehensive SCADA systems for water and wastewater management.",
  },
  {
    name: "Oil & Gas",
    icon: <Wind className="w-8 h-8" />,
    description: "Explosion-proof control panels for hazardous location classifications.",
  },
  {
    name: "Power Generation",
    icon: <Zap className="w-8 h-8" />,
    description: "Mission-critical controls for reliable energy distribution networks.",
  },
  {
    name: "Chemical Processing",
    icon: <Beaker className="w-8 h-8" />,
    description: "Safety-critical process control systems with advanced monitoring.",
  },
];

const Industries = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Delivering specialized control solutions across diverse sectors with uncompromising quality and precision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div key={industry.name} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/80">
              <div className="bg-amber-100 text-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{industry.name}</h3>
              <p className="text-slate-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
