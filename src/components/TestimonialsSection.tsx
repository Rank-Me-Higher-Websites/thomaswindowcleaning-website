import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner, Arlington Heights',
    content: 'Thomas Window Cleaning did an amazing job on our two-story home. The windows have never looked so clear! Professional service from start to finish.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner, Wheeling',
    content: "Been using their services for our office building for 3 years. Always on time, always professional. Couldn't ask for better service.",
    rating: 5,
  },
  {
    name: 'Jennifer Martinez',
    role: 'Homeowner, Buffalo Grove',
    content: 'After the fall cleanup, our gutters are completely clear and flowing perfectly. They even showed me photos of the before and after!',
    rating: 5,
  },
  {
    name: 'Robert Williams',
    role: 'Property Manager',
    content: 'Managing multiple properties, I need reliable contractors. Thomas Window Cleaning has never let me down. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Homeowner, Palatine',
    content: 'The power washing transformed our driveway! It looks brand new. Fair pricing and excellent results.',
    rating: 5,
  },
  {
    name: 'David Anderson',
    role: 'Homeowner, Schaumburg',
    content: 'Quick, efficient, and the results speak for themselves. Our neighbors are now asking for their contact info!',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background elements */}
      <div className="floating-blob floating-blob-primary w-96 h-96 -bottom-48 -right-48 opacity-20" />
      
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Trusted by thousands of<br />
            <span className="text-gradient">people & companies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our clients are saying about our professional cleaning services
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="testimonial-card relative hover:shadow-xl transition-shadow"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-star text-star" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#"
            className="glass-card px-6 py-4 flex items-center gap-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-star text-star" />
              ))}
            </div>
            <div>
              <span className="font-semibold text-foreground">5.0 Rating</span>
              <span className="text-muted-foreground text-sm ml-2">• 47 Google Reviews</span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
