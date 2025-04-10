import { motion } from "framer-motion";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";
import Map from "./Map";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-black/40">
      <div className="container mx-auto px-4">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Do you want to know more about Microsoft Office 365 and its plans? Our experts would love to talk with you. Just fill out the form below.
          </p>
        </motion.div> */}

        <div className="grid md:grid-cols-2 gap-12">  
          <div className="space-y-8">
            <ContactInfo />
            <Map />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};