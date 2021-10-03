import * as React from "react";
import { useState } from 'react';
import { Text, View, TouchableOpacity, Modal} from 'react-native';
import CustomSlider from './CustomSlider';

export default function EditConfigModal(props) {
    return (
    <Modal
            animationType="slide"
            transparent={true}
            visible={props.editModal}
          >
          <View style={{ alignItems: "center", backgroundColor: "#222222", width: "100%", height: "90%", position: "absolute", bottom: 0, borderTopLeftRadius: 15, borderTopRightRadius: 15,}}>
                <Text style={{fontFamily: "Cubano", fontSize: 25, color: "#fff", marginTop: 30}}>{props.title}</Text>
                <View style={{width: "90%", marginTop: "10%"}}>
                    <CustomSlider title="Volume" />
                    <CustomSlider title="Noise Canceling" />
                </View>
                <TouchableOpacity onPress={() => {props.setEditModal(false)}}>
                  <Text style={{fontFamily: "Cubano", fontSize: 25, color: "#fff", marginTop: 30, backgroundColor: "#FFD500", borderRadius: 15, paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20}}>SAVE</Text>
                </TouchableOpacity>
          </View>
      </Modal>
 );
}
