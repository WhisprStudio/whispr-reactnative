import {Modal, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {theme} from '@theme';

export function Popup(props) {
    return <Modal
        animationType="slide"
        transparent={true}
        visible={props.editModal}
    >
        <View style={{ alignItems: "center", backgroundColor: "#222222", width: "100%", height: "90%", position: "absolute", bottom: 0, borderTopLeftRadius: 15, borderTopRightRadius: 15,}}>
            <Text style={styles.title}>Success !</Text>
            <Text style={styles.title}>You are now connected to {props.device?.name}!</Text>
            <View style={{width: "90%", marginTop: "10%"}}>
            </View>
            <View>
                <TouchableOpacity style={{marginRight: 5}} onPress={() => {
                    props.setEditModal(false)
                    props.navigation.navigate('Home', {deviceName: props.device?.name, isConnected: props.device.isConnected()});
                }}>
                    <Text style={{fontFamily: theme.fonts.primary.normal, fontSize: 25, color: "#fff", marginTop: 30, backgroundColor: "#FFD500", borderRadius: 15, paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20}}>GO HOME</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
}


const styles = {
    title: {
        marginTop: "15%",
        fontFamily: theme.fonts.primary.normal,
        fontSize: 27,
        color: "#fff",
    },
    textInput: {
        color: "#fff",
        borderBottomColor: theme.colors.gray,
        borderBottomWidth: 1,
        width: "60%",
        fontFamily: theme.fonts.primary.normal,
        fontSize: 25,
        marginTop: 30,
        marginLeft: 15,
    },
};
