import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import contactHero from '@/assets/contact-hero.jpg';
import { FloatingCTA } from '@/components/FloatingCTA';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={contactHero} alt="Contact Thomas Window Cleaning" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-16 md:py-20">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                Contact Cleaning Services in Chicago
              </h1>
              <p className="text-sm md:text-base text-white/85 mb-3">
                Thomas Window Cleaning, Inc. provides professional cleaning services for competitive prices.
              </p>
              <p className="text-white/70 text-sm mb-6">
                Your positive feedback and referrals are the best reward for us!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a href="#booking" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
                  <ArrowRight className="w-4 h-4" />
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  We offer window cleaning, gutter cleaning, pressure washing and more. Your positive feedback and referrals are the best reward for us!
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:8474043398"
                    className="glass-card p-4 flex items-center gap-3 group hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Phone className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Call Us</div>
                      <div className="text-sm font-semibold text-foreground">(847) 404-3398</div>
                    </div>
                  </a>

                  <a
                    href="mailto:thomaswindowcleaning@gmail.com"
                    className="glass-card p-4 flex items-center gap-3 group hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Mail className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="text-sm font-semibold text-foreground">thomaswindowcleaning@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://maps.google.com/maps/dir//Wheeling,+IL+60090+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 flex items-center gap-3 group hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <MapPin className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Location</div>
                      <div className="text-sm font-semibold text-foreground">P.O. Box 582 Wheeling, IL 60090</div>
                    </div>
                  </a>

                  <div className="glass-card p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Business Hours</div>
                      <div className="text-sm font-semibold text-foreground">Mon - Sat: 9:00 - 19:00</div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6">
                  <h3 className="font-semibold text-sm mb-3">Follow Us</h3>
                  <div className="flex gap-2">
                    <a
                      href="https://www.facebook.com/thomaswindowbg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/thomaswindowbg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="glass-card p-5 md:p-6 shadow-lg">
                  <h3 className="text-lg font-bold mb-4 text-foreground">Fill in the details</h3>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-glass"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-glass"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone/Mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-glass"
                      required
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-glass resize-none"
                      required
                    />
                    <button type="submit" className="btn-glow w-full">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Map */}
                <div className="mt-6 glass-card overflow-hidden h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47467.45938095!2d-87.96377!3d42.1335205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb945112c2f09%3A0xc1bd0ae10b07e6c!2sWheeling%2C%20IL%2060090!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Thomas Window Cleaning Location"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a free estimate for your exterior cleaning needs. Professional service, competitive prices!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors text-lg">
                <Phone className="w-5 h-5" />
                Call Now: (847) 404-3398
              </a>
              <a href="#booking" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors text-lg">
                <ArrowRight className="w-5 h-5" />
                Get Quote
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default ContactPage;
