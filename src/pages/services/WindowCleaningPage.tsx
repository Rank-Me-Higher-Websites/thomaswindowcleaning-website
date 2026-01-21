import { motion } from 'framer-motion';
import { CheckCircle, Phone, ArrowRight, Shield, Award, Home, Building2, ArrowUpFromLine } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
  'Streak-Free Shine – We use top-quality cleaning solutions and professional techniques',
  'Reliable & On-Time – We respect your time and always show up when promised',
  'Safe & Efficient – Our skilled team handles both residential and commercial window cleaning',
  'Satisfaction Guaranteed – If you\'re not happy, we\'ll make it right!',
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

const faqs = [
  {
    question: 'What areas do you serve for window cleaning services?',
    answer: 'We proudly offer professional window cleaning services in Wheeling, IL, and the surrounding Chicagoland area. Our service area includes both residential and commercial properties.',
  },
  {
    question: 'How often should I have my windows professionally cleaned?',
    answer: 'For optimal clarity and maintenance, it\'s recommended to have your windows professionally cleaned at least twice a year. However, depending on environmental factors and personal preferences, more frequent cleanings may be beneficial.',
  },
  {
    question: 'Do you offer additional services besides window cleaning?',
    answer: 'Yes, in addition to window cleaning, we provide gutter cleaning and power washing services to keep your property in top condition.',
  },
  {
    question: 'Are your window cleaning services safe for my home or business?',
    answer: 'Absolutely. We use professional-grade equipment and eco-friendly cleaning solutions to ensure a thorough and safe cleaning process for both residential and commercial properties.',
  },
  {
    question: 'How can I schedule a window cleaning appointment?',
    answer: 'Scheduling an appointment is easy. You can call us at (847) 404-3398 or visit our website to book your window cleaning service at a time that\'s convenient for you.',
  },
  {
    question: 'What is included in your window cleaning service?',
    answer: 'Our professional window cleaning service includes thorough cleaning of interior and exterior glass, removal of dirt, dust, and streaks, and wiping down window frames and sills. We also offer screen cleaning and hard water stain removal upon request.',
  },
];

const WindowCleaningPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={windowCleaningHero} alt="Window Cleaning" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-16 md:py-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Top Rated Window Cleaners
              </h1>
              <p className="text-lg text-white/90 mb-4">
                Thomas Window Cleaning provides professional <span className="font-semibold">residential and commercial window cleaning</span> in <span className="font-semibold">Chicago, IL</span> and surrounding areas. We specialize in <span className="font-semibold">streak-free window washing</span>, interior and exterior glass cleaning, and complete frame maintenance.
              </p>
              <p className="text-white/80 mb-8">
                Serving homeowners and businesses across <span className="font-semibold">Chicago, IL</span> and the greater Chicagoland area, our experienced team ensures crystal-clear results using professional-grade equipment.
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
        <section className="py-12 md:py-16 bg-muted/30">
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
                className="image-tile shadow-xl"
              >
                <img src={windowCleaningImg} alt="Window Cleaning Service" className="w-full aspect-[4/3] object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-16">
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
              
              <div className="mt-8 glass-card p-6">
                <h4 className="font-semibold mb-4">Additional Service Charges</h4>
                <ul className="space-y-2">
                  {additionalCharges.map((charge, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {charge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Types Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Residential & Commercial{' '}
                <span className="text-gradient">Window Cleaning</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                We serve both homeowners and business owners with professional window washing services tailored to your needs.
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
          </div>
        </section>

        {/* Thomas Difference Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Thomas Window Cleaning{' '}
                <span className="text-gradient">Difference</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We're more than just local window washers—we're your trusted window cleaning experts in Chicago and the suburbs. Our customers love our attention to detail, reliability, and friendly service. When you choose Thomas Window Cleaning, you get more than clean windows—you get peace of mind knowing the job is done right.
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
                <img src={thomasDifference1} alt="Professional window cleaning with squeegee" className="w-full aspect-[4/3] object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="image-tile"
              >
                <img src={thomasDifference2} alt="Close-up of window cleaning service" className="w-full aspect-[4/3] object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
                Professional Window Cleaning Services in Wheeling, IL & Chicago Suburbs
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 text-center">
                Thomas Window Cleaning delivers exceptional residential and commercial window cleaning throughout the Chicago metropolitan area. With over 29 years of experience, our trained professionals use industry-leading techniques and eco-friendly solutions for streak-free, crystal-clear results on every window.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card rounded-xl p-6 border border-border shadow-md">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Residential Window Cleaning</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our home window cleaning service includes thorough interior and exterior glass cleaning, frame wiping, screen cleaning, and sill maintenance. We handle everything from standard double-hung windows to skylights, French panes, and hard-to-reach high windows—all with care and precision.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border shadow-md">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Commercial Window Cleaning</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Keep your storefront or office looking professional with our commercial window washing services. Clean windows enhance curb appeal, create inviting spaces for customers, and reflect your business's attention to detail. We offer flexible scheduling to minimize disruption.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-md mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">What's Included in Our Window Cleaning Service?</h3>
                <div className="grid sm:grid-cols-2 gap-3">
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
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-3">Serving Chicago & Surrounding Communities</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We proudly provide window cleaning services throughout the Chicagoland area including:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Wheeling", "Arlington Heights", "Buffalo Grove", "Palatine", "Mount Prospect", "Des Plaines", "Northbrook", "Glenview", "Prospect Heights", "Schaumburg"].map((area, index) => (
                    <span key={index} className="bg-muted px-3 py-1 rounded-full text-xs text-muted-foreground">
                      {area}, IL
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-muted/30">
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
        <section className="py-12 md:py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Schedule Your Window Cleaning Today!
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Ready to enjoy spotless windows? Contact Thomas Window Cleaning today for professional window cleaning in Chicago, IL. We look forward to making your windows shine!
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

export default WindowCleaningPage;
