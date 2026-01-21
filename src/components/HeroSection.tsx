import { motion } from 'framer-motion';
import { Star, Phone, ArrowRight, Clock, CheckCircle, Sparkles, Droplets, Waves, Shield, Award, MapPin, DollarSign } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import aboutImg from '@/assets/thomas-about.jpg';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional window cleaning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-6 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-white text-foreground px-3 py-1 rounded-full text-xs font-semibold">
                <span className="w-1.5 h-1.5 bg-foreground rounded-full animate-pulse" />
                SAME-DAY SERVICE
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                <Clock className="w-3 h-3" />
                Limited slots today
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-4 leading-[1.1] text-white">
              #1 Window Cleaning in<br />
              Chicagoland –<br />
              Streak-Free Guaranteed!
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-white/90 mb-5 max-w-xl leading-relaxed">
              <span className="font-semibold text-white">Thomas Window Cleaning</span> specializes in{' '}
              <span className="font-medium">window cleaning</span>,{' '}
              <span className="font-medium">gutter cleaning</span>, and{' '}
              <span className="font-medium">power washing</span>. Serving{' '}
              <span className="font-semibold text-white">Wheeling & Chicagoland</span> since 1995.
            </p>

            {/* Service Tags */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                Window Cleaning
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-white" />
                Gutter Cleaning
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Waves className="w-3.5 h-3.5 text-white" />
                Power Washing
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-5">
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-white text-foreground hover:bg-white/90 px-6 py-3 rounded-lg font-semibold transition-colors text-sm shadow-lg">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a href="#booking" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors text-sm">
                <ArrowRight className="w-4 h-4" />
                Get Quote
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border border-white/15 text-white">
                <CheckCircle className="w-3.5 h-3.5" />
                Fully Insured
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border border-white/15 text-white">
                <MapPin className="w-3.5 h-3.5" />
                #1 Wheeling
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border border-white/15 text-white">
                <Shield className="w-3.5 h-3.5" />
                Satisfaction Guarantee
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border border-white/15 text-white">
                <DollarSign className="w-3.5 h-3.5" />
                Fair Pricing
              </span>
            </div>

            {/* Google Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-star text-star" />
                ))}
              </div>
              <span className="font-bold text-white">5.0</span>
              <span className="text-white/70 text-sm">47 Google Reviews</span>
            </div>
          </motion.div>

          {/* Right side - Image with Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hidden lg:block"
          >
            {/* Image Card with Stats Overlay */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImg}
                  alt="Thomas Window Cleaning Team"
                  className="w-full aspect-[5/4] object-cover"
                />
                
                {/* Stats Badges - positioned at bottom inside image */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3">
                  <div className="flex flex-col items-center px-5 py-3 border border-star/60 rounded-lg bg-foreground/80 backdrop-blur-sm">
                    <span className="text-star text-2xl font-bold">29+</span>
                    <span className="text-white/80 text-[10px] uppercase tracking-wide">Years Exp.</span>
                  </div>
                  <div className="flex flex-col items-center px-5 py-3 border border-star/60 rounded-lg bg-foreground/80 backdrop-blur-sm">
                    <span className="text-star text-2xl font-bold">5.0</span>
                    <span className="text-white/80 text-[10px] uppercase tracking-wide">Star Rated</span>
                  </div>
                  <div className="flex flex-col items-center px-5 py-3 border border-star/60 rounded-lg bg-foreground/80 backdrop-blur-sm">
                    <span className="text-star text-2xl font-bold">1K+</span>
                    <span className="text-white/80 text-[10px] uppercase tracking-wide">Happy Clients</span>
                  </div>
                </div>
              </div>
              
              {/* Testimonial Quote - positioned below image */}
              <div className="mt-4 bg-foreground/90 backdrop-blur-sm rounded-lg p-4 border border-star/30">
                <p className="text-white/90 text-sm italic mb-2 leading-relaxed">
                  "Thomas Window Cleaning did an amazing job. The windows have never looked so clear! Professional service."
                </p>
                <p className="text-star text-xs font-semibold">
                  — Sarah J., Arlington Heights
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
