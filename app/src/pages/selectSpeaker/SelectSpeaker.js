import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Card from '../../components/Card.js';
import Panel from "../panel/Panel.js";

export default function SelectSpeaker() {
    return (
      <>
          <Panel source={require('../../../assets/portable.png')} speakerName={"Speaker Name"} />
          <ScrollView>
          <Card text="Speaker Name" source={require('../../../assets/portable.png')}/>
          <Card text="Speaker Name" source={require('../../../assets/pro.png')}/>
          <Card text="Speaker Name" source={require('../../../assets/portable.png')}/>
          <Card text="Speaker Name" source={require('../../../assets/pro.png')}/>
          <Card text="Speaker Name" source={require('../../../assets/pro.png')}/>
          <Card text="Speaker Name" source={require('../../../assets/portable.png')}/>
          <Card text="Speaker Name" source={require('../../../assets/pro.png')}/>
          <Card text="Speaker Name" source={require('../../../assets/portable.png')}/>
          </ScrollView>
      </>
    );
}
