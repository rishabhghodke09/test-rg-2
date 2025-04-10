
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Clock, TrendingUp, Smile, Briefcase } from "lucide-react";

const AnimatedNumber = ({ value, duration = 1 }: { value: number | string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && value !== "") {
      let start = 0;
      const end = parseInt(value.toString(), 10);
      if (isNaN(end)) return; // Prevent NaN errors

      const steps = 50;
      const increment = end / steps;
      const incrementTime = (duration * 1000) / steps;

      const timer = setInterval(() => {
        start = Math.min(start + increment, end);
        setCount(Math.floor(start));
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{value === "" ? "" : count}</span>;
};

export const Stats = () => {
  const stats = [
    {
      value: 2000,
      label: "Satisfied Customers",
      suffix: "+",
      description: "Successfully deployed Microsoft solutions to thousands of businesses across India.",
      icon: Users,
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      value: 5,
      label: "Key Cities",
      suffix: "+",
      description: "Serving major metropolitan areas across India with local support teams.",
      icon: TrendingUp,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      value: 24,
      label: "Technical Support",
      suffix: " hrs",
      description: "Round-the-clock Microsoft-certified support team at your service.",
      icon: Clock,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      value: 98,
      label: "Customer Satisfaction",
      suffix: " %",
      description: "Ensuring top-notch customer satisfaction with expert support and seamless service.",
      icon: Smile,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      value: 10,
      label: "Years Experience",
      suffix: " +",
      description: "Bringing over a decade of expertise to deliver reliable and professional service.",
      icon: Briefcase,
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.slice(0, 3).map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl`} />
                
                <div className="relative bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-axima-blue/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-axima-blue/20 text-axima-blue">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-5xl font-bold text-white">
                      <AnimatedNumber value={stat.value} />
                      {stat.suffix}
                    </h2>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-axima-blue transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-axima-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Second row with remaining cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-[800px] mx-auto">
          {stats.slice(3, 5).map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl`} />
                
                <div className="relative bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-axima-blue/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-axima-blue/20 text-axima-blue">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-5xl font-bold text-white">
                      <AnimatedNumber value={stat.value} />
                      {stat.suffix}
                    </h2>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-axima-blue transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-axima-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
