
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Clock, Check, X, BookOpen, ShieldCheck, FileText, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow,
  CompactServiceTable,
  CompactServiceRow
} from "@/components/ui/table";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { securityAssessmentServices, trainingServices } from "@/data/securityAssessmentData";

const services = [
  {
    title: "Security Assessment",
    description: "Comprehensive evaluation of your organization's security posture to identify vulnerabilities and recommend improvements.",
    features: [
      "Threat assessment",
      "Vulnerability scanning",
      "Security policy review",
      "Risk mitigation strategies"
    ],
    icon: Users,
    route: null
  },
  {
    title: "Managed Services",
    description: "Comprehensive IT management solutions that allow you to focus on your core business while we handle your technology infrastructure.",
    features: [
      "24/7 monitoring",
      "Proactive maintenance",
      "Security management",
      "Performance optimization"
    ],
    icon: Shield,
    route: null
  },
  {
    title: "Support Packages",
    description: "Flexible support solutions tailored to your business needs, ensuring reliable assistance whenever you need it.",
    features: [
      "Technical support",
      "System maintenance",
      "Regular updates",
      "Priority response"
    ],
    icon: Clock,
    // route: "/support-packages"
  }
];

const comparisonData = {
  categories: [
    {
      name: "General",
      items: [
        {
          feature: "Support Channels",
          basic: "Email, Articles",
          standard: "Email, phones",
          professional: "Email, chat, phone",
          enterprise: "Email, chat, phone",
          managedServiceRemote: "Email, chat, phone",
          managedServiceOnsite: "Email, chat, phone"
        },
        {
          feature: "KAM (Key Account Manager)",
          basic: false,
          standard: false,
          professional: true,
          enterprise: true,
          managedServiceRemote: true,
          managedServiceOnsite: true
        },
        {
          feature: "TAM (Technical Account Manager)",
          basic: false,
          standard: false,
          professional: "Any Available",
          enterprise: "Shared SPOC",
          managedServiceRemote: "Dedicated",
          managedServiceOnsite: "Dedicated"
        }
      ]
    },
    {
      name: "Response Times & Availability",
      items: [
        {
          feature: "Response Time",
          basic: "24-48 hours",
          standard: "Critical - 2 Hours\nHigh - 4 Hours\nMedium - 8 Hours\nLow - 12 Hours",
          professional: "Critical - 1 Hour\nHigh - 2 Hours\nMedium - 4 Hours\nLow - 8 Hours",
          enterprise: "Critical - 15 Mins\nHigh - 30 Mins\nMedium - 2 Hours\nLow - 4 Hours",
          managedServiceRemote: "All Priority - Immediate",
          managedServiceOnsite: "All Priority - Immediate"
        },
        {
          feature: "Yearly Ticket Quota",
          basic: "60 Tickets*",
          standard: "240 Tickets*",
          professional: "600 Tickets*",
          enterprise: "960 Tickets*",
          managedServiceRemote: "1800 Tickets*",
          managedServiceOnsite: "1800 Tickets*"
        },
        {
          feature: "Microsoft Support Ticket Quota",
          basic: false,
          standard: "8",
          professional: "12",
          enterprise: "18",
          managedServiceRemote: "30",
          managedServiceOnsite: "30"
        },
        {
          feature: "Hours of Support",
          basic: "Mon-Fri, 10am-7pm",
          standard: "Mon-Fri, 10am-7pm",
          professional: "Mon-Fri, 10am-7pm",
          enterprise: "Mon-Fri, Any 4 Hours between 8am-8pm",
          managedServiceRemote: "Mon-Fri, Any 8 Hours between 8am-8pm",
          managedServiceOnsite: "Mon-Fri, Any 8 Hours between 8am-8pm"
        }
      ]
    },
    {
      name: "Additional Benefits",
      items: [
        {
          feature: "Live Webinars",
          basic: true,
          standard: true,
          professional: true,
          enterprise: true,
          managedServiceRemote: true,
          managedServiceOnsite: true
        },
        {
          feature: "Security Assessment",
          basic: false,
          standard: "Once a year",
          professional: "Once a year",
          enterprise: "Twice a year",
          managedServiceRemote: "Every quarter",
          managedServiceOnsite: "Every quarter"
        },
        {
          feature: "Cadence Calls",
          basic: false,
          standard: "Bi-yearly",
          professional: "Bi-yearly",
          enterprise: "Every quarter",
          managedServiceRemote: "Every month",
          managedServiceOnsite: "Every month"
        },
        {
          feature: "Knowledge Base Access",
          basic: true,
          standard: true,
          professional: true,
          enterprise: true,
          managedServiceRemote: true,
          managedServiceOnsite: true
        },
        {
          feature: "Adoption Report Shared",
          basic: false,
          standard: false,
          professional: false,
          enterprise: "Every quarter",
          managedServiceRemote: "Every month",
          managedServiceOnsite: "Every month"
        }
      ]
    },
    {
      name: "Value Adds",
      items: [
        {
          feature: "PowerShell Scripts",
          basic: false,
          standard: false,
          professional: "2 Scripts per year (Max 2 working days)",
          enterprise: "4 Scripts per year (Max 4 working days)",
          managedServiceRemote: "6 Scripts per year (Max 10 working days)",
          managedServiceOnsite: "8 Scripts per year (Max 10 working days)"
        },
        {
          feature: "PowerApps",
          basic: false,
          standard: false,
          professional: "Workflow and automation setup",
          enterprise: "Assistance with workflow and automation (Max 2 days)",
          managedServiceRemote: "Custom app development and integrations (Max 4 days)",
          managedServiceOnsite: "Custom app development and integrations (Max 4 days)"
        },
        {
          feature: "Management Connects",
          basic: false,
          standard: false,
          professional: false,
          enterprise: "Once a year",
          managedServiceRemote: "Once a year",
          managedServiceOnsite: "Once a year"
        },
        {
          feature: "Microsoft Training",
          basic: false,
          standard: false,
          professional: "Access to group sessions (Once a year)",
          enterprise: "Customized training sessions (Once a year)",
          managedServiceRemote: "Customized training sessions (Once a year)",
          managedServiceOnsite: "Customized training sessions (Once a year)"
        }
      ]
    }
  ]
};

