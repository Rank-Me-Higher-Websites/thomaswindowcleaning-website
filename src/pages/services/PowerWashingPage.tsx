import { motion } from 'framer-motion';
import { CheckCircle, Phone, ArrowRight, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import powerWashingImg from '@/assets/power-washing.jpg';
import powerWashingHero from '@/assets/power-washing-hero.jpg';

const pricingData = {
  oneStory: [
    { sides: '1 side', price: '$110' },
    { sides: '2 sides', price: '$180' },
    { sides: '3 sides', price: '$240' },
    { sides: '4 sides', price: '$300' },
  ],
  twoStory: [
    { sides: '1 side', price: '$150' },
    { sides: '2 sides', price: '$250' },
    { sides: '3 sides', price: '$350' },
    { sides: '4 sides', price: '$450' },
  ],
  threeStory: [
    { sides: '1 side', price: '$200' },
    { sides: '2 sides', price: '$340' },
    { sides: '3 sides', price: '$460' },
    { sides: '4 sides', price: '$580' },
  ],
};

const benefits = [
  'House Washing – Remove built-up dirt, mold, and mildew from siding, brick, and stucco',
  'Driveway & Sidewalk Cleaning – Get rid of oil stains, dirt, and discoloration for a clean, polished look',
  'Deck & Patio Cleaning – Restore wood, concrete, and stone surfaces by removing grime and algae buildup',
  'Commercial Power Washing – Keep storefronts, parking lots, and building exteriors looking professional',
];

const PowerWashingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={powerWashingHero} alt="Power Washing" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="section-label">Our Services</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional{' '}
                <span className="text-gradient">Power Washing</span>{' '}
                Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Dirt, grime, and mildew can damage your home or business exterior. Thomas Window Cleaning offers professional power and pressure washing in Chicago, IL, removing stains, buildup, and discoloration from siding, driveways, sidewalks, decks, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:8474043398" className="btn-glow text-lg">
                  <Phone className="w-5 h-5" />
                  Get a Free Quote
                </a>
                <Link to="/prices" className="btn-outline-glow text-lg">
                  View Pricing
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our{' '}
                  <span className="text-gradient">Power Washing</span>{' '}
                  Services?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Restore your home or business with best power washers that eliminate dirt, grime, and stains from exterior surfaces.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="badge-glow">
                    <Shield className="w-4 h-4" />
                    Fully Insured
                  </div>
                  <div className="badge-glow">
                    <Award className="w-4 h-4" />
                    29+ Years Experience
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card overflow-hidden shadow-xl"
              >
                <img src={powerWashingImg} alt="Power Washing Service" className="w-full aspect-[4/3] object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="section-label justify-center">PRICING</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Home Power Washing{' '}
                <span className="text-gradient">Prices</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                Note: Additional charge may apply for materials if necessary
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* One Story */}
              <div className="glass-card overflow-hidden">
                <div className="bg-primary text-primary-foreground p-4 text-center font-bold">
                  One Story Homes
                </div>
                {pricingData.oneStory.map((row, index) => (
                  <div key={index} className={`grid grid-cols-2 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                    <div className="p-4 font-medium">{row.sides}</div>
                    <div className="p-4 text-right border-l border-border">{row.price}</div>
                  </div>
                ))}
              </div>

              {/* Two Story */}
              <div className="glass-card overflow-hidden">
                <div className="bg-primary text-primary-foreground p-4 text-center font-bold">
                  Two Story Homes
                </div>
                {pricingData.twoStory.map((row, index) => (
                  <div key={index} className={`grid grid-cols-2 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                    <div className="p-4 font-medium">{row.sides}</div>
                    <div className="p-4 text-right border-l border-border">{row.price}</div>
                  </div>
                ))}
              </div>

              {/* Three Story */}
              <div className="glass-card overflow-hidden">
                <div className="bg-primary text-primary-foreground p-4 text-center font-bold">
                  Three Story Homes
                </div>
                {pricingData.threeStory.map((row, index) => (
                  <div key={index} className={`grid grid-cols-2 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                    <div className="p-4 font-medium">{row.sides}</div>
                    <div className="p-4 text-right border-l border-border">{row.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Enhance Curb Appeal & Protect Your Surfaces
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Get high-pressure cleaning that delivers lasting results. Get a free quote today!
            </p>
            <a href="tel:8474043398" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors text-lg">
              <Phone className="w-5 h-5" />
              Call Now: (847) 404-3398
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default PowerWashingPage;
