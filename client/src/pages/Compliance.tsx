import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import TerminalWindow from "@/components/TerminalWindow";
import CyberpunkCard from "@/components/CyberpunkCard";
import NavBar from "@/components/NavBar";
import Footer from "@/sections/Footer";
import BinaryBackground from "@/components/BinaryBackground";

export default function Compliance() {
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
              <BinaryText className="text-white">Regulatory </BinaryText>
              <BinaryText className="text-neon-blue">Compliance</BinaryText>
            </h1>
            <div className="w-24 h-1 bg-neon-blue mx-auto my-4"></div>
            <p className="text-foreground max-w-2xl mx-auto font-mono">
              How Shojo adheres to global regulatory standards and frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TerminalWindow title="compliance_overview.sh" showTime>
                <p className="text-neon-blue mb-2">$ <span className="text-foreground">shojo --compliance-status</span></p>
                <p className="text-foreground mb-4">Loading Shojo compliance framework information...</p>
                <p className="text-success mb-4">Compliance report generated successfully.</p>
                
                <div className="mb-6">
                  <p className="text-foreground mb-2">// REGULATORY COMPLIANCE OVERVIEW</p>
                  <p className="mb-3">
                    The Shojo protocol is designed with compliance at its core, ensuring adherence to global regulatory standards while maintaining the decentralized ethos of the network. Our compliance framework is continuously updated to reflect evolving regulatory landscapes.
                  </p>
                </div>
                
                <div className="mb-6">
                  <p className="text-foreground mb-2">// GLOBAL COMPLIANCE STANDARDS</p>
                  <table className="w-full border-collapse text-sm mb-3">
                    <thead>
                      <tr>
                        <th className="text-left py-2 text-neon-purple">Standard</th>
                        <th className="text-left py-2 text-neon-purple">Status</th>
                        <th className="text-left py-2 text-neon-purple">Last Audit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-foreground/20">
                        <td className="py-2">ISO 27001 (Information Security)</td>
                        <td className="py-2 text-success">Certified</td>
                        <td className="py-2">Q1 2025</td>
                      </tr>
                      <tr className="border-t border-foreground/20">
                        <td className="py-2">SOC 2 Type II</td>
                        <td className="py-2 text-success">Compliant</td>
                        <td className="py-2">Q1 2025</td>
                      </tr>
                      <tr className="border-t border-foreground/20">
                        <td className="py-2">GDPR (EU)</td>
                        <td className="py-2 text-success">Compliant</td>
                        <td className="py-2">Q4 2024</td>
                      </tr>
                      <tr className="border-t border-foreground/20">
                        <td className="py-2">CCPA (California)</td>
                        <td className="py-2 text-success">Compliant</td>
                        <td className="py-2">Q4 2024</td>
                      </tr>
                      <tr className="border-t border-foreground/20">
                        <td className="py-2">HIPAA (Healthcare)</td>
                        <td className="py-2 text-success">Compliant</td>
                        <td className="py-2">Q1 2025</td>
                      </tr>
                      <tr className="border-t border-foreground/20">
                        <td className="py-2">PCI DSS (Payment Security)</td>
                        <td className="py-2 text-success">Level 1</td>
                        <td className="py-2">Q4 2024</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mb-6">
                  <p className="text-foreground mb-2">// COMPLIANCE APPROACH</p>
                  <p className="mb-1">Shojo's compliance strategy is built on three core pillars:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1 mb-3">
                    <li><span className="text-neon-purple">Proactive Compliance:</span> Anticipating regulatory changes and implementing updates ahead of enforcement dates</li>
                    <li><span className="text-neon-purple">Privacy by Design:</span> Building data protection and privacy controls into the core architecture</li>
                    <li><span className="text-neon-purple">Transparent Reporting:</span> Regular public disclosures of compliance status and audit results</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-foreground mb-2">// ONGOING COMPLIANCE INITIATIVES</p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Quarterly third-party compliance audits and penetration testing</li>
                    <li>Continuous monitoring of global regulatory developments</li>
                    <li>Regular compliance training for all team members</li>
                    <li>Participation in regulatory working groups and standards bodies</li>
                  </ul>
                </div>
                
                <p className="text-neon-blue mt-6">$ <span className="cursor-blink text-foreground"></span></p>
              </TerminalWindow>
            </motion.div>

            <div className="space-y-6 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CyberpunkCard className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-display text-white">
                    <BinaryText>Compliance Resources</BinaryText>
                  </h3>
                  <ul className="space-y-3 text-foreground/80 font-mono text-sm">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Compliance Certificates
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Audit Reports
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Whitepapers
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Security Documentation
                    </li>
                  </ul>
                </CyberpunkCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <CyberpunkCard className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-display text-white">
                    <BinaryText>Compliance Contact</BinaryText>
                  </h3>
                  <p className="text-foreground/80 font-mono text-sm mb-4">
                    For specific compliance inquiries or to request detailed compliance documentation, please contact our dedicated compliance team.
                  </p>
                  <p className="text-neon-blue font-mono text-sm">compliance@shojo.ai</p>
                </CyberpunkCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CyberpunkCard className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-display text-white">
                    <BinaryText>Report Compliance Issues</BinaryText>
                  </h3>
                  <p className="text-foreground/80 font-mono text-sm mb-4">
                    If you identify potential compliance concerns or have suggestions for our compliance program, we encourage you to report them.
                  </p>
                  <div className="bg-neon-blue/10 p-3 rounded border border-neon-blue/30">
                    <p className="text-foreground/80 font-mono text-xs">
                      All reports are confidential and help strengthen our compliance framework.
                    </p>
                  </div>
                </CyberpunkCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
}