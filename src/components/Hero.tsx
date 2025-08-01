
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-blue-700 to-blue-500 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/images/royalmabati_greenstone-1.jpg')",
          opacity: 0.7
        }}
      ></div>
      <div className="relative h-full flex flex-col justify-center px-8 md:pl-16 lg:pl-24 text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 uppercase text-green-600">
          Sheltering You <br />Today & Tomorrow
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          High quality galvanized and color steel roofing sheets with durable 
          lifespan for a trusted shelter.
        </p>
        <div>
          <Link 
            to="/about" 
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Learn More
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
