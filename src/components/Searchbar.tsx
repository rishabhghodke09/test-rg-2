import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

type SearchResult = {
  title: string;
  description: string;
  path: string;
  category: string;
};

const searchData: SearchResult[] = [
  // Home Page
  { 
    title: "Homepage", 
    description: "Main landing page of Axima Corporation",
    path: "/",
    category: "Pages"
  },
  
  // About Page
  { 
    title: "About Us", 
    description: "Learn about Axima Corporation",
    path: "/about",
    category: "Pages"
  },
  { 
    title: "Our Vision", 
    description: "Axima's vision and mission",
    path: "/about",
    category: "Pages"
  },
  
  // Products
  { 
    title: "Products", 
    description: "Browse all our products",
    path: "/products",
    category: "Pages"
  },
  { 
    title: "Microsoft 365", 
    description: "Complete cloud productivity solution",
    path: "/microsoft-365",
    category: "Products"
  },
  { 
    title: "Microsoft Azure", 
    description: "Cloud computing platform",
    path: "/microsoft-azure",
    category: "Products"
  },
  { 
    title: "Microsoft Azure (Jio Region)", 
    description: "Azure services from Jio data centers",
    path: "/microsoft-jioazure",
    category: "Products"
  },
  { 
    title: "Jumpcloud", 
    description: "Cloud directory service",
    path: "/product/jumpcloud",
    category: "Products"
  },
  { 
    title: "Atera", 
    description: "IT management platform",
    path: "/product/atera",
    category: "Products"
  },
  { 
    title: "Spin AI", 
    description: "Cloud data security",
    path: "/product/spin-ai",
    category: "Products"
  },
  { 
    title: "HYCU", 
    description: "Data protection solution",
    path: "/product/hycu",
    category: "Products"
  },
  { 
    title: "ZOOM", 
    description: "Video conferencing solution",
    path: "/product/zoom",
    category: "Products"
  },
  { 
    title: "1Password", 
    description: "Password management solution",
    path: "/product/onepassword",
    category: "Products"
  },
  { 
    title: "Scaledino", 
    description: "Cloud management platform",
    path: "/product/scaledino",
    category: "Products"
  },
  { 
    title: "Scalefusion", 
    description: "Mobile device management",
    path: "/product/scalefusion",
    category: "Products"
  },
  { 
    title: "FlexiSign", 
    description: "Digital signature solution",
    path: "/product/flexisign",
    category: "Products"
  },
  
  // Management Team
  { 
    title: "Punit Thakkar", 
    description: "Chairman",
    path: "/about",
    category: "Team"
  },
  { 
    title: "Akshay Thakkar", 
    description: "CEO",
    path: "/about",
    category: "Team"
  },
  { 
    title: "Ashika Suresh", 
    description: "Deputy General Manager",
    path: "/about",
    category: "Team"
  },
  
  // Services Pages
  { 
    title: "Services", 
    description: "Explore our service offerings",
    path: "/services",
    category: "Pages"
  },
  { 
    title: "Microsoft Copilot", 
    description: "AI-powered productivity assistant",
    path: "/copilot",
    category: "Services"
  },
  { 
    title: "Support Packages", 
    description: "IT support subscription plans",
    path: "/support-packages",
    category: "Services"
  },
  { 
    title: "Cloud Solutions", 
    description: "Enterprise cloud services",
    path: "/services",
    category: "Services"
  },
  { 
    title: "Business Transformation", 
    description: "Digital transformation services",
    path: "/services",
    category: "Services"
  },
  
  // Pricing
  { 
    title: "Plans & Pricing", 
    description: "View our subscription plans",
    path: "/plans",
    category: "Pages"
  },
  
  // Other Pages
  { 
    title: "Contact Us", 
    description: "Get in touch with Axima",
    path: "/contact",
    category: "Pages"
  },
  { 
    title: "FAQ", 
    description: "Frequently asked questions",
    path: "/faq",
    category: "Pages"
  },
  { 
    title: "Case Studies", 
    description: "Success stories and implementations",
    path: "/case-studies",
    category: "Pages"
  },
  { 
    title: "Privacy Policy", 
    description: "How we handle your data",
    path: "/privacy-policy",
    category: "Legal"
  },
  { 
    title: "Terms & Conditions", 
    description: "Legal terms of service",
    path: "/terms-conditions",
    category: "Legal"
  },
  { 
    title: "Refund Policy", 
    description: "Our refund and cancellation policies",
    path: "/refund-policy",
    category: "Legal"
  },
  
  // Microsoft Products
  { 
    title: "Word", 
    description: "Document creation and editing",
    path: "/product/word",
    category: "Microsoft Products"
  },
  { 
    title: "Excel", 
    description: "Spreadsheet and data analysis",
    path: "/product/excel",
    category: "Microsoft Products"
  },
  { 
    title: "PowerPoint", 
    description: "Presentation software",
    path: "/product/powerpoint",
    category: "Microsoft Products"
  },
  { 
    title: "Teams", 
    description: "Collaboration and communication",
    path: "/product/teams",
    category: "Microsoft Products"
  },
  { 
    title: "Outlook", 
    description: "Email and calendar management",
    path: "/product/outlook",
    category: "Microsoft Products"
  },
  { 
    title: "OneDrive", 
    description: "Cloud storage and file sharing",
    path: "/product/onedrive",
    category: "Microsoft Products"
  },
  { 
    title: "SharePoint", 
    description: "Team collaboration and intranet",
    path: "/product/sharepoint",
    category: "Microsoft Products"
  },
  { 
    title: "Exchange", 
    description: "Email hosting service",
    path: "/product/exchange",
    category: "Microsoft Products"
  },
  { 
    title: "Intune", 
    description: "Mobile device management",
    path: "/product/intune",
    category: "Microsoft Products"
  }
];

export function Searchbar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredResults = searchData.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  const groupedResults = filteredResults.reduce<Record<string, SearchResult[]>>((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

  const categoryOrder = ["Pages", "Products", "Microsoft Products", "Services", "Team", "Legal"];
  const sortedCategories = Object.keys(groupedResults).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  const handleSelect = (path: string) => {
    setQuery("");
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 hover:border-white/20 bg-black/20">
        <Search className="w-4 h-4 text-white/60" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onClick={() => setIsOpen(true)}
          placeholder="Search..."
          className="bg-transparent text-sm text-white outline-none w-full placeholder:text-white/60"
        />
        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-white/20 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-white/40">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      {isOpen && query.length > 0 && (
        <div className="absolute top-full mt-2 w-full max-h-[70vh] overflow-y-auto bg-black/95 border border-white/10 rounded-md shadow-lg backdrop-blur-sm py-2 z-50">
          {filteredResults.length === 0 ? (
            <div className="px-4 py-2 text-sm text-white/60">
              No results found
            </div>
          ) : (
            <div>
              {sortedCategories.map((category) => (
                <div key={category} className="mb-2">
                  <div className="px-4 py-1 text-xs font-semibold text-white/40 bg-white/5">
                    {category}
                  </div>
                  {groupedResults[category].map((item, index) => (
                    <div
                      key={`${category}-${index}`}
                      onClick={() => handleSelect(item.path)}
                      className="px-4 py-2 hover:bg-white/5 cursor-pointer group"
                    >
                      <div className="text-sm font-medium text-white group-hover:text-axima-blue">
                        {item.title}
                      </div>
                      <div className="text-xs text-white/60">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
