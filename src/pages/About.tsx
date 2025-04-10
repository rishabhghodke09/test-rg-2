import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Vision } from "@/components/Vision";
import { ManagementTeam } from "@/components/ManagementTeam";
import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";

const locations = [
  { city: "Mumbai", address: "1001, 10th Floor, Runwal R Square, LBS Road, Mulund West" },
  { city: "Bangalore", address: "Brigade Road, Central Business District" },
  { city: "Chennai", address: "Ring Road, Surat" },
  { city: "Delhi", address: "Connaught Place, New Delhi" },
  { city: "Surat", address: "Ring Road, Surat" }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <div className="pt-20 p-8 relative">
        <div className="max-w-7xl mx-auto space-y-12 animate-fade-in">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-axima-blue/20">
                <Building2 className="w-8 h-8 text-axima-blue" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your trusted partner for Microsoft solutions and digital transformation
            </p>
            <div className="w-24 h-1 bg-axima-blue mx-auto mt-6"></div>
          </motion.div>
          
          <Card className="bg-black/40 border-white/10 text-white backdrop-blur-sm hover:bg-black/50 transition-all duration-300">
            <CardHeader>
              <CardTitle>Axima Corporation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xl text-gray-300">
                Axima Corporation is a certified Microsoft 365 partner, dedicated to helping businesses leverage the benefits of cloud solutions. In today's competitive landscape, companies seek collaborative tools that provide a strategic advantage. Microsoft 365 delivers exactly that. With Axima's expertise in integrating Microsoft 365, your business gains enhanced flexibility and agility, empowering you to stay ahead in the market.
              </p>
            </CardContent>
          </Card>

          <Vision />

          <ManagementTeam />

          <Card className="bg-black/40 border-white/10 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-axima-blue" />
                Our Presence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {locations.map((location, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-black/40 hover:bg-black/60 transition-all duration-300 group cursor-pointer border border-white/10 hover:border-axima-blue/50"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-axima-blue" />
                      <h3 className="text-xl font-semibold group-hover:text-axima-blue transition-colors">
                        {location.city}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;