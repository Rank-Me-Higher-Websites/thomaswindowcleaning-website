import { Phone } from 'lucide-react';

export const FloatingCTA = () => {
  return (
    <div className="floating-cta">
      <a
        href="tel:8474043398"
        className="btn-glow w-full text-lg justify-center animate-pulse-glow"
      >
        <Phone className="w-5 h-5" />
        Call Now: (847) 404-3398
      </a>
    </div>
  );
};
