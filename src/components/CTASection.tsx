import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, ArrowRight, Shield, Clock } from 'lucide-react';

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-primary">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary-foreground leading-tight">
            Chicago's Trusted Experts in Power Washing, Window & Gutter Cleaning
          </h2>
          
          <p className="text-primary-foreground/80 text-sm md:text-base mb-6 max-w-xl mx-auto">
            Need spotless windows or a fresh, clean exterior? We've got you covered! Our team brings top-notch service to homes and businesses across Chicago.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors text-sm">
              <Phone className="w-4 h-4" />
              Call Now: (847) 404-3398
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 border-[1.5px] border-primary-foreground/50 text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-sm">
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </a>
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
