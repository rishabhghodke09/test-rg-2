
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Microsoft365Benefits } from "@/components/Microsoft365Benefits";
import { motion } from "framer-motion";

const Microsoft365 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <div className="pt-20">
        <Microsoft365Benefits />
      </div>
      <Footer />
    </div>
  );
};

export default Microsoft365;
