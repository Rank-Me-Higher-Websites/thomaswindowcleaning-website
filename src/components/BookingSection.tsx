import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Clock, Shield } from 'lucide-react';

export const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
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
    <section id="booking" className="py-24 relative overflow-hidden bg-muted/50">
      {/* Background elements */}
      <div className="floating-blob floating-blob-primary w-80 h-80 -top-40 -right-40 opacity-30" />
      <div className="floating-blob floating-blob-secondary w-64 h-64 bottom-0 left-0 opacity-20" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">GET STARTED</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready for{' '}
              <span className="text-gradient">Sparkling Clean</span>{' '}
              Windows?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Fill out the form and our team will get back to you within 24 hours. We offer free estimates and same-week availability for most services.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">We call you back within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Same-Week Service</h4>
                  <p className="text-sm text-muted-foreground">Most appointments available within days</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Free Estimates</h4>
                  <p className="text-sm text-muted-foreground">No obligation quotes for all services</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Book Your Services</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-glass"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-glass"
                    required
                  />
                </div>
                <div>
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
                </div>
                <button type="submit" className="btn-glow w-full text-lg py-4">
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
