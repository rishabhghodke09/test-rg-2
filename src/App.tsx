
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { PageTransition } from "./components/PageTransition";
import { ScrollIndicator } from "./components/ScrollIndicator";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PlansAndPricing from "./pages/PlansAndPricing";
import ProductDetails from "./pages/ProductDetails";
import Copilot from "./pages/Copilot";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import Microsoft365 from "./pages/Microsoft365";
import MSAzure from "./pages/MSAzure";
import JioAzure from "./pages/JioAzure";
import SupportPackages from "./pages/SupportPackages";
import CaseStudies from "./pages/CaseStudies";
import ContactThankYou from "./pages/ContactThankYou";
import PlanThankYou from "./pages/PlanThankYou";
import NotFound from "./pages/NotFound";

// Create QueryClient outside of the component
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <TooltipProvider>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact-thank-you" element={<ContactThankYou />} />
              <Route path="/plan-thank-you" element={<PlanThankYou />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/plans" element={<PlansAndPricing />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route path="/copilot" element={<Copilot />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/microsoft-365" element={<Microsoft365 />} />
              <Route path="/microsoft-azure" element={<MSAzure />} />
              <Route path="/microsoft-jioazure" element={<JioAzure />} />
              <Route path="/support-packages" element={<SupportPackages />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              {/* Catch-all route for 404 - must be the last route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
          <ScrollIndicator />
        </TooltipProvider>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
