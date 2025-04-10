
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rohit G",
    position: "IT Manager",
    company: "Ercode - A Global eTailer",
    content: "We are pleased to share that our department's operations have been running smoothly, which has made it easy for clients to access all our services. This efficiency has been highly praised and is commendable.",
    image: "https://storage.googleapis.com/axima-website-content/testimonial/erode.png",
  },
  {
    name: "Abhilash K",
    position: "IT Manager",
    company: "Clardentity Learning And Development International",
    content: "We would like to extend our heartfelt thanks for the exceptional service and cooperation provided by you and your team.",
    image: "https://storage.googleapis.com/axima-website-content/testimonial/clar.png",
  },
 {
    name:"Suthandira Pandi",
    position:"It Manager",
    company:"Emil Pharmaceutical Industries Private Limited",
    content:"We are so thankful for your support.You have done Greate Job , Complete Migration of our Previous RediffmailPro. We are very appreciative of your help.You have given good support Sunday and other working days any time.",
    image:"https://storage.googleapis.com/axima-website-content/testimonial/emilpharma.png"
 },
 {
    name:"Chiranjiv Kant",
    position:"Project Manager",
    company:"Capsicum Mediaworks LLP",
    content:"Thank you so much for your support You demonstrated exceptional professionalism throughout the completion of this task, ensuring a smooth and efficient transition. Your technical expertise, attention to detail, and proactive approach made the entire process seamless. You also addressed all queries promptly, resolved challenges quickly, and maintained excellent communication.",
    image:"https://storage.googleapis.com/axima-website-content/testimonial/capsicum.png"
 },
 {
    name:"Pranita Shah",
    position:"Finance Manager",
    company:"Ariston Services Pte Ltd",
    content:"I wanted to take a moment to express my sincere appreciation for the exceptional work you did in setting up the Microsoft email for our company. Your dedication, patience, and punctuality throughout the entire process have not gone unnoticed.You handled every step with a level of professionalism and attention to detail that truly impressed me. It was evident that you took great care in ensuring everything was set up correctly and efficiently, and you were always available to answer questions or provide guidance, no matter how small the concern.Your ability to manage the timeline and deliver on schedule is greatly appreciated, and we all feel confident that our email system is in great hands because of your expertise.Thank you again for your hard work and commitment.You've made a significant impact.",
    image:"https://storage.googleapis.com/axima-website-content/testimonial/ariston.webp"
 },
 {
    name:"Nagraj Nimbaragi",
    position:"Product Support Manager",
    company:"Sri Sai Earthmovers",
    content:"Thank you for your guidance to set up the mail accounts and deployments",
    image:"https://storage.googleapis.com/axima-website-content/testimonial/srisaiearth.png"
 },
 {
    name:"Dinesh Dicholkar",
    position:"IT HEAD",
    company:"Chemspec Chemicals Private Limited",
    content:"Team Axima,Thanks for making successful landing for us in our new MS email migration.You have proven your technical expertise, which I had discussed with my management during the selection of the partner.",
    image:"https://storage.googleapis.com/axima-website-content/testimonial/chemspec.png"
 }
];

export const Testimonials = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="bg-black/40 backdrop-blur-sm py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          What Our Clients Say
        </h2>

        <div className="overflow-hidden">
          <motion.div
            ref={carousel}
            className="flex"
            animate={{ x: [-width, 0] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[85vw] md:w-[500px] p-6 mx-4 my-8 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-axima-blue/20"
              >
                <div className="relative flex flex-col h-full justify-between">
                  <div>
                    <div className="absolute -top-12 left-0 w-12 h-12 bg-axima-blue/20 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-axima-blue" />
                    </div>

                    <div className="flex flex-col items-center text-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-30 h-14 object-contain border border-white/20 mb-4"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/100";
                        }}
                      />

                      <p className="text-gray-300 italic">"{testimonial.content}"</p>
                    </div>
                  </div>

                  <div className="mt-auto text-center pt-4 border-t border-axima-blue/20">
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
