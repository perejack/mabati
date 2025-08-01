
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-sm text-red-600 uppercase font-semibold mb-2">MAISHA MABATI MILLS LIMITED</div>
            <h2 className="text-3xl md:text-4xl font-bold text-maisha-darknavy mb-6">
              OUR ROOFING SHEETS ARE DISTINCTLY DIFFERENT
            </h2>
            <p className="text-gray-700 mb-8">
              It is the vision and commitment of Mr Narendra Raval EBS (Guru) to supply 
              building and construction materials at affordable costs to the local Kenyan 
              population. Maisha Mabati Mills began with the product of galvanised and 
              coloured steel roofing sheets. The products are largely focused on being 
              durable, functional, strong and cost-effective to enable Kenyans around the 
              country to build better standard homes.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300"
            >
              About Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          <div>
            <img 
              src="/images/westkenya_IMG-20220212-WA0000.jpg" 
              alt="Maisha Mabati roofing" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
