import { Phone, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;
      
      // On mobile, only show after scrolling 100px
      if (isMobile) {
        setHasScrolled(scrollY > 100);
      } else {
        setHasScrolled(true);
      }
      
      // Hide when footer is visible
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isFooterVisible = footerRect.top < window.innerHeight;
        setIsVisible(!isFooterVisible);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-4 left-4 right-4 z-50 flex flex-col gap-2 md:left-auto md:right-6 md:bottom-6 md:max-w-xs transition-all duration-300 ${
        isVisible && hasScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
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
        className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-lg shadow-xl transition-all duration-300 hover:scale-105"
      >
        <FileText className="w-5 h-5" />
        <span>Get Quote</span>
      </a>
    </div>
  );
};
