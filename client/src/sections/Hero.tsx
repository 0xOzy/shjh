import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import NeonButton from "@/components/NeonButton";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-cyberpunk-black">
      {/* Overlay for binary background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyberpunk-black via-cyberpunk-blue/40 to-cyberpunk-black z-0"></div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-neon-blue text-xl mb-2 font-mono">// INTRODUCING</h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display text-white">
              <BinaryText className="inline-block">Shojo:</BinaryText>
              <BinaryText className="block mt-2 text-neon-blue">The Future of Stability and Speed</BinaryText>
            </h1>
            <p className="text-foreground mb-8 text-lg font-mono leading-relaxed">
              A next-gen decentralized protocol combining unmatched stability, 
              lightning-fast performance, and AI-powered optimizations.
            </p>
            <div className="flex flex-wrap gap-4">
              <NeonButton href="#get-started" primary>
                Get Started
              </NeonButton>
              <NeonButton href="#about">
                Learn More
              </NeonButton>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 relative animate-float"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Anime character image */}
            <div className="rounded-lg shadow-neon-purple overflow-hidden relative">
              {/* Ganti dengan karakter anime baru */}
              <img src="/assets/anime-character-new.svg" alt="Shojo Anime Character" />
              
              {/* Futuristic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-blue/70 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-cyberpunk-black/70 backdrop-blur-sm border border-neon-blue/30 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-neon-blue font-mono text-xs">SHOJO.AI</span>
                    <h3 className="text-white font-display">AI Protocol v2.04</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-neon-blue font-mono text-sm">
                      ONLINE<span className="cursor-blink">|</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// SVG component for anime character
function AnimeCharacterSVG() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <rect width="400" height="400" fill="#0F172A"/>
      <g opacity="0.6">
        <path d="M50 200 L350 200" stroke="#00F0FF" strokeWidth="0.5" strokeDasharray="5 3"/>
        <path d="M200 50 L200 350" stroke="#00F0FF" strokeWidth="0.5" strokeDasharray="5 3"/>
        <circle cx="200" cy="200" r="150" stroke="#00F0FF" strokeWidth="0.5" strokeDasharray="5 3" fill="none"/>
        <circle cx="200" cy="200" r="100" stroke="#00F0FF" strokeWidth="0.5" fill="none"/>
      </g>
      
      {/* Anime Character - Stylized Female Silhouette */}
      <path d="M200 120 C230 120 250 140 250 180 C250 220 230 260 200 310 C170 260 150 220 150 180 C150 140 170 120 200 120" fill="#9D4EDD" opacity="0.7"/>
      <path d="M200 140 C220 140 235 155 235 185 C235 215 220 250 200 290 C180 250 165 215 165 185 C165 155 180 140 200 140" fill="#00F0FF" opacity="0.4"/>
      
      {/* Face */}
      <circle cx="200" cy="140" r="30" fill="#0F172A" stroke="#00F0FF" strokeWidth="0.5"/>
      <path d="M185 145 C185 145 195 155 200 155 C205 155 215 145 215 145" stroke="#00F0FF" strokeWidth="1.5" fill="none"/>
      
      {/* Eyes */}
      <circle cx="185" cy="135" r="3" fill="#00F0FF"/>
      <circle cx="215" cy="135" r="3" fill="#00F0FF"/>
      
      {/* Hair */}
      <path d="M170 140 C160 120 160 100 180 80 C200 60 220 80 240 80 C260 100 240 120 230 140" fill="#151A2D" stroke="#00F0FF" strokeWidth="0.5"/>
      <path d="M165 140 C150 160 160 200 160 240 C160 280 180 300 165 330" stroke="#151A2D" strokeWidth="3"/>
      <path d="M235 140 C250 160 240 200 240 240 C240 280 220 300 235 330" stroke="#151A2D" strokeWidth="3"/>
      
      {/* Network Nodes */}
      <circle cx="120" cy="100" r="5" fill="#00F0FF" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="280" cy="120" r="5" fill="#00F0FF" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="250" r="5" fill="#00F0FF" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="300" cy="280" r="5" fill="#00F0FF" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3.5s" repeatCount="indefinite"/>
      </circle>
      
      {/* Connection Lines */}
      <path d="M120 100 L200 140" stroke="#00F0FF" strokeWidth="0.5" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite"/>
      </path>
      <path d="M280 120 L200 140" stroke="#00F0FF" strokeWidth="0.5" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite"/>
      </path>
      <path d="M100 250 L160 240" stroke="#00F0FF" strokeWidth="0.5" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.1;0.6" dur="5s" repeatCount="indefinite"/>
      </path>
      <path d="M300 280 L240 240" stroke="#00F0FF" strokeWidth="0.5" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.5s" repeatCount="indefinite"/>
      </path>
      
      {/* Binary Numbers */}
      <text x="90" y="85" fill="#00F0FF" opacity="0.8" fontSize="8" fontFamily="monospace">10101</text>
      <text x="270" y="105" fill="#00F0FF" opacity="0.8" fontSize="8" fontFamily="monospace">01010</text>
      <text x="80" y="265" fill="#00F0FF" opacity="0.8" fontSize="8" fontFamily="monospace">11001</text>
      <text x="290" y="295" fill="#00F0FF" opacity="0.8" fontSize="8" fontFamily="monospace">00110</text>
    </svg>
  );
}
