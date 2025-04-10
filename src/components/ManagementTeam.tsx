import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Punit Thakkar",
    position: "Chairman",
    image: "https://storage.googleapis.com/axima-website-content/managementteam/PunitThakkar.JPG",
    linkedin: "https://www.linkedin.com/in/punitshivaami/?original_referer=https%3A%2F%2Fwww.shivaami.com%2F",
    profile: "With over two decades of experience in the IT industry, Punit Thakkar has been instrumental in shaping Shiviom's vision and growth strategy. As a mentor and leader, his guidance has been key to establishing Shiviom as a leading cloud solutions provider. Punit's dedication to innovation and talent development continues to drive the company's success and impact across industries."
  },
  {
    name: "Akshay Thakkar",
    position: "CEO",
    image: "https://storage.googleapis.com/axima-website-content/managementteam/AkshayThakkar.png",
    linkedin: "https://www.linkedin.com/in/akshay-thakkar-bb5112120/",
    profile: "Akshay Thakkar is a visionary leader driving Shiviom's success with over 10 years of entrepreneurial expertise. He has been instrumental in embracing advanced technologies and expanding the company's service offerings to meet dynamic market demands. With a strong belief in the principle that 'organizations are bigger than individuals', his collaborative leadership inspires innovation, teamwork, and excellence."
  },
  {
    name: "Ashika Suresh",
    position: "Deputy General Manager",
    image: "https://storage.googleapis.com/axima-website-content/managementteam/AshikaSuresh.png",
    linkedin: "https://www.linkedin.com/in/ashika-suresh-152515113?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    profile: "Ashika Suresh is a Deputy General Manager at Axima Corporation with over 10 years of experience. She currently leads the sales strategy and execution for the Microsoft Suite of products, focusing on revenue growth and customer success. Ashika directs a high-performing team to meet the unique needs of clients, combining strategic leadership with a strong focus on customer outcomes. She builds lasting relationships and drives digital transformation by offering solutions and services that help clients unlock the full potential of the Microsoft suite."
  }
];

export const ManagementTeam = () => {
  return (
    <section className="space-y-8 py-12">
      <h2 className="text-3xl font-bold text-center text-white">Our Management Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group h-[420px] [perspective:1000px]"
          >
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front of card */}
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <div className="h-full p-6 space-y-4 rounded-lg border border-white/10 hover:border-axima-blue/50 bg-black/40 backdrop-blur-sm">
                  <div className="aspect-square w-48 mx-auto overflow-hidden rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-muted-foreground">{member.position}</p>
                  </div>
                </div>
              </div>

              {/* Back of card */}
              <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="h-full p-6 flex flex-col justify-between rounded-lg border border-white/10 hover:border-axima-blue/50 bg-black/40 backdrop-blur-sm">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-muted-foreground">{member.profile}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white hover:text-axima-blue transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};