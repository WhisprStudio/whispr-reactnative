import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import SelectSpeaker from './pages/selectSpeaker/SelectSpeaker';

export default function App() {
  const [loaded] = useFonts({
    BarlowBold: require('./assets/fonts/Barlow-Bold.ttf'),
    BarlowItalic: require('./assets/fonts/Barlow-Italic.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SelectSpeaker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
