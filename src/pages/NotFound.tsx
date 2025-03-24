
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, PawPrint } from "lucide-react";

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-background"
    >
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            <PawPrint size={64} className="text-muted-foreground" />
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
              ?
            </div>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Page Not Found
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-muted-foreground mb-8"
        >
          Oops! It looks like the page you're looking for has wandered off.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 px-5 rounded-lg font-medium transition-all hover:bg-primary/90 mx-auto w-full max-w-xs"
          >
            <ChevronLeft size={18} />
            Return to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
