
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Group Companies</h2>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:underline">DEVKI STEEL MILLS LIMITED</Link></li>
            <li><Link to="#" className="hover:underline">NATIONAL CEMENT COMPANY LIMITED</Link></li>
            <li><Link to="#" className="hover:underline">MAISHA PACKAGING COMPANY LIMITED</Link></li>
            <li><Link to="#" className="hover:underline">NORTHWOOD AVIATION AGENCIES LIMITED</Link></li>
            <li><Link to="#" className="hover:underline">MAISHA MINERALS & FERTILIZER</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Company</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">HOME</Link></li>
            <li><Link to="/manufacturing" className="hover:underline">MANUFACTURING</Link></li>
            <li><Link to="/products" className="hover:underline">PRODUCTS</Link></li>
            <li><Link to="/about" className="hover:underline">ABOUT US</Link></li>
            <li><Link to="/contact" className="hover:underline">CONTACT US</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Reach Us</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="w-5 h-5 mr-2 mt-1 text-white" />
              <div>
                <p>EMAIL : sales@maishamabati.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-5 h-5 mr-2 mt-1 text-white" />
              <div>
                <p>SALES : +254 762 178 314</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-5 h-5 mr-2 mt-1 text-white" />
              <div>
                <p>WHATSAPP : +254 762 178 314</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-2 mt-1 text-white" />
              <div>
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
