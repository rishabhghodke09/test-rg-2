import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Star, Trophy, Settings, Users, Rocket, CheckCircle, ArrowRight } from "lucide-react";

const productDetails: Record<string, {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
}> = {
  "word": {
    title: "Microsoft Word",
    description: "Microsoft Word is a powerful word-processing application developed by Microsoft, widely used for creating, editing, formatting, and sharing documents. It is part of the Microsoft Office suite and is available on Windows, macOS, and cloud-based platforms like Microsoft 365. Word is designed to handle everything from simple text documents to complex reports, resumes, and collaborative projects.",
    image: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_word.webp",
    features: [
      "Text Editing & Formatting",
      "Templates & Smart Art",
      "Collaboration Tools",
      "Spell & Grammar Check",
      "AutoSave & Recovery",
      "Mail Merge",
      "Table & Chart Insertion",
      "Voice Typing & Dictation",
      "PDF Support",
      "Add-ins & Macros"
    ],
    benefits: [
      "User-Friendly Interface",
      "Versatile Document Creation",
      "Cloud Integration",
      "Collaboration & Sharing",
      "Professional Formatting & Templates",
      "Time-Saving Features",
      "Security & Data Protection"
    ]
  },
  "excel": {
    title: "Microsoft Excel",
    description: "Microsoft Excel is a powerful spreadsheet application developed by Microsoft, widely used for organizing, analyzing, and visualizing data. It is part of the Microsoft Office suite and is available on Windows, macOS, and cloud-based platforms like Microsoft 365. Excel offers a range of features for working with numbers, formulas, charts, and large datasets, making it a popular tool for business, finance, education, and personal use.",
    image: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_excel.webp",
    features: [
      "Formulas & Functions",
      "Data Validation",
      "Pivot tables",
      "Data Validation",
      "Charts & Graphs",
      "Data Filtering & Sorting",
      "Cell Referencing",
      "Integration with Power BI"
    ],
    benefits: [
      "Data Organization",
      "Data Analysis & Calculation",
      "Visualization Tools",
      "Automation & Efficiency",
      "Collaboration & Sharing",
      "Cross-Platform Compatibility",
      "Integration with Other Tools"
    ]
  },
  "powerpoint": {
    title: "Microsoft PowerPoint",
    description: "Microsoft PowerPoint is a widely used presentation software developed by Microsoft, designed to create visually engaging slideshows for various purposes such as business meetings, academic presentations, and personal projects. Part of the Microsoft Office suite, PowerPoint allows users to combine text, images, videos, charts, and animations into professional presentations that can be easily shared and presented on different devices.",
    image: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_powerpoint.webp",
    features: [
      "Slide Layouts & Templates",
      "Multimedia Integration",
      "Animations & Transitions",
      "Smart Guides & Alignment Tools",
      "Presenter Tools",
      "Collaboration Features",
      "Slide Master",
      "Integration with Other Office Tools",
      "Cloud Sharing & Access"
    ],
    benefits: [
      "Easy-to-Use Interface",
      "Visual Impact",
      "Customization Options",
      "Collaboration & Sharing",
      "Cross-Platform Compatibility",
      "Versatility",
      "Cloud Integration"
    ]
  },
  "teams": {
    title: "Microsoft Teams",
    description: "Microsoft Teams is a collaboration and communication platform developed by Microsoft, designed to help teams and organizations streamline work processes, enhance communication, and improve productivity. As part of the Microsoft 365 suite, Teams offers a comprehensive solution for messaging, video conferencing, file sharing, and collaboration on documents, all in one place. It integrates with other Microsoft Office applications and third-party tools, making it a central hub for teamwork.",
    image: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_teams.webp",
    features: [
      "Team Channels",
      "Chat Functionality",
      "Video Conferencing",
      "File Sharing & Collaboration",
      "Task Management & Planner",
      "App Integrations",
      "Search & Command Bar",
      "Meeting Scheduling",
      "Customizable Notifications",
      "Live Events"
    ],
    benefits: [
      "Enhanced Collaboration",
      "Integrated Communication",
      "Improved Productivity",
      "Cloud-Based Access",
      "Security & Compliance",
      "Scalability",
      "Customization & Integration"
    ]
  },
  "outlook": {
    title: "Microsoft Outlook",
    description: "Microsoft Outlook is an email management software developed by Microsoft, used for managing emails, calendars, tasks, and contacts. Part of the Microsoft 365 suite, Outlook is available as both a desktop application and a web-based service, providing an efficient and secure platform for personal and business communication. It integrates seamlessly with other Microsoft Office applications, making it a comprehensive solution for managing day-to-day communication and scheduling.",
    image: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_outlook.webp",
    features: [
      "Email Management",
      "Calendar & Scheduling",
      "Contact Management",
      "Task Lists",
      "Focused Inbox",
      "Email Encryption",
      "Quick Steps & Automation",
      "Customizable Filters & Folders",
      "Integration with OneDrive & SharePoint",
      "Offline Access",
      "Rules & Alerts"
    ],
    benefits: [
      "Streamlined Communication",
      "Integrated Calendar",
      "Task Management",
      "Enhanced Security",
      "Cross-Platform Accessibility",
      "Efficient Search Functionality",
      "Integration with Microsoft 365"
    ]
  },
  "onedrive": {
    title: "Microsoft OneDrive",
    description: "Microsoft OneDrive is a cloud storage service that allows users to store, share, and access files securely from anywhere. As part of the Microsoft 365 suite, OneDrive integrates seamlessly with applications like Word, Excel, PowerPoint, and Teams, enabling real-time collaboration and document management. With advanced security features, automatic syncing, and accessibility across multiple devices, OneDrive provides a reliable solution for personal and business cloud storage needs.",
    image: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_onedrive.webp",
    features: [
      "Cloud File Storage",
      "File Sharing & Permissions",
      "Real-Time Collaboration",
      "File Version History",
      "OneDrive Personal Vault",
      "Camera Upload",
      "Sync with Windows File Explorer",
      "Ransomware Detection & Recovery",
      "Microsoft Teams & SharePoint Integration",
      "Large File Support",
      "Mobile & Web Access"
    ],
    benefits: [
      "Anywhere Access",
      "Seamless Collaboration",
      "Automatic Syncing",
      "Secure Storage",
      "File Recovery",
      "Integration with Microsoft 365",
      "Offline Access",
      "Cost-Effective Storage"
    ]
  },
  "sharepoint": {
    title: "Microsoft Sharepoint",
    description: "Microsoft SharePoint is a web-based collaboration platform that allows organizations to store, manage, and share documents, data, and resources in a centralized and secure environment. As part of Microsoft 365, SharePoint integrates seamlessly with Office apps, OneDrive, and Microsoft Teams, enabling teams to collaborate efficiently, automate workflows, and manage content effectively. It is widely used for intranet portals, document management, and business process automation.",
    image: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_sharepoint.webp",
    features: [
      "Document Libraries",
      "Team Sites & Communication Sites",
      "Co-Authoring & Real-Time Collaboration",
      "Role-Based Access Control",
      "Workflow Automation",
      "Metadata & Search Functionality",
      "Custom Lists & Databases",
      "SharePoint Integrations",
      "Customizable Web Parts",
      "AI-Powered Insights",
      "Mobile-Friendly Access"
    ],
    benefits: [
      "Centralized Document Management",
      "Seamless Team Collaboration",
      "Enhanced Security & Compliance",
      "Automated Workflows",
      "Customizable Intranet Portals",
      "Version Control & File Recovery",
      "Mobile & Remote Access",
      "Integration with Microsoft 365"
    ]
  },
  "exchange": {
    title: "Microsoft Exchange",
    description: "Microsoft Exchange is a cloud-based and on-premises email and calendaring server designed for businesses and organizations. It provides a secure and scalable communication platform that integrates with Microsoft Outlook, Microsoft 365, and other productivity tools. Exchange enables seamless email management, shared calendars, contact organization, and collaboration across teams, ensuring efficient business communication.",
    image: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_exchange.webp",
    features: [
      "Business-Class Email",
      "Shared Mailboxes",
      "Advanced Spam & Malware Protection",
      "Calendar & Meeting Scheduling",
      "Mobile Device Support",
      "Outlook Integration",
      "Email Archiving & Retention Policies",
      "Mailbox Delegation",
      "Automatic Email Sorting & Rules",
      "Offline Access",
      "Hybrid Deployment Options"
    ],
    benefits: [
      "Reliable Email Communication",
      "Enhanced Security & Compliance",
      "Seamless Integration",
      "Advanced Calendar & Scheduling",
      "Anywhere Access",
      "Scalability for Businesses",
      "Data Loss Prevention (DLP)",
      "Automatic Backups & Recovery"
    ]
  },
  "intune": {
    title: "Microsoft Intune",
    description: "Microsoft Intune is a cloud-based endpoint management solution that enables organizations to securely manage devices, applications, and data. It helps IT administrators enforce security policies, configure devices, and control access to corporate resources across multiple platforms, including Windows, macOS, iOS, and Android. Intune is part of Microsoft's Endpoint Manager suite and integrates seamlessly with Microsoft 365 for enhanced security and compliance.",
    image: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_intune.webp",
    features: [
      "Mobile Device Management (MDM)",
      "Mobile Application Management (MAM)",
      "Conditional Access",
      "Windows Autopilot",
      "App Deployment & Management",
      "Remote Wipe & Data Protection",
      "Compliance Policies & Reporting",
      "Self-Service Company Portal",
      "Integration with Microsoft Defender",
      "Role-Based Access Control (RBAC)",
      "Cloud-Based & Scalable"
    ],
    benefits: [
      "Unified Device Management",
      "Enhanced Security & Compliance",
      "Seamless Integration with Microsoft 365",
      "App & Data Protection",
      "Zero-Touch Deployment",
      "Remote Management & Updates",
      "Improved Productivity",
      "Cost Efficiency"
    ]
  },
  "aip": {
    title: "Azure Information Protection",
    description: "Azure Information Protection (AIP) is a cloud-based security solution from Microsoft that helps organizations classify, label, and protect sensitive data across emails, documents, and cloud services. It enables businesses to enforce data security policies, prevent unauthorized access, and ensure compliance with regulatory requirements. AIP integrates with Microsoft 365 applications, allowing seamless data protection within Office apps, OneDrive, SharePoint, and more.",
    image: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/azure_information_prot.webp",
    features: [
      "Data Classification & Sensitivity Labels",
      "Automatic & Manual Labeling",
      "Document & Email Encryption",
      "Access Control & Usage Rights",
      "Policy-Based Protection",
      "Integration with Microsoft 365 Apps",
      "Secure External Sharing",
      "Cloud & On-Premises Support",
      "Audit & Activity Tracking",
      "Conditional Access Policies",
      "Machine Learning-Based Recommendations"
    ],
    benefits: [
      "Data Classification & Labeling",
      "Enhanced Data Security",
      "Seamless Integration",
      "Compliance & Regulatory Support",
      "Secure Collaboration",
      "Policy-Based Automation",
      "Prevent Data Leakage",
      "Visibility & Monitoring"
    ]
  },
  "publisher": {
    title: "Microsoft Publisher",
    description: "Microsoft Publisher is a desktop publishing application designed for creating professional-quality marketing materials, documents, and visual content. Unlike Microsoft Word, which focuses on text-based documents, Publisher provides advanced layout and design tools for creating brochures, flyers, newsletters, business cards, posters, and more. It is ideal for small businesses, educators, and individuals who need an easy-to-use design tool without requiring advanced graphic design skills.",
    image: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_publisher.webp",
    features: [
      "Pre-Designed Templates",
      "Drag-and-Drop Editing",
      "Customizable Fonts & Styles",
      "Image Editing & Placement Tools",
      "Text Effects & Word Art ",
      "Mail Merge & Personalization",
      "Multiple File Export Options",
      "High-Quality Printing Support",
      "Alignment & Layout Guides",
      "Integration with OneDrive & SharePoint",
    ],
    benefits: [
      "User-Friendly Interface",
      "Professional-Looking Designs",
      "Customizable Templates",
      "Cost-Effective",
      "Seamless Integration with Microsoft Office",
      "Versatile Output Options",
      "Print-Ready Documents",
      "Ideal for Small Businesses & Educators"
    ]
  },
  "access": {
    title: "Microsoft Access",
    description: "Microsoft Access is a relational database management system (RDBMS) that allows users to create, manage, and analyze databases. It is part of the Microsoft 365 suite and provides a user-friendly interface for designing databases without requiring extensive SQL knowledge. Access is commonly used for business applications, inventory tracking, customer management, and data analysis, making it a powerful tool for individuals and small to medium-sized businesses.",
    image: "https://storage.googleapis.com/axima-website-content/logos/microsoft_logos/microsoft_access.webp",
    features: [
      "Relational Database Management",
      "Table & Query Design Tools",
      "Forms for Data Entry",
      "Report Generation",
      "SQL Query Support",
      "Integration with External Data Sources",
      "Macros & Automation",
      "Multi-User Collaboration",
      "Data Import & Export",
      "Pre-Built Templates",
    ],
    benefits: [
      "User-Friendly Interface",
      "Efficient Data Management",
      "Customizable Database Applications",
      "Cost-Effective",
      "Seamless Integration with Microsoft Office",
      "Multi-User Support",
      "Automated Data Processing",
      "Scalability",
      "Data Security & Permissions",
      "Custom Reports & Queries"
    ]
  },
  "jumpcloud": {
    title: "Jumpcloud",
    description: "JumpCloud is a cloud directory platform that helps companies manage users, devices, and applications. It unifies IT resources in a company's infrastructure, including on-premises devices and applications, cloud-based services, and more.JumpCloud is built for companies that use a diverse set of operating systems such as Mac OS and Linux, and/or communicate via Google Workspace. It partners and integrates with other organizations, including MiQ Digital, AkitaBox, and Classpass.",
    image: "https://storage.googleapis.com/axima-website-content/logos/Jumpcloud-01.webp",
    features: [
      "Directory-as-a-Service (DaaS)",
      "Single Sign-On (SSO)",
      "Multi-Factor Authentication (MFA)",
      "User Lifecycle Management",
      "Device Management",
      "Active Directory Integrations",
      "Audit Logs and Reporting",
      "API Access",
      "Cross-Platform Support",
      "Integration with Cloud Services",
      "Zero Trust Security"
    ],
    benefits: [
      "Centralized Identity and Access Management",
          "Remote and Hybrid Work Support",
          "Automation of User Lifecycle Management",
          "Integration with Cloud and On-Premises Services",
          "Compliance and Auditing",
          "Streamlined IT Operations",
          "Seamless Integration with Existing IT Infrastructure"
    ]
  },
  "atera": {
    title: "Atera",
    description: "Atera is a platform that offers a variety of tools for IT departments and MSPs, including Remote Monitoring and Management (RMM), Professional Services Automation (PSA), Help Desk, remote support, billing,and reporting.Atera can also integrate with third-party software, such as Splashtop, AnyDesk, TeamViewer,and ConnectWise. Some of the tools Atera offers include.",
    image: "https://storage.googleapis.com/axima-website-content/logos/Atera-01.webp",
    features: [
      "Remote Monitoring and Management (RMM)",
          "Professional Services Automation (PSA)",
          "Remote Access",
          "Patch Management",
          "IT Automation Rules",
          "Network Discovery",
          "Reporting and Analytics",
          "Action AI",
          "Helpdesk & Ticketing"
    ],
    benefits: [
      "All-in-one solution for RMM (Remote Monitoring & Management) & PSA (Professional Services Automation)",
      "Auto-Pilot: AI-driven ticket solutions,auto-resolution",
      "Unlimited Devices - Pay Per Technician",
      "Live chat support 24/7",
      "Fully Customizable Reporting & Analytics",
      "Real-Time Monitoring and Alerts",
      "IT Reporting and analytics"
    ]
  },
  "spin-ai": {
    title: "Spin AI",
    description: "Spin.ai is an advanced data security and protection platform that specializes in safeguarding data within SaaS applications.",
    image: "https://storage.googleapis.com/axima-website-content/logos/Spin.ai.webp",
    features: [
      "SaaS Data Backup",
      "Granular Recovery",
      "Data Security & Compliance",
      "Automated Disaster Recovery",
      "User Access Management",
      "Data Integrity Management",
      "Data Migration",
      "Customizable Retention Policies",
      "Multi-Account Management",
      "Cross-platform Compatibility"
    ],
    benefits: [
      "Comprehensive SaaS Data Protection",
      "Improved Security and Compliance",
      "Reduced Downtime",
      "Cost-Effective Storage",
      "Data Integrity Assurance",
      "Simplified Disaster Recovery",
      "Easy SaaS Data Migration",
      "Centralized Management",
      "Increased Productivity",
      "Role-Based Access Control"
    ]
  },
  "hycu": {
    title: "HYCU",
    description: "HYCU is a Data Protection as a Service (DaaS) platform.HYCU delivers a secure data protection service designed to give you full control, visibility,and availability of your protected applications and databases. HYCU's services include data protection, migration, disaster recovery, and ransomware protection for on-premises,cloud-native, and SaaS environments. HYCU's Protege platform supports a wide range of sources,including VMware, Nutanix, AWS, Microsoft, Azure,and Google Cloud.",
    image: "https://storage.googleapis.com/axima-website-content/logos/Hycu-2-01.webp",
    features: [
      "Backup & Recovery",
          "Disaster Recovery",
          "Ransomware Protection",
          "Security & Compliance",
          "Hybrid & Multi-Cloud"
    ],
    benefits: [
      "Simple Deployment and Management",
          "Multi-Cloud Support",
          "Efficient Data Protection",
          "Fast and Reliable Recovery",
          "Cost Efficiency",
          "Compliance and Security",
          "Unified Data Management",
          "No Vendor Lock-In",
    ]
  },
  "zoom": {
    title: "ZOOM",
    description: "Zoom Workspace refers to the broader suite of collaboration tools and features offered by Zoom that go beyond just video meetings. It is designed to facilitate communication and collaboration within teams, businesses, and organizations. This includes features that help streamline workflows, communication, and project management. It is part of Zoom's move to provide a more integrated platform for businesses..",
    image: "https://storage.googleapis.com/axima-website-content/logos/Zoom-01.webp",
    features: [
      "Video Conferencing",
          "Team Chat",
          "Screen Sharing",
          "Cloud Recording",
          "Zoom Rooms",
          "Security Features",
          "Cross-Platform Compatibility",
          "Multi-Language Support"
    ],
    benefits: [
      "Easy to Use",
      "High-Quality Video and Audio",
      "Enhanced Collaboration",
      "Scalable Solutions",
      "Cost-Effective",
      "Remote Work and Learning",
      "Global Connectivity",
      "Secure Communication"
    ]
  },
  "onepassword": {
    title: "1Password",
    description: "1Password to secure sign-ins to the applications and websites they use every day. We believe there shouldn't be any conflict between security and productivity. That's why we build modern, accessible identity security and access management solutions designed for the way people work and live today.",
    image: "https://storage.googleapis.com/axima-website-content/logos/OnePassword-01.webp",
    features: [
      "Password Vault",
      "Cross-Platform Synchronization",
      "Security Features",
      "Password Auditing & Health",
      "Browser Integration",
      "Emergency Kit",
      "Secure Notes",
      "Multiple Vaults",
      "Travel Mode"
    ],
    benefits: [
      "Enhanced Security",
      "Convenience and Ease of Use",
      "Password Management",
      "Cross-Platform Support",
      "Secure Notes and Document Storage",
      "Family and Team Management"
    ]
  },
  "scaledino": {
    title: "Scaledino",
    description: "ScaleDino is a cloud-based marketing and business management platform that helps users with email signatures, CRM.",
    image: "https://storage.googleapis.com/axima-website-content/logos/ScaleDino.webp",
    features: [
      "Email signature",
      "Lead management tool",
    ],
    benefits: [
      "User Management",
      "Brand Consistency",
      "Centralized Management",
      "Marketing & Promotions"
    ]
  },
  "scalefusion": {
    title: "Scalefusion",
    description: "Scalefusion is a powerful all-in-one solution that unifies endpoint management, zero trust access, and endpoint security into a single platform with one agent. Scalefusion offers a comprehensive suite of products engineered to simplify endpoint, user, and access management for IT teams.With over 10,000+ businesses in 120+ countries, Scalefusion ensures your business is always one step ahead.",
    image: "https://storage.googleapis.com/axima-website-content/logos/Scalefusion-01.webp",
    features: [
      "Application & Content Management",
      "Automation & Workflows",
      "Kiosk Mode",
      "Conditional SSO",
      "Device Authentication",
      "Virtual Private Network Tunnel",
      "Web Content Filtering (Secure Web Gateway)"
    ],
    benefits: [
      "Unified Endpoint Management",
      "Enhanced Security",
      "Cost-Effective",
      "Scalability"
    ]
  },
  "flexisign": {
    title: "Flexisign",
    description: "FlexiSign is a digital signature and document management solution that streamlines the signing process for businesses of all sizes.",
    image: "https://storage.googleapis.com/axima-website-content/logos/Flexisign-logo-02.webp",
    features: [
      "Electronic signatures",
      "Document workflow automation",
      "Template management",
      "Audit trails",
      "Multi-party signing",
      "Mobile signing capability",
      "API integration",
      "Compliance features"
    ],
    benefits: [
      "Faster document processing",
      "Reduced paper waste",
      "Enhanced security",
      "Improved compliance",
      "Better tracking and management",
      "Cost savings",
      "Environmental sustainability"
    ]
  }
};

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productId ? productDetails[productId.toLowerCase()] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 tech-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white">Product not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 tech-background">
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
              src={product.image} 
              alt={product.title} 
              className="w-24 h-24 object-contain"
            />
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">{product.title}</h1>
              <p className="text-gray-300 text-lg">{product.description}</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.features.map((feature, index) => (
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
              <h2 className="text-2xl font-bold text-white mb-4">Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.benefits.map((benefit, index) => (
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

export default ProductDetails;
