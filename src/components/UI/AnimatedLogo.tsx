
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PawPrint } from 'lucide-react';

interface AnimatedLogoProps {
  onAnimationComplete?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export const AnimatedLogo = ({ 
  onAnimationComplete, 
  size = 'lg' 
}: AnimatedLogoProps) => {
  const [animationDone, setAnimationDone] = useState(false);
  
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl"
  };
  
  const iconSizes = {
    sm: 24,
    md: 36,
    lg: 64
  };

  useEffect(() => {
    if (animationDone && onAnimationComplete) {
      const timer = setTimeout(() => {
        onAnimationComplete();
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [animationDone, onAnimationComplete]);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          duration: 0.7
        }}
        className="relative mb-3"
      >
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          className="relative z-10"
        >
          <PawPrint 
            size={iconSizes[size]} 
            className="text-primary"
          />
        </motion.div>
        <motion.div 
          className="absolute inset-0 bg-primary/20 rounded-full blur-xl z-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </motion.div>
      
      <motion.h1 
        className={`font-display font-bold ${sizeClasses[size]} text-primary tracking-tight`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onAnimationComplete={() => {
          setAnimationDone(true);
        }}
      >
        Pet Social
      </motion.h1>
      
      <motion.p 
        className="text-muted-foreground text-sm mt-1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Connect with pet lovers
      </motion.p>
    </div>
  );
};

export default AnimatedLogo;
