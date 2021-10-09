import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import SelectSpeaker from './src/pages/selectSpeaker/SelectSpeaker';
import Panel from './src/pages/panel/Panel'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Toast from 'react-native-toast-message';

import Home from './src/pages/home/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <View style={styles.container}>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <ImageBackground style={{width: "100%", height: "100%",}} source={require('./assets/bg.png')} resizeMode="cover">
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Panel" component={Panel} options={{source:require('./assets/portable.png'), speakerName: "Speaker Name"}} />
        </Stack.Navigator>
      </NavigationContainer>
        {/* <SelectSpeaker /> */}
        {/* <Home /> */}
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
