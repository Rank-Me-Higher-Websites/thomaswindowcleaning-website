import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '@/assets/thomas-logo.png';

const footerLinks = {
  services: [
    { label: 'Window Cleaning', href: '/services/window-cleaning' },
    { label: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
    { label: 'Power Washing', href: '/services/power-washing' },
  ],
  company: [
    { label: 'About Us', href: '/#about' },
    { label: 'Pricing', href: '/prices' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const Footer = () => {
  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <Link to="/" className="mb-6 inline-block">
              <img 
                src={logoImg} 
                alt="Thomas Window Cleaning" 
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Professional window cleaning, gutter cleaning, and power washing services serving Chicagoland since 1995.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/thomaswindowbg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/thomaswindowbg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:8474043398"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  (847) 404-3398
                </a>
              </li>
              <li>
                <a
                  href="mailto:thomaswindowcleaning@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  thomaswindowcleaning@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                P.O. Box 582 Wheeling, IL 60090
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Clock className="w-4 h-4 shrink-0" />
                Mon - Sat: 9:00 - 19:00
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mb-12">
          <h4 className="font-semibold mb-6">Our Service Area</h4>
          <div className="rounded-xl overflow-hidden">
            <iframe 
              src="https://maps.google.com/maps?q=Thomas+Window+Cleaning,Wheeling,IL&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Thomas Window Cleaning Location"
              className="w-full"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <p>© 2024 Thomas Window Cleaning. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
