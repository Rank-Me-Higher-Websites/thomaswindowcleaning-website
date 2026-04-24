import { motion } from 'framer-motion';
import { CheckCircle, Phone, ArrowRight, Shield, Award, Home, Building2, Droplets, MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { useBooking } from '@/contexts/BookingContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SEOHead } from '@/components/SEOHead';
import powerWashingHero from '@/assets/thomas-gutter-ladder.jpg';
import powerWashingChoose1 from '@/assets/power-washing-choose-1.jpg';
import powerWashingChoose2 from '@/assets/power-washing-choose-2.jpg';
import powerWashingChoose3 from '@/assets/power-washing-choose-3.jpg';

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

const serviceTypes = [
  {
    icon: Home,
    title: 'House Power Wash',
    description: 'Remove dirt, mold, and buildup from siding, driveways, and patios for a fresh, clean look.',
  },
  {
    icon: Building2,
    title: 'Commercial Pressure Washing',
    description: 'Keep your storefront, sidewalks, and parking lots spotless and welcoming.',
  },
  {
    icon: Droplets,
    title: 'High-Pressure Cleaning',
    description: 'Tough on stains, grime, and mildew, restoring surfaces safely and efficiently.',
  },
];

const faqData = [
  {
    question: 'What does power washing do?',
    answer: 'Power washing uses high-pressure water to remove dirt, grime, mold, mildew, algae, and stains from various surfaces. It restores the look of driveways, sidewalks, patios, decks, siding, fences, and commercial buildings, improving curb appeal and preventing long-term damage caused by buildup.',
    linkText: 'mold',
    linkUrl: 'https://www.cdc.gov/mold/dampness_facts.htm',
    isExternal: true,
  },
  {
    question: 'How long should power washing take?',
    answer: 'Power washing time depends on the size, surface type, and level of buildup. Smaller areas can be cleaned quickly, while larger surfaces or heavily stained areas take longer. Contact us for an estimate based on your specific property needs.',
    linkText: 'Contact us',
    linkUrl: '/contact',
    isExternal: false,
  },
  {
    question: 'How powerful is a power wash?',
    answer: 'Power washing uses high-pressure water, typically between 1,500 and 4,000 PSI, to remove dirt, grime, mold, mildew, and stains from surfaces. The pressure level is adjusted based on the material—strong enough for concrete and brick, yet safe for siding and wood decks.',
    linkText: 'PSI',
    linkUrl: 'https://en.wikipedia.org/wiki/Pound_per_square_inch',
    isExternal: true,
  },
  {
    question: 'Can I pressure wash concrete?',
    answer: 'Yes! Pressure washing is the best way to clean concrete surfaces like driveways, sidewalks, patios, and parking lots. High-pressure water removes dirt, stains, oil, mold, and mildew, restoring the surface to a like-new appearance. View our pricing for concrete cleaning rates.',
    linkText: 'pricing',
    linkUrl: '/prices',
    isExternal: false,
  },
  {
    question: 'Is power washing safe for all surfaces?',
    answer: 'Professional power washing is safe when done correctly. We adjust pressure settings for each surface type—lower for wood decks and vinyl siding, higher for concrete and brick. Our trained technicians know how to clean effectively without causing damage.',
    linkText: 'vinyl siding',
    linkUrl: 'https://www.bobvila.com/articles/how-to-clean-vinyl-siding/',
    isExternal: true,
  },
];

const PowerWashingPage = () => {
  const { openBooking } = useBooking();
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Power Washing Services | Thomas Window Cleaning"
        description="Professional power washing to restore driveways, siding, decks, and patios. Eco-friendly cleaning for homes and businesses in Chicago's northwest suburbs."
        canonical="/services/power-washing"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Power Washing',
          provider: { '@type': 'LocalBusiness', name: 'Thomas Window Cleaning' },
          areaServed: { '@type': 'State', name: 'Illinois' },
          description: 'Professional power washing and pressure cleaning services.',
        }}
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={powerWashingHero} alt="Power Washing" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Professional Power Washing
              </h1>
              <p className="text-sm md:text-base text-white/90 mb-3">
                Thomas Window Cleaning offers professional <span className="font-semibold">power and pressure washing</span> in <span className="font-semibold">Chicago, IL</span>. We specialize in <span className="font-semibold">removing stains, buildup, and discoloration</span> from siding, driveways, sidewalks, decks, and more.
              </p>
              <p className="text-sm text-white/80 mb-5">
                Serving homeowners and businesses across <span className="font-semibold">Chicago, IL</span> and the greater Chicagoland area, our experienced team restores your property's curb appeal with professional-grade equipment.
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

        {/* Benefits Section */}
        <section className="py-5 md:py-6 bg-section-blue">
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
                  <span className="text-gradient">Power Washing</span>{' '}
                  Services?
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Restore your home or business with professional <a href="https://en.wikipedia.org/wiki/Pressure_washing" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">pressure washing</a> that eliminates dirt, grime, and stains from exterior surfaces in <a href="https://en.wikipedia.org/wiki/Wheeling,_Illinois" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wheeling, IL</a>.
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
                <img src={powerWashingChoose1} alt="Power Washing Service" className="w-full aspect-[4/3] object-cover" />
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
                Home Power Washing{' '}
                <span className="text-gradient">Prices</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                Note: Additional charge may apply for materials if necessary
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
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
        </section>

        {/* Service Types Section */}
        <section className="py-5 md:py-6 bg-section-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl font-bold">
                Residential & Commercial{' '}
                <span className="text-gradient">Power Wash</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                We provide professional <a href="https://www.homedepot.com/c/ah/how-to-pressure-wash-a-driveway/9ba683603be9fa5395fab901a3c7e656" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">pressure washing services</a> for both residential and commercial properties. Combine with our <Link to="/services/gutter-cleaning" className="text-primary hover:underline">gutter cleaning</Link> for complete exterior maintenance.
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
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Thomas for{' '}
                <span className="text-gradient">Power Washing?</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Restore your property with <Link to="/prices" className="text-primary hover:underline">affordable power washing</Link> in Chicago. We remove dirt, grime, <a href="https://www.cdc.gov/mold/dampness_facts.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mold</a>, and stains from <a href="https://en.wikipedia.org/wiki/Driveway" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">driveways</a>, sidewalks, decks, siding, and more, boosting curb appeal and protecting surfaces.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="image-tile"
              >
                <img src={powerWashingChoose3} alt="Professional power washing service" className="w-full aspect-[4/3] object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="image-tile"
              >
                <img src={powerWashingChoose2} alt="Professional power washing service in action" className="w-full aspect-[4/3] object-cover" />
              </motion.div>
            </div>

            {/* CTA after Thomas Difference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 justify-center mt-10"
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
        <section className="py-5 md:py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 text-center">
                Expert Power Washing Services in Wheeling, IL & Chicago Suburbs
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                Thomas Window Cleaning delivers professional pressure washing services throughout the <a href="https://en.wikipedia.org/wiki/Chicago_metropolitan_area" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chicago metropolitan area</a>. With over 29 years of experience, our team uses commercial-grade equipment to restore driveways, siding, decks, and more to like-new condition. We also specialize in <Link to="/services/window-cleaning" className="text-primary hover:underline">window cleaning</Link> and <Link to="/services/gutter-cleaning" className="text-primary hover:underline">gutter maintenance</Link>.
              </p>

              {/* Surface Types - 3 Column Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                {[
                  { title: "Driveways & Sidewalks", desc: "Remove oil stains, tire marks, and years of dirt buildup from concrete and asphalt surfaces." },
                  { title: "House Siding", desc: "Safely clean vinyl, aluminum, brick, and stucco siding without causing damage." },
                  { title: "Decks & Patios", desc: "Restore wood, composite, and stone surfaces by eliminating mold, mildew, and algae." },
                  { title: "Fences & Walls", desc: "Revitalize wooden, vinyl, and brick fences to look fresh and well-maintained." },
                  { title: "Garage Floors", desc: "Deep clean concrete floors to remove grease, oil, and stubborn stains." },
                  { title: "Commercial Properties", desc: "Maintain storefronts, parking lots, and building exteriors for a professional appearance." }
                ].map((surface, index) => (
                  <div key={index} className="bg-card rounded-lg p-5 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-sm font-semibold text-foreground mb-2">{surface.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{surface.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground text-center mb-8">
                Not sure which surface needs cleaning? <Link to="/contact" className="text-primary hover:underline">Request a free assessment</Link> and we'll recommend the best approach for your property.
              </p>

              {/* Benefits Row */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">High-Pressure Cleaning</h4>
                    <p className="text-xs text-muted-foreground">1,500-4,000 PSI adjusted for each surface type</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Surface Safe</h4>
                    <p className="text-xs text-muted-foreground">Techniques tailored to protect your property</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Droplets className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Eco-Friendly</h4>
                    <p className="text-xs text-muted-foreground"><a href="https://www.epa.gov/saferchoice" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Biodegradable solutions</a> when needed</p>
                  </div>
                </div>
              </div>

              {/* When to Power Wash */}
              <div className="bg-muted/50 rounded-xl p-5 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">When Should You Power Wash?</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { indicator: "✓", text: "Visible mold or mildew growth" },
                    { indicator: "✓", text: "Stained or discolored surfaces" },
                    { indicator: "✓", text: "Before painting or staining" },
                    { indicator: "✓", text: "Preparing to sell your home" },
                    { indicator: "✓", text: "After construction or renovation" },
                    { indicator: "✓", text: "Seasonal spring cleaning" },
                    { indicator: "✓", text: "Algae on decks or walkways" },
                    { indicator: "✓", text: "Oil stains on driveway" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-xs">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas Served */}
              <div className="text-center border-t border-border pt-6">
                <h3 className="text-base font-semibold text-foreground mb-4 inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Service Areas
                </h3>
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                  We provide power washing services in <span className="font-medium text-foreground">Wheeling</span>, <span className="font-medium text-foreground">Arlington Heights</span>, <span className="font-medium text-foreground">Buffalo Grove</span>, <span className="font-medium text-foreground">Palatine</span>, <span className="font-medium text-foreground">Mount Prospect</span>, <span className="font-medium text-foreground">Des Plaines</span>, <span className="font-medium text-foreground">Northbrook</span>, <span className="font-medium text-foreground">Glenview</span>, and throughout the greater Chicago metropolitan area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-5 md:py-6 bg-section-blue">
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
        <section className="py-5 md:py-6 bg-section-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Schedule Your Power Washing Today!
            </h2>
            <p className="text-primary-foreground/80 text-sm mb-5 max-w-2xl mx-auto">
              Enhance curb appeal and protect your surfaces. Get high-pressure cleaning that delivers lasting results!
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

export default PowerWashingPage;
