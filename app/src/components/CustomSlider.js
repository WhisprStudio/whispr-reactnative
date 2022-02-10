import * as React from "react";
import {useEffect, useState} from "react";
import Slider from "@react-native-community/slider";
import {View, Text} from "react-native";
import {theme} from "@theme";

export default function CustomSlider(props) {
const [givenValue, setGivenValue] = useState(props.value)

  useEffect(() => {
    if ( props.newValue ) {
      setGivenValue(props?.newValue)
    }
  }, [props?.newValue]);



  return (
  <View>
            <Text style={styles.text}>{props.title}</Text>
            <Slider style={{height: 40, margin: 0, padding: 0}} onValueChange={(value) => {props.setValue ? props.setValue(value): console.log("error")}} value={givenValue} minimumValue={0} maximumValue={100} minimumTrackTintColor={theme.colors.yellow} thumbTintColor={"#fff"}/>
    </View>
  );
}

const styles = {
    text: {
        paddingLeft: 15,
        fontSize: 20,
        color: "#fff",
        fontFamily: theme.fonts.primary.normal,
   },
};
