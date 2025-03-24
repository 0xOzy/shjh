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
                    Mengembangkan fondasi riset AI kognitif dan komunitas pendukungnya
                  </p>
                  <ul className="text-foreground/70 font-mono text-xs space-y-2">
                    <li className="flex items-center">
                      <span className="text-success mr-2">✓</span> Pengembangan Model Dasar Berbasis Kognisi
                    </li>
                    <li className="flex items-center">
                      <span className="text-success mr-2">✓</span> Implementasi Arsitektur DID (Decentralized Identity)
                    </li>
                    <li className="flex items-center">
                      <span className="text-success mr-2">✓</span> Pengaturan Platform Kolaborasi Aman
                    </li>
                    <li className="flex items-center">
                      <span className="text-success mr-2">✓</span> Framework Riset Terbuka
                    </li>
                  </ul>
                  <div className="mt-3 text-right">
                    <span className="text-xs font-mono text-neon-blue">COMPLETED Q2 2024</span>
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
                    Memperluas jangkauan penelitian dan mengembangkan kemampuan model AI kognitif
                  </p>
                  <ul className="text-foreground/70 font-mono text-xs space-y-2">
                    <li className="flex items-center">
                      <span className="text-success mr-2">✓</span> Ekspansi Komunitas Global
                    </li>
                    <li className="flex items-center">
                      <span className="text-success mr-2">✓</span> Pengembangan Model Multimodal
                    </li>
                    <li className="flex items-center">
                      <span className="text-warning mr-2">⟳</span> Pengembangan SDK Peneliti
                    </li>
                    <li className="flex items-center">
                      <span className="text-warning mr-2">⟳</span> Implementasi Sistem Publikasi Terdesentralisasi
                    </li>
                  </ul>
                  <div className="mt-3">
                    <span className="text-xs font-mono text-neon-blue">IN PROGRESS - Q3 2024</span>
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
                    Pengembangan model AI kognitif lanjutan dengan kemampuan adaptasi dan penalaran
                  </p>
                  <ul className="text-foreground/70 font-mono text-xs space-y-2">
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> Sistem Kognitif Adaptif Mandiri
                    </li>
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> Integrasi DID Quantum-Resistant
                    </li>
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> Platform Analitik Riset AI Lanjutan
                    </li>
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> Protokol Self-Repair untuk Model AI
                    </li>
                  </ul>
                  <div className="mt-3 text-right">
                    <span className="text-xs font-mono text-neon-blue">PLANNED - Q4 2024</span>
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
                    Realisasi AGI berbasis kognisi dengan pemahaman kontekstual kompleks dan agensi mandiri
                  </p>
                  <ul className="text-foreground/70 font-mono text-xs space-y-2">
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> Tata Kelola AI Terdesentralisasi
                    </li>
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> Model Kognitif Berbasis Kompleksitas
                    </li>
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> Standar Protokol AI Kognitif Terbuka
                    </li>
                    <li className="flex items-center">
                      <span className="text-foreground/50 mr-2">○</span> Infrastruktur Shojo AGI 2.0
                    </li>
                  </ul>
                  <div className="mt-3">
                    <span className="text-xs font-mono text-neon-blue">FUTURE - Q1 2025</span>
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
