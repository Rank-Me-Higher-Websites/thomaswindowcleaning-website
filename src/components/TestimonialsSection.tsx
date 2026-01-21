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
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="testimonials" className="py-12 md:py-16 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="section-label justify-center">TESTIMONIALS</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Trusted by thousands of<br />
            <span className="text-gradient">people & companies</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            See what our clients are saying about our professional cleaning services
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="testimonial-card relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-3 right-3 w-6 h-6 text-primary/15" />
              
              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-star text-star" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground text-xs mb-4 leading-relaxed line-clamp-4">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xs font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-xs text-foreground">{testimonial.name}</div>
                  <div className="text-[10px] text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex justify-center mt-8"
        >
          <a
            href="#"
            className="glass-card px-4 py-2.5 flex items-center gap-3"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-star text-star" />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-semibold text-foreground">5.0 Rating</span>
              <span className="text-muted-foreground text-xs ml-1.5">• 47 Google Reviews</span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
