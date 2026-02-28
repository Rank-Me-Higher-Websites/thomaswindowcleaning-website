import { CheckCircle, MapPin, Shield, Award, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBooking } from '@/contexts/BookingContext';
import { areas } from '@/data/areaServices';

export const SEOContentSection = () => {
  const { openBooking } = useBooking();

  return (
    <section className="py-8 md:py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main SEO Content */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Professional Window Cleaning & Exterior Services in <a href="https://maps.app.goo.gl/GGN3Vf6jbHyoRMry5" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wheeling, IL</a>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Thomas Window Cleaning has been providing exceptional <Link to="/services/window-cleaning" className="text-primary hover:underline">window cleaning</Link>, <Link to="/services/gutter-cleaning" className="text-primary hover:underline">gutter cleaning</Link>, and <Link to="/services/power-washing" className="text-primary hover:underline">power washing</Link> services to homeowners and businesses throughout the <a href="https://en.wikipedia.org/wiki/Chicago_metropolitan_area" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chicago metropolitan area</a> for over 20 years. Our team of trained professionals uses industry-leading techniques and <a href="https://www.epa.gov/saferchoice" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">eco-friendly cleaning solutions</a> to deliver spotless results every time.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="flex items-center justify-center gap-3 bg-background rounded-lg p-4 shadow-sm border border-border">
            <Shield className="h-8 w-8 text-primary flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">Licensed & Insured</p>
              <p className="text-xs text-muted-foreground">Full liability coverage</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-background rounded-lg p-4 shadow-sm border border-border">
            <Award className="h-8 w-8 text-primary flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">Award Winning</p>
              <p className="text-xs text-muted-foreground">Top-rated local service</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-background rounded-lg p-4 shadow-sm border border-border">
            <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">Satisfaction Guaranteed</p>
              <p className="text-xs text-muted-foreground">100% happiness promise</p>
            </div>
          </div>
        </div>

        {/* Services & Areas Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Our Professional Services</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <Link to="/services/window-cleaning" className="hover:text-primary transition-colors">Residential Window Cleaning</Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <Link to="/services/window-cleaning" className="hover:text-primary transition-colors">Commercial Window Cleaning</Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <Link to="/services/gutter-cleaning" className="hover:text-primary transition-colors">Gutter Cleaning & Maintenance</Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <Link to="/services/power-washing" className="hover:text-primary transition-colors">Power Washing Services</Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <Link to="/services/power-washing" className="hover:text-primary transition-colors">Pressure Washing Driveways</Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <Link to="/services/power-washing" className="hover:text-primary transition-colors">Deck & Patio Cleaning</Link>
              </li>
            </ul>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Areas We Serve
            </h3>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <Link 
                  key={area.slug}
                  to={`/services/window-cleaning/${area.slug}`}
                  className="bg-muted px-3 py-1.5 rounded-full text-xs font-medium text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {area.name}, IL
                </Link>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Serving the entire Chicago metropolitan area and surrounding suburbs.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-10 text-center max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Why Choose Thomas Window Cleaning?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            As a locally owned and operated business, we take pride in delivering personalized service to every customer. Our experienced technicians arrive on time, treat your property with respect, and ensure every job meets our high standards. From <Link to="/services/window-cleaning" className="text-primary hover:underline">streak-free windows</Link> to <Link to="/services/gutter-cleaning" className="text-primary hover:underline">debris-free gutters</Link> and <Link to="/services/power-washing" className="text-primary hover:underline">sparkling clean driveways</Link>, we handle all your exterior cleaning needs with professionalism and care. View our <Link to="/offers" className="text-primary hover:underline">current offers</Link> for seasonal savings.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="tel:8474043398" 
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button 
              onClick={openBooking}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-semibold transition-colors text-sm"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
