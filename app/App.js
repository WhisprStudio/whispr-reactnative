import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectSpeaker from './src/pages/selectSpeaker/SelectSpeaker';
import CustomSlider from './src/components/CustomSlider';

export default function App() {
  return (
      <View style={styles.container}>
        <SelectSpeaker />
        <CustomSlider title="Volume" />
        <CustomSlider title="Noise Canceling" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
  },
});
