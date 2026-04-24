import { CheckCircle, MapPin, Shield, Award, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBooking } from '@/contexts/BookingContext';
import { areas } from '@/data/areaServices';

export const SEOContentSection = () => {
  const { openBooking } = useBooking();

  return (
    <section className="py-4 md:py-6 bg-background">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
          <div className="flex items-center justify-center gap-3 bg-section-blue rounded-lg p-4 shadow-sm">
            <Shield className="h-8 w-8 text-foreground flex-shrink-0" strokeWidth={2.25} />
            <div className="text-left">
              <p className="font-bold text-foreground text-sm">Licensed & Insured</p>
              <p className="text-xs text-foreground/75">Full liability coverage</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-section-blue rounded-lg p-4 shadow-sm">
            <Award className="h-8 w-8 text-foreground flex-shrink-0" strokeWidth={2.25} />
            <div className="text-left">
              <p className="font-bold text-foreground text-sm">Award Winning</p>
              <p className="text-xs text-foreground/75">Top-rated local service</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-section-blue rounded-lg p-4 shadow-sm">
            <CheckCircle className="h-8 w-8 text-foreground flex-shrink-0" strokeWidth={2.25} />
            <div className="text-left">
              <p className="font-bold text-foreground text-sm">Satisfaction Guaranteed</p>
              <p className="text-xs text-foreground/75">100% happiness promise</p>
            </div>
          </div>
        </div>

        {/* Services & Areas Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-section-dark rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-white mb-4">Our Professional Services</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li className="flex items-center gap-2 text-sm text-white/85">
                <CheckCircle className="h-4 w-4 text-section-blue flex-shrink-0" />
                <Link to="/services/window-cleaning" className="hover:text-section-blue transition-colors">Residential Window Cleaning</Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/85">
                <CheckCircle className="h-4 w-4 text-section-blue flex-shrink-0" />
                <Link to="/services/window-cleaning" className="hover:text-section-blue transition-colors">Commercial Window Cleaning</Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/85">
                <CheckCircle className="h-4 w-4 text-section-blue flex-shrink-0" />
                <Link to="/services/gutter-cleaning" className="hover:text-section-blue transition-colors">Gutter Cleaning & Maintenance</Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/85">
                <CheckCircle className="h-4 w-4 text-section-blue flex-shrink-0" />
                <Link to="/services/power-washing" className="hover:text-section-blue transition-colors">Power Washing Services</Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/85">
                <CheckCircle className="h-4 w-4 text-section-blue flex-shrink-0" />
                <Link to="/services/power-washing" className="hover:text-section-blue transition-colors">Pressure Washing Driveways</Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/85">
                <CheckCircle className="h-4 w-4 text-section-blue flex-shrink-0" />
                <Link to="/services/power-washing" className="hover:text-section-blue transition-colors">Deck & Patio Cleaning</Link>
              </li>
            </ul>
          </div>

          <div className="bg-section-dark rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-section-blue" />
              Areas We Serve
            </h3>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <Link 
                  key={area.slug}
                  to={`/services/window-cleaning/${area.slug}`}
                  className="bg-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-white hover:bg-section-blue hover:text-foreground transition-colors"
                >
                  {area.name}, IL
                </Link>
              ))}
            </div>
            <p className="text-xs text-white/75 mt-4">
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
