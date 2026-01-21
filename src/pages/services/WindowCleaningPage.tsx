import { motion } from 'framer-motion';
import { CheckCircle, Phone, ArrowRight, Calendar, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import windowCleaningImg from '@/assets/window-cleaning.jpg';
import windowCleaningHero from '@/assets/window-cleaning-hero.jpg';

const pricingData = [
  { windows: '1 - 15', insideOutside: '$140', outsideOnly: '$90' },
  { windows: '16 - 25', insideOutside: '$160', outsideOnly: '$110' },
  { windows: '26 - 35', insideOutside: '$180', outsideOnly: '$130' },
  { windows: '36 - 45', insideOutside: '$220', outsideOnly: '$150' },
  { windows: '46 - 60', insideOutside: '$270', outsideOnly: '$180' },
  { windows: '61 - 80', insideOutside: '$320', outsideOnly: '$210' },
  { windows: '81 - 100', insideOutside: '$380', outsideOnly: '$250' },
];

const benefits = [
  'Streak-Free Shine – We use top-quality cleaning solutions and professional techniques',
  'Reliable & On-Time – We respect your time and always show up when promised',
  'Safe & Efficient – Our skilled team handles both residential and commercial window cleaning',
  'Satisfaction Guaranteed – If you\'re not happy, we\'ll make it right!',
];

const WindowCleaningPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={windowCleaningHero} alt="Window Cleaning" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="section-label">Our Services</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Top-Rated Local{' '}
                <span className="text-gradient">Window Cleaning</span>{' '}
                Experts
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Are your windows looking dull or covered in streaks? At Thomas Window Cleaning, we bring the sparkle back to your home or business with expert window cleaning services in Chicago and the suburbs.
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
                  <span className="text-gradient">Window Cleaning</span>{' '}
                  Services?
                </h2>
                <p className="text-muted-foreground mb-8">
                  We know that clean windows can make all the difference in your home's appearance. Here's why local homeowners and businesses trust us:
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
                <img src={windowCleaningImg} alt="Window Cleaning Service" className="w-full aspect-[4/3] object-cover" />
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
                Basic Window Cleaning{' '}
                <span className="text-gradient">Costs</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="glass-card overflow-hidden">
                <div className="grid grid-cols-3 bg-primary text-primary-foreground font-semibold">
                  <div className="p-4 text-center">No. of Windows</div>
                  <div className="p-4 text-center border-l border-primary-foreground/20">Inside & Outside</div>
                  <div className="p-4 text-center border-l border-primary-foreground/20">Outside Only</div>
                </div>
                {pricingData.map((row, index) => (
                  <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                    <div className="p-4 text-center font-medium">{row.windows}</div>
                    <div className="p-4 text-center border-l border-border">{row.insideOutside}</div>
                    <div className="p-4 text-center border-l border-border">{row.outsideOnly}</div>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground mt-6">
                Prices depend on window size and accessibility. Please call for an accurate price estimate.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready for Crystal-Clear Windows?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Let us take care of the cleaning so you can enjoy more free time! Contact us today for a free estimate.
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

export default WindowCleaningPage;
