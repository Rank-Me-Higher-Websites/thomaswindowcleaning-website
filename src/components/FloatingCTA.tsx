import { Phone, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed bottom-4 left-4 right-4 z-50 flex flex-col gap-2 md:left-auto md:right-6 md:bottom-6 md:max-w-xs transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-32'
      }`}
    >
      <a
        href="tel:8474043398"
        className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline">Call Now</span>
        <span className="sm:hidden">Call</span>
      </a>
      <a
        href="#booking"
        className="flex-1 flex items-center justify-center gap-2 bg-star hover:bg-star/90 text-foreground font-semibold py-3 px-4 rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
      >
        <FileText className="w-5 h-5" />
        <span>Get Quote</span>
      </a>
    </div>
  );
};
