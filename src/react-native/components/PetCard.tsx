
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ProfileAvatar from './ProfileAvatar';

// We'll use a placeholder for the icons since we can't directly use Lucide React
// In a real app, you'd use react-native-vector-icons or another icon library
const IconPlaceholder = ({ name }: { name: string }) => (
  <View style={styles.iconPlaceholder}>
    <Text style={styles.iconText}>{name.charAt(0)}</Text>
  </View>
);

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
}: PetCardProps) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes);
  
  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <ProfileAvatar src={avatarSrc} alt={username} size="md" />
          <View style={styles.userMeta}>
            <Text style={styles.username}>{username}</Text>
            <View style={styles.metaRow}>
              <Text style={styles.timestamp}>{timestamp}</Text>
              {location && (
                <>
                  <Text style={styles.timestamp}> • </Text>
                  <View style={styles.locationContainer}>
                    <IconPlaceholder name="Map" />
                    <Text style={styles.timestamp}>{location}</Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <IconPlaceholder name="More" />
        </TouchableOpacity>
      </View>

      <Text style={styles.content}>{content}</Text>

      {imageSrc && (
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: imageSrc }} 
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      )}

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={handleLike}
        >
          <IconPlaceholder name="Heart" />
          <Text style={[
            styles.actionText, 
            isLiked && styles.likedText
          ]}>
            {likeCount}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <IconPlaceholder name="Comment" />
          <Text style={styles.actionText}>{comments}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <IconPlaceholder name="Share" />
          <Text style={styles.actionText}>{shares}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 16,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  userMeta: {
    marginLeft: 8,
  },
  username: {
    fontWeight: '600',
    fontSize: 16,
    color: '#1f2937',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timestamp: {
    fontSize: 12,
    color: '#6b7280',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    fontSize: 14,
    color: '#1f2937',
    marginBottom: 12,
    lineHeight: 20,
  },
  imageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
    aspectRatio: 4/3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    paddingTop: 12,
    marginTop: 4,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actionText: {
    fontSize: 14,
    color: '#6b7280',
  },
  likedText: {
    color: '#ef4444',
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
    backgroundColor: '#e5e7eb',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  iconText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default PetCard;
