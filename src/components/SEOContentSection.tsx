import { CheckCircle, MapPin, Shield, Award, Phone, ArrowRight } from 'lucide-react';

const services = [
  "Residential Window Cleaning",
  "Commercial Window Cleaning",
  "Gutter Cleaning & Maintenance",
  "Power Washing Services",
  "Pressure Washing Driveways",
  "Deck & Patio Cleaning"
];

const areasServed = [
  "Wheeling", "Arlington Heights", "Buffalo Grove", "Palatine", 
  "Mount Prospect", "Des Plaines", "Northbrook", "Glenview",
  "Prospect Heights", "Elk Grove Village", "Schaumburg", "Rolling Meadows"
];

export const SEOContentSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main SEO Content */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Professional Window Cleaning & Exterior Services in Wheeling, IL
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Thomas Window Cleaning has been providing exceptional window cleaning, gutter cleaning, and power washing services to homeowners and businesses throughout the Chicago metropolitan area for over 20 years. Our team of trained professionals uses industry-leading techniques and eco-friendly cleaning solutions to deliver spotless results every time.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="flex items-center justify-center gap-3 bg-background rounded-lg p-4 shadow-sm">
            <Shield className="h-8 w-8 text-primary flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">Licensed & Insured</p>
              <p className="text-xs text-muted-foreground">Full liability coverage</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-background rounded-lg p-4 shadow-sm">
            <Award className="h-8 w-8 text-primary flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">Award Winning</p>
              <p className="text-xs text-muted-foreground">Top-rated local service</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 bg-background rounded-lg p-4 shadow-sm">
            <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">Satisfaction Guaranteed</p>
              <p className="text-xs text-muted-foreground">100% happiness promise</p>
            </div>
          </div>
        </div>

        {/* Services & Areas Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Our Services */}
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4">Our Professional Services</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Served */}
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Areas We Serve
            </h3>
            <div className="flex flex-wrap gap-2">
              {areasServed.map((area, index) => (
                <span 
                  key={index}
                  className="bg-muted px-3 py-1 rounded-full text-xs text-muted-foreground"
                >
                  {area}, IL
                </span>
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
            As a locally owned and operated business, we take pride in delivering personalized service to every customer. Our experienced technicians arrive on time, treat your property with respect, and ensure every job meets our high standards. From streak-free windows to debris-free gutters and sparkling clean driveways, we handle all your exterior cleaning needs with professionalism and care.
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
            <a 
              href="#booking" 
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-semibold transition-colors text-sm"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
