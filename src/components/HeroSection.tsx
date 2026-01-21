import { motion } from 'framer-motion';
import { Star, Play, Phone, ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional window cleaning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/40" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary-foreground"
          >
            {/* Badge */}
            <div className="mb-4">
              <span className="bg-primary-foreground/15 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-primary-foreground/20">
                100% CUSTOMER SATISFACTION
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold mb-4 leading-[1.1] tracking-tight">
              PROFESSIONAL<br />
              CLEANING SERVICES
            </h1>

            {/* Description */}
            <p className="text-base text-primary-foreground/80 mb-6 max-w-lg leading-relaxed">
              Window Cleaning, Gutter Cleaning & Power Washing. Based in Wheeling, IL — proudly serving the greater Chicagoland area since 1995.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                Request a Callback
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 border-[1.5px] border-primary-foreground/40 text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-sm">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-star text-star" />
                ))}
              </div>
              <span className="text-primary-foreground/70 text-xs">
                Trusted by 1000+ homeowners since 1995
              </span>
            </div>
          </motion.div>

          {/* Right side - VSL Video */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hidden md:block"
          >
            {/* VSL Video Player */}
            <div className="glass-card aspect-video relative group cursor-pointer overflow-hidden bg-foreground/90 shadow-xl">
              <img
                src={heroBg}
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-18 md:h-18 rounded-full bg-primary-foreground flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105">
                  <Play className="w-7 h-7 text-primary fill-current ml-0.5" />
                </div>
              </div>
              {/* Video info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent">
                <div className="flex items-center justify-between text-primary-foreground">
                  <span className="text-xs font-medium">See Why Chicagoland Trusts Us</span>
                  <span className="text-xs opacity-80 bg-foreground/50 px-2 py-0.5 rounded-full">0:53</span>
                </div>
              </div>
            </div>
            
            {/* Social proof below video */}
            <div className="mt-3 flex items-center justify-center">
              <div className="glass-card px-3 py-1.5 flex items-center gap-2 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-muted-foreground">500+ videos watched this month</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
