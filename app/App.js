import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import SelectSpeaker from './src/pages/selectSpeaker/SelectSpeaker';
import Toast from 'react-native-toast-message';

import Home from './src/pages/home/Home';

export default function App() {
  return (
      <View style={styles.container}>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <ImageBackground style={{width: "100%", height: "100%",}} source={require('./assets/bg.png')} resizeMode="cover">
        <Home />
      </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
  },
});
