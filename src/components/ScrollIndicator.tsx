
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";

export const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Calculate scroll percentage
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (currentScrollY / height) * 100;
      setScrollPercentage(Math.round(scrolled));
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="relative">
        <motion.div 
          className="w-14 h-14 rounded-full bg-black/70 backdrop-blur-sm border border-axima-blue/30 flex items-center justify-center"
          style={{
            background: `conic-gradient(#00A3FF ${scrollPercentage}%, transparent 0%)`
          }}
        />
        <div className="absolute inset-0.5 rounded-full bg-black flex items-center justify-center flex-col">
          <span className="text-xs font-medium text-white">{scrollPercentage}%</span>
          <motion.div 
            animate={{ rotate: scrollDirection === "down" ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-axima-blue"
          >
            {scrollDirection === "down" ? <ArrowDown size={12} /> : <ArrowUp size={12} />}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
