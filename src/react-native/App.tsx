
import React from 'react';
// Using a mock implementation since we can't install react-native
const SafeAreaView = ({ style, children }) => (
  <div style={{ ...style, padding: '20px' }}>{children}</div>
);

const View = ({ style, children }) => (
  <div style={style}>{children}</div>
);

const Text = ({ style, children }) => (
  <span style={style}>{children}</span>
);

const StyleSheet = {
  create: (styles) => styles
};

// Import our components
import ExploreScreen from './screens/ExploreScreen';

// Note: This is a placeholder for the React Native navigation.
// In a real app, you would use react-navigation to handle navigation between screens.
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ExploreScreen />
      <View style={styles.bottomNav}>
        <Text style={styles.navText}>Home</Text>
        <Text style={{...styles.navText, ...styles.activeNav}}>Explore</Text>
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#e5e7eb',
    paddingTop: '10px',
    paddingBottom: '10px',
    backgroundColor: '#ffffff',
  },
  navText: {
    fontSize: '12px',
    color: '#6b7280',
  },
  activeNav: {
    color: '#3b82f6',
    fontWeight: 'bold',
  },
});

export default App;
