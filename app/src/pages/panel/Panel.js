import * as React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import Card from '../../components/Card.js'
import Jauge from '../../components/Jauge.js';
import StatusLight from "../../components/StatusLight.js";
import { SwipeablePanel } from 'rn-swipeable-panel';
import { useState } from 'react';

export default function Panel(props) {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: false,
    showCloseButton: false,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
  });
  const [isPanelActive, setIsPanelActive] = useState(true);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };
    return (
        <SwipeablePanel {...panelProps} style={styles.panel} isActive={isPanelActive}>
            <View style={styles.panelContainer}>
            <View>
                <View style={styles.speakerNameContainer}>
                    <StatusLight color={"#29872F"} />
                    <Text style={styles.connectedText}>connected to </Text>
                </View>
                <Text style={styles.speakerName}>{props.speakerName}</Text>
            </View>
                <Image style={styles.imageContainer} source={props.source}></Image>
            </View>
            <Jauge percentage={55} />
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