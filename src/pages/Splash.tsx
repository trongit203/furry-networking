
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedLogo from '@/components/UI/AnimatedLogo';

const Splash = () => {
  const navigate = useNavigate();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (animationComplete) {
      const timer = setTimeout(() => {
        navigate('/auth');
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [animationComplete, navigate]);

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/5 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        />
      </div>
      
      {/* Logo and content */}
      <div className="z-10">
        <AnimatedLogo 
          size="lg" 
          onAnimationComplete={() => setAnimationComplete(true)} 
        />
      </div>
    </motion.div>
  );
};

export default Splash;
