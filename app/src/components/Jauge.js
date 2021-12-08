import * as React from "react";
import Slider from "@react-native-community/slider";
import {View, Text} from "react-native";

export default function Jauge(props) {

    const size = props.percentage;
  return (
  <>
    <View style={styles.textContainer}>
        <Text style={styles.textLeft}>Noise Cancelation</Text>
        <Text style={styles.textRight}>{parseInt(props.percentage)}%</Text>
    </View>
    <View style={{
        backgroundColor: "#B7B4A5",
        height: 15,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        borderRadius: 15,
    }}>
        <View style={{
            backgroundColor: "#FFD500",
            height: 15,
            width: `${size}%`,
            borderRadius: 15,
        }}>

        </View>
    </View>
  </>
  );
}

const styles = {
    textContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 20,
        marginRight: 20,
        alignItems: "flex-end",
    },
    textLeft: {
        color: "#fff",
        fontFamily: "Cubano",
   },
   textRight: {
           color: "#fff",
           fontFamily: "Cubano",
           fontSize: 40,
   },
};
