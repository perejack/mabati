
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { productData } from "@/data/productData";

const ProductCard = ({ product, onClick }: { product: any, onClick: () => void }) => {
  return (
    <Card 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
      onClick={onClick}
    >
      <div className="relative h-64">
        {product.sale && (
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="destructive" className="bg-red-600 text-white font-medium">
              SALE!
            </Badge>
          </div>
        )}
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="outline" className="bg-yellow-400 text-black font-medium text-xs px-2 py-1 rounded-sm">
            LIMITED OFFER
          </Badge>
        </div>
        <img 
          src={product.imageSrc} 
          alt={product.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-sm cursor-pointer hover:bg-gray-100">
          <Search className="w-5 h-5 text-gray-600" />
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold text-maisha-navy uppercase mb-2">{product.title}</h3>
        <p className="text-gray-700 line-clamp-2 mb-4">{product.description}</p>
        {product.priceVariants && product.priceVariants.length > 0 && (
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
              <button 
                className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors duration-300 text-sm font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(`/products/${product.slug}`, '_self');
                }}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Buy Now
              </button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Products = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProducts = searchQuery 
    ? productData.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : productData;

  const handleProductClick = (slug: string) => {
    navigate(`/products/${slug}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-48 md:h-72">
          <img 
            src="/images/https___maishamabati.com_wp-content_uploads_2021_06_MAISHA-COLOUR-BOX-PROFILE.jpg" 
            alt="Maisha Mabati Factory" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white">MAISHA MABATI PRODUCTS</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to="/" className="text-maisha-navy hover:underline">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link to="/products" className="text-maisha-navy hover:underline">Products</Link>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-maisha-navy mb-4">Maisha Mabati Products</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Our high quality, KEBS standard roofing sheets are durable, functional and strong with a 
              wide variety to meet every customer need whether on-demand or custom.
            </p>
          </div>

          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full p-3 pl-10 border rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={index} 
                product={product} 
                onClick={() => handleProductClick(product.slug)} 
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Products;
