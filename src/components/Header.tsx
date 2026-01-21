import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Clock, Mail, Facebook, Instagram, ChevronDown, Sparkles, Droplets, Waves } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '@/assets/thomas-logo.png';

const services = [
  { 
    label: 'Window Cleaning', 
    href: '/services/window-cleaning',
    icon: Sparkles,
    description: 'Crystal-clear, streak-free windows'
  },
  { 
    label: 'Gutter Cleaning', 
    href: '/services/gutter-cleaning',
    icon: Droplets,
    description: 'Prevent costly water damage'
  },
  { 
    label: 'Power Washing', 
    href: '/services/power-washing',
    icon: Waves,
    description: 'Restore your exterior surfaces'
  },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#', hasDropdown: true },
  { label: 'Offers', href: '/offers' },
  { label: 'Prices', href: '/prices' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:8474043398" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              (847) 404-3398
            </a>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Mon - Sat: 9:00 - 19:00 / Closed on Sundays
            </span>
            <a href="mailto:thomaswindowcleaning@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              thomaswindowcleaning@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/thomaswindowbg" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/thomaswindowbg/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky-header ${isScrolled ? 'py-2 shadow-sm' : 'py-2.5'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoImg} 
              alt="Thomas Window Cleaning" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1.5 w-64 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden"
                      >
                        <div className="p-1.5">
                          {services.map((service) => (
                            <Link
                              key={service.label}
                              to={service.href}
                              className="flex items-start gap-2.5 p-2.5 rounded-md hover:bg-muted transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                                <service.icon className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                                  {service.label}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {service.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium relative group transition-colors ${
                    location.pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-200 ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href="tel:8474043398" className="btn-glow text-sm py-2">
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border/50 bg-card"
            >
              <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  link.hasDropdown ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full py-2 text-sm text-foreground"
                      >
                        {link.label}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-3 border-l border-primary/20 ml-1 mb-1"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.label}
                                to={service.href}
                                className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                <service.icon className="w-3.5 h-3.5" />
                                {service.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="py-2 text-sm text-foreground hover:text-primary transition-colors border-b border-border/30"
                    >
                      {link.label}
                    </Link>
                  )
                ))}
                <a href="tel:8474043398" className="btn-glow text-center text-sm mt-2 py-2">
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
