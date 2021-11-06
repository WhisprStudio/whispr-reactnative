import * as React from 'react';
import {ImageBackground} from 'react-native';
import {RootNavigator} from '@navigation';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
      <>
        <ImageBackground style={{width: "100%", height: "100%",}} source={require('./assets/bg.png')} resizeMode="cover">
          <RootNavigator/>
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </ImageBackground>
      </>
  );
}
