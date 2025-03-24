
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, PlusSquare, ShoppingBag, UserCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const tabs = [
  { 
    path: '/', 
    label: 'Home', 
    icon: Home 
  },
  { 
    path: '/explore', 
    label: 'Explore', 
    icon: Search 
  },
  { 
    path: '/create', 
    label: 'Create', 
    icon: PlusSquare,
    isAction: true
  },
  { 
    path: '/marketplace', 
    label: 'Shop', 
    icon: ShoppingBag 
  },
  { 
    path: '/profile', 
    label: 'Profile', 
    icon: UserCircle 
  }
];

export const BottomNavigation = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-border">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full relative",
                tab.isAction ? "mt-[-20px]" : ""
              )}
            >
              {tab.isAction ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white p-3 rounded-full shadow-lg"
                >
                  <tab.icon size={20} />
                </motion.div>
              ) : (
                <>
                  <tab.icon 
                    size={20} 
                    className={cn(
                      "transition-colors",
                      activeTab === tab.path 
                        ? "text-primary" 
                        : "text-muted-foreground"
                    )} 
                  />
                  
                  <span 
                    className={cn(
                      "text-xs mt-1 transition-colors",
                      activeTab === tab.path 
                        ? "text-primary font-medium" 
                        : "text-muted-foreground"
                    )}
                  >
                    {tab.label}
                  </span>
                  
                  {activeTab === tab.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 w-1/2 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
