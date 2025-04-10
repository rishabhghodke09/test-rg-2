
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const ContactThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <meta
        httpEquiv="Content-Security-Policy"
        content="default-src 'self'; script-src 'self'; connect-src 'self' https://portal-api.shiviom.com; img-src 'self' data:; style-src 'self' 'unsafe-inline';"
      />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      
      <div className="container mx-auto px-4 py-32 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center bg-black/50 p-12 rounded-xl border border-axima-blue/30 backdrop-blur-sm"
        >
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-14 w-14 text-green-500" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-6">Thank You for Contacting Us!</h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Your message has been successfully submitted. Our team will get back to you shortly.
          </p>
          
          <div className="bg-white/5 p-6 rounded-lg mb-8">
            <h2 className="text-lg font-medium text-axima-blue mb-4">What happens next?</h2>
            <ul className="text-gray-300 space-y-2 text-left list-disc pl-5">
              <li>A confirmation email has been sent to your provided email address</li>
              <li>Our team will review your inquiry within 1-2 business days</li>
              <li>A Microsoft specialist will contact you to discuss your needs</li>
            </ul>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
            <Button asChild className="bg-axima-blue hover:bg-blue-600">
              <Link to="/">Return to Home</Link>
            </Button>
            <Button asChild variant="outline" className="border-axima-blue text-white hover:bg-axima-blue/20">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactThankYou;
