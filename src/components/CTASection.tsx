import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, ArrowRight, Shield, Clock } from 'lucide-react';

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px' 
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            Limited Time: 15% Off First Service
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Chicago's Trusted Experts in Power Washing, Window Cleaning & Gutter Cleaning
          </h2>
          
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Need spotless windows or a fresh, clean exterior? We've got you covered! Our team brings top-notch service to homes and businesses across Chicago—no streaks, no grime, just amazing results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors text-lg">
              <Phone className="w-5 h-5" />
              Call Now: (847) 404-3398
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors text-lg">
              Book An Appointment
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Free Estimates
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Same-Week Availability
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              100% Satisfaction Guaranteed
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
