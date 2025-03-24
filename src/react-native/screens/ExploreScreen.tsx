
import React from 'react';

// Mock React Native components for web preview
const View = ({ style, children }) => (
  <div style={style}>{children}</div>
);

const Text = ({ style, children }) => (
  <span style={style}>{children}</span>
);

const TextInput = ({ style, placeholder, placeholderTextColor }) => (
  <input 
    style={style} 
    placeholder={placeholder}
    className="text-input"
  />
);

const FlatList = ({ data, renderItem, keyExtractor, horizontal, showsHorizontalScrollIndicator, contentContainerStyle }) => {
  return (
    <div style={contentContainerStyle}>
      <div style={{ display: horizontal ? 'flex' : 'block', overflowX: horizontal ? 'auto' : 'visible' }}>
        {data.map((item, index) => (
          <div key={keyExtractor ? keyExtractor(item) : index}>
            {renderItem({ item, index })}
          </div>
        ))}
      </div>
    </div>
  );
};

const TouchableOpacity = ({ style, children, onPress }) => (
  <button 
    style={{ ...style, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
    onClick={onPress}
  >
    {children}
  </button>
);

const SafeAreaView = ({ style, children }) => (
  <div style={style}>{children}</div>
);

const StyleSheet = {
  create: (styles) => styles
};

// Import our components
import PetCard from '../components/PetCard';

// Dummy data for the PetCard components
const DUMMY_POSTS = [
  {
    id: '1',
    username: 'fluffywhiskers',
    avatarSrc: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    timestamp: '1 hour ago',
    content: 'Just adopted this adorable kitten! Any name suggestions? 🐱',
    imageSrc: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    likes: 120,
    comments: 25,
    shares: 5,
    location: 'San Francisco, CA',
  },
  {
    id: '2',
    username: 'barkmaster',
    avatarSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    timestamp: '2 hours ago',
    content: 'Max had the best time at the dog park today! Made so many new friends. 🐶',
    imageSrc: 'https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    likes: 85,
    comments: 14,
    shares: 3,
    location: 'Portland, OR',
  },
  {
    id: '3',
    username: 'pawsandfur',
    avatarSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80',
    timestamp: '5 hours ago',
    content: 'Does anyone have recommendations for pet-friendly cafes in the area?',
    likes: 42,
    comments: 31,
    shares: 1,
  },
];

const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search pets, users, or hashtags..."
          placeholderTextColor="#9ca3af"
        />
      </View>
      
      <View style={styles.categoriesContainer}>
        <ScrollableCategories />
      </View>
      
      <FlatList
        data={DUMMY_POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PetCard
            id={item.id}
            username={item.username}
            avatarSrc={item.avatarSrc}
            timestamp={item.timestamp}
            content={item.content}
            imageSrc={item.imageSrc}
            likes={item.likes}
            comments={item.comments}
            shares={item.shares}
            location={item.location}
          />
        )}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

// Simple horizontal scrollable categories
const ScrollableCategories = () => {
  const categories = ['All', 'Dogs', 'Cats', 'Birds', 'Fish', 'Reptiles', 'Small Pets', 'Advice'];
  
  return (
    <FlatList
      horizontal={true}
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={{
            ...styles.categoryChip,
            ...(index === 0 ? styles.activeCategory : {})
          }}
          onPress={() => {}}
        >
          <Text
            style={{
              ...styles.categoryText,
              ...(index === 0 ? styles.activeCategoryText : {})
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesList}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '12px',
    paddingBottom: '8px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#111827',
  },
  searchContainer: {
    paddingLeft: '16px',
    paddingRight: '16px',
    marginBottom: '16px',
  },
  searchInput: {
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontSize: '14px',
  },
  categoriesContainer: {
    marginBottom: '8px',
  },
  categoriesList: {
    paddingLeft: '12px',
    paddingRight: '12px',
  },
  categoryChip: {
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '8px',
    paddingBottom: '8px',
    backgroundColor: '#f3f4f6',
    borderRadius: '9999px',
    marginLeft: '4px',
    marginRight: '4px',
  },
  activeCategory: {
    backgroundColor: '#3b82f6',
  },
  categoryText: {
    fontSize: '14px',
    color: '#6b7280',
  },
  activeCategoryText: {
    color: '#ffffff',
    fontWeight: '500',
  },
  listContent: {
    padding: '16px',
  },
});

export default ExploreScreen;