// Helper function to render the cell content
const renderCell = (value: any) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-green-500" />
    ) : (
      <X className="h-5 w-5 text-red-500" />
    );
  }
  
  if (typeof value === "string" && value.includes("\n")) {
    return (
      <div className="whitespace-pre-line">
        {value}
      </div>
    );
  }
  
  return value;
};

const Services = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("managed-support");
  const [securityTab, setSecurityTab] = useState("security-services");
  const [activeMobileCategory, setActiveMobileCategory] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto space-y-16 animate-fade-in relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive Microsoft solutions tailored to your business needs
            </p>
            <div className="w-24 h-1 bg-axima-blue mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    className={`bg-black/40 border-white/10 text-white backdrop-blur-sm hover:bg-black/50 transition-all duration-300 h-full group relative overflow-hidden ${service.route ? 'cursor-pointer' : ''}`}
                    onClick={() => service.route && navigate(service.route)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-axima-blue/0 via-axima-blue/5 to-axima-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-axima-blue/20 text-axima-blue">
                          <Icon className="w-6 h-6" />
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-300">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-300 flex items-center">
                            <span className="mr-2 text-axima-blue">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Security Assessment Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Security Assessment Services</h2>
            
            <Tabs defaultValue="security-services" className="w-full" onValueChange={setSecurityTab}>
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="security-services">Security Services</TabsTrigger>
                <TabsTrigger value="training-services">Training Services</TabsTrigger>
              </TabsList>
              
              <TabsContent value="security-services">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {securityAssessmentServices.map((service, index) => (
                    <Card key={index} className="bg-black/60 border border-axima-blue/20 hover:border-axima-blue transition-all duration-300 h-full">
                      <CardHeader className="p-6">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="p-3 rounded-full bg-axima-blue/20 text-axima-blue">
                            {index === 0 ? <ShieldCheck className="w-5 h-5" /> : 
                             index === 1 ? <FileText className="w-5 h-5" /> : 
                             <Shield className="w-5 h-5" />}
                          </div>
                          <CardTitle className="text-lg text-white">{service.service}</CardTitle>
                        </div>
                        {service.price && (
                          <div className="mt-2 bg-axima-blue/10 text-axima-blue px-3 py-1 rounded-full text-sm inline-block">
                            {service.price}
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <p className="text-gray-300 text-sm">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="training-services">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {trainingServices.map((service, index) => (
                    <Card key={index} className="bg-black/60 border border-axima-blue/20 hover:border-axima-blue transition-all duration-300 h-full">
                      <CardHeader className="p-6">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="p-3 rounded-full bg-axima-blue/20 text-axima-blue">
                            <BookOpen className="w-5 h-5" />
                          </div>
                          <CardTitle className="text-lg text-white">{service.service}</CardTitle>
                        </div>
                        {service.price && (
                          <div className="mt-2 bg-axima-blue/10 text-axima-blue px-3 py-1 rounded-full text-sm inline-block">
                            {service.price}
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <p className="text-gray-300 text-sm">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Support Package Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Managed Services & Support Packages Comparison</h2>
            
            {/* Desktop View - Complete Table */}
            <div className="hidden md:block">
              <Tabs defaultValue="managed-support" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="managed-support">General</TabsTrigger>
                  <TabsTrigger value="response-times">Response Times</TabsTrigger>
                  <TabsTrigger value="additional-benefits">Additional Benefits</TabsTrigger>
                  <TabsTrigger value="value-adds">Value Adds</TabsTrigger>
                </TabsList>
                
                {comparisonData.categories.map((category, index) => (
                  <TabsContent key={index} value={
                    index === 0 ? "managed-support" : 
                    index === 1 ? "response-times" : 
                    index === 2 ? "additional-benefits" : "value-adds"
                  }>
                    <div className="rounded-md border overflow-hidden">
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader className="bg-gray-800">
                            <TableRow>
                              <TableHead className="text-white w-[200px]">Feature</TableHead>
                              <TableHead className="text-white text-center">Basic</TableHead>
                              <TableHead className="text-white text-center">Standard</TableHead>
                              <TableHead className="text-white text-center">Professional</TableHead>
                              <TableHead className="text-white text-center">Enterprise</TableHead>
                              <TableHead className="text-white text-center">Managed Service<br/>(Remote)</TableHead>
                              <TableHead className="text-white text-center">Managed Service<br/>(Onsite)</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {category.items.map((item, itemIndex) => (
                              <TableRow key={itemIndex} className="border-t border-gray-700 hover:bg-gray-800/50">
                                <TableCell className="font-medium text-white">{item.feature}</TableCell>
                                <TableCell className="text-center text-gray-300">{renderCell(item.basic)}</TableCell>
                                <TableCell className="text-center text-gray-300">{renderCell(item.standard)}</TableCell>
                                <TableCell className="text-center text-gray-300">{renderCell(item.professional)}</TableCell>
                                <TableCell className="text-center text-gray-300">{renderCell(item.enterprise)}</TableCell>
                                <TableCell className="text-center text-gray-300">{renderCell(item.managedServiceRemote)}</TableCell>
                                <TableCell className="text-center text-gray-300">{renderCell(item.managedServiceOnsite)}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-xs text-gray-400">
                      * Additional ticket charges apply beyond this limit
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
            
            {/* Mobile View - Compact Service Cards */}
            <div className="md:hidden space-y-6">
              {/* Category Navigation */}
              <div className="overflow-x-auto pb-2 -mx-2 px-2">
                <div className="flex space-x-2 min-w-max">
                  {comparisonData.categories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeMobileCategory === index
                          ? "bg-axima-blue text-white"
                          : "bg-gray-800/60 text-gray-300 hover:bg-gray-700"
                      }`}
                      onClick={() => setActiveMobileCategory(index)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Selected Category Features */}
              <div className="space-y-4">
                {comparisonData.categories[activeMobileCategory].items.map((item, idx) => (
                  <CompactServiceTable key={idx}>
                    <CompactServiceRow
                      feature={item.feature}
                      plans={[
                        { name: "Basic", value: renderCell(item.basic) },
                        { name: "Standard", value: renderCell(item.standard) },
                        { name: "Professional", value: renderCell(item.professional) },
                        { name: "Enterprise", value: renderCell(item.enterprise) },
                        { name: "MS (Remote)", value: renderCell(item.managedServiceRemote) },
                        { name: "MS (Onsite)", value: renderCell(item.managedServiceOnsite) }
                      ]}
                    />
                  </CompactServiceTable>
                ))}
              </div>
              
              <div className="text-xs text-gray-400 pt-2">
                * Additional ticket charges apply beyond this limit
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
