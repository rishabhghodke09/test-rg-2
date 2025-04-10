
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Clock, CheckCircle2 } from "lucide-react";

const SupportPackages = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Support Packages</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the support package that best fits your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder cards for support packages */}
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/40 border-white/10 text-white p-6 hover:bg-black/50 transition-duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-axima-blue/20">
                      <Clock className="w-6 h-6 text-axima-blue" />
                    </div>
                    <h3 className="text-xl font-semibold">Support Tier {index + 1}</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="border-t border-white/10 pt-4">
                      <h4 className="text-lg font-medium mb-2">Support Hours</h4>
                      <p className="text-gray-400">Placeholder for support hours</p>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <h4 className="text-lg font-medium mb-2">Response Time</h4>
                      <p className="text-gray-400">Placeholder for response time</p>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <h4 className="text-lg font-medium mb-2">Features</h4>
                      <ul className="space-y-2">
                        {[1, 2, 3].map((_, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-400">
                            <CheckCircle2 className="w-5 h-5 text-axima-blue" />
                            <span>Feature placeholder {i + 1}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportPackages;
