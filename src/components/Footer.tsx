import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Location */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">LOCATION</h3>
            <div className="text-gray-300 space-y-2 leading-relaxed">
              <p className="font-semibold">iAutomation</p>
              <p>1234 Industrial Drive</p>
              <p>Manufacturing City, State 12345</p>
              <Link 
                href="/directions" 
                className="inline-block mt-2 text-red-400 hover:text-red-300 transition-colors"
              >
                Get Directions →
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">CONTACT</h3>
            <div className="text-gray-300 space-y-2">
              <Link 
                href="tel:19209069457" 
                className="hover:text-white transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                920.906.9457
              </Link>
              <Link 
                href="mailto:info@paneltekllc.com" 
                className="hover:text-white transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@paneltekllc.com
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">CONNECT</h3>
            <div className="space-y-2">
              <Link 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </Link>
              <Link 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Twitter
              </Link>
            </div>
          </div>

          {/* Careers */}
          <div>
            <h3 className="font-bold mb-6 text-xl text-white">CAREERS</h3>
            <div className="space-y-2">
              <Link 
                href="/careers" 
                className="text-gray-300 hover:text-white transition-colors block"
              >
                JOIN OUR TEAM
              </Link>
              <p className="text-sm text-gray-400">
                We&apos;re always looking for talented engineers and technicians.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-white transition-colors mr-4"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link 
                href="/sitemap" 
                className="text-gray-400 hover:text-white transition-colors ml-4"
              >
                Sitemap
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} PanelTEK LLC. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">designed by NAVEO</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;