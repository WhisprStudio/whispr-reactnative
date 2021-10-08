import * as React from "react";
import { useState } from 'react';
import { Text, View, TouchableOpacity, Modal} from 'react-native';
import EditConfig from "../../assets/svg/EditConfig.js";
import CloseIcon from "../../assets/svg/CloseIcon.js";
import EditConfigModal from "./EditConfigModal.js";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {theme} from "@theme";

export default function ConfigItem(props) {

    var status = <View />;
    const [statusState, setStatusState] = useState(false);

    if (statusState === false) {
            status = <Text style={styles.statusFailed}> unactive</Text>;
    } else if (statusState === true) {
            status = <Text style={styles.statusSuccess}> active</Text>;
    }

    const [editModal, setEditModal] = useState(false);

    return (<GestureRecognizer onSwipeRight={(state) => setStatusState(!statusState)}>
    <View style={{marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 5}}>
    <EditConfigModal editModal={editModal} setEditModal={setEditModal} title={props.title}/>
    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <View>
            <Text style={styles.textConfig}>{props.title}</Text>
            <View style={{flexDirection: "row", marginLeft: 10}}>
                <Text style={styles.subtextConfig}>status:</Text>
                {status}
            </View>
        </View>
        <View style={{flexDirection: "row"}}>
        <TouchableOpacity style={{marginRight: 15}} onPress={() => setEditModal(true)}>
            <EditConfig />
        </TouchableOpacity>
        <TouchableOpacity>
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
    subtextConfig: {
                fontSize: 15,
                fontFamily: theme.fonts.secondary.thinItalic,
                color: theme.colors.gray,
    },
    statusFailed: {
                fontSize: 15,
                fontFamily: theme.fonts.secondary.thinItalic,
                color: theme.colors.lightRed
    },
    statusSuccess: {
                fontSize: 15,
                fontFamily: theme.fonts.secondary.thinItalic,
                color: theme.colors.yellow,
    },

};