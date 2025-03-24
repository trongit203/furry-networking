
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ShoppingBag, Star, Heart, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  "Food", "Toys", "Accessories", "Grooming", "Health", "Training", "Services", "Adoption"
];

const products = [
  {
    id: '1',
    name: 'Premium Dog Food',
    category: 'Food',
    price: 49.99,
    rating: 4.8,
    reviews: 126,
    image: 'https://images.unsplash.com/photo-1589924691666-f179113c01b6?q=80&w=360&auto=format&fit=crop',
    favorite: false
  },
  {
    id: '2',
    name: 'Interactive Cat Toy',
    category: 'Toys',
    price: 24.99,
    rating: 4.5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=360&auto=format&fit=crop',
    favorite: true
  },
  {
    id: '3',
    name: 'Stylish Pet Collar',
    category: 'Accessories',
    price: 19.99,
    rating: 4.7,
    reviews: 52,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=360&auto=format&fit=crop',
    favorite: false
  },
  {
    id: '4',
    name: 'Pet Grooming Brush',
    category: 'Grooming',
    price: 14.99,
    rating: 4.6,
    reviews: 74,
    image: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=360&auto=format&fit=crop',
    favorite: false
  },
  {
    id: '5',
    name: 'Pet Health Supplements',
    category: 'Health',
    price: 34.99,
    rating: 4.4,
    reviews: 63,
    image: 'https://images.unsplash.com/photo-1585436499546-440a95200ca9?q=80&w=360&auto=format&fit=crop',
    favorite: true
  },
  {
    id: '6',
    name: 'Dog Training Leash',
    category: 'Training',
    price: 29.99,
    rating: 4.9,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=360&auto=format&fit=crop',
    favorite: false
  }
];

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [productList, setProductList] = useState(products);
  
  const toggleFavorite = (id: string) => {
    setProductList(prev => 
      prev.map(product => 
        product.id === id 
          ? { ...product, favorite: !product.favorite }
          : product
      )
    );
  };
  
  const filteredProducts = activeCategory
    ? productList.filter(product => product.category === activeCategory)
    : productList;
  
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
              placeholder="Search products, services..."
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

      {/* Featured banner */}
      <div className="max-w-md mx-auto px-4 mt-4">
        <div className="relative rounded-xl overflow-hidden h-36 bg-gradient-to-r from-primary/20 to-accent/30 mb-6">
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div className="flex items-center text-xs px-2 py-1 bg-black/20 text-white self-start rounded-full backdrop-blur-sm">
              <ShoppingBag size={12} className="mr-1" />
              Featured Deal
            </div>
            
            <div>
              <h3 className="text-lg font-bold">Summer Sale</h3>
              <p className="text-sm opacity-90 mb-2">Up to 40% off on pet essentials</p>
              <button className="text-xs bg-white text-primary font-medium py-1 px-3 rounded-full">
                Shop Now
              </button>
            </div>
          </div>
          
          <div className="absolute right-0 bottom-0 w-24 h-24 opacity-80">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="rgba(255, 255, 255, 0.5)" d="M46.2,-60.1C59.2,-54.3,68.8,-40,70.2,-25.1C71.7,-10.2,64.9,5.3,58.2,19.5C51.5,33.7,44.8,46.6,34.2,51.9C23.5,57.3,8.8,55.1,-3,52.8C-14.9,50.5,-23.8,48.1,-31.5,43C-39.1,37.8,-45.5,29.9,-51.5,20.1C-57.5,10.3,-63.1,-1.5,-62,-12.3C-60.9,-23.1,-52.9,-32.9,-43.1,-39.6C-33.2,-46.3,-21.3,-49.8,-8.4,-52.7C4.5,-55.5,18.1,-57.6,29.3,-58.2C40.6,-58.8,48.4,-57.8,46.2,-60.1Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-lg font-medium mb-4">
          {activeCategory ? `${activeCategory}` : 'Popular Products'}
        </h2>
        
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map(product => (
            <motion.div
              key={product.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-xl overflow-hidden border border-border flex flex-col"
            >
              <div className="relative aspect-square bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/200';
                  }}
                />
                
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={cn(
                    "absolute top-2 right-2 p-1.5 rounded-full",
                    product.favorite 
                      ? "bg-white/90 text-red-500" 
                      : "bg-black/20 text-white/90 backdrop-blur-sm"
                  )}
                >
                  <Heart size={16} className={product.favorite ? "fill-current" : ""} />
                </button>
              </div>
              
              <div className="p-3 flex-1 flex flex-col">
                <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
                <h3 className="font-medium line-clamp-1">{product.name}</h3>
                
                <div className="flex items-center mt-1 mb-2">
                  <Star size={12} className="text-amber-400 fill-current" />
                  <span className="text-xs ml-1">{product.rating}</span>
                  <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                </div>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="font-semibold flex items-center">
                    <DollarSign size={14} />
                    {product.price}
                  </div>
                  
                  <button className="text-xs bg-secondary hover:bg-secondary/80 py-1 px-2 rounded-full transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
