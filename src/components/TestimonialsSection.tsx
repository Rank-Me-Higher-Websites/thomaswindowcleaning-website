import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Jennifer M.',
    location: 'Chicago, IL',
    rating: 5,
    text: "Thomas and his team did an incredible job on our windows. Streak-free, on time, and very professional!",
  },
  {
    name: 'Mark D.',
    location: 'Arlington Heights, IL',
    rating: 5,
    text: 'Booked them for gutter cleaning before winter. On time, cleaned up everything, and a very fair price.',
  },
  {
    name: 'Sarah K.',
    location: 'Buffalo Grove, IL',
    rating: 5,
    text: "Power washed our driveway and patio - looks brand new. Friendly crew and great communication.",
  },
  {
    name: 'David R.',
    location: 'Palatine, IL',
    rating: 5,
    text: "I've used Thomas for 5+ years. Always reliable, always thorough. Our home looks better every visit.",
  },
  {
    name: 'Linda P.',
    location: 'Northbrook, IL',
    rating: 5,
    text: 'Thomas came out personally to give us a quote. The crew was polite, fast, and the windows are spotless.',
  },
  {
    name: 'Anthony G.',
    location: 'Mount Prospect, IL',
    rating: 5,
    text: "Best price of three quotes and the quality was top notch. Honest, hardworking team you can trust.",
  },
  {
    name: 'Michelle T.',
    location: 'Schaumburg, IL',
    rating: 5,
    text: 'Annual gutter cleaning customer. Always punctual, always thorough, never any surprises on the bill.',
  },
  {
    name: 'Robert H.',
    location: 'Glenview, IL',
    rating: 5,
    text: "Whole-home power wash and windows before listing. Made a huge difference in the photos. Sold in a week!",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Duplicate the list so the marquee can loop seamlessly
  const looped = [...reviews, ...reviews];

  return (
    <section
      id="testimonials"
      className="py-6 md:py-8 relative overflow-hidden bg-section-blue"
    >
      <div className="container mx-auto px-4" ref={ref}>
        {/* Compact header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-4 md:mb-5"
        >
          <h2 className="text-2xl md:text-3xl font-black mb-1 text-foreground">
            Trusted by thousands of people &amp; companies
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-foreground">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span>5.0 · 47+ Google Reviews</span>
          </div>
        </motion.div>
      </div>

      {/* Auto-scrolling marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-3 md:gap-4 marquee-track w-max px-3 md:px-4">
          {looped.map((review, idx) => (
            <article
              key={idx}
              className="flex-shrink-0 w-[260px] md:w-[300px] bg-white rounded-xl shadow-sm p-4 flex flex-col"
              data-testid={`card-review-${idx}`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <Quote className="w-4 h-4 text-foreground/15" />
              </div>
              <p
                className="text-[0.85rem] md:text-sm text-foreground/80 leading-snug mb-3 flex-1"
                data-testid={`text-review-body-${idx}`}
              >
                {review.text}
              </p>
              <div className="border-t border-foreground/10 pt-2">
                <p
                  className="font-bold text-foreground text-xs md:text-sm leading-tight"
                  data-testid={`text-review-name-${idx}`}
                >
                  {review.name}
                </p>
                <p className="text-[0.7rem] md:text-xs text-foreground/60">
                  {review.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
