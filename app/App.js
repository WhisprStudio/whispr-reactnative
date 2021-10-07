import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import SelectSpeaker from './src/pages/selectSpeaker/SelectSpeaker';
import CustomSlider from './src/components/CustomSlider';
import Toast from 'react-native-toast-message';
import ConfigItem from "./src/components/ConfigItem.js";
import AddConfigItem from "./src/components/AddConfigItem.js";

export default function App() {
  return (
      <View style={styles.container}>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <ImageBackground style={{width: "100%", height: "100%",}} source={require('./assets/bg.png')} resizeMode="cover">
        <SelectSpeaker />
        <CustomSlider title="Volume" />
        <CustomSlider title="Noise Canceling" />
        <ScrollView>
        <ConfigItem title={"work config"} status={false}/>
        <ConfigItem title={"outdoor config"} status={true}/>
        <ConfigItem title={"music config"} status={false}/>
        <AddConfigItem />
        </ScrollView>
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
