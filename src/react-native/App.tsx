
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ExploreScreen from './screens/ExploreScreen';

// Note: This is a placeholder for the React Native navigation.
// In a real app, you would use react-navigation to handle navigation between screens.
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ExploreScreen />
      <View style={styles.bottomNav}>
        <Text style={styles.navText}>Home</Text>
        <Text style={[styles.navText, styles.activeNav]}>Explore</Text>
        <Text style={styles.navText}>Create</Text>
        <Text style={styles.navText}>Market</Text>
        <Text style={styles.navText}>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  navText: {
    fontSize: 12,
    color: '#6b7280',
  },
  activeNav: {
    color: '#3b82f6',
    fontWeight: 'bold',
  },
});

export default App;
