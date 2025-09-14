
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-96">
          <img 
            src="/images/africa.com_wp-content_uploads_2022_05_CAK-penalises-Royal-Mabati-Sh2.6m-for-defrauding-customers.jpg" 
            alt="Maisha Mabati Factory" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl font-bold text-white">ABOUT US</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Our Story Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="inline-block">
                <div className="h-1 bg-red-600 w-24 mx-auto mb-3"></div>
                <h2 className="text-lg uppercase text-maisha-navy font-medium">MAISHA MABATI MILLS LIMITED</h2>
              </div>
              <h2 className="text-5xl font-bold text-maisha-darknavy mt-2">OUR STORY</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
              <div>
                <p className="text-gray-700 mb-6">
                  Maisha Mabati was established in 2009, to meet the growing requirements for quality roofing at affordable pricing. It was the vision and commitment of Mr Narendra Raval EBS (Guru) to supply building and construction materials at affordable costs to the local Kenyan population. Maisha Mabati Mills began with the product of galvanised and coloured steel roofing sheets.
                </p>
                <p className="text-gray-700">
                  The products are largely focused on being durable, functional, strong and cost-effective to enable Kenyans around the country to build better standard homes.
                </p>
              </div>
              <div>
                <p className="text-gray-700 mb-6">
                  This commitment and drive has led Maisha Mabati Mills Limited to build the 3rd fastest state-of-art alu-zinc plant in Africa in 2013 at Ruiru, Kenya. Maisha Mabati Mills Limited supplies high quality alu-zinc and color-coated steel roofing sheets under the brand name of Maisha Alu-zinc in the local and regional market at economic cost, achieving 100% customer satisfaction.
                </p>
                <p className="text-gray-700">
                  This is only possible through the long standing and trust worthy customers, along with the assistance of financial institutions such as Standard Chartered Bank and Barclays Bank for helping Maisha Mabati Mills grow to where it is today.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <img 
                  src="/images/https___maishamabati.com_wp-content_uploads_2021_06_MAISHA-COLOUR-BOX-PROFILE.jpg" 
                  alt="Maisha Mabati Factory Floor" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <img 
                  src="/images/https___maishamabati.com_wp-content_uploads_2021_06_MAISHA-COLOUR-BOX-PROFILE.jpg" 
                  alt="Maisha Mabati Manufacturing Equipment" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-maisha-navy mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-maisha-navy mb-4">Quality</h3>
                <p className="text-gray-700">
                  We guarantee the best quality with the KEBS Diamond Mark of Quality. Our products are rustproof,
                  suitable for all Kenyan atmospheric conditions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-maisha-navy mb-4">Innovation</h3>
                <p className="text-gray-700">
                  We continuously develop better products with improved features like high corrosion resistance,
                  scratch resistance, and unique heat reflection capabilities.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-maisha-navy mb-4">Affordability</h3>
                <p className="text-gray-700">
                  Our mission is to provide quality construction materials at affordable costs 
                  to enable Kenyans to build better standard homes across the country.
                </p>
              </div>
            </div>
          </div>

          {/* Group Companies */}
          <div>
            <h2 className="text-3xl font-bold text-maisha-navy mb-8">Group Companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "DEVKI STEEL MILLS LIMITED",
                "NATIONAL CEMENT COMPANY LIMITED",
                "MAISHA PACKAGING COMPANY LIMITED",
                "NORTHWOOD AVIATION AGENCIES LIMITED",
                "MAISHA MINERALS & FERTILIZER"
              ].map((company, index) => (
                <div key={index} className="flex items-center bg-white p-6 rounded-lg shadow-md">
                  <span className="bg-red-600 h-4 w-4 rounded-full mr-4"></span>
                  <span className="font-medium text-maisha-navy">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default About;
