import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, ArrowRight, Shield, Clock } from 'lucide-react';

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-card" />
      <div className="floating-blob floating-blob-primary w-80 h-80 top-0 left-1/4 opacity-30" />
      <div className="floating-blob floating-blob-secondary w-64 h-64 bottom-0 right-1/4 opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/30 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            Limited Time: 15% Off First Service
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Chicago's Trusted Experts in{' '}
            <span className="text-gradient">Power Washing, Window Cleaning & Gutter Cleaning</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Need spotless windows or a fresh, clean exterior? We've got you covered! Our team brings top-notch service to homes and businesses across Chicago—no streaks, no grime, just amazing results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:8474043398" className="btn-glow text-lg animate-pulse-glow">
              <Phone className="w-5 h-5" />
              Call Now: (847) 404-3398
            </a>
            <a href="#contact" className="btn-outline-glow text-lg">
              Book An Appointment
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Free Estimates
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Same-Week Availability
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              100% Satisfaction Guaranteed
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
