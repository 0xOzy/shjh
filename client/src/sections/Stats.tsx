import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BinaryText from "@/components/BinaryText";
import TerminalWindow from "@/components/TerminalWindow";
import CyberpunkCard from "@/components/CyberpunkCard";
import { updateWithRandomFluctuation, formatNumber } from "@/lib/utils";
import CyberNetworkSVG from "@/assets/cyber-network.svg";

export default function Stats() {
  // Initial stat values
  const [latency, setLatency] = useState(4.3);
  const [networkLoad, setNetworkLoad] = useState(28);
  const [activeNodes, setActiveNodes] = useState(10234);
  const [threatStatus, setThreatStatus] = useState("No current threats");
  const [isThreatWarning, setIsThreatWarning] = useState(false);
  const [processingPower, setProcessingPower] = useState(16.4);
  const [energyEfficiency, setEnergyEfficiency] = useState(98.7);
  const [dataIntegrity, setDataIntegrity] = useState(100);
  const [aiOptimization, setAiOptimization] = useState(93.4);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  
  // Update stats with random fluctuations
  useEffect(() => {
    const timer = setInterval(() => {
      setLatency(updateWithRandomFluctuation(4.3, 0.05));
      setNetworkLoad(updateWithRandomFluctuation(28, 0.03));
      setActiveNodes(updateWithRandomFluctuation(10234, 0.005));
      setProcessingPower(updateWithRandomFluctuation(16.4, 0.02));
      setEnergyEfficiency(updateWithRandomFluctuation(98.7, 0.01));
      setDataIntegrity(100); // Always 100%
      setAiOptimization(updateWithRandomFluctuation(93.4, 0.01));
      setCurrentTime(new Date().toLocaleTimeString());
      
      // Occasionally change threat status
      if (Math.random() < 0.05) {
        const threatStatuses = [
          "No current threats",
          "Low-level scan detected",
          "Analyzing anomaly",
          "No current threats"
        ];
        const randomIndex = Math.floor(Math.random() * threatStatuses.length);
        setThreatStatus(threatStatuses[randomIndex]);
        setIsThreatWarning(randomIndex !== 0);
      }
    }, 2000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section id="stats" className="py-20 relative bg-cyberpunk-blue">
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            <BinaryText className="text-white">Network </BinaryText>
            <BinaryText className="text-neon-blue">Statistics</BinaryText>
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto my-4"></div>
          <p className="text-foreground max-w-2xl mx-auto font-mono">
            Real-time metrics showcasing Shojo's performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <TerminalWindow title="network_stats.sh" showTime>
              <p className="text-neon-blue mb-2">$ <span className="text-foreground">shojo --monitor --real-time</span></p>
              <p className="text-foreground mb-4">Initializing Shojo Network Monitor v2.04...</p>
              <p className="text-success mb-4">Connection established. Streaming real-time metrics.</p>
              
              <div className="mb-6">
                <p className="text-foreground mb-2">// SYSTEM STATUS</p>
                <p className="mb-1">
                  <span className="text-neon-purple">Network Status:</span> 
                  <span className="text-success">ONLINE</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Current Version:</span> 
                  <span className="text-foreground">v2.04.7</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Uptime:</span> 
                  <span className="text-foreground">342 days, 7 hours, 23 minutes</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Last Maintenance:</span> 
                  <span className="text-foreground">23 days ago</span>
                </p>
              </div>
              
              <div className="mb-6">
                <p className="text-foreground mb-2">// PERFORMANCE METRICS</p>
                <p className="mb-1">
                  <span className="text-neon-purple">Current TPS:</span> 
                  <span className="text-foreground">87,342</span>
                  <span className="text-success ml-2">↑ 3.2%</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Average Latency:</span> 
                  <span className="text-foreground">{latency.toFixed(1)}ms</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Block Time:</span> 
                  <span className="text-foreground">0.8 seconds</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Network Load:</span> 
                  <span className="text-foreground">{networkLoad}%</span>
                </p>
              </div>
              
              <div className="mb-6">
                <p className="text-foreground mb-2">// NETWORK INFRASTRUCTURE</p>
                <p className="mb-1">
                  <span className="text-neon-purple">Active Nodes:</span> 
                  <span className="text-foreground">{formatNumber(activeNodes)}</span>
                  <span className="text-success ml-2">↑ 156</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Geographic Distribution:</span> 
                  <span className="text-foreground">42 countries</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Validator Status:</span> 
                  <span className="text-success">100% operational</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Network Consensus:</span> 
                  <span className="text-foreground">Hybrid PoS/AI Optimization</span>
                </p>
              </div>
              
              <div>
                <p className="text-foreground mb-2">// SECURITY MONITORING</p>
                <p className="mb-1">
                  <span className="text-neon-purple">Security Status:</span> 
                  <span className="text-success">OPTIMAL</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Threat Detection:</span> 
                  <span className={isThreatWarning ? "text-warning" : "text-foreground"}>
                    {threatStatus}
                  </span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Authentication Layer:</span> 
                  <span className="text-foreground">Quantum-resistant encryption</span>
                </p>
                <p className="mb-1">
                  <span className="text-neon-purple">Last Security Update:</span> 
                  <span className="text-foreground">2 days ago</span>
                </p>
              </div>
              
              <p className="text-neon-blue mt-6">$ <span className="cursor-blink text-foreground"></span></p>
            </TerminalWindow>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Network Visualization */}
            <motion.div
              className="col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <CyberpunkCard className="p-6">
                <h3 className="text-xl font-bold mb-4 font-display text-white">
                  <BinaryText>Network Visualization</BinaryText>
                </h3>
                <div className="bg-cyberpunk-black/50 border border-neon-blue/20 rounded-lg p-4 h-64 flex items-center justify-center">
                  <div className="text-center w-full h-full">
                    <p className="text-foreground/70 font-mono text-sm mb-2">Cybernetic Network Visualization</p>
                    <NetworkVisualization />
                  </div>
                </div>
              </CyberpunkCard>
            </motion.div>

            {/* Key Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <CyberpunkCard className="p-4">
                <h4 className="text-md font-bold mb-3 font-display text-white">
                  <BinaryText>Processing Power</BinaryText>
                </h4>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-2xl font-bold font-mono text-neon-blue">{processingPower.toFixed(1)}</span>
                  <span className="text-xs font-mono text-foreground/70">Petaflops</span>
                </div>
                <div className="h-2 bg-cyberpunk-black/70 rounded-full overflow-hidden">
                  <div className="h-full bg-neon-blue rounded-full" style={{ width: '82%' }}></div>
                </div>
                <p className="text-xs font-mono text-foreground/70 mt-2">82% of capacity</p>
              </CyberpunkCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <CyberpunkCard className="p-4">
                <h4 className="text-md font-bold mb-3 font-display text-white">
                  <BinaryText>Energy Efficiency</BinaryText>
                </h4>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-2xl font-bold font-mono text-success">{energyEfficiency.toFixed(1)}</span>
                  <span className="text-xs font-mono text-foreground/70">% Efficient</span>
                </div>
                <div className="h-2 bg-cyberpunk-black/70 rounded-full overflow-hidden">
                  <div className="h-full bg-success rounded-full" style={{ width: `${energyEfficiency}%` }}></div>
                </div>
                <p className="text-xs font-mono text-foreground/70 mt-2">↑ 3.2% from last week</p>
              </CyberpunkCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <CyberpunkCard className="p-4">
                <h4 className="text-md font-bold mb-3 font-display text-white">
                  <BinaryText>Data Integrity</BinaryText>
                </h4>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-2xl font-bold font-mono text-neon-blue">{dataIntegrity}</span>
                  <span className="text-xs font-mono text-foreground/70">% Verified</span>
                </div>
                <div className="h-2 bg-cyberpunk-black/70 rounded-full overflow-hidden">
                  <div className="h-full bg-neon-blue rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-xs font-mono text-foreground/70 mt-2">No integrity issues detected</p>
              </CyberpunkCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <CyberpunkCard className="p-4">
                <h4 className="text-md font-bold mb-3 font-display text-white">
                  <BinaryText>AI Optimization</BinaryText>
                </h4>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-2xl font-bold font-mono text-neon-blue">{aiOptimization.toFixed(1)}</span>
                  <span className="text-xs font-mono text-foreground/70">% Efficiency</span>
                </div>
                <div className="h-2 bg-cyberpunk-black/70 rounded-full overflow-hidden">
                  <div className="h-full bg-neon-blue rounded-full" style={{ width: `${aiOptimization}%` }}></div>
                </div>
                <p className="text-xs font-mono text-foreground/70 mt-2">Self-learning algorithms active</p>
              </CyberpunkCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Network visualization SVG component
function NetworkVisualization() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" fill="#0A0A0A" fillOpacity="0.5"/>
      
      {/* Grid lines */}
      <g opacity="0.2">
        {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map((x, i) => (
          <line key={`vl-${i}`} x1={x} y1="0" x2={x} y2="240" stroke="#00F0FF" strokeWidth="0.5" strokeDasharray="4 4"/>
        ))}
        {[0, 40, 80, 120, 160, 200, 240].map((y, i) => (
          <line key={`hl-${i}`} x1="0" y1={y} x2="400" y2={y} stroke="#00F0FF" strokeWidth="0.5" strokeDasharray="4 4"/>
        ))}
      </g>
      
      {/* Network nodes */}
      {[
        { x: 50, y: 50, size: 6, pulse: 3 },
        { x: 150, y: 70, size: 8, pulse: 4 },
        { x: 250, y: 30, size: 5, pulse: 2.5 },
        { x: 350, y: 80, size: 7, pulse: 3.5 },
        { x: 70, y: 150, size: 7, pulse: 4.5 },
        { x: 200, y: 120, size: 10, pulse: 5 },
        { x: 300, y: 180, size: 6, pulse: 3 },
        { x: 380, y: 200, size: 5, pulse: 2.8 },
      ].map((node, i) => (
        <g key={`node-${i}`}>
          <circle 
            cx={node.x} 
            cy={node.y} 
            r={node.size} 
            fill="#00F0FF" 
            opacity="0.8"
          >
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur={`${node.pulse}s`} repeatCount="indefinite"/>
          </circle>
          <circle 
            cx={node.x} 
            cy={node.y} 
            r={node.size * 2} 
            stroke="#00F0FF" 
            strokeWidth="0.5" 
            fill="none" 
            opacity="0.3"
          >
            <animate attributeName="r" values={`${node.size * 1.5};${node.size * 3};${node.size * 1.5}`} dur={`${node.pulse}s`} repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.5;0;0.5" dur={`${node.pulse}s`} repeatCount="indefinite"/>
          </circle>
        </g>
      ))}
      
      {/* Connection lines */}
      <g opacity="0.6">
        <line x1="50" y1="50" x2="150" y2="70" stroke="#00F0FF" strokeWidth="0.5">
          <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite"/>
        </line>
        <line x1="150" y1="70" x2="250" y2="30" stroke="#00F0FF" strokeWidth="0.5">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite"/>
        </line>
        <line x1="250" y1="30" x2="350" y2="80" stroke="#00F0FF" strokeWidth="0.5">
          <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3.5s" repeatCount="indefinite"/>
        </line>
        <line x1="70" y1="150" x2="200" y2="120" stroke="#00F0FF" strokeWidth="0.5">
          <animate attributeName="opacity" values="0.6;0.1;0.6" dur="4s" repeatCount="indefinite"/>
        </line>
        <line x1="200" y1="120" x2="300" y2="180" stroke="#00F0FF" strokeWidth="0.5">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite"/>
        </line>
        <line x1="300" y1="180" x2="380" y2="200" stroke="#00F0FF" strokeWidth="0.5">
          <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3.5s" repeatCount="indefinite"/>
        </line>
        <line x1="50" y1="50" x2="70" y2="150" stroke="#00F0FF" strokeWidth="0.5">
          <animate attributeName="opacity" values="0.6;0.1;0.6" dur="4.5s" repeatCount="indefinite"/>
        </line>
        <line x1="150" y1="70" x2="200" y2="120" stroke="#00F0FF" strokeWidth="0.5">
          <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3.8s" repeatCount="indefinite"/>
        </line>
        <line x1="250" y1="30" x2="200" y2="120" stroke="#00F0FF" strokeWidth="0.5">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4.2s" repeatCount="indefinite"/>
        </line>
        <line x1="350" y1="80" x2="300" y2="180" stroke="#00F0FF" strokeWidth="0.5">
          <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3.3s" repeatCount="indefinite"/>
        </line>
      </g>
      
      {/* Data packets */}
      {[
        { x1: 50, y1: 50, x2: 150, y2: 70, duration: 3 },
        { x1: 150, y1: 70, x2: 250, y2: 30, duration: 4 },
        { x1: 200, y1: 120, x2: 300, y2: 180, duration: 3 },
        { x1: 70, y1: 150, x2: 200, y2: 120, duration: 4 },
      ].map((packet, i) => (
        <circle key={`packet-${i}`} r="2" fill="#9D4EDD">
          <animateMotion
            path={`M${packet.x1},${packet.y1} L${packet.x2},${packet.y2}`}
            dur={`${packet.duration}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
      
      {/* Binary code text */}
      <g className="font-mono" fontSize="6" opacity="0.7">
        <text x="40" y="40" fill="#00F0FF">01001</text>
        <text x="140" y="60" fill="#00F0FF">10110</text>
        <text x="240" y="20" fill="#00F0FF">11001</text>
        <text x="340" y="70" fill="#00F0FF">01010</text>
        <text x="60" y="140" fill="#00F0FF">10101</text>
        <text x="190" y="110" fill="#00F0FF">11100</text>
        <text x="290" y="170" fill="#00F0FF">00111</text>
        <text x="370" y="190" fill="#00F0FF">10011</text>
      </g>
      
      {/* Central node pulse */}
      <circle cx="200" cy="120" r="20" fill="url(#pulse-gradient)" opacity="0.3">
        <animate attributeName="r" values="15;25;15" dur="5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="5s" repeatCount="indefinite"/>
      </circle>
      
      {/* Gradients */}
      <defs>
        <radialGradient id="pulse-gradient" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
}
