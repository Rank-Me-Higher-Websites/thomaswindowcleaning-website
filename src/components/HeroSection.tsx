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
    // Handle form submission
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional window cleaning"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      {/* Floating gradient blobs */}
      <div className="floating-blob floating-blob-primary w-96 h-96 -top-48 -left-48" />
      <div className="floating-blob floating-blob-secondary w-80 h-80 bottom-20 right-10" />
      <div className="floating-blob floating-blob-primary w-64 h-64 top-1/2 left-1/3 opacity-30" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-star text-star" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">
                Since 1995 • <span className="text-primary font-semibold">1000+</span> Happy Customers
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Chicagoland's Trusted{' '}
              <span className="text-gradient">Professional Cleaning</span>{' '}
              Experts
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Window Cleaning, Gutter Cleaning & Power Washing. Based in Wheeling, IL — proudly serving the greater Chicagoland area since 1995.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:8474043398" className="btn-glow text-lg">
                <Phone className="w-5 h-5" />
                Request a Callback
              </a>
              <a href="#services" className="btn-outline-glow text-lg">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              Trusted by homeowners across Chicagoland
            </div>
          </motion.div>

          {/* Right side - Video + Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* VSL Video placeholder */}
            <div className="glass-card aspect-video relative group cursor-pointer overflow-hidden">
              <img
                src={heroBg}
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/40">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center animate-pulse-glow transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-sm text-foreground/80 bg-background/60 backdrop-blur px-3 py-1 rounded-full">
                  0:53
                </span>
                <span className="text-sm text-foreground/80 bg-background/60 backdrop-blur px-3 py-1 rounded-full">
                  Click for sound
                </span>
              </div>
            </div>

            {/* Quick booking form */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Book Your Services</h3>
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
