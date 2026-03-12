import { motion } from 'framer-motion';
import { CheckCircle, Phone, ArrowRight, Shield, Award, Home, Building2, ArrowUpFromLine, Sparkles, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { useBooking } from '@/contexts/BookingContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEOHead } from '@/components/SEOHead';
import windowCleaningImg from '@/assets/thomas-residential-window.jpg';
import windowCleaningHero from '@/assets/thomas-window-hero.jpg';
import thomasDifference1 from '@/assets/thomas-difference-1.jpg';
import thomasDifference2 from '@/assets/thomas-difference-2.jpg';

const pricingData = [
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

const additionalCharges = [
  'Wiping of window sills is free',
  'Storm windows and screens are $3 each',
  'French windows (price based on size)',
  'Outside only: $2-$3 extra per window',
  'Inside & outside: $3-$5 extra per window',
  'Skylights: $10 each',
  'Additional charges for over-sized windows and new construction scraping',
  'Cleaning window tracks: $1.50-$3',
];

const benefits = [
  { text: 'Streak-Free Shine – We use top-quality cleaning solutions and professional techniques', hasLink: false },
  { text: 'Reliable & On-Time – We respect your time and always show up when promised', hasLink: false },
  { text: 'Safe & Efficient – Our skilled team handles both residential and commercial window cleaning', hasLink: false },
  { text: 'Satisfaction Guaranteed – If you\'re not happy, we\'ll make it right!', hasLink: false },
];

const serviceTypes = [
  {
    icon: Home,
    title: 'Home Window Cleaning',
    description: 'Enjoy bright, sun-filled rooms with streak-free windows. We clean interior and exterior glass, frames, and screens.',
  },
  {
    icon: Building2,
    title: 'Storefront & Office Window Cleaning',
    description: 'Keep your business looking professional and inviting with crystal-clear windows that enhance curb appeal.',
  },
  {
    icon: ArrowUpFromLine,
    title: 'High & Hard-to-Reach Windows',
    description: 'No need to risk climbing ladders—we handle it safely for you!',
  },
];

const faqData = [
  {
    question: 'What areas do you serve for window cleaning services?',
    answer: 'We proudly offer professional window cleaning services in Wheeling, IL, and the surrounding Chicagoland area. Our service area includes both residential and commercial properties.',
    linkText: 'Wheeling, IL',
    linkUrl: 'https://en.wikipedia.org/wiki/Wheeling,_Illinois',
    isExternal: true,
  },
  {
    question: 'How often should I have my windows professionally cleaned?',
    answer: 'For optimal clarity and maintenance, it\'s recommended to have your windows professionally cleaned at least twice a year. However, depending on environmental factors and personal preferences, more frequent cleanings may be beneficial.',
  },
  {
    question: 'Do you offer additional services besides window cleaning?',
    answer: 'Yes, in addition to window cleaning, we provide gutter cleaning and power washing services to keep your property in top condition.',
    linkText: 'gutter cleaning',
    linkUrl: '/services/gutter-cleaning',
    isExternal: false,
  },
  {
    question: 'Are your window cleaning services safe for my home or business?',
    answer: 'Absolutely. We use professional-grade equipment and eco-friendly cleaning solutions to ensure a thorough and safe cleaning process for both residential and commercial properties.',
    linkText: 'eco-friendly cleaning solutions',
    linkUrl: 'https://www.epa.gov/saferchoice',
    isExternal: true,
  },
  {
    question: 'How can I schedule a window cleaning appointment?',
    answer: 'Scheduling an appointment is easy. You can call us at (847) 404-3398 or visit our contact page to book your window cleaning service at a time that\'s convenient for you.',
    linkText: 'contact page',
    linkUrl: '/contact',
    isExternal: false,
  },
  {
    question: 'What is included in your window cleaning service?',
    answer: 'Our professional window cleaning service includes thorough cleaning of interior and exterior glass, removal of dirt, dust, and streaks, and wiping down window frames and sills. We also offer screen cleaning and hard water stain removal upon request. View our pricing page for detailed costs.',
    linkText: 'pricing page',
    linkUrl: '/prices',
    isExternal: false,
  },
];

const WindowCleaningPage = () => {
  const { openBooking } = useBooking();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={windowCleaningHero} alt="Window Cleaning" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Top Rated Window Cleaners
              </h1>
              <p className="text-sm md:text-base text-white/90 mb-3">
                Thomas Window Cleaning provides professional <span className="font-semibold">residential and commercial window cleaning</span> in <span className="font-semibold">Chicago, IL</span> and surrounding areas. We specialize in <span className="font-semibold">streak-free window washing</span>, interior and exterior glass cleaning, and complete frame maintenance.
              </p>
              <p className="text-sm text-white/80 mb-5">
                Serving homeowners and businesses across <span className="font-semibold">Chicago, IL</span> and the greater Chicagoland area, our experienced team ensures crystal-clear results using professional-grade equipment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm shadow-lg">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
                  <ArrowRight className="w-4 h-4" />
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-5 md:py-6 bg-muted/30 relative overflow-hidden">
          {/* Decorative accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
          
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-5 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="text-accent text-xs font-semibold uppercase tracking-widest">Why Choose Us</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Why Choose Our{' '}
                  <span className="text-gradient">Window Cleaning</span>{' '}
                  Services?
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  We know that clean windows can make all the difference in your home's appearance. That's why <a href="https://en.wikipedia.org/wiki/Wheeling,_Illinois" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Wheeling</a> homeowners and businesses trust us:
                </p>
                
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3 bg-card/80 rounded-lg p-3 border border-border/50"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-accent" />
                      </div>
                      <span className="text-foreground text-sm">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 border border-accent/20 text-accent">
                    <Shield className="w-4 h-4" />
                    Fully Insured
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 border border-accent/20 text-accent">
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
                className="image-tile shadow-xl rounded-xl border-2 border-accent/20"
              >
                <img src={windowCleaningImg} alt="Window Cleaning Service" className="w-full aspect-[4/3] object-cover" />
              </motion.div>
            </div>

            {/* CTA after Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 justify-center mt-5"
            >
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm shadow-md">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/10 transition-colors text-sm">
                <ArrowRight className="w-4 h-4" />
                Get Free Quote
              </button>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-5 md:py-6">
          <div className="container mx-auto px-4">
            <div className="text-center mb-5">
              <span className="section-label justify-center">PRICING</span>
              <h2 className="text-2xl md:text-3xl font-bold">
                Basic Window Cleaning{' '}
                <span className="text-gradient">Costs</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="glass-card overflow-hidden border-2 border-accent/15">
                <div className="grid grid-cols-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold">
                  <div className="p-3 text-center text-sm">No. of Windows</div>
                  <div className="p-3 text-center border-l border-primary-foreground/20 text-sm">Inside & Outside</div>
                  <div className="p-3 text-center border-l border-primary-foreground/20 text-sm">Outside Only</div>
                </div>
                {pricingData.map((row, index) => (
                  <div key={index} className={`grid grid-cols-3 text-sm ${index % 2 === 0 ? 'bg-accent/[0.03]' : 'bg-card'}`}>
                    <div className="p-3 text-center font-medium">{row.windows}</div>
                    <div className="p-3 text-center border-l border-border font-semibold text-accent">{row.insideOutside}</div>
                    <div className="p-3 text-center border-l border-border font-semibold text-accent">{row.outsideOnly}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-5 rounded-xl border-2 border-accent/20 bg-accent/[0.04] p-5 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-sm">$</div>
                  <h4 className="font-bold text-base text-foreground">Additional Service Charges</h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {additionalCharges.map((charge, index) => (
                    <div key={index} className="text-sm text-foreground/80 flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{charge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA after Pricing */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
                <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm shadow-md">
                  <Phone className="w-4 h-4" />
                  Call for Estimate
                </a>
                <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/10 transition-colors text-sm">
                  <ArrowRight className="w-4 h-4" />
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Types Section */}
        <section className="py-5 md:py-6 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/2" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                Residential & Commercial{' '}
                <span className="text-accent">Window Cleaning</span>
              </h2>
              <p className="text-primary-foreground/70 mt-3 text-sm max-w-2xl mx-auto">
                We serve both homeowners and business owners with professional <a href="https://www.iwca.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">window washing</a> services tailored to your needs. Combine with our <Link to="/services/power-washing" className="text-accent hover:underline">pressure washing</Link> for complete exterior cleaning.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {serviceTypes.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-xl p-5 text-center hover:bg-primary-foreground/15 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-primary-foreground">{service.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA after Service Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center mt-5"
            >
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm shadow-md">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-sm">
                <ArrowRight className="w-4 h-4" />
                Get Free Quote
              </button>
            </motion.div>
          </div>
        </section>

        {/* Thomas Difference Section */}
        <section className="py-5 md:py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-5">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Droplets className="w-5 h-5 text-accent" />
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">Our Promise</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Thomas Window Cleaning{' '}
                <span className="text-gradient">Difference</span>
              </h2>
              <p className="text-muted-foreground text-sm">
                We're more than just local window washers—we're your trusted <Link to="/prices" className="text-accent hover:underline font-medium">affordable window cleaning</Link> experts in Chicago and the suburbs. Our customers love our attention to detail, reliability, and friendly service. Need <Link to="/services/gutter-cleaning" className="text-accent hover:underline font-medium">gutter maintenance</Link> too? We've got you covered.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="image-tile rounded-xl border-2 border-accent/15 shadow-lg"
              >
                <img src={thomasDifference1} alt="Professional window cleaning with squeegee" className="w-full aspect-[4/3] object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="image-tile rounded-xl border-2 border-accent/15 shadow-lg"
              >
                <img src={thomasDifference2} alt="Close-up of window cleaning service" className="w-full aspect-[4/3] object-cover" />
              </motion.div>
            </div>

            {/* CTA after Thomas Difference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 justify-center mt-5"
            >
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm shadow-md">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/10 transition-colors text-sm">
                <ArrowRight className="w-4 h-4" />
                Get Free Quote
              </button>
            </motion.div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-5 md:py-6 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 text-center">
                Professional Window Cleaning Services in Wheeling, IL & Chicago Suburbs
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 text-center">
                Thomas Window Cleaning delivers exceptional residential and commercial window cleaning throughout the <a href="https://en.wikipedia.org/wiki/Chicago_metropolitan_area" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Chicago metropolitan area</a>. With over 29 years of experience, our trained professionals use industry-leading techniques and <a href="https://www.epa.gov/saferchoice" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">eco-friendly solutions</a> for streak-free, crystal-clear results. Need other services? Check out our <Link to="/services/gutter-cleaning" className="text-accent hover:underline font-medium">gutter cleaning</Link> and <Link to="/services/power-washing" className="text-accent hover:underline font-medium">power washing</Link> options.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-card rounded-xl p-5 border-l-4 border-accent shadow-md">
                  <h3 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Home className="w-4 h-4 text-accent" />
                    Residential Window Cleaning
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Our home window cleaning service includes thorough interior and exterior glass cleaning, frame wiping, <a href="https://www.thisoldhouse.com/windows/21097091/how-to-clean-window-screens" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">screen cleaning</a>, and sill maintenance. We handle everything from standard double-hung windows to <a href="https://en.wikipedia.org/wiki/Skylight" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">skylights</a>, French panes, and hard-to-reach high windows.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-5 border-l-4 border-accent shadow-md">
                  <h3 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-accent" />
                    Commercial Window Cleaning
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Keep your storefront or office looking professional with our commercial window washing services. Clean windows enhance <a href="https://en.wikipedia.org/wiki/Curb_appeal" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">curb appeal</a>, create inviting spaces for customers, and reflect your business's attention to detail. Check our <Link to="/offers" className="text-accent hover:underline">seasonal offers</Link> for discounts.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-xl p-5 border border-border shadow-md mb-6">
                <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  What's Included in Our Window Cleaning Service?
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    "Interior & exterior glass cleaning",
                    "Window frame & sill wiping",
                    "Screen cleaning & removal",
                    "Streak-free finish guaranteed",
                    "Hard water stain removal",
                    "Skylight cleaning",
                    "Storm window cleaning",
                    "Track & channel cleaning"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center bg-card rounded-xl p-5 border border-border shadow-sm">
                <h3 className="text-base font-semibold text-foreground mb-2">Serving Chicago & Surrounding Communities</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  We proudly provide window cleaning services throughout the <a href="https://en.wikipedia.org/wiki/Chicago_metropolitan_area" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Chicagoland area</a> including:
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {["Wheeling", "Arlington Heights", "Buffalo Grove", "Palatine", "Mount Prospect", "Des Plaines", "Northbrook", "Glenview", "Prospect Heights", "Schaumburg"].map((area, index) => (
                    <span key={index} className="bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-full text-xs font-medium">
                      {area}, IL
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  <Link to="/contact" className="text-accent hover:underline font-medium">Contact us</Link> to confirm service availability in your area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-5 md:py-6">
          <div className="container mx-auto px-4">
            <div className="text-center mb-5">
              <span className="section-label justify-center">FAQ</span>
              <h2 className="text-2xl md:text-3xl font-bold">
                Frequently Asked{' '}
                <span className="text-gradient">Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="glass-card px-5 border-l-4 border-l-accent">
                    <AccordionTrigger className="text-left font-medium text-sm">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      {faq.linkText && faq.linkUrl ? (
                        <>
                          {faq.answer.split(faq.linkText)[0]}
                          {faq.isExternal ? (
                            <a href={faq.linkUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">{faq.linkText}</a>
                          ) : (
                            <Link to={faq.linkUrl} className="text-accent hover:underline font-medium">{faq.linkText}</Link>
                          )}
                          {faq.answer.split(faq.linkText)[1]}
                        </>
                      ) : (
                        faq.answer
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 md:py-6 bg-gradient-to-r from-primary via-primary to-primary/90 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/3" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              Schedule Your Window Cleaning Today!
            </h2>
            <p className="text-primary-foreground/80 text-sm mb-4 max-w-2xl mx-auto">
              Ready to enjoy spotless windows? Contact Thomas Window Cleaning today for professional window cleaning in Chicago, IL. We look forward to making your windows shine!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm shadow-lg">
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

export default WindowCleaningPage;
