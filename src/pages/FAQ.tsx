import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqItems = [
    {
      question: "What is Microsoft 365?",
      answer: "Microsoft 365 is a cloud-based service that brings together the best tools for the way people work today. By combining best-in-class apps like Excel and Outlook with powerful cloud services like OneDrive and Microsoft Teams, Microsoft 365 lets anyone create and share anywhere on any device."
    },
    {
      question:"How do I know which Microsoft 365 plan is right for my business?",
      answer:"The right plan depends on the size of your business and the features you need. Small businesses may start with Business Basic or Business Standard, while larger organizations with complex security and compliance needs might require Business Premium or Enterprise plans."
    },
    {
      question: "What are the main Microsoft 365 plans available for businesses?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Microsoft 365 Business Basic</strong> – Includes web-based Office apps, 1 TB of cloud storage (OneDrive), and email through Exchange.</li>
          <li><strong>Microsoft 365 Business Standard</strong> – Includes desktop Office apps (Word, Excel, PowerPoint) and all the features of Business Basic.</li>
          <li><strong>Microsoft 365 Business Premium</strong> – Adds advanced security features and device management to Business Standard.</li>
          <li><strong>Microsoft 365 Enterprise</strong> – Tailored for larger organizations, with advanced compliance, security, and analytics tools. Pricing is customized.</li>
        </ul>
      )
    },
    {
      question:"Can I change my Microsoft 365 plan later?",
      answer:"Yes, you can upgrade or downgrade your Microsoft 365 plan at any time, depending on your business needs. This can be done from the Microsoft 365 Admin Center."
    },
    {
      question:"Do Microsoft 365 plans come with a free trial?",
      answer:"Yes, Microsoft 365 offers a 1-month free trial for Business Standard and Business Premium plans, allowing you to test out the features before committing to a paid plan."
    },
    {
      question:"Is Microsoft 365 priced per user or per company?",
      answer:"Microsoft 365 is priced on a per-user basis, so you pay for each user who has access to the software and services. "
    },
    {
      question:"Are there any additional costs beyond the monthly subscription?",
      answer:"The subscription cost typically covers the full suite of services. However, there may be additional costs for features like advanced security, Microsoft 365 Phone System, or more storage if needed."
    },
    {
      question:"What happens if I exceed my storage limit on Microsoft 365?",
      answer:"If you exceed your storage limit on OneDrive or Exchange, you will need to upgrade to a higher plan or purchase additional storage. Enterprise plans offer more storage options or unlimited storage."
    },
    {
      question:"Can I get email hosting with a custom domain on Microsoft 365?",
      answer:"Yes, all paid Microsoft 365 plans allow you to host email with a custom domain (e.g., yourname@yourcompany.com), managed through Exchange Online."
    },
    {
      question:"Can I integrate Microsoft 365 with third-party applications?",
      answer:"Yes, Microsoft 365 supports integrations with thousands of third-party applications through the Microsoft AppSource marketplace. Common integrations include CRM systems, project management tools, and marketing software."
    },
    {
      question:"Is there a mobile app for Microsoft 365?",
      answer:"Yes, Microsoft provides mobile apps for most Microsoft 365 applications, including Outlook, Teams, Word, Excel, PowerPoint, and OneDrive for iOS and Android devices."
    },
    {
      question:"How secure is Microsoft 365 for my business data?",
      answer:"Microsoft 365 provides robust security features, including data encryption (in transit and at rest), multi-factor authentication (MFA), secure password policies, and regular security updates. Microsoft’s cloud infrastructure is trusted by organizations worldwide, including for sensitive data."
    },
    {
      question:"What is multi-factor authentication (MFA), and why is it important?",
      answer:"MFA is a security feature that requires users to verify their identity using two or more methods: something they know (password), something they have (phone), or something they are (biometrics). It adds a layer of protection against unauthorized access to accounts."
    },
    {
      question:"What is Microsoft Defender for Office 365?",
      answer:"Microsoft Defender for Office 365 is an advanced security service that helps protect your organization from phishing, malware, and other email-based threats. It includes features like safe links, safe attachments, and attack simulation training."
    },
    {
      question:"Can Microsoft 365 help with data loss prevention (DLP)?",
      answer:"Yes, Microsoft 365 includes Data Loss Prevention (DLP) policies that help prevent the accidental sharing of sensitive information, such as financial data or personally identifiable information (PII) through emails or files."
    },
    {
      question:" How does Microsoft 365 handle compliance with data privacy regulations (e.g., GDPR, HIPAA)?",
      answer:"Microsoft 365 provides a variety of compliance tools and features to help organizations meet regulatory requirements such as GDPR, HIPAA, and CCPA. This includes Microsoft Compliance Center, eDiscovery, and audit logs for tracking user activity."
    },
    {
      question:" Can I control who has access to my business data?",
      answer:"Yes, Microsoft 365 provides granular permissions and roles that allow administrators to control access to data, restrict file sharing, and set policies for different groups or users. This can be managed through the Microsoft 365 Admin Center."
    },
    {
      question:"What is Microsoft Purview, and how does it help with security and compliance?",
      answer:"Microsoft Purview (formerly Microsoft Compliance Center) is a suite of tools for data governance, risk management, and compliance monitoring. It helps businesses manage sensitive data, apply retention policies, and perform audits."
    },
    {
      question: " How does Microsoft 365 prevent phishing and spam attacks?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Exchange Online Protection (EOP) to filter spam and malware.</li>
          <li>Microsoft Defender for Office 365 to detect advanced threats like phishing and zero-day exploits.</li>
          <li>Safe Links and Safe Attachments in Outlook to block malicious links and attachments.</li>
        </ul>
      )
    },
    {
      question:"Can Microsoft 365 protect against ransomware attacks?",
      answer:"Yes, Microsoft 365 offers advanced threat protection through Microsoft Defender for Office 365. This includes real-time protection against ransomware and other malicious attacks, such as automatic file versioning and OneDrive file recovery options."
    },
    {
      question:"Does Microsoft 365 offer audit and activity logging for security monitoring?",
      answer:"Yes, Microsoft 365 provides audit logs that allow administrators to monitor user activities, track login attempts, and analyse potential security incidents. This is available through Microsoft Purview for compliance and security auditing."
    },
    {
      question:"What applications are included in Microsoft 365 for businesses?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Outlook (email, calendar)</li>
          <li>Word (document creation)</li>
          <li>Excel (spreadsheets)</li>
          <li>PowerPoint (presentations)</li>
          <li>OneNote (note-taking)</li>
          <li>Teams (collaboration and communication)</li>
          <li>OneDrive (cloud storage)</li>
          <li>SharePoint (document management and team collaboration)</li>
          <li>Power BI (business intelligence and analytics)</li>
        </ul>
      )
    },
    {
      question:"Can I use Microsoft 365 apps on multiple devices?",
      answer:"Yes, Microsoft 365 applications are available on Windows, macOS, iOS, and Android devices. You can use the apps on multiple devices, including desktops, laptops, tablets, and smartphones."
    },
    {
      question:"How does Microsoft Teams help with collaboration in my organisation?",
      answer:"Microsoft Teams is a unified collaboration platform that integrates chat, video meetings, file sharing, and real-time collaboration on documents. Teams helps streamline communication and improves team productivity with tools for project management, communication, and file storage."
    },
    {
      question:"How do I store and share files securely in Microsoft 365?",
      answer:"Files can be stored securely in OneDrive for personal use or SharePoint for team-based storage. You can share files with colleagues, control permissions, and set expiration dates for shared links. Files are protected by encryption both in transit and at rest."
    },
    {
      question:"Does Microsoft 365 support real-time collaboration on documents?",
      answer:"Yes, Microsoft 365 allows real-time collaboration on Word, Excel, and PowerPoint documents. Multiple users can work on the same document simultaneously, with changes reflected in real-time, making it easy for teams to collaborate regardless of location."
    },
    {
      question:"What service does Axima offers?",
      answer:"Axima provides deployment, data migration, adoption training, change management & technical support. All this will be subject to add on."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-axima-blue/20">
              <HelpCircle className="w-8 h-8 text-axima-blue" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our Microsoft solutions and services
          </p>
          <div className="w-24 h-1 bg-axima-blue mx-auto mt-6"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((faq, index) => (
              <Accordion type="single" collapsible className="bg-black/40 rounded-lg" key={index}>
                <AccordionItem value={`item-${index}`} className="border-b border-white/10 last:border-0">
                  <AccordionTrigger className="text-white hover:text-axima-blue px-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-4 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
