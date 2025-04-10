import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  contactnumber: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contactnumber: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form validation function
  const validateForm = (): boolean => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        description: "Please enter your full name",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      toast({
        title: "Valid email is required",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.contactnumber.trim()) {
      toast({
        title: "Contact number is required",
        description: "Please enter your contact number",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "Message is required",
        description: "Please enter your message",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  // Sanitize input to prevent XSS
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Sanitize data before sending
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      contactnumber: sanitizeInput(formData.contactnumber),
      message: sanitizeInput(formData.message),
    };

    try {
      // Use the API endpoint provided
      const response = await fetch("https://portal-api.shiviom.com/get_aximawebsite_contact_details/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add security headers
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(sanitizedData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        contactnumber: "",
        message: "",
      });
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
        variant: "default",
      });
      
      // Redirect to thank you page
      navigate("/contact-thank-you");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-white/5 p-8 rounded-lg backdrop-blur-sm"
    >
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Full Name <span style={{ color: 'red' }}>*</span>
          </label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white/10 border-white/10 text-white"
            maxLength={100}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Your Email <span style={{ color: 'red' }}>*</span>
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-white/10 border-white/10 text-white"
            maxLength={100}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="contactnumber" className="block text-sm font-medium text-gray-300 mb-1">
          Contact Number <span style={{ color: 'red' }}>*</span>
        </label>
        <Input
          id="contactnumber"
          value={formData.contactnumber}
          onChange={(e) => setFormData({ ...formData, contactnumber: e.target.value })}
          className="bg-white/10 border-white/10 text-white"
          maxLength={20}
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message <span style={{ color: 'red' }}>*</span>
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="bg-white/10 border-white/10 text-white min-h-[120px]"
          maxLength={1000}
          required
        />
      </div>

      <div className="flex">
        <Button
          type="submit"
          className="w-100px bg-axima-blue hover:bg-blue-600 text-white transition-all duration-300 ml-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
