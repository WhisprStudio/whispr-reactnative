import * as React from "react";
import { useState } from 'react';
import {theme} from '@theme';
import { Text, View, TouchableOpacity, Modal, TextInput} from 'react-native';
import CustomSlider from './CustomSlider';

export default function EditConfigModal(props) {
    return (
    <Modal
            animationType="slide"
            transparent={true}
            visible={props.editModal}
          >
          <View style={{ alignItems: "center", backgroundColor: "#222222", width: "100%", height: "90%", position: "absolute", bottom: 0, borderTopLeftRadius: 15, borderTopRightRadius: 15,}}>
                <Text style={styles.title}>Configuration</Text>
                <View style={{width: "90%", marginTop: "10%"}}>
                    <TextInput defaultValue={props.title ? props.title : "CONFIG NAME"} style={styles.textInput}> </TextInput>
                </View>
                <View style={{width: "90%", marginTop: "10%"}}>
                    <CustomSlider title="Volume" />
                    <CustomSlider title="Noise Canceling" />
                </View>
                <View style={{widht: "100%", flexDirection: "row",}}>
                    <TouchableOpacity style={{marginRight: 5}} onPress={() => {props.setEditModal(false)}}>
                      <Text style={{fontFamily: theme.fonts.primary.normal, fontSize: 25, color: "#fff", marginTop: 30, backgroundColor: "#FFD500", borderRadius: 15, paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20}}>SAVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 5}} onPress={() => {props.setEditModal(false)}}>
                      <Text style={{fontFamily: theme.fonts.primary.normal, fontSize: 25, color: "#fff", marginTop: 30, backgroundColor: "#E55B5B", borderRadius: 15, paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20}}>CANCEL</Text>
                    </TouchableOpacity>
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
       borderBottomColor: '#AFAFAF',
       borderBottomWidth: 1,
       width: "60%",
       fontFamily: theme.fonts.primary.normal,
       fontSize: 25, color: "#fff",
       marginTop: 30,
       marginLeft: 15
    },
};
