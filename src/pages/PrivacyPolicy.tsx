
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
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
              <Shield className="w-8 h-8 text-axima-blue" />
            </div>
          </div>
          <Card className="bg-black/40 border-white/10">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
            <section className="mb-6">
          <h2 className="text-1xl font-semibold mb-4 underline">SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</h2>
          <p>When you browse our site, we also automatically receive your computer's internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.</p>
          <br></br>
          <p>When you purchase something from us, as part of the buying and selling process, we collect the personal information you give us such as your name, address, and email address.</p>
          <br></br>
          <p>Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-1xl font-semibold mb-4 underline">SECTION 2 - CONSENT</h2>
          <p>How do you get my consent?</p>
          <br></br>
          <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.</p>
          <br></br>
          <p>If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>
          <br></br>
          <p>How do I withdraw my consent?</p>   
          <br></br>
          <p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at info@axima.com or mailing us at: Axima Corporation., 1001, 10th Floor, Runwal R Square, LBS Road, Mulund West, Mumbai - 400080</p>     
        </section>

        <section className="mb-6">
          <h2 className="text-1xl font-semibold mb-4 underline">SECTION 3 - DISCLOSURE</h2>
          <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-1xl font-semibold mb-4 underline">SECTION 4 - PAYMENT</h2>
          <p>We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.</p>
          <br></br>
          <p>Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.</p>
          <br></br>
          <p>PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.</p>
          <br></br>
          <p>For more insight, you may also want to read terms and conditions of razorpay on https://razorpay.com</p>
        </section>

        <section className="mb-6">
          <h2 className="text-1xl font-semibold mb-4 underline">SECTION 5 - THIRD-PARTY SERVICES</h2>
          <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>
          <br></br>
          <p>However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</p>
          <br></br>
          <p>For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.</p>
          <br></br>
          <p>In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
          <br></br>
          <p>Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-1xl font-semibold mb-4 underline">SECTION 6 - SECURITY</h2>
          <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-1xl font-semibold mb-4 underline">SECTION 7 - COOKIES</h2>
          <p>We use cookies to maintain session of your user. It is not used to personally identify you on other websites.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-1xl font-semibold mb-4 underline">SECTION 8 - AGE OF CONSENT</h2>
          <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-1xl font-semibold mb-4 underline">SECTION 9 - CHANGES TO THIS PRIVACY POLICY</h2>
          <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.</p>
          <br></br>
          <p>If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-1xl font-semibold mb-4">QUESTIONS AND CONTACT INFORMATION</h2>
          <p>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at info@axima.com or mailing us at: Axima Corporation., 1001, 10th Floor, Runwal R Square, LBS Road, Mulund West, Mumbai - 400080</p>
        </section>

            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
