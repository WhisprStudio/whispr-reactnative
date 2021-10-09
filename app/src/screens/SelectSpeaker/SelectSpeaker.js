import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Card from '@components/Card.js';
import Toast from 'react-native-toast-message';

export const SelectSpeaker = () => {
    const triggerErrorToast = () => Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Pairing to your speaker failed.'
    });
    return (
      <>
          <View style={{marginBottom: 20}}>
                <ScrollView>
                    <Card onPress={triggerErrorToast} text="Speaker Name" source={require('../../../assets/portable.png')}/>
                    <Card text="Speaker Name" source={require('../../../assets/pro.png')}/>
                    <Card text="Speaker Name" source={require('../../../assets/portable.png')}/>
                    <Card text="Speaker Name" source={require('../../../assets/pro.png')}/>
                    <Card text="Speaker Name" source={require('../../../assets/pro.png')}/>
                    <Card text="Speaker Name" source={require('../../../assets/portable.png')}/>
                    <Card text="Speaker Name" source={require('../../../assets/pro.png')}/>
                    <Card text="Speaker Name" source={require('../../../assets/portable.png')}/>
                </ScrollView>
            </View>
      </>
    );
}
