
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Award, 
  Building, 
  Check, 
  FileText, 
  ArrowRight, 
  Users, 
  Rocket, 
  LineChart 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Enterprise Migration to Microsoft 365",
    industry: "Banking & Finance",
    logo: "/lovable-uploads/11f0b3fd-81f2-4bf5-a519-1b17d303755a.png",
    client: "Large Banking Institution",
    challenge: "A major banking institution with over 5,000 employees was struggling with outdated IT infrastructure and inconsistent collaboration tools across departments.",
    solution: "Implemented a comprehensive Microsoft 365 migration strategy, including Exchange Online, SharePoint, and Teams deployment with custom security policies.",
    results: [
      "30% reduction in IT support tickets",
      "99.9% email uptime compared to previous 95%",
      "Estimated cost savings of ₹1.5 crore annually",
      "Improved collaboration across 25 branch locations"
    ],
    icon: Building,
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Azure Migration for Manufacturing",
    industry: "Manufacturing",
    logo: "/lovable-uploads/11f0b3fd-81f2-4bf5-a519-1b17d303755a.png",
    client: "Mid-size Manufacturing Company",
    challenge: "A manufacturing company needed to modernize their infrastructure while maintaining business continuity for critical production systems.",
    solution: "Designed and implemented a phased Azure migration with hybrid connectivity, focusing on minimal disruption to manufacturing operations.",
    results: [
      "40% reduction in infrastructure costs",
      "Zero downtime during migration",
      "Improved disaster recovery capabilities",
      "Enhanced security posture with Azure Security Center"
    ],
    icon: Rocket,
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    title: "Microsoft Teams Deployment for Education",
    industry: "Education",
    logo: "/lovable-uploads/11f0b3fd-81f2-4bf5-a519-1b17d303755a.png",
    client: "Leading Educational Institution",
    challenge: "A large educational institution needed to rapidly transition to remote learning during the pandemic while maintaining educational standards.",
    solution: "Deployed Microsoft Teams with custom policies, training programs for faculty, and integration with existing learning management systems.",
    results: [
      "Successfully transitioned 10,000+ students to online learning",
      "95% student engagement rate maintained",
      "Faculty reported 85% satisfaction with new tools",
      "Streamlined administrative processes"
    ],
    icon: Users,
    color: "from-yellow-500/20 to-amber-500/20"
  },
  {
    title: "Data Analytics Solution with Power BI",
    industry: "Retail",
    logo: "/lovable-uploads/11f0b3fd-81f2-4bf5-a519-1b17d303755a.png",
    client: "National Retail Chain",
    challenge: "A retail chain with 200+ locations struggled to consolidate and analyze sales data across multiple systems and platforms.",
    solution: "Implemented Power BI with custom data connectors, automated dashboards, and mobile reports for executives and store managers.",
    results: [
      "Reduced reporting time from 3 days to near real-time",
      "Identified ₹75 lakh in potential cost savings",
      "20% improvement in inventory management",
      "Enabled data-driven decision making at all levels"
    ],
    icon: LineChart,
    color: "from-orange-500/20 to-red-500/20"
  }
];

const CaseStudies = () => {
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
            <h1 className="text-4xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover how our Microsoft solutions have transformed businesses across India
            </p>
            <div className="w-24 h-1 bg-axima-blue mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-black/40 border-white/10 text-white backdrop-blur-sm hover:bg-black/50 transition-all duration-300 h-full group relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-axima-blue/20 text-axima-blue">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">{study.industry}</p>
                            <CardTitle className="text-xl">{study.title}</CardTitle>
                          </div>
                        </div>
                        <div className="bg-black/50 px-3 py-1 rounded-full text-xs border border-white/10">
                          {study.client}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-axima-blue">Challenge</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-axima-blue">Solution</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-axima-blue">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="text-gray-300 text-sm flex items-start">
                              <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-2">
                        <Button variant="ghost" className="text-axima-blue hover:text-axima-blue/90 hover:bg-axima-blue/10 p-0 flex items-center gap-1">
                          <span>Read full case study</span>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          
          {/* Testimonial section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 border border-white/10 rounded-xl p-10 backdrop-blur-sm max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-axima-blue/20">
                <Award className="w-8 h-8 text-axima-blue" />
              </div>
            </div>
            <blockquote className="text-center">
              <p className="text-xl text-gray-200 italic mb-6">
                "Axima Corporation transformed our IT infrastructure with Microsoft 365. Their expertise and support were invaluable during our digital transformation journey."
              </p>
              <footer className="text-gray-400">
                <strong className="text-white">Rahul Sharma</strong> <span className="mx-1">|</span> CTO, Leading Financial Services Company
              </footer>
            </blockquote>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Ready to transform your business?</h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-6">
              Let us help you implement tailored Microsoft solutions for your unique business challenges.
            </p>
            <Button className="bg-axima-blue hover:bg-axima-blue/90 text-white">
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudies;
