import Link from 'next/link';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center relative">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-red-600 transition-colors">
              Industrial<span className="text-red-600">TEK</span>
            </Link>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
