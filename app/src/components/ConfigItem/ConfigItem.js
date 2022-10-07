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
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity key={'configItem' + props?.index} style={{width: '80%', backgroundColor: theme.colors.black, borderColor: props.index % 2 == 0 ? theme.colors.yellow : null, borderRadius: 15, borderWidth: props.index % 2 == 0 ? 2 : 0, padding: 10, marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 5}}>
          <View style={{}}>
            <EditConfigModal editModal={editModal} update={props.remove} setEditModal={setEditModal} title={props.title} noiseCanceling={props.noiseCanceling} volume={props.volume}/>
            <View style={{ alignItems: 'center', flexDirection: "row", justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20, fontWeight: "bold", color: theme.colors.white}}>
                    {label}
                </Text>
                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: '20%'}}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '70%'}}>
                    <View style={{width: 20, height: 20}}>
                      <SvgSound viewBox="0 -5 25 25" />
                    </View>
                    <Text style={styles.textValue}>{Math.floor(props.volume || 50)}</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '70%'}}>
                    <View style={{width: 20, height: 20}}>
                      <SvgNoiseCancel viewBox="0 0 25 25" />
                    </View>
                    <Text style={styles.textValue}>{Math.floor(props.noiseCanceling || 50)}</Text>
                  </View>
                </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius: 10, width: '8%', backgroundColor: theme.colors.black, marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 5}}>

        </TouchableOpacity>
    </View>
  );
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
        fontSize: 15,
        color: theme.colors.white,
        fontWeight: 'bold',
    },
    textValue: {
      fontSize: 15,
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
