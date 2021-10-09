import * as React from "react";
import Slider from "@react-native-community/slider";
import {View, Text} from "react-native";
import {theme} from '@theme';

export default function StatusLight(props) {

  return (
    <View style={{
        backgroundColor: props.color || theme.colors.lightRed,
        height: 15,
        width: 15,
        marginRight: 10,
        borderRadius: 15,
    }}>
    </View>
  );
}
