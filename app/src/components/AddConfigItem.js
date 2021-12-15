import * as React from "react";
import { useState } from 'react';
import { Text, View, TouchableOpacity, Modal} from 'react-native';
import {theme} from "@theme/index";
import AddConfig from "../../assets/svg/AddConfig.js";
import EditConfigModal from "./EditConfigModal.js";

export default function AddConfigItem(props) {

    const [editModal, setEditModal] = useState(false);
    const [volume, setVolume] = useState(props.volume);
    const [noiseCanceling, setNoiseCanceling] = useState(props.noiseCanceling);

    return (<View style={{marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 5}}>
    <EditConfigModal update={props.update} editModal={editModal} setEditModal={setEditModal} title={props.title} volume={volume} noiseCanceling={noiseCanceling}/>
    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <View>
            <Text style={styles.titleAddConfig}>Add Configuration</Text>
        </View>
        <View style={{flexDirection: "row"}}>
        <TouchableOpacity onPress={() => setEditModal(true)}>
            <AddConfig />
        </TouchableOpacity>
        </View>
    </View>
        <View style={styles.line}></View>
    </View>);
}

const styles = {
    line: {
       marginTop: 10,
       marginBottom: 10,
       borderBottomColor: theme.colors.gray,
       borderBottomWidth: 1,
    },
    titleAddConfig: {
        marginLeft: 10,
        fontSize: 17,
        fontFamily: theme.fonts.secondary.semiBoldItalic,
        color: theme.colors.gray,
    },
};
