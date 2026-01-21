import { motion } from 'framer-motion';
import { CheckCircle, Phone, ArrowRight, Shield, Award, Home, Building2, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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

const faqs = [
  {
    question: 'What does power washing do?',
    answer: 'Power washing uses high-pressure water to remove dirt, grime, mold, mildew, algae, and stains from various surfaces. It restores the look of driveways, sidewalks, patios, decks, siding, fences, and commercial buildings, improving curb appeal and preventing long-term damage caused by buildup.',
  },
  {
    question: 'How long should power washing take?',
    answer: 'Power washing time depends on the size, surface type, and level of buildup. Smaller areas can be cleaned quickly, while larger surfaces or heavily stained areas take longer. Driveways, patios, siding, and commercial properties all require different cleaning times, but our team ensures efficient and thorough results.',
  },
  {
    question: 'How powerful is a power wash?',
    answer: 'Power washing uses high-pressure water, typically between 1,500 and 4,000 PSI, to remove dirt, grime, mold, mildew, and stains from surfaces. The pressure level is adjusted based on the material—strong enough for concrete and brick, yet safe for siding and wood decks.',
  },
  {
    question: 'Can I pressure wash concrete?',
    answer: 'Yes! Pressure washing is the best way to clean concrete surfaces like driveways, sidewalks, patios, and parking lots. High-pressure water removes dirt, stains, oil, mold, and mildew, restoring the surface to a like-new appearance. Using the right pressure settings and techniques prevents damage while ensuring a deep, effective clean.',
  },
];

const PowerWashingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={powerWashingHero} alt="Power Washing" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Professional Power Washing
              </h1>
              <p className="text-lg text-white/90 mb-4">
                Thomas Window Cleaning offers professional <span className="font-semibold">power and pressure washing</span> in <span className="font-semibold">Chicago, IL</span>. We specialize in <span className="font-semibold">removing stains, buildup, and discoloration</span> from siding, driveways, sidewalks, decks, and more.
              </p>
              <p className="text-white/80 mb-8">
                Serving homeowners and businesses across <span className="font-semibold">Chicago, IL</span> and the greater Chicagoland area, our experienced team restores your property's curb appeal with professional-grade equipment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                  Get Quote
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
                <img src={powerWashingChoose1} alt="Power Washing Service" className="w-full aspect-[4/3] object-cover" />
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

        {/* Service Types Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Residential & Commercial{' '}
                <span className="text-gradient">Power Wash</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                We provide professional pressure washing services for both residential and commercial properties in Chicago, IL.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {serviceTypes.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Thomas Difference Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Thomas for{' '}
                <span className="text-gradient">Power Washing?</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Restore your property with expert power washers in Chicago. We remove dirt, grime, mold, and stains from driveways, sidewalks, decks, siding, and more, boosting curb appeal and protecting surfaces. Our high-pressure wash ensures a deep, effective clean without damage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card overflow-hidden"
              >
                <img src={powerWashingChoose3} alt="Professional power washing service" className="w-full aspect-[4/3] object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card overflow-hidden"
              >
                <img src={powerWashingChoose2} alt="Professional power washing service in action" className="w-full aspect-[4/3] object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="section-label justify-center">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Frequently Asked{' '}
                <span className="text-gradient">Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="glass-card px-6">
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Schedule Your Power Washing Today!
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Enhance curb appeal and protect your surfaces. Get high-pressure cleaning that delivers lasting results!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8474043398" className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors text-lg">
                <Phone className="w-5 h-5" />
                Call Now: (847) 404-3398
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors text-lg">
                <ArrowRight className="w-5 h-5" />
                Get Quote
              </Link>
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
