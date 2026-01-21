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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Schedule cleaning service<br />
            <span className="text-gradient">in 3 simple steps</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-8 text-center relative group hover:shadow-xl transition-shadow"
            >
              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-lg font-bold mb-4 tracking-wide text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>

              {/* Connector line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
