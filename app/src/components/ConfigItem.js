import * as React from "react";
import { useState } from 'react';
import { Text, View, TouchableOpacity, Modal} from 'react-native';
import EditConfig from "../../assets/svg/EditConfig.js";
import CloseIcon from "../../assets/svg/CloseIcon.js";
import EditConfigModal from "./EditConfigModal.js";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {theme} from "@theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function ConfigItem(props) {

    var status = <Text></Text>;
    let label = <Text></Text>;
    const [statusState, setStatusState] = useState(false);

    if (statusState === false) {
        label = <Text style={styles.textConfig}>{props.title}</Text>;
        status = <Text style={styles.statusUnactive}> unactive</Text>;
    } else if (statusState === true) {
        label = <Text style={styles.textConfig, styles.textActive}>{props.title}</Text>;
        status = <Text style={styles.statusActive}> active</Text>;
    }

    const [editModal, setEditModal] = useState(false);

    return (<GestureRecognizer onSwipeRight={(state) => setStatusState(!statusState)}>
    <View style={{marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 5}}>
    <EditConfigModal editModal={editModal} setEditModal={setEditModal} title={props.title}/>
    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <View>
            {label}
            <View style={{flexDirection: "row", marginLeft: 10}}>
                <Text style={styles.subtextConfig}>status:</Text>
                {status}
            </View>
        </View>
        <View style={{flexDirection: "row"}}>
        <TouchableOpacity style={{marginRight: 15}} onPress={() => setEditModal(true)}>
            <EditConfig />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            AsyncStorage.removeItem(props.title);
            props.remove(true);
        }}>
              <CloseIcon />
        </TouchableOpacity>
        </View>
    </View>
        <View style={styles.line}></View>
    </View></GestureRecognizer>);
}

const styles = {
    line: {
       marginTop: 10,
       marginBottom: 10,
       borderBottomColor: theme.colors.gray,
       borderBottomWidth: 1,
    },
    textConfig: {
        marginLeft: 10,
        fontSize: 17,
        fontFamily: theme.fonts.secondary.semiBold,
        color: theme.colors.gray,
    },
    textActive: {
        marginLeft: 10,
        fontSize: 17,
        fontFamily: theme.fonts.secondary.semiBold,
        color: theme.colors.white,
    },
    subtextConfig: {
                fontSize: 15,
                fontFamily: theme.fonts.secondary.thinItalic,
                color: theme.colors.gray,
    },
    statusUnactive: {
                fontSize: 15,
                fontFamily: theme.fonts.secondary.thinItalic,
                color: theme.colors.lightRed
    },
    statusActive: {
                fontSize: 15,
                fontFamily: theme.fonts.secondary.thinItalic,
                color: theme.colors.yellow,
    },

};
