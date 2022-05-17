import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, Pressable} from "react-native";
import { CardBluetooth } from "@components/Bluetooth/CardBluetooth";
import {theme} from "@theme";


export const BluetoothSelect = ({scanAndConnect, device}) => {
    const [selectDevice, setSelectDevice] = useState(false);
    const wireless1 = require('../../../assets/portable.png')
    const wireless2 = require('../../../assets/pro.png')

    useEffect(() => {

    }, []);

    const findMySpeaker = () => {
        scanAndConnect();
        setSelectDevice(null);
    };

    return (
        <View>
            <Image style={styles.image} source={require('../../../assets/logo.png')}/>
            {!selectDevice ?
            <Text display={false} style={styles.text}>SELECT YOUR SPEAKER</Text> : <View style={styles.text}></View>}
            <CardBluetooth imageSrc={wireless1} wirelessName={'Portable V1'} select={selectDevice} setSelect={setSelectDevice}/>
            <CardBluetooth imageSrc={wireless2} wirelessName={'Salon V1'} select={selectDevice} setSelect={setSelectDevice}/>
            <Pressable
                style={selectDevice ? styles.buttonSelected : styles.button}
                onPress={findMySpeaker}
            >
                <Text style={selectDevice ? styles.textButtonSelected : styles.textButton}>FIND MY SPEAKER</Text>
            </Pressable>

            {
                device ? device.isConnected() ? <Text style={{fontSize: 30}}>connected to {device.name}</Text>: <></> : <></>
            }
        </View>
    );
};

const styles = {
    image: {
        marginTop: theme.spaces.normal,
        marginLeft: theme.spaces.normal,
        marginBottom: theme.spaces.normal,
        width: 100,
        height: 50
    },
    text: {
        textAlign: 'right',
        fontSize: theme.sizes.title,
        height: 60,
        padding: theme.spaces.normal,
        color: theme.colors.gray
    },
    textButton: {
        fontSize: theme.sizes.big,
        fontWeight: 'bold',
        padding: 20,
        marginLeft: "auto",
        marginRight: "auto",
        color: theme.colors.gray,
    },
    textButtonSelected: {
        fontSize: theme.sizes.big,
        fontWeight: 'bold',
        padding: 20,
        marginLeft: "auto",
        marginRight: "auto",
        color: theme.colors.yellow,
    },
    button: {
        width: '85%',
        borderColor: theme.colors.gray,
        borderWidth: 5,
        borderRadius: 15,
        marginTop: '10%',
        marginLeft: "auto",
        marginRight: "auto",
    },
    buttonSelected: {
        width: '85%',
        borderColor: theme.colors.yellow,
        borderWidth: 5,
        borderRadius: 15,
        marginTop: '10%',
        marginLeft: "auto",
        marginRight: "auto",
    },
};
