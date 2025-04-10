import { motion } from "framer-motion";
import { Check, Target, Rocket } from "lucide-react";
import { Card } from "./ui/card";

export const Vision = () => {
  const benefits = [
    "Take advantage of competitive pricing with our wholesale price list",
    "Access a range of value-added tools, products, and services through a unified approach",
    "Enhance customer satisfaction with multiple touchpoints",
    "Benefit from our experienced technical support team dedicated to meeting your needs",
    "Have a dedicated representative as your primary contact to ensure customer satisfaction",
    "Join over 2,000 satisfied customers across India",
    "Leverage our decade-long experience of expertise in Cloud Technology.",
    "Our strong understanding of Cloud security",
    "Enjoy prompt and reliable customer support"
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Vision Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 p-8 rounded-lg border border-axima-blue/20 hover:border-axima-blue/40 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-axima-blue/10 rounded-full">
                <Target className="h-8 w-8 text-axima-blue" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>
            <div className="w-24 h-1 bg-axima-blue mb-6"></div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              With a passion and conviction to succeed, our vision is to be the leading email solution provider in India.
            </motion.p>
          </motion.div>

          {/* Mission Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/40 p-8 rounded-lg border border-axima-blue/20 hover:border-axima-blue/40 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-axima-blue/10 rounded-full">
                <Rocket className="h-8 w-8 text-axima-blue" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <div className="w-24 h-1 bg-axima-blue mb-6"></div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              In order to achieve our mission, Axima plans to help its clients by going an extra mile and helping them by understanding their needs and providing a solution. Collaborative and Innovative in our approach, we will enhance your business in terms of productivity and flexibility.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose Axima</h2>
          <div className="w-24 h-1 bg-axima-blue mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:scale-105 transition-all duration-300 bg-black/40 border-gray-800 hover:border-axima-blue/40 backdrop-blur-sm">
                  <div className="p-6 flex items-start gap-4">
                    <Check className="w-6 h-6 text-axima-blue flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-300 group-hover:text-white transition-colors">{benefit}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};