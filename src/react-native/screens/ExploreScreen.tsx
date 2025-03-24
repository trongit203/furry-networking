
import React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
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
      horizontal
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[
            styles.categoryChip,
            index === 0 && styles.activeCategory
          ]}
        >
          <Text
            style={[
              styles.categoryText,
              index === 0 && styles.activeCategoryText
            ]}
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
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
  },
  categoriesContainer: {
    marginBottom: 8,
  },
  categoriesList: {
    paddingHorizontal: 12,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f3f4f6',
    borderRadius: 9999,
    marginHorizontal: 4,
  },
  activeCategory: {
    backgroundColor: '#3b82f6',
  },
  categoryText: {
    fontSize: 14,
    color: '#6b7280',
  },
  activeCategoryText: {
    color: '#ffffff',
    fontWeight: '500',
  },
  listContent: {
    padding: 16,
  },
});

export default ExploreScreen;
