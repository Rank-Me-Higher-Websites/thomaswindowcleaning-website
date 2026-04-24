import { motion } from 'framer-motion';
import { Phone, Sparkles, Droplets, Waves, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import pricesHero from '@/assets/prices-hero.jpg';
import pricesTransparent from '@/assets/prices-transparent.jpg';
import { FloatingCTA } from '@/components/FloatingCTA';
import { useBooking } from '@/contexts/BookingContext';
import { SEOHead } from '@/components/SEOHead';

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
  const { openBooking } = useBooking();
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Pricing | Window Cleaning, Gutter & Power Washing | Thomas Window Cleaning"
        description="Transparent pricing for window cleaning, gutter cleaning, and power washing services in Chicago's northwest suburbs. No hidden fees. Get a free quote today!"
        canonical="/prices"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={pricesHero} alt="Exterior Cleaning Prices" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Transparent Exterior Cleaning Service Prices
              </h1>
              <p className="text-sm md:text-base text-white/90 mb-3">
                For fair and transparent pricing on <span className="font-semibold">exterior cleaning services</span>, Thomas Window Cleaning is your go-to team in <span className="font-semibold">Wheeling, IL</span>.
              </p>
              <p className="text-sm text-white/80 mb-5">
                Our rates are competitive, and our quality of service stands out across the northwest suburbs. Whether you need window cleaning, gutter cleaning, or power washing, we deliver expert results with no hidden fees.
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

        {/* Transparent Pricing Info Section */}
        <section className="py-5 md:py-6 bg-section-blue">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-5 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Transparent Exterior Cleaning Service Prices in Wheeling, IL
                </h2>
                <p className="text-muted-foreground mb-4">
                  For fair and transparent pricing on exterior cleaning services, Thomas Window Cleaning is your go-to team in Wheeling, IL. Our rates are competitive, and our quality of service stands out across the northwest suburbs. Whether you need <Link to="/services/window-cleaning" className="text-primary hover:underline">window cleaning</Link>, <Link to="/services/gutter-cleaning" className="text-primary hover:underline">gutter cleaning</Link>, or <Link to="/services/power-washing" className="text-primary hover:underline">power washing</Link>, we deliver expert results with no hidden fees.
                </p>
                <p className="text-muted-foreground mb-4">
                  As a trusted local company, our licensed and insured technicians are known for their professionalism, attention to detail, and commitment to spotless results. We make it easy to keep your home's exterior clean, safe, and beautiful.
                </p>
                <p className="text-muted-foreground">
                  To get a quote or schedule your service, simply call us at <a href="tel:8474043398" className="text-primary hover:underline">(847) 404-3398</a> or request your free estimate online. Choose Thomas Window Cleaning for affordable and dependable exterior cleaning service prices in Wheeling and nearby areas.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card overflow-hidden"
              >
                <img src={pricesTransparent} alt="Window cleaning services" className="w-full aspect-[4/3] object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Window Cleaning Prices */}
        <section className="py-5 md:py-6">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Window Cleaning Prices</h2>
            </motion.div>

            <div className="overflow-x-auto -mx-4 px-4">
              <div className="glass-card overflow-hidden min-w-[400px] max-w-3xl">
                <div className="grid grid-cols-3 bg-primary text-primary-foreground font-semibold text-xs md:text-sm">
                  <div className="p-3 md:p-4 text-center">No. of Windows</div>
                  <div className="p-3 md:p-4 text-center border-l border-primary-foreground/20">Inside & Outside</div>
                  <div className="p-3 md:p-4 text-center border-l border-primary-foreground/20">Outside Only</div>
                </div>
                {windowPricing.map((row, index) => (
                  <div key={index} className={`grid grid-cols-3 text-xs md:text-sm ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                    <div className="p-3 md:p-4 text-center font-medium">{row.windows}</div>
                    <div className="p-3 md:p-4 text-center border-l border-border">{row.insideOutside}</div>
                    <div className="p-3 md:p-4 text-center border-l border-border">{row.outsideOnly}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start">
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                Get Window Cleaning Quote
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/10 transition-colors text-sm">
                <ArrowRight className="w-4 h-4" />
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Gutter Cleaning Prices */}
        <section className="py-5 md:py-6 bg-section-blue">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Gutter Cleaning Prices</h2>
            </motion.div>

            <div className="overflow-x-auto -mx-4 px-4">
              <div className="glass-card overflow-hidden min-w-[450px] max-w-4xl">
                <div className="grid grid-cols-4 bg-primary text-primary-foreground font-semibold text-xs md:text-sm">
                  <div className="p-3 md:p-4 text-center">House Size</div>
                  <div className="p-3 md:p-4 text-center border-l border-primary-foreground/20">1 Story</div>
                  <div className="p-3 md:p-4 text-center border-l border-primary-foreground/20">2 Story</div>
                  <div className="p-3 md:p-4 text-center border-l border-primary-foreground/20">3 Story</div>
                </div>
                {gutterPricing.map((row, index) => (
                  <div key={index} className={`grid grid-cols-4 text-xs md:text-sm ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                    <div className="p-3 md:p-4 text-center font-medium">{row.size}</div>
                    <div className="p-3 md:p-4 text-center border-l border-border">{row.story1}</div>
                    <div className="p-3 md:p-4 text-center border-l border-border">{row.story2}</div>
                    <div className="p-3 md:p-4 text-center border-l border-border">{row.story3}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start">
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                Get Gutter Cleaning Quote
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/10 transition-colors text-sm">
                <ArrowRight className="w-4 h-4" />
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Power Washing Prices */}
        <section className="py-5 md:py-6">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Waves className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Home Power Washing Prices</h2>
            </motion.div>
            
            <p className="text-muted-foreground text-sm mb-6">
              Note: Additional charge may apply for materials if necessary
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl">
              {/* One Story */}
              <div className="glass-card overflow-hidden">
              <div className="bg-primary text-primary-foreground p-3 text-center font-bold text-sm">
                One Story Homes
              </div>
              {powerWashingPricing.oneStory.map((row, index) => (
                <div key={index} className={`grid grid-cols-2 text-sm ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                  <div className="p-3 font-medium">{row.sides}</div>
                  <div className="p-3 text-right border-l border-border">{row.price}</div>
                </div>
              ))}
              </div>

              {/* Two Story */}
              <div className="glass-card overflow-hidden">
              <div className="bg-primary text-primary-foreground p-3 text-center font-bold text-sm">
                Two Story Homes
              </div>
              {powerWashingPricing.twoStory.map((row, index) => (
                <div key={index} className={`grid grid-cols-2 text-sm ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                  <div className="p-3 font-medium">{row.sides}</div>
                  <div className="p-3 text-right border-l border-border">{row.price}</div>
                </div>
              ))}
              </div>

              {/* Three Story */}
              <div className="glass-card overflow-hidden">
              <div className="bg-primary text-primary-foreground p-3 text-center font-bold text-sm">
                Three Story Homes
              </div>
              {powerWashingPricing.threeStory.map((row, index) => (
                <div key={index} className={`grid grid-cols-2 text-sm ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'}`}>
                  <div className="p-3 font-medium">{row.sides}</div>
                  <div className="p-3 text-right border-l border-border">{row.price}</div>
                </div>
              ))}
              </div>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start">
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                Get Power Washing Quote
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/10 transition-colors text-sm">
                <ArrowRight className="w-4 h-4" />
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 md:py-6 bg-section-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-sm mb-5 max-w-2xl mx-auto">
              Call us at (847) 404-3398 or request your free estimate online. Choose Thomas Window Cleaning for affordable and dependable exterior cleaning services!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                Call Now: (847) 404-3398
              </a>
              <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-sm">
                <ArrowRight className="w-4 h-4" />
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

export default PricesPage;
