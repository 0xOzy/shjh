import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import TerminalWindow from "@/components/TerminalWindow";
import CyberpunkCard from "@/components/CyberpunkCard";
import alexAvatar from "@/assets/team-alex.svg";
import miaAvatar from "@/assets/team-mia.svg";
import rayAvatar from "@/assets/team-ray.svg";

export default function AboutUs() {
  return (
    <div className="bg-cyberpunk-black min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <BinaryText>About Shojo</BinaryText>
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto font-mono">
            Pioneering the next generation of decentralized protocols with unmatched stability and performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CyberpunkCard className="h-full">
              <h2 className="text-2xl font-display mb-4 text-neon-blue">Our Mission</h2>
              <div className="space-y-4 font-mono">
                <p>
                  Shojo was founded with a clear mission: to create a decentralized protocol that combines unmatched stability, 
                  lightning-fast performance, and AI-powered optimizations for the next generation of digital applications.
                </p>
                <p>
                  We believe in a future where decentralized systems can achieve greater efficiency and stability than traditional 
                  centralized platforms, while maintaining the core values of transparency and user ownership.
                </p>
              </div>
            </CyberpunkCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CyberpunkCard className="h-full">
              <h2 className="text-2xl font-display mb-4 text-neon-blue">Our Vision</h2>
              <div className="space-y-4 font-mono">
                <p>
                  We envision a world where decentralized technology is accessible to everyone, not just technical specialists.
                  Our goal is to create a protocol that bridges the gap between cutting-edge blockchain technology and real-world applications.
                </p>
                <p>
                  Through innovation and dedication to quality, we aim to establish Shojo as the foundation for a new era of 
                  digital interactions - one that values both performance and user autonomy.
                </p>
              </div>
            </CyberpunkCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <TerminalWindow title="Our Values" className="w-full">
            <div className="space-y-6">
              <div>
                <h3 className="text-neon-blue font-mono text-lg">$ ./value --innovation</h3>
                <p className="text-foreground/80 pl-4 border-l border-neon-blue/30 mt-2">
                  Innovation is at our core. We constantly push the boundaries of what's possible in decentralized technology,
                  exploring new approaches to solve complex problems in novel ways.
                </p>
              </div>
              
              <div>
                <h3 className="text-neon-blue font-mono text-lg">$ ./value --reliability</h3>
                <p className="text-foreground/80 pl-4 border-l border-neon-blue/30 mt-2">
                  We believe stability and reliability are non-negotiable. Our protocol is designed with multiple failsafes
                  and redundancies to ensure consistent performance under any circumstances.
                </p>
              </div>
              
              <div>
                <h3 className="text-neon-blue font-mono text-lg">$ ./value --transparency</h3>
                <p className="text-foreground/80 pl-4 border-l border-neon-blue/30 mt-2">
                  Complete transparency in our operations and code is fundamental to building trust. Our protocol is open-source,
                  and we maintain clear communication with our community about all aspects of development.
                </p>
              </div>
              
              <div>
                <h3 className="text-neon-blue font-mono text-lg">$ ./value --community</h3>
                <p className="text-foreground/80 pl-4 border-l border-neon-blue/30 mt-2">
                  We're building for and with our community. User feedback drives our development process, and we strive
                  to create an inclusive ecosystem where everyone can contribute and benefit.
                </p>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-cyberpunk-black via-neon-blue/20 to-cyberpunk-black p-8 rounded-lg border border-neon-blue/30">
            <h2 className="text-2xl font-display mb-6 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-cyberpunk-black/50 rounded-full border-2 border-neon-blue/50 flex items-center justify-center overflow-hidden">
                  <img src={alexAvatar} alt="Alex Satoshi" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-white font-display">Alex Satoshi</h3>
                <p className="text-foreground/70 font-mono text-sm">Founder & Protocol Architect</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-cyberpunk-black/50 rounded-full border-2 border-purple-400/50 flex items-center justify-center overflow-hidden">
                  <img src={miaAvatar} alt="Mia Kusanagi" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-white font-display">Mia Kusanagi</h3>
                <p className="text-foreground/70 font-mono text-sm">AI Research Lead</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-cyberpunk-black/50 rounded-full border-2 border-neon-blue/50 flex items-center justify-center overflow-hidden">
                  <img src={rayAvatar} alt="Ray Takemoto" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-white font-display">Ray Takemoto</h3>
                <p className="text-foreground/70 font-mono text-sm">Security & Systems Engineer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}