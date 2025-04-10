
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useAnimate } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

const Copilot = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateSteps = async () => {
      while (true) {
        // Step 1
        await animate(".step-1", { scale: 1.05, backgroundColor: "rgba(0, 163, 255, 0.2)" }, { duration: 1 });
        await animate(".step-1", { scale: 1, backgroundColor: "rgba(0, 0, 0, 0.6)" }, { duration: 1 });
        
        // Step 2
        await animate(".step-2", { scale: 1.05, backgroundColor: "rgba(0, 163, 255, 0.2)" }, { duration: 1 });
        await animate(".step-2", { scale: 1, backgroundColor: "rgba(0, 0, 0, 0.6)" }, { duration: 1 });
        
        // Step 3
        await animate(".step-3", { scale: 1.05, backgroundColor: "rgba(0, 163, 255, 0.2)" }, { duration: 1 });
        await animate(".step-3", { scale: 1, backgroundColor: "rgba(0, 0, 0, 0.6)" }, { duration: 1 });
        
        // Step 4
        await animate(".step-4", { scale: 1.05, backgroundColor: "rgba(0, 163, 255, 0.2)" }, { duration: 1 });
        await animate(".step-4", { scale: 1, backgroundColor: "rgba(0, 0, 0, 0.6)" }, { duration: 1 });
      }
    };

    animateSteps();
  }, [animate]);

  return (
    <div className="min-h-screen bg-gray-900 tech-background">
      <Navbar />
      
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90 z-10" />
        <img 
          src="https://storage.googleapis.com/axima-website-content/banner/ai_copilot.webp"
          alt="Microsoft Copilot Banner"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
              Microsoft Copilot
            </h1>
            <p className="text-xl md:text-2xl text-center text-gray-200">
              Your AI-powered productivity companion
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-12" ref={scope}>
        

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-white mt-24 mb-12"
        >
          How Microsoft Copilot Works
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-4 gap-8"
        >
          {[
            {
              step: 1,
              title: "User Input",
              icon: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_word.webp",
              description: "Natural language processing of user requests"
            },
            {
              step: 2,
              title: "Security Check",
              icon: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/windows_defender.webp",
              description: "Enterprise-grade security validation"
            },
            {
              step: 3,
              title: "AI Processing",
              icon: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/azure_information_prot.webp",
              description: "Advanced language model processing"
            },
            {
              step: 4,
              title: "Smart Response",
              icon: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_loop.webp",
              description: "Contextual suggestions and actions"
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              className={`step-${step.step} bg-black/60 rounded-lg p-6 relative overflow-hidden group`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-axima-blue rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-16 h-16 mx-auto mb-4"
                  loading="eager"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-white mt-24 mb-12"
        >
          Key Features & Benefits
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Enhanced Productivity",
              description: "Get more done faster with AI-powered assistance in all your favorite Microsoft 365 apps, including Word, Excel, PowerPoint, and Outlook."
            },
            {
              title: "Creative Assistance",
              description: "Generate content, analyze data, and create presentations with intelligent suggestions. Transform ideas into polished content quickly."
            },
            {
              title: "Seamless Integration",
              description: "Works naturally within your existing workflow in Microsoft 365 applications, providing contextual assistance when you need it."
            },
            {
              title: "Data Analysis",
              description: "Quickly analyze complex datasets, create visualizations, and extract meaningful insights from your business data."
            },
            {
              title: "Natural Language Processing",
              description: "Communicate with Copilot using natural language to accomplish tasks, get answers, and receive recommendations."
            },
            {
              title: "Security & Compliance",
              description: "Enterprise-grade security features ensure your data remains protected while leveraging AI capabilities."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/40 border-none text-white backdrop-blur-sm h-full hover:bg-black/50 transition-colors group">
                <CardHeader>
                  <CardTitle className="group-hover:text-axima-blue transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-black/40 p-8 rounded-lg backdrop-blur-sm mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Microsoft Copilot?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">For Businesses</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Increased operational efficiency</li>
                <li>Reduced training time for new employees</li>
                <li>Enhanced team collaboration</li>
                <li>Cost savings through automation</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">For Individuals</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Personalized assistance</li>
                <li>Improved work-life balance</li>
                <li>Faster task completion</li>
                <li>Enhanced creativity and innovation</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl border border-white/10">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/S7xTBa93TX8?mute=0&autoplay=1&controls=1"
            title="Microsoft Copilot Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Copilot;
