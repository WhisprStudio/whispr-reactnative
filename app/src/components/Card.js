import * as React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default function Card(props) {
    return (<TouchableOpacity style={styles.container} onPress={props.onPress}>
        <View style={styles.subContainer}>
                <Text style={styles.text}>{props.text}</Text>
                <Image style={styles.imageContainer} source={props.source}></Image>
        </View>
    </TouchableOpacity>);
}

const styles = {
  container: {
    zIndex: 100,
    borderRadius: 15,
    backgroundColor: '#272727',
    alignItems: 'center',
    margin: 10,
    height: 150,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "Cubano",
  },
  subContainer: {
    flex: 1,
    width: 350,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  imageContainer: {
     width: 100,
     height: 100,
  }
};