import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import TerminalWindow from "@/components/TerminalWindow";
import NavBar from "@/components/NavBar";
import Footer from "@/sections/Footer";
import BinaryBackground from "@/components/BinaryBackground";

export default function TermsOfService() {
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
              <BinaryText className="text-white">Terms of </BinaryText>
              <BinaryText className="text-neon-blue">Service</BinaryText>
            </h1>
            <div className="w-24 h-1 bg-neon-blue mx-auto my-4"></div>
            <p className="text-foreground max-w-2xl mx-auto font-mono">
              The rules and guidelines governing your use of the Shojo protocol
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TerminalWindow title="terms_of_service.sh" showTime>
              <p className="text-neon-blue mb-2">$ <span className="text-foreground">cat terms_of_service.md</span></p>
              
              <div className="space-y-6 text-foreground font-mono">
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">1. Acceptance of Terms</h2>
                  <p>By accessing or using the Shojo protocol and related services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">2. Service Description</h2>
                  <p>Shojo is a decentralized protocol designed to provide high-speed, stable, and secure network infrastructure. Our services include protocol access, developer tools, and related applications.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">3. User Responsibilities</h2>
                  <p className="mb-1">As a user of Shojo, you agree to:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Use the service in compliance with all applicable laws and regulations</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Not attempt to disrupt or compromise the integrity of the network</li>
                    <li>Not use the service for any illegal or unauthorized purposes</li>
                    <li>Not infringe upon the rights of others</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">4. Intellectual Property</h2>
                  <p>All content, code, and materials associated with Shojo are protected by intellectual property rights and belong to Shojo or its licensors. You may not copy, modify, distribute, or create derivative works without explicit permission.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">5. Limitation of Liability</h2>
                  <p>To the maximum extent permitted by law, Shojo and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service or inability to access the service.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">6. Service Modifications</h2>
                  <p>We reserve the right to modify, suspend, or discontinue any aspect of the Shojo protocol at any time, with or without notice. This includes changes to features, functionality, or service availability.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">7. Termination</h2>
                  <p>We may terminate or suspend your access to Shojo immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">8. Governing Law</h2>
                  <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Shojo is registered, without regard to its conflict of law provisions.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">9. Changes to Terms</h2>
                  <p>We may update these Terms of Service periodically. We will notify users of any material changes through appropriate channels. Your continued use of Shojo after such modifications constitutes your acceptance of the updated terms.</p>
                </div>
                
                <div>
                  <h2 className="text-xl text-neon-blue mb-2">10. Contact</h2>
                  <p>If you have questions about these Terms, please contact us at <span className="text-neon-blue">legal@shojo.ai</span>.</p>
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