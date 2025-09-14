
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Factory, Package, TruckIcon, TestTube, FlaskConical, Settings, CircleCheck } from "lucide-react";

const Manufacturing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-maisha-darknavy mb-8">Manufacturing</h1>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-maisha-navy mb-6 text-center">MAISHA MABATI MANUFACTURING PROCESS</h2>

            {/* Process steps with icons and images */}
            <div className="space-y-12">
              {/* Color Coating (Paint) */}
              <div className="bg-gray-50 p-8 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Settings className="text-red-600 mr-3 h-8 w-8" />
                  <h3 className="text-2xl font-bold text-maisha-navy">COLOR COATING (PAINT)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-700">
                      In the Colour Coating process, chemicals and desired colour coating is applied on the steel sheet after galvalume process 
                      for making the roofing sheets. In this process, the galvanized sheets go to the relevant paint coating sections through the 
                      chemical coating process, which is backed through an oven with 210-250 degrees, to firmly blend on the roofing sheets.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="/images/royalmabati_greenstone-1.jpg" 
                      alt="Color coating process" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Profiling */}
              <div className="bg-white p-8 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Settings className="text-red-600 mr-3 h-8 w-8" />
                  <h3 className="text-2xl font-bold text-maisha-navy">PROFILING</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="/images/https___maishamabati.com_wp-content_uploads_2021_06_MAISHA-ROMAN-TILE-300x300.jpg" 
                      alt="Profiling process" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">
                      This is the process where the straight, thin sheets are made into different profiles of roofing sheets. 
                      The sheets pass through a combination of rollers, which press against them so that they are shaped accordingly.
                    </p>
                    <p className="text-gray-700">
                      There are several types of finishes with smooth, bright & matte finishes to choose from which can be profiled in different 
                      profile types and lengths. The Standard length is 2 Meters, 2.5 meters, 3 meters or as per specific customer requirement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ridges */}
              <div className="bg-gray-50 p-8 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <Package className="text-red-600 mr-3 h-8 w-8" />
                  <h3 className="text-2xl font-bold text-maisha-navy">RIDGES</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-700">
                      Not only do we make roofing sheets, we also make ridges for joining roofs in 320mm and 240mm which are then 
                      available in different colours, shapes and sizes. Different shapes include Roll talk & Upside-down Valley.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="/images/https___imarishamabati.co.ke_wp-content_uploads_2018_11_Ridge-cap-2-570x570.jpg" 
                      alt="Ridges manufacturing" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Packaging & Delivery */}
              <div className="bg-white p-8 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <TruckIcon className="text-red-600 mr-3 h-8 w-8" />
                  <h3 className="text-2xl font-bold text-maisha-navy">PACKAGING & DELIVERY</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="/images/https___maishamabati.com_wp-content_uploads_2021_06_Profiling-1024x683.jpg" 
                      alt="Packaging and delivery" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">
                      The customer can range his demand on the thickness, the coating of AluZinc percentage, the length and width of 
                      the sheet and even a specific colour. All requests from valuable customers are taken in order and fulfilled.
                    </p>
                    <p className="text-gray-700 mb-2">These include:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-maisha-navy mb-2">WEIGHT PER METER:</h4>
                        <ul className="space-y-1">
                          <li>32 gauge – 1.41 kg/m</li>
                          <li>30 gauge – 1.81 kg/m</li>
                          <li>28 gauge – 2.32 kg/m</li>
                          <li>26 gauge – 2.99 kg/m</li>
                          <li>24 gauge – 4.50 kg/m</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-maisha-navy mb-2">THICKNESS:</h4>
                        <ul className="space-y-1">
                          <li>32 gauge – 0.20MM</li>
                          <li>30 gauge – 0.25MM</li>
                          <li>28 gauge – 0.32MM</li>
                          <li>26 gauge – 0.40MM</li>
                          <li>24 gauge – 0.50MM</li>
                          <li>22 gauge – 0.60MM</li>
                        </ul>
                        <p className="mt-2">And as per customer request and demand.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-maisha-navy mb-6">Quality Assurance</h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <p className="text-gray-700 mb-4">
                Our commitment to quality is unwavering. Every product undergoes rigorous testing at each 
                stage of the manufacturing process to ensure it meets our high standards:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">
                    <strong>Thickness Testing:</strong> We ensure consistent gauge thickness throughout each sheet.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">
                    <strong>Coating Adhesion:</strong> Our products undergo bend tests to verify coating adhesion.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">
                    <strong>Salt Spray Testing:</strong> Products are subjected to accelerated corrosion testing.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">
                    <strong>Impact Resistance:</strong> We test for resistance to impact damage.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">
                    <strong>UV Resistance:</strong> Color coatings are tested for resistance to UV degradation.
                  </span>
                </li>
              </ul>
              <p className="text-gray-700">
                Our manufacturing facility is ISO 9001:2015 certified, ensuring that we maintain consistent 
                quality standards across all our operations.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-maisha-navy mb-6">Our Facility</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  Located in Ruiru along Kamiti Road, our state-of-the-art manufacturing facility spans 
                  over 10 acres and houses the latest machinery and technology for roofing sheet production.
                </p>
                <p className="text-gray-700 mb-4">
                  The facility includes:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">Modern roll-forming lines for different profiles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">Advanced color coating equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">Precision cutting and slitting machines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">Quality control laboratories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">Warehousing and logistics operations</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  Our facility operates with a focus on environmental sustainability, implementing energy-efficient 
                  processes and waste reduction measures throughout our operations.
                </p>
              </div>
              <div>
                <img 
                  src="/images/royalmabati_greenstone-1.jpg" 
                  alt="Manufacturing facility" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Manufacturing;
