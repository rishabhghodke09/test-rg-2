
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Receipt } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <div className="pt-20 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-axima-blue/20">
              <Receipt className="w-8 h-8 text-axima-blue" />
            </div>
          </div>
          <Card className="bg-black/40 border-white/10">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Refund Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
            <section className="mb-6">
          <h2 className="text-1xl font-semibold mb-4 ">Overview</h2>
          <p>Cloud software and products once sold will be not exchanged in any circumstances. We, unfortunately, don't offer a refund or exchange on any software or product.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-1xl font-semibold mb-4 ">What if auto-renewal fails</h2>
          <p>In case auto-renewal fails due to an expired card or any other reason, a seven-day grace period will be applied to the subscription to give the user time to update their credit card information. Once the information is updated, your yearly subscription fee will be charged, and then your billing cycle will start.</p>
        </section>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
