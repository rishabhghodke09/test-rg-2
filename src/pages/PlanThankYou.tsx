
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, Phone } from "lucide-react";

const PlanThankYou = () => {
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
          
          <h1 className="text-4xl font-bold text-white mb-6">Thank You for Your Interest!</h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Your plan inquiry has been successfully submitted. Our Microsoft licensing specialists will contact you shortly.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <Calendar className="h-8 w-8 text-axima-blue" />
              </div>
              <h2 className="text-lg font-medium text-white mb-2">Next Steps</h2>
              <p className="text-gray-300 text-sm">
                Our licensing team will prepare a customized proposal based on your selected plan and requirements within 24-48 hours.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <Phone className="h-8 w-8 text-axima-blue" />
              </div>
              <h2 className="text-lg font-medium text-white mb-2">Need Immediate Assistance?</h2>
              <p className="text-gray-300 text-sm">
                Call our Microsoft licensing experts at <span className="text-white font-medium">+91 93270 00033</span> for immediate assistance.
              </p>
            </div>
          </div>
          
          <div className="p-6 bg-axima-blue/10 rounded-lg mb-8 border border-axima-blue/30">
            <h3 className="text-lg font-medium text-white mb-3">What to expect:</h3>
            <ul className="text-gray-300 space-y-2 text-left list-disc pl-5">
              <li>A confirmation email with details of your plan inquiry</li>
              <li>A call from our Microsoft specialist to discuss your requirements</li>
              <li>A personalized quote based on your business needs</li>
              <li>Information about implementation and support options</li>
            </ul>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
            <Button asChild className="bg-axima-blue hover:bg-blue-600">
              <Link to="/">Return to Home</Link>
            </Button>
            <Button asChild variant="outline" className="border-axima-blue text-white hover:bg-axima-blue/20">
              <Link to="/microsoft-365">Learn About Microsoft 365</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PlanThankYou;
