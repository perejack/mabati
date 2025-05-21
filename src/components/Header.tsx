
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-0">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <div className="relative">
              <div className="bg-maisha-navy h-24 w-24 flex items-center justify-center">
                <span className="text-white text-xs font-bold">AISHA</span>
              </div>
              <div className="absolute top-6 left-8 text-4xl font-bold text-red-600">M</div>
              <div className="absolute top-12 left-12 text-xs font-bold text-white">ABATI</div>
            </div>
            <div className="ml-2">
              <span className="text-maisha-navy italic font-light">Mabati For Life</span>
            </div>
          </Link>
        </div>

        <nav className="flex gap-6">
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
    </header>
  );
};

export default Header;
