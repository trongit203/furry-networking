
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@/components/UI/Avatar';

const categories = [
  "Dogs", "Cats", "Birds", "Fish", "Small Pets", "Reptiles", "Trainers", "Vets", "Events"
];

const petProfiles = [
  {
    id: '1',
    name: 'Max',
    type: 'Golden Retriever',
    location: 'San Francisco',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=362&auto=format&fit=crop',
    following: false
  },
  {
    id: '2',
    name: 'Luna',
    type: 'British Shorthair',
    location: 'New York',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=773&auto=format&fit=crop',
    following: true
  },
  {
    id: '3',
    name: 'Charlie',
    type: 'Macaw Parrot',
    location: 'Miami',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=734&auto=format&fit=crop',
    following: false
  },
  {
    id: '4',
    name: 'Buddy',
    type: 'Pug',
    location: 'Chicago',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=735&auto=format&fit=crop',
    following: false
  },
  {
    id: '5',
    name: 'Daisy',
    type: 'Border Collie',
    location: 'Seattle',
    image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=749&auto=format&fit=crop',
    following: true
  },
  {
    id: '6',
    name: 'Oscar',
    type: 'Goldfish',
    location: 'Boston',
    image: 'https://images.unsplash.com/photo-1520316750891-7039da0f2746?q=80&w=847&auto=format&fit=crop',
    following: false
  }
];

const Explore = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [profiles, setProfiles] = useState(petProfiles);
  
  const toggleFollow = (id: string) => {
    setProfiles(prev => 
      prev.map(profile => 
        profile.id === id 
          ? { ...profile, following: !profile.following }
          : profile
      )
    );
  };
  
  const filteredProfiles = activeCategory
    ? profiles.filter(profile => profile.type.includes(activeCategory))
    : profiles;
  
  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search pets, breeds, locations..."
              className="w-full pl-10 pr-4 py-2 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Filter size={16} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Categories */}
      <div className="pt-3 pb-2 max-w-md mx-auto px-4">
        <div className="overflow-x-auto flex gap-2 hide-scrollbar pb-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm ${
              activeCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-muted-foreground'
            }`}
          >
            All
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Pet Profiles */}
      <div className="max-w-md mx-auto px-4 mt-4">
        <h2 className="text-lg font-medium mb-4">
          {activeCategory ? `${activeCategory} Profiles` : 'Recommended Profiles'}
        </h2>
        
        <div className="space-y-4">
          {filteredProfiles.map(profile => (
            <motion.div
              key={profile.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between bg-card rounded-xl p-3 border border-border"
            >
              <div className="flex items-center">
                <Avatar 
                  src={profile.image} 
                  alt={profile.name} 
                  size="md"
                  className="mr-3"
                />
                
                <div>
                  <h3 className="font-medium">{profile.name}</h3>
                  <div className="text-sm text-muted-foreground">{profile.type}</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <MapPin size={10} className="mr-0.5" />
                    <span>{profile.location}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => toggleFollow(profile.id)}
                className={`text-xs font-medium py-1.5 px-3 rounded-full transition-colors ${
                  profile.following
                    ? 'bg-secondary text-muted-foreground'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                {profile.following ? 'Following' : 'Follow'}
              </button>
            </motion.div>
          ))}
        </div>
        
        {/* Trending Posts Grid */}
        <h2 className="text-lg font-medium mt-8 mb-4">Trending Posts</h2>
        <div className="grid grid-cols-2 gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl overflow-hidden bg-muted relative">
              <img 
                src={`https://images.unsplash.com/photo-${1510000000 + i * 20000}?q=80&w=400&auto=format&fit=crop`} 
                alt={`Trending post ${i + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/400';
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <div className="text-white text-sm font-medium line-clamp-1">
                  {["Max's beach adventure", "Luna napping in the sun", "Charlie learning new words", "Buddy's first training day"][i]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
