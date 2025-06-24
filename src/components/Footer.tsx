import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-base mb-4">ABOUT</h3>
            <p className="text-slate-400 text-sm">
              IndustrialTEK is a leading provider of custom industrial control panels and automation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/engineering-services" className="text-sm text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/customer-experiences" className="text-sm text-slate-400 hover:text-white transition-colors">Customer Experiences</Link></li>
              <li><Link href="/contact-us" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-4">CONTACT</h3>
            <address className="not-italic text-slate-400 text-sm">
              <p>Coimbatore, Tamil Nadu, 641001</p>
              <p>India</p>
              <p>
                <a href="tel:+919488233115" className="hover:text-white transition-colors">
                  +91 94882 33115
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-slate-700 py-4">
          <p className="text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} IndustrialTEK. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}