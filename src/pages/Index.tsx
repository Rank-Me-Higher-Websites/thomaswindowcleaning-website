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
import { SEOHead } from '@/components/SEOHead';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Thomas Window Cleaning | Professional Window, Gutter & Power Washing in Chicago"
        description="Thomas Window Cleaning provides professional window cleaning, gutter cleaning, and power washing services across Chicago's northwest suburbs. Trusted since 1995. Get a free quote!"
        canonical="/"
      />
      <Header />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <ServicesSection />
        <AboutSection />
        <HowItWorksSection />
        <SEOContentSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
