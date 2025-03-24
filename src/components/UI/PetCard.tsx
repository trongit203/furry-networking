
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, MoreHorizontal, MapPin } from 'lucide-react';
import { Avatar } from './Avatar';

interface PetCardProps {
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
  className?: string;
}

export const PetCard = ({
  id,
  username,
  avatarSrc,
  timestamp,
  content,
  imageSrc,
  likes,
  comments,
  shares,
  location,
  liked = false,
  className,
}: PetCardProps) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes);
  const [isImageLoading, setIsImageLoading] = useState(!!imageSrc);
  
  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'bg-card rounded-xl overflow-hidden shadow-sm border border-border',
        className
      )}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <Avatar src={avatarSrc} alt={username} size="md" />
            <div>
              <h3 className="font-medium text-card-foreground">{username}</h3>
              <div className="flex items-center text-xs text-muted-foreground">
                <span>{timestamp}</span>
                {location && (
                  <>
                    <span className="mx-1">•</span>
                    <div className="flex items-center">
                      <MapPin size={12} className="mr-0.5" />
                      <span>{location}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <MoreHorizontal size={20} />
          </button>
        </div>

        <p className="text-sm mb-3 text-card-foreground">{content}</p>

        {imageSrc && (
          <div className="relative rounded-lg overflow-hidden bg-muted mb-3 aspect-[4/3]">
            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                <div className="w-full h-full bg-muted"></div>
              </div>
            )}
            <img
              src={imageSrc}
              alt="Post"
              className="w-full h-full object-cover"
              onLoad={() => setIsImageLoading(false)}
            />
          </div>
        )}

        <div className="flex justify-between mt-4 pt-3 border-t border-border">
          <button 
            className={cn(
              "flex items-center gap-1 text-sm",
              isLiked ? "text-red-500" : "text-muted-foreground hover:text-red-500"
            )}
            onClick={handleLike}
          >
            <Heart 
              size={18} 
              className={cn(isLiked && "fill-current")} 
            />
            <span>{likeCount}</span>
          </button>
          
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle size={18} />
            <span>{comments}</span>
          </button>
          
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Share2 size={18} />
            <span>{shares}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PetCard;
