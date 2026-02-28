import { motion } from 'framer-motion';
import { CheckCircle, Phone, ArrowRight, Shield, Award, Home, Building2, ArrowUpFromLine, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { useBooking } from '@/contexts/BookingContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import gutterCleaningImg from '@/assets/thomas-gutter-autumn.jpg';
import gutterCleaningHero from '@/assets/thomas-house.jpg';
import gutterStandsOut1 from '@/assets/gutter-stands-out-1.jpg';
import gutterStandsOut2 from '@/assets/gutter-stands-out-2.jpg';

const pricingData = [
  { size: '<2000 sqf', story1: '$100', story2: '$150', story3: '$200' },
  { size: '2001 to 3000 sqf', story1: '$125', story2: '$180', story3: '$200' },
  { size: '3001 to 4000 sqf', story1: '$150', story2: '$200', story3: '$250' },
  { size: '4001 to 5000 sqf', story1: '$175', story2: '$225', story3: '$300' },
  { size: '5001 to 6000 sqf', story1: '$200', story2: '$250', story3: '$350' },
  { size: '6001 sqf or larger', story1: 'Call', story2: 'Call', story3: 'Call' },
];

const additionalNotes = [
  'Additional charges apply for removal of existing gutter guards',
  'New gutter guard installation available',
];

const benefits = [
  'Expert Technicians – Trained professionals ensure gutters are cleaned safely and thoroughly',
  'Prevent Costly Damage – Avoid foundation issues, roof leaks, and siding damage caused by clogged gutters',
  'Seasonal Maintenance – Keep your gutters flowing year-round with scheduled cleanings in spring and fall',
  'No Mess, No Hassle – We remove all debris and ensure a complete cleanup after service',
  'Local & Reliable – Serving Chicago, IL, with fast response times and quality service',
];

const serviceTypes = [
  {
    icon: Home,
    title: 'Home Gutter Cleaning',
    description: 'Protect your home from clogs, overflow, and water damage with thorough debris removal and clear drainage.',
  },
  {
    icon: Building2,
    title: 'Commercial Gutter Cleaning',
    description: 'Keep your business, office, or multi-unit property safe from structural issues with professional gutter maintenance.',
  },
  {
    icon: ArrowUpFromLine,
    title: 'High & Hard-to-Reach Gutters',
    description: 'No need to climb ladders—our team safely cleans second-story and difficult-access gutters for you!',
  },
];

const faqData = [
  {
    question: 'How often should gutters be professionally cleaned?',
    answer: 'Gutters should be professionally cleaned at least twice a year, typically in spring and fall. This helps prevent clogs caused by leaves, debris, and dirt buildup, reducing the risk of water damage, foundation issues, and pest infestations.',
  },
  {
    question: 'What happens if you never clean your gutters?',
    answer: 'If you never clean your gutters, they clog with debris, causing water overflow, roof damage, foundation issues, and even pest infestations. This can lead to costly repairs and structural damage over time.',
    linkText: 'foundation issues',
    linkUrl: 'https://www.thisoldhouse.com/foundations/21018642/how-to-fix-a-wet-basement',
    isExternal: true,
  },
  {
    question: 'How to know if gutters need cleaning?',
    answer: "You'll know your gutters need cleaning if water overflows, they start sagging, or you notice debris buildup, pests, or staining on your home's exterior. Regular checks can prevent costly damage.",
  },
  {
    question: 'How long does gutter cleaning last?',
    answer: 'Professional gutter cleaning typically lasts 4 to 6 months, depending on factors like weather, nearby trees, and debris buildup. Homes with more trees may need more frequent cleanings to prevent clogs and damage.',
  },
  {
    question: 'Is gutter cleaning difficult?',
    answer: 'Gutter cleaning can be difficult because it involves climbing ladders, removing debris, and ensuring proper drainage. It can also be time-consuming and hazardous, especially for multi-story homes. Hiring professionals ensures safety, efficiency, and thorough cleaning. View our pricing for affordable rates.',
    linkText: 'pricing',
    linkUrl: '/prices',
    isExternal: false,
  },
  {
    question: 'Do you install gutter guards?',
    answer: 'Yes, we offer gutter guard installation to help reduce debris buildup and minimize maintenance. Contact us to learn more about our gutter protection options.',
    linkText: 'Contact us',
    linkUrl: '/contact',
    isExternal: false,
  },
];

const GutterCleaningPage = () => {
  const { openBooking } = useBooking();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={gutterCleaningHero} alt="Gutter Cleaning" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Leading Local Gutter Cleaning
              </h1>
              <p className="text-sm md:text-base text-white/90 mb-3">
                Thomas Window Cleaning provides professional <span className="font-semibold">gutter cleaner service</span> in <span className="font-semibold">Chicago, IL</span>. We specialize in <span className="font-semibold">clearing debris, leaves, and buildup</span> to ensure efficient drainage and protect your home.
              </p>
              <p className="text-sm text-white/80 mb-5">
                Serving homeowners and businesses across <span className="font-semibold">Chicago, IL</span> and the greater Chicagoland area, our experienced team prevents costly water damage with thorough gutter maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
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

        {/* Benefits Section */}
        <section className="py-5 md:py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-5 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Why Choose Our{' '}
                  <span className="text-gradient">Gutter Cleaning</span>{' '}
                  Services?
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Ensure your <a href="https://en.wikipedia.org/wiki/Rain_gutter" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">rain gutters</a> stay clear and functional with our top-rated <a href="https://en.wikipedia.org/wiki/Wheeling,_Illinois" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wheeling</a> gutter maintenance, preventing costly home repairs.
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

                <div className="flex flex-wrap gap-3 mt-5">
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
                className="image-tile shadow-xl"
              >
                <img src={gutterCleaningImg} alt="Gutter Cleaning Service" className="w-full aspect-[4/3] object-cover" />
              </motion.div>
            </div>

            {/* CTA after Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 justify-center mt-8"
            >
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
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
              
              <div className="mt-6 space-y-2">
                {additionalNotes.map((note, index) => (
                  <p key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {note}
                  </p>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground mt-6">
                Prices depend on square footage. Please call for an accurate price estimate.
              </p>

              {/* CTA after Pricing */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  <Phone className="w-4 h-4" />
                  Call for Estimate
                </a>
                <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Types Section */}
        <section className="py-5 md:py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl font-bold">
                Residential & Commercial{' '}
                <span className="text-gradient">Gutter Cleaning</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                Our professional gutter cleaning services in Chicago, IL, ensure clear, <a href="https://www.familyhandyman.com/project/how-to-clean-gutters/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">debris-free gutters</a> for homes and businesses. Pair with our <Link to="/services/power-washing" className="text-primary hover:underline">exterior washing</Link> for complete home maintenance.
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
                  className="card-hover p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA after Service Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center mt-8"
            >
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Thomas Gutter Cleaning{' '}
                <span className="text-gradient">Stands Out</span>
              </h2>
              <p className="text-muted-foreground text-sm">
                We're more than just local gutter cleaners—we're your trusted <Link to="/prices" className="text-primary hover:underline">affordable gutter maintenance</Link> experts serving Chicago and the suburbs. Our customers rely on our thorough cleaning process, reliability, and attention to detail to keep their <a href="https://en.wikipedia.org/wiki/Downspout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">downspouts</a> clear and their homes protected.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="image-tile"
              >
                <img src={gutterStandsOut1} alt="Residential gutter cleaning service" className="w-full aspect-[4/3] object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="image-tile"
              >
                <img src={gutterStandsOut2} alt="Gutters full of leaves before cleaning" className="w-full aspect-[4/3] object-cover" />
              </motion.div>
            </div>

            {/* CTA after Thomas Difference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 justify-center mt-8"
            >
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button onClick={openBooking} className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                <ArrowRight className="w-4 h-4" />
                Get Free Quote
              </button>
            </motion.div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-5 md:py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
                Professional Gutter Cleaning Services in Wheeling, IL & Chicago Suburbs
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                Thomas Window Cleaning provides expert gutter cleaning and maintenance throughout the <a href="https://en.wikipedia.org/wiki/Chicago_metropolitan_area" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chicago metropolitan area</a>. With over 29 years of experience, our trained technicians safely remove leaves, debris, and buildup to ensure proper water drainage and protect your home from costly damage. We also offer <Link to="/services/window-cleaning" className="text-primary hover:underline">window cleaning</Link> and <Link to="/services/power-washing" className="text-primary hover:underline">pressure washing</Link>.
              </p>

              {/* Service Types - Horizontal Layout */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 bg-primary/5 border-l-4 border-primary rounded-r-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Home className="h-5 w-5 text-primary" />
                    <h3 className="text-base font-semibold text-foreground">Residential Gutter Cleaning</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Protect your home's <a href="https://www.thisoldhouse.com/foundations/21018642/how-to-fix-a-wet-basement" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">foundation</a>, roof, and siding with regular gutter maintenance. Our residential service includes complete debris removal, <a href="https://en.wikipedia.org/wiki/Downspout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">downspout clearing</a>, and thorough inspection.
                  </p>
                </div>
                <div className="flex-1 bg-primary/5 border-l-4 border-primary rounded-r-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <h3 className="text-base font-semibold text-foreground">Commercial Gutter Cleaning</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Keep your commercial property safe from <a href="https://en.wikipedia.org/wiki/Water_damage" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">water damage</a>. We service office buildings, retail spaces, and multi-unit properties with flexible scheduling. Check our <Link to="/offers" className="text-primary hover:underline">special offers</Link> for discounts.
                  </p>
                </div>
              </div>

              {/* What's Included - Grid with Background */}
              <div className="bg-card rounded-xl p-5 md:p-6 border border-border shadow-sm mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-5 text-center">What's Included in Our Gutter Cleaning Service?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: "🍂", text: "Debris & Leaf Removal" },
                    { icon: "🔧", text: "Downspout Clearing" },
                    { icon: "🔍", text: "System Inspection" },
                    { icon: "🛠️", text: "Minor Repairs" },
                    { icon: "🛡️", text: "Guard Assessment" },
                    { icon: "🏠", text: "Roof Valley Cleaning" },
                    { icon: "🧹", text: "Ground Cleanup" },
                    { icon: "📸", text: "Before/After Photos" }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-3 rounded-lg bg-muted/50">
                      <span className="text-2xl mb-2">{item.icon}</span>
                      <span className="text-xs font-medium text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why It Matters - Alert Style */}
              <div className="bg-primary/10 rounded-xl p-5 mb-8 flex gap-4 items-start">
                <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-2">Why Regular Gutter Maintenance Matters</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Clogged gutters cause <a href="https://www.thisoldhouse.com/foundations/21018642/how-to-fix-a-wet-basement" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">foundation cracks</a>, basement flooding, <a href="https://en.wikipedia.org/wiki/Roof_leak" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">roof leaks</a>, and landscape erosion. Regular cleaning—especially in spring and fall—prevents costly repairs and extends the life of your gutter system. We recommend cleaning at least twice per year.
                  </p>
                </div>
              </div>

              {/* Areas Served - Inline Style */}
              <div className="text-center">
                <h3 className="text-base font-semibold text-foreground mb-3 inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Proudly Serving the Chicagoland Area
                </h3>
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                  {["Wheeling", "Arlington Heights", "Buffalo Grove", "Palatine", "Mount Prospect", "Des Plaines", "Northbrook", "Glenview", "Prospect Heights", "Schaumburg"].map((area, index, arr) => (
                    <span key={index}>
                      {area}{index < arr.length - 1 ? " •" : ""}
                    </span>
                  ))}
                </div>
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
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="glass-card px-6">
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.linkText && faq.linkUrl ? (
                        <>
                          {faq.answer.split(faq.linkText)[0]}
                          {faq.isExternal ? (
                            <a href={faq.linkUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{faq.linkText}</a>
                          ) : (
                            <Link to={faq.linkUrl} className="text-primary hover:underline">{faq.linkText}</Link>
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
        <section className="py-5 md:py-6 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Schedule Your Gutter Cleaning Today!
            </h2>
            <p className="text-primary-foreground/80 text-sm mb-5 max-w-2xl mx-auto">
              Our team handles the dirty work—no ladders needed. Schedule seasonal gutter maintenance for a hassle-free solution!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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

export default GutterCleaningPage;
