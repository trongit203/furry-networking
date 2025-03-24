
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  Image, 
  MapPin, 
  Smile, 
  X, 
  Camera, 
  Users, 
  Tag
} from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const Create = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = () => {
    if (!content && !selectedImage) {
      toast("Please add a caption or an image", {
        description: "Your post can't be empty",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate post creation
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/');
      toast("Post created! 🎉", {
        description: "Your post has been shared with your followers.",
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-background">
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
            <h1 className="font-medium ml-1">Create Post</h1>
          </div>
          
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting || (!content && !selectedImage)}
            className={cn(
              "text-sm font-medium py-1.5 px-4 rounded-full transition-all",
              (isSubmitting || (!content && !selectedImage)) 
                ? "bg-primary/50 text-primary-foreground cursor-not-allowed" 
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-1"></span>
                Posting...
              </span>
            ) : (
              "Post"
            )}
          </button>
        </div>
      </motion.header>

      <div className="max-w-md mx-auto p-4">
        {/* Author info */}
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage 
              src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=2670&auto=format&fit=crop" 
              alt="Your profile" 
            />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <div className="font-medium">Sarah & Max</div>
            <div className="flex gap-2 mt-1">
              <button className="flex items-center text-xs py-1 px-2 bg-secondary rounded-full text-muted-foreground">
                <Users size={12} className="mr-1" />
                Public
              </button>
              <button className="flex items-center text-xs py-1 px-2 bg-secondary rounded-full text-muted-foreground">
                <Tag size={12} className="mr-1" />
                Tag Pets
              </button>
            </div>
          </div>
        </div>
        
        {/* Text input */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your pet's mind?"
          className="w-full border-none bg-transparent outline-none resize-none mb-4 h-20 placeholder:text-muted-foreground"
          disabled={isSubmitting}
        />
        
        {/* Image preview */}
        {selectedImage && (
          <div className="relative mb-4 rounded-xl overflow-hidden bg-muted">
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="w-full object-cover rounded-xl max-h-80"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 p-1 bg-black/60 rounded-full text-white"
              disabled={isSubmitting}
            >
              <X size={16} />
            </button>
          </div>
        )}
        
        {/* Action buttons */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="flex gap-4">
            <label className="flex items-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              <Image size={20} />
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageSelect} 
                className="sr-only"
                disabled={isSubmitting}
              />
            </label>
            
            <button className="text-muted-foreground hover:text-foreground transition-colors" disabled={isSubmitting}>
              <Camera size={20} />
            </button>
            
            <button className="text-muted-foreground hover:text-foreground transition-colors" disabled={isSubmitting}>
              <Smile size={20} />
            </button>
          </div>
          
          <button className="text-muted-foreground hover:text-foreground transition-colors" disabled={isSubmitting}>
            <MapPin size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
