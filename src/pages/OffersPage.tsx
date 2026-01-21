import { motion } from 'framer-motion';
import { Phone, Tag, Percent, Gift } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import heroBg from '@/assets/hero-bg.jpg';

const offers = [
  {
    title: '5% Off',
    description: 'Get 5% off services over $500.',
    terms: 'New or existing customers. Must present offer at time of service.',
    icon: Percent,
    highlight: false,
  },
  {
    title: '$20 Off',
    description: 'Get $20 off any 2 (two) services.',
    terms: 'New or existing customers. Must present offer at time of service.',
    icon: Tag,
    highlight: true,
  },
  {
    title: 'Referral Bonus',
    description: 'Refer a friend and both get $15 off your next service.',
    terms: 'Friend must be a new customer. Both parties receive discount.',
    icon: Gift,
    highlight: false,
  },
];

const OffersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroBg} alt="Offers" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="section-label">SAVE BIG</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Exterior Cleaning{' '}
                <span className="text-gradient">Offers</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                💧 Save on professional window cleaning, power washing, and gutter cleaning 💧
              </p>
              <a href="tel:8474043398" className="btn-glow text-lg">
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
                  className={`glass-card p-8 text-center relative overflow-hidden ${
                    offer.highlight ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  {offer.highlight && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-sm py-1 font-medium">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 ${offer.highlight ? 'mt-6' : ''}`}>
                    <offer.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-primary mb-4">{offer.title}</h3>
                  <p className="text-foreground font-medium mb-4">{offer.description}</p>
                  <p className="text-sm text-muted-foreground mb-6">{offer.terms}</p>
                  
                  <a href="tel:8474043398" className="btn-glow w-full">
                    <Phone className="w-4 h-4" />
                    Claim Offer
                  </a>
                </motion.div>
              ))}
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
