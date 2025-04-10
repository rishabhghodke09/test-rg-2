import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const ContactInfo = () => {
  const address = "1001, 10th Floor, Runwal R Square, LBS Road, Mulund West, Mumbai - 400080";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 text-axima-blue mt-1" />
        <div>
          <h3 className="text-white font-semibold mb-1">Location:</h3>
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-axima-blue transition-colors"
          >
            1001, 10th Floor, Runwal R Square, LBS Road, Mulund West,<br />
            Mumbai - 400080
          </a>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 text-axima-blue mt-1" />
        <div>
          <h3 className="text-white font-semibold mb-1">Email:</h3>
          <div className="space-y-2">
            <a 
              href="mailto:info@axima.in" 
              className="text-gray-300 hover:text-axima-blue transition-colors block"
            >
              info@axima.in
            </a>
            <a 
              href="mailto:support@axima.in" 
              className="text-gray-300 hover:text-axima-blue transition-colors block"
            >
              support@axima.in
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 text-axima-blue mt-1" />
        <div>
          <h3 className="text-white font-semibold mb-1">Call:</h3>
          <a 
            href="tel:+917758741333" 
            className="text-gray-300 hover:text-axima-blue transition-colors"
          >
            +91 775 874 1333
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;