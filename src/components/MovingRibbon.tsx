
import { motion } from "framer-motion";

const companies = [
  {
    name: "Goldiee Group",
    image: "/lovable-uploads/6c3cda8d-517f-41ba-9cdb-ad94518d2120.png"
  },
  {
    name: "Blue Dart",
    image: "/lovable-uploads/accb3a4e-5dbf-4fb2-8c76-5e48e1b46999.png"
  },
  {
    name: "Morde",
    image: "/lovable-uploads/7e90294d-d89d-4e0d-ba80-c5dd0d981cf8.png"
  },
  {
    name: "Saint-Gobain",
    image: "/lovable-uploads/925c820c-4967-4cdc-9b5b-40b348aff929.png"
  },
  {
    name: "JVM Spaces",
    image: "/lovable-uploads/2bf1599b-73be-4276-90f3-6310c532b9a1.png"
  },
  {
    name: "Gangar Eyenation",
    image: "/lovable-uploads/5cf95f28-273b-49de-ba24-1a982f1a2739.png"
  },
  {
    name: "Shriram Finance",
    image: "/lovable-uploads/8769d21b-ef35-4f66-b33c-895afed0bff1.png"
  },
  {
    name: "Sheth",
    image: "/lovable-uploads/183a3e7c-73db-448e-a7f3-b5008eab91cc.png"
  }
];

export const MovingRibbon = () => {
  return (
    <div className="bg-black/40 backdrop-blur-sm py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Trusted by Industry Leaders
        </h2>
        <div className="border-y border-white/10 py-16 overflow-hidden">
          <motion.div
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex whitespace-nowrap items-center"
          >
            {[...companies, ...companies].map((company, idx) => (
              <div
                key={idx}
                className="mx-12 flex items-center justify-center"
              >
                <div className="w-48 h-32 relative flex items-center justify-center">
                  <img 
                    src={company.image} 
                    alt={company.name}
                    className="max-h-full max-w-full object-contain filter transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.error(`Failed to load image: ${target.src}`);
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
