import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Clock, Shield, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const WEBHOOK_URL = 'https://cdlagency.app.n8n.cloud/webhook/ae656859-0797-496e-9801-766df447fb22';

export const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          form_type: 'booking',
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      if (data.status === 'success') {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', service: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-12 md:py-16 relative overflow-hidden bg-muted/40">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className="section-label">GET STARTED</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Ready for{' '}
              <span className="text-gradient">Sparkling Clean</span>{' '}
              Windows?
            </h2>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              Fill out the form and our team will get back to you within 24 hours. Free estimates and same-week availability.
            </p>

            {/* Benefits */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Quick Response</h4>
                  <p className="text-xs text-muted-foreground">We call you back within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Same-Week Service</h4>
                  <p className="text-xs text-muted-foreground">Most appointments available within days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">Free Estimates</h4>
                  <p className="text-xs text-muted-foreground">No obligation quotes for all services</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="glass-card p-5 md:p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-foreground">Book Your Services</h3>
              
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-3 mb-4 rounded-lg bg-green-500/10 text-green-600 border border-green-500/20">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">Form submitted successfully</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-3 mb-4 rounded-lg bg-destructive/10 text-destructive border border-destructive/20">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">Failed to submit form. Please try again</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-glass"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="input-glass"
                  required
                  disabled={isSubmitting}
                />
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="input-glass"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">--Choose Service--</option>
                  <option value="window">Window Cleaning</option>
                  <option value="gutter">Gutter Cleaning</option>
                  <option value="power">Power Washing</option>
                </select>
                <button 
                  type="submit" 
                  className="btn-glow w-full py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
