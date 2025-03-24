import React, { useState } from 'react';

// Mock React Native components for web preview
const View = ({ style, children }) => (
  <div style={style}>{children}</div>
);

const Text = ({ style, children }) => (
  <span style={style}>{children}</span>
);

const Image = ({ source, style, resizeMode }) => (
  <img 
    src={source.uri} 
    style={{ ...style, objectFit: resizeMode === 'cover' ? 'cover' : 'contain' }} 
    alt="Post" 
  />
);

const TouchableOpacity = ({ style, onPress, children }) => (
  <button 
    style={{ ...style, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
    onClick={onPress}
  >
    {children}
  </button>
);

const StyleSheet = {
  create: (styles) => styles
};

// Import our components
import ProfileAvatar from './ProfileAvatar';

// We'll use a placeholder for the icons since we can't directly use Lucide React
// In a real app, you'd use react-native-vector-icons or another icon library
const IconPlaceholder = ({ name }) => (
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
        <TouchableOpacity style={{}} onPress={() => {}}>
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
          <Text style={isLiked ? {...styles.actionText, ...styles.likedText} : styles.actionText}>
            {likeCount}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
          <IconPlaceholder name="Comment" />
          <Text style={styles.actionText}>{comments}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
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
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    marginBottom: '16px',
    padding: '16px',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userMeta: {
    marginLeft: '8px',
  },
  username: {
    fontWeight: '600',
    fontSize: '16px',
    color: '#1f2937',
  },
  metaRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  timestamp: {
    fontSize: '12px',
    color: '#6b7280',
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    fontSize: '14px',
    color: '#1f2937',
    marginBottom: '12px',
    lineHeight: '20px',
  },
  imageContainer: {
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '12px',
    aspectRatio: '4/3',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#f3f4f6',
    paddingTop: '12px',
    marginTop: '4px',
  },
  actionButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontSize: '14px',
    color: '#6b7280',
    marginLeft: '4px',
  },
  likedText: {
    color: '#ef4444',
  },
  iconPlaceholder: {
    width: '24px',
    height: '24px',
    backgroundColor: '#e5e7eb',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '4px',
  },
  iconText: {
    fontSize: '10px',
    fontWeight: 'bold',
  },
});

export default PetCard;
