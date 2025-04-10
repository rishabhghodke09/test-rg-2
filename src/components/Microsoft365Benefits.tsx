import { Card } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const features = [
  { 
    name: "Word", 
    description: "Create and edit professional documents",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_word.webp",
    color: "from-blue-500/20 to-blue-600/20"
  },
  { 
    name: "Excel", 
    description: "Powerful spreadsheet and data analysis",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_excel.webp",
    color: "from-green-500/20 to-green-600/20"
  },
  { 
    name: "PowerPoint", 
    description: "Create impactful presentations",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_powerpoint.webp",
    color: "from-orange-500/20 to-orange-600/20"
  },
  { 
    name: "Teams", 
    description: "Collaborate and communicate in real-time",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_teams.webp",
    color: "from-purple-500/20 to-purple-600/20"
  },
  { 
    name: "Outlook", 
    description: "Professional email and calendar management",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_outlook.webp",
    color: "from-blue-400/20 to-blue-500/20"
  },
  { 
    name: "OneDrive", 
    description: "Secure cloud storage and file sharing",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_onedrive.webp",
    color: "from-sky-400/20 to-sky-500/20"
  },
  { 
    name: "SharePoint", 
    description: "Team collaboration and document management",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_sharepoint.webp",
    color: "from-teal-500/20 to-teal-600/20"
  },
  { 
    name: "Exchange", 
    description: "Enterprise email and calendar server",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_exchange.webp",
    color: "from-blue-600/20 to-blue-700/20"
  },
  { 
    name: "Intune", 
    description: "Mobile device and application management",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_intune.webp",
    color: "from-indigo-500/20 to-indigo-600/20"
  },
  { 
    name: "Azure Information Protection", 
    description: "Data protection and compliance",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/azure_information_prot.webp",
    color: "from-cyan-500/20 to-cyan-600/20"
  },
  { 
    name: "Publisher (PC only)", 
    description: "Desktop publishing and design",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_publisher.webp",
    color: "from-emerald-500/20 to-emerald-600/20"
  },
  { 
    name: "Access (PC only)", 
    description: "Database creation and management",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_access.webp",
    color: "from-red-500/20 to-red-600/20"
  }
];

export const Microsoft365Benefits = () => {
  const navigate = useNavigate();

  const handleProductClick = (productName: string) => {
    const route = productName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/product/${route}`);
  };
  
  return (
    <div id="microsoft365-benefits" className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Microsoft 365 (Formerly Microsoft Office 365)
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A cloud solution that helps businesses work more efficiently by providing secure, 
              anywhere access to emails, office apps, and collaboration tools.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card 
                      onClick={() => handleProductClick(feature.name)}
                      className={`relative group cursor-pointer border-0 bg-gradient-to-br ${feature.color} backdrop-blur-sm hover:scale-105 transition-all duration-300 h-full flex flex-col`}
                    >
                      <div className="p-6 flex flex-col items-center justify-between h-full">
                        <div className="flex flex-col items-center">
                          <img 
                            src={feature.logo} 
                            alt={feature.name}
                            className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300"
                          />
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-axima-blue transition-colors">
                            {feature.name}
                          </h3>
                        </div>
                        <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-axima-blue group-hover:translate-x-1 transition-all duration-300 mt-4" />
                      </div>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-black/90 border border-axima-blue/50 backdrop-blur-lg">
                    <div className="flex gap-4 items-start">
                      <img src={feature.logo} alt={feature.name} className="w-12 h-12" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">{feature.name}</h4>
                        <p className="text-sm text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
