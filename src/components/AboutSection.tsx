import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Shield, Award, CheckCircle } from 'lucide-react';
import windowCleaningImg from '@/assets/window-cleaning.jpg';

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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="floating-blob floating-blob-primary w-80 h-80 top-20 -left-40 opacity-20" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card overflow-hidden">
              <img
                src={windowCleaningImg}
                alt="Professional window cleaning"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 glass-card p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">29+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-label">WINDOW CLEANING SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted Experts for{' '}
              <span className="text-gradient">Crystal-Clear Windows</span>{' '}
              & Clog-Free Gutters
            </h2>
            <p className="text-muted-foreground mb-8">
              At Thomas Window Cleaning, we know life gets busy, and cleaning can be a hassle. That's why we're here to help! Since 1995, we've been providing top-notch window cleaning, gutter cleaning, and pressure washing services to the Chicago north and northwest suburbs.
            </p>
            <p className="text-muted-foreground mb-8">
              Our goal is to make sure you're completely satisfied with our work. We love hearing your positive feedback and appreciate when you recommend us to your friends, family, and neighbors.
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              <div className="badge-glow">
                <Shield className="w-4 h-4" />
                Fully Insured
              </div>
              <div className="badge-glow">
                <Award className="w-4 h-4" />
                Top Rated 2024
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
