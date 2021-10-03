import * as React from "react";
import { useState } from 'react';
import { Text, View, TouchableOpacity, Modal} from 'react-native';
import AddConfig from "../../assets/svg/AddConfig.js";
import EditConfigModal from "./EditConfigModal.js";

export default function AddConfigItem(props) {

    var status = <View />;
    switch (props.status) {
        case 0:
            status = <Text style={styles.statusFailed}> unactive</Text>;
            break;
        case 1:
            status = <Text style={styles.statusSuccess}> active</Text>;
            break;
        default:
            break;
    }

    const [editModal, setEditModal] = useState(false);

    return (<View style={{marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 5}}>
    <EditConfigModal editModal={editModal} setEditModal={setEditModal} title={props.title}/>
    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <View>
            <Text style={styles.textConfig}>Add Configuration</Text>
            <View style={{flexDirection: "row", marginLeft: 10}}>
                <Text style={styles.subtextConfig}>status:</Text>
                {status}
            </View>
        </View>
        <View style={{flexDirection: "row"}}>
        <TouchableOpacity style={{marginRight: 15}} onPress={() => setEditModal(true)}>
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
       borderBottomColor: '#AFAFAF',
       borderBottomWidth: 1,
    },
    textConfig: {
        marginLeft: 10,
        fontSize: 17,
        fontFamily: "Barlow-Italic",
        color: "#AFAFAF",
    },
    subtextConfig: {
                fontSize: 15,
                fontFamily: "Barlow-ThinItalic",
                color: "#AFAFAF",
    },
    statusFailed: {
                fontSize: 15,
                fontFamily: "Barlow-ThinItalic",
                color: "#E55B5B",
    },
    statusSuccess: {
                fontSize: 15,
                fontFamily: "Barlow-ThinItalic",
                color: "#FFD500",
    },

};