import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, ArrowRight, Sparkles, Droplets, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import windowCleaningImg from '@/assets/thomas-window-cleaning.jpg';
import gutterCleaningImg from '@/assets/thomas-gutter-cleaning.jpg';
import powerWashingImg from '@/assets/thomas-power-washing.jpg';

const services = [
  {
    title: 'Window Cleaning',
    description: 'Crystal-clear windows that let the sunshine in. Streak-free results guaranteed.',
    image: windowCleaningImg,
    icon: Sparkles,
    href: '/services/window-cleaning',
  },
  {
    title: 'Gutter Cleaning',
    description: 'Keep your gutters flowing freely. Prevent water damage and protect your home.',
    image: gutterCleaningImg,
    icon: Droplets,
    href: '/services/gutter-cleaning',
  },
  {
    title: 'Power Washing',
    description: 'Restore your exterior surfaces to their original beauty with professional pressure washing.',
    image: powerWashingImg,
    icon: Waves,
    href: '/services/power-washing',
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="services" className="py-12 md:py-16 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 md:mb-10"
        >
          <div>
            <span className="section-label">SERVICES</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Cleaning Services<br />
              <span className="text-gradient">in Chicagoland area</span>
            </h2>
          </div>
          <div className="mt-4 lg:mt-0 max-w-sm">
            <p className="text-muted-foreground text-sm mb-3">
              We offer comprehensive cleaning solutions for both residential and commercial customers.
            </p>
            <a href="tel:8474043398" className="flex items-center gap-2 text-primary font-medium group">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground block leading-none mb-0.5">CALL US</span>
                <span className="text-sm">(847) 404-3398</span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="service-card group"
            >
              <Link to={service.href} className="block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
