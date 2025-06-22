import Link from 'next/link';
import Image from 'next/image';

const ControlPanelManufacturing = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="relative h-96 lg:col-span-2">
            <Image
              src="/A detailed close-up image of a person's hands wearing safety gloves while carefully connecting wires to a neat and organized control panel. The panel should be more visible, showcasing intricate wiring and various c.jpg"
              alt="Engineers working on a custom control panel design"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Expert Electrical Control Panel Design & Manufacturing
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              With 8+ years of proven expertise in industrial automation, we specialize in comprehensive electrical control panel design and manufacturing. Our systematic approach includes controller selection, servo motor integration, and pneumatic/hydraulic system design using industry-leading tools like EPLAN and AutoCAD Electrical.
            </p>
            
            <div className="bg-slate-50 border-l-4 border-amber-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Our Technical Excellence</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Multi-vendor PLC integration (Siemens, Allen Bradley, Fanuc, Mitsubishi, Omron)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  IEC-60204 safety standards compliance across all manufacturing operations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Complete system commissioning and preventive maintenance protocols
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Advanced servo actuator integration for automated manufacturing solutions
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/electrical-engineering-services" className="bg-amber-500 text-slate-900 px-8 py-3 rounded-md hover:bg-amber-400 font-bold transition-colors duration-300 shadow-lg">
                View Our Solutions
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