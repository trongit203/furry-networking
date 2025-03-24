
# React Native Version of PetConnect

This directory contains React Native components that can be used to build the native mobile version of the PetConnect app. Currently, these components are implemented as web compatible versions for demonstration purposes.

## Important: Current Implementation Limitations

The components in this directory are **mock implementations** that simulate React Native components for web preview purposes. They are NOT actual React Native components that can be used in a native mobile app yet.

## Building a Native Android App with Capacitor

This project is now configured to build a native Android app using Capacitor. Follow these steps to build and run the app:

1. Transfer the project to your own Github repository via the "Export to Github" button.
2. Git pull the project from your own Github repository.
3. Run `npm install` to install the dependencies.
4. Run `npx cap sync` to sync the project to the native platform.
5. Run `npx cap add android` to add the Android platform.
6. Run `npm run build` to build the project.
7. Run `npx cap sync` to sync the built web assets to the Android platform.
8. Run `npx cap open android` to open the project in Android Studio.
9. Build and run the app from Android Studio.

## iOS Support (Future)

For iOS support (coming in the future):
1. Run `npx cap add ios` to add the iOS platform.
2. Run `npx cap open ios` to open the project in Xcode.
3. Build and run the app from Xcode.

**Note:** iOS development requires macOS with Xcode installed.

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
