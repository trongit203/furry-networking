
# React Native Version of PetConnect

This directory contains React Native components that can be used to build the native mobile version of the PetConnect app. Currently, these components are implemented as web compatible versions for demonstration purposes.

## Important: Current Implementation Limitations

The components in this directory are **mock implementations** that simulate React Native components for web preview purposes. They are NOT actual React Native components that can be used in a native mobile app yet.

## To Create a Real React Native App

To build an actual React Native application, you need to:

1. Install React Native CLI or use Expo:
   ```bash
   npx react-native@latest init PetConnectApp
   # or with Expo
   npx create-expo-app PetConnectApp
   ```

2. Copy and adapt these components to use actual React Native components:
   - Replace our mock components with real React Native imports
   - Properly convert the styles to React Native StyleSheet objects
   - Use React Native's platform-specific features

3. Install required dependencies:
   - react-native
   - react-native-vector-icons (for icons)
   - react-navigation (for navigation)
   - etc.

## Component Structure

- `App.tsx`: The entry point for the React Native application
- `components/`: Reusable UI components
  - `ProfileAvatar.tsx`: Avatar component for user profiles
  - `PetCard.tsx`: Card component for displaying pet posts
- `screens/`: Screen components that represent full pages
  - `ExploreScreen.tsx`: The explore feed screen

## Next Steps for Complete Migration

1. Set up a proper React Native project using React Native CLI or Expo
2. Replace the mock components with real React Native components
3. Use platform-specific APIs for things like navigation, images, etc.
4. Test on Android and iOS devices or emulators

## Style Conversion Guide

When converting these components to real React Native:

1. Replace HTML-like tags with React Native components:
   - `div` → `View`
   - `span`, `p`, `h1`-`h6` → `Text`
   - `img` → `Image`
   - `button` → `TouchableOpacity` or `Pressable`
   - `input` → `TextInput`

2. Convert CSS styles to React Native StyleSheet objects:
   - No CSS units (px, em, etc.) - use numbers instead
   - No shorthand properties (e.g., `padding: 10px 20px` → `paddingVertical: 10, paddingHorizontal: 20`)
   - Camel case for property names (e.g., `background-color` → `backgroundColor`)
