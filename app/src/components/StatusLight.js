import * as React from "react";
import Slider from "@react-native-community/slider";
import {View, Text} from "react-native";

export default function StatusLight(props) {

  return (
    <View style={{
        backgroundColor: props.color || "#E55B5B",
        height: 15,
        width: 15,
        marginRight: 10,
        borderRadius: 15,
    }}>
    </View>
  );
}
