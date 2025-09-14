
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { productData } from "@/data/productData";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";

const RelatedProductCard = ({ product, onClick }: { product: any; onClick: () => void }) => {
  return (
    <Card 
      className="bg-white shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <div className="relative h-48">
        {product.sale && (
          <div className="absolute top-2 left-2 z-10">
            <Badge variant="destructive" className="bg-white text-red-600 font-medium text-xs">
              Sale!
            </Badge>
          </div>
        )}
        <img src={product.imageSrc} alt={product.title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="font-bold text-maisha-navy uppercase text-sm">{product.title}</h3>
      </CardContent>
    </Card>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

  useEffect(() => {
    // Find the product based on slug
    const currentProduct = productData.find(p => p.slug === slug);
    
    if (currentProduct) {
      setProduct(currentProduct);
      
      // Get 4 related products (excluding the current one)
      const related = productData
        .filter(p => p.slug !== slug)
        .slice(0, 4);
      
      setRelatedProducts(related);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-16 flex-grow">
          <p>Product not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link to="/" className="text-maisha-navy hover:underline">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link to="/products" className="text-maisha-navy hover:underline">All Products</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="font-medium text-gray-600">{product.title}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            <div className="relative">
              <img 
                src={product.imageSrc || "/images/royalmabati_greenstone-1.jpg"} 
                alt={product.title} 
                className="w-full rounded-lg shadow-md"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-sm">
                <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              </div>
            </div>
            
            <div className="mt-6 lg:mt-0">
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold text-maisha-navy uppercase">{product.title}</h1>
                {product.sale && (
                  <span className="bg-red-600 text-white px-2 md:px-3 py-1 rounded-md text-xs md:text-sm font-medium">
                    SALE!
                  </span>
                )}
                <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-medium">
                  LIMITED OFFER
                </span>
              </div>
              <div className="mb-4 text-sm text-green-600 font-medium flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-1"></span>
                Free Delivery | Same Day Delivery Available
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <h3 className="font-semibold text-maisha-navy mb-3">Features:</h3>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {product.priceVariants && (
                <>
                  <h3 className="font-semibold text-maisha-navy mb-3">Pricing:</h3>
                  <div className="bg-gray-50 rounded-lg p-3 md:p-4 mb-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
                    <div className="mb-3 py-2 px-3 bg-blue-100 text-blue-800 rounded-md text-xs md:text-sm">
                      <strong>Special Discount!</strong> Order today and get 5% off on orders above 50 meters.
                    </div>
                    {product.priceVariants.map((variant: any, index: number) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-200 py-2 md:py-3 last:border-0 last:pb-0 first:pt-0">
                        <span className="text-gray-700 font-medium text-sm md:text-base">{variant.name}</span>
                        <span className="font-bold text-maisha-navy text-base md:text-lg">{variant.price}</span>
                      </div>
                    ))}
                    
                    <div className="mt-6 flex flex-col space-y-3">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a 
                          href="tel:+254780858702" 
                          className="flex-1 flex items-center justify-center border border-maisha-navy text-maisha-navy hover:bg-maisha-navy hover:text-white px-4 py-3 rounded-md transition-colors duration-300 font-medium"
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Call to Order
                        </a>
                        
                        <a 
                          href={`https://wa.me/254780858702?text=I'm%20interested%20in%20ordering%20${encodeURIComponent(product.title)}%20-%20${encodeURIComponent(product.priceVariants[0].name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-md transition-colors duration-300 font-medium"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Order via WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
              
              {product.availableColors && (
                <>
                  <h3 className="font-semibold text-maisha-navy mb-2">Available In:</h3>
                  <p className="text-gray-700 mb-6">{product.availableColors}</p>
                </>
              )}
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-xl md:text-2xl font-bold text-maisha-navy mb-4 md:mb-6">Related Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {relatedProducts.map((relatedProduct, index) => (
                  <RelatedProductCard 
                    key={index} 
                    product={relatedProduct}
                    onClick={() => navigate(`/products/${relatedProduct.slug}`)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default ProductDetail;
