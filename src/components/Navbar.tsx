
import { FC } from "react";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Searchbar } from "./Searchbar";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Plans & Pricing", href: "/plans" },
  { label: "Microsoft Copilot", href: "/copilot" },
  // { label: "Case Studies", href: "/case-studies" },
  { label: "Contact Us", href: "/contact" },
];

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isExternalLink = (href: string) => href.startsWith('#');
  const isCurrentPage = (href: string) => location.pathname === href;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex flex-col items-center">
            <img src="/lovable-uploads/11f0b3fd-81f2-4bf5-a519-1b17d303755a.png" alt="Axima Corporation" className="h-12" />
            <span className="text-white mt" style={{ fontSize: '8px' }}>Microsoft Cloud Solution Providers</span>
          </Link>

          

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              isExternalLink(item.href) ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`transition-colors duration-200 text-white hover:text-axima-blue relative py-2`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`transition-colors duration-200 text-white hover:text-axima-blue relative py-2 ${
                    isCurrentPage(item.href) ? "font-semibold text-axima-blue" : ""
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {item.label}
                    {isCurrentPage(item.href) && (
                      <ChevronDown className="w-4 h-4 animate-bounce" />
                    )}
                  </span>
                  {isCurrentPage(item.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-axima-blue transform origin-left transition-transform duration-300"></span>
                  )}
                </Link>
              )
            ))}
          </div>
            {/* Search Bar */}
          <div className="hidden md:block">
            <Searchbar />
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in bg-black/95 rounded-lg mt-2">
            <div className="p-4">
              <Searchbar />
            </div>
            {navItems.map((item) => (
              isExternalLink(item.href) ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 px-4 text-white hover:text-axima-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block py-2 px-4 text-white hover:text-axima-blue ${
                    isCurrentPage(item.href) ? "font-semibold text-axima-blue bg-white/5" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center gap-1">
                    {item.label}
                    {isCurrentPage(item.href) && (
                      <ChevronDown className="w-4 h-4 animate-bounce" />
                    )}
                  </span>
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
