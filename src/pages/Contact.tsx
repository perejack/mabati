
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond shortly.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-96">
          <img 
            src="/images/royalmabati_greenstone-1.jpg" 
            alt="Manufacturing Facility" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl font-bold text-white">CONTACT US</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-maisha-navy text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-8">REACH US</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="text-lg">
                      EMAIL : sales@maishamabati.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="text-lg">
                      SALES : +254 762 178 314
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="text-lg">
                      WHATSAPP : +254 762 178 314
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="text-lg">
                      MAISHA MABATI MILLS LTD.
                      <br />
                      HEAD OFFICE, RUIRU KAMITI ROAD, RUIRU
                      <br />
                      P.O.BOX 33319-00600 NAIROBI, KENYA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-maisha-navy mb-8">WRITE TO US</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full p-4 bg-gray-100"
                  />
                </div>
                
                <div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full p-4 bg-gray-100"
                  />
                </div>
                
                <div>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full p-4 bg-gray-100"
                  />
                </div>
                
                <div>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows={5}
                    className="w-full p-4 bg-gray-100"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-maisha-navy hover:bg-blue-900 text-lg py-6">
                  Send
                </Button>
              </form>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-maisha-navy mb-8">Visit Our Location</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7726888842644!2d36.95!3d-1.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTAnNDguMCJTIDM2wrA1NycwMC4wIkU!5e0!3m2!1sen!2sus!4v1621438483668!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Maisha Mabati Mills Location"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Contact;
