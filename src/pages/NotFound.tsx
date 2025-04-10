
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-24 w-24 text-axima-blue" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">Page Not Found</h1>
          <p className="text-xl text-gray-300 mb-8">
            We couldn't find the page you're looking for. The page might have been removed or the URL might be incorrect.
          </p>
          <Link to="/" className="inline-block">
            <Button className="bg-axima-blue hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Return to Homepage
            </Button>
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
