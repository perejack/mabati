import { useState, useEffect } from 'react';

const FloatingWhatsAppButton = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear any existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Set a new timeout to detect when scrolling stops
      const timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 800);
      
      setScrollTimeout(timeout as unknown as NodeJS.Timeout);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);
  
  return (
    <div className="fixed bottom-6 sm:bottom-8 right-4 sm:right-8 z-50 flex flex-col items-center">
      {/* Text bubble that appears/disappears */}
      <div 
        className={`bg-white text-[#128C7E] font-bold px-3 sm:px-5 py-2 sm:py-3 rounded-2xl shadow-xl mb-2 sm:mb-3 transition-all duration-300 flex items-center relative ${(isScrolling || isHovered) ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'}`}
      >
        <span className="text-sm sm:text-lg">Talk to us</span>
        <div className="absolute -bottom-2 sm:-bottom-3 right-4 sm:right-6 w-3 sm:w-4 h-3 sm:h-4 bg-white transform rotate-45"></div>
      </div>
      
      {/* WhatsApp button that's always visible with online indicator inside */}
      <a
        href="https://wa.me/254780858702?text=Hello,%20I'm%20interested%20in%20your%20roofing%20products"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 flex items-center justify-center bg-white p-1 focus:outline-none hover:scale-110 transform-gpu relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ width: '3.5rem', height: '3.5rem', maxWidth: '100%' }}
      >
        {/* Online status indicator inside button */}
        <div className="absolute top-0 right-0 w-auto h-auto bg-white rounded-full z-10 shadow-md px-1 sm:px-2 py-0.5 sm:py-1 border-2 border-green-500 flex items-center text-[10px] sm:text-xs font-bold" style={{ transform: 'translate(25%, -25%)' }}>
          <span className="animate-pulse mr-0.5 sm:mr-1 h-1.5 sm:h-2 w-1.5 sm:w-2 bg-green-500 rounded-full inline-block"></span>
          <span className="text-green-700">ONLINE</span>
        </div>
        
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner">
          <img 
            src="/images/https___i.pinimg.com_originals_f7_1f_fb_f71ffb7ad7db43ccc7b1466de418f254.jpg" 
            alt="WhatsApp" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-20 hover:opacity-0 transition-all duration-300"></div>
        </div>
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
