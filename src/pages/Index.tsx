import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';
import { ContactSection } from '@/components/ContactSection';
import { SEOContentSection } from '@/components/SEOContentSection';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { BookingDialog } from '@/components/BookingDialog';

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection onGetQuote={() => setBookingOpen(true)} />
        <ServicesSection />
        <AboutSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <SEOContentSection />
        <CTASection onGetQuote={() => setBookingOpen(true)} />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA onGetQuote={() => setBookingOpen(true)} />
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default Index;
