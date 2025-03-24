import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import CyberpunkCard from "@/components/CyberpunkCard";

export default function Features() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  // Feature data
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Shojo AI Agent",
      description: "Model AI berbasis kognisi yang dirancang untuk memahami dan memproses informasi secara mendalam, melampaui kemampuan model bahasa konvensional dengan pemahaman kontekstual yang lebih kaya.",
      stat: "MODEL VERSION: ",
      statValue: "COGNITIVE v1.3",
      statColor: "text-success"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Private & Secure",
      description: "Sistem DID (Decentralized Identity) dan enkripsi end-to-end yang memastikan anonimitas dalam komunitas AI, melindungi data pribadi sekaligus memungkinkan kolaborasi aman.",
      stat: "SECURITY STATUS: ",
      statValue: "OPTIMAL",
      statColor: "text-success"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Community-Driven Research",
      description: "Kolaborasi terbuka untuk riset AI berbasis prinsip ilmiah. Platform di mana peneliti, akademisi, dan pengembang dapat bertukar ide dan berkontribusi pada kemajuan AI kognitif.",
      stat: "ACTIVE RESEARCHERS: ",
      statValue: "100+",
      statColor: "text-success"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Decentralized AI Development",
      description: "Menerapkan metode pengembangan AI tanpa ketergantungan pada satu entitas pusat, memungkinkan inovasi yang lebih cepat dan konsensus yang lebih demokratis tentang arah penelitian.",
      stat: "NODES: ",
      statValue: "Distributed",
      statColor: "text-success"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13-12a17.926 17.926 0 001.87 8M9 6l3 1m0 0l3-1m-3 1v7.5M9 18l3-1m0 0l3 1m-3-1v-7.5" />
        </svg>
      ),
      title: "Biological Neural Models",
      description: "Arsitektur AI yang terinspirasi biologi, dikembangkan untuk meniru aspek-aspek kognisi manusia seperti memori semantik, intuisi, dan pembelajaran adaptif untuk pemahaman yang lebih mendalam.",
      stat: "MODEL ACCURACY: ",
      statValue: "93.7%",
      statColor: "text-success"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Open Research Platform",
      description: "Platform yang menyediakan alat, data, dan sumber daya untuk penelitian AI kognitif, dengan fitur publikasi, peer review, dan reproduksi hasil penelitian untuk transparansi dan kemajuan kolektif.",
      stat: "PAPERS PUBLISHED: ",
      statValue: "42",
      statColor: "text-success"
    }
  ];
  
  return (
    <section id="features" className="py-20 relative bg-cyberpunk-black">
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            <BinaryText className="text-white">Core </BinaryText>
            <BinaryText className="text-neon-blue">Features</BinaryText>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto my-4"></div>
          <p className="text-foreground max-w-2xl mx-auto font-mono">
            Cutting-edge capabilities that set Shojo apart from conventional protocols
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <CyberpunkCard className="p-6 h-full flex flex-col">
                <div className="text-neon-blue mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-display text-white">
                  <BinaryText>{feature.title}</BinaryText>
                </h3>
                <p className="text-foreground/80 font-mono text-sm flex-grow">
                  {feature.description}
                </p>
                <div className="pt-4 mt-auto">
                  <span className="text-xs font-mono text-neon-blue">
                    {feature.stat}<span className={feature.statColor}>{feature.statValue}</span>
                  </span>
                </div>
              </CyberpunkCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
