import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto prose prose-lg dark:prose-invert"
          >
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using Thomas Window Cleaning's services, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of the terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
                <p className="text-muted-foreground mb-4">
                  Thomas Window Cleaning provides professional exterior cleaning services including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Residential and commercial window cleaning</li>
                  <li>Gutter cleaning and maintenance</li>
                  <li>Power washing services</li>
                  <li>Related exterior cleaning services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Scheduling and Appointments</h2>
                <p className="text-muted-foreground">
                  Appointments are scheduled based on availability. We reserve the right to reschedule appointments 
                  due to inclement weather or unforeseen circumstances. Customers will be notified of any changes 
                  as soon as possible. We require 24-hour notice for appointment cancellations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Pricing and Payment</h2>
                <p className="text-muted-foreground">
                  All prices are subject to change without notice. Quotes provided are estimates based on the 
                  information available at the time. Final pricing may vary based on actual conditions encountered. 
                  Payment is due upon completion of services unless otherwise arranged.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Satisfaction Guarantee</h2>
                <p className="text-muted-foreground">
                  We stand behind our work. If you're not satisfied with our services, please contact us within 
                  24 hours and we will return to address any concerns at no additional cost. Our 100% satisfaction 
                  guarantee is our commitment to quality service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Property Access and Safety</h2>
                <p className="text-muted-foreground">
                  Customers must ensure safe access to all areas to be cleaned. Please inform us of any hazards, 
                  loose screens, damaged windows, or areas requiring special attention. We are not responsible 
                  for pre-existing damage or conditions not disclosed prior to service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Insurance and Liability</h2>
                <p className="text-muted-foreground">
                  Thomas Window Cleaning is fully licensed and insured. We carry comprehensive liability insurance 
                  to protect both our team and your property. In the unlikely event of damage, please report it 
                  immediately so we can address it promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitations</h2>
                <p className="text-muted-foreground">
                  We reserve the right to refuse service if conditions are deemed unsafe for our technicians. 
                  This includes but is not limited to severe weather, structural concerns, or aggressive pets. 
                  Certain stains, hard water deposits, or damage may not be removable through standard cleaning.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us:
                </p>
                <ul className="list-none text-muted-foreground space-y-2 mt-4">
                  <li><strong>Phone:</strong> (847) 404-3398</li>
                  <li><strong>Email:</strong> thomaswindowcleaning@gmail.com</li>
                  <li><strong>Address:</strong> <a href="https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">P.O. Box 582 Wheeling, Illinois 60090</a></li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsPage;
