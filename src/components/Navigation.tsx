'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '/engineering-services', label: 'Engineering Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/customer-experiences', label: 'Customer Experiences' },
    { href: '/about-us', label: 'About Us' },
    { href: '/latest-news', label: 'Latest News' },
  ];

  const getLinkClassName = (href: string, isMobile: boolean = false) => {
    const isActive = pathname === href;
    const baseClasses = isMobile
      ? 'py-2 px-2 rounded font-medium transition-colors'
      : 'font-medium transition-colors py-2';
    const activeClasses = isMobile
      ? 'bg-gray-100 text-red-600'
      : 'text-red-600 border-b-2 border-red-600';
    const inactiveClasses = isMobile
      ? 'text-gray-700 hover:bg-gray-50'
      : 'text-gray-700 hover:text-red-600';

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} className={getLinkClassName(link.href)}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact-us" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 font-medium transition-all duration-300 shadow-md hover:shadow-lg ml-4">
          Request Quote
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md mt-2 pb-4 border-t pt-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className={getLinkClassName(link.href, true)} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link href="/contact-us" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-medium transition-colors mt-2 text-center">
                Request Quote
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navigation;
