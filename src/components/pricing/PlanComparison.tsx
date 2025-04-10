import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Check, X, ChevronDown, ChevronUp, Minus } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type FeatureSupport = boolean | 'partial';

type CategoryFeature = {
  name: string;
  description: string;
  basic: FeatureSupport;
  standard: FeatureSupport;
  premium: FeatureSupport;
  apps: FeatureSupport;
};

type Category = {
  name: string;
  features: CategoryFeature[];
  isExpanded: boolean;
  basic: FeatureSupport;
  standard: FeatureSupport;
  premium: FeatureSupport;
  apps: FeatureSupport;
};

const FeatureIcon = ({ support }: { support: FeatureSupport }) => {
  if (support === 'partial') {
    return (
      <div className="flex flex-col items-center">
        <Check className="w-5 h-5 text-yellow-500" />
        <span className="text-xs text-yellow-500 mt-1">Limited Capabilities</span>
      </div>
    );
  }
  return support ? (
    <Check className="w-5 h-5 text-green-500 mx-auto" />
  ) : (
    <X className="w-5 h-5 text-red-500 mx-auto" />
  );
};

export const PlanComparison = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      name: "Email and calendar",
      isExpanded: true,
      basic: true,
      standard: true,
      premium: true,
      apps: false,
      features: [
        {
          name: "Use a custom business email (name@yourbusiness.com)",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "Host and administer email with a 50-GB mailbox",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "Easily schedule meetings and respond to invitations using shared calendars",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "Manage your calendar, share available meeting times, schedule meetings, and get reminders",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: false,
        }
      ]
    },
    {
      name: "File storage and sharing",
      isExpanded: false,
      basic: true,
      standard: true,
      premium: true,
      apps: 'partial',
      features: [
        {
          name: "Collaborate in the same file with real-time coauthoring and editing",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: true,
        },
        {
          name: "Access your files from your computer, tablet, or phone",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: true,
        },
        {
          name: "Keep your files securely stored, up to date, and accessible across devices",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "Engage and inform with intelligent video using Microsoft Stream",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: false,
        }
      ]
    },
    {
      name: "Teamwork and communication",
      isExpanded: false,
      basic: true,
      standard: true,
      premium: true,
      apps: false,
      features: [
        {
          name: "Chat one-on-one or in a group chat, pin chats, and save messages for quick access",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "Host secure, organized meetings with audio, video, screen-sharing, and the option to record",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "Create team sites to share information, content, and files throughout your intranet using SharePoint",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "Invite people outside of your business to your meetings—even those without Teams accounts",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: false,
        }
      ]
    },
    {
      name: "Standard security and compliance",
      isExpanded: false,
      basic: true,
      standard: true,
      premium: true,
      apps: true,
      features: [
        {
          name: "Help protect your business against spam and malware with cloud-based email filtering",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: true,
        },
        {
          name: "Manage security threats by creating password policies",
          description: "",
          basic: true,
          standard: false,
          premium: true,
          apps: true,
        },
        {
          name: "Secure access with multifactor authentication",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: true,
        },
        {
          name: "Control access to business information with security groups and custom permissions",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: true,
        }
      ]
    },
    {
      name: "Support and deployment",
      isExpanded: false,
      basic: true,
      standard: true,
      premium: true,
      apps: true,
      features: [
        {
          name: "Contact phone and online support anytime",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: true,
        },
        {
          name: "Get technical support for installation, setup, configuration, and general usage",
          description: "",
          basic: true,
          standard: false,
          premium: true,
          apps: true,
        },
        {
          name: "Access help and troubleshooting tools, videos, articles, and forums",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: true,
        },
        {
          name: "Have peace of mind with a financially backed 99% uptime guarantee",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: true,
        }
      ]
    },
    {
      name: "Web and mobile apps",
      isExpanded: false,
      basic: true,
      standard: true,
      premium: true,
      apps: 'partial',
      features: [
        {
          name: "Word, Excel, PowerPoint, OneNote",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: true,
        },
        {
          name: "Outlook",
          description: "",
          basic: true,
          standard: false,
          premium: true,
          apps: 'partial',
        },
        {
          name: "Teams, Bookings, Forms, Microsoft Lists, Planner, SharePoint, Stream",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: false,
        }
      ]
    },
    {
      name: "Installable desktop apps",
      isExpanded: false,
      basic: false,
      standard: true,
      premium: true,
      apps: 'partial',
      features: [
        {
          name: "Microsoft 365 apps for PC and Mac, including Word, Excel, PowerPoint, Outlook, and OneNote",
          description: "",
          basic: false,
          standard: true,
          premium: true,
          apps: true,
        },
        {
          name: "PC-only apps, including Microsoft Access and Microsoft Publisher",
          description: "",
          basic: false,
          standard: false,
          premium: true,
          apps: 'partial',
        }
      ]
    },
    {
      name: "AI powered assistance",
      isExpanded: false,
      basic: 'partial',
      standard: 'partial',
      premium: 'partial',
      apps: 'partial',
      features: [
        {
          name: "Get intelligent writing assistance with advanced grammar and style suggestions using Editor",
          description: "",
          basic: false,
          standard: true,
          premium: true,
          apps: true,
        },
        {
          name: "Use Microsoft Copilot, an everyday AI companion, with security, privacy, identity, and compliance inherited from your existing Microsoft 365 policies",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: true,
        },
        {
          name: "Integrate your work content and context into AI-powered chat to boost creativity with Microsoft 365 Copilot in apps like in Word, PowerPoint, and Teams",
          description: "",
          basic: 'partial',
          standard: 'partial',
          premium: 'partial',
          apps: 'partial',
        }
      ]
    },
    {
      name: "Project and customer relationship management",
      isExpanded: false,
      basic: 'partial',
      standard: true,
      premium: true,
      apps: true,
      features: [
        {
          name: "Easily create, manage, and share schedules and tasks with your team",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "Manage workflow and track important tasks with Microsoft Lists",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "Quickly and easily create custom surveys and analyze results with Forms",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: false
        },
        {
          name: "Streamline client scheduling and manage appointments with Bookings",
          description: "",
          basic: true,
          standard: true,
          premium: true,
          apps: false
        },
        {
          name: "Collaborate in workspaces to organize your projects, both large and small, with Microsoft Loop ",
          description: "",
          basic: false,
          standard: true,
          premium: true,
          apps: false
        }
      ]
    },
    {
      name: "Video editing",
      isExpanded: false,
      basic: false,
      standard: true,
      premium: true,
      apps: false,
      features: [
        {
          name: "Edit videos using basic tools, such as trimming, cropping, and speed control",
          description: "",
          basic: false,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "Create high-quality recordings and set dimensions for upload to multiple platforms",
          description: "",
          basic: false,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "Collaborate live or asynchronously in a video-editing workspace",
          description: "",
          basic: false,
          standard: true,
          premium: true,
          apps: false,
        }
      ]
    },
    {
      name: "Webinars and live events",
      isExpanded: false,
      basic: false,
      standard: true,
      premium: true,
      apps: false,
      features: [
        {
          name: "Schedule and host webinars for up to 300 people",
          description: "",
          basic: false,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "Host webinars that include attendee registration pages and email confirmations",
          description: "",
          basic: false,
          standard: true,
          premium: true,
          apps: false,
        },
        {
          name: "Get reporting data on webinar registration and meeting attendance",
          description: "",
          basic: false,
          standard: true,
          premium: true,
          apps: false,
        }
      ]
    },
    {
      name: "Advanced cyberattack protection",
      isExpanded: false,
      basic: false,
      standard: true,
      premium: true,
      apps: false,
      features: [
        {
          name: "Enable enterprise-grade endpoint security across devices to protect against ransomware and other cyberthreats",
          description: "",
          basic: false,
          standard: false,
          premium: true,
          apps: false,
        },
        {
          name: "Help protect against email threats, such as phishing that’s hidden in email attachments and links",
          description: "",
          basic: false,
          standard: false,
          premium: true,
          apps: false,
        },
        {
          name: "Restrict access to sensitive business information with information rights management",
          description: "",
          basic: false,
          standard: false,
          premium: true,
          apps: false,
        },
        {
          name: "Help employees securely access business apps wherever they work with conditional access, while helping prevent unauthorized access",
          description: "",
          basic: false,
          standard: false,
          premium: true,
          apps: false,
        }
      ]
    },
    {
      name: "Device management",
      isExpanded: false,
      basic: false,
      standard: true,
      premium: true,
      apps: false,
      features: [
        {
          name: "Apply security policies to help protect work data on company-owned and employee devices",
          description: "",
          basic: false,
          standard: false,
          premium: true,
          apps: false,
        },
        {
          name: "Keep company data within approved apps across iOS, Android, and Windows PCs",
          description: "",
          basic: false,
          standard: false,
          premium: true,
          apps: false,
        },
        {
          name: "Remotely remove business data from lost or stolen devices",
          description: "",
          basic: false,
          standard: false,
          premium: true,
          apps: false,
        }
      ]
    }
  ]);

  const toggleCategory = (categoryIndex: number) => {
    setCategories(prevCategories => 
      prevCategories.map((category, index) => 
        index === categoryIndex 
          ? { ...category, isExpanded: !category.isExpanded }
          : category
      )
    );
  };

  return (
    <Card className="p-6 bg-black/40 border border-axima-blue/20">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Compare Plans Features</h2>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3 text-white">Features</TableHead>
              <TableHead className="text-center text-white">Business Basic</TableHead>
              <TableHead className="text-center text-white">Business Standard</TableHead>
              <TableHead className="text-center text-white">Business Premium</TableHead>
              <TableHead className="text-center text-white">Apps for Business</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category, categoryIndex) => (
              <>
                <TableRow 
                  key={`category-${categoryIndex}`}
                  className="hover:bg-axima-blue/10 cursor-pointer"
                  onClick={() => toggleCategory(categoryIndex)}
                >
                  <TableCell colSpan={1} className="font-medium text-white">
                    <div className="flex items-center gap-2">
                      {category.isExpanded ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                      {category.name}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <FeatureIcon support={category.basic} />
                  </TableCell>
                  <TableCell className="text-center">
                    <FeatureIcon support={category.standard} />
                  </TableCell>
                  <TableCell className="text-center">
                    <FeatureIcon support={category.premium} />
                  </TableCell>
                  <TableCell className="text-center">
                    <FeatureIcon support={category.apps} />
                  </TableCell>
                </TableRow>
                {category.isExpanded && category.features.map((feature, featureIndex) => (
                  <TableRow 
                    key={`feature-${categoryIndex}-${featureIndex}`}
                    className="hover:bg-axima-blue/10"
                  >
                    <TableCell className="pl-8">
                      <div>
                        <p className="text-white text-sm">{feature.name}</p>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <FeatureIcon support={feature.basic} />
                    </TableCell>
                    <TableCell className="text-center">
                      <FeatureIcon support={feature.standard} />
                    </TableCell>
                    <TableCell className="text-center">
                      <FeatureIcon support={feature.premium} />
                    </TableCell>
                    <TableCell className="text-center">
                      <FeatureIcon support={feature.apps} />
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};
