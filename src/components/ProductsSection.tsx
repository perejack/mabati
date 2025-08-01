
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { productData } from "@/data/productData";

interface ProductCardProps {
  title: string;
  imageSrc: string;
  isSale?: boolean;
  slug?: string;
}

const ProductCard = ({ title, imageSrc, isSale = false, slug }: ProductCardProps) => {
  // Find matching product to get price information
  const product = productData.find(p => p.title === title);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        {isSale && (
          <span className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            SALE!
          </span>
        )}
        <span className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 text-xs font-medium">
          LIMITED OFFER
        </span>
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-maisha-navy uppercase text-center mb-2">{title}</h3>
        
        {product?.priceVariants && product.priceVariants.length > 0 && (
          <div className="mt-2 bg-gray-50 rounded-lg p-3 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 uppercase">Starting from</p>
                <p className="text-lg font-bold text-maisha-navy">{product.priceVariants[1]?.price}</p>
                <div className="mt-2 flex items-center text-xs text-green-600 font-medium">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-1"></span>
                  Free Delivery
                </div>
              </div>
              <Link 
                to={`/products/${product?.slug || ''}`}
                className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-full transition-colors duration-300 text-sm font-medium"
              >
                <ShoppingCart className="w-3 h-3 mr-1" />
                Buy
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section className="py-16 bg-green-600">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-4">MAISHA MABATI PRODUCTS</h2>
        <p className="text-white text-center max-w-3xl mx-auto mb-12">
          Our high quality, KEBS standard roofing sheets are durable, functional and strong with a 
          wide variety to meet every customer need whether on-demand or custom
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            title="BOX PROFILE" 
            imageSrc="/images/https___maishamabati.com_wp-content_uploads_2021_06_MAISHA-COLOUR-BOX-PROFILE.jpg" 
            isSale={true}
            slug="box-profile"
          />
          <ProductCard 
            title="VERSATILE" 
            imageSrc="/images/https___maishamabati.com_wp-content_uploads_2021_06_MAISHA-PREMIUM-TILE.jpg" 
            isSale={true}
            slug="versatile"
          />
          <ProductCard 
            title="ROMANTILE" 
            imageSrc="/images/https___maishamabati.com_wp-content_uploads_2021_06_MAISHA-ROMAN-TILE.jpg" 
            isSale={true}
            slug="romantile"
          />
          <ProductCard 
            title="CORRUGATED IRON SHEET" 
            imageSrc="/images/https___maishamabati.com_wp-content_uploads_2021_03_MAISHA-COLOUR-11_3-PROFILE.jpg" 
            slug="corrugated-iron-sheet"
          />
          <ProductCard 
            title="MAISHA ALU-ZINC MABATI" 
            imageSrc="/images/https___maishamabati.com_wp-content_uploads_2021_03_MAISHA-ALU-ZINC-MABATI-11_3.jpg" 
            slug="maisha-alu-zinc-mabati"
          />
          <ProductCard 
            title="MAISHA TILE" 
            imageSrc="/images/https___maishamabati.com_wp-content_uploads_2021_03_MAISHA-TILE.jpeg" 
            isSale={true}
            slug="maisha-tile"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
