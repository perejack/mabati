
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm relative z-30">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-0">
        <div className="w-full flex justify-between items-center mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <div className="relative">
              <div className="bg-maisha-navy h-16 w-16 md:h-24 md:w-24 flex items-center justify-center">
                <span className="text-white text-xs font-bold">AISHA</span>
              </div>
              <div className="absolute top-4 left-6 md:top-6 md:left-8 text-3xl md:text-4xl font-bold text-red-600">M</div>
              <div className="absolute top-8 left-9 md:top-12 md:left-12 text-xs font-bold text-white">ABATI</div>
            </div>
            <div className="ml-2">
              <span className="text-maisha-navy italic font-light text-sm md:text-base">Mabati For Life</span>
            </div>
          </Link>

          {/* Mobile hamburger menu button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maisha-navy"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-maisha-navy transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-maisha-navy my-1 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-maisha-navy transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-red-600 hover:text-red-700 font-medium">
            Home
          </Link>
          <Link to="/manufacturing" className="text-maisha-navy hover:text-gray-800 font-medium">
            Manufacturing
          </Link>
          <Link to="/products" className="text-maisha-navy hover:text-gray-800 font-medium">
            Products
          </Link>
          <Link to="/about" className="text-maisha-navy hover:text-gray-800 font-medium">
            About Us
          </Link>
          <Link to="/contact" className="text-maisha-navy hover:text-gray-800 font-medium">
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Mobile navigation menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out z-20 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-3 py-3">
            <Link 
              to="/" 
              className="text-red-600 hover:text-red-700 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/manufacturing" 
              className="text-maisha-navy hover:text-gray-800 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Manufacturing
            </Link>
            <Link 
              to="/products" 
              className="text-maisha-navy hover:text-gray-800 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="text-maisha-navy hover:text-gray-800 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-maisha-navy hover:text-gray-800 font-medium py-2 px-3 rounded-md hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
