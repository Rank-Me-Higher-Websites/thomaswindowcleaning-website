import { motion } from 'framer-motion';
import { Phone, Tag, Percent, DollarSign, Shield, Users, Calendar, Award, CalendarCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { useBooking } from '@/contexts/BookingContext';
import offersHero from '@/assets/offers-hero.jpg';
import offersPowerWashing from '@/assets/offers-power-washing.jpg';
import offersWindowCleaning from '@/assets/offers-window-cleaning.jpg';

const offers = [
  {
    title: '5% Off',
    description: 'Get 5% off services over $500.',
    terms: 'New or existing customers. Must present offer at time of service.',
    icon: Percent,
    highlight: false,
    image: offersHero,
  },
  {
    title: '$20 Off',
    description: 'Get $20 off any 2 (two) services.',
    terms: 'New or existing customers. Must present offer at time of service.',
    icon: Tag,
    highlight: true,
    image: offersPowerWashing,
  },
  {
    title: '$10 Off',
    description: 'Get $10 off any service.',
    terms: 'New customers only. Must present offer at time of service.',
    icon: DollarSign,
    highlight: false,
    image: offersWindowCleaning,
  },
];

const benefits = [
  { icon: Users, text: 'Family-owned and locally trusted' },
  { icon: Shield, text: 'Fully insured professionals' },
  { icon: Calendar, text: 'Flexible scheduling for your convenience' },
  { icon: Award, text: '100% satisfaction guarantee' },
];

const OffersPage = () => {
  const { openBooking } = useBooking();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={offersHero} alt="Special Offers" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Exclusive Savings on Exterior Cleaning
              </h1>
              <p className="text-sm md:text-base text-white/90 mb-3">
                Take advantage of our <span className="font-semibold">limited-time offers</span> on professional window cleaning, power washing, and gutter cleaning services in <span className="font-semibold">Chicago, IL</span>.
              </p>
              <p className="text-sm text-white/80 mb-5">
                Family-owned and trusted by homeowners across Chicagoland for over 29 years. Don't miss these seasonal savings!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="py-8 md:py-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Chicagoland Exterior Cleaning{' '}
                <span className="text-gradient">Offers</span>
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">
                Windows, Gutters & More
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
              {offers.map((offer, index) => (
                <motion.div
                  key={offer.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`glass-card overflow-hidden relative ${
                    offer.highlight ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {offer.highlight && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-sm py-1 font-medium text-center z-10">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="relative h-48 overflow-hidden hover-zoom">
                    <img 
                      src={offer.image} 
                      alt={offer.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white">{offer.title}</h3>
                  </div>
                  
                  <div className="p-6 text-center">
                    <p className="text-foreground font-medium mb-2">{offer.description}</p>
                    <p className="text-sm text-muted-foreground mb-6">{offer.terms}</p>
                    
                    <button onClick={openBooking} className="btn-glow w-full">
                      <CalendarCheck className="w-4 h-4" />
                      Book Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section - Why Choose Our Offers */}
        <section className="py-8 md:py-10 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Chicagoland Homeowners Choose{' '}
                  <span className="text-gradient">Thomas Window Cleaning</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  For over 29 years, we've been the trusted choice for exterior cleaning services 
                  across Chicago, Wheeling, and the greater Chicagoland area.
                </p>
              </motion.div>

              {/* Service Highlights with Images */}
              <div className="space-y-8 mb-10">
                {/* Window Cleaning Highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      🪟 Professional Window Cleaning Services
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Our <Link to="/services/window-cleaning" className="text-primary hover:underline">professional window cleaning</Link> service delivers streak-free, 
                      crystal-clear results that transform your home. We use <a href="https://www.epa.gov/saferchoice" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">eco-friendly cleaning solutions</a> 
                      and professional-grade equipment to ensure every window sparkles—inside and out.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        Interior and exterior window cleaning
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        Screen cleaning and track detailing
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        Hard water stain removal
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        Safe cleaning for multi-story homes
                      </li>
                    </ul>
                    <Link to="/services/window-cleaning" className="inline-block mt-4 text-primary hover:underline font-medium">
                      View window cleaning pricing →
                    </Link>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="image-tile">
                      <img 
                        src={offersWindowCleaning} 
                        alt="Professional window cleaning service in Chicago" 
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Power Washing Highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div>
                    <div className="image-tile">
                      <img 
                        src={offersPowerWashing} 
                        alt="Power washing services for driveways and patios in Chicagoland" 
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      💦 Power Washing & Pressure Cleaning
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Restore your property's curb appeal with our <Link to="/services/power-washing" className="text-primary hover:underline">professional power washing services</Link>. 
                      From driveways and sidewalks to siding and decks, we blast away years of dirt, grime, 
                      mold, and mildew to reveal clean, like-new surfaces.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        Driveway and sidewalk cleaning
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        Deck and patio restoration
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        House siding and brick cleaning
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        Fence and outdoor furniture cleaning
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Gutter Cleaning Highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      🍂 Gutter Cleaning & Maintenance
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Protect your home from water damage with our thorough <Link to="/services/gutter-cleaning" className="text-primary hover:underline">gutter cleaning services</Link>. 
                      Chicago's unpredictable weather means your gutters work overtime—we ensure they're 
                      clear of debris and flowing properly to prevent costly repairs.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        Complete debris removal
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        Downspout flushing and unclogging
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        Gutter inspection for damage
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        Seasonal maintenance packages
                      </li>
                    </ul>
                    <Link to="/services/gutter-cleaning" className="inline-block mt-4 text-primary hover:underline font-medium">
                      View gutter cleaning pricing →
                    </Link>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="image-tile">
                      <img 
                        src={offersHero} 
                        alt="Gutter cleaning services in Wheeling and Chicago" 
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 card-hover p-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-sm text-foreground">{benefit.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* SEO Rich Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8 text-center"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Save on Exterior Cleaning Services in Chicago & Wheeling
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our current <strong>exterior cleaning specials</strong> make it the perfect time to invest in your 
                  home's appearance and protection. Whether you need <strong>window washing in Chicago</strong>, 
                  <strong>power washing in Wheeling</strong>, or <strong>gutter cleaning across Chicagoland</strong>, 
                  our experienced team delivers exceptional results at competitive prices.
                </p>
                <p className="text-muted-foreground mb-6">
                  Regular exterior maintenance not only boosts your home's curb appeal but also prevents 
                  long-term damage from clogged gutters, built-up grime, and harsh weather exposure. 
                  Don't wait until small problems become expensive repairs—take advantage of these 
                  limited-time offers and give your home the professional care it deserves.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:8474043398" className="btn-glow">
                    <Phone className="w-5 h-5" />
                    Call (847) 404-3398
                  </a>
                  <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 bg-muted text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted/80 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                    Get a Free Quote
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-8 md:py-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Serving Homeowners Across <span className="text-gradient">Chicagoland</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We proudly offer our exterior cleaning services to residential and commercial 
                properties throughout the greater Chicago area, including:
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  'Wheeling', 'Arlington Heights', 'Buffalo Grove', 'Palatine', 
                  'Mount Prospect', 'Des Plaines', 'Northbrook', 'Glenview',
                  'Schaumburg', 'Hoffman Estates', 'Elk Grove Village', 'Park Ridge'
                ].map((area) => (
                  <span 
                    key={area}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                Don't see your area? <Link to="/contact" className="text-primary font-medium hover:underline">Contact us</Link> to 
                check if we service your location.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-10 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Don't Miss Out on These Savings!
            </h2>
            <p className="text-primary-foreground/80 text-sm mb-5 max-w-2xl mx-auto">
              Call now to book your service and mention your offer code. Limited time only!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors text-lg">
                <Phone className="w-5 h-5" />
                Call Now: (847) 404-3398
              </a>
              <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors text-lg">
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

export default OffersPage;
