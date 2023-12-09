import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppNavigation from './navigation/appNavigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    'BebasNeue-Regular': require('./assets/fonts/BebasNeue-Regular.ttf'),
  });

  // State to check if the fonts are loaded
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    // Check if fonts are loaded
    if (fontsLoaded) {
      // Fonts are loaded, update the state
      setIsFontLoaded(true);
    }
  }, [fontsLoaded]);

  if (!isFontLoaded) {
    // Fonts are still loading
    return null;
  }

  // Fonts loaded, render the main component of your app
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
