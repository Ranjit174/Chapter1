'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);



  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/engineering-services', label: 'Engineering Services' },
    { href: '/iot', label: 'IoT' },
    { href: '/customer-experiences', label: 'Customer Experiences' },
    { href: '/about-us', label: 'About Us' },
    { href: '/latest-news', label: 'Latest News' },
  ];

  const getLinkClassName = (href: string, isMobile: boolean = false) => {
    const isActive = pathname === href;
    const baseClasses = isMobile
      ? 'py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center group'
      : 'font-medium transition-all duration-200 py-2 px-3 rounded-lg relative group';
    const activeClasses = isMobile
      ? 'bg-red-50 text-red-600 border-l-4 border-red-600'
      : 'text-red-600';
    const inactiveClasses = isMobile
      ? 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
      : 'text-gray-700 hover:text-red-600 hover:bg-gray-50';

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} className={getLinkClassName(link.href)}>
            {link.label}
            {pathname === link.href && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-red-600 rounded-full"></span>
            )}
          </Link>
        ))}
        <Link 
          href="/contact-us" 
          className="bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 font-medium transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 ml-6"
        >
          Request Quote
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </div>
      </button>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile Navigation */}
      <nav className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 pt-20">
          {/* Mobile Header */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Navigation</h3>
            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
          </div>

          {/* Mobile Links */}
          <div className="space-y-2">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={getLinkClassName(link.href, true)}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex-1">{link.label}</span>
                {pathname === link.href && (
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link 
              href="/contact-us" 
              className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 font-medium transition-colors duration-200 text-center block"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Quote
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;