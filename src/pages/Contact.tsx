
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Add Content Security Policy meta tag */}
      <meta
        httpEquiv="Content-Security-Policy"
        content="default-src 'self'; script-src 'self'; connect-src 'self' https://portal-api.shiviom.com; img-src 'self' data:; style-src 'self' 'unsafe-inline';"
      />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <div className="pt-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-axima-blue/20">
              <MessageSquare className="w-8 h-8 text-axima-blue" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch with our team for Microsoft solutions and support
          </p>
          <div className="w-24 h-1 bg-axima-blue mx-auto mt-6"></div>
        </motion.div>
        <Contact />
      </div>
      <Footer />
      {/* Add Toaster component for toast notifications */}
      <Toaster />
    </div>
  );
};

export default ContactPage;
