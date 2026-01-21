import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Shield, Award, CheckCircle } from 'lucide-react';
import aboutImg from '@/assets/thomas-squeegee.jpg';

const features = [
  'Streak-free windows guaranteed',
  'Fully insured & bonded',
  'Eco-friendly cleaning solutions',
  'Residential & commercial',
  'Same-day service available',
  'Satisfaction guaranteed',
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="glass-card overflow-hidden shadow-lg">
              <img
                src={aboutImg}
                alt="Professional window cleaning"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute -bottom-4 -right-4 lg:bottom-6 lg:-right-6 glass-card p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">29+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="section-label">WINDOW CLEANING SERVICES</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground leading-tight">
              Your Trusted Experts for{' '}
              <span className="text-gradient">Crystal-Clear Windows</span>{' '}
              & Clog-Free Gutters
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              At Thomas Window Cleaning, we know life gets busy, and cleaning can be a hassle. That's why we're here to help! Since 1995, we've been providing top-notch window cleaning, gutter cleaning, and pressure washing services to the Chicago north and northwest suburbs.
            </p>
            <p className="text-muted-foreground text-sm mb-5">
              Our goal is to make sure you're completely satisfied with our work. We love hearing your positive feedback!
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              <div className="badge-glow">
                <Shield className="w-3.5 h-3.5" />
                Fully Insured
              </div>
              <div className="badge-glow">
                <Award className="w-3.5 h-3.5" />
                Top Rated 2024
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
