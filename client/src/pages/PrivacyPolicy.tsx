import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import TerminalWindow from "@/components/TerminalWindow";
import NavBar from "@/components/NavBar";
import Footer from "@/sections/Footer";
import BinaryBackground from "@/components/BinaryBackground";

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BinaryBackground />
      <NavBar />
      
      <section className="py-20 relative bg-cyberpunk-black min-h-screen">
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              <BinaryText className="text-white">Privacy </BinaryText>
              <BinaryText className="text-neon-blue">Policy</BinaryText>
            </h1>
            <div className="w-24 h-1 bg-neon-blue mx-auto my-4"></div>
            <p className="text-foreground max-w-2xl mx-auto font-mono">
              How we protect and manage your data within the Shojo network
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TerminalWindow title="privacy_policy.sh" showTime>
              <p className="text-neon-blue mb-2">$ <span className="text-foreground">cat privacy_policy.md</span></p>
              
              <div className="space-y-6 text-foreground font-mono">
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">1. Introduction</h2>
                  <p>Shojo ("we", "our", or "us") is committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our decentralized protocol and related services.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">2. Information We Collect</h2>
                  <p className="mb-1">We collect the following types of information:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li><span className="text-neon-purple">Network Usage Data:</span> Information about how you interact with the Shojo network</li>
                    <li><span className="text-neon-purple">Technical Information:</span> Device information, IP addresses, and system configuration</li>
                    <li><span className="text-neon-purple">User-Provided Information:</span> Any data you voluntarily provide when using our services</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">3. How We Use Your Information</h2>
                  <p className="mb-1">We use collected information for the following purposes:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>To provide, maintain, and improve the Shojo protocol</li>
                    <li>To monitor network performance and ensure stability</li>
                    <li>To detect and prevent security threats or network abuse</li>
                    <li>To optimize our AI-driven systems for better performance</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">4. Data Security</h2>
                  <p>We implement military-grade encryption and advanced security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. Our AI-powered security system continuously monitors for potential threats and vulnerabilities.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">5. Data Retention</h2>
                  <p>We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. When data is no longer needed, it is securely deleted from our systems.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">6. Your Rights</h2>
                  <p className="mb-1">Depending on your jurisdiction, you may have the following rights:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Rectify inaccurate or incomplete information</li>
                    <li>Request deletion of your personal data</li>
                    <li>Restrict or object to certain processing activities</li>
                    <li>Data portability rights</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">7. Changes to This Policy</h2>
                  <p>We may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify users of any material changes through appropriate channels.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">8. Contact Us</h2>
                  <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at <span className="text-neon-blue">privacy@shojo.ai</span>.</p>
                </div>
                
                <div>
                  <p className="text-foreground/70">Last Updated: March 23, 2025</p>
                </div>
              </div>
              
              <p className="text-neon-blue mt-6">$ <span className="cursor-blink text-foreground"></span></p>
            </TerminalWindow>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
}