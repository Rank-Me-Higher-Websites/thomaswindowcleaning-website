import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Jennifer M.',
    location: 'Wheeling, IL',
    rating: 5,
    text: "Thomas and his team did an incredible job on our windows. Streak-free, on time, and very professional. Best window cleaning we've ever had!",
  },
  {
    name: 'Mark D.',
    location: 'Arlington Heights, IL',
    rating: 5,
    text: 'Booked them for gutter cleaning before winter. Showed up exactly when promised, cleaned up everything, and the price was very fair. Highly recommend.',
  },
  {
    name: 'Sarah K.',
    location: 'Buffalo Grove, IL',
    rating: 5,
    text: "Power washed our driveway and patio - looks brand new. Friendly crew, great communication from booking to finish. Will absolutely use again.",
  },
  {
    name: 'David R.',
    location: 'Palatine, IL',
    rating: 5,
    text: "I've used Thomas Window Cleaning for 5+ years. Always reliable, always thorough. Our home looks better every visit. They treat your property with respect.",
  },
  {
    name: 'Linda P.',
    location: 'Northbrook, IL',
    rating: 5,
    text: 'Thomas personally came out to give us a quote and explained everything. The crew was polite, fast, and the windows are spotless inside and out.',
  },
  {
    name: 'Anthony G.',
    location: 'Mount Prospect, IL',
    rating: 5,
    text: "Best price I got from three quotes and the quality was top notch. They even cleaned the screens. Honest, hardworking team you can trust.",
  },
  {
    name: 'Michelle T.',
    location: 'Schaumburg, IL',
    rating: 5,
    text: 'Annual gutter cleaning customer here. Always punctual, always thorough, never any surprises on the bill. Thomas runs a great business.',
  },
  {
    name: 'Robert H.',
    location: 'Glenview, IL',
    rating: 5,
    text: "We had our entire home power washed and windows cleaned for a listing. Made a huge difference in the photos. Sold in a week. Thank you!",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section
      id="testimonials"
      className="py-8 md:py-12 relative overflow-hidden bg-section-blue"
    >
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-6 md:mb-8"
        >
          <span className="section-label justify-center">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-black mb-2 text-foreground">
            Trusted by thousands of<br />
            people &amp; companies
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span>5.0 average · 47+ Google Reviews</span>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative"
      >
        <div
          className="flex gap-4 md:gap-5 overflow-x-auto pb-4 px-4 md:px-8 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'thin' }}
          data-testid="scroll-reviews"
        >
          {reviews.map((review, idx) => (
            <article
              key={idx}
              className="flex-shrink-0 w-[280px] md:w-[340px] snap-start bg-white rounded-2xl shadow-md p-5 md:p-6 flex flex-col"
              data-testid={`card-review-${idx}`}
            >
              <Quote className="w-6 h-6 text-foreground/20 mb-2" />
              <div className="flex items-center gap-0.5 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p
                className="text-sm md:text-[0.95rem] text-foreground/80 leading-relaxed mb-4 flex-1"
                data-testid={`text-review-body-${idx}`}
              >
                {review.text}
              </p>
              <div className="border-t border-foreground/10 pt-3">
                <p
                  className="font-bold text-foreground text-sm"
                  data-testid={`text-review-name-${idx}`}
                >
                  {review.name}
                </p>
                <p className="text-xs text-foreground/60">{review.location}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
