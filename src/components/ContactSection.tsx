import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const WEBHOOK_URL = 'https://cdlagency.app.n8n.cloud/webhook/000757b6-d8cd-4f4c-8055-adb84ccc09b4';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
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
          form_type: 'contact',
          submittedAt: new Date().toISOString().split('T')[0],
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      if (data.status === 'success') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
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
                  placeholder="First Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-glass"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-glass"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="tel"
                  placeholder="Phone/Mobile"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="input-glass"
                  required
                  disabled={isSubmitting}
                />
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-glass resize-none"
                  required
                  disabled={isSubmitting}
                />
                <button 
                  type="submit" 
                  className="btn-glow w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
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
