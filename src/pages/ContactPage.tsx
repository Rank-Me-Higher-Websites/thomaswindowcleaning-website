import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Clock, ArrowRight, CheckCircle, Shield, Award, Loader2, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import contactHero from '@/assets/thomas-about.jpg';
import { FloatingCTA } from '@/components/FloatingCTA';

const WEBHOOK_URL = 'https://cdlagency.app.n8n.cloud/webhook-test/ae656859-0797-496e-9801-766df447fb22';

const ContactPage = () => {
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
          form_type: 'contact_page',
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center overflow-hidden">
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
                <button 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-10 md:py-12">
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
                    href="https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 flex items-center gap-3 group hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <MapPin className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Location</div>
                      <div className="text-sm font-semibold text-foreground">P.O. Box 582 Wheeling, Illinois 60090</div>
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
                <div id="contact-form" className="glass-card p-5 md:p-6 shadow-lg">
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
                      rows={4}
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

        {/* SEO Content Section */}
        <section className="py-10 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
                  Professional Exterior Cleaning Services in Chicago & Northwest Suburbs
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  Thomas Window Cleaning has been the trusted choice for <strong>residential and commercial exterior cleaning</strong> in <strong>Wheeling, IL</strong> and the greater Chicago area since 1995. Our licensed and insured technicians deliver exceptional results for <Link to="/services/window-cleaning" className="text-primary hover:underline">window cleaning</Link>, <Link to="/services/gutter-cleaning" className="text-primary hover:underline">gutter cleaning</Link>, and <Link to="/services/power-washing" className="text-primary hover:underline">power washing</Link> services.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="glass-card p-5 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                    <p className="text-sm text-muted-foreground">Fully licensed and insured for your peace of mind and protection.</p>
                  </div>
                  <div className="glass-card p-5 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Award Winning</h3>
                    <p className="text-sm text-muted-foreground">Angie's List Super Service Award recipient for outstanding service.</p>
                  </div>
                  <div className="glass-card p-5 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Satisfaction Guaranteed</h3>
                    <p className="text-sm text-muted-foreground">100% satisfaction guarantee on all our cleaning services.</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2">Areas We Serve</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We proudly serve homeowners and businesses throughout the <strong>Chicago metropolitan area</strong>, including Wheeling, Buffalo Grove, Arlington Heights, Palatine, Mount Prospect, Des Plaines, Northbrook, Glenview, Libertyville, Vernon Hills, and surrounding northwest suburbs.
                </p>

                <h3 className="text-lg font-bold mb-2">Why Choose Thomas Window Cleaning?</h3>
                <ul className="space-y-1.5 text-muted-foreground text-sm mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Experienced professionals</strong> with over 25 years serving the Chicago area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Transparent pricing</strong> with no hidden fees—get your <Link to="/prices" className="text-primary hover:underline">free estimate</Link> today</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Eco-friendly cleaning solutions</strong> safe for your family, pets, and landscaping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Flexible scheduling</strong> with same-week appointments often available</span>
                  </li>
                </ul>

                <p className="text-muted-foreground text-sm">
                  Ready to transform your home's exterior? <strong>Call us at <a href="tel:8474043398" className="text-primary hover:underline">(847) 404-3398</a></strong> or fill out the contact form above for a free, no-obligation quote.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary">
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
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors text-lg"
              >
                <ArrowRight className="w-5 h-5" />
                Get Quote
              </button>
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
