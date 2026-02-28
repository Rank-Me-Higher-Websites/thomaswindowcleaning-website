import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, ArrowRight, Shield, Clock } from 'lucide-react';
import { useBooking } from '@/contexts/BookingContext';

interface CTASectionProps {
  onGetQuote?: () => void;
}

export const CTASection = ({ onGetQuote }: CTASectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { openBooking } = useBooking();

  const handleQuote = onGetQuote || openBooking;

  return (
    <section className="py-5 md:py-6 relative overflow-hidden bg-primary">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-primary-foreground leading-tight">
            Chicago's Trusted Experts in Power Washing, Window & Gutter Cleaning
          </h2>
          
          <p className="text-primary-foreground/80 text-sm mb-4 max-w-xl mx-auto">
            Need spotless windows or a fresh, clean exterior? We've got you covered! Our team brings top-notch service to homes and businesses across Chicago.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 justify-center mb-4">
            <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors text-sm">
              <Phone className="w-4 h-4" />
              Call Now: (847) 404-3398
            </a>
            <button onClick={handleQuote} className="inline-flex items-center justify-center gap-2 border-[1.5px] border-primary-foreground/50 text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-sm">
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-primary-foreground/70">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              Free Estimates
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              Same-Week Availability
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              100% Satisfaction
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
