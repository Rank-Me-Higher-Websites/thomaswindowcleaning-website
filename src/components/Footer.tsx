import { Phone, Mail, MapPin, Facebook, Instagram, Clock, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '@/assets/thomas-logo.png';
import angiesListBadge from '@/assets/angies-list-badge.png';

const footerLinks = {
  services: [
    { label: 'Window Cleaning', href: '/services/window-cleaning' },
    { label: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
    { label: 'Power Washing', href: '/services/power-washing' },
  ],
  company: [
    { label: 'About Us', href: '/', scrollTo: 'about' },
    { label: 'Pricing', href: '/prices' },
    { label: 'Offers', href: '/offers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const Footer = () => {
  const navigate = useNavigate();

  const handleScrollLink = (href: string, scrollTo?: string) => {
    if (scrollTo) {
      navigate(href);
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="py-10 md:py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="mb-4 inline-block">
              <img 
                src={logoImg} 
                alt="Thomas Window Cleaning" 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/70 text-xs mb-4 max-w-[200px]">
              Professional window cleaning, gutter cleaning, and power washing since 1995.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/thomaswindowbg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/thomaswindowbg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.yelp.com/biz/thomas-window-cleaning-wheeling"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Star className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.scrollTo ? (
                    <button
                      onClick={() => handleScrollLink(link.href, link.scrollTo)}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-xs text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-xs"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Contact</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="tel:8474043398"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  (847) 404-3398
                </a>
              </li>
              <li>
                <a
                  href="mailto:thomaswindowcleaning@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">thomaswindowcleaning@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                Wheeling, IL 60090
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                Mon - Sat: 9-7
              </li>
            </ul>
            <img 
              src={angiesListBadge} 
              alt="Angie's List Super Service Award" 
              className="h-16 w-auto mt-3 hidden md:block"
            />
          </div>
        </div>

        {/* Google Map */}
        <div className="mb-8 rounded-xl overflow-hidden h-48 md:h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47467.45938095!2d-87.96377!3d42.1335205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb945112c2f09%3A0xc1bd0ae10b07e6c!2sWheeling%2C%20IL%2060090!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Thomas Window Cleaning Location - Wheeling, IL"
            className="w-full h-full"
          />
        </div>
        {/* Bottom bar */}
        <div className="pt-6 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Thomas Window Cleaning</p>
          <div className="flex gap-4">
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
