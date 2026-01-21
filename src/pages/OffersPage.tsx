import { motion } from 'framer-motion';
import { Phone, Tag, Percent, DollarSign, Shield, Users, Calendar, Award, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={offersHero} alt="Special Offers" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Exclusive Savings on Exterior Cleaning
              </h1>
              <p className="text-lg text-white/90 mb-4">
                Take advantage of our <span className="font-semibold">limited-time offers</span> on professional window cleaning, power washing, and gutter cleaning services in <span className="font-semibold">Chicago, IL</span>.
              </p>
              <p className="text-white/80 mb-8">
                Family-owned and trusted by homeowners across Chicagoland for over 29 years. Don't miss these seasonal savings!
              </p>
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                <Phone className="w-5 h-5" />
                Call to Redeem: (847) 404-3398
              </a>
            </div>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Chicagoland Exterior Cleaning{' '}
                <span className="text-gradient">Offers</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                Windows, Gutters & More
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                  
                  <div className="relative h-48 overflow-hidden">
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
                    
                    <Link to="/contact#booking" className="btn-glow w-full">
                      <CalendarCheck className="w-4 h-4" />
                      Book Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  💧 Take Advantage Of Our Limited-Time{' '}
                  <span className="text-gradient">Exterior Cleaning Offers</span> 💧
                </h2>
                <p className="text-muted-foreground text-lg">
                  Thomas Window Cleaning proudly serves homeowners in Wheeling and across Chicagoland, 
                  delivering reliable and affordable exterior cleaning solutions. Our team specializes 
                  in streak-free window washing, powerful pressure washing, and thorough gutter debris 
                  removal to help protect and beautify your home.
                </p>
              </div>

              <p className="text-muted-foreground text-center mb-12">
                Regular exterior cleaning not only boosts your home's curb appeal but also prevents 
                long-term damage caused by clogged gutters, built-up grime, and weather exposure. 
                Whether you're preparing your home for the changing seasons, hosting guests, or 
                simply want a fresher look, we've got you covered.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 glass-card p-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  Don't wait—these seasonal savings won't last! Book your appointment today and see 
                  why Chicagoland homeowners continue to choose Thomas Window Cleaning year after year.
                </p>
                <h3 className="text-2xl font-bold mb-6">
                  Ready To Give Your Home The Care It Deserves?
                </h3>
                <p className="text-muted-foreground mb-8">
                  Reach out today and let our experts handle the hard work while you enjoy the results.
                </p>
                <Link to="/contact" className="btn-glow text-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Don't Miss Out on These Savings!
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Call now to book your service and mention your offer code. Limited time only!
            </p>
            <a href="tel:8474043398" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors text-lg">
              <Phone className="w-5 h-5" />
              Book Now: (847) 404-3398
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default OffersPage;
