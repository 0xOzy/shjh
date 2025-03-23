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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Ultra-Fast Processing",
      description: "Our proprietary algorithm achieves sub-millisecond transaction speeds through parallel processing and optimized network pathways, enabling real-time applications previously thought impossible.",
      stat: "PERFORMANCE: ",
      statValue: "4.3ms average",
      statColor: "text-success"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Decentralized Stability",
      description: "Built on a globally distributed network of nodes, Shojo maintains unwavering stability even during major network disruptions. Our mesh architecture ensures no single point of failure exists.",
      stat: "NODES ACTIVE: ",
      statValue: "10,234",
      statColor: "text-success"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "AI-Powered Security",
      description: "Our advanced AI security system monitors network activity in real-time, identifying and neutralizing threats before they can impact performance. Enhanced with quantum-resistant encryption protocols.",
      stat: "SECURITY STATUS: ",
      statValue: "OPTIMAL",
      statColor: "text-success"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Cross-Chain Compatibility",
      description: "Seamlessly integrate with all major blockchain networks through our universal adapter system. Shojo bridges disparate networks, enabling frictionless data and value transfer across ecosystems.",
      stat: "CHAINS SUPPORTED: ",
      statValue: "17",
      statColor: "text-success"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Dynamic Scalability",
      description: "Automatically scales resources based on network demand, ensuring consistent performance during peak usage. Our elastic infrastructure expands and contracts without manual intervention.",
      stat: "CURRENT LOAD: ",
      statValue: "28%",
      statColor: "text-success"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Developer Toolkit",
      description: "Comprehensive SDK with intuitive APIs and smart contract templates enables rapid development. Build and deploy secure applications in a fraction of the time required by traditional methods.",
      stat: "API RESPONSE: ",
      statValue: "2.1ms",
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
