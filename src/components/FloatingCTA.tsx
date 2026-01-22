import { Phone, FileText } from 'lucide-react';

export const FloatingCTA = () => {
  return (
    <div 
      className="fixed bottom-4 left-4 right-4 z-50 flex flex-col gap-2 md:left-auto md:right-6 md:bottom-6 md:max-w-xs"
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
