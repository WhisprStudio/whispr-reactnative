import * as React from 'react';
import { View, Text, Image } from "react-native";

export default function SelectSpeaker() {
    return (
        <View style={{backgroundColor: "#25252D", width: "100%", height: "100%"}}>
            <View style={{padding: 10,}}>
                <View style={{width: 80, height: 60, backgroundColor: "#ffa", margin: 20}}>
                </View>
                <View style={{backgroundColor: "#161620", borderRadius: 15, height: "80%", padding: 10}}>
                    <Text style={{fontFamily: 'BarlowBold', fontSize: 30, color: "#fff"}}>Select Your Speaker</Text>
                </View>
            </View>
        </View>
    );
}