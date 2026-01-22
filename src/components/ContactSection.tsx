import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
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
    <section id="contact" className="py-12 md:py-16 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="section-label">GET IN TOUCH</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Let's discuss your{' '}
              <span className="text-gradient">cleaning needs</span>
            </h2>

            <div className="space-y-3">
              <a
                href="tel:8474043398"
                className="glass-card p-4 flex items-center gap-3 group hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Phone</div>
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
                href="https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-3 group hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <MapPin className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Address</div>
                  <div className="text-sm font-semibold text-foreground">P.O. Box 582 Wheeling, Illinois 60090</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
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
                  rows={3}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
