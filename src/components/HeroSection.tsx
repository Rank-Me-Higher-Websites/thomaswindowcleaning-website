import { motion } from 'framer-motion';
import { Star, CheckCircle, Play, Phone, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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
              <a href="#services" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors">
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

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Quick booking form */}
            <div className="glass-card p-8 bg-card/95 backdrop-blur-xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Book Your Services</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-glass"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="input-glass"
                  required
                />
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="input-glass"
                  required
                >
                  <option value="">--Choose Service--</option>
                  <option value="window">Window Cleaning</option>
                  <option value="gutter">Gutter Cleaning</option>
                  <option value="power">Power Washing</option>
                </select>
                <button type="submit" className="btn-glow w-full text-lg">
                  Submit
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
