import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, ArrowRight, Sparkles, Droplets, Waves } from 'lucide-react';
import windowCleaningImg from '@/assets/window-cleaning.jpg';
import gutterCleaningImg from '@/assets/gutter-cleaning.jpg';
import powerWashingImg from '@/assets/power-washing.jpg';

const services = [
  {
    title: 'Window Cleaning',
    description: 'Crystal-clear windows that let the sunshine in. Streak-free results guaranteed.',
    image: windowCleaningImg,
    icon: Sparkles,
    href: '#window-cleaning',
  },
  {
    title: 'Gutter Cleaning',
    description: 'Keep your gutters flowing freely. Prevent water damage and protect your home.',
    image: gutterCleaningImg,
    icon: Droplets,
    href: '#gutter-cleaning',
  },
  {
    title: 'Power Washing',
    description: 'Restore your exterior surfaces to their original beauty with professional pressure washing.',
    image: powerWashingImg,
    icon: Waves,
    href: '#power-washing',
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="floating-blob floating-blob-secondary w-96 h-96 -top-48 right-0 opacity-30" />
      
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div>
            <span className="section-label">SERVICES</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Cleaning Services<br />
              <span className="text-gradient">in Chicagoland area</span>
            </h2>
          </div>
          <div className="mt-6 lg:mt-0 max-w-md">
            <p className="text-muted-foreground mb-4">
              We offer comprehensive cleaning solutions, including professional window and gutter cleaning, for both small and large residential and commercial customers.
            </p>
            <a href="tel:8474043398" className="flex items-center gap-3 text-primary font-semibold group">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground block">CALL US ANYTIME</span>
                <span className="text-lg">(847) 404-3398</span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
