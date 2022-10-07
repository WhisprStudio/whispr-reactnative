import * as React from "react";
import {useEffect, useState} from "react";
// import Slider from "@react-native-community/slider";
import {Slider} from '@miblanchard/react-native-slider';

import {View, Text} from "react-native";
import {theme} from "@theme";

export default function CustomSlider(props) {
const [givenValue, setGivenValue] = useState(props.value)

  useEffect(() => {
    if ( props?.value ) {
      setGivenValue(props?.value)
    }
  }, [props?.value]);

  return (
  <View style={{ padding: 20, }}>
      <Text style={styles.text}>{props.title}</Text>
      <Slider
        animateTransitions={true}
        onValueChange={(value) => {props.setValue ? props.setValue(value ): console.log("error")}}
        value={givenValue}
        trackStyle={{
          borderRadius: 10,
          height: 15,
          backgroundColor: theme.colors.gray,
        }}
        thumbTintColor={theme.colors.white}
        thumbStyle={{
          height: 0,
          width: 0,
        }}
        minimumTrackTintColor={theme.colors.yellow}
        maximumValue={100}
      />
    </View>
  );
}

const styles = {
    text: {
        fontSize: 20,
        color: theme.colors.white,
        fontFamily: theme.fonts.primary.normal,
   },
};
