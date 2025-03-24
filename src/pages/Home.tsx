
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import PetCard from '@/components/UI/PetCard';
import { Avatar } from '@/components/ui/avatar'; // Fixed import case
import AnimatedLogo from '@/components/UI/AnimatedLogo';

interface Post {
  id: string;
  username: string;
  avatarSrc: string;
  timestamp: string;
  content: string;
  imageSrc?: string;
  likes: number;
  comments: number;
  shares: number;
  location?: string;
  liked?: boolean;
}

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulate loading posts from an API
    const timer = setTimeout(() => {
      setPosts([
        {
          id: '1',
          username: 'Max the Golden',
          avatarSrc: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=362&auto=format&fit=crop',
          timestamp: '2 hours ago',
          content: 'Just enjoying the sunny day at the park! 🌞 Anyone else love running through the grass?',
          imageSrc: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=776&auto=format&fit=crop',
          likes: 142,
          comments: 23,
          shares: 5,
          location: 'Central Park',
          liked: false
        },
        {
          id: '2',
          username: 'Luna the Cat',
          avatarSrc: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=773&auto=format&fit=crop',
          timestamp: '5 hours ago',
          content: 'Nap time is the best time. Don\'t disturb please! 😴',
          imageSrc: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?q=80&w=735&auto=format&fit=crop',
          likes: 89,
          comments: 12,
          shares: 1,
          liked: true
        },
        {
          id: '3',
          username: 'Buddy the Pug',
          avatarSrc: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=735&auto=format&fit=crop',
          timestamp: 'Yesterday',
          content: 'Had my first training session today! My human was so proud of me. I got extra treats!',
          likes: 67,
          comments: 8,
          shares: 0,
          liked: false
        },
        {
          id: '4',
          username: 'Charlie the Parrot',
          avatarSrc: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=734&auto=format&fit=crop',
          timestamp: '2 days ago',
          content: 'Learning to say "I love Pet Social" 🦜 It\'s my new favorite phrase!',
          imageSrc: 'https://images.unsplash.com/photo-1501720804996-ae418d1ba820?q=80&w=773&auto=format&fit=crop',
          likes: 121,
          comments: 32,
          shares: 14,
          location: 'Home Sweet Home',
          liked: false
        },
      ]);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
          <AnimatedLogo size="sm" />
          
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            <Avatar 
              src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=2670&auto=format&fit=crop" 
              alt="Your profile" 
              size="sm" 
            />
          </div>
        </div>
      </motion.header>

      {/* Stories */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="pt-4 px-4 mb-4 overflow-x-auto flex gap-3 max-w-md mx-auto hide-scrollbar"
      >
        <div className="flex-shrink-0 w-16 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center bg-secondary">
            <span className="text-primary text-xl">+</span>
          </div>
          <span className="text-xs mt-1 text-muted-foreground">Add</span>
        </div>
        
        {['Max', 'Luna', 'Buddy', 'Charlie', 'Daisy'].map((name, i) => (
          <div key={i} className="flex-shrink-0 w-16 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-muted overflow-hidden border-2 border-primary p-0.5">
              <img 
                src={`https://images.unsplash.com/photo-${1510000000 + i * 10000}?q=80&w=100&auto=format&fit=crop`} 
                alt={name} 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/150?text=${name.charAt(0)}`;
                }}
              />
            </div>
            <span className="text-xs mt-1 truncate w-full text-center">{name}</span>
          </div>
        ))}
      </motion.div>

      {/* Post Feed */}
      <div className="max-w-md mx-auto px-4 space-y-5">
        {loading ? (
          // Skeleton loader
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-card animate-pulse rounded-xl overflow-hidden shadow-sm border border-border">
              <div className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-muted rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-24"></div>
                    <div className="h-2 bg-muted rounded w-16"></div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-3 bg-muted rounded w-full"></div>
                  <div className="h-3 bg-muted rounded w-4/5"></div>
                </div>
                <div className="aspect-[4/3] bg-muted rounded-lg mb-4"></div>
                <div className="flex justify-between pt-3 border-t border-border">
                  <div className="h-4 bg-muted rounded w-16"></div>
                  <div className="h-4 bg-muted rounded w-16"></div>
                  <div className="h-4 bg-muted rounded w-16"></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          posts.map((post) => (
            <PetCard key={post.id} {...post} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
