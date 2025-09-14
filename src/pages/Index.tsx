
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductsSection from "@/components/ProductsSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="bg-green-100 py-8">
          <ProductsSection />
        </div>
        <AboutSection />
        <WhyChooseUs />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
