import { motion } from 'framer-motion';
import { Phone, Sparkles, Droplets, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import pricesHero from '@/assets/prices-hero.jpg';
import { FloatingCTA } from '@/components/FloatingCTA';

const windowPricing = [
  { windows: '1 - 15', insideOutside: '$140', outsideOnly: '$90' },
  { windows: '16 - 25', insideOutside: '$160', outsideOnly: '$110' },
  { windows: '26 - 35', insideOutside: '$180', outsideOnly: '$130' },
  { windows: '36 - 45', insideOutside: '$220', outsideOnly: '$150' },
  { windows: '46 - 60', insideOutside: '$270', outsideOnly: '$180' },
  { windows: '61 - 80', insideOutside: '$320', outsideOnly: '$210' },
  { windows: '81 - 100', insideOutside: '$380', outsideOnly: '$250' },
  { windows: '101 - 125', insideOutside: '$440', outsideOnly: '$290' },
  { windows: '126 - 150', insideOutside: '$520', outsideOnly: '$340' },
  { windows: '151 - 175', insideOutside: '$600', outsideOnly: '$400' },
  { windows: '176 - 200', insideOutside: '$700', outsideOnly: '$490' },
];

const gutterPricing = [
  { size: '<2000 sqf', story1: '$100', story2: '$150', story3: '$200' },
  { size: '2001 to 3000 sqf', story1: '$125', story2: '$180', story3: '$200' },
  { size: '3001 to 4000 sqf', story1: '$150', story2: '$200', story3: '$250' },
  { size: '4001 to 5000 sqf', story1: '$175', story2: '$225', story3: '$300' },
  { size: '5001 to 6000 sqf', story1: '$200', story2: '$250', story3: '$350' },
  { size: '6001+ sqf', story1: 'Call', story2: 'Call', story3: 'Call' },
];

const powerWashingPricing = {
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

const PricesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={pricesHero} alt="Prices" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="section-label justify-center">PRICES</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transparent Exterior Cleaning{' '}
                <span className="text-gradient">Service Prices</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                For fair and transparent pricing on exterior cleaning services, Thomas Window Cleaning is your go-to team in Wheeling, IL. Our rates are competitive, and our quality of service stands out across the northwest suburbs.
              </p>
              <a href="tel:8474043398" className="btn-glow text-lg">
                <Phone className="w-5 h-5" />
                Get a Free Estimate
              </a>
            </div>
          </div>
        </section>

        {/* Window Cleaning Prices */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Window Cleaning Prices</h2>
            </motion.div>

            <div className="glass-card overflow-hidden max-w-3xl">
              <div className="grid grid-cols-3 bg-primary text-primary-foreground font-semibold">
                <div className="p-4 text-center">No. of Windows</div>
                <div className="p-4 text-center border-l border-primary-foreground/20">Inside & Outside</div>
                <div className="p-4 text-center border-l border-primary-foreground/20">Outside Only</div>
              </div>
              {windowPricing.map((row, index) => (
                <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                  <div className="p-4 text-center font-medium">{row.windows}</div>
                  <div className="p-4 text-center border-l border-border">{row.insideOutside}</div>
                  <div className="p-4 text-center border-l border-border">{row.outsideOnly}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <Link to="/services/window-cleaning" className="text-primary font-medium hover:underline">
                Learn more about our window cleaning services →
              </Link>
            </div>
          </div>
        </section>

        {/* Gutter Cleaning Prices */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Gutter Cleaning Prices</h2>
            </motion.div>

            <div className="glass-card overflow-hidden max-w-4xl">
              <div className="grid grid-cols-4 bg-primary text-primary-foreground font-semibold">
                <div className="p-4 text-center">House Size</div>
                <div className="p-4 text-center border-l border-primary-foreground/20">1 Story</div>
                <div className="p-4 text-center border-l border-primary-foreground/20">2 Story</div>
                <div className="p-4 text-center border-l border-primary-foreground/20">3 Story</div>
              </div>
              {gutterPricing.map((row, index) => (
                <div key={index} className={`grid grid-cols-4 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                  <div className="p-4 text-center font-medium text-sm">{row.size}</div>
                  <div className="p-4 text-center border-l border-border">{row.story1}</div>
                  <div className="p-4 text-center border-l border-border">{row.story2}</div>
                  <div className="p-4 text-center border-l border-border">{row.story3}</div>
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground mt-4">
              Prices depend on square footage. Please call for an accurate price estimate.
            </p>
            <Link to="/services/gutter-cleaning" className="text-primary font-medium hover:underline block mt-2">
              Learn more about our gutter cleaning services →
            </Link>
          </div>
        </section>

        {/* Power Washing Prices */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Waves className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Home Power Washing Prices</h2>
            </motion.div>
            
            <p className="text-muted-foreground mb-8">
              Note: Additional charge may apply for materials if necessary
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
              {/* One Story */}
              <div className="glass-card overflow-hidden">
                <div className="bg-primary text-primary-foreground p-4 text-center font-bold">
                  One Story Homes
                </div>
                {powerWashingPricing.oneStory.map((row, index) => (
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
                {powerWashingPricing.twoStory.map((row, index) => (
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
                {powerWashingPricing.threeStory.map((row, index) => (
                  <div key={index} className={`grid grid-cols-2 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                    <div className="p-4 font-medium">{row.sides}</div>
                    <div className="p-4 text-right border-l border-border">{row.price}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <Link to="/services/power-washing" className="text-primary font-medium hover:underline block mt-6">
              Learn more about our power washing services →
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Call us at (847) 404-3398 or request your free estimate online. Choose Thomas Window Cleaning for affordable and dependable exterior cleaning services!
            </p>
            <a href="tel:8474043398" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors text-lg">
              <Phone className="w-5 h-5" />
              Get Free Estimate
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default PricesPage;
