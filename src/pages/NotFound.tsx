import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Phone, Search } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* 404 Number */}
            <div className="relative mb-8">
              <span className="text-[150px] md:text-[200px] font-bold text-muted/30 leading-none select-none">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <Search className="w-16 h-16 md:w-24 md:h-24 text-primary/50" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Sorry, the page you're looking for doesn't exist or has been moved. 
              Let's get you back on track!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/" 
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 bg-muted text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted/80 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>

            {/* Quick Links */}
            <div className="glass-card p-6 text-left">
              <h2 className="font-semibold mb-4 text-center">Popular Pages</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link 
                  to="/services/window-cleaning" 
                  className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm"
                >
                  <span className="text-primary">→</span>
                  Window Cleaning Services
                </Link>
                <Link 
                  to="/services/gutter-cleaning" 
                  className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm"
                >
                  <span className="text-primary">→</span>
                  Gutter Cleaning Services
                </Link>
                <Link 
                  to="/prices" 
                  className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm"
                >
                  <span className="text-primary">→</span>
                  View Our Prices
                </Link>
                <Link 
                  to="/contact" 
                  className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm"
                >
                  <span className="text-primary">→</span>
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-sm mb-2">
                Need help? Give us a call!
              </p>
              <a 
                href="tel:8474043398" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <Phone className="w-4 h-4" />
                (847) 404-3398
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
