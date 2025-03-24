
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  Settings, 
  MapPin, 
  Calendar, 
  Edit3, 
  Grid, 
  Bookmark, 
  Heart 
} from 'lucide-react';
import Avatar from '@/components/UI/Avatar';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'posts' | 'saved' | 'liked'>('posts');
  
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
          <div className="flex items-center">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <h1 className="font-medium ml-1">Profile</h1>
          </div>
          
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </motion.header>

      {/* Profile Info */}
      <div className="max-w-md mx-auto pt-6 px-4">
        <div className="flex items-center justify-between mb-6">
          <Avatar 
            src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=2670&auto=format&fit=crop" 
            alt="Your profile" 
            size="xl" 
            ring
          />
          
          <div className="flex-1 ml-5">
            <div className="flex items-center gap-6 justify-around">
              <div className="text-center">
                <div className="font-semibold">32</div>
                <div className="text-xs text-muted-foreground">Posts</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">184</div>
                <div className="text-xs text-muted-foreground">Followers</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">215</div>
                <div className="text-xs text-muted-foreground">Following</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-bold text-lg">Sarah & Max</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Pet lover | Max's Human 🐕 | Dog trainer
          </p>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <div className="flex items-center">
              <MapPin size={12} className="mr-1" />
              <span>San Francisco</span>
            </div>
            <div className="flex items-center">
              <Calendar size={12} className="mr-1" />
              <span>Joined May 2022</span>
            </div>
          </div>
          
          <button className="w-full bg-secondary text-secondary-foreground font-medium py-2 rounded-lg transition-all hover:bg-secondary/80 flex items-center justify-center">
            <Edit3 size={16} className="mr-2" />
            Edit Profile
          </button>
        </div>
        
        {/* Pet Profiles Section */}
        <div className="mb-6">
          <h4 className="font-medium text-sm mb-3">My Pets</h4>
          <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex-shrink-0 w-16 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center bg-secondary">
                <span className="text-primary text-xl">+</span>
              </div>
              <span className="text-xs mt-1 text-muted-foreground">Add Pet</span>
            </div>
            
            <div className="flex-shrink-0 w-16 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-border p-0.5">
                <img 
                  src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=776&auto=format&fit=crop" 
                  alt="Max" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-xs mt-1">Max</span>
            </div>
            
            <div className="flex-shrink-0 w-16 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-border p-0.5">
                <img 
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=773&auto=format&fit=crop" 
                  alt="Luna" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-xs mt-1">Luna</span>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-border">
          <div className="flex">
            <button 
              onClick={() => setActiveTab('posts')}
              className={`flex-1 flex justify-center py-3 relative ${
                activeTab === 'posts' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              <Grid size={18} />
              {activeTab === 'posts' && (
                <motion.div 
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                />
              )}
            </button>
            
            <button 
              onClick={() => setActiveTab('saved')}
              className={`flex-1 flex justify-center py-3 relative ${
                activeTab === 'saved' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              <Bookmark size={18} />
              {activeTab === 'saved' && (
                <motion.div 
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                />
              )}
            </button>
            
            <button 
              onClick={() => setActiveTab('liked')}
              className={`flex-1 flex justify-center py-3 relative ${
                activeTab === 'liked' ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              <Heart size={18} />
              {activeTab === 'liked' && (
                <motion.div 
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                />
              )}
            </button>
          </div>
        </div>
        
        {/* Content based on active tab */}
        <div className="py-4">
          {activeTab === 'posts' && (
            <div className="grid grid-cols-3 gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="aspect-square bg-muted rounded-md overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1510000000 + i * 10000}?q=80&w=200&auto=format&fit=crop`} 
                    alt={`Post ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/200';
                    }}
                  />
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'saved' && (
            <div className="text-center py-8">
              <div className="text-muted-foreground">No saved posts yet</div>
            </div>
          )}
          
          {activeTab === 'liked' && (
            <div className="grid grid-cols-3 gap-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="aspect-square bg-muted rounded-md overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1520000000 + i * 10000}?q=80&w=200&auto=format&fit=crop`} 
                    alt={`Liked post ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/200';
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
