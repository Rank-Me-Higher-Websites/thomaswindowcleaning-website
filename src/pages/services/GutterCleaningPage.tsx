import { motion } from 'framer-motion';
import { CheckCircle, Phone, ArrowRight, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import gutterCleaningImg from '@/assets/gutter-cleaning.jpg';
import gutterCleaningHero from '@/assets/gutter-cleaning-hero.jpg';

const pricingData = [
  { size: '<2000 sqf', story1: '$100', story2: '$150', story3: '$200' },
  { size: '2001 to 3000 sqf', story1: '$125', story2: '$180', story3: '$200' },
  { size: '3001 to 4000 sqf', story1: '$150', story2: '$200', story3: '$250' },
  { size: '4001 to 5000 sqf', story1: '$175', story2: '$225', story3: '$300' },
  { size: '5001 to 6000 sqf', story1: '$200', story2: '$250', story3: '$350' },
  { size: '6001 sqf or larger', story1: 'Call', story2: 'Call', story3: 'Call' },
];

const benefits = [
  'Expert Technicians – Trained professionals ensure gutters are cleaned safely and thoroughly',
  'Prevent Costly Damage – Avoid foundation issues, roof leaks, and siding damage caused by clogged gutters',
  'Seasonal Maintenance – Keep your gutters flowing year-round with scheduled cleanings in spring and fall',
  'No Mess, No Hassle – We remove all debris and ensure a complete cleanup after service',
];

const GutterCleaningPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={gutterCleaningHero} alt="Gutter Cleaning" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="section-label">Our Services</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Leading Local{' '}
                <span className="text-gradient">Gutter Cleaning</span>{' '}
                Services
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Clogged gutters lead to costly water damage. Thomas Window Cleaning provides professional gutter cleaner service in Chicago, ensuring clear, efficient drainage. We remove leaves, debris, and buildup to prevent overflow and protect your home.
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
                  <span className="text-gradient">Gutter Cleaning</span>{' '}
                  Services?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Ensure your gutters stay clear and functional with our top-rated Chicago gutter maintenance, preventing costly home repairs.
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
                <img src={gutterCleaningImg} alt="Gutter Cleaning Service" className="w-full aspect-[4/3] object-cover" />
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
                Gutter Cleaning{' '}
                <span className="text-gradient">Prices</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="glass-card overflow-hidden">
                <div className="grid grid-cols-4 bg-primary text-primary-foreground font-semibold">
                  <div className="p-4 text-center">House Size</div>
                  <div className="p-4 text-center border-l border-primary-foreground/20">1 Story</div>
                  <div className="p-4 text-center border-l border-primary-foreground/20">2 Story</div>
                  <div className="p-4 text-center border-l border-primary-foreground/20">3 Story</div>
                </div>
                {pricingData.map((row, index) => (
                  <div key={index} className={`grid grid-cols-4 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                    <div className="p-4 text-center font-medium text-sm">{row.size}</div>
                    <div className="p-4 text-center border-l border-border">{row.story1}</div>
                    <div className="p-4 text-center border-l border-border">{row.story2}</div>
                    <div className="p-4 text-center border-l border-border">{row.story3}</div>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground mt-6">
                Prices depend on square footage. Please call for an accurate price estimate.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Prevent Costly Water Damage Today
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Our team handles the dirty work—no ladders needed. Schedule seasonal gutter maintenance for a hassle-free solution!
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

export default GutterCleaningPage;
