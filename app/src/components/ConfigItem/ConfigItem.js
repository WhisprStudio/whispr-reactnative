import * as React from "react";
import {useEffect, useState} from 'react';
import { Text, View, TouchableOpacity, Modal} from 'react-native';
import EditConfig from "../../../assets/svg/EditConfig.js";
import CloseIcon from "../../../assets/svg/CloseIcon.js";
import EditConfigModal from "@components/EditConfigModal/EditConfigModal.js";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {theme} from "@theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {storeData} from "@dataStore/UtilsData";
import { SvgNoiseCancel, SvgPoint, SvgSound } from "../../svg";

export function ConfigItem(props) {
    let status = <Text></Text>;
    let label = <Text></Text>;
    const [update, setUpdate] = useState(false);

    if (props.status === false) {
        label = <Text style={styles.textConfig}>{props.title}</Text>
    } else {
        label = <Text style={styles.textConfig && styles.textActive}>{props.title}</Text>
    }


    useEffect(() => {
        if (props.status === false) {
            storeData("activeConfig", {name: props.title, noiseCanceling: props.noiseCanceling, volume: props.volume});
        } else {
            AsyncStorage.removeItem("activeConfig")
        }
        props.remove(true);
    }, [])

    useEffect(() => {
        storeData("activeConfig", {name: props.title, noiseCanceling: props.noiseCanceling, volume: props.volume});
        props.remove(true);
    }, [update])

    const [editModal, setEditModal] = useState(false);

    return (
    <TouchableOpacity key={'configItem' + props?.index}>
      <View style={{marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 5, backgroundColor: theme.colors.black}}>
        <EditConfigModal editModal={editModal} update={props.remove} setEditModal={setEditModal} title={props.title} noiseCanceling={props.noiseCanceling} volume={props.volume}/>
        <View style={{padding: 10, flexDirection: "row", borderColor: theme.colors.yellow, borderRadius: 15, borderWidth: 2, justifyContent: 'space-between'}}>
            <Text style={{fontFamily: theme.fonts.primary.normal, fontSize: 20, fontWeight: "bold", color: theme.colors.white}}>
                {label}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '40%'}}>
              <SvgSound />
              <Text style={styles.textValue}>{Math.floor(props.volume || 50)}</Text>
              <SvgPoint />
              <SvgNoiseCancel />
              <Text style={styles.textValue}>{Math.floor(props.noiseCanceling || 50)}</Text>
            </View>
        </View>
      </View>
    </TouchableOpacity>);
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
        fontSize: 20,
        fontFamily: theme.fonts.primary.normal,
        color: theme.colors.white,
        fontWeight: 'bold',
    },
    textValue: {
      fontSize: 22,
      fontFamily: theme.fonts.primary.normal,
      color: theme.colors.white,
      fontWeight: 'bold',
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
