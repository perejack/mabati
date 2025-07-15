
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Group Companies</h2>
          <ul className="space-y-2 text-sm md:text-base">
            <li><Link to="#" className="hover:underline">DEVKI STEEL MILLS LIMITED</Link></li>
            <li><Link to="#" className="hover:underline">NATIONAL CEMENT COMPANY LIMITED</Link></li>
            <li><Link to="#" className="hover:underline">MAISHA PACKAGING COMPANY LIMITED</Link></li>
            <li><Link to="#" className="hover:underline">NORTHWOOD AVIATION AGENCIES LIMITED</Link></li>
            <li><Link to="#" className="hover:underline">MAISHA MINERALS & FERTILIZER</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Company</h2>
          <ul className="space-y-2 text-sm md:text-base">
            <li><Link to="/" className="hover:underline">HOME</Link></li>
            <li><Link to="/manufacturing" className="hover:underline">MANUFACTURING</Link></li>
            <li><Link to="/products" className="hover:underline">PRODUCTS</Link></li>
            <li><Link to="/about" className="hover:underline">ABOUT US</Link></li>
            <li><Link to="/contact" className="hover:underline">CONTACT US</Link></li>
          </ul>
        </div>

        <div className="sm:col-span-2 md:col-span-1">
          <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Reach Us</h2>
          <div className="space-y-3 md:space-y-4 text-sm md:text-base">
            <div className="flex items-start">
              <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 mt-0.5 text-white" />
              <div>
                <p>EMAIL : sales@maishamabati.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 mt-0.5 text-white" />
              <div>
                <p>SALES : +254780858702</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 mt-0.5 text-white" />
              <div>
                <p>WHATSAPP : +254780858702</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 mt-0.5 text-white" />
              <div className="text-sm md:text-base">
                <p>MAISHA MABATI MILLS LTD. HEAD OFFICE, RUIRU KAMITI ROAD, RUIRU</p>
                <p>P.O.BOX 33319-00600 NAIROBI, KENYA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
