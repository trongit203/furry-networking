
// This file redirects to the shadcn Avatar component
import { Avatar as ShadcnAvatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  border?: boolean;
  online?: boolean;
  ring?: boolean;
  animated?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  className,
  border = false,
  online = false,
  ring = false,
  animated = false
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const onlineSizes = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4'
  };

  const WrapperComponent = animated ? motion.div : 'div';
  const animationProps = animated ? {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.2 }
  } : {};

  return (
    <WrapperComponent 
      className={cn('relative', className)} 
      {...animationProps}
    >
      <ShadcnAvatar
        className={cn(
          sizeClasses[size],
          border && 'border-2 border-background',
          ring && 'ring-2 ring-primary/30',
          className
        )}
      >
        <AvatarImage 
          src={src} 
          alt={alt}
          className="object-cover"
        />
        <AvatarFallback>
          {alt.charAt(0).toUpperCase()}
        </AvatarFallback>
      </ShadcnAvatar>
      
      {online && (
        <span className={cn(
          'absolute bottom-0 right-0 block rounded-full bg-green-500',
          onlineSizes[size],
          border && 'border-2 border-background'
        )}>
          <span className="animate-ping-sm absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        </span>
      )}
    </WrapperComponent>
  );
};

export default Avatar;
