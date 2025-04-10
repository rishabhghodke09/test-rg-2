
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Microsoft365ProductsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const features = [
  { 
    name: "Word", 
    description: "Create and edit professional documents",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_word.webp",
    color: "from-blue-500/20 to-blue-600/20",
    route: "/product/word"
  },
  { 
    name: "Excel", 
    description: "Powerful spreadsheet and data analysis",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_excel.webp",
    color: "from-green-500/20 to-green-600/20",
    route: "/product/excel"
  },
  { 
    name: "PowerPoint", 
    description: "Create impactful presentations",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_powerpoint.webp",
    color: "from-orange-500/20 to-orange-600/20",
    route: "/product/powerpoint"
  },
  { 
    name: "Teams", 
    description: "Collaborate and communicate in real-time",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_teams.webp",
    color: "from-purple-500/20 to-purple-600/20",
    route: "/product/teams"
  },
  { 
    name: "Outlook", 
    description: "Professional email and calendar management",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_outlook.webp",
    color: "from-blue-400/20 to-blue-500/20",
    route: "/product/outlook"
  },
  { 
    name: "OneDrive", 
    description: "Secure cloud storage and file sharing",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_onedrive.webp",
    color: "from-sky-400/20 to-sky-500/20",
    route: "/product/onedrive"
  },
  { 
    name: "SharePoint", 
    description: "Team collaboration and document management",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_sharepoint.webp",
    color: "from-teal-500/20 to-teal-600/20",
    route: "/product/sharepoint"
  },
  { 
    name: "Exchange", 
    description: "Enterprise email and calendar server",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_exchange.webp",
    color: "from-blue-600/20 to-blue-700/20",
    route: "/product/exchange"
  },
  { 
    name: "Intune", 
    description: "Mobile device and application management",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_intune.webp",
    color: "from-indigo-500/20 to-indigo-600/20",
    route: "/product/intune"
  },
  { 
    name: "Azure Information Protection", 
    description: "Data protection and compliance",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/azure_information_prot.webp",
    color: "from-cyan-500/20 to-cyan-600/20",
    route: "/product/aip"
  },
  { 
    name: "Publisher (PC only)", 
    description: "Desktop publishing and design",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_publisher.webp",
    color: "from-emerald-500/20 to-emerald-600/20",
    route: "/product/publisher"
  },
  { 
    name: "Access (PC only)", 
    description: "Database creation and management",
    logo: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_access.webp",
    color: "from-red-500/20 to-red-600/20",
    route: "/product/access"
  }
];

export function Microsoft365ProductsModal({
  open,
  onOpenChange,
}: Microsoft365ProductsModalProps) {
  const navigate = useNavigate();

  const handleProductClick = (route: string) => {
    onOpenChange(false);
    navigate(route);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[85vw] max-h-[85vh] p-0 bg-gradient-to-br from-gray-900 to-black border border-axima-blue/50 rounded-xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] rounded-xl pointer-events-none" />
        
        <DialogHeader className="p-8 border-b border-white/10 bg-black/40 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-axima-blue via-purple-500 to-axima-blue rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black rounded-full p-1">
                  <img
                    src="https://storage.googleapis.com/axima-website-content/logos/Microsoft_365.webp"
                    alt="Microsoft 365"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <DialogTitle className="text-3xl font-bold text-white">
                Microsoft 365 Products
              </DialogTitle>
            </div>
            <div className="px-4 py-1 bg-axima-blue/20 rounded-full border border-axima-blue/30 text-axima-blue text-sm">
              Comprehensive Productivity Tools
            </div>
          </div>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Explore the complete suite of Microsoft 365 applications designed to enhance productivity, collaboration, and security for your business.
          </p>
        </DialogHeader>
        
        <ScrollArea className="h-[calc(85vh-150px)]" type="always">
          <div className="p-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={item}>
                  <Card
                    onClick={() => handleProductClick(feature.route)}
                    className={`relative overflow-hidden cursor-pointer border-0 h-full bg-gradient-to-br ${feature.color} backdrop-blur-sm hover:scale-105 transition-all duration-300 group`}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#9b87f5]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="p-6 flex flex-col items-center relative z-10 h-full">
                      <div className="flex-1 flex flex-col items-center justify-center mb-4">
                        <div className="p-4 rounded-full bg-white/10 mb-4 group-hover:bg-white/20 transition-colors duration-300 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <img 
                            src={feature.logo} 
                            alt={feature.name}
                            className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-axima-blue transition-colors">
                          {feature.name}
                        </h3>
                        <p className="text-gray-300 text-center text-sm mb-4">
                          {feature.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center mt-auto">
                        <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">View Details</span>
                        <ArrowRight className="w-4 h-4 ml-2 text-white/50 group-hover:text-axima-blue group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
