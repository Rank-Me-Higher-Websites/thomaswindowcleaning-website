import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Clock } from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <span className="section-label justify-center">CONTACT US</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Contact Cleaning Services{' '}
                <span className="text-gradient">in Chicago</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Thomas Window Cleaning, Inc. provides professional cleaning services for competitive prices. We strive to make each customer happy and satisfied.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We offer services such as window cleaning, gutter cleaning, pressure washing and more. Your positive feedback and referrals to friends, family and neighbors are the best reward for us!
                </p>

                <div className="space-y-6">
                  <a
                    href="tel:8474043398"
                    className="glass-card p-6 flex items-center gap-4 group hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Call Us</div>
                      <div className="text-lg font-semibold text-foreground">(847) 404-3398</div>
                    </div>
                  </a>

                  <a
                    href="mailto:thomaswindowcleaning@gmail.com"
                    className="glass-card p-6 flex items-center gap-4 group hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Email Address</div>
                      <div className="text-lg font-semibold text-foreground">thomaswindowcleaning@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://maps.google.com/maps/dir//Wheeling,+IL+60090+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-6 flex items-center gap-4 group hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Location</div>
                      <div className="text-lg font-semibold text-foreground">P.O. Box 582 Wheeling, Illinois 60090</div>
                    </div>
                  </a>

                  <div className="glass-card p-6 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Business Hours</div>
                      <div className="text-lg font-semibold text-foreground">Mon - Sat: 9:00 - 19:00</div>
                      <div className="text-sm text-muted-foreground">Closed on Sundays</div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/thomaswindowbg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/thomaswindowbg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="glass-card p-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Fill in the details</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
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
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-glass resize-none"
                      required
                    />
                    <button type="submit" className="btn-glow w-full text-lg">
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 glass-card overflow-hidden h-64">
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
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default ContactPage;
