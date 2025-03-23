import { useState, useRef, useCallback, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { randomBinary } from "@/lib/utils";

interface BinaryTextProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  changeToComingSoon?: boolean;
  triggerOnLoad?: boolean;
}

export default function BinaryText({ 
  children, 
  className = "", 
  duration = 300,
  changeToComingSoon = false,
  triggerOnLoad = false
}: BinaryTextProps) {
  const [displayText, setDisplayText] = useState<ReactNode>(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasChangedToComingSoon, setHasChangedToComingSoon] = useState(false);
  const originalTextRef = useRef<ReactNode>(children);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const textContent = typeof children === 'string' 
    ? children 
    : String(children);
  
  const animateText = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    originalTextRef.current = children;
    
    const binaryLength = textContent.length;
    setDisplayText(randomBinary(binaryLength));
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      if (changeToComingSoon && !hasChangedToComingSoon) {
        setDisplayText("Coming Soon");
        setHasChangedToComingSoon(true);
      } else {
        setDisplayText(originalTextRef.current);
      }
      setIsAnimating(false);
    }, duration);
  }, [children, duration, isAnimating, textContent, changeToComingSoon, hasChangedToComingSoon]);
  
  // If triggerOnLoad is true, animate on component mount
  useEffect(() => {
    if (triggerOnLoad) {
      animateText();
    }
  }, [triggerOnLoad, animateText]);
  
  return (
    <motion.span
      className={`${className} inline-block`}
      onMouseEnter={changeToComingSoon && hasChangedToComingSoon ? undefined : animateText}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {displayText}
    </motion.span>
  );
}
