
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const MSAzure = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-6 bg-black/40 p-6 rounded-lg">
            <img 
              src="https://storage.googleapis.com/axima-website-content/logos/Azure.webp" 
              alt="Microsoft Azure" 
              className="w-24 h-24 object-contain"
            />
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">Microsoft Azure</h1>
              <p className="text-gray-300 text-lg">
                An enterprise cloud platform that delivers secure, scalable, and high-performance solutions tailored to modern business needs. With advanced capabilities in AI, data analytics, hybrid cloud, and cybersecurity, Azure enables organizations to streamline operations, enhance agility, and accelerate digital transformation. Its seamless integration with Microsoft's ecosystem, coupled with robust compliance and global availability, ensures a reliable and future-ready foundation for innovation and growth.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Azure Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Virtual Machines",
                  "Blob Storage",
                  "Kubernetes",
                  "IoT",
                  "Azure Active Directory",
                  "Azure Functions",
                  "Logic Apps",
                  "SQL Database",
                  "App Service",
                  "Azure DevOps",
                  "Cognitive Services",
                  "Machine Learning"
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue transition-all duration-300 group cursor-pointer h-full">
                      <div className="p-4 flex items-center space-x-3">
                        <div className="p-2 rounded-full bg-axima-blue/10 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-axima-blue" />
                        </div>
                        <p className="text-gray-300 group-hover:text-axima-blue transition-colors duration-300">
                          {feature}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Key Benefits of Azure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Scalability",
                  "Security & Compliance",
                  "AI & Machine Learning",
                  "Flexibility",
                  "Global Availability",
                  "Cost Efficiency",
                  "Enterprise Integration",
                  "Data Analytics",
                  "DevOps & Automation",
                  "Disaster Recovery"
                ].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue transition-all duration-300 group cursor-pointer h-full">
                      <div className="p-4 flex items-center space-x-3">
                        <div className="p-2 rounded-full bg-axima-blue/10 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-axima-blue" />
                        </div>
                        <p className="text-gray-300 group-hover:text-axima-blue transition-colors duration-300">
                          {benefit}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-8 relative z-10"
          >
            <Button
              onClick={() => navigate('/contact')}
              className="bg-axima-blue hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Contact Us
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default MSAzure;
