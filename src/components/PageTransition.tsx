
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Reset loading state on route change
    setLoading(true);
    setProgress(0);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10; // Increased step size for faster progress
      });
    }, 50); // Decreased interval time for a smoother effect

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [location.pathname]); // Trigger effect on route change

  return (
    <AnimatePresence mode="wait">
      {loading ? (
       <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5 }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] 
              }
            }}
            className="text-center"
          >
            <img 
              src="/lovable-uploads/11f0b3fd-81f2-4bf5-a519-1b17d303755a.png" 
              alt="Axima Corporation" 
              className="h-28 mb-8" 
            />
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ 
                scaleX: progress/100,
                transition: { 
                  duration: 0.1,
                  ease: "easeOut"
                }
              }}
              className="w-64 h-0.5 bg-axima-blue origin-left mb-6"
            />
            
            {/* Progress percentage display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { duration: 0.3 }
              }}
              className="text-lg font-medium text-white mt-4"
            >
              {progress}%
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.5, 1, 0.5],
                transition: { 
                  duration: 2,
                  repeat: Infinity
                }
              }}
              className="text-xs uppercase tracking-widest font-light text-white/80"
            >
              {/* Loading Experience */}
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
