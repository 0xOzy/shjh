import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import CyberpunkCard from "@/components/CyberpunkCard";

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 relative bg-cyberpunk-black">
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            <BinaryText className="text-white">Development </BinaryText>
            <BinaryText className="text-neon-blue">Roadmap</BinaryText>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto my-4"></div>
          <p className="text-foreground max-w-2xl mx-auto font-mono">
            Our strategic vision for the evolution of the Shojo protocol
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Only visible on medium screens and up */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neon-blue/30 z-0"></div>

          {/* Phase 1 */}
          <motion.div 
            className="relative z-10 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 text-right order-2 md:order-1">
                <h3 className="text-xl font-bold mb-2 font-display text-white">
                  <BinaryText>Phase 1: Foundation</BinaryText>
                </h3>
                <CyberpunkCard className="p-4">
                  <p className="text-foreground/80 font-mono text-sm mb-3">
                    Establishing the core infrastructure and fundamental technologies
                  </p>
                  <ul className="text-foreground/70 font-mono text-xs space-y-2">
                    <li className="flex items-center">
                      <span className="text-success mr-2">✓</span> Core Protocol Development
                    </li>
                    <li className="flex items-center">
                      <span className="text-success mr-2">✓</span> Security Architecture Implementation
                    </li>
                    <li className="flex items-center">
                      <span className="text-success mr-2">✓</span> Initial Network Deployment
                    </li>
                    <li className="flex items-center">
                      <span className="text-success mr-2">✓</span> AI Integration Framework
                    </li>
                  </ul>
                  <div className="mt-3 text-right">
                    <span className="text-xs font-mono text-neon-blue">COMPLETED Q2 2023</span>
                  </div>
                </CyberpunkCard>
              </div>
              
              <div className="order-1 md:order-2 md:w-1/2 flex justify-center mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-neon-blue flex items-center justify-center shadow-neon-blue z-20">
                  <span className="font-display font-bold text-cyberpunk-black">1</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div 
            className="relative z-10 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 flex justify-center mb-4 md:mb-0 order-1">
                <div className="w-12 h-12 rounded-full bg-neon-blue flex items-center justify-center shadow-neon-blue z-20">
                  <span className="font-display font-bold text-cyberpunk-black">2</span>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-8 text-left order-2">
                <h3 className="text-xl font-bold mb-2 font-display text-white">
                  <BinaryText>Phase 2: Expansion</BinaryText>
                </h3>
                <CyberpunkCard className="p-4">
                  <p className="text-foreground/80 font-mono text-sm mb-3">
                    Scaling the network and enhancing interoperability capabilities
                  </p>
                  <ul className="text-foreground/70 font-mono text-xs space-y-2">
                    <li className="flex items-center">
                      <span className="text-success mr-2">✓</span> Global Node Expansion
                    </li>
                    <li className="flex items-center">
                      <span className="text-success mr-2">✓</span> Cross-Chain Compatibility
                    </li>
                    <li className="flex items-center">
                      <span className="text-warning mr-2">⟳</span> Developer SDK Release
                    </li>
                    <li className="flex items-center">
                      <span className="text-warning mr-2">⟳</span> Enterprise Integration Solutions
                    </li>
                  </ul>
                  <div className="mt-3">
                    <span className="text-xs font-mono text-neon-blue">IN PROGRESS - Q3 2023</span>
                  </div>
                </CyberpunkCard>
              </div>
            </div>
          </motion.div>

          {/* Phase 3 */}
          <motion.div 
            className="relative z-10 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 text-right order-2 md:order-1">
                <h3 className="text-xl font-bold mb-2 font-display text-white">
                  <BinaryText>Phase 3: Optimization</BinaryText>
                </h3>
                <CyberpunkCard className="p-4">
                  <p className="text-foreground/80 font-mono text-sm mb-3">
                    Advanced AI enhancements and performance optimizations
                  </p>
                  <ul className="text-foreground/70 font-mono text-xs space-y-2">
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> AI Autonomous Network Management
                    </li>
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> Quantum-Resistant Security Upgrade
                    </li>
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> Advanced Analytics Platform
                    </li>
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> Self-Healing Network Protocols
                    </li>
                  </ul>
                  <div className="mt-3 text-right">
                    <span className="text-xs font-mono text-neon-blue">PLANNED - Q4 2023</span>
                  </div>
                </CyberpunkCard>
              </div>
              
              <div className="order-1 md:order-2 md:w-1/2 flex justify-center mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-neon-blue/40 flex items-center justify-center border border-neon-blue z-20">
                  <span className="font-display font-bold text-neon-blue">3</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phase 4 */}
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 flex justify-center mb-4 md:mb-0 order-1">
                <div className="w-12 h-12 rounded-full bg-neon-blue/30 flex items-center justify-center border border-neon-blue z-20">
                  <span className="font-display font-bold text-neon-blue">4</span>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-8 text-left order-2">
                <h3 className="text-xl font-bold mb-2 font-display text-white">
                  <BinaryText>Phase 4: Evolution</BinaryText>
                </h3>
                <CyberpunkCard className="p-4">
                  <p className="text-foreground/80 font-mono text-sm mb-3">
                    Next-generation features and revolutionary capabilities
                  </p>
                  <ul className="text-foreground/70 font-mono text-xs space-y-2">
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> Decentralized AI Governance
                    </li>
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> Predictive Network Optimization
                    </li>
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> Universal Protocol Standard
                    </li>
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> Shojo 2.0 Infrastructure
                    </li>
                  </ul>
                  <div className="mt-3">
                    <span className="text-xs font-mono text-neon-blue">FUTURE - Q2 2024</span>
                  </div>
                </CyberpunkCard>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
