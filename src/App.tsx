import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "./components/ScrollToTop";
import { BookingProvider } from "./contexts/BookingContext";
import Index from "./pages/Index";
import WindowCleaningPage from "./pages/services/WindowCleaningPage";
import GutterCleaningPage from "./pages/services/GutterCleaningPage";
import PowerWashingPage from "./pages/services/PowerWashingPage";
import AreaServicePage from "./pages/services/AreaServicePage";
import OffersPage from "./pages/OffersPage";
import PricesPage from "./pages/PricesPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BookingProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/window-cleaning" element={<WindowCleaningPage />} />
            <Route path="/services/gutter-cleaning" element={<GutterCleaningPage />} />
            <Route path="/services/power-washing" element={<PowerWashingPage />} />
            <Route path="/services/:serviceSlug/:areaSlug" element={<AreaServicePage />} />
            <Route path="/prices" element={<PricesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BookingProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
