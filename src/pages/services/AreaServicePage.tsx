import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { CTASection } from '@/components/CTASection';
import { getAreaBySlug, getServiceBySlug, areas, services } from '@/data/areaServices';
import { CheckCircle, Phone, ArrowRight, MapPin, Shield, Award, Star } from 'lucide-react';
import { useBooking } from '@/contexts/BookingContext';
import { motion } from 'framer-motion';

const AreaServicePage = () => {
  const { areaSlug, serviceSlug } = useParams();
  const area = getAreaBySlug(areaSlug || '');
  const service = getServiceBySlug(serviceSlug || '');
  const { openBooking } = useBooking();

  if (!area || !service) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const otherServices = services.filter(s => s.slug !== service.slug);
  const otherAreas = areas.filter(a => a.slug !== area.slug);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground pt-24 pb-10 md:pt-28 md:pb-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 text-primary-foreground/70 text-xs mb-3">
                <Link to="/" className="hover:text-primary-foreground">Home</Link>
                <span>/</span>
                <Link to={`/services/${service.slug}`} className="hover:text-primary-foreground">{service.name}</Link>
                <span>/</span>
                <span className="text-primary-foreground">{area.name}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
                {service.name} in {area.name}, IL
              </h1>
              <p className="text-primary-foreground/80 text-sm md:text-base max-w-2xl mb-5">
                Professional {service.name.toLowerCase()} services for homes and businesses in {area.name} and surrounding areas. Trusted by thousands since 1995.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:8474043398" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-foreground/90 transition-colors">
                  <Phone className="w-4 h-4" />
                  Call (847) 404-3398
                </a>
                <button onClick={openBooking} className="inline-flex items-center gap-2 border border-primary-foreground/50 text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-foreground/10 transition-colors">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-5 md:py-6 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_320px] gap-5">
              {/* Left content */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Why Choose Thomas Window Cleaning for {service.name} in {area.name}
                </h2>
                <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                  {area.description} {service.description}
                </p>

                {/* Features */}
                <div className="glass-card p-5 mb-6">
                  <h3 className="text-base font-bold text-foreground mb-3">What's Included</h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Local SEO content */}
                <div className="glass-card p-5 mb-6">
                  <h3 className="text-base font-bold text-foreground mb-2">
                    Serving {area.name} & Surrounding Communities
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                    Our team at Thomas Window Cleaning provides expert {service.name.toLowerCase()} throughout {area.name}, IL and the greater Chicago northwest suburbs. Whether you need a one-time deep clean or regular maintenance, we deliver consistent, high-quality results at <Link to="/prices" className="text-primary hover:underline">competitive prices</Link>.
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    We're fully licensed, insured, and committed to 100% customer satisfaction. Check out our <Link to="/blog" className="text-primary hover:underline">blog</Link> for tips and guides, or view our <Link to="/offers" className="text-primary hover:underline">current offers</Link> for seasonal savings.
                  </p>
                </div>

                {/* Other services in this area */}
                <h3 className="text-base font-bold text-foreground mb-3">
                  Other Services in {area.name}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}/${area.slug}`}
                      className="glass-card p-4 hover:shadow-md transition-all group"
                    >
                      <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {s.name} in {area.name}
                      </h4>
                      <p className="text-xs text-foreground/60 line-clamp-2">{s.description}</p>
                      <span className="inline-flex items-center gap-1 text-primary text-xs font-medium mt-2">
                        Learn More <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                {/* Quick contact card */}
                <div className="glass-card p-5">
                  <h3 className="text-sm font-bold text-foreground mb-3">Get a Free Estimate</h3>
                  <p className="text-xs text-foreground/70 mb-3">
                    Ready for professional {service.name.toLowerCase()} in {area.name}? Contact us today!
                  </p>
                  <a href="tel:8474043398" className="btn-glow w-full text-sm mb-2">
                    <Phone className="w-4 h-4" />
                    (847) 404-3398
                  </a>
                  <button onClick={openBooking} className="btn-outline-glow w-full text-sm">
                    Request Quote Online
                  </button>
                </div>

                {/* Trust badges */}
                <div className="glass-card p-5">
                  <h3 className="text-sm font-bold text-foreground mb-3">Why Trust Us</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-xs text-foreground/80">Fully Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-xs text-foreground/80">Top Rated Since 1995</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-xs text-foreground/80">5-Star Google Reviews</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-xs text-foreground/80">100% Satisfaction Guarantee</span>
                    </div>
                  </div>
                </div>

                {/* Other areas */}
                <div className="glass-card p-5">
                  <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {service.name} Near You
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {otherAreas.map((a) => (
                      <Link
                        key={a.slug}
                        to={`/services/${service.slug}/${a.slug}`}
                        className="bg-muted px-2.5 py-1 rounded-full text-xs text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {a.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default AreaServicePage;
