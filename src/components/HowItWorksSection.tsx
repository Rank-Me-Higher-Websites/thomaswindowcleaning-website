import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, CalendarCheck, Sparkles } from 'lucide-react';

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

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="section-label justify-center">HOW IT WORKS</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Schedule cleaning service<br />
            <span className="text-gradient">in 3 simple steps</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-5 md:p-6 text-center relative group"
            >
              {/* Step number */}
              <div className="absolute -top-2.5 right-3 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              
              <h3 className="text-sm font-bold mb-2 tracking-wide text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
