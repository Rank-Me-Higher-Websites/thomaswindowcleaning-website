import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-12 md:py-16 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="section-label justify-center">TESTIMONIALS</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Trusted by thousands of<br />
            <span className="text-gradient">people & companies</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            See what our clients are saying about our professional cleaning services
          </p>
        </motion.div>

        {/* Elfsight Google Reviews Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full"
        >
          <div 
            className="elfsight-app-9be34eda-5873-490d-9a96-1b586c1f6f4a" 
            data-elfsight-app-lazy
          />
        </motion.div>
      </div>
    </section>
  );
};
