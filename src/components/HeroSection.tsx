import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, Phone, ArrowRight, CheckCircle, Sparkles, Droplets, Waves, Shield, MapPin, DollarSign, Loader2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';
import { useBooking } from '@/contexts/BookingContext';

const WEBHOOK_URL = 'https://cdlagency.app.n8n.cloud/webhook/ae656859-0797-496e-9801-766df447fb22';

interface HeroSectionProps {
  onGetQuote?: () => void;
}

export const HeroSection = ({ onGetQuote }: HeroSectionProps) => {
  const { openBooking } = useBooking();
  const handleQuote = onGetQuote || openBooking;

  const [formData, setFormData] = useState({ name: '', phone: '', service: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, form_type: 'hero_quote' }),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      if (data.status === 'success') {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', service: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative lg:min-h-[75vh] flex items-center overflow-hidden pt-14 md:pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Professional window cleaning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />
      </div>

      <div className="container mx-auto px-4 py-4 md:py-6 relative z-10">
        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-5 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            {/* Headline */}
            <h1 className="font-display italic font-black text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] mb-2 md:mb-3 leading-[1.05] tracking-tight text-white max-w-xl">
              Window Cleaning in Chicago<br />
              <span className="text-section-blue">Streak-Free Results</span>
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-white/80 mb-3 md:mb-4 max-w-xl leading-snug md:leading-relaxed font-normal">
              <span className="font-semibold text-white">Thomas Window Cleaning</span> specializes in{' '}
              <span className="font-medium">window cleaning</span>,{' '}
              <span className="font-medium">gutter cleaning</span>, and{' '}
              <span className="font-medium">power washing</span>. Serving{' '}
              <span className="font-semibold text-white">Chicago & the surrounding suburbs</span> since 1995.
            </p>

            {/* Service Tags - hidden on mobile */}
            <div className="hidden sm:flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-4 text-xs text-white/80">
              <Link to="/services/window-cleaning" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                Window Cleaning
              </Link>
              <Link to="/services/gutter-cleaning" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                <Droplets className="w-3.5 h-3.5 text-white" />
                Gutter Cleaning
              </Link>
              <Link to="/services/power-washing" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                <Waves className="w-3.5 h-3.5 text-white" />
                Power Washing
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mb-3 md:mb-4">
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-white text-foreground hover:bg-white/90 px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-bold transition-colors text-base md:text-lg shadow-lg" data-testid="button-call-hero">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Call Now
              </a>
              <button onClick={handleQuote} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-bold transition-colors text-base md:text-lg" data-testid="button-quote-hero">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                Get Quote
              </button>
            </div>

            {/* Google Reviews */}
            <a
              href="https://www.google.com/maps/place/Thomas+Window+Cleaning/@42.1391,-87.9295,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              data-testid="link-google-reviews"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-star text-star" />
                ))}
              </div>
              <span className="font-bold text-white">5.0</span>
              <span className="text-white/70 text-xs md:text-sm">47 Google Reviews</span>
            </a>

            {/* Trust badges - mobile only, inline */}
            <div className="flex lg:hidden flex-wrap gap-1.5 mt-3">
              <span className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full text-xs font-bold text-foreground shadow">
                <CheckCircle className="w-3.5 h-3.5 text-section-blue" strokeWidth={2.5} />
                Insured
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full text-xs font-bold text-foreground shadow">
                <MapPin className="w-3.5 h-3.5 text-section-blue" strokeWidth={2.5} />
                Chicagoland
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full text-xs font-bold text-foreground shadow">
                <Shield className="w-3.5 h-3.5 text-section-blue" strokeWidth={2.5} />
                Guaranteed
              </span>
            </div>
          </motion.div>

          {/* Right side - Quote Form + Trust Badges (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-2xl">
              <h3 className="font-display font-black text-[30px] text-foreground mb-1 leading-tight">
                Get a Free Quote
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                We'll get back to you within 24 hours.
              </p>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-3 mb-3 rounded-lg bg-green-500/10 text-green-600 border border-green-500/20" data-testid="status-form-success">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-semibold">Thanks! We'll be in touch soon.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-3 mb-3 rounded-lg bg-destructive/10 text-destructive border border-destructive/20" data-testid="status-form-error">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-semibold">Something went wrong. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="hero-name" className="block text-sm font-bold text-foreground mb-1">
                    Your Name
                  </label>
                  <input
                    id="hero-name"
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-glass"
                    required
                    disabled={isSubmitting}
                    data-testid="input-hero-name"
                  />
                </div>
                <div>
                  <label htmlFor="hero-phone" className="block text-sm font-bold text-foreground mb-1">
                    Phone Number
                  </label>
                  <input
                    id="hero-phone"
                    type="tel"
                    placeholder="(847) 404-3398"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-glass"
                    required
                    disabled={isSubmitting}
                    data-testid="input-hero-phone"
                  />
                </div>
                <div>
                  <label htmlFor="hero-service" className="block text-sm font-bold text-foreground mb-1">
                    Service
                  </label>
                  <select
                    id="hero-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="input-glass"
                    required
                    disabled={isSubmitting}
                    data-testid="select-hero-service"
                  >
                    <option value="">--Choose Service--</option>
                    <option value="window">Window Cleaning</option>
                    <option value="gutter">Gutter Cleaning</option>
                    <option value="power">Power Washing</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn-glow w-full py-3 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  data-testid="button-submit-hero-quote"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Book an Appointment'
                  )}
                </button>
              </form>
            </div>

            {/* Trust Badges - below the form */}
            <div className="flex flex-wrap gap-2.5 mt-5 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-full text-sm md:text-base font-bold text-foreground shadow-lg ring-1 ring-black/5">
                <CheckCircle className="w-5 h-5 text-section-blue" strokeWidth={2.5} />
                Fully Insured
              </span>
              <span className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-full text-sm md:text-base font-bold text-foreground shadow-lg ring-1 ring-black/5">
                <MapPin className="w-5 h-5 text-section-blue" strokeWidth={2.5} />
                Chicagoland Local
              </span>
              <span className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-full text-sm md:text-base font-bold text-foreground shadow-lg ring-1 ring-black/5">
                <Shield className="w-5 h-5 text-section-blue" strokeWidth={2.5} />
                Satisfaction Guarantee
              </span>
              <span className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-full text-sm md:text-base font-bold text-foreground shadow-lg ring-1 ring-black/5">
                <DollarSign className="w-5 h-5 text-section-blue" strokeWidth={2.5} />
                Fair Pricing
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
