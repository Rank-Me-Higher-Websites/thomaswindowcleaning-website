import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Window Cleaning', href: '#window-cleaning' },
    { label: 'Gutter Cleaning', href: '#gutter-cleaning' },
    { label: 'Power Washing', href: '#power-washing' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Pricing', href: '#prices' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">T</span>
              </div>
              <div>
                <span className="font-bold text-xl">Thomas</span>
                <span className="text-xs text-muted-foreground block -mt-1">Window Cleaning</span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm mb-6">
              Professional window cleaning, gutter cleaning, and power washing services serving Chicagoland since 1995.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
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
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
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
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  (847) 404-3398
                </a>
              </li>
              <li>
                <a
                  href="mailto:thomaswindowcleaning@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  thomaswindowcleaning@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                P.O. Box 582 Wheeling, IL 60090
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 shrink-0" />
                Mon - Sat: 9:00 - 19:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Thomas Window Cleaning. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
