
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const desktopImages = [
  "https://storage.googleapis.com/axima-website-content/banner/Banner-06microsoft_6_11zon.webp",
  "https://storage.googleapis.com/axima-website-content/banner/Banner-04copilot_5_11zon.webp",
  "https://storage.googleapis.com/axima-website-content/banner/Banner-09jioregion_4_11zon.webp"
];

const mobileImages = [
  "https://storage.googleapis.com/axima-website-content/banner/mobilebanner/Banner-11microsoft_2_11zon.webp",
  "https://storage.googleapis.com/axima-website-content/banner/mobilebanner/Banner-14copilot_1_11zon.webp",
  "https://storage.googleapis.com/axima-website-content/banner/mobilebanner/Banner-12jioregion_3_11zon.webp"
];

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  
  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="products" className="py-8 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="relative h-[500px] md:h-[500px] w-full overflow-hidden rounded-xl cursor-pointer group shadow-lg shadow-black/20 hover-lift transition-all duration-500">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="absolute w-full h-full object-cover"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Navigation Arrows - Enhanced */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-axima-blue/80 hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-axima-blue/80 hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Point Indicators - Enhanced */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-axima-blue w-8" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
