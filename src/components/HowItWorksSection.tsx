import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, CalendarCheck, Sparkles, Phone, ArrowRight } from 'lucide-react';
import { useBooking } from '@/contexts/BookingContext';

const steps = [
  {
    icon: MessageSquare,
    title: 'CONSULTATION',
    description: 'Simply reach out to our office, and our friendly team will guide you through the consultation process.',
    number: '01',
  },
  {
    icon: CalendarCheck,
    title: 'SCHEDULE',
    description: "Whether you need an on-site estimate or are ready to book your service, we'll work with your schedule to find a convenient time.",
    number: '02',
  },
  {
    icon: Sparkles,
    title: '100% SATISFACTION',
    description: "Enjoy streak-free windows, clean gutters, and a home that shines—because your happiness is our priority!",
    number: '03',
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { openBooking } = useBooking();

  return (
    <section className="py-4 md:py-6 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-4 md:mb-5"
        >
          <span className="section-label justify-center">HOW IT WORKS</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Schedule cleaning service<br />
            <span className="text-gradient">in 3 simple steps</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-3 gap-3 md:gap-4 pt-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-4 md:p-5 text-center relative group overflow-visible"
            >
              <div className="absolute -top-4 right-4 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md z-10">
                {step.number}
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-bold mb-2 tracking-wide text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mt-6"
        >
          <a 
            href="tel:8474043398" 
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <button 
            onClick={openBooking}
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-semibold transition-colors text-sm"
          >
            Get Free Quote
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
