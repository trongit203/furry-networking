import React from 'react';

// Mock React Native components for web preview
const View = ({ style, children }) => (
  <div style={style}>{children}</div>
);

const Image = ({ source, style, defaultSource }) => (
  <img src={source.uri || defaultSource} style={style} alt="Avatar" />
);

const StyleSheet = {
  create: (styles) => styles
};

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
        style={{
          ...styles.avatarContainer, 
          width: dimensionSize, 
          height: dimensionSize,
          borderWidth: border ? '2px' : '0',
        }}
      >
        <Image 
          source={{ uri: src }} 
          style={styles.avatarImage}
          defaultSource="/placeholder.svg"
        />
      </View>
      
      {online && (
        <View 
          style={{
            ...styles.onlineIndicator, 
            width: onlineDotSize, 
            height: onlineDotSize,
            borderWidth: border ? '2px' : '0',
          }}
        >
          <View style={styles.pulseDot}>{/* Empty children to satisfy type */}</View>
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
    borderRadius: '9999px',
    overflow: 'hidden',
    borderColor: '#ffffff',
    borderStyle: 'solid',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
  },
  fallback: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#10b981',
    borderRadius: '9999px',
    borderColor: '#ffffff',
    borderStyle: 'solid',
    zIndex: 10,
  },
  pulseDot: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '9999px',
    backgroundColor: 'rgba(16, 185, 129, 0.7)',
    zIndex: 5,
  }
});

export default ProfileAvatar;
