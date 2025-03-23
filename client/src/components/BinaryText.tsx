import { useState, useRef, useCallback, ReactNode } from "react";
import { motion } from "framer-motion";
import { randomBinary } from "@/lib/utils";

interface BinaryTextProps {
  children: ReactNode;
  className?: string;
  duration?: number;
}

export default function BinaryText({ 
  children, 
  className = "", 
  duration = 300 
}: BinaryTextProps) {
  const [displayText, setDisplayText] = useState<ReactNode>(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const originalTextRef = useRef<ReactNode>(children);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const textContent = typeof children === 'string' 
    ? children 
    : String(children);
  
  const handleMouseEnter = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    originalTextRef.current = children;
    
    const binaryLength = textContent.length;
    setDisplayText(randomBinary(binaryLength));
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setDisplayText(originalTextRef.current);
      setIsAnimating(false);
    }, duration);
  }, [children, duration, isAnimating, textContent]);
  
  return (
    <motion.span
      className={`${className} inline-block`}
      onMouseEnter={handleMouseEnter}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {displayText}
    </motion.span>
  );
}
