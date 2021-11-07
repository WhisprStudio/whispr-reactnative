import * as React from 'react';
import {useEffect, useState} from "react";
//ts-ignore
import {Text, View, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Panel from "../../pages/panel/Panel.js";
import CustomSlider from '@components/CustomSlider';
import ConfigItem from "@components/ConfigItem.js";
import AddConfigItem from "@components/AddConfigItem.js";
import {storeData, getData} from "@components/../dataStore/UtilsData.js";

export const Home = ({navigation}) => {

  return (
  <>
  <View style={{height: "100%"}}>
       <Image style={{marginTop: "5%", marginLeft: "5%", marginBottom: "10%", width: 100, height: 50}} source={require('../../../assets/logo.png')}/>
      <CustomSlider title="Volume" />
      <CustomSlider title="Noise Canceling" />
      <ScrollView>
      <ConfigItem title={"work config"} status={false}/>
      <ConfigItem title={"outdoor config"} status={true}/>
      <ConfigItem title={"music config"} status={false}/>
      <AddConfigItem />
      </ScrollView>
  </View>
  <Panel source={require('../../../assets/portable.png')} speakerName={"Speaker Name"} />
  </>
  );
}
