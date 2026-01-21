import { motion } from 'framer-motion';
import { Star, Play, Phone, ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional window cleaning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Floating gradient blobs */}
      <div className="floating-blob floating-blob-primary w-96 h-96 -top-48 -left-48 opacity-40" />
      <div className="floating-blob floating-blob-secondary w-80 h-80 bottom-20 right-10 opacity-30" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-primary-foreground"
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary-foreground/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium border border-primary-foreground/30">
                100% CUSTOMER SATISFACTION
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              PROFESSIONAL<br />
              CLEANING SERVICES
            </h1>

            {/* Description */}
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
              Window Cleaning, Gutter Cleaning & Power Washing. Based in Wheeling, IL — proudly serving the greater Chicagoland area since 1995.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:8474043398" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors">
                <Phone className="w-5 h-5" />
                Request a Callback
              </a>
              <a href="#services" className="inline-flex items-center gap-2 border-2 border-primary-foreground/50 text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-star text-star" />
                ))}
              </div>
              <span className="text-primary-foreground/80 text-sm">
                Trusted by 1000+ homeowners since 1995
              </span>
            </div>
          </motion.div>

          {/* Right side - VSL Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* VSL Video Player */}
            <div className="glass-card aspect-video relative group cursor-pointer overflow-hidden bg-foreground/90 shadow-2xl">
              <img
                src={heroBg}
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-foreground flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary fill-current ml-1" />
                </div>
              </div>
              {/* Video info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                <div className="flex items-center justify-between text-primary-foreground">
                  <span className="text-sm font-medium">See Why Chicagoland Trusts Us</span>
                  <span className="text-sm opacity-80 bg-foreground/50 px-3 py-1 rounded-full">0:53</span>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
            
            {/* Social proof below video */}
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="glass-card px-4 py-2 flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-muted-foreground">500+ videos watched this month</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
