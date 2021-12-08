import * as React from 'react';
import { View, Text, Image, Button } from "react-native";
import Card from '@components/Card.js'
import Jauge from '@components/Jauge.js';
import StatusLight from "@components/StatusLight.js";
import { SwipeablePanel } from 'rn-swipeable-panel';
import { useState } from 'react';
import {theme} from "../../theme";

export default function Panel(props) {
  const [isPanelActive, setIsPanelActive] = useState(true);
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: false,
    noBackgroundOpacity: true,
    allowTouchOutside: false,
    showCloseButton: false,
    onClose: () => setIsPanelActive(true),
  });

  const openPanel = () => {
    setIsPanelActive(true);
  };

  return (
        <SwipeablePanel {...panelProps} style={styles.panel} isActive={isPanelActive}>
            <View style={styles.panelContainer}>
            <View>
                <View style={styles.speakerNameContainer}>
                    <StatusLight color={props.isConnected ? "#29872F" : "#E55B5B"} />
                    <Text style={styles.connectedText}>{props.isConnected ? "connected to" : "not connected"}</Text>
                </View>
                {props.deviceName ? <View>
                    <Text style={styles.speakerName}>{props.deviceName}</Text>
                    <Button color={theme.colors.yellow} title={"DISCONNECT"} onPress={() => {props.navigation.navigate('Bluetooth')}} />
                </View>: <Button color={theme.colors.yellow} title={"CONNECT"} onPress={()=> props.navigation.navigate('Bluetooth')}/>}
            </View>
                <Image style={styles.imageContainer} source={props.source}></Image>
            </View>
            <Jauge percentage={props.noiseCanceling} />
        </SwipeablePanel>
    );
}

const styles = {
    speakerNameContainer: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
    },
    panel: {
        backgroundColor: "#353535",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 2.62,

        elevation: 4,
    },
    panelContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 20,
    },
    imageContainer: {
        width: 120,
        height: 120,
  },
    connectedText: {
        color: "#fff",
        fontFamily: "Cubano",
        fontWeight: "200",
    },
    speakerName: {
        color: "#fff",
        fontFamily: "Cubano",
        fontWeight: "200",
        fontSize: 25,
    },
};
