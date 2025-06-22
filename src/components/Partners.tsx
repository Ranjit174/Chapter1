'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

type Partner = {
  name: string;
  description: string;
  textInitials: string;
  category: string;
  image?: string;
  brandColor?: string;
};

const partners: Partner[] = [
  {
    name: "Allen-Bradley",
    description: "Rockwell Automation",
    image: "/allen bradely.jfif",
    textInitials: "AB",
    category: "Industrial Automation"
  },
  {
    name: "Schneider Electric",
    description: "Energy Management",
    image: "/schneider.png",
    textInitials: "SE",
    category: "Power Solutions"
  },
  {
    name: "Siemens",
    description: "Digital Industries",
    image: "/siemens.png",
    textInitials: "S",
    category: "Digital Factory"
  },
  {
    name: "Eaton",
    description: "Power Management",
    image: "/eaton.png",
    textInitials: "E",
    category: "Electrical Systems"
  },
  {
    name: "Weintek",
    description: "HMI Solutions",
    image: "/weintek.jpg",
    textInitials: "W",
    category: "Interface Technology"
  },
  {
    name: "Omron",
    description: "Industrial Automation",
    image: "/omron.png",
    textInitials: "O",
    category: "Sensing & Control"
  },
  {
    name: "Mitsubishi",
    description: "Electric Automation",
    image: "/mitubizi.png",
    textInitials: "M",
    category: "Factory Automation"
  },
  {
    name: "Fanuc",
    description: "Factory Automation",
    image: "/fanuc.jfif",
    textInitials: "F",
    category: "Robotics & CNC"
  },
  {
    name: "Fagor",
    description: "CNC Systems",
    image: "/fagor.png",
    textInitials: "F",
    category: "Machine Tools"
  },
  {
    name: "Delta",
    description: "Power & Automation",
    image: "/delta.png",
    textInitials: "Δ",
    category: "Energy Efficiency"
  },
  {
    name: "invt",
    description: "Drive Technology",
    image: "/invt.png",
    textInitials: "I",
    category: "Motor Control"
  },
  {
    name: "Ateq",
    description: "Industrial Solutions",
    image: "/ateq.png",
    textInitials: "A",
    category: "System Integration"
  },
];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 6;
  const maxIndex = Math.max(0, partners.length - cardsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100 mb-6">
            <span className="text-blue-600 text-sm font-medium">Industry Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Collaborating with world-class manufacturers to deliver cutting-edge automation solutions that drive innovation and excellence.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto hidden md:block">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 bg-white/90 backdrop-blur-sm shadow-2xl rounded-full p-4 hover:bg-white hover:scale-110 transition-all duration-300 group border border-white/20"
            aria-label="Previous partners"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-600 group-hover:text-blue-600 transition-colors">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 bg-white/90 backdrop-blur-sm shadow-2xl rounded-full p-4 hover:bg-white hover:scale-110 transition-all duration-300 group border border-white/20"
            aria-label="Next partners"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-600 group-hover:text-blue-600 transition-colors">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden rounded-2xl pb-6">
            <div
              className="flex transition-all duration-700 ease-out pt-2"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-white/20 group cursor-pointer transform hover:-translate-y-2 mb-2"
                  >
                    {/* Header with Image or Initials */}
                    <div
                      className={`h-24 flex items-center justify-center relative overflow-hidden ${partner.image ? 'bg-white' : partner.brandColor}`}
                    >
                      {partner.image ? (
                        <Image src={partner.image} alt={`${partner.name} logo`} layout="fill" objectFit="contain" className="p-2" />
                      ) : (
                        <>
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-2 right-2 w-16 h-16 border-2 border-white/30 rounded-full"></div>
                            <div className="absolute bottom-2 left-2 w-8 h-8 border-white/30 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full"></div>
                          </div>
                          <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                            <div className="text-white text-3xl font-bold drop-shadow-lg">
                              {partner.textInitials}
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                        </>
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="p-4 text-center">
                      <div className="mb-2">
                        <span className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                          {partner.category}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-800 mb-2 text-base group-hover:text-blue-700 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {partner.description}
                      </p>

                      {/* Animated Underline */}
                      <div className="mt-4 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-300 ${ 
                  index === currentIndex
                    ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full'
                    : 'w-3 h-3 bg-slate-300 hover:bg-slate-400 rounded-full'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Mobile View - Infinite Logo Scroller */}
        <div className="md:hidden mt-12 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex w-max animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-28 h-20 mx-4 flex items-center justify-center">
                {partner.image ? (
                  <Image src={partner.image} alt={`${partner.name} logo`} width={100} height={80} objectFit="contain" className="grayscale hover:grayscale-0 transition-all duration-300" />
                ) : (
                  <div className="text-slate-400 font-bold text-lg">{partner.textInitials}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;