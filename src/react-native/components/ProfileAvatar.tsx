
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean;
  online?: boolean;
}

export const ProfileAvatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  border = false,
  online = false,
}) => {
  // Size dimensions in pixels
  const sizeDimensions = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64
  };

  const onlineDotSizes = {
    xs: 6,
    sm: 8,
    md: 10,
    lg: 12,
    xl: 16
  };

  const dimensionSize = sizeDimensions[size];
  const onlineDotSize = onlineDotSizes[size];

  return (
    <View style={styles.container}>
      <View 
        style={[
          styles.avatarContainer, 
          { 
            width: dimensionSize, 
            height: dimensionSize,
            borderWidth: border ? 2 : 0,
          }
        ]}
      >
        <Image 
          source={{ uri: src }} 
          style={styles.avatarImage}
          defaultSource={require('../../../public/placeholder.svg')}
        />
      </View>
      
      {online && (
        <View 
          style={[
            styles.onlineIndicator, 
            { 
              width: onlineDotSize, 
              height: onlineDotSize,
              borderWidth: border ? 2 : 0,
            }
          ]}
        >
          <View style={styles.pulseDot} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  avatarContainer: {
    borderRadius: 9999,
    overflow: 'hidden',
    borderColor: '#ffffff',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
  },
  fallback: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#10b981',
    borderRadius: 9999,
    borderColor: '#ffffff',
    zIndex: 10,
  },
  pulseDot: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 9999,
    backgroundColor: 'rgba(16, 185, 129, 0.7)',
    zIndex: 5,
  }
});

export default ProfileAvatar;
