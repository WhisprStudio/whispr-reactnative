import * as React from "react";
import {useEffect, useState} from "react";
import { Button } from 'react-native';
import {theme} from '@theme';
import { Text, View, TouchableOpacity, Modal, TextInput} from 'react-native';
import CustomSlider from './CustomSlider';
import {getData, storeData} from "../dataStore/UtilsData";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EditConfigModal(props) {

    const [volume, setVolume] = useState(50);
    const [noiseCanceling, setNoiseCanceling] = useState(50);
    const [title, setTitle] = useState("CONFIG NAME");

    const saveConfig = async () => {
        console.log("save", title)
        AsyncStorage.removeItem(props.title);
        storeData(title, {name: title, volume: volume, noiseCanceling: noiseCanceling });
    }

    return (
    <Modal
            animationType="slide"
            transparent={true}
            visible={props.editModal}
          >
          <View style={{ alignItems: "center", backgroundColor: "#222222", width: "100%", height: "90%", position: "absolute", bottom: 0, borderTopLeftRadius: 15, borderTopRightRadius: 15,}}>
                <Text style={styles.title}>Configuration</Text>
                <View style={{width: "90%", marginTop: "10%"}}>
                    <TextInput defaultValue={props.title ? props.title : "CONFIG NAME"} onChangeText={(value) => setTitle(value)} style={styles.textInput}> </TextInput>
                </View>
                <View style={{width: "90%", marginTop: "10%"}}>
                    <CustomSlider value={volume} title="Volume" setValue={setVolume} />
                    <CustomSlider value={noiseCanceling} title="Noise Canceling" setValue={setNoiseCanceling} />
                </View>
                <View style={{flexDirection: "row"}}>
                    <Button title={"SAVE"} color={theme.colors.yellow} style={{marginRight: 5}} onPress={() => {
                        props.setEditModal(false);
                        saveConfig();
                    }}>
                    </Button>
                    <Button title={"CANCEL"} color={theme.colors.lightRed} style={{marginLeft: 5}} onPress={() => {props.setEditModal(false)}}>
                    </Button>
                </View>
          </View>
      </Modal>
 );
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
       marginLeft: 15
    },
};
